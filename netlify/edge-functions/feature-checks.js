import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

import hasFunctions from "./features/functions.js";
import hasRedirects from "./features/redirects.js";
import hasForms from "./features/forms.js";



export default async (request, context) => {
  
  const functionMessage = await hasFunctions(context);
  const redirectsMessage = await hasRedirects(context);
  const formsMessage = await hasForms(context);

  // get the next HTTP response in the chain
  const response = await context.next();
  
  // Update the response by injecting some helpful status messages and instructions
  return new HTMLRewriter()
    .on("#feature-functions", {
      element(element) {
        if(functionMessage) {
          element.setInnerContent(functionMessage, { html: true });
        }
      }
    })
    .on("#feature-redirects", {
      element(element) {
        if(redirectsMessage) {
          element.setInnerContent(redirectsMessage, { html: true });
        }
      }
    })
    .on("#feature-forms", {
      element(element) {
        if(formsMessage) {
          element.setInnerContent(formsMessage, { html: true });
        }
      }
    })
    .transform(response);
};
