const EleventyFetch = require("@11ty/eleventy-fetch");


async function check() {

  const rootUrl = process.env.URL || null;

  // if we get a 200 from the function URL, we'll assume a function exists
  const url = `https://onramp.netlify.app/.netlify/functions/hello`;
  // const url = `${rootUrl}/.netlify/functions/hello`;
  

  try{
    const resp = await EleventyFetch(url);
    return true;
  } catch (err) {
    console.log(`Couldn't get a response from ${url}`);
    return false;
  }
}

module.exports = check();
