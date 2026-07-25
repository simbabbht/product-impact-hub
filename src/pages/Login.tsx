import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function safeNext(raw: string | null): string {
  if (!raw) return "/";
  try {
    const decoded = decodeURIComponent(raw);
    // Only allow same-origin, relative paths starting with "/"
    if (decoded.startsWith("/") && !decoded.startsWith("//")) return decoded;
  } catch {
    /* ignore */
  }
  return "/";
}

export default function Login() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const next = safeNext(params.get("next"));
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate(next, { replace: true });
    });
  }, [navigate, next]);

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + next },
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      navigate(next, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + next,
    });
    if (result.error) {
      setError(result.error.message);
      return;
    }
    if (!result.redirected) navigate(next, { replace: true });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 pt-28 pb-16">
        <div className="glass-card w-full max-w-md p-8">
          <h1 className="text-h2 mb-2">{mode === "signin" ? "Sign in" : "Create account"}</h1>
          <p className="text-small text-muted-foreground mb-6">
            {mode === "signin"
              ? "Sign in to continue."
              : "Create an account to continue."}
          </p>

          <button
            type="button"
            onClick={handleGoogle}
            className="btn-secondary w-full justify-center mb-4"
          >
            Continue with Google
          </button>

          <div className="flex items-center gap-3 my-4 text-xs text-muted-foreground">
            <div className="flex-1 h-px bg-border" />
            or
            <div className="flex-1 h-px bg-border" />
          </div>

          <form onSubmit={handleEmail} className="space-y-3">
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-surface-2 border border-border/40 text-foreground"
            />
            <input
              type="password"
              required
              minLength={6}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-surface-2 border border-border/40 text-foreground"
            />
            {error && <p className="text-small text-red-500">{error}</p>}
            <button type="submit" disabled={busy} className="btn-primary w-full justify-center">
              {busy ? "…" : mode === "signin" ? "Sign in" : "Sign up"}
            </button>
          </form>

          <button
            type="button"
            className="mt-4 text-small text-muted-foreground hover:text-foreground w-full text-center"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          >
            {mode === "signin"
              ? "No account? Create one"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
