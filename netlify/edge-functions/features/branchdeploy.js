
export default async function hasFunctions(context) {
  
  const testURL = `https://staging--${ context.site.name }.netlify.app/`;
  const HTMLConfirmation = `<p>You deployed to a new environment! Use the name of the branch in the URL to access it, like this <a href="${testURL}">${testURL}</a></p>`;

  console.log(`Checking for a branch deploy at ${testURL}`);
  
  const call = await fetch(testURL);
  if (call.status !== 404) {
    return HTMLConfirmation;
  }
}
