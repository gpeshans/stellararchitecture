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
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'test',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
