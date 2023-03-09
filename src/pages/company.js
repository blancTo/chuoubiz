import React from 'react'
import { Link } from 'gatsby'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const company = () => {
    const pagemeta = {
        title:`会社概要`,
        slug:jsonS
    }
    return (
        <>
        
            <div id="wrap">
            <Header h1title="会社概要について" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main pb">
                        <div className="bg pt pb bg_wide">
                            <div className="waku">
                                <h3 className="cen mp">ごあいさつ</h3>
                                <p className="txt">我々の生活の中で疑問・不審・不安という経験は必ず起こりうる問題であり、究明解決する為には正確な真実を知り、そして的確・適正な判断を行う事が大切です。<br />
                                そんなごく当たり前の考え方がおろそかにされ、現代社会に於いても事実関係を調べる事を怠り、先送りし大きな問題となるなど、同じ失敗を繰り返す事の多い時代となっております。<br />
                                いくらスピード重視の時代とはいえ、問題解決は一方的な憶測で判断できるものではなく、事実関係を明らかにした上で成り立つものです。それを怠ってしまうと逆に問題解決まで遠回りとなり、収拾がつかなくなるなど、誤解・誤認による２重３重のトラブルにも繋がりかねません。<br />
                                当社では真実を調べる事と、それを基に的確なアドバイスを行う事で「つらい思いをして悩んでいる方に対し、1日も早く解決できる様にお手伝いしたい」という真摯な姿勢で、これからも社会貢献していきたいと考えております。</p>
                                <p className="nm rit">株式会社中央リサーチ　代表取締役<img src="../img/company/name.png" alt="樋之本 浩章" /></p>
                            </div>
                        </div>
                        <div className="pt">
                            <h3 className="headline">会社概要</h3>
                            <div className="box">
                                <div className="in dsp_hpt"><img src="../img/company/img05.jpg" alt="" /></div>
                                <table>
                                <tbody><tr>
                                    <th>社名</th><td>株式会社　中央リサーチ</td>
                                    </tr>
                                    <tr>
                                    <th>創業</th><td>昭和40年4月1日</td>
                                    </tr>
                                    <tr>
                                    <th>資本金</th><td>1,000万円</td>
                                    </tr>
                                    <tr>
                                    <th>代表取締役</th><td>樋之本 浩章</td>
                                    </tr>
                                    <tr>
                                    <th>取引先</th><td>個人及び法人（上場企業･弁護士事務所･金融機関等）</td>
                                    </tr>
                                    <tr>
                                    <th>探偵業届出番号</th>
                                    <td className="wrap">
                                        <div>広島県公安委員会探偵業届出証明書番号 第73070084号<br />
                                        山口県公安委員会探偵業届出証明書番号 第74070021号<br />
                                        岡山県公安委員会探偵業届出証明書番号 第72100026号</div>
                                        <div>島根県公安委員会探偵業届出証明書番号 第71190007号<br />
                                        愛媛県公安委員会探偵業届出証明書番号 第82120013号</div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th>加盟団体</th>
                                    <td className="wrap">
                                        <ul className="maru">
                                        <li>内閣総理大臣（国家公安委員会）認可 全国調査業協同組合組合員第3266号</li>
                                        <li>広島商工会議所　正会員　第9700302号</li>
                                        </ul>
                                        <ul className="maru">
                                        <li>NTTユーザー協会</li>
                                        <li>こども未来づくり・ひろしま応援隊<br />公益財団法人ひろしまこども夢財団　加盟店</li>
                                        </ul>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th>取引金融機関</th><td>東京三菱UFJ銀行、広島銀行、ゆうちょ銀行</td>
                                    </tr>
                                    <tr>
                                    <th>事業内容</th>
                                    <td>
                                        <ul className="maru">
                                        <li>探偵業務（不審・不安・疑問などの究明解決）</li>
                                        <li>探偵育成の為の教育活動</li>
                                        </ul>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th>活動エリア</th>
                                    <td>【中国】広島・岡山・山口・鳥取・島根<br />
                                        【四国】愛媛・香川・高知・徳島<br />
                                        【九州】福岡・長崎・佐賀・熊本・大分・宮崎・鹿児島・沖縄　※その他、海外での調査も可能です。</td>
                                    </tr>
                                </tbody></table>
                            </div>
                            <div className="photo">
                                <dl>
                                <dt><img src="../img/company/img01.jpg" alt="" /></dt>
                                <dd>
                                    <p className="cen blue b nm">弊社代表が、元 衆議院議員 議長<br />
                                    灘尾 弘吉先生筆の書を頂きました。</p>
                                    <p className="nm cen">灘尾弘吉先生については<a href="https://ja.wikipedia.org/wiki/%E7%81%98%E5%B0%BE%E5%BC%98%E5%90%89" target="_blank"rel="noopener noreferrer">こちら</a></p>
                                </dd>
                                </dl>
                                <dl>
                                <dt><img src="../img/company/img02.jpg" alt="" /></dt>
                                <dd>
                                    <p className="cen blue b nm">表彰状</p>
                                </dd>
                                </dl>
                                <dl>
                                <dt><img src="../img/company/img03.jpg" alt="" /></dt>
                                <dd>
                                    <p className="cen blue b nm">組合員証</p>
                                </dd>
                                </dl>
                                <dl>
                                <dt><img src="../img/company/img04.jpg" alt="" /></dt>
                                <dd>
                                    <p className="cen blue b nm">委嘱状</p>
                                </dd>
                                </dl>
                                <dl className="dsp_smt">
                                <dt><img src="../img/company/img05.jpg" alt="" /></dt>
                                <dd>
                                    <p className="cen blue b nm">商標登録証</p>
                                </dd>
                                </dl>
                            </div>
                            <div className="history">
                                <h3 className="line mp">経緯</h3>
                                <div className="wrap">
                                <div className="sec">
                                    <dl><dt>昭和40年04月</dt><dd>中央興信所 広島本社 創業</dd></dl>
                                    <dl><dt>昭和57年04月</dt><dd>中央興信所山口支社 開設</dd></dl>
                                    <dl><dt>昭和63年04月</dt><dd>中央興信所引き継ぎ、併設中央リサーチ創業（同時代表者変更）</dd></dl>
                                    <dl><dt>昭和63年04月</dt><dd>広島商工会議所入会</dd></dl>
                                    <dl><dt>平成02年04月</dt><dd>中央リサーチ岡山支社 開設</dd></dl>
                                    <dl><dt>平成07年05月</dt><dd>ホームテレビ取材協力</dd></dl>
                                    <dl><dt>平成08年04月</dt><dd>広島テレビ取材協力</dd></dl>
                                    <dl><dt>平成10年06月</dt><dd>全国探偵調査業情報調査振興会より表彰</dd></dl>
                                    <dl><dt>平成10年10月</dt><dd>社団法人 日本調査業協会加盟</dd></dl>
                                    <dl><dt>平成12年08月</dt><dd>山口放送ラジオ出演</dd></dl>
                                    <dl><dt>平成14年03月</dt><dd>島根支社 開設</dd></dl>
                                    <dl><dt>平成15年12月</dt><dd>法人成りにて株式会社中央リサーチ設立</dd></dl>
                                </div>
                                <div className="sec">
                                    <dl><dt>平成19年06月</dt><dd>探偵業法施行に伴い 広島県公安委員会へ届出を行う</dd></dl>
                                    <dl><dt>平成20年04月</dt><dd>広島商工会議所より併設中央リサーチ20周年表彰</dd></dl>
                                    <dl><dt>平成20年05月</dt><dd>社団法人日本調査業協会の単位協会中国ブロック調査業協会<br />理事・副会長就任（広島支部長）</dd></dl>
                                    <dl><dt>平成21年08月</dt><dd>内閣総理大臣認可全国調査業協同組合へ加盟</dd></dl>
                                    <dl><dt>平成23年07月</dt><dd>中央リサーチ愛媛支社 開設</dd></dl>
                                    <dl><dt>平成25年03月</dt><dd>広島本社にて探偵業教育研修会の実施</dd></dl>
                                    <dl><dt>平成28年04月</dt><dd>広島県探偵業協会の会長に就任</dd></dl>
                                    <dl><dt>平成30年04月</dt><dd>広島商工会議所より併設中央リサーチ30周年表彰</dd></dl>
                                    <dl><dt>令和元 年05月</dt><dd>山口県探偵業協会の会長に就任</dd></dl>
                                    <dl><dt>令和04年03月</dt><dd>社名を商標登録致しました</dd></dl>
                                </div>
                                </div>
                            </div>
                            <div className="office">
                                <h3 className="line mp">営業所</h3>
                                <div className="wrap">
                                <dl>
                                    <dt>広島相談室</dt>
                                    <dd><Link to="/">総合探偵社中央リサーチ広島</Link><br />
                                    広島県広島市中区上幟町2-45 今田ビル2F<br />
                                    (家庭裁判所前 白島線電車道り沿い)<br />
                                    TEL：082-211-1600(代)<br />
                                    MAIL：<a href="mailto:hiroshima@chuou.biz">hiroshima@chuou.biz</a></dd>
                                </dl>
                                <dl>
                                    <dt>山口相談室</dt>
                                    <dd><Link to="/yamaguchi/">総合探偵社中央リサーチ山口</Link><br />
                                    山口県周南市平和通2丁目31 三真樹ビル2階<br />
                                    （徳山駅徒歩3分）<br />
                                    TEL：0834-22-7513(代)<br />
                                    MAIL：<a href="mailto:yamaguchi@chuou.biz">yamaguchi@chuou.biz</a></dd>
                                </dl>
                                <dl>
                                    <dt>島根相談室</dt>
                                    <dd><Link to="/shimane/">総合探偵社中央リサーチ島根</Link><br />
                                    島根県松江市津田町305番 ツダマチビル1階<br />
                                    （松江駅徒歩5分）<br />
                                    TEL：0852-67-6573(代)
                                    MAIL：<a href="mailto:shimane@chuou.biz">shimane@chuou.biz</a></dd>
                                </dl>
                                <dl>
                                    <dt>岡山相談室</dt>
                                    <dd><Link to="/okayama/">総合探偵社中央リサーチ岡山</Link><br />
                                    岡山県岡山市北区富田町1丁目1-1<br />
                                    富士野ビル2階<br />
                                    TEL：086-231-6661(代)<br />
                                    MAIL：<a href="mailto:okayama@chuou.biz">okayama@chuou.biz</a></dd>
                                </dl>
                                <dl>
                                    <dt>愛媛相談室</dt>
                                    <dd><Link to="/ehime/">総合探偵社中央リサーチ愛媛</Link><br />
                                    愛媛県松山市三番町7-7-1 村上ビル2階<br />
                                    （松山市民病院徒歩2分）<br />
                                    TEL：089-931-3800(代)<br />
                                    MAIL：<a href="mailto:ehime@chuou.biz">ehime@chuou.biz</a></dd>
                                </dl>
                                <dl>
                                    <dt>広島本社</dt>
                                    <dd>広島県広島市中区上幟町2-45 今田ビル2F<br />
                                    (家庭裁判所前 白島線電車道り沿い) <a href="https://goo.gl/maps/diLXEpJKHk94C7jA6" target="_blank" rel="noopener noreferrer">»MAP</a><br />
                                    TEL：082-211-1600(代)<br />
                                    FAX：082-211-1688<br />
                                    MAIL：<a href="mailto:info@chuou.biz">info@chuou.biz</a></dd>
                                </dl>
                                </div>
                            </div>
                        </div>

                        <div className="support">
                            <p className="cen mp b blue">全力であなたの幸せを<br className="dsp_smt" />勝ち取るサポートをいたします</p>
                            <p className="cen red b">全国主要都市で探偵業55年の<br className="dsp_smt" />実績があります。</p>
                            <p className="txt cen nm">経験豊富な相談員があなたのご要望にお答えする為、親身になってアドバイスいたします。<br />
                                負担の軽い<b>納得料金</b>で、<b>迅速・的確な調査</b>を行い、成果は確実にお約束いたします。<br />
                                真実を知る事から解決に至るまで責任を持ってサポートいたします。</p>
                            <p className="img"><img src="../img/company/woman.png" alt="" /><img src="../img/company/man.png" alt="" /></p>
                        </div>



                    </div>
                </Layout>
            </div>
            <Footer />
        </>
    )
}

const jsonN = "広島探偵 中央リサーチ",
jsonT = "会社概要",
jsonS = "company",
jsonD = "長年の実績を持つ広島の探偵社「中央リサーチ」の会社概要です。";

const jsonLd = {
    "@context": "http://schema.org/",
    "@graph":[
        {
            "@type":"WebSite",
            "@id":`https://www.chuou.biz/${jsonS}/#website`,
            "url":`https://www.chuou.biz/${jsonS}/`,
            "name":`${jsonT}｜ 広島の探偵　浮気調査なら55年の実績｜${jsonN}`,
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
                        "description":`当探偵社は広島に本社を構え、皆様の信頼に支えられ55年の実績を重ねてまいりました。調査・解決共経験豊富な当社にまずはお気軽にご相談ください。`,
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
        title="広島の総合探偵社中央リサーチ会社概要について"
        description="長年の実績を持つ広島の探偵社「中央リサーチ」の会社概要です。"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
)
export default company
