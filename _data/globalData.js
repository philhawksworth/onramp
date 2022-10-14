const EleventyFetch = require("@11ty/eleventy-fetch");


module.exports = async function() {

  let url = "https://onramp.netlify.app/data.json";

  try {
    return EleventyFetch(url, {
      duration: "10s", 
      type: "json" 
    });
  } catch(err) {
    return {
      iteration: 1
    }  
  }
};
