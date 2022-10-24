
import { cheerio } from "https://deno.land/x/denocheerio/mod.ts";

const HTMLConfirmation = `<p>An Edge Function has been deployed!</p>`;

export default async function hasEdgeFunctions(context) {

  console.log(`Checking for the effect of an Edge Function`);
  const response = await context.next();
  const text = await response.text();
  const $ = cheerio.load(text);
    
  if ($("p.injected").text()) {
    return HTMLConfirmation;
  }

}



