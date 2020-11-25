/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Akosua Kernizan",
    titleTemplate: "Personal Site",
    description: "Converting wireframes into reality since 2015.",
    url: "https://www.akosuakernizan.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
  ],
};
