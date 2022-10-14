const EleventyFetch = require("@11ty/eleventy-fetch");


module.exports = async function() {

  let url = "https://onmramp.netlify.app/data.json";

  try {
    let data = await EleventyFetch(url, {
      duration: "10s", 
      type: "json" 
    });
    return {
     iteration: data.iteration 
   } 
  } catch(err) {
    return {
      iteration: 1
    }  
  }
};
