import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const faq = () => {
    const pagemeta = {
        title:`よくある質問`,
        slug:`faq`
    }
    return (
        <>
            
            <div id="wrap">
            <Header h1title="よくある質問｜総合探偵社中央リサーチ" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main pb">
                        <h3 className="headline">よくある質問</h3>
                        <dl>
                            <dt><span>Q</span>浮気調査を依頼しても何の成果も出ない事はありますか？</dt>
                            <dd><span>A</span>弊社の実績では、浮気調査のご依頼の８割のお客様が２０時間パックです。<br />
                            その結果、有る答えの調査では、９割以上浮気の動かぬ証拠が撮れています。</dd>
                        </dl>
                        <dl>
                            <dt><span>Q</span>浮気を疑い（夫・妻）の車に私がGPSを取り付けたら（夫・妻）にGPSに気づかれました、どうしたら良いでしょうか？</dt>
                            <dd><span>A</span>GPSが露見すると同時に相手に調べている事を伝えたことになります。今や浮気をしている人は浮気を疑われたらGPSを車に取り付けられる事くらいは誰もが想像がつきます。気づかれないように真実をつかむ為にも弊社の力をご利用ください。</dd>
                        </dl>
                        <dl>
                            <dt><span>Q</span>GPSなどで調べた車の居場所が浮気の証拠になるのですか？</dt>
                            <dd><span>A</span>争点となるのは対象者（人）の動きであり、いつ？どこで？誰と？何を？です。<br />
                            GPSの車の動きのみでは、<b className="red">本人が運転していたとは限らないため裁判などでは証拠不十分となる可能性が高い</b>のです。</dd>
                        </dl>
                        <dl>
                            <dt><span>Q</span>探偵社と興信所はどう違うのですか？</dt>
                            <dd><span>A</span>一般的には探偵社は浮気調査・不倫調査・家出人調査（尾行・張り込み）が得意であり、興信所は素行調査・結婚・身上調査・内偵調査（聞き込み）が得意であると認識されている方が多いようです。<br />
                            実際は探偵社も興信所も、ほとんど同じ調査業務を日々対応しているのです。<br />
                            歴史をたどると原点は興信所が始まりであり、現在は探偵業法と言う名称で業法が施行された事により、探偵社と呼ぶ方が増えてきているようです。</dd>
                        </dl>
                        <dl>
                            <dt><span>Q</span>探偵さんは24時間営業ですが、24時間（尾行・張り込み）休まずに、お仕事されているのですか？</dt>
                            <dd><span>A</span>当探偵社では無理は集中力の減退（失敗、事故を招く）及び労働基準法もございますので、<b className="red">8時間の3交代で24時間対応の調査業務</b>を行なっております。</dd>
                        </dl>
                        <dl>
                            <dt><span>Q</span>自分で探偵調査を行う事は問題でしょうか？</dt>
                            <dd><span>A</span>ご自分で調査を行う事により万が一、相手に気づかれてしまった場合、相手は「ストーカーされているかも？」と思い警察に相談する可能性があります。<br />
                            刑法にストーカー法（つきまとい行為）がございますので相手が恐怖を感じた場合に（警察に被害届出す）犯罪者になってしまう危険があるのです。<br />
                            軽い気持ちで犯罪者になることは、いま抱えている問題以上に、不利になります。<br />
                            <b className="red">事実確認・証拠撮りは必ずのプロの探偵にお任せください。</b></dd>
                        </dl>
                        <dl>
                            <dt><span>Q</span>浮気調査にも、やり方があるのでしょうか？</dt>
                            <dd><span>A</span>簡単な浮気調査であればご自身で車のドライブレコーダや走行距離、カーナビの履歴、ＳＮＳなどを調べるやり方が御座います。<br />
                            しかし「いつ、誰と、何処で、何を」しているのかは実際に探偵が尾行・張り込みを行わないと、なかなか正確な事実は判明しにくいのです。<br />
                            動かぬ証拠では車の乗り降りやホテル・マンションの出入りの証拠写真も一瞬の動きであり高感度のカメラ機材はもちろん撮影技術がないと簡単には証拠は撮れません。<br />
                            <b className="red">当探偵社では浮気調査は機械などに頼らず、最初から技術を持って的確な調査に当たる事をおすすめしております。</b></dd>
                        </dl>
                        <dl>
                            <dt><span>Q</span>飲みに行ったわけではなく、会社から帰宅した夫のＹシャツに香水のにおいやファンデーションが着いています、これから何か解かりますか？</dt>
                            <dd><span>A</span>相手と密着したのは事実と思われます。交際経験豊富な相手なら、こんな不手際は少ないので、相手女性は若いか、交際が始まったばかり、交際経験の少ない女性の可能性が高いです。<br />
                            関係がエスカレートし家庭崩壊に至る前に、事実関係を確認し問題解決して行きましょう。</dd>
                        </dl>
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
            title="よくある質問"
            keyword="よくある質問,広島,探偵,中央リサーチ"
            description="広島の探偵社「中央リサーチ」、よくある質問についての説明ページです。"
            />
    </>
)
export default faq
