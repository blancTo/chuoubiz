import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const trial = () => {
    const pagemeta = {
        title:`裁判証拠収集`,
        slug:`trial`
    }
    return (
        <>
        
            <div id="wrap">
            <Header h1title="裁判証拠収集について" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main pb">
                      <div className="bg bg_wide pb chk_box">
                        <h3 className="mp cen blue2">裁判を有利に進める為<span className="dsp_hpt">の</span><br className="dsp_smt" />お力になります</h3>
                        <dl>
                          <dt className="bg_blue_grad2">こんなことでお悩みの方へ・・・</dt>
                          <dd>
                            <ul className="chk">
                              <li>浮気・不倫による不貞行為の証拠</li>
                              <li>従業員の不正行為の証拠</li>
                              <li>SNSによる誹謗中傷の証拠</li>
                              <li>いじめ行為の証拠</li>
                            </ul>
                            <ul className="chk">
                              <li>嫌がらせ行為の証拠</li>
                              <li>パワハラ、セクハラ、モラハラなどの証拠</li>
                              <li>車両へのいたずら行為の証拠</li>
                              <li>名誉棄損の証拠</li>
                            </ul>
                            <ul className="chk">
                              <li>結婚詐欺の証拠</li>
                              <li>投資詐欺の証拠</li>
                              <li>住居侵入や盗難の証拠</li>
                              <li>交通事故の事実関係の証拠</li>
                            </ul>
                          </dd>
                        </dl>
                      </div>
                      <div className="important pt pb">
                        <h3 className="headline">浮気で裁判になる場合も証拠が最も重要になります。</h3>
                        <p>配偶者が浮気をしていているのはわかっているが、相手は事実を認めないし浮気相手とも別れてくれない・・・、そんなつらい思いをされている方。<br />
                          また、この精神的苦痛を理由に慰謝料を請求したいけど、どうすればよいのか悩んでいる、そういった方は多いと思います。<br />
                          離婚裁判において双方の主張が異なる場合、裁判を有利に進めるためには、不貞の証拠が最も重要になります。</p>
                        <div className="box_flex">
                          <p className="img"><img src="../img/trial/img01.jpg" alt="" /></p>
                          <div className="info">
                            <div className="sec">
                              <h3 className="mp line">裁判になる前に証拠をそろえておく必要があります</h3>
                              <p><b className="fm">裁判で浮気を事実と断定されるのは、民法770条1項1号の「配偶者に不貞な行為があったとき」</b>です。<br />
                                その為には、例えばラブホテルの出入りや、経過時間を立証できる写真、動画など確かに不貞行為があったと判断される証拠があれば裁判で勝てる可能性が高くなります。<br />
                                メールやラインのメッセージなどだけでは不貞と裏付けることは、ほとんど不可能なのです。</p>
                            </div>
                            <div className="sec">
                              <h3 className="mp line">浮気・離婚裁判の慰謝料相場はどれくらい？</h3>
                              <p>浮気相手に裁判でどれだけの慰謝料を請求できるかはケース・バイ・ケースですが、一般的な相場は50万円から300万円となります。慰謝料を高額請求するには明確な浮気の証拠を用意して、専門の弁護士に相談することが基本です。夫婦関係は問題なかったのに、パートナーの長期に渡る浮気がきっかけで精神的苦痛を伴って離婚に至った場合の慰謝料相場は約200万円から400万円です。</p>
                            </div>
                            <div className="sec">
                              <h3 className="mp line">自分で浮気の証拠収集をするのは大変でリスクもある</h3>
                              <p>自分で確かな証拠を掴もうと、相手の携帯番号やパソコンを覗いたりすると、警戒をして証拠を隠したり、消される可能性もあります。勝手にパソコンやスマートフォンにログインしてスケジュールを見たり、写真を撮ると、逆に訴えられるリスクもあります。自分で証拠集めしようと相手を尾行して、ラブホテルや自宅に入る瞬間に怒りを抑えられず、その場でトラブルに発展するケースもあるので注意が必要です。</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="example">
                        <h3 className="smp bg_wide mp"><b>裁判証拠の事例</b></h3>
                        <div className="bg02 bg_wide pt pb">
                          <div className="box_flex">
                            <dl>
                              <dt><img src="../img/trial/jirei01.jpg" alt="" /></dt>
                              <dd>
                                <p className="no nm serif">01</p>
                                <p className="line mp cen"><span>不貞の証拠</span></p>
                                <p className="txt nm cen">浮気調査で不貞の証拠撮りを行います。</p>
                              </dd>
                            </dl>
                            <dl>
                              <dt><img src="../img/trial/jirei02.jpg" alt="" /></dt>
                              <dd>
                                <p className="no nm serif">02</p>
                                <p className="line mp cen"><span>いじめ・嫌がらせの証拠</span></p>
                                <p className="txt nm cen">SNSの誹謗中傷から<br className="dsp_smt" />嫌がらせ等の証拠をとります。</p>
                              </dd>
                            </dl>
                            <dl>
                              <dt><img src="../img/trial/jirei03.jpg" alt="" /></dt>
                              <dd>
                                <p className="no nm serif">03</p>
                                <p className="line mp cen"><span>従業員の不正の証拠</span></p>
                                <p className="txt nm cen">労働規約違反をする事実の証拠をとります。</p>
                              </dd>
                            </dl>
                            <dl>
                              <dt><img src="../img/trial/jirei04.jpg" alt="" /></dt>
                              <dd>
                                <p className="no nm serif">04</p>
                                <p className="line mp cen"><span>盗難や住居侵入の証拠</span></p>
                                <p className="txt nm">指紋検出や防犯カメラで事実関係の証拠をとります。</p>
                              </dd>
                            </dl>
                            <dl>
                              <dt><img src="../img/trial/jirei05.jpg" alt="" /></dt>
                              <dd>
                                <p className="no nm serif">05</p>
                                <p className="line mp cen"><span>交通事故の事実関係の証拠</span></p>
                                <p className="txt nm">双方の主張の食い違いを調査し真実を立証します。</p>
                              </dd>
                            </dl>
                            <dl>
                              <dt><img src="../img/trial/jirei06.jpg" alt="" /></dt>
                              <dd>
                                <p className="no nm serif">06</p>
                                <p className="line mp cen"><span>隠匿資産の証拠</span></p>
                                <p className="txt nm cen">相続に係る分配資産の事実確認を行います。</p>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="need pt">
                        <h3 className="headline">裁判証拠収集には技術と経験が必要です</h3>
                        <div className="box_flex">
                          <div className="info">
                            <h3 className="line mp">浮気の証拠も、嫌がらせの証拠収集も夜間の撮影が中心です。</h3>
                            <p>証拠撮りは一見、<b className="fm">ご自分でもできるかも？</b>と、お考えではないでしょうか？<br />
                              一般の方が、安易に尾行・張り込み、撮影などをされますと相手に気づかれてしまい（気づかれていないように見えて実は気づいているケースが多い）、<b className="red blue2">場合によっては、ストーカー行為と思われ警察に通報される</b>場合もあります。（犯罪行為）<br />
                              夜間、相手に気づかれることなく尾行しながら、ホテルまたはマンションに出入りする瞬間の対象者の顔写真（約2秒間）を捉えるのは、経験豊富な調査員でも苦労が絶えないのが現状です。（ピントが合っていないと証拠不十分で認められません）<br />
                              調査現場は様々な状況があり、人目につく場所もあれば、全く灯りがない場所もあります。また、調査現場では近所の住民に不審に思われたりしないように配慮もしなければなりません。だから技術と経験が必要なのです。</p>
                          </div>
                          <p className="img"><img src="../img/trial/img02.jpg" alt="" /></p>
                        </div>
                        <div className="box_flex">
                          <div className="info">
                            <h3 className="line mp">動かぬ証拠収集は弊社にお任せください。弊社の調査能力は野球で例えればプロ野球レベルです、決して少年野球レベルではありません。</h3>
                            <p><b className="red fm">探偵経験10年以上で技術のある調査員が、責任感をもって、相手に気づかれることなく、匠みな運転技術（車・バイク）と特殊なプロ用のカメラ機材（超高感度カメラ・超望遠レンズ）で鮮明な撮影を行います。</b><br />
                              当然ですが夜間の調査ではフラッシュは一切使用しません。</p>
                            <h2 className="line">報告書の重要性について</h2>
                            <p>裁判に提出する証拠の信憑性や重要度は、その記録、証拠写真、映像など調査報告書の内容により結果が大きく変わります。<br />
                              実績のある弊社の調査報告書はお客様にとって必要なものであり、裁判証拠として認められ、必ずお役に立てるものと自負しております。</p>
                          </div>
                          <p className="img"><img src="../img/trial/img03.jpg" alt="" /></p>
                        </div>
                      </div>
                      <div className="img_headline_area">
                        <div className="sec">
                          <div className="info">
                            <h3 className="headline">広島の弁護士事務所から唯一、<br className="dsp_hp" />推奨される探偵社です。</h3>
                            <p>お客様から、<b className="fm">「弁護士事務所から紹介を受けました」</b>とのご相談・ご依頼も多数承っております。<br />
                              <b className="red fm">証拠撮りに関しては最も得意分野</b>であり、弊社の調査報告書をご覧になった弁護士の先生方から過去に問題点等の指摘を受けた事はなく、常に適正に評価をいただき、動かぬ証拠資料として採用されております。<br />
                              一般的に双方の間で紛争が続くと最終的には裁判に移行することが多く、その時に慌てて証拠を撮ろうと思っても、対象者は警戒を高め証拠が撮りにくい環境になっています。後手に回り後悔することのない様、早めに調査をご依頼いただき、問題行動のあるうちに<b className="fm blue2">十分な証拠収集をしておきましょう。</b><br />
                              確実に裁判を有利に進める為には、ご自身が思うような簡単な証拠より、<b className="red fm">弁護士事務所及び裁判所が認める動かぬ証拠が必要</b>なのです。また、一旦裁判に敗訴してしまうと、覆すことは容易ではありません。</p>
                            <br />
                            <p className="nm"><b className="fm blue2">｢最初からプロにお願いしておけばよかった｣</b>と後悔されない為にも、まずは現状を早期に、ご相談ください。</p>
                          </div>
                          <p className="img"><img src="../img/trial/img04.jpg" alt="" /></p>
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
        title2="離婚調停や裁判で証拠収集が必要なケース"
        description="裁判証拠収集には熟練された技術と経験が必要です。広島の探偵社として長年の実績を持つ当社にお任せください。"
        keyword="裁判,証拠,探偵,広島,中央リサーチ"
        /> 
  </>
)
export default trial