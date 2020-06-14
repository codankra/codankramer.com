module.exports = {
  siteMetadata: {
    title: `Daniel Kramer`,
    description: `Hi, I'm Daniel Kramer. This personal site is a chance for me to carve out a personal space of the web and share my accomplishments and what I'm up to.`,
    author: `@codankra`,
  },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#339966`,
        theme_color: `#339966`,
        display: `minimal-ui`,
        icon: `src/images/favIcon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
