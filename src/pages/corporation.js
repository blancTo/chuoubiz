import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const corporation = () => {
    const pagemeta = {
        title:`法人様向けプラン`,
        slug:`corporation`
    }
    return (
        <>
            
            <div id="wrap">
            <Header h1title="企業、法人向けの信用調査" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">

                        <div className="bg bg_wide pb">

                            <h3 className="txt cen blue2">中央リサーチが誇る高い調査力と信頼を活かし、ビジネスにおける課題を解決し、<br className="dsp_tbs" />経営リスクから貴方の会社を守ります</h3>
                            
                            <div className="box_flex">
                                <div id="credit-check" className="pad_anchor">
                                    <div className="bg_dia">
                                        <dl>
                                            <dt className="mp">企業信用調査</dt>
                                            <dd>
                                            <p className="img"><img src="../img/corporation/img01.jpg" alt="" /></p>
                                            <p className="nm">新しく取り引きを開始するにあたり、<b className="fm blue2">その会社の業績や、財務状況、規模、成長性、評価など会社の信用度</b>を側面から、お調べいたします。<br />
                                                必要に応じて、代表者の人物性や風評、生活実態、なども調査可能です。<br />
                                                もちろん既存の取り引き先に関しても定期的に経営状態を確認する事で、良好な取り引き関係を保ち、またリスクヘッジを行う事ができます。<br />
                                                企業経営において、取り引き上のトラブルを未然に回避できる大きなメリットがあるのが企業信用調査です。</p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div id="employment-Survey" className="pad_anchor">
                                    <div className="bg_dia">
                                        <dl>
                                            <dt className="mp">採用調査</dt>
                                            <dd>
                                            <p className="img"><img src="../img/corporation/img02.jpg" alt="" /></p>
                                            <p className="nm">「人材」の採用は極めて重要な企業活動です。新しく従業員を採用するにあたり、反社会的勢力との関わりや、社会的に問題となる過激な思想など会社に損害を与えるような人物なのか、面接や履歴書などの表面上では解りにくい、隠された本当の人物性や経歴、評価、思想など真実を側面からお調べします。</p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div id="market-research" className="pad_anchor">
                                    <div className="bg_dia">
                                        <dl>
                                            <dt className="mp">市場調査</dt>
                                            <dd>
                                            <p className="img"><img src="../img/corporation/img03.jpg" alt="" /></p>
                                            <p className="nm">新しくお店を出店したり、開業を検討をされておられる方など、<b className="fm blue2">交通量や場所、相乗効果などの市場性</b>をプロの視点で情報収集し、成功するための参考資料にお役立て頂きたいと思います。</p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div id="employee-behavior" className="pad_anchor">
                                    <div className="bg_dia">
                                        <dl>
                                            <dt className="mp">従業員の素行</dt>
                                            <dd>
                                            <p className="img"><img src="../img/corporation/img04.jpg" alt="" /></p>
                                            <p className="nm">現在、雇用されている従業員の規約違反や不正などの疑いがある場合、該当の従業員の勤務実態などを、<b className="fm blue2">分単位で記録し証拠を撮る調査</b>です。<br />
                                                解雇する際に、不当解雇と主張する事を否定できる材料となります。</p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div id="crisis-management" className="pad_anchor">
                                    <div className="bg_dia">
                                        <dl>
                                            <dt className="mp">危機管理</dt>
                                            <dd>
                                            <p className="img"><img src="../img/corporation/img05.jpg" alt="" /></p>
                                            <p className="nm">会社内での<b className="fm blue2">盗聴・盗撮・情報漏洩や不正アクセス</b>など、大きなトラブルに発展しないための危機管理を行います。</p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div id="traffic-accident" className="pad_anchor">
                                    <div className="bg_dia">
                                        <dl>
                                            <dt className="mp">交通事故調査</dt>
                                            <dd>
                                            <p className="img"><img src="../img/corporation/img06.jpg" alt="" /></p>
                                            <p className="nm">交通事故で双方の言い分の違いからトラブルになるケースも良く耳にします。<br />
                                                <b className="fm blue2">目撃者探しなど、掘り下げて再調査し真実を追求</b>いたします。</p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div id="intellectual-property" className="pad_anchor">
                                    <div className="bg_dia">
                                        <dl>
                                            <dt className="mp">知的財産調査</dt>
                                            <dd>
                                            <p className="img"><img src="../img/corporation/img07.jpg" alt="" /></p>
                                            <p className="nm">商標の使用に関する有無の実態調査。特許・意匠の実施に関する調査。特許庁での商標に関連した審査・審判、裁判での訴訟においての資料収集調査。図形商標調査・文字商標調査・知的財産権の侵害や模倣品による被害の実態調査など、様々な企業利益に直結する問題に対応します。</p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div id="competitor-Survey" className="pad_anchor">
                                    <div className="bg_dia">
                                        <dl>
                                            <dt className="mp">競合他社調査</dt>
                                            <dd>
                                            <p className="img"><img src="../img/corporation/img08.jpg" alt="" /></p>
                                            <p className="nm">企業活動に於いて、競合他社を知ることと、自社のポジションを正確に把握することは、経営戦略を構築する上で非常に重要なことです。情報収集と分析をする目的を明確にし、信用できる有効なデータを提供します。</p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="special pt pb">
                            <h3 className="mp cen red">特約店のご契約も<br className="dsp_smt" />承ります！</h3>
                            <div className="box">
                                <p className="img"><img src="../img/corporation/contact.jpg" alt="" /></p>
                                <div className="info">
                                    <h4 className="mp">法人様専門カウンセラーが的確かつ<br className="dsp_hpt" />適正なプランをご提案いたします。詳しくはご相談ください。</h4>
                                    <div className="wrap">
                                    <div className="shikaku">無料<br className="dsp_hpt" /><span>相談窓口</span></div>
                                    <div className="tel_area">
                                        <p className="free sans"><a href="tel:0120-30-6630">0120-30-6630</a></p>
                                    </div>
                                    </div>
                                    <p className="mp txt2 nm">年中無休！ 24時間受付！<span><br className="dsp_smt" />携帯電話でもOK!</span></p>
                                </div>
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
            title="法人様向け調査サービス"
            keyword="法人様向け,広島,探偵,中央リサーチ"
            description="広島の探偵社「中央リサーチ」、法人様向けプランについての説明ページです。"
            />
    </>
)
export default corporation
