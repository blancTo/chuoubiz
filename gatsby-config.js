/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "広島の探偵｜浮気調査は55年の実績と信頼｜総合探偵社 中央リサーチ",
    keyword:"探偵,広島,興信所,浮気調査,結婚・身上調査,中央リサーチ広島",
    description:
      "総合探偵社中央リサーチ広島は「浮気調査、不倫調査が最も得意」な探偵事務所です。浮気調査なら高いスキルで浮気の証拠をとり早期解決に導きます。分かりやすい料金表でお見積り、ご相談無料です。所在地 広島県広島市中区上幟町2-45今田ビル2階(広島家庭裁判所前)広島県公安委員会届け出済み",
    image: "/images/ogp.jpg",
    url: "https://www.chuou.biz",
    siteUrl: "https://www.chuou.biz",
  },
  plugins: [
    
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 50, //デフォルトは50
        },
      },
    },

    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.chuou.biz/`,
        sitemap: `https://www.chuou.biz/sitemap-0.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.chuou.biz`,
      },
    },

    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KPV22J2",
        includeInDevelopment: false,
      },
    },

    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    
  ],
}
