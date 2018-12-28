module.exports = {
  siteMetadata: {
    title: `Thrive`,
    description: `An open initiative to help find grads/undergrads or people stuck in their dead end jobs. Mentees giving direction to people.`,
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
        name: `lets-thrive`,
        short_name: `thrive`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `lets-thrive`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
