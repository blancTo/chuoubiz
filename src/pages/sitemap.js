import React from 'react'
import { Link } from 'gatsby'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const sitemap = () => {
    const pagemeta = {        
        title:`サイトマップ`,
        slug:`sitemap`
    }    
    return (
        <>
        
            <div id="wrap">
            <Header h1title="広島の探偵社「中央リサーチ」のサイトマップ" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main pb">

                        <h3 className="headline">サイトマップ</h3>
                        <div className="flex">
                            <div className="box">
                                <ul>
                                    <li><Link to="/">広島相談室トップページ</Link></li>
                                    <li><Link to="/service/">当社の取り組み</Link></li>
                                    <li><Link to="/company/">会社概要</Link></li>
                                    <li><Link to="/jirei/">事例紹介</Link></li>
                                    <li><Link to="/price/">料金表</Link></li>
                                    <li><Link to="/jobs/">採用情報</Link></li>
                                    <li><Link to="/contact/">お問い合わせ</Link></li>
                                    <li><Link to="/policy/">個人情報保護に関する取り組み</Link></li>
                                    <li><Link to="/sitemap/">サイトマップ</Link></li>
                                </ul>
                                <p className="btn"><Link to="/okayama/">岡山相談室トップページ</Link></p>
                                <p className="btn"><Link to="/yamaguchi/">山口相談室トップページ</Link></p>
                                <p className="btn"><Link to="/shimane/">島根相談室トップページ</Link></p>
                                <p className="btn"><Link to="/ehime/">愛媛相談室トップページ</Link></p>
                            </div>
                            <div className="box">
                                <h4 className="sub">サービス</h4>
                                <ul>
                                    <li><Link to="/beginner/">はじめての方</Link></li>
                                    <li><Link to="/choose/">探偵社の選び方</Link></li>
                                    <li><Link to="/fickleness/">浮気・不倫調査</Link>
                                    <ul className="in">
                                        <li><Link to="/fickleness/type/">離婚の種類について</Link></li>
                                        <li><Link to="/fickleness/proof/">内容証明について</Link></li>
                                    </ul>
                                    </li>
                                    <li><Link to="/behavior/">素行調査</Link></li>
                                    <li><Link to="/trial/">裁判証拠収集</Link></li>
                                    <li><Link to="/marriage/">結婚・身上調査</Link></li>
                                    <li><Link to="/whereabouts/">家出・所在調査</Link></li>
                                    <li><Link to="/stalker/">嫌がらせ・ストーカー対策</Link></li>
                                    <li><Link to="/bullying/">いじめ問題</Link></li>
                                    <li><Link to="/tapping/">盗聴器発見</Link></li>
                                    <li><Link to="/fingerprint/">指紋・声紋・筆跡鑑定</Link></li>
                                </ul>
                            </div>
                            <div className="box">
                                <h4 className="sub">法人様向けプラン</h4>
                                <ul>
                                    <li><Link to="/corporation/#credit-check">企業信用調査</Link></li>
                                    <li><Link to="/corporation/#employment-Survey">採用調査</Link></li>
                                    <li><Link to="/corporation/#market-research">市場調査</Link></li>
                                    <li><Link to="/corporation/#employee-behavior">従業員の素行</Link></li>
                                    <li><Link to="/corporation/#crisis-management">危機管理</Link></li>
                                    <li><Link to="/corporation/#traffic-accident">交通事故調査</Link></li>
                                    <li><Link to="/corporation/#intellectual-property">知的財産調査</Link></li>
                                    <li><Link to="/corporation/#competitor-Survey">競合他社調査</Link></li>
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
export const Head = () => (
    <>
       <Seo
        title="サイトマップ"
        description="広島の探偵社「中央リサーチ」ホームページのサイトマップです。"
        /> 
    </>
)
export default sitemap