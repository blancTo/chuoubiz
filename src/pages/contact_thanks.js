import React from 'react'
import { Link } from 'gatsby'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const contactThanks = () => {
    const pagemeta = {
        title:`お問い合わせ`,
        slug:`contact`
    }
    return (
        <>
        
            <div id="wrap">
            <Header h1title="ご相談、お問い合わせについて" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main pb">
                        <div className="pt pb">
                            <p className="cen fm b">お問合せありがとうございました。</p>
                            <br />
                            <p className="cen">送信は正常に完了しました。</p>
                            <p className="cen">数日中にご連絡させていただきます。</p>
                            <br />
                            <p className="cen"><Link to="/">&lt; ホームへ戻る &gt;</Link></p>
                        </div>
                    </div>
                </Layout>
            </div>
            <Footer />
        
        </>
    )
}

const jsonN = "広島探偵 中央リサーチ",
jsonT = "ご相談、お問い合わせありがとうございました",
jsonS = "contact",
jsonD = "広島の探偵社「中央リサーチ」ではどのようなお問い合わせにも対応致します。お気軽にご連絡ください。";

const jsonLd = {
    "@context": "http://schema.org/",
    "@graph":[
        {
            "@type":"WebSite",
            "@id":`https://www.chuou.biz/${jsonS}/#website`,
            "url":`https://www.chuou.biz/${jsonS}/`,
            "name":`${jsonT}｜広島の探偵　浮気調査なら55年の実績｜${jsonN}`,
            "description":`${jsonD}${jsonT}`,
            "inLanguage":"ja",
            "publisher":{
                "@id":`https://www.chuou.biz/${jsonS}/#person`
            }
        },
        {
            "@type":"WebPage",
            "@id":`https://www.chuou.biz/${jsonS}/#webpage`,
            "url":`https://www.chuou.biz/${jsonS}/`,
            "name":`${jsonN}`,
            "description":`${jsonD}${jsonT}`,
            "inLanguage":"ja",
            "isPartOf":{
                "@id":`https://www.chuou.biz/${jsonS}/#website`
            },
            "breadcrumb":{
                "@id":`https://www.chuou.biz/${jsonS}/#breadcrumblist`
            },
            "datePublished":"2023-2-22T21:00:00+09:00",
            "dateModified":"2023-2-24T19:00:00+09:00"
        },
        {
            "@type":"BreadcrumbList",
            "@id":`https://www.chuou.biz/${jsonS}/#breadcrumblist`,
            "itemListElement":[
                {
                    "@type":"ListItem",
                    "@id":`https://www.chuou.biz/#listItem`,
                    "position":1,
                    "item":{
                        "@type":"WebPage",
                        "@id":`https://www.chuou.biz/`,
                        "name":`${jsonN}`,
                        "description":"当探偵社は広島に本社を構え、皆様の信頼に支えられ55年の実績を重ねてまいりました。調査・解決共経験豊富な当社にまずはお気軽にご相談ください。",
                        "url":`https://www.chuou.biz/`
                    },
                    "nextItem":`https://www.chuou.biz/${jsonS}/#listItem`
                },
                {
                    "@type":"ListItem",
                    "@id":`https://www.chuou.biz/${jsonS}/#listItem`,
                    "position":2,
                    "item":{
                        "@type":"WebPage",
                        "@id":`https://www.chuou.biz/${jsonS}/`,
                        "name":`${jsonT}｜${jsonN}`,
                        "description":`${jsonD}`,
                        "url":`https://www.chuou.biz/${jsonS}/`
                    },
                    "previousItem":`https://www.chuou.biz/#listItem`
                }
            ]
        }
    ]
}

export const Head = () => (
    <>
        <Seo
        title="ご相談、お問い合わせはこちら"
        description="広島の探偵社「中央リサーチ広島」ではどのようなお問い合わせにも対応致します。お気軽にご連絡ください。"
        keyword="探偵,広島,問合せ,中央リサーチ広島"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
)
export default contactThanks
