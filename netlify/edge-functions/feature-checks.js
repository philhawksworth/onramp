import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

import hasFunctions from "./features/functions.js";
import hasRedirects from "./features/redirects.js";

export default async (request, context) => {

  // get the next HTTP response in the chain
  const response = await context.next();
  
  let message;

  // Update the response by injecting some helpful status messages and instructions
  return new HTMLRewriter()
    .on("#feature-functions", {
      element(element) {
        message = hasFunctions();
        if(message) {
          element.setInnerContent(message, { html: true });
        }
      }
    })
    .on("#feature-redirects", {
      element(element) {
        message = hasRedirects();
        if(message) {
          element.setInnerContent(message, { html: true });
        }
      }
    })
    .transform(response);
};
