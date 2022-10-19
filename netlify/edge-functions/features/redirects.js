// const HTMLConfirmation = `Redirects deployed! Now you can call your serverless API at <a href="/api/hello">/api/hello</a>`;


export default async function hasFunctions(context) {

  const testURL = `${context.site.url}/api/hello`;
  console.log(`Checking for a redirect to ${testURL}`);
  
  const call = await fetch(testURL);
  if (call.status !== 404) {
    return true;
  }
}



