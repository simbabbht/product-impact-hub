import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listExperience from "./tools/list-experience";
import getContact from "./tools/get-contact";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "simon-babouhot-mcp",
  title: "Simon Babouhot — Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Tools to explore Simon Babouhot's portfolio: profile, professional experience, and contact channels.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [getProfile, listExperience, getContact],
});
