module.exports = {
  siteMetadata: {
    title: 'Stellar Architecture',
    description: `Stellar Architecture.`,
    author: `@gpeshans`,
    lang: 'en',
    keywords: ['stellar', 'architecture', 'design', 'interior design', 'planning'],
    siteUrl: 'https://www.stellararchitecture.com',
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'test',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
  ],
};
