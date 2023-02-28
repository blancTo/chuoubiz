import React from 'react'
import { Link } from 'gatsby'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

const NotFound = () => {
    const pagemeta = {
        title:`お探しの記事は見つかりませんでした`,
        slug:`404`        
    }
    return (
        <>
        
    <div id="wrap">
        <Header h1title="お探しの記事は見つかりませんでした" />
        <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
        <Breadcrumb subtitle={pagemeta.title} />
        <Layout>
            <div id={pagemeta.slug} className="main">
                <h2 className="page_title01 mt0">お探しの記事は見つかりませんでした。</h2>
                <p className="center">中央リサーチ広島のWEBサイトをご覧頂きありがとうございます。<br />
                大変申し訳ないのですが、あなたがアクセスしようとしたページは削除されたかURLが変更されています。<br />
                お手数をおかけしますが、以下の方法からもう一度目的のページをお探し下さい。</p>
                <p className="center"><Link to="/" className='bt02'><FontAwesomeIcon icon={faAngleRight} />トップページへ戻る</Link></p>
            </div>
        </Layout>
        </div>
        <Footer />
        </>
    )
}

export const Head = () => (
    <>
        <Seo title="お探しの記事は見つかりませんでした" />
    </>
)

export default NotFound
