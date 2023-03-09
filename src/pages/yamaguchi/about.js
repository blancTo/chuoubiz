import React from 'react'
import { Link } from 'gatsby'

import Seo from '../../components/SEO'
import HeaderYamaguchi from '../../components/HeaderYamaguchi'
import FooterYamaguchi from '../../components/FooterYamaguchi'
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
                <HeaderYamaguchi h1title="調査項目について" pagetitle="JR徳山駅前にある探偵事務所" />
                <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
                <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug + '_sub'}>
                        <div className="main bg_wide pb">
                            <h3 className="headline">調査項目</h3>
                            <div className="box_flex">
                            <dl id="uwaki">
                                <dt><img src="../../img/yamaguchi/about/img01.jpg" alt="" /><b className="mp">浮気・不倫調査</b></dt>
                                <dd>浮気や不倫の疑いで不安な日々を過ごされている方のために、一日も早く笑顔を取り戻していただけるよう、迅速に調査し、動かぬ証拠をお撮りします。<br />
                                <p className="link nm"><Link to="/jirei/#case01">調査事例はこちら</Link></p></dd>
                            </dl>
                            <dl id="saiban">
                                <dt><img src="../../img/yamaguchi/about/img02.jpg" alt="" /><b className="mp">裁判証拠収集</b></dt>
                                <dd>裁判を有利に進めるために<span className="red">事実関係を立証できる有力な証拠を収集</span>します。十分な資料や証拠により、ゆとりをもって裁判に臨んでいただくための調査です。</dd>
                            </dl>
                            <dl id="kekkon">
                                <dt><img src="../../img/yamaguchi/about/img03.jpg" alt="" /><b className="mp">結婚・身上調査</b></dt>
                                <dd>結婚は本人たちだけの問題ではなく、ご家族や親族にも影響があります。<br />
                                結婚相手がどのような家族なのか、風評や人物性・職業など調査し<span className="red">信用性を知る為の調査</span>です。<br />
                                <p className="link nm"><Link to="/jirei/#case04">調査事例はこちら</Link></p></dd>
                            </dl>
                            <dl id="iede">
                                <dt><img src="../../img/yamaguchi/about/img04.jpg" alt="" /><b className="mp">家出・所在調査</b></dt>
                                <dd>家出してしまったご家族を中心に、連絡の取れなくなってなった友人やかつての恩師、お金を借りたまま逃げてしまった相手などをお探しします。特に家出や失踪は人命に係ることもありますので、<span className="red">一刻も早く調査・捜索を行なう事が重要</span>です。<br />
                                <p className="link nm"><Link to="/jirei/#case05">調査事例はこちら</Link></p></dd>
                            </dl>
                            <dl id="stalker">
                                <dt><img src="../../img/yamaguchi/about/img05.jpg" alt="" /><b className="mp">嫌がらせ対策</b></dt>
                                <dd>年々増加する、嫌がらせ、いじめ等の被害を<span className="red">徹底的に排除</span>する為、真実を明らかにし、安心した生活が送れるよう証拠収集をいたします。<br />
                                <p className="link nm"><Link to="/jirei/#case03">調査事例はこちら</Link></p></dd>
                            </dl>
                            <dl id="touchouki">
                                <dt><img src="../../img/yamaguchi/about/img06.jpg" alt="" /><b className="mp">盗聴器発見</b></dt>
                                <dd><span className="red">近年、盗聴器使用による犯罪が増えています。</span>盗聴器はインターネットや通信販売で手軽に入手出来てしまうことから、自分の知らない間に大切な個人情報が流出する危険性があります。不安や懸念のない日々のためにも、最新機器を使用し専門の調査員が盗聴器調査をいたします。</dd>
                            </dl>
                            </div>
                        </div>
                    </div>

                </Layout>
            </div>
            <FooterYamaguchi />
        
        </>
    )
}
export const Head = () => (
    <>
        <Seo
            title2="調査項目｜総合探偵社中央リサーチ山口"
            description="山口の興信所・探偵社の中央リサーチ山口の調査項目について。浮気調査を最も得意とする探偵社です。ご依頼者様の心のお悩みを解決し、平穏な日々を取り戻せるよう全力を尽くします。浮気調査に多くの実績を持つ当社にお任せください。"
            keyword="調査項目,探偵,山口,興信所,浮気調査,中央リサーチ山口"
            />
    </>
  )
export default about
