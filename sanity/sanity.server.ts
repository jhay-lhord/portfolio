import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: process.env.NODE_ENV === "production",
};

const sanityServer = createClient(config);

export default sanityServer;