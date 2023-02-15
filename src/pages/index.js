import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Iframe from 'react-iframe'

import TopMenu from '../components/TopMenu'
import TopPlan from '../components/TopPlan'
import TopEvidence from '../components/TopEvidence'
import TopComment from '../components/TopComment'
import TopPromice from '../components/TopPromice'
import TopAbout from '../components/TopAbout'
import TopGuide from '../components/TopGuide'
import TopArea from '../components/TopArea'

import "@fontsource/noto-sans-jp/"
import "@fontsource/noto-serif-jp"
import "@fontsource/m-plus-1p"

const index = () => {
  return (
    <>
    <Seo />
      <div id="wrap">

        <Header h1title="広島の探偵　浮気調査なら55年の実績｜総合探偵社 中央リサーチ広島本社" />

        <div id="img_top_msg" className="bg_blue_grad">
          <p className="mp nm">内閣総理大臣認可 全国調査業協同組合組合員</p>
          <p className="txt nm">当探偵事務所は厳重な審査を経て<Link to="http://www.ncia-research.or.jp/" rel="nofollow" target="_blank">全国調査業協同組合</Link>に加盟しております。<br />
          広告は中国新聞や<Link to="https://itp.ne.jp/info/341545111182370410/" rel="nofollow" target="_blank">NTT iタウンページ (探偵欄) </Link>にも掲載中！</p>
        </div>

        <section id="container" className="cf">

          <div id="page_title">
            <div className="dsp_hpt"><StaticImage src="../img/top/title.png" width={1300} height={475} alt="総合探偵社中央リサーチ" /></div>
            <div className="dsp_smt"><StaticImage src="../img/top/title_sp.jpg" width={375} height={284} alt="総合探偵社中央リサーチ" /></div>
          </div>

          <div id="img_bottom_msg">
            <p className="nm cen">※弊社では探偵経験10年以上のスタッフが卓越した調査力で、<br className="dsp_tbs" />ご安心、ご納得できるサービスを提供します。</p>
          </div>

          <p id="top_comment" className="dsp_smt"><Link to="/#top_profile">広島の弁護士から推奨されている<br /><b className="fm">唯一</b>の探偵社です！ »</Link></p>
          
          {/* タブレット・スマホ時メイン画の下に表示されるメニュー */}
          <div id="menu_sp" className="dsp_tbs">
            <ul>
              <li><Link to="/beginner/">はじめての方へ</Link></li>
              <li><Link to="/choose/">探偵社の選び方</Link></li>
              <li><Link to="/service/">当社の取り組み</Link></li>
            </ul>
            <ul>
              <li><Link to="/contact/">お問い合わせ</Link></li>
              <li><Link to="/company/">会社概要</Link></li>
              <li><Link to="/price/">料金表</Link></li>
            </ul>
          </div>
          {/* ここまで */}
        </section>

        <section id="topmenu" className="cf">
          <div className="topmenu">

            <TopMenu />
            <div className="bg_back">
                <StaticImage src="../img/top/bg01.jpg" alt="" />
            </div>

          </div>
        </section>

        <section id="topplan" className="cf">
          <div className="topplan">
            <TopPlan />
            <div className="bg_back">
              <StaticImage src="../img/top/bg04.jpg" alt="" />
            </div>
          </div>
        </section>

        
        <section id="topevidence" className="cf">
          <div className="topevidence">
            <TopEvidence />
            <div className="bg_back2">
              <StaticImage src="../img/top/bg02.jpg" className="dsp_hp" alt="" />
              <StaticImage src="../img/top/bg02_smp.jpg" className="dsp_tbs" alt="" />
            </div>
          </div>
        </section>

        <section id="container" className="cf">
          <div className="main">

            <div id="top_column" className="top_column bg_wide pt pb">
              <h3 className="cen mp">浮気調査広島コラム</h3>
              <div className="box">
                <Iframe url="https://www.chuou.biz/column_list.php" width="100%" display="block" position="relative" title="浮気調査広島コラム記事リスト" />
                <p className="rit nm"><Link to="https://www.chuou.biz/column">一覧はこちら »</Link></p>
              </div>
            </div>
          </div>
        </section>


        <section id="topprofile" className="cf">
          <div className="topprofile">

            <TopComment />
          </div>
          <div className="bg_back">
              <StaticImage src="../img/top/bg05.jpg" alt="" />
            </div>
        </section>

        <section id="toppromise" className="cf">
          <div className="toppromise">
            <TopPromice />
          </div>
          <div className="bg_back">
            <StaticImage src="../img/top/bg06.jpg" alt="" />
          </div>
        </section>

        
        <section id="topreason" className="cf">
          <div className="topreason">
            <div id="top_reason">
              <div className="in">
                <h3>当探偵社が選ばれる理由</h3>
                <div className="waku">
                  <ul>
                    <li><span className="fs dsp_hpt">お客様から、</span>安心・ご納得される料金形態</li>
                    <li><span className="fs dsp_hpt">お客様から、</span>信頼される丁寧なカウンセリング</li>
                    <li><span className="fs dsp_hpt">お客様から、</span>評価される問題解決の力量</li>
                    <li><span className="fs dsp_hpt">お客様から、</span>感謝される責任あるアフターケア</li>
                    <li><span className="fs dsp_hpt">お客様から、</span>喜んで頂き、口コミやご紹介多数</li>
                  </ul>
                </div>
                <p className="link mp"><Link to="/voice/">お客様の声</Link></p>
              </div>
            </div>
          </div>
          <div className="bg_back2">
            <StaticImage src="../img/top/bg07.jpg" className="dsp_hp" alt="" />
            <StaticImage src="../img/top/bg07_smp.jpg" className="dsp_tbs" alt="" />
          </div>
        </section>

        <section id="container" className="cf">
          <div className="main">
            <div id="top_faq" className="pt pb">
              <h3 className="mp">よくある質問</h3>
              <div className="list">
                <dl>
                  <dt><span>Q</span>浮気調査を依頼しても何の成果も出ない事はありますか？</dt>
                  <dd><span>A</span>弊社の実績では、浮気調査のご依頼の8割のお客様が20時間プランです。<br />
                    その結果、有る答えの調査では、9割以上浮気の動かぬ証拠が撮れています。</dd>
                </dl>
              </div>
              <p className="rit"><Link to="/faq/">その他質問はこちら »</Link></p>
            </div>

            <div id="top_support" className="bg_wide pt pb">

              <h3 className="serif"><span>全力</span>であなたの<span>幸せを勝ち取るサポート</span>をいたします。</h3>

              <p className="img cen">
                <Link to="https://youtu.be/MMlJj9fimqU" rel="nofollow noopener noreferrer" target="_blank">
                  <img src="img/top/youtube.jpg" alt="YouTube" width={900} height={507} loading="lazy" />
                </Link>
              </p>
              
            </div>

            <div id="top_corona" className="bg_wide pt pb">
              <h3 className="mp cen"><span>中央リサーチはコロナ対策を実施しています</span></h3>
              <p className="b">中央リサーチではお客様の健康と安全を守るために以下の感染予防対策を実施しています。</p>
              <div className="wrap">
                <dl>
                  <dt>アルコール消毒液の設置</dt>
                  <dd>
                    <p className="ico nm"><img src="../img/top/corona01.png" width={97} height={75} alt="アルコール消毒液の設置" loading="lazy" /></p>
                    <p className="txt nm">入口に消毒液を設置しておりますので手指の除菌にご協力お願いします。</p>
                  </dd>
                </dl>
                <dl>
                  <dt>スタッフのマスク着用</dt>
                  <dd>
                    <p className="ico nm"><img src="../img/top/corona02.png" width={96} height={80} alt="スタッフのマスク着用" loading="lazy" /></p>
                    <p className="txt nm">全スタッフのマスクの着用を徹底しております。</p>
                  </dd>
                </dl>
                <dl>
                  <dt>スタッフの検温の確認</dt>
                  <dd>
                    <p className="ico nm"><img src="../img/top/corona03.png" width={94} height={81} alt="スタッフの検温の確認" loading="lazy" /></p>
                    <p className="txt nm">毎日出勤時に全スタッフの検温を実施して発熱の確認をしています。</p>
                  </dd>
                </dl>
              </div>
            </div>

            </div>
          </section>

          <section id="topabout" className="cf">
            <div className="topabout">
              <TopAbout />
            </div>
            <div className="bg_back">
              <StaticImage src="../img/top/bg08.jpg" alt="" />
            </div>
          </section>

          <section id="topguide" className="cf">
            <div className="topguide">
              <TopGuide />
            </div>
            <div className="bg_back">
              <StaticImage src="../img/top/bg09.jpg" alt="" />
            </div>
          </section>

          <section id="container" className="cf">
          <div className="main">

            <div id="top_blog" className="top_column bg_wide pt pb">
              <h3 className="cen mp">探偵ブログ</h3>
              <div className="box">
                
                  <Iframe url="https://www.chuou.biz/blog_list.php" width="100%" display="block" position="relative" />
                
                <p className="rit nm"><Link to="https://www.chuou.biz/info">一覧はこちら »</Link></p>
              </div>
            </div>

            <div id="top_koukoku" className="pb">
              <div className="list">
                <dl className="dsp_hp">
                  <dt className="mp">架空請求や詐欺などにご注意ください！</dt>
                  <dd className="b">ご契約に際し、当探偵社は必ず重要事項説明書・利用目的確認書・契約書を交付後、それに基づくお支払い分、以外に料金を請求する事は一切ございません。<br />
                    当探偵社は類似社名などの業者とは一切関係ございません。<br />
                    同一の会社であるかの確認は電話番号が一致しているかをご確認ください。</dd>
                </dl>
                <dl>
                  <dt className="mp">誇大広告にはご注意ください！</dt>
                  <dd className="b">探偵案内所、探偵ランキングなど作為的に掲載し、一部の業者だけあっせん・誘導する根拠のない嘘の誇大広告にはご注意ください。</dd>
                </dl>
              </div>
              <ul className="dsp_hp">
                <li className="dsp_hp"><Link to="https://www.pref.hiroshima.lg.jp/site/police/" rel="nofollow" target="_blank"><img src="../img/top/hiroshimapolice.jpg" width={180} height={46} loading="lazy" alt="" /></Link></li>
                <li className="dsp_hp"><Link to="https://rikon.vbest.jp/" rel="nofollow" target="_blank"><img src="../img/top/very_best.png" width={226} height={49} loading="lazy" alt="" /></Link></li>
                <li className="dsp_hp"><Link to="https://best-legal.jp/want-to-claim-affair-alimony-3366/" rel="nofollow" target="_blank"><img src="../img/top/20210416.png" width={220} height={46} loading="lazy" alt="" /></Link></li>
                <li id="ikuchan" className="dsp_hp"><Link to="http://www.ikuchan.or.jp/service/" rel="nofollow" target="_blank"><img src="../img/top/ikuzennkoku.jpg" width={108} height={115} loading="lazy" alt="" /><span className="txt">お子様連れ大歓迎です。弊社は、<b className="orange">イクちゃんサービス参加店</b>に登録しております。</span></Link></li>
              </ul>
            </div>

            <TopArea />

          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
export const Head = () => (
  <>
    
  </>
)

export default index
