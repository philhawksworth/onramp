import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

import hasFunctions from "./features/functions.js";
import hasRedirects from "./features/redirects.js";
// import hasForms from "./features/forms.js";
// import hasBranches from "./features/branchdeploy.js";
// import hasSplits from "./features/splittest.js";
import hasEdgeFunctions from "./features/edgefunctions.js";



export default async (request, context) => {

  // get the pending HTTP response ready to make updates to it
  const response = await context.next();

  // We're only going to to test and update things this is running on Netlify
  // if(await context.ip === "127.0.0.1"){
  //   return;
  // }
  
  // TODO: call these in parallel
  // Test for the presence of various features, and prepare any
  // confirmation messages we might wish to sub in for the existing content.
  const functionMessage = await hasFunctions(context);
  const redirectsMessage = await hasRedirects(context);
  // const formsMessage = await hasForms(context);
  // const branchMessage = await hasBranches(context);
  // const splitsMessage = await hasSplits(context);
  const edgeMessage = await hasEdgeFunctions(context);



  // Update the response by injecting some status messages
  return new HTMLRewriter()
    .on("#feature-functions", {
      element(element) {
        if(functionMessage) {
          element.append(functionMessage, {html: true})
          element.setAttribute("class", "card feature-deployed");
        }
      }
    })
    .on("#feature-redirects", {
      element(element) {
        if(redirectsMessage) {
          element.append(redirectsMessage, {html: true})
          element.setAttribute("class", "card feature-deployed");
        }
      }
    })
    // .on("#feature-forms", {
    //   element(element) {
    //     if(formsMessage) {
    //       element.append(formsMessage, {html: true})
    //       element.setAttribute("class", "card feature-deployed");
    //     }
    //   }
    // })
    // .on("#feature-branch-deploys", {
    //   element(element) {
    //     if(branchMessage) {
    //       element.append(branchMessage, {html: true})
    //       element.setAttribute("class", "card feature-deployed");
    //     }
    //   }
    // })
    // .on("#feature-split-testing", {
    //   element(element) {
    //     if(splitsMessage) {
    //       element.append(splitsMessage, {html: true})
    //       element.setAttribute("class", "card feature-deployed");
    //     }
    //   }
    // })
    .on("#feature-edge-functions", {
      element(element) {
        if(edgeMessage) {
          element.append(edgeMessage, {html: true})
          element.setAttribute("class", "card feature-deployed");
        }
      }
    })
    .transform(response);
};
