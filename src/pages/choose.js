import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const choose = () => {
    const pagemeta = {
        title:`探偵社の選び方`,
        slug:`choose`
    }
    return (
        <>
            
            <div id="wrap">
            <Header h1title="探偵社の選び方、見分けるポイントについて" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
            <Layout>
                <div id={pagemeta.slug} className="main">

                    <div id="choose_point">
                        <div className="point_box">
                            <h3 className="headline02 mp">信頼できる探偵社を<br className="dsp_smt" />見分けるポイントとは！</h3>
                            <div className="point_box_flex">
                            <ul className="point_ul01">
                                <li>調査エリアの県に公安委員会への<span className="b">探偵業届け出証明書</span>が有るか?</li>
                                <li>会社概要の内容と一致する場所へ本当に<span className="b">事務所が有るか?</span></li>
                                <li>弁護士事務所からの<span className="b">具体的な推奨コメントや口コミ</span>があるか?</li>
                                <li><span className="b">内閣総理大臣認可組合等の団体に加盟</span>している業者であるか?</li>
                            </ul>
                            <ul className="point_ul01">
                                <li>平気で<span className="b">違法性のある調査を引き受ける</span>会社ではないのか?</li>
                                <li><span className="b">あいまいな料金説明</span>はせず契約後にも追加料金は発生しないのか?</li>
                                <li><span className="b">きちんとしたシステム説明</span>をし納得の上で面談する業者なのか?</li>
                                <li>探偵の<span className="b">経験年数が10年以上</span>ある調査能力や実績のある会社なのか?</li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div id="choose_howto">
                        <h3 className="headline mp">探偵社の選び方</h3>
                        <p>ご依頼者様にとって調査を依頼する最も大きなポイントは料金と調査能力です。営業相談員が話しやすいだけでは本当の問題解決にはならないのです。</p>
                        <div className="choose_howto_flex">
                            <img src="../img/choose/howto01.jpg" alt="探偵社の選び方" className="img_howto01" />
                            <div className="txt_area">
                            <h4 className="headline mp">では、どのように見分ければよいのでしょうか？</h4>
                            <p>料金については必ず<span className="b">わかりやすい料金表（調査料金が概算で算定できる表）がホームページ上に公開されていること</span>が信用の目安になります。悪徳な探偵社では料金表が不明瞭であったり、電話で料金の見積もりを依頼しても「今はできません、事務所で面談してしてから見積もりします。」など料金を提示しない業者も存在します。<br />
                                そんな業者は高額な料金を提示する事が多く、断ろうとするとしつこく営業してくる場合もありますので、ご注意ください。</p>
                            <p>調査力については、<span className="b">エビデンスのある弁護士の推奨</span>があることで信用度は高くなります。なぜなら、弁護士は裁判証拠を提示したり、提示されたりするお仕事です。<br />
                                多方面から提出される探偵社の報告書を基に戦う弁護士は、どの探偵社が証拠能力の高い報告書を出しているのか把握できるのです。<br />
                                また倫理上の問題に係るので弁護士に金銭を支払ったりする事で推奨して頂けるものではありません。</p>
                            </div>
                        </div>
                        <div className="choose_howto_flex">
                            <img src="../img/choose/howto02.jpg" alt="探偵社の選び方" className="img_howto02" />
                            <div className="txt_area">
                            <h4 className="headline mp">もう一つの重要な注意点は会社の信頼性です。</h4>
                            <p><span className="b">長年の継続実績のある探偵社は各種法令を厳守する事と、お客様の評価で今があります。</span>長年に渡り教育研修などを繰り返し行う事で最も大切な守秘義務や個人情報の取り扱いの管理などコンプライアンスも徹底していると思われます。また<span className="b">健全な地元の業者</span>であり、豊富な探偵経験があれば、長年の経験で培った土地勘を活かし無駄な諸経費の負担も少なく、スムーズに調査が進む可能性が高いと考えられます。</p>
                            </div>
                        </div>
                        <div className="choose_howto_flex">
                            <img src="../img/choose/howto03.jpg" alt="探偵社の選び方" className="img_howto03" />
                            <div className="txt_area">
                            <h4 className="headline mp">協会加盟は信用の目安になるの？</h4>
                            <p>一般社団法人の協会や探偵業組合などに加盟することは研修などで探偵業のコンプライアンスやガバナンスを学ぶ事においてはプラスになりますが、それだけで加盟業者が信用できる探偵社とは限りません。過去に一般社団法人～協会の加盟業者正会員や役員などが犯罪を起こした事例もあります。</p>
                            </div>
                        </div>
                        <div className="choose_howto_flex">
                            <img src="../img/choose/howto04.jpg" alt="探偵社の選び方" className="img_howto04" />
                            <div className="txt_area">
                            <h4 className="headline mp">ネットの口コミやお勧めランキングなどは信用できるの？</h4>
                            <p>現在、探偵ランキングやお勧め案内所、口コミなどのサイトで自作自演や作為的で根拠の無い誇大広告が横行しており問題視されています。その中で<span className="b">グーグルマップの口コミは審査が厳しい</span>為、比較的信用度は高いと思われますので一つの目安になります。しかし一部の探偵社で作為的な疑いがあるものも見受けられますのでご注意ください。</p>
                            </div>
                        </div>
                    </div>

                    <div id="choose_possible" className="bg_wide">
                        <h3 className="headline02 mp">地元の探偵社だからできる事</h3>
                        <ul className="possible_ul">
                            <li>深夜でも即日調査で対応可能。<br />大事なタイミングを逃さず証拠を撮ります。</li>
                            <li>土地勘があるからこそ対象者のあらゆる動きにも迅速に対応。結果的に高い成功率となります。</li>
                            <li>地元に膨大なネットワークがあり、情報収集能力はどこよりも特化して詳しい調査が可能です。</li>
                        </ul>
                    </div>

                    <div id="choose_price" className="bg_wide">
                        <h3 className="headline mp">浮気調査の料金について<br className="dsp_smt" />
                            <span className="fs">（5日間、実働20時間）</span></h3>
                        <p>同程度の内容でも調査料金が何故これほど違うのでしょう？</p>
                        <table className="price_table">
                            <tbody><tr>
                                <td />
                                <td />
                                <td><span className="bar_gray bar01">13.2万円</span><span className="name_gray">A<br className="dsp_smt" />
                                    興信所</span></td>
                                <td><span className="bar_blue bar02">26.4万円</span><span className="name_blue">当社</span></td>
                                <td><span className="bar_gray bar03">77万円</span><span className="name_gray">B探偵<br className="dsp_smt" />
                                    事務所</span></td>
                                <td><span className="bar_gray bar04">165万円</span><span className="name_gray">C<br className="dsp_smt" />
                                    探偵社</span></td>
                            </tr>
                            <tr className="border">
                                <td colSpan={2} className="bg_gray"><span className="b">基本料金</span>　<br className="dsp_smt" />
                                調査員1名毎</td>
                                <td className="bg_gray cen w_190">0</td>
                                <td className="bg_gray cen w_190"><span className="b">5,500円</span></td>
                                <td className="bg_gray cen w_190"><span className="b">1.1万</span></td>
                                <td className="bg_gray cen w_190"><span className="b">1.5万</span><br className="dsp_smt" />
                                <span className="caution">注1</span></td>
                            </tr>
                            <tr className="border">
                                <td colSpan={2}><span className="b">調査料金</span></td>
                                <td className="cen"><span className="b">13.2万</span></td>
                                <td className="bg_blue cen"><span className="b txt_blue">20.9万</span></td>
                                <td className="cen"><span className="b">44万</span></td>
                                <td className="cen"><span className="b">135万</span></td>
                            </tr>
                            <tr className="border">
                                <td rowSpan={2} className="bg_gray cen">内訳</td>
                                <td className="bg_gray">調査員</td>
                                <td className="bg_gray cen">-<br className="dsp_smt" />
                                <span className="caution">注2</span></td>
                                <td className="bg_gray cen">2名</td>
                                <td className="bg_gray cen">2名</td>
                                <td className="bg_gray cen">4名<br className="dsp_smt" />
                                <span className="caution">注3</span></td>
                            </tr>
                            <tr className="border">
                                <td className="bg_gray">調査期間</td>
                                <td className="bg_gray cen">7日間</td>
                                <td className="bg_gray cen">20時間</td>
                                <td className="bg_gray cen">20時間</td>
                                <td className="bg_gray cen">20時間</td>
                            </tr>
                            <tr className="border">
                                <td colSpan={2}><span className="b">諸経費</span></td>
                                <td rowSpan={7} className="cen"><span className="b">0</span></td>
                                <td rowSpan={7} className="bg_blue cen"><span className="txt_blue b">5.5万</span></td>
                                <td className="cen"><span className="b">33万</span><br className="dsp_smt" />
                                <span className="caution">注4</span></td>
                                <td rowSpan={7} className="cen"><span className="b">33万</span></td>
                            </tr>
                            <tr className="border">
                                <td rowSpan={6} className="bg_gray cen">内訳</td>
                                <td className="bg_gray">機材<br className="dsp_smt" />
                                使用料</td>
                                <td className="cen">5.5万</td>
                            </tr>
                            <tr className="border">
                                <td className="bg_gray">車両<br className="dsp_smt" />
                                使用料</td>
                                <td className="bg_gray cen">3.3万</td>
                            </tr>
                            <tr className="border">
                                <td className="bg_gray">ガソリン<br className="dsp_smt" />
                                代</td>
                                <td className="bg_gray cen">5.5万</td>
                            </tr>
                            <tr className="border">
                                <td className="bg_gray">通信費</td>
                                <td className="bg_gray cen">2.2万</td>
                            </tr>
                            <tr className="border">
                                <td className="bg_gray">報告書<br className="dsp_smt" />
                                作成料</td>
                                <td className="bg_gray cen">5.5万</td>
                            </tr>
                            <tr className="border">
                                <td className="bg_gray">その他</td>
                                <td className="bg_gray cen">11万</td>
                            </tr>
                            <tr className="border">
                                <td colSpan={2} className="bg_dgray rit"><span className="b txt_white">合計金額</span></td>
                                <td className="bg_dgray cen"><span className="b txt_white">13.2万円</span></td>
                                <td className="bg_dblue cen"><span className="b txt_white">26.4万円</span></td>
                                <td className="bg_dgray cen"><span className="b txt_white">77万円</span></td>
                                <td className="bg_dgray cen"><span className="b txt_white">165万円</span></td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="price_box">
                            <h4 className="headline mp">ここに注意!!</h4>
                            <dl className="price_dl">
                            <dt><span className="circle">注 </span></dt>
                            <dd><span className="b">ここが最も重要です。</span><span className="b red">１名毎の基本料金の差</span>でお見積り合計金額は、こんなに大きく差額がでるのです。</dd>
                            </dl>
                            <dl className="price_dl">
                            <dt><span className="circle">注 </span></dt>
                            <dd>契約内容は<span className="b red">「探偵スタッフによる尾行調査」</span>ですか？GPSによる「簡易調査」だけではありませんか？<br />
                                証拠能力が認められるのは<span className="b red">「尾行調査によって作成された報告書」</span>だけです。</dd>
                            </dl>
                            <dl className="price_dl">
                            <dt><span className="circle">注 </span></dt>
                            <dd>探偵スタッフは本当に<span className="b red">４名</span>必要ですか？４名全員が<span className="b red">本当に実動</span>していますか？</dd>
                            </dl>
                            <dl className="price_dl">
                            <dt><span className="circle">注 </span></dt>
                            <dd>経費の名目で後から<span className="b red">高額請求</span>する探偵事務所もあります。<br />
                                調査料金・基本料金が安いように見えても、報告が完了するまでの<br className="dsp_tbs" />
                                合計金額が<br className="dsp_hp" />
                                いくらになるのか、<span className="b red">事前に必ず確認</span>しておきましょう。</dd>
                            </dl>
                            <img src="../img/choose/price01.png" alt="ここに注意!!" className="img_price01" />
                        </div>
                    </div>

                    <div id="choose_caution" className="bg_wide">
                        <h3 className="headline02 mp">違法な探偵業者にご注意ください</h3>
                        <div className="caution_box">
                            <span className="circle"><img src="../img/choose/caution01.png" alt="違法な探偵業者にご注意ください" className="mt" /></span>
                            <div className="txt_area">
                            <h4 className="headline">対象者の承諾なく人や車等にGPSを使用することは犯罪です。</h4>
                            <p className="caution_txt01">浮気調査、素行調査などの調査の為に対象者の承諾なく、探偵調査員が敷地内に忍び込み、車等に<span className="red">GPSを取り付ける業者が増えていますので注意</span>してください。</p>
                            <p className="nm">GPS使用は、あらかじめ対象者の承諾が必要です。不特定多数の人・車に承諾なしで使用してはいけません。<br />
                                また取りつけたGPSの位置情報をひそかに取得する行為も犯罪です。<br />違法行為となった場合の罪状と罰則はストーカー規制法、不正アクセス禁止法、プライバシー侵害、住居不法侵入、器物損壊などに問われる可能性があります。</p>
                            </div>
                        </div>
                        <div className="caution_box">
                            <span className="circle"><img src="../img/choose/caution02.png" alt="ビデオ撮影の手法" /></span>
                            <div className="txt_area">
                            <h4 className="headline">ビデオ撮影の手法</h4>
                            <p className="caution_txt01">浮気調査の調査方法で写真ではなく<span className="red">ビデオ撮影の手法にご注意</span>ください。<br />
                                ビデオを回しっぱなしでの録画は対象者以外の映像も記録されるため<span className="blue">プライバシーの問題（盗撮）</span>があります。</p>
                            <p className="nm">的確・適正な調査手法としては<span className="b">カメラ撮影・ビデオ撮影でも、対象者のみに、その都度シャッター切るような方法</span>が、好ましい調査方法と判断されるとの事。（弁護士コメントです。）<br />
                                ※特に夜間ホテルの出入りや顔の画像などを、はっきりクリアに撮影する為には、一瞬をとらえる為カメラの方が高い技術を必要とします。高感度カメラと高感度ビデオを比べるとカメラで撮影の方が明らかに鮮明なのです。</p>
                            </div>
                        </div>
                        <div className="caution_box">
                            <span className="circle"><img src="../img/choose/caution03.png" alt="不正なルートで個人情報を入手" /></span>
                            <div className="txt_area">
                            <h4 className="headline">不正なルートで個人情報を入手</h4>
                            <p className="caution_txt01">電話番号から不正なルートで個人情報を（住所・氏名）聞き出したり、<br />
                                <span className="red">他人の住民票や戸籍を勝手に引き出す業者にご注意</span>ください。</p>
                            <p className="nm">ただし浮気・不倫相手に慰謝料を請求する場合は、証拠に基づき弁護士は<span className="b">合法的な手段（訴訟準備）で住民票や戸籍謄本を入手し進めて行く事</span>が可能です。</p>
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
            title="広島で探偵業社を見分けるポイント"
            description="広島の探偵社「中央リサーチ」より探偵社の選び方について説明しています。"
            />
    </>
)
export default choose
