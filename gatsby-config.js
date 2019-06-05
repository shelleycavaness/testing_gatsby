module.exports = {
  siteMetadata: {
    title: `Gatsby Default Kitty`,
    description: `Kick off your next, great Gatsby cat project with this starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@fang-kitty.js`,
  },
  pathPrefix: "/testing_gatsby",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-cat-site`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#7f0cf2`,
        theme_color: `##b933ab`,
        display: `minimal-ui`,
        icon: `src/images/cat1_400.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
