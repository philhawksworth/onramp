const HTMLConfirmation = `You've added a form! Netlify will now accept submissions to it.`;

export default async function hasForms(context) {

  const testURL = `${context.site.url}`;
  console.log(`Checking for a form which posts to ${testURL}`);
  
  const call = await fetch(testURL, {
    method: "POST"
  });
  if (call.status !== 404) {
    return HTMLConfirmation;
  }
}



