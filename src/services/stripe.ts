import Stripe from "stripe";
import ProxyAgent from "https-proxy-agent";
import { version } from "../../package.json";

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: "2020-08-27",
  // httpAgent: ProxyAgent(process.env.http_proxy),
  appInfo: {
    name: "Ignews",
    version,
  },
});
