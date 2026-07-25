import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_experience",
  title: "List experience",
  description: "List Simon Babouhot's professional experience with highlights and outcomes.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const experience = [
      {
        role: "Product Owner, Digital Customer Space",
        company: "Allianz",
        period: "Since 2021",
        highlights: [
          "End-to-end pilot of a 330,000-user customer space, from discovery to production.",
          "Activation +15 pts: from 50% to 65% of portfolio via adoption-focused redesign.",
          "Digitized claims journey: +60% online submissions, -20% declaration time.",
          "Interface between customer, business and IT — balancing user and employee experience.",
        ],
      },
      {
        role: "Business Developer, Affiliation & E-partnerships",
        period: "2020–2021",
        highlights: [
          "Managed acquisition campaigns: display, affiliation, emailing, SEA.",
          "Performance steering: analysis, continuous optimization, reporting.",
          "Rebuilt communications: campaign kits & assets.",
        ],
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(experience, null, 2) }],
      structuredContent: { experience },
    };
  },
});
