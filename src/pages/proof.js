import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const proof = () => {
    const pagemeta = {
        title:`内容証明について`,
        slug:`proof`
    }
    return (
        <>
        
            <div id="wrap">
            <Header h1title="内容証明は浮気の慰謝料請求の方法です。" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">

                        <div className="img_headline_area">
                            <div className="sec">
                            <div className="info">
                                <h3 className="headline">内容証明と浮気による慰謝料請求について</h3>
                                <p>内容証明は浮気相手（不倫相手）に対し、慰謝料請求を行う際によく用いられます。<br />
                                浮気による<b className="fm blue2">精神的苦痛、あるいは肉体的苦痛に対する賠償</b>です。</p>
                                <p className="nm">民法では<b className="fm">「夫婦の一方の配偶者と肉体関係を持った第三者は、故意又は過失がある限り、右配偶者を誘惑するなどして肉体関係を持つに至らせたかどうか、両名の関係が自然の愛情によって生じたかどうかにかかわらず、他方の配偶者の夫又は妻としての権利を侵害し、その行為は違法性を帯び、右他方の配偶者の被った精神上の苦痛を慰謝すべき義務があるというべきである。」</b>とあります。</p>
                            </div>
                            <p className="img nm"><img src="../img/proof/img01.jpg" alt="" /></p>
                            </div>
                        </div>
                        <div className="proof_wrap">
                            <p className="img"><img src="../img/proof/img02.jpg" alt="" /></p>
                            <div>
                            <div className="box">
                                <h3 className="line mp">内容証明とは</h3>
                                <p>内容証明とは、<b className="red fm">郵便法により定められている制度により発送される特殊な郵便</b>のことです。<br />
                                正式には<b className="fm">「内容証明郵便」</b>といいます。普通の手紙と違い、内容証明では、誰が誰宛にいつ手紙を出したか、そしてその内容までが公的に証明されます。<br />
                                ただ、内容証明では相手方に手紙が到達したことを証明できませんから、内容証明で手紙を出す場合は、配達証明付にするのが一般的です。配達証明付にすることにより、相手が手紙を受け取ったこと、そしてその日付までも証明することができます。</p>
                            </div>
                            <div className="box">
                                <h3 className="line mp">配達証明（郵便）とは</h3>
                                <p>配達証明（郵便）とは、<b className="red fm">相手に何月何日に配達したのかを、手紙の差出人に証明</b>してくれるものです。相手が手紙を受け取ったこと、手紙を受け取った日付を郵便局（郵便事業株式会社）が証明してくれます。</p>
                                <p>※内容証明（郵便）では、相手に手紙が到達したことを証明できないことに注意する。<br />
                                ※文書の場合は、内容証明と配達証明の両方を利用することが望ましい。</p>
                            </div>
                            </div>
                        </div>
                        <div className="box pb">
                            <h3 className="line mp">内容証明郵便の効果</h3>
                            <ol className="no_maru">
                            <li>内容証明郵便の本来的効果、つまり、手紙の到達とその内容の証明する効果です。</li>
                            <li>相手に精神的プレッシャー・心理的圧迫を与えるという効果があります。相手に対し、こちらが本気であることを、強烈に知らせることができます。</li>
                            <li>確定日付を得るという効果。</li>
                            </ol>
                            <p className="nm">内容証明の本来の効果は、<b className="fm blue2">公的に証拠として残る</b>ということですが、内容証明を受け取った相手は、普通の手紙をもらう以上に「何とかしなければ」と思うものです。<br />
                            実際、公的な証拠がある以上、「そんな手紙知りません」と言って逃げることができなくなるし、何とかしないと本当にまずいことが起こる場合があるからです。<br />
                            今後のことを考え、相手は行動を起こさざるを得ないということになるのです。内容証明の証拠力という効果は、<b className="fm red">相手に行動を起こさせる効果をも生む</b>のです。</p>
                        </div>
                        <div className="what bg_wide">
                            <h3 className="cen mp">内容証明に何を明記すればよいか？</h3>
                            <div className="wrap">
                            <dl>
                                <dt><img src="../img/chk02.png" alt="" /></dt>
                                <dd className="blue2 mp">夫との間に不貞行為が<br className="dsp_hp" />あったという<br className="dsp_smt" />事実の内容</dd>
                            </dl>
                            <dl>
                                <dt><img src="../img/chk02.png" alt="" /></dt>
                                <dd className="blue2 mp">夫との交際を<br className="dsp_hp" />辞めることを求める内容</dd>
                            </dl>
                            <dl>
                                <dt><img src="../img/chk02.png" alt="" /></dt>
                                <dd className="blue2 mp">慰謝料を請求する旨の内容<br className="dsp_hp" /><br className="dsp_smt" />（要求する慰謝料金額を明記）</dd>
                            </dl>
                            </div>
                        </div>
                        <div className="notice pt pb">
                            <div className="box">
                            <h3 className="cen mp red">内容証明作成の際の注意点</h3>
                            <ol className="no_maru red">
                                <li>事実のみを明記する</li>
                                <li>脅迫めいた文章は一切明記しない</li>
                            </ol>
                            <p className="nm">内容証明は逆に相手に証拠として利用される可能性もあります。脅迫めいた文章を明記すると反対に慰謝料を請求されかねません。<br />
                                また、事実ではないことを明記してしまうと、「証拠はない」「事実と反する」と判断され、反対に相手が有利な立場になってしまう可能性もあります。</p>
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
        title="内容証明と慰謝料請求について"
        keyword="内容証明,浮気調査,広島,探偵,中央リサーチ"
        description="内容証明は浮気・不倫相手に対し、慰謝料請求を行う際によく用いられます。浮気調査・離婚に関する内容証明について広島の探偵社「中央リサーチ」が説明させていただきます。"
        />
    </>
)
export default proof
