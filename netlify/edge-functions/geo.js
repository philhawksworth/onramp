// import a utility to help us update the HTML response
import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

export default async (request, context) => {
  
  // get the pending HTTP response ready to make updates to it
  const response = await context.next();
  
  // Update the response by injecting some status messages
  return new HTMLRewriter()
    .on("p[data-geo]", {
      element(element) {
        const geoInfo  = `You are visiting from <span>${context.geo?.city}</span> in <span>${context.geo?.country?.name}</span>`;
        element.append(geoInfo, {html: true})
        element.setAttribute("class", "injected");
      }
    })
    .transform(response);

};


