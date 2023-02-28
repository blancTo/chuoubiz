import React from 'react'

import Seo from '../../components/SEO'
import Layout from '../../components/Layout'
import SubpageTitle from '../../components/SubpageTitle'
import Breadcrumb from '../../components/breadcrumb'
import HeaderEhime from '../../components/HeaderEhime'
import FooterEhime from '../../components/FooterEhime'

const about = () => {
    const pagemeta = {
        title:`調査項目`,
        slug:`about`        
    }
    return (
        <>

            
            <div id="wrap">
                <HeaderEhime h1title="調査項目について" pagetitle="松山市民病院前にある探偵事務所" />
                <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
                <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug + '_sub'}>
                        <div className="main bg_wide pb">
                            <h3 className="headline">調査項目</h3>
                            <div className="box_flex">
                            <dl id="uwaki">
                                <dt><img src="../../img/ehime/about/img01.jpg" alt="" /><b className="mp">浮気・不倫調査</b></dt>
                                <dd>浮気や不倫などの事実関係を確認する為、対象者に気づかれることなく尾行・張り込みを行い、その真実を分単位で記録し、同時に証拠（映像）を撮る調査です。</dd>
                            </dl>
                            <dl id="sokou">
                                <dt><img src="../../img/ehime/about/img02.jpg" alt="" /><b className="mp">素行調査</b></dt>
                                <dd>対象者の素行面（生活実態）の調査をいたします。問題のある家族や従業員の素行調査を行う事でスムーズに問題解決できます ｡</dd>
                            </dl>
                            <dl id="saiban">
                                <dt><img src="../../img/ehime/about/img03.jpg" alt="" /><b className="mp">裁判証拠収集</b></dt>
                                <dd>裁判を有利にする為に、動かぬ証拠を集めて真実を明らかにするお手伝いをいたします。</dd>
                            </dl>
                            <dl id="kekkon">
                                <dt><img src="../../img/ehime/about/img04.jpg" alt="" /><b className="mp">結婚・身上調査</b></dt>
                                <dd>ご家族が交際中のお相手と結婚前提にお付き合いしている場合や急に結婚の話が浮上した時など、交際相手の生活実態や交際相手の家族の信用面などを側面から調査いたします。</dd>
                            </dl>
                            <dl id="iede">
                                <dt><img src="../../img/ehime/about/img05.jpg" alt="" /><b className="mp">家出・所在調査</b></dt>
                                <dd>ご家族の誰かが急に家出をしてしまった事による家出人調査から、お世話になった方の引っ越し先や転勤による所在調査まで行います。当探偵社の発見率は約92％です。</dd>
                            </dl>
                            <dl id="stalker">
                                <dt><img src="../../img/ehime/about/img06.jpg" alt="" /><b className="mp">嫌がらせ・ストーカー対策</b></dt>
                                <dd>嫌がらせや、いじめ、誹謗中傷、ストーカー行為、つきまとい行為など、事実確認し証拠をとります。</dd>
                            </dl>
                            <dl id="touchouki">
                                <dt><img src="../../img/ehime/about/img07.jpg" alt="" /><b className="mp">盗聴器発見調査</b></dt>
                                <dd>ネット、スマホの普及により誰でも簡単に盗聴器、盗撮器を入手することができる時代となりました。プライバシーや仕事などの情報が漏洩する可能性がありますので、不審と思われた時は盗聴器発見の調査を相談ください。</dd>
                            </dl>
                            <dl id="kagaku">
                                <dt><img src="../../img/ehime/about/img08.jpg" alt="" /><b className="mp">科学的調査</b></dt>
                                <dd>指紋・筆跡・声紋などを詳しく鑑定し不審者の割り出しを行います。事実関係を立証する上で裁判証拠としても活用できます。</dd>
                            </dl>
                            </div>
                        </div>
                    </div>

                </Layout>
            </div>
            <FooterEhime />
        
        </>
    )
}
export const Head = () => (
    <>
        <Seo
            title2="調査項目｜総合探偵社中央リサーチ愛媛"
            description="愛媛の興信所・探偵社の中央リサーチ愛媛の調査項目について。浮気調査を最も得意とする探偵社です。ご依頼者様の心のお悩みを解決し、平穏な日々を取り戻せるよう全力を尽くします。浮気調査に多くの実績を持つ当社にお任せください。"
            keyword="調査項目,探偵,愛媛,興信所,浮気調査,中央リサーチ愛媛"
            />
    </>
  )
export default about
