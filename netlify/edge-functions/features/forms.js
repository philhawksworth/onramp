const HTMLConfirmation = `<p>You've added a form! Netlify will now accept submissions to it.</p>`;

export default async function hasForms(context) {

  let testURL = `${context.site.url}/forms/`;
  testURL = testURL.replace('http://','https://');
  console.log(`Checking for a form which posts to ${testURL}`);
  
  // 2 second timeout:
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 2000)
  let call;
  try {
    call = await fetch(testURL, {
      signal: controller.signal,
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: {
        "form-name": "contact"
      }
    });
    clearTimeout(timeoutId);
    console.log("STATUS", call.status);
    
    if (call.status === 200) {
      return HTMLConfirmation;
    }
  } catch(err) {
    console.log(err);
    return false;
  }
}
