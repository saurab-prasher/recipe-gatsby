/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipe site",
    author: "@saurabPrasher",
    person: { name: "saurab", age: 22 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      {
        name: "saurab",
        age: 22,
      },
      { name: "john", age: 32 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assests/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styles`,
        path: `${__dirname}/src/assests/css`,
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `w7zjqfkvqbe6`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
