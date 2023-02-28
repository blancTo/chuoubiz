import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const type = () => {
    const pagemeta = {
        title:`離婚の種類について`,
        slug:`type`
    }
    return (
        <>
        
            <div id="wrap">
            <Header h1title="離婚の種類についての説明" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">
                        <div className="pb">
                            <h3 className="headline">離婚の種類について</h3>
                            <div className="box_flex">
                            <dl>
                                <dt>協議離婚</dt>
                                <dd>夫婦間の合意により最寄りの役所へ離婚届を提出する事で離婚が成立します。</dd>
                            </dl>
                            <dl>
                                <dt>調停離婚</dt>
                                <dd>協議離婚が出来ない場合、家庭裁判所にて家事調停官・調停委員が２人の間に入り離婚を話し合います。</dd>
                            </dl>
                            <dl>
                                <dt>審判離婚</dt>
                                <dd>調停時に家庭裁判所の判断で下される審判により離婚を成立させます。</dd>
                            </dl>
                            <dl>
                                <dt>判決離婚</dt>
                                <dd>お互いそれぞれに弁護士等を立てて、裁判官の判決により離婚問題を解決します。</dd>
                            </dl>
                            </div>
                        </div>
                        <div className="pt pb bg bg_wide">
                            <dl>
                            <dt className="mp">協議離婚-民法第763条<br className="dsp_smt" />（夫婦がお互いに同意）</dt>
                            <dd>
                                <p className="img"><img src="../img/type/img01.jpg" alt="" /></p>
                                <p className="txt nm">現在の日本では<b className="red fm">協議離婚による離婚方法が大半</b>を占めています。<br />
                                確実な証拠を基に相手が不貞行為を認めていて、金銭面等の離婚条件でも夫婦間の合意に達していれば離婚が成立します。<br />
                                お互いに条件面での話し合いが成立した後、離婚届を作成、市区町村役場に提出し、離婚届が受理されれば離婚は成立します。<br />
                                離婚届の記入に必要なのは夫婦の署名、捺印、2人以上の成人の証人による署名と捺印です。<br />
                                未成年の子供がいる場合は、親権者を記入する必要があります。</p>
                            </dd>
                            </dl>
                            <dl>
                            <dt className="mp">調停離婚-家事審判法第21条<br className="dsp_smt" />（家庭裁判所による調停）</dt>
                            <dd>
                                <p className="img"><img src="../img/type/img02.jpg" alt="" /></p>
                                <p className="txt nm"><b className="red fm">協議離婚で条件面等で話し合いがまとまらない場合、家庭裁判所での調停</b>となります。<br />
                                現在の日本では<b className="blue2 fm">離婚の約10％が調停離婚</b>となっています。<br />
                                家庭裁判所は家事相談室で相談を無料で受け付けていますので、調停に際しての不安がある場合はまず相談をしてみて下さい。その際、確実な証拠があればそれを基に相談をします。<br />
                                万が一相手が調停の呼び出しに正当な理由も無く出頭しない場合、5万円以下の罰金が科せられます。また離婚の話し合いに応じない相手などには、一定の強制力がありますので調停での話し合いをお勧め致します。</p>
                            </dd>
                            </dl>
                            <dl>
                            <dt className="mp">審判離婚-民法770条<br className="dsp_smt" />（家庭裁判所による審判）</dt>
                            <dd>
                                <p className="img"><img src="../img/type/img03.jpg" alt="" /></p>
                                <p className="txt nm"><b className="red fm">家庭裁判所における調停が成立しない場合に、家庭裁判所が職権で離婚を宣言します。</b><br />
                                調停を重ねて最終的な合意まであと少しの所で気が変わった、調停が成立寸前なのに出頭しなかったなどの理由で調停が成立しないときに、家庭裁判所が当事者双方にとって公平な結果になるように離婚や、親権、財産分与、慰謝料の決定などを行う事があります。<br />
                                当然ですが<b className="blue2 fm">確実な証拠があれば有利な決定を受けられます。</b></p>
                            </dd>
                            </dl>
                            <dl>
                            <dt className="mp">裁判離婚家事審判法第24条<br className="dsp_smt" />（家庭裁判所による判決）</dt>
                            <dd>
                                <p className="img"><img src="../img/type/img04.jpg" alt="" /></p>
                                <p className="txt nm">離婚の話が当事者間の話し合い（協議）でまとまらず、家庭裁判所での調停や審判でも離婚成立にいたらなかった場合で、<b className="red fm">それでも離婚を望む場合には裁判よる判決離婚となります。</b><br />
                                相手がどんなに離婚に応じる気がなくても裁判所の判決によっては強制的に離婚に応じなくてはなりません。但し判決離婚には民法上の離婚原因を満たしていることが条件となります。<br />
                                また裁判で勝訴する為には確実な証拠が重要なカギを握ります。場合によっては証人出廷の必要な時もあります。裁判は訴訟法による手続きが必要なので判決離婚の場合、専門家である弁護士に依頼して争うのが一般的と言えます。</p>
                            </dd>
                            </dl>
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
        title2="広島で離婚の種類について説明します"
        description="離婚と一言で表しても様々な種類がございます。届出を提出するだけで良いものや、裁判を通すもの等です。離婚の種類について広島の探偵社「中央リサーチ」が説明させていただきます。"
        keyword="離婚,裁判,広島,探偵,中央リサーチ"
        />
    </>
)
export default type