const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {

  eleventyConfig.setTemplateFormats("html,liquid");

	eleventyConfig.addPlugin(pluginWebc, {
		components: "src/_includes/components/**/*.webc",
	});

  return {
    dir: {
      output: "dist",
      data: "_data"
    }
  }
};
