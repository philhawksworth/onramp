const HTMLConfirmation = `<p>You've added a form! Netlify will now accept submissions to it.</p>`;

export default async function hasForms(context) {

  const testURL = `${context.site.url}`;
  console.log(`Checking for a form which posts to ${testURL}`);
  
  // 2 second timeout:
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 2000)
  let call;
  try {
    call = await fetch(testURL, {
      signal: controller.signal,
      method: "POST"
    });
    clearTimeout(timeoutId);
  } catch {
    call = {
      status: 504
    }
  }
  console.log("STATUS", call.status);
  if (call.status === 200) {
    return HTMLConfirmation;
  }
}



