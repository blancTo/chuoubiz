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
    title: "広島の探偵　浮気調査なら55年の実績｜総合探偵社 中央リサーチ広島本社",
    keyword:"探偵,広島,興信所,浮気調査,結婚・身上調査,中央リサーチ広島",
    description:
      "中央リサーチ広島は｢浮気調査が最も得意｣な探偵社であり、裁判証拠収集ならお任せください!!ご相談は無料です。広島県公安委員会探偵業届出済で、浮気調査は信頼と実績ある当社にご相談ください！プロの探偵が全力でお悩みを解決いたします！高い追跡技術を持つ中央リサーチ広島が浮気・不倫の現場を突き止めます。",
    image: "images/ogp.jpg",
    url: "https://www.chuou.biz/",
    siteUrl: "https://www.chuou.biz/",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
          quality: 75, //デフォルトは50
        },
      },
    },
  ],
}
