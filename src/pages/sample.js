import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const sample = () => {
    const pagemeta = {
        title:`浮気調査報告書サンプル`,
        slug:`sample`
    }
    return (
        <>
        
            <div id="wrap">
            <Header h1title="浮気調査報告書サンプル" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main pb">
                        <h3 className="headline">浮気調査報告書サンプル</h3>
                        <h3 className="line">調査報告書</h3>
                        <div className="data">
                            <h4>尾行記録</h4>
                            <p className="rit nm">令和 元年 ６月 ２５日（火）</p>
                            <dl>
                            <dt><span className="clock clock18 clock30" /><span className="time">18：30</span></dt>
                            <dd>
                                <div className="photo"><img src="../img/sample/img01.jpg" alt="" /></div>
                                対象者が相手女性との待ち合わせ場所にすると本部に情報が入った為「○○川」遊歩道（所在地〇〇〇）付近より本日の調査を開始する。<br />調査員、同所付近にて対象者の捜索を行う。</dd>
                            </dl>
                            <dl>
                            <dt><span className="clock clock18 clock45" /><span className="time">18：43</span></dt>
                            <dd>
                                <div className="photo"><img src="../img/sample/img02.jpg" alt="" /></div>
                                対象者（白色ワイシャツ・紺色スラックス姿）及び不倫相手らしき女性（３５歳位、身長１５８㎝位、茶髪、ピンク色カットソー、ジーパン姿）が遊歩道のベンチに座り体を寄せ合い笑顔で会話している姿を確認する。<br />
                                同所では時折、キスをしたり手を握ったりする様子を確認する。<br />
                                その後、同二人は、ベンチより立ち上がり、相手女性は対象者と腕を組み移動開始するのを確認する。</dd>
                            </dl>
                            <dl>
                            <dt><span className="clock clock19 clock05" /><span className="time">19：05</span></dt>
                            <dd>
                                <div className="photo"><img src="../img/sample/img03.jpg" alt="" /></div>
                                対象者及び相手女性、ラブホテル街を徒歩にて移動する姿を確認する。<br />
                                対象者及び相手女性は、時折ラブホテルを見まわす姿から、ラブホテルに入ると思われる。<br />調査員、追尾を続行する。</dd>
                            </dl>
                            <dl>
                            <dt><span className="clock clock19 clock10" /><span className="time">19：09</span></dt>
                            <dd>
                                <div className="photo"><img src="../img/sample/img04.jpg" alt="" /></div>
                                対象者及び相手女性は同時刻「○○○ホテル」（所在地〇〇〇）に入る姿を確認する。<br />
                                調査員、同ホテル付近にて待機を行う。</dd>
                            </dl>
                            <dl>
                            <dt><span className="clock clock21 clock10" /><span className="time">21：11</span></dt>
                            <dd>
                                <div className="photo"><img src="../img/sample/img05.jpg" alt="" /></div>
                                対象者及び相手女性、同ホテルより出、徒歩にて移動し始める姿を確認する。<br />
                                調査員、徒歩にて追尾を行う。</dd>
                            </dl>
                            <dl>
                            <dt><span className="clock clock21 clock15" /><span className="time">21：14</span></dt>
                            <dd>
                                <div className="photo"><img src="../img/sample/img06.jpg" alt="" /></div>
                                対象者及び相手女性、「○○川」遊歩道を徒歩にて移動する姿を確認する。<br />
                                対象者及び相手女性は同所にて別々に別れる</dd>
                            </dl>
                            <dl>
                            <dt><span className="clock clock21 clock15" /><span className="time">21：16</span></dt>
                            <dd>これより帰路に就くものと思料される為、同時刻、本部指令により本日の調査を解除とする。<br />以上</dd>
                            </dl>
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
        title="浮気調査報告書サンプル"
        description="広島の探偵社「中央リサーチ」、浮気調査報告書サンプルについての説明ページです。"
        keyword="浮気調査報告書サンプル,広島,探偵,中央リサーチ"
        />
    </>
)
export default sample
