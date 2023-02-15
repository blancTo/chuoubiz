import React from 'react'
import { Link } from 'gatsby'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const contactThanks = () => {
    const pagemeta = {
        title:`お問い合わせ`,
        slug:`contact`
    }
    return (
        <>
        <Seo
        title="ご相談、お問い合わせはこちら"
        description="広島の探偵社「中央リサーチ広島」ではどのようなお問い合わせにも対応致します。お気軽にご連絡ください。"
        keyword="探偵,広島,問合せ,中央リサーチ広島"
        />
            <div id="wrap">
            <Header h1title="ご相談、お問い合わせについて" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main pb">
                        <div className="pt pb">
                            <p className="cen fm b">お問合せありがとうございました。</p>
                            <br />
                            <p className="cen">送信は正常に完了しました。</p>
                            <p className="cen">数日中にご連絡させていただきます。</p>
                            <br />
                            <p className="cen"><Link to="/">&lt; ホームへ戻る &gt;</Link></p>
                        </div>
                    </div>
                </Layout>
            </div>
            <Footer />
        
        </>
    )
}

export default contactThanks
