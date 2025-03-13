export default function (eleventyConfig) {

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy({
    "./src/site.webmanifest": "site.webmanifest",
  });
}

export const config = {
  dir: {
          input: 'src',
          includes: "_config/includes",
          data: "_config/data",
          layouts: "_config/layouts",
          output: '_site'
      },
  templateFormats: ['md', 'njk', 'html'],
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  passthroughFileCopy: true,
};
