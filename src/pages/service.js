import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const service = () => {
    const pagemeta = {
        title:`当社の取り組み`,
        slug:jsonS
    }
    return (
        <>
        
            <div id="wrap">
            <Header h1title="調査能力や取り組みについて" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">

                        
                        <p className="mp blue2 msg">1日も早く笑顔を取り戻すために<br className="dsp_smt" />今、私たちにできることを・・・</p>
                        <h3 className="headline mp">最新の取り組み</h3>
                        <div className="box_flex">
                            <div className="txt">
                            <p>世の中の常識が大きく変わり行く現代社会に於いて、平穏な日々だけでなく様々なトラブルや苦境に直面する事も多い時代です。<br />
                                万が一、そういった問題が起こってしまった時には、その問題がエスカレートする前に、あらゆる方法で解決する能力が必要とされます。<br />
                                弊社はその問題を迅速に解決するために、コンプライアンスやガバナンスを学ぶと同時に、様々なスキルの向上を目指し社会貢献したいという思いで活動しています。<br />
                                弊社では、年に数回、探偵業の<b className="blue2 fm">教育研修会の受講や探偵調査実施訓練等</b>を行い、<b className="fm">探偵調査員の質的向上に取り組んでいます。</b></p>
                            </div>
                            <div className="photo">
                            <p><img src="../img/service/img01.png" alt="" /></p>
                            </div>
                        </div>
                        <br />
                        <div className="box_flex rev">
                            <div className="txt">
                            <h3 className="line mp">AI人工知能の導入の<br className="dsp_smt" />取組みについて</h3>
                            <p>熟練した探偵調査員の経験と知識、それに加え、AI人工知能により分析された人物行動予測データを融合し、将来への調査対策に役立てる試みを研究しております。</p>
                            <h3 className="line mp">ドローン導入による<br className="dsp_smt" />調査について</h3>
                            <p>地上からの探偵調査員による調査と共に、ドローンを使用し上空から撮影する事（証拠の確立性）を目的とする、未来に向けての調査の研究をしております。</p>
                            </div>
                            <div className="photo">
                            <p><img src="../img/service/img02.png" alt="" /></p>
                            </div>
                        </div>
                        <br />
                        <div className="box_flex">
                            <div className="txt">
                            <h3 className="line mp">探偵犬の育成で<br className="dsp_smt" />行方不明調査・ストーカー対策</h3>
                            <p>警察犬は、人間の４千倍から６千倍といわれる鋭い嗅覚等の能力を高度に訓練し、犯人や行方不明者の足取りを追う事ができます。</p>
                            <p><b>弊社の探偵犬も認知症の症状により、ご家族の元に帰る事ができなくなった方の捜索やストーカー目的で自宅付近に現れる不審人物の状況確認等に力を発揮しています。探偵犬の育成、導入により調査開始からいち早く発見、確認、命の保守を目指して日々、探偵調査員が訓練、育成を行っています。</b></p>
                            </div>
                            <div className="photo">
                            <p><img src="../img/service/img03.png" alt="" /></p>
                            </div>
                        </div>
                        <div className="mb">
                            <h3 className="line mp">カーボンニュートラルに対する<br className="dsp_smt" />取り組み</h3>
                            <p>弊社では深夜の長時間の張り込みなどでエンジンの音が近隣に迷惑をかけてしまう事を考慮し、<br className="dsp_hp" />社用車を環境に優しい電気自動車に変更する準備を開始しています。<br />
                            できるだけ地球にやさしい取り組みを全力で・・・</p>
                            <h3 className="line mp">健全な広報活動</h3>
                            <p>弊社の尾行・張り込み・聞き込みなどの調査は、特殊な技術として定評があり、そのノウハウを是非教えて欲しいと複数の報道機関からオファーをいただいおりますが、守秘義務の観点からも、報道機関を利用した宣伝戦略は自粛しております。また弊社では誇大広告（嘘・大げさな広告）を行わない事で誤解・誤認を避け、お客様の目線に合ったサービスを行うよう常に心がけております。</p>
                        </div>
                        <h3 className="headline mp">相談部の取り組み</h3>
                        <div className="box_flex license">
                            <div className="photo">
                            <p><img src="../img/service/img_license01.jpg" alt="" /></p>
                            </div>
                            <div className="txt">
                            <p className="txt_line mp"><b>指導相談員資格認定</b></p>
                            <p className="fm">ご安心ください！弊社の相談員は、国家資格である教員免許取得者や行政書士免許取得者が中心です。<br />
                                また指導相談員資格認定を受けている経験豊富なカウンセラーも在籍しています。</p>
                            <dl className="note">
                                <dt className="mp">年間相談件数 約8,000件</dt>
                                <dd>当社では、お客様にとっての<b className="fm blue2">「本当の問題解決」</b>をお手伝いするため、高い調査力はもちろんのこと、カウンセラーによるメンタルケアによって、お客様を常時サポートいたします。<br />
                                <b className="fm">調査期間中・調査後も無料でカウンセリング</b><br />
                                <b className="fm">「調査期間中もサポートをしてくれたおかげで、とても心強く、安心してお任せする事ができた、前向きな気持ちになれた」</b>との声が多く寄せられています。</dd>
                            </dl>
                            </div>
                        </div>
                        <br />
                        <div className="box_flex license mb">
                            <div className="txt">
                            <h3 className="line mp">1日も早く笑顔を取り戻して頂く為に不安･不審･疑問等の究明解決を<br className="dsp_hp" />行う事が私たち探偵の職務と考えております｡</h3>
                            <p>弊社は、今お悩みの事案について、まずは<b className="red fm">ご相談頂く事が解決に向けての第一歩</b>だと考えております。<br />
                                <b className="fm">「こんな事どこに相談したら？」</b>といった案件も<b className="fm">経験豊富な相談員が丁寧にアドバイス</b>させていただきます。<br />
                                ご相談いただく事で、今抱えているお悩みを的確かつ適正な判断の基に最良な解決方法が選択出来るかもしれません。<br />
                                <b className="fm">小さな問題から様々な案件にも幅広く対応</b>できるよう、ご相談内容に応じて<b className="fm red">各専門の相談員が対応</b>しておりますので、安心してご相談くださいませ。<br />
                                <b className="fm red">問題解決に向けて、スタッフ一同全力でサポートいたします。</b></p>
                            </div>
                            <div className="photo">
                            <p><img src="../img/service/img04.jpg" alt="" /></p>
                            </div>
                        </div>
                        <h3 className="headline mp">調査部の取り組み</h3>
                        <div className="box_flex license">
                            <div className="photo">
                            <p><img src="../img/service/img_license02.jpg" alt="" /></p>
                            </div>
                            <div className="txt">
                            <p className="txt_line mp"><b>１級調査士資格認定</b></p>
                            <p className="fm">弊社の探偵調査員は、１０年以上の経験豊富かつ卓越した技術が自慢です。<br />
                                調査内容に応じて元刑事や元鑑識課（科捜研）も調査を行います。<br />
                                また<b>１級調査士資格認定</b>を受けている経験３０年以上の優秀な探偵も在籍しています。</p>
                            <ul className="chk">
                                <li>探偵実績50年以上。<b className="fm red">「積み重ねてきた経験と、独自の調査力」</b></li>
                                <li>一流のプロ探偵によるチーム調査で<b className="fm red">「決定的な証拠」</b>をしっかりと押さえます。</li>
                                <li>一番大事なことは<b className="fm red">「調査をして真実を知ること」</b>です。</li>
                            </ul>
                            </div>
                        </div>
                        <p>弊社では、<b className="fm">他社に真似できない調査技術をもっていると自負しています。その卓越した技術で探偵調査を行い納得頂ける調査結果をお届けしています。</b></p>
                        <br />
                        <div className="box_flex">
                            <div className="txt">
                            <h3 className="line mp">報告書（写真・ビデオ撮影）は他社に負けない超高画質！</h3>
                            <p>弊社では通常のコピー用紙に印刷したような低画質な報告書（証拠写真）ではなく<b className="fm">専用の写真用紙に印刷した超高画質な報告書</b>を提供しています。<br />
                                弊社の探偵調査員の写真やビデオの知識や画質などの撮影レベルは、プロのカメラマンよりも優れていると思っています。特に尾行しながらの暗所撮影には弊社独自の特殊な撮影テクニックがあります。</p>
                            </div>
                            <div className="photo">
                            <p><img src="../img/service/img05.png" alt="" /></p>
                            </div>
                        </div>
                        <div className="mb">
                            <h3 className="line mp">ビデオとカメラの違い<br className="dsp_smt" />（暗い場所撮影時）</h3>
                            <p>暗い場所での撮影時、4Kなどの高画質ビデオであっても高画質の一眼レフカメラ（１００万相当のもの）と比較するとスペックの差は大きく、<b className="fm">カメラの方がはるかに画素数、センサーサイズが大きく鮮明画質になります。</b>（動画を撮影し静止画にキャプチャした場合も画素数は下がります）<br />
                            探偵調査員が使用してみた結果、一眼レフのカメラでは、レンズF値（レンズの明るさ）が1.2の物もあり、ビデオと比べてレンズの方が明るいため、<b className="fm blue2">暗くても早くピントが合う</b>事と顔も鮮明に写す事ができます。<br />
                            またカメラにはピントを事前に合わすマニュアル設定機能もありますので、<b className="fm blue2">大切な証拠の撮り逃がしのリスクが低くなります。</b></p>
                            <h3 className="line mp">ナイトショット（赤外線カメラ）とは？</h3>
                            <p>ナイトショットは夜間撮影用に開発されたもので、赤外線を使用する事で暗い場所での撮影に適している機能ですが、市販されているものは赤外線の到達距離が5メートル程度となり、それ以上離れると写らないのが一般的です。よって対象者に気づかれないよう、探偵が10メートル以上離れたところから撮影するのでは実用性にかけますが、弊社では30～50メートル離れていても撮影可能な軍用の特殊赤外線カメラも保有しています。</p>
                        </div>
                        <h3 className="smp bg_wide mp"><b>報告書写真サンプル</b></h3>
                        <div className="smp pb box_flex">
                            <div className="w2">
                            <ul className="arow">
                                <li><div><img src="../img/service/img_smp01.jpg" alt="" /></div></li>
                                <li><div><img src="../img/service/img_smp02.jpg" alt="" /></div></li>
                            </ul>
                            <p>ズームで、ここまで撮ることが出来ます</p>
                            </div>
                            <div className="w2">
                            <ul>
                                <li><div><img src="../img/service/img_smp03.jpg" alt="" /><span>2022.2.22 9:12</span></div></li>
                                <li><div><img src="../img/service/img_smp04.jpg" alt="" /><span>2022.2.22 9:43</span></div></li>
                            </ul>
                            <p>証拠となるホテルの出入りや、<br className="dsp_tbs" />自宅の出入りを確実に撮影</p>
                            </div>
                            <div className="w4">
                            <ul>
                                <li><div><img src="../img/service/img_smp05.jpg" alt="" /><span>ふつうのカメラ</span></div></li>
                                <li><div><img src="../img/service/img_smp06.jpg" alt="" /><span>高感度カメラ</span></div></li>
                                <li><div><img src="../img/service/img_smp07.jpg" alt="" /><span>超高感度カメラ</span></div></li>
                                <li><div><img src="../img/service/img_smp08.jpg" alt="" /><span>赤外線カメラ</span></div></li>
                            </ul>
                            <p className="lft">フラッシュOFFで夜間でも超高感度カメラや赤外線カメラでしっかり証拠を撮影します</p>
                            </div>
                            <div className="w4">
                            <ul>
                                <li><div><img src="../img/service/img_smp09.jpg" alt="" /><span>2022.2.22 13:22</span></div>二人でデート中の写真</li>
                                <li><div><img src="../img/service/img_smp10.jpg" alt="" /><span>2022.2.22 13:38</span></div>車両に乗車中の写真</li>
                                <li><div><img src="../img/service/img_smp11.jpg" alt="" /><span>2022.2.22 13:45</span></div>車内にて会話を<br className="dsp_tbs" />楽しんでいる写真</li>
                                <li><div><img src="../img/service/img_smp12.jpg" alt="" /><span>2022.2.22 14:32</span></div>場所が特定できる<br className="dsp_tbs" />標識入りの写真</li>
                            </ul>
                            </div>
                        </div>


                    </div>
                </Layout>
            </div>
            <Footer />
        </>
    )
}

const jsonN = "広島探偵 中央リサーチ",
jsonT = "広島の探偵事務所中央リサーチの調査能力、取り組みについて",
jsonS = "service",
jsonD = "当探偵社は広島に本社を構え、皆様の信頼に支えられ55年の実績を重ねてまいりました。調査・解決共経験豊富な当社にまずはお気軽にご相談ください。";

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
        title="広島の探偵事務所中央リサーチの調査能力、取り組みについて"
        description="当探偵社は広島に本社を構え、皆様の信頼に支えられ55年の実績を重ねてまいりました。調査・解決共経験豊富な当社にまずはお気軽にご相談ください。"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
)
export default service
