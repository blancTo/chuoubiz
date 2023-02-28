import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const fingerprint = () => {
    const pagemeta = {
        title:`指紋・筆跡鑑定`,
        slug:`fingerprint`
    }
    return (
        <>
        
            <div id="wrap">
            <Header h1title="指紋、声紋、筆跡鑑定について" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">
                        <div className="bg bg_wide pb">
                            <h3 className="blue2 cen mp">不信・不安を解消するために・・・</h3>
                            <p className="cen txt"><b className="red fm">科学的調査技術を持った複数のスタッフ及び、<br className="dsp_tbs" />警察OBで鑑識課に配属していた経験20年以上のベテランが調査に当たります。</b><br />
                            指紋検出・指紋鑑定・声紋鑑定・筆跡鑑定などを行います。<br />
                            通常は簡易鑑定ですが裁判に提出する場合は鑑定書付きのものを発行可能です。</p>
                            <div className="chk_box">
                            <dl>
                                <dt className="bg_blue_grad2 white">こんな場合に指紋鑑定を･･･</dt>
                                <dd>
                                <ul className="chk">
                                    <li>自宅にある物や、金庫の<b>お金が知らぬ間になくなった</b></li>
                                    <li>怪文書などの<b>手紙や宅配便が届いた</b></li>
                                    <li><b>不審者が自宅を出入りしている可能性がある</b></li>
                                    <li>いじめ・嫌がらせを行う<b>人物の特定がしたい</b></li>
                                </ul>
                                <ul className="chk">
                                    <li><b>ストーカー被害</b>を受けている</li>
                                    <li>車が傷つけられたり、GPSをつけられた</li>
                                    <li>空き巣などの被害を受け、<b>犯人を特定したい</b></li>
                                    <li><b>警察に動いてもらう為の動かぬ証拠を取りたい</b></li>
                                </ul>
                                </dd>
                            </dl>
                            </div>
                        </div>
                        <div className="img_headline_area pt">
                            <div className="sec">
                            <div className="info">
                                <h3 className="headline">指紋検出</h3>
                                <p>ご自宅にある金庫の宝石や現金などが<b className="red fm">盗難被害</b>にあった場合や、会社内での金品の盗難などをスタッフが訪問し指紋の採取を行います。<br />
                                また、自家用車、社用車などに傷をつけられたり、いたずらされた等も指紋採取可能です。（採取作業の所要時間は2時間～3時間程度）また誹謗中傷の手紙や封筒、切手はがき等に付着した指紋の採取も可能ですが、<b className="fm blue2">紙素材の場合は指紋がしみ込みますので、早期にご相談ください。</b></p>
                            </div>
                            <p className="img"><img src="../img/fingerprint/img01.jpg" alt="" /></p>
                            </div>
                            <div className="sec">
                            <div className="info">
                                <h3 className="headline">指紋鑑定</h3>
                                <p>様々な被害にあわれた方のために、<b className="red fm">指紋鑑定により特定の人物が行ったという確実な証拠</b>をとります。また、ストーカー被害による無記名の誹謗中傷、不審な郵便物や、郵便物を盗まれたり、車を物色されたり、傷つけたりといった被害も多発しています。<br />
                                他にも何者かが自宅に侵入、金庫を開錠し金品を持ち去ったというケースもあります。<br />
                                さらに<b className="fm">会社内の嫌がらせや不正などを行う人物の特定</b>にもお役に立てる調査方法です。心当たりのある人物であれば、Aサンプルの指紋とＢサンプルの指紋を照合する事で<b className="red fm">正確に犯人を特定することが可能</b>です。</p>
                            </div>
                            <p className="img"><img src="../img/fingerprint/img02.jpg" alt="" /></p>
                            </div>
                            <div className="sec">
                            <div className="info">
                                <h3 className="headline">声紋鑑定</h3>
                                <p>いたずら電話やSNSなどの嫌がらせ被害を受けている方が非常に増えています。そういった被害にあった場合、もし記録データがあれば、<b className="fm">残された音声から特定の人物を割り出す</b>など、声紋鑑定を行います。また夫や妻に対して浮気の疑いや、何らかの違和感や不信感から、ドラレコやボイスレコーダー等で録音をされる方がおられます。<br />
                                そういった場合、その会話を分析し<b className="fm">疑いのある人物</b>との声紋鑑定により人物を特定する事も可能です。</p>
                            </div>
                            <p className="img"><img src="../img/fingerprint/img03.jpg" alt="" /></p>
                            </div>
                            <div className="sec">
                            <div className="info">
                                <h3 className="headline">筆跡鑑定</h3>
                                <p>届いた怪文書がAサンプルとし、疑いのある人物の記した文書をBサンプルとした時、それが一致するのか、筆跡の鑑定をします。<br />
                                また<b className="fm">遺言書、契約書、承諾書等（有印私文書偽造の疑いのあるもの）</b>の筆跡が<b className="red fm">本当に本人によるものなのか</b>を確認したい場合は、お早めにご相談ください。</p>
                            </div>
                            <p className="img"><img src="../img/fingerprint/img04.jpg" alt="" /></p>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
            <Footer />
        </>
    )
}
export const Head = () => (
    <>
       <Seo
        title="指紋、声紋、鑑定筆跡の調査は広島の総合探偵社中央リサーチ"
        keyword="指紋,声紋,筆跡,鑑定,広島,探偵,中央リサーチ"
        description="広島の探偵社「中央リサーチ」、指紋・声紋・筆跡鑑定についての説明ページです。"
        /> 
    </>
)
export default fingerprint
