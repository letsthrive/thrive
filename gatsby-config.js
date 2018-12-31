module.exports = {
  siteMetadata: {
    title: `Thrive`,
    description: `An open initiative to help find grads/undergrads or people stuck in their dead end jobs. Mentors giving direction to people.`,
    author: `@adeelibr`,
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
        name: `Thrive`,
        short_name: `thrive`,
        start_url: `/`,
        background_color: `#f50057`,
        theme_color: `#f50057`,
        display: `standalone`,
        icon: `src/images/favicon-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: '@wapps/gatsby-plugin-material-ui',
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
