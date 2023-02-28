import React from 'react'
import { Link } from 'gatsby'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const tapping = () => {
    const pagemeta = {
        title:`盗聴器発見`,
        slug:`tapping`
    }
    return (
        <>
        
            <div id="wrap">
            <Header h1title="盗聴器、盗撮器の発見について" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main pb">

                      <div className="bg bg_wide pb">
                        <ul id="page_navi">
                          <li><Link to="/">ホーム</Link></li><li>盗聴器発見</li>
                        </ul>
                        <div className="man_area">
                          <h3 className="mp blue2">盗聴・盗撮器等を最新の機器を使って確実に探査します</h3>
                          <p className="red fm b">近年では盗聴器や盗撮器などネットで簡単に入手可能な環境もあり、盗聴・盗撮の被害が増えているのが現状です。<br />
                            いつの間にか知るはずの無い情報や画像が漏れていたりと私たちの身近に危険が潜んでいます。</p>
                          <p className="txt nm">不信感を感じ自身で探査するにしても知識や経験がないと盗聴器の発見は難しいのが現状です。<br />
                            一般的に盗聴器には<b className="fm">アナログ式の電波を出す盗聴器</b>と<b className="fm">デジタル式の電波を出す盗聴器、電波を出さない盗聴器</b>があります。<br />
                            その３種類の盗聴器を発見する為には電磁波測定器や周波数カウンター、目視等で盗聴に使用される周波数帯の探査やアッテネーター<br className="dsp_hp" />で場所の絞り込みなどを行う必要があります。<br />
                            不安・不信を感じた時は盗聴探査の技術のある探偵にお任せください。</p>
                          <p className="img"><img src="../img/tapping/man.png" alt="" /></p>
                        </div>
                        <div className="blue_waku">
                          <ul className="box_flex">
                            <li><img src="../img/tapping/img01.jpg" alt="" /></li>
                            <li><img src="../img/tapping/img02.jpg" alt="" /></li>
                            <li><img src="../img/tapping/img03.jpg" alt="" /></li>
                          </ul>
                        </div>
                      </div>
                      <div className="chk_box pt">
                        <h3 className="headline">盗聴器発見</h3>
                        <p><b className="fm">盗聴器の仕掛けられている場所の多くは一般家庭と会社事務所への設置がほとんどです。</b>特に、夫婦間のトラブルで別居中の方や一人暮らしの女性、異性間でのトラブルを抱えている方などが仕掛けられているケースが目立ちます。<b className="fm b red">個人プライバシーを守るためにも不安や不審な時、まずはご相談ください。</b></p>
                        <dl>
                          <dt className="bg_blue_grad2">こんな事でお悩みの方へ・・・</dt>
                          <dd>
                            <ul className="chk">
                              <li><b>電話中に雑音</b>が入る</li>
                              <li><b>知るはずがない人が、その情報を知っている</b></li>
                              <li><b>間違い電話や悪戯電話</b>が増えた</li>
                              <li>会社の<b>企業秘密が漏洩</b>している</li>
                              <li>誰かに<b>尾行</b>されているような気がする</li>
                            </ul>
                            <ul className="chk">
                              <li>部屋の近くに<b>不審な人物や車</b>をよく見かける</li>
                              <li>電話中、TVをつけている時に<b>雑音・映像の乱れ</b>がある</li>
                              <li>誰かに<b>監視</b>されているような気がする</li>
                              <li>知らない間に<b>家の物が動いていたり、なくなっていた</b></li>
                            </ul>
                          </dd>
                        </dl>
                      </div>
                      <div className="shadow">
                        <p className="img nm"><img src="../img/tapping/img01.png" alt="" /></p>
                        <div className="info">
                          <p className="line mp"><span>特殊無線技士</span></p>
                          <p className="fm">当社の探偵調査員は<b className="red">無線従事者免許（特殊無線技士）</b>を<br className="dsp_hp" />取得した、経験豊富なスタッフが在籍しております。</p>
                        </div>
                      </div>
                      <div className="type pt">
                        <div className="box_flex">
                          <div className="info">
                            <h3 className="headline">盗聴器の種類</h3>
                            <h3 className="line mp">電話を盗聴される場合</h3>
                            <p>盗聴器には<b className="fm">電話器に設置する方法とコネクター部に設置する方法、ヒューズBOXに設置する方法、屋外の電線に設置する方法</b>が一般的です。<br />
                              見た目では全く普通のヒューズボックスであって外見からはNTTなどと書いている部品であるため、見分けがつきにくいのが現状です。（発見には電波及び電磁波測定器が必要です）<br />
                              昔テレビドラマでも放映された、受話器が上がり会話が始まれば電波が発信され自動で録音開始する盗聴器の自動録音タイプはよく使われています。</p>
                          </div>
                          <p className="img"><img src="../img/tapping/img04.jpg" alt="" /></p>
                        </div>
                        <div className="sec">
                          <h3 className="line mp">部屋・社内・車内を盗聴・盗撮される場合</h3>
                          <p>ITの時代と共にインターネットを利用したパソコンへの侵入で情報を読み取ったり、遠隔操作で室内を盗聴・盗撮したりも簡単に出来る時代となりました。<br />
                            <b className="fm">簡易的な盗聴器は携帯電話の改造型が多いです。</b>盗聴したいときだけ外から電話をかけ、着信音がならずに受話器が自動で上がるシステムで室内の会話など簡単に聞くことができるのです。盗撮には<b className="fm">トイレ・バスルーム・寝室</b>などにCCD（レンズ直径１ミリ）がよく使われます。<br />
                            またコンクリートマイクと言われる盗聴器は聴診器に似たタイプのもので、マンションなどのコンクリート厚さ約2メートル越しにも盗聴できてしまうのです。<br />
                            他、<b className="fm">コンセント型盗聴器・ペン型盗聴器・電卓型盗聴器・マウス型盗聴器・時計型盗聴器・ボタン型盗聴器等</b>約50種類以上の盗聴・盗撮器がインターネット等でも販売されています。上記を参考に気になる箇所をご自分でできる範囲、簡単にチェックしてみてください。</p>
                          <br />
                          <p>情報が漏れているなど<b className="fm blue2">不審・不安・疑問・ご心配事</b>がございましたら、<b className="fm red">盗聴器発見のスペシャリスト</b>にお任せください。</p>
                        </div>
                      </div>
                      <div className="example blue_waku">
                        <h3 className="cen mp"><span>盗聴・盗撮器の一例</span></h3>
                        <ul className="box_flex">
                          <li><img src="../img/tapping/img05.jpg" alt="" /></li>
                          <li><img src="../img/tapping/img06.jpg" alt="" /></li>
                          <li><img src="../img/tapping/img07.jpg" alt="" /></li>
                          <li><img src="../img/tapping/img08.jpg" alt="" /></li>
                          <li><img src="../img/tapping/img09.jpg" alt="" /></li>
                          <li><img src="../img/tapping/img10.jpg" alt="" /></li>
                        </ul>
                      </div>
                      <dl className="notice">
                        <dt className="mp">ご依頼時の注意点</dt>
                        <dd>ご自宅に盗聴・盗撮器が仕掛けられている場合、ご相談内容を対象者が聞いてしまうと、一時的に盗聴器を外す場合があります。<br />
                          ご相談の際は、自宅から電話した後、外出せず即日探査する。<br />
                          もしくは自宅から出て公衆電話で周りに誰もいない状況を確認しお電話ください。</dd>
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
        title2="広島で盗聴、盗撮で心配の方はまずは調査して発見します"
        description="広島の探偵社「中央リサーチ」、盗聴器、盗撮器発見についての説明ページです。"
        keyword="盗聴器,盗撮器,発見,広島,探偵,中央リサーチ" />
  </>
)
export default tapping