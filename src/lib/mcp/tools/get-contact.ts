import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact",
  title: "Get contact",
  description: "Return contact channels to reach Simon Babouhot (booking link, site sections).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const contact = {
      booking: "https://calendly.com/simonbabouhot-pro/30min",
      contactSection: "https://simonbabouhot.lovable.app/#contact",
      offerings: {
        productManagement: "/product-owner",
        opsAutomation: "/ops-builder",
      },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
      structuredContent: contact,
    };
  },
});
