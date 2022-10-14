const EleventyFetch = require("@11ty/eleventy-fetch");


module.exports = async function() {

  let url = "http://localhost:8080/version.json";

  let data = await EleventyFetch(url, {
    duration: "10s", 
    type: "json" 
  });

  console.log({data});
  
  return {
    iteration: data.version
  }
};
