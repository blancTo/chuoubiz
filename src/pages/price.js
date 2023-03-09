import React from 'react'
import { Link } from 'gatsby'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const price = () => {
    const pagemeta = {
        title:`料金表`,
        slug:`price`
    }
    return (
        <>
        
            <div id="wrap">
            <Header h1title="調査料金について" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">
                    <div id="price_msg" className="bg_wide pt pb mb">                        
                        <div className="in">
                            <div className="txt">
                                <p className="mp blue2">当探偵社ではお客様を<br className="dsp_tbs" />不安にさせる様な<br />あいまいな料金表示や請求方法は<br className="dsp_tbs" /><b>一切行いません。</b></p>
                                <p className="serif">健全・適正・正確</p>
                                <p className="b nm">詳細な料金は、<br className="dsp_tbs" />お見積りいたしますので<br className="dsp_smt" />お気軽にご連絡ください！</p>
                            </div>
                            <p className="photo"><img src="../img/price/img.png" alt="" /></p>
                        </div>
                    </div>
                    <h3 className="headline mp">料金表</h3>
                    <div className="mb box_flex">
                        <div className="box">
                        <h4 className="mp">浮気・不倫・素行調査</h4>
                        <h5 className="mp">調査員1名(行動調査)</h5>
                        <table className="tbl">
                            <tbody><tr>
                                <th>基本料金<br className="dsp_smt" />（1時間毎）</th>
                                <td><b className="blue2 fm">5,000円</b>税込 5,500円</td>
                            </tr>
                            </tbody></table>
                        <h5 className="mp">調査員2名・車両1～2台</h5>
                        <table className="tbl">
                            <tbody><tr>
                                <th>基本料金<br className="dsp_smt" />（1時間毎）</th>
                                <td><b className="blue2 fm">1万円</b>税込 11,000円</td>
                            </tr>
                            <tr>
                                <th className="bg">20時間プラン<br className="dsp_tbs" />（5日程度）</th>
                                <td><b className="blue2 fm">19万円</b>税込 209,000円</td>
                            </tr>
                            <tr>
                                <th className="bg">30時間プラン<br className="dsp_tbs" />（7日程度）</th>
                                <td><b className="blue2 fm">28万円</b>税込 308,000円</td>
                            </tr>
                            </tbody></table>
                        <h5 className="mp">調査員3名・車両2～3台</h5>
                        <table className="tbl">
                            <tbody><tr>
                                <th>基本料金<br className="dsp_smt" />（1時間毎）</th>
                                <td><b className="blue2 fm">1.5万円</b>税込 16,500円</td>
                            </tr>
                            <tr>
                                <th className="bg">20時間プラン<br className="dsp_tbs" />（5日程度）</th>
                                <td><b className="blue2 fm">28万円</b>税込 308,000円</td>
                            </tr>
                            <tr>
                                <th className="bg">30時間プラン<br className="dsp_tbs" />（7日程度）</th>
                                <td><b className="blue2 fm">42万円</b>税込 462,000円</td>
                            </tr>
                            </tbody></table>
                        <h5 className="mp blue">成功報酬プラン</h5>
                        <table className="tbl">
                            <tbody><tr>
                                <th>不貞の証拠<br className="dsp_smt" />取得時に適応</th>
                                <td className="cen"><b className="blue2 fm">別途お見積り</b></td>
                            </tr>
                            </tbody></table>
                        <br className="dsp_hpt" />
                        <h4 className="mp">結婚・身上調査</h4>
                        <table className="tbl">
                            <tbody><tr>
                                <th>家族事項</th>
                                <td>１家族<br className="dsp_smt" />につき</td>
                                <td><b className="blue2 fm">20万円</b>税込 220,000円</td>
                            </tr>
                            <tr>
                                <th>父方事項</th>
                                <td>１家族<br className="dsp_smt" />につき</td>
                                <td><b className="blue2 fm">10万円</b>税込 110,000円</td>
                            </tr>
                            <tr>
                                <th>母方事項</th>
                                <td>１家族<br className="dsp_smt" />につき</td>
                                <td><b className="blue2 fm">10万円</b>税込 110,000円</td>
                            </tr>
                            </tbody></table>
                        </div>
                        <div className="box">
                        <h4 className="mp">家出・所在調査</h4>
                        <table className="tbl">
                            <tbody><tr>
                                <th>家族及び<br className="dsp_smt" />知人の行方</th>
                                <td>対象者<br className="dsp_smt" />1名<br className="dsp_smt" />につき</td>
                                <td><b className="blue2 fm">20万円</b>税込 220,000円</td>
                            </tr>
                            <tr>
                                <th>成功報酬<br className="dsp_smt" />プラン</th>
                                <td>対象者発見時に<br className="dsp_smt" />適応</td>
                                <td className="cen"><b className="blue2 fm">別途お見積り</b></td>
                            </tr>
                            </tbody></table>
                        <br className="dsp_hpt" />
                        <h4 className="mp">盗聴器発見</h4>
                        <table className="tbl">
                            <tbody><tr>
                                <th>宅内及び<br className="dsp_smt" />周辺の<br />盗聴器等<br className="dsp_smt" />有無確認</th>
                                <td>1回<br className="dsp_smt" />につき</td>
                                <td><b className="blue2 fm">6万円</b>税込 66,000円</td>
                            </tr>
                            </tbody></table>
                        <br className="dsp_hpt" />
                        <h4 className="mp">その他の調査</h4>
                        <table className="tbl">
                            <tbody><tr>
                                <th>嫌がらせ<br className="dsp_smt" />対策</th>
                                <td>１事案<br className="dsp_smt" />につき</td>
                                <td><b className="blue2 fm">20万円</b>税込 220,000円</td>
                            </tr>
                            <tr>
                                <th>いじめ<br className="dsp_smt" />問題</th>
                                <td>１事案<br className="dsp_smt" />につき</td>
                                <td><b className="blue2 fm">20万円</b>税込 220,000円</td>
                            </tr>
                            <tr>
                                <th>指紋・声紋<br className="dsp_smt" />・筆跡鑑定</th>
                                <td>１鑑定<br className="dsp_smt" />につき</td>
                                <td><b className="blue2 fm">20万円</b>税込 220,000円</td>
                            </tr>
                            <tr>
                                <th>特殊な調査</th>
                                <td>１事案<br className="dsp_smt" />につき</td>
                                <td className="cen"><b className="blue2 fm">別途お見積り</b></td>
                            </tr>
                            <tr>
                                <th>成功報酬<br className="dsp_smt" />プラン</th>
                                <td>目的達成時に<br className="dsp_hp" />適応</td>
                                <td className="cen"><b className="blue2 fm">別途お見積り</b></td>
                            </tr>
                            </tbody></table>
                        <br className="dsp_hpt" />
                        <div className="note">
                            <p className="attention nm">※調査料金以外に諸経費（車両代、保険料、燃料、高速代、機材使用料、通信費、宿泊代、報告書作成費、入店調査実費等）が別途必要になります。</p><br />
                            <p className="attention nm">※成功報酬プラン（内容に応じ別途お見積りいたしますので、ご相談ください。）</p>
                        </div>
                        </div>
                    </div>
                    <div id="creditcard" className="box price_box">
                        <dl className="head">
                        <dt className="mp w2"><span className="in"><span className="txt">追加料金不要で任せて安心<br /><span className="smt_fs">（深夜料金一切不要で安心）</span><br /><span className="fs dsp_hpt">※お支払いはクレジットも利用可能</span></span></span></dt>
                        <dd>
                            <p className="icon"><img src="../img/top/pay00.png" loading="lazy" alt="" /><img src="../img/top/pay01.png" loading="lazy" alt="" /><img src="../img/top/pay02.png" loading="lazy" alt="" /><img src="../img/top/pay03.png" loading="lazy" alt="" /><img src="../img/top/pay04.png" loading="lazy" alt="" /></p>
                            <p className="dsp_smt fs"><span className="fs">※お支払いはクレジットも利用可能</span></p>
                        </dd>
                        </dl>
                    </div>
                    {/* #BeginLibraryItem "/Library/choose_price.lbi" */}
                    <div id="choose_price" className="bg_wide">
                        <h3 className="headline mp">浮気調査の料金について<br className="dsp_smt" /><span className="fs">（5日間、実働20時間）</span></h3>
                        <p>同程度の内容でも調査料金が何故これほど違うのでしょう？</p>
                        <table className="price_table">
                        <tbody><tr>
                            <td />
                            <td />
                            <td><span className="bar_gray bar01">13.2万円</span><span className="name_gray">A<br className="dsp_smt" />興信所</span></td>
                            <td><span className="bar_blue bar02">26.4万円</span><span className="name_blue">当社</span></td>
                            <td><span className="bar_gray bar03">77万円</span><span className="name_gray">B探偵<br className="dsp_smt" />事務所</span></td>
                            <td><span className="bar_gray bar04">165万円</span><span className="name_gray">C<br className="dsp_smt" />探偵社</span></td>
                            </tr>
                            <tr className="border">
                            <td colSpan={2} className="bg_gray"><span className="b">基本料金</span>　<br className="dsp_smt" />調査員1名毎</td>
                            <td className="bg_gray cen w_190">0</td>
                            <td className="bg_gray cen w_190"><span className="b">5,500円</span></td>
                            <td className="bg_gray cen w_190"><span className="b">1.1万</span></td>
                            <td className="bg_gray cen w_190"><span className="b">1.5万</span><br className="dsp_smt" /><span className="caution">注1</span></td>
                            </tr>
                            <tr className="border">
                            <td colSpan={2}><span className="b">調査料金</span></td>
                            <td className="cen"><span className="b">13.2万</span></td>
                            <td className="bg_blue cen"><span className="b txt_blue">20.9万</span></td>
                            <td className="cen"><span className="b">44万</span></td>
                            <td className="cen"><span className="b">135万</span></td>
                            </tr>
                            <tr className="border">
                            <td rowSpan={2} className="bg_gray cen">内訳</td>
                            <td className="bg_gray">調査員</td>
                            <td className="bg_gray cen">-<br className="dsp_smt" /><span className="caution">注2</span></td>
                            <td className="bg_gray cen">2名</td>
                            <td className="bg_gray cen">2名</td>
                            <td className="bg_gray cen">4名<br className="dsp_smt" /><span className="caution">注3</span></td>
                            </tr>
                            <tr className="border">
                            <td className="bg_gray">調査期間</td>
                            <td className="bg_gray cen">7日間</td>
                            <td className="bg_gray cen">20時間</td>
                            <td className="bg_gray cen">20時間</td>
                            <td className="bg_gray cen">20時間</td>
                            </tr>
                            <tr className="border">
                            <td colSpan={2}><span className="b">諸経費</span></td>
                            <td rowSpan={7} className="cen"><span className="b">0</span></td>
                            <td rowSpan={7} className="bg_blue cen"><span className="txt_blue b">5.5万</span></td>
                            <td className="cen"><span className="b">33万</span><br className="dsp_smt" /><span className="caution">注4</span></td>
                            <td rowSpan={7} className="cen"><span className="b">33万</span></td>
                            </tr>
                            <tr className="border">
                            <td rowSpan={6} className="bg_gray cen">内訳</td>
                            <td className="bg_gray">機材<br className="dsp_smt" />使用料</td>
                            <td className="cen">5.5万</td>
                            </tr>
                            <tr className="border">
                            <td className="bg_gray">車両<br className="dsp_smt" />使用料</td>
                            <td className="bg_gray cen">3.3万</td>
                            </tr>
                            <tr className="border">
                            <td className="bg_gray">ガソリン<br className="dsp_smt" />代</td>
                            <td className="bg_gray cen">5.5万</td>
                            </tr>
                            <tr className="border">
                            <td className="bg_gray">通信費</td>
                            <td className="bg_gray cen">2.2万</td>
                            </tr>
                            <tr className="border">
                            <td className="bg_gray">報告書<br className="dsp_smt" />作成料</td>
                            <td className="bg_gray cen">5.5万</td>
                            </tr>
                            <tr className="border">
                            <td className="bg_gray">その他</td>
                            <td className="bg_gray cen">11万</td>
                            </tr>
                            <tr className="border">
                            <td colSpan={2} className="bg_dgray rit"><span className="b txt_white">合計金額</span></td>
                            <td className="bg_dgray cen"><span className="b txt_white">13.2万円</span></td>
                            <td className="bg_dblue cen"><span className="b txt_white">26.4万円</span></td>
                            <td className="bg_dgray cen"><span className="b txt_white">77万円</span></td>
                            <td className="bg_dgray cen"><span className="b txt_white">165万円</span></td>
                            </tr>
                        </tbody></table>
                        <div className="price_box">
                        <h4 className="headline mp">ここに注意!!</h4>
                        <dl className="price_dl">
                            <dt><span className="circle">注 </span></dt>
                            <dd><span className="b">ここが最も重要です。</span><span className="b red">１名毎の基本料金の差</span>でお見積り合計金額は、こんなに大きく差額がでるのです。</dd>
                        </dl>
                        <dl className="price_dl">
                            <dt><span className="circle">注 </span></dt>
                            <dd>契約内容は<span className="b red">「探偵スタッフによる尾行調査」</span>ですか？GPSによる「簡易調査」だけではありませんか？<br />
                            証拠能力が認められるのは<span className="b red">「尾行調査によって作成された報告書」</span>だけです。</dd>
                        </dl>
                        <dl className="price_dl">
                            <dt><span className="circle">注 </span></dt>
                            <dd>探偵スタッフは本当に<span className="b red">４名</span>必要ですか？４名全員が<span className="b red">本当に実動</span>していますか？</dd>
                        </dl>
                        <dl className="price_dl">
                            <dt><span className="circle">注 </span></dt>
                            <dd>経費の名目で後から<span className="b red">高額請求</span>する探偵事務所もあります。<br />
                            調査料金・基本料金が安いように見えても、報告が完了するまでの<br className="dsp_tbs" />合計金額が<br className="dsp_hp" />いくらになるのか、<span className="b red">事前に必ず確認</span>しておきましょう。</dd>
                        </dl>
                        <img src="../img/choose/price01.png" alt="ここに注意!!" className="img_price01" />
                        </div>
                    </div>
                    {/* #EndLibraryItem */}
                    <p className="link mp"><Link to="/jirei/">事例ページはこちら</Link></p>

                    </div>
                </Layout>
            </div>
            <Footer />
        </>
    )
}

const jsonN = "広島探偵 中央リサーチ",
jsonT = "探偵事務所調査料金表",
jsonS = "price",
jsonD = "当探偵社ではお客様を不安にさせる様なあいまいな料金表示や請求方法は一切行いません。";

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
                        "name":`${jsonT}`,
                        "description":`${jsonD}${jsonT}`,
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
        title="探偵事務所調査料金表"
        keyword="探偵,広島,料金表,中央リサーチ"
        description="当探偵社ではお客様を不安にさせる様なあいまいな料金表示や請求方法は一切行いません。"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
)
export default price
