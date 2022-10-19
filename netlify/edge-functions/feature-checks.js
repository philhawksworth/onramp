import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

import hasFunctions from "./features/functions.js";
import hasRedirects from "./features/redirects.js";
import hasForms from "./features/forms.js";



export default async (request, context) => {

  // get the pending HTTP response ready to make updates to it
  const response = await context.next();

  // We're only going to to test and update things this is running on Netlify
  if(await context.ip === "127.0.0.1"){
    // return;
  }
  
  
  // Test for the presence of various features, and prepare any
  // confirmation messages we might wish to sub in for the existing content.
  const functionMessage = await hasFunctions(context);
  const redirectsMessage = await hasRedirects(context);
  const formsMessage = await hasForms(context);

  

  // Update the response by injecting some status messages
  let classes;
  return new HTMLRewriter()
    .on("#feature-functions", {
      element(element) {
        if(functionMessage) {
          classes = `${element.getAttribute("class")} feature-deployed`;
          element.setAttribute("class", classList);
        }
      }
    })
    .on("#feature-redirects", {
      element(element) {
        if(redirectsMessage) {
          classes = `${element.getAttribute("class")} feature-deployed`;
          element.setAttribute("class", classList);
        }
      }
    })
    .on("#feature-forms", {
      element(element) {
        if(formsMessage) {
          classes = `${element.getAttribute("class")} feature-deployed`;
          element.setAttribute("class", classList);
        }
      }
    })
    .transform(response);
};
