import { jobSearchPlugin } from "@inploi/plugin-job-search";
import { initialiseSdk } from "@inploi/sdk";

const sdk = initialiseSdk({
  env: "sandbox",
  publishableKey: "pk_edce29b92c2773898c482851",
});

export const jobSearch = sdk.register(
  jobSearchPlugin({
    theme: {
      accent: { hue: 20, chroma: 1.6 },
      highcontrast: false,
      corners: "sharp",
      mode: "dark",
      highlights: "stroke",
      typography: {},
    },
    properties: [
      { key: "title", label: "Job Title", select: "one" },
      { key: "city", label: "Location", select: "one" },
      { key: "company_name", label: "Company Name", select: "one" },
    ],
  })
);
