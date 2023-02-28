import React from 'react'

import Seo from '../../components/SEO'
import HeaderOkayama from '../../components/HeaderOkayama'
import FooterOkayama from '../../components/FooterOkayama'
import Layout from '../../components/Layout'
import SubpageTitle from '../../components/SubpageTitle'
import Breadcrumb from '../../components/breadcrumb'

const contact = () => {
    const pagemeta = {
        title:`お問い合わせ`,
        slug:`contact`        
    }
    return (
        <>
        
            <div id="wrap">
                <HeaderOkayama h1title="ご相談、お問い合わせについて" pagetitle="岡山駅より徒歩5分の探偵事務所" />
                <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
                <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">

                        <div id="contact_line" className="cf pb">
                            <h3 className="headline">LINEでのお問い合わせ</h3>
                            <p><img src="../../img/okayama/contact/line_logo.png" width={151} height={41} alt="" /></p>
                            <p className="b fm">LINEからお問い合わせできます！</p>
                            <div className="dsp_hp">
                            <p className="img_rit"><img src="../../img/okayama/contact/qr.gif" width={170} height={170} alt="" /></p>
                            <p>QRコードから<a href="https://line.me/R/ti/p/65gpK3qcDs" rel="nofollow noopener noreferrer" target="_blank">「友だち登録」</a>すると、LINEでお問い合わせができます。<br />
                                LINEアプリの【友だち追加】で右のQRコードを読み取って、トークからお問い合わせください。</p>
                            </div>
                            <div className="dsp_tbs">
                            <p>下記<a href="https://line.me/R/ti/p/65gpK3qcDs" rel="nofollow noopener noreferrer" target="_blank">「友だち登録」</a>をタップすると、LINEでお問い合わせができます。</p>
                            <p className="cen nm"><a href="https://line.me/R/ti/p/%40zmg2410c"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" width={232} height={72} alt="友だち追加" /></a></p>
                            </div>
                        </div>
                        <div id="contact_tel" className="pb">
                            <h3 className="headline">電話でのお問い合わせ</h3>
                            <p className="red">はじめての方も、お気軽にご相談ください！小さな問題でも丁寧に対応させていただきます。</p>
                            <p>お電話でのご相談の場合、下記フリーダイヤルまでお問い合わせください。年中無休・24時間対応いたしております。（携帯電話からもOK）</p>
                            <div id="beginner_msg">
                            <div className="msg_box02">
                                <div className="txt_area">
                                <dl className="box02_flex">
                                    <dt><span className="txt_free mp">無料<span>相談窓口</span></span></dt>
                                    <dd className="tel_area">
                                    <a href="tel:0120-30-6630" className="tel tel_m sans"><img src="../../img/okayama/free.png" alt="フリーダイヤル" />0120-30-6630</a>
                                    <p className="msg_txt04">女性相談員ご希望の方はこちら</p>
                                    <a href="tel:0120-20-3399" className="tel sans"><img src="../../img/okayama/free.png" alt="フリーダイヤル" />0120-20-3399</a>
                                    </dd>
                                </dl>
                                <p className="msg_txt05">年中無休！ 24時間受付！<span>携帯電話でもOK!</span></p>
                                </div>
                            </div>
                            </div>
                            <p className="red b a_note">※営業、セールスのお電話は一切お断り致します。</p>
                        </div>
                        <div className="pb">
                            <h3 className="headline">メールでのお問い合わせ</h3>
                            <p>メールでのご相談の場合、下記の入力画面に必要事項をご記入いただき、入力画面の最後にある「お問い合わせ」ボタンよりお問い合わせください。<br />
                            お電話、メールによりご対応させていただきます。</p>
                            <p className="red">メールでのご相談も24時間年中無休で受け付けておりますが、お急ぎの場合はフリーダイヤルへお願いいたします。</p>
                            <form action="https://ssgform.com/s/3qi73V3ONASL" method="post" id="mailform">
                                <div style={{display: 'none'}}><input type="text" name="wana" /></div>
                            <table className="tbl">
                                <tbody><tr>
                                    <th><span className="need">必須</span>調査エリア</th>
                                    <td>
                                    <label><input type="radio" name="調査エリア" required="required" defaultValue="岡山" /> 岡山</label>&nbsp;<br className="dsp_smt" />
                                    <label><input type="radio" name="調査エリア" required="required" defaultValue="広島" /> 広島</label>&nbsp;<br className="dsp_smt" />
                                    <label><input type="radio" name="調査エリア" required="required" defaultValue="山口" /> 山口</label>&nbsp;<br className="dsp_smt" />
                                    <label><input type="radio" name="調査エリア" required="required" defaultValue="島根" /> 島根</label>&nbsp;<br className="dsp_smt" />
                                    <label><input type="radio" name="調査エリア" required="required" defaultValue="愛媛" /> 愛媛</label>&nbsp;<br className="dsp_smt" />
                                    <label><input type="radio" name="調査エリア" required="required" defaultValue="東京" /> 東京</label>&nbsp;<br className="dsp_smt" />
                                    <label><input type="radio" name="調査エリア" required="required" defaultValue="大阪" /> 大阪</label>&nbsp;<br className="dsp_smt" />
                                    <label><input type="radio" name="調査エリア" required="required" defaultValue="その他" /> その他</label>
                                    </td>
                                </tr>
                                <tr>
                                    <th><span className="need">必須</span>お名前</th>
                                    <td><input type="text" name="お名前" required="required" size={30} className="active" /> <span className="thin">※ニックネーム可</span></td>
                                </tr>
                                <tr>
                                    <th>郵便番号</th>
                                    <td><input type="text" name="郵便番号" size={10} className="disabled wno" /></td>
                                </tr>
                                <tr>
                                    <th>住所</th>
                                    <td><input type="text" name="住所" size={70} className="active" /></td>
                                </tr>
                                <tr>
                                    <th>お電話番号</th>
                                    <td><input type="text" name="お電話番号" size={50} maxLength={50} className="disabled" /></td>
                                </tr>
                                <tr>
                                    <th><span className="need">必須</span>メールアドレス</th>
                                    <td><input type="text" name="email" required="required" size={50} maxLength={50} className="disabled" /></td>
                                </tr>
                                <tr>
                                    <th><span className="need">必須</span>メールアドレス<span className="fs">（確認用）</span></th>
                                    <td><input type="text" name="confirm_email" required="required" size={50} maxLength={50} className="disabled" /></td>
                                </tr>
                                <tr>
                                    <th><span className="need">必須</span>ご用件</th>
                                    <td>
                                    <label><input type="radio" name="ご用件" required="required" defaultValue="浮気・不倫調査に関するお問い合わせ" /> 浮気・不倫調査に関するお問い合わせ</label><br />
                                    <label><input type="radio" name="ご用件" required="required" defaultValue="素行調査に関するお問い合わせ" /> 素行調査に関するお問い合わせ</label><br />
                                    <label><input type="radio" name="ご用件" required="required" defaultValue="裁判証拠収集に関するお問い合わせ" /> 裁判証拠収集に関するお問い合わせ</label><br />
                                    <label><input type="radio" name="ご用件" required="required" defaultValue="結婚・身上調査に関するお問い合わせ" /> 結婚・身上調査に関するお問い合わせ</label><br />
                                    <label><input type="radio" name="ご用件" required="required" defaultValue="家出・所在調査に関するお問い合わせ" /> 家出・所在調査に関するお問い合わせ</label><br />
                                    <label><input type="radio" name="ご用件" required="required" defaultValue="嫌がらせ・ストーカー対策に関するお問い合わせ" /> 嫌がらせ・ストーカー対策に関するお問い合わせ</label><br />
                                    <label><input type="radio" name="ご用件" required="required" defaultValue="盗聴器発見に関するお問い合わせ" /> 盗聴器発見に関するお問い合わせ</label><br />
                                    <label><input type="radio" name="ご用件" required="required" defaultValue="指紋・声紋・筆跡鑑定に関するお問い合わせ" /> 指紋・声紋・筆跡鑑定に関するお問い合わせ</label><br />
                                    <label><input type="radio" name="ご用件" required="required" defaultValue="その他、お問い合わせ" /> その他、お問い合わせ</label>
                                    </td>
                                </tr>
                                <tr>
                                    <th><span className="need">必須</span>お問い合わせ内容</th>
                                    <td><textarea name="お問い合わせ内容" required="required" rows={10} cols={70} className="active" defaultValue={""} /></td>
                                </tr>
                                </tbody></table>
                            <div className="btn">
                                <p>お客様の個人情報の漏洩を防ぐため、このページの情報は暗号化され、SSLモードで送信されます。必要事項が記入できましたら「送信する」ボタンを押してください。</p>
                                <p className="cen"><input type="submit" defaultValue="送信する" className="send" /> <input type="reset" name="reset" defaultValue="リセット" /></p>
                            </div>
                            </form>
                        </div>
                        <div className="pt pb">
                            <h3 className="headline">プライバシーポリシー</h3>
                            <p>中央リサーチでは、ヤフー株式会社をはじめとする第三者から配信される広告が掲載される場合があり、これに関連して、当該第三者が、当ウェブサイトを訪問したユーザーのクッキー情報等を取得し、利用している場合があります。<br />
                            当該第三者によって取得されたクッキー情報等は、当該第三者のプライバシーポリシーに従って取り扱われます。ユーザーは、当該第三者のウェブサイト内に設けられたオプトアウトページにアクセスして、当該第三者によるクッキー情報等の広告配信への利用を停止することができます。<br />
                            クッキーとは、ウェブページを利用したときに、ブラウザーとサーバーとの間で送受信した利用履歴や入力内容などを、お客様のコンピューターにファイルとして保存しておく仕組みです。次回、同じページにアクセスすると、クッキーの情報を使って、ページの運営者はお客様ごとに表示を変えたりすることができます。お客様がブラウザーの設定でクッキーの送受信を許可している場合、ウェブサイトは、ユーザーのブラウザーからクッキーを取得できます。<br />
                            尚、お客様のブラウザーは、プライバシー保護のため、そのウェブサイトのサーバーが送受信したクッキーのみを送信します。お客様は、クッキーの送受信に関する設定を「すべてのクッキーを許可する」、「すべてのクッキーを拒否する」、「クッキーを受信したらユーザーに通知する」などから選択できます。設定方法は、ブラウザーにより異なります。クッキーに関する設定方法は、お使いのブラウザーの「ヘルプ」メニューでご確認ください。<br />
                            すべてのクッキーを拒否する設定を選択されますと、認証が必要なサービスを受けられなくなる等、インターネット上の各種サービスの利用上、制約を受ける場合がありますのでご注意ください。</p>
                        </div>
                        </div>

                </Layout>
            </div>
            <FooterOkayama />
        </>
    )
}
export const Head = () => (
    <>
        <Seo
            title2="ご相談、お問合せはこちら｜総合探偵社中央リサーチ岡山"
            description="岡山の探偵社「中央リサーチ岡山」ではどのようなお問合せにも対応致します。お気軽にご連絡ください。"
            keyword="探偵,岡山,問合せ,中央リサーチ岡山"
            />
    </>
  )
export default contact
