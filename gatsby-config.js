module.exports = {
  siteMetadata: {
    title: `Gatsby + Drupal 8`,
    slogan: `A Match Made in Heaven`,
    description: `A demo site made in our Gatsby + Drupal training session at DrupalCamp NJ 2020!`,
    author: `@benjifisher`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    /*{
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://stm5e32397fcf081-z0cu5sbghmjrchm8acpbppx5vfobd52a.tugboat.qa/`, // optional: use your simplytest url here
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
      },
    },*/
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
