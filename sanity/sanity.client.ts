import { createClient, type ClientConfig } from "@sanity/client";
import sanityConfig from "@/sanity.config";

const config: ClientConfig = {
...sanityConfig
};

const client = createClient(config);

export default client;