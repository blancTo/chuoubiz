import React from 'react'
import { Link } from 'gatsby'

import Seo from '../../components/SEO'
import HeaderOkayama from '../../components/HeaderOkayama'
import FooterOkayama from '../../components/FooterOkayama'
import Layout from '../../components/Layout'
import SubpageTitle from '../../components/SubpageTitle'
import Breadcrumb from '../../components/breadcrumb'

const about = () => {
    const pagemeta = {
        title:`調査項目`,
        slug:`about`        
    }
    return (
        <>
        
            <div id="wrap">
                <HeaderOkayama h1title="調査項目について" pagetitle="岡山駅より徒歩5分の探偵事務所" />
                <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
                <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug + '_sub'}>
                        <div className="main bg_wide pb">
                            <h3 className="headline">調査項目</h3>
                            <div className="box_flex pb">
                            <dl id="uwaki">
                                <dt><img src="../../img/okayama/about/img01.jpg" alt="" /><b className="mp">浮気・不倫調査</b></dt>
                                <dd>対象者の行動を気づかれないように尾行・張り込みを行い、分単位の記録と動かぬ証拠を取る調査です。<br />
                                <p className="link nm"><Link to="/okayama/jirei/#case01">調査事例はこちら</Link></p></dd>
                            </dl>
                            <dl id="saiban">
                                <dt><img src="../../img/okayama/about/img02.jpg" alt="" /><b className="mp">裁判証拠収集</b></dt>
                                <dd>真実を立証できるように裁判になる可能性のある事案の事実確認調査や動かぬ証拠収集を行います。</dd>
                            </dl>
                            <dl id="konzen">
                                <dt><img src="../../img/okayama/about/img03.jpg" alt="" /><b className="mp">婚前・身上調査</b></dt>
                                <dd>将来結婚する可能性のある人物や、そのご家族についての職業や人物性、風評など大きな懸念材料があるか調査します。
                                <p className="link nm"><Link to="/okayama/jirei/#case04">調査事例はこちら</Link></p></dd>
                            </dl>
                            <dl id="sokou">
                                <dt><img src="../../img/okayama/about/img04.jpg" alt="" /><b className="mp">素行調査</b></dt>
                                <dd>ご家族の見守り、お子様の一人暮らしの生活実態や、不信感のある従業員の素行面を確認する調査です。</dd>
                            </dl>
                            <dl id="iede">
                                <dt><img src="../../img/okayama/about/img05.jpg" alt="" /><b className="mp">家出・所在調査</b></dt>
                                <dd>家出人の捜索や、同窓会、恩師、恩人など、大切なご家族やお世話になった方などの所在調査を行います。
                                <p className="link nm"><Link to="/okayama/jirei/#case05">調査事例はこちら</Link></p></dd>
                            </dl>
                            <dl id="stalker">
                                <dt><img src="../../img/okayama/about/img06.jpg" alt="" /><b className="mp">嫌がらせ対策</b></dt>
                                <dd>SNSや近隣に誹謗・中傷する行為など不信感や不安感を抱かす嫌がらせ行為の事実確認の調査を行います。
                                <p className="link nm"><Link to="/okayama/jirei/#case03">調査事例はこちら</Link></p></dd>
                            </dl>
                            <dl id="tousatsuki">
                                <dt><img src="../../img/okayama/about/img07.jpg" alt="" /><b className="mp">盗撮器発見</b></dt>
                                <dd>盗聴器は意外と身近に潜んでいます。不審な事や情報が知らぬ間に漏れていると思われた時は早期にご相談ください。</dd>
                            </dl>
                            <dl id="shimon">
                                <dt><img src="../../img/okayama/about/img08.jpg" alt="" /><b className="mp">指紋・声紋・筆跡鑑定</b></dt>
                                <dd>不審者の出入りによる盗難や紛失。遺言状や契約書、誹謗・中傷の手紙など指紋検出、筆跡鑑定で事実確認いたします。</dd>
                            </dl>
                            </div>
                            <div id="houjin" className="pad_anchor">
                            <h3 className="headline">法人様向けプラン</h3>
                            <div className="box_flex">
                                <dl>
                                <dt><img src="../../img/okayama/about/img09.jpg" alt="" /><b className="mp">企業信用調査</b></dt>
                                <dd>新しく取引を開始するにあたり、その会社の経営状態、業績、財務状況、規模、成長性、評価など会社の信用度を側面からお調べいたします。必要に応じて、代表者の人物性や風評、生活実態なども調査可能です。</dd>
                                </dl>
                                <dl>
                                <dt><img src="../../img/okayama/about/img10.jpg" alt="" /><b className="mp">採用調査</b></dt>
                                <dd>新しく従業員を採用するにあたり、会社に損害を与えるような人物ではないか、面接や履歴書などの表面上では解りにくい、隠された本当の人物性や経歴、評価、思想などを側面からお調べいたします。</dd>
                                </dl>
                                <dl>
                                <dt><img src="../../img/okayama/about/img11.jpg" alt="" /><b className="mp">市場調査</b></dt>
                                <dd>新しくお店を出店したり、開業を検討されておられる方など、交通量や場所、相乗効果などの市場性をプロの視点で情報収集し、成功するための参考資料にお役立ていただけます。</dd>
                                </dl>
                                <dl>
                                <dt><img src="../../img/okayama/about/img12.jpg" alt="" /><b className="mp">従業員の素行</b></dt>
                                <dd>現在、雇用されている従業員の規約違反や不正などの疑いがある場合、該当の従業員の勤務実態などを、分単位で記録し証拠を撮る調査です。解雇の際に、不当解雇と主張する事を否定できます。<br />
                                    <p className="link nm"><Link to="/okayama/jirei/#case02">調査事例はこちら</Link></p></dd>
                                </dl>
                                <dl>
                                <dt><img src="../../img/okayama/about/img13.jpg" alt="" /><b className="mp">危機管理</b></dt>
                                <dd>会社内での盗聴・盗撮・情報漏洩や不正アクセスなど、大きなトラブルに発展しないための危機管理を行います。</dd>
                                </dl>
                                <dl>
                                <dt><img src="../../img/okayama/about/img14.jpg" alt="" /><b className="mp">交通事故調査</b></dt>
                                <dd>交通事故で双方の言い分の違いからトラブルになるケースをよく耳にします。目撃者探しなど、掘り下げて再調査し真実を追求いたします。</dd>
                                </dl>
                            </div>
                            </div>
                        </div>
                    </div>
                    <FooterOkayama />

                </Layout>
            </div>
        </>
    )
}
export const Head = () => (
    <>
        <Seo
            title2="調査項目｜総合探偵社中央リサーチ岡山"
            description="岡山の興信所・探偵社の中央リサーチ岡山の調査項目について。浮気調査を最も得意とする探偵社です。ご依頼者様の心のお悩みを解決し、平穏な日々を取り戻せるよう全力を尽くします。浮気調査に多くの実績を持つ当社にお任せください。"
            keyword="調査項目,探偵,岡山,興信所,浮気調査,中央リサーチ岡山"
            />
    </>
  )
export default about
