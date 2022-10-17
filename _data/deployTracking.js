const EleventyFetch = require("@11ty/eleventy-fetch");


module.exports = async function() {
  

  const rootUrl = process.env.URL || null;

  const features = [
    { netlifyFunction: await require("./helpers/checkForFunction.js") },
    { edgeFunction: false },
    { redirect: false },
    { form: false }
  ];

  if(rootUrl) {

    console.log(`got a url... gonna take a look`);
    
    
    try {
      url = `${rootUrl}/features.json`;
      return EleventyFetch(url, {
        duration: "0", 
        type: "json" 
      });
    } catch(err) {
      return features
    }
  } else {
    console.log(`no url, I'll investigate`);
    return features;
  }
};
