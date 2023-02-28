import React from 'react'

import Seo from '../../components/SEO'
import Layout from '../../components/Layout'
import SubpageTitle from '../../components/SubpageTitle'
import Breadcrumb from '../../components/breadcrumb'
import HeaderShimane from '../../components/HeaderShimane'
import FooterShimane from '../../components/FooterShimane'

const about = () => {
    const pagemeta = {
        title:`調査項目`,
        slug:`about`        
    }
    return (
        <>
        
            <div id="wrap">
                <HeaderShimane h1title="調査項目について" pagetitle="JR松江駅前にある探偵事務所" />
                <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
                <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug + '_sub'}>

                    <div className="main bg_wide pb">
                        
                        <h3 className="headline">調査項目</h3>
                        <div className="box_flex">
                        <dl id="uwaki">
                            <dt><img src="../../img/shimane/about/img01.jpg" alt="" /><b className="mp">浮気・不倫調査</b></dt>
                            <dd>対象者の帰宅時間が遅い時、不審なメールやSNSなどがある時はご相談ください。相手に気づかれる事なく対象者の行動を分単位で記録し動かぬ証拠をとります。<br />※裁判証拠として認められるような証拠を収集致します。</dd>
                        </dl>
                        <dl id="sokou">
                            <dt><img src="../../img/shimane/about/img02.jpg" alt="" /><b className="mp">素行調査</b></dt>
                            <dd>ご家族の単身赴任先の生活実態や一人暮らし中のご家族の生活状況、認知症の方の見守りなど調査いたします。また従業員の不審な行動や噂などがある時は素行の調査も可能ですのでご相談ください。</dd>
                        </dl>
                        <dl id="kekkon">
                            <dt><img src="../../img/shimane/about/img03.jpg" alt="" /><b className="mp">結婚・婚前調査</b></dt>
                            <dd>交際しているパートナーとの結婚話が浮上している場合や、将来結婚するかもしれない交際相手の信用調査を行います。対象者の家族などの人物性や生活実態、職業、資産、健康面、思想等、全般的に大きな懸念材料があるのか調査いたします。</dd>
                        </dl>
                        <dl id="iede">
                            <dt><img src="../../img/shimane/about/img04.jpg" alt="" /><b className="mp">家出・所在調査</b></dt>
                            <dd>過去発見率は90％の豊富な調査技術と全国レベルの情報網で家出人探しから、お世話になった恩師の所在、引っ越しされて連絡が取れなくなった方、事故や事件に巻き込まれて安否が気になる方などの調査をいたします。</dd>
                        </dl>
                        <dl id="stalker">
                            <dt><img src="../../img/shimane/about/img05.jpg" alt="" /><b className="mp">いじめ・嫌がらせ対策</b></dt>
                            <dd>ネットの掲示板や近所に誹謗中傷の噂を流したり、つきまとい行為や、ストーカー行為などの嫌がらせを行う不審人物の特定及び証拠撮りを行い、不安な毎日から解放され、安心して日々を暮らせるよう問題解決のお手伝いをいたします。</dd>
                        </dl>
                        <dl id="touchouki">
                            <dt><img src="../../img/shimane/about/img06.jpg" alt="" /><b className="mp">盗聴器発見</b></dt>
                            <dd>部屋の中や携帯、パソコンなどに盗聴器を仕掛けられる事案が年々増加しています。不審に思ったらすぐにご相談ください。専門の調査員が盗聴器発見調査をいたします。</dd>
                        </dl>
                        </div>
                    </div>


                    </div>
                </Layout>
            </div>
            <FooterShimane />
        </>
    )
}
export const Head = () => (
    <>
        <Seo
            title2="調査項目｜総合探偵社中央リサーチ島根"
            description="島根の興信所・探偵社の中央リサーチ島根の調査項目について。浮気調査を最も得意とする探偵社です。ご依頼者様の心のお悩みを解決し、平穏な日々を取り戻せるよう全力を尽くします。浮気調査に多くの実績を持つ当社にお任せください。"
            keyword="調査項目,探偵,島根,興信所,浮気調査,中央リサーチ島根"
            />
    </>
  )
export default about
