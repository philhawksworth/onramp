const EleventyFetch = require("@11ty/eleventy-fetch");


module.exports = async function() {

  const rootUrl = process.env.URL || null;
  let url = "http://localhost:8080"
  try {
    if(rootUrl) {
      url = `${rootUrl}/version.json`;
      return EleventyFetch(url, {
        duration: "10s", 
        type: "json" 
      });
    } else {
      return {
        "iteration": 1
      }
    }
  } catch(err) {
    return {
      "iteration": 1
    }  
  }
};
