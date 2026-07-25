import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Return Simon Babouhot's professional profile summary (role, location, focus areas).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Simon Babouhot",
      role: "Product Owner",
      focus: "Digital transformation & customer experience",
      locations: ["Nouvelle-Calédonie", "France"],
      summary:
        "Product Owner with 5+ years of experience (Allianz), bridging product vision, UX, and business operations. Focus on shipping products people actually use — for end customers and the teams that support them.",
      offerings: [
        {
          title: "Product Management",
          items: [
            "Strategic framing (vision, goals, stakeholder alignment)",
            "End-to-end delivery (backlog, user stories, UAT, release)",
            "Performance steering (KPIs, dataviz, adoption)",
          ],
        },
        {
          title: "Process optimization & AI automation",
          items: [
            "Key process analysis",
            "Simple automation systems",
            "ROI-oriented approach",
          ],
        },
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
