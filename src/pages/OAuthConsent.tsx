import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

// Local typed wrapper for the beta supabase.auth.oauth namespace.
type AuthorizationDetails = {
  client?: { name?: string; redirect_uri?: string };
  scope?: string;
  redirect_url?: string;
  redirect_to?: string;
};
type OAuthResult = { data: AuthorizationDetails | null; error: { message: string } | null };
type OAuthApi = {
  getAuthorizationDetails: (id: string) => Promise<OAuthResult>;
  approveAuthorization: (id: string) => Promise<OAuthResult>;
  denyAuthorization: (id: string) => Promise<OAuthResult>;
};
const oauth = (supabase.auth as unknown as { oauth: OAuthApi }).oauth;

export default function OAuthConsent() {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<AuthorizationDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) {
        setError("Missing authorization_id");
        return;
      }
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = "/login?next=" + encodeURIComponent(next);
        return;
      }
      const { data, error } = await oauth.getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (error) {
        setError(error.message);
        return;
      }
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data);
    })();
    return () => {
      active = false;
    };
  }, [authorizationId]);

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const { data, error } = approve
      ? await oauth.approveAuthorization(authorizationId)
      : await oauth.denyAuthorization(authorizationId);
    if (error) {
      setBusy(false);
      setError(error.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("No redirect returned by the authorization server.");
      return;
    }
    window.location.href = target;
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="glass-card w-full max-w-md p-8">
        {error ? (
          <>
            <h1 className="text-h3 mb-2">Authorization error</h1>
            <p className="text-small text-muted-foreground">{error}</p>
          </>
        ) : !details ? (
          <p className="text-muted-foreground">Loading…</p>
        ) : (
          <>
            <h1 className="text-h3 mb-2">
              Connect {details.client?.name ?? "an app"} to your account
            </h1>
            <p className="text-small text-muted-foreground mb-4">
              This lets {details.client?.name ?? "the client"} call this app's tools as you.
            </p>
            <p className="text-xs text-muted-foreground mb-6">
              This does not bypass this app's permissions or backend policies.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                disabled={busy}
                onClick={() => decide(true)}
                className="btn-primary flex-1 justify-center"
              >
                Approve
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={() => decide(false)}
                className="btn-secondary flex-1 justify-center"
              >
                Deny
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
