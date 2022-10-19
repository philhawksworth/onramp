// const HTMLConfirmation = `A Netlify Functions has been deployed! Call it at <a href="/.netlify/functions/hello">/.netlify/functions/hello</a>`;


export default async function hasFunctions(context) {

  const functionURL = `${context.site.url}/.netlify/functions/hello`;
  console.log(`Checking for a function at ${functionURL}`);
  
  const call = await fetch(functionURL);
  if (call.status !== 404) {
    return true;
  }
}



