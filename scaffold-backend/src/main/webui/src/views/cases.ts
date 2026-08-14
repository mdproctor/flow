import { hostPanel } from "@casehubio/pages-ui";
import { registerPanel } from "@casehubio/pages-runtime";
import "@casehubio/blocks-ui-case-explorer";

registerPanel("case-explorer", "blocks-case-explorer");

export const casesView = hostPanel("case-explorer", {
  entityTypes: "all-presets",
  endpoint: "/api/v1",
});
