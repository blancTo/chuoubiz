import React from 'react'
import { Link } from 'gatsby'

import Seo from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'

import TopMenu from '../components/TopMenu'
import TopComment from '../components/TopComment'
import TopAbout from '../components/TopAbout'
import TopGuide from '../components/TopGuide'
import TopArea from '../components/TopArea'

const IndexPage = () => {
  return (
    <>
      <Header h1title="広島の探偵｜浮気調査は55年の実績と信頼｜総合探偵社 中央リサーチ" />

      <div id="img_top_msg" className="bg_blue_grad">
        <p className="mp nm">内閣総理大臣認可 全国調査業協同組合組合員</p>
        <p className="txt nm">当探偵事務所は厳重な審査を経て<a href="http://www.ncia-research.or.jp/" rel="nofollow noopener noreferrer" target="_blank">全国調査業協同組合</a>に加盟しております。<br />
        広告は中国新聞や<a href="https://itp.ne.jp/info/341545111182370410/" rel="nofollow noopener noreferrer" target="_blank">NTT iタウンページ (探偵欄) </a>にも掲載中！</p>
      </div>

      <section id="container" className="cf">

        <div id="page_title">
          <div className="dsp_hpt"><img src="../img/top/title.png" width={1300} height={475} loading="lazy" alt="総合探偵社中央リサーチ" /></div>
          <div className="dsp_smt"><img src="../img/top/title_sp.jpg" width={375} height={284} alt="総合探偵社中央リサーチ" /></div>
        </div>

        <div id="img_bottom_msg">
          <p className="nm cen">※弊社では探偵経験10年以上のスタッフが卓越した調査力で、<br className="dsp_tbs" />ご安心、ご納得できるサービスを提供します。</p>
        </div>

        <p id="top_comment" className="dsp_smt">
          <Link to="/#top_profile">広島の弁護士から推奨されている<br /><b className="fm">唯一</b>の探偵社です！ »</Link>
        </p>
        
        <ul id="menu_sp" className="dsp_tbs">
          <li><Link to="/beginner/">はじめての方へ</Link></li>
          <li><Link to="/choose/">探偵社の選び方</Link></li>
          <li><Link to="/service/">当社の取り組み</Link></li>          
          <li><Link to="/contact/">お問い合わせ</Link></li>
          <li><Link to="/company/">会社概要</Link></li>
          <li><Link to="/price/">料金表</Link></li>
        </ul>
        
      </section>

      <section id="topmenu" className="cf">
        <div className="topmenu">
          <TopMenu />          
        </div>
        <div className="bg_back">
          <img src="../img/top/bg01.jpg" loading="lazy" width="100%" alt="" />
        </div>
      </section>
      <section id="topplan" className="cf">
        <div className="topplan">
          <div id="top_plan">
            <h3 className="mp">浮気調査安心プラン</h3>
            <div className="box">
            <dl className="head">
                <dt className="mp">
                  <div className="top_point_title">
                    必要なところにピンポイント調査
                  </div>
                </dt>
                <dd>
                <p className="nm">お客様に合った無駄のないプランを提案し、動かぬ証拠を取ります。</p>
                </dd>
            </dl>
            <div className="wrap">
                <dl className="plan w2">
                <dt className="mp">浮気調査(行動調査)基本料金</dt>
                <dd>
                    <span className="red_waku mp">調査員1名毎</span><span className="fs_smt">行動調査1時間毎の基本料金</span><br className="dsp_tbs" /><span className="price red">5,000<span className="fs">円</span></span><span className="komi">税込 5,500円</span>
                </dd>
                </dl>
                <dl className="plan w2">
                <dt className="mp">1時間毎 基本料金</dt>
                <dd>
                    <span className="red_waku mp">調査員2名</span><span className="fs_smt">行動調査1時間毎の基本料金</span><br className="dsp_tbs" /><span className="price red">10,000<span className="fs">円</span></span><span className="komi">税込 11,000円</span>
                </dd>
                </dl>
                <dl className="plan w3">
                <dt className="mp">20時間プラン</dt>
                <dd>
                    <p>19万円<span className="fs">（税込 209,000円）</span>、調査員2名体制<span className="fs">（20時間を数日間にわけて調査致します）</span></p>
                    <p className="red attention">※浮気調査の目的達成率98.1％の実績</p>
                </dd>
                </dl>
                <dl className="plan w3">
                <dt className="mp">30時間プラン</dt>
                <dd>
                    <p>28万円<span className="fs">（税込 308,000円）</span>、調査員2名体制<span className="fs">（30時間を数日間にわけて調査致します）</span></p>
                    <p className="red attention">※浮気調査の目的達成率99.3％の実績</p>
                </dd>
                </dl>
                <dl className="plan w3">
                <dt className="mp">成功報酬プラン</dt>
                <dd>
                    <p>別途お見積り調査期間 最大6ヶ月</p>
                    <p className="red attention">※不貞の証拠取得時に適応</p>
                </dd>
                </dl>
            </div>
            
            </div>
            <div className="box price_box">
            <dl className="head">
                <dt className="mp w2">
                  <div className="top_price_title">
                    <span className="smt_red">追加料金不要</span>で任せて安心<br />
                    <span className="smt_fs">（深夜料金一切不要で安心）</span><br />
                    <span className="credit">※お支払いはクレジットも利用可能</span>
                  </div>
                </dt>
                <dd>
                <p className="icon"><img src="../img/top/pay00.png" width={49} height={37} loading="lazy" alt="" /><img src="../img/top/pay01.png" width={50} height={35} loading="lazy" alt="" /><img src="../img/top/pay02.png" width={85} height={26} loading="lazy" alt="" /><img src="../img/top/pay03.png" width={59} height={35} loading="lazy" alt="" /><img src="../img/top/pay04.png" width={124} height={32} loading="lazy" alt="" /></p>
                <p className="dsp_smt fs"><span className="fs">※お支払いはクレジットも利用可能</span></p>
                <p className="link mp"><Link to="/price/">料金の詳細はこちら</Link></p>
                </dd>
            </dl>
            </div>
          </div>
          <div className="bg_back">
            <img src="../img/top/bg04.jpg" width="100%" loading="lazy" alt="" />
          </div>
        </div>
      </section>

      <section id="topevidence" className="cf">
        <div className="topevidence">
          <div id="top_evidence">
            <h2 className="serif"><span className="red">証拠</span>こそが真実を立証します</h2>
            <p className="mp b">今､あなたの心を救うのは真実しかありません。今、勇気をもってください！</p>
            <p>結果がどんなに残酷なものであっても真実ならば人はそれを受け入れ先に進むことが出来るのですが、偽りは、人の心を膠着させてしまいます。</p>
            <p className="serif sub">裁判所は証拠を基に審理いたします</p>
            <p className="txt">当探偵社の、ご相談内容で最も多いのは、浮気調査や不倫調査についてのご相談です。</p>
            <p className="txt">そこで問題になるのが、多くのお客様がSNSのやり取り等を浮気の証拠になると誤認し、その結果、裁判に負けてしまう可能性がある事です。</p>
            <p className="txt">弊社では、不貞の事実を立証する為に、例えば対象者が自宅から出る所の映像から浮気相手と合流し、食事（立ち寄り先）やホテル（マンション）に出入りする不貞の証拠を取り、同時その経過時間などを記録します。</p>
            <p className="txt">その後、浮気相手の帰宅先も割り出します。また状況次第では継続性や信憑性を立証する為、複数回の証拠固めも行います。</p>
            <div className="sample">
            <h3 className="line mp">報告書写真サンプル</h3>
            <div className="wrap dsp_hpt">
                <dl className="w2">
                <dt>ズームで、ここまで撮ることが出来ます</dt>
                <dd>
                  <p className="arrow"><img src="../img/top/sample01.jpg" width={248} height={198} loading="lazy" alt="" /></p>
                  <p><img src="../img/top/sample02.jpg" width={248} height={198} loading="lazy" alt="" /></p>
                </dd>
                </dl>
                <dl className="w2">
                <dt>ホテルの出入りや、自宅の出入りを確実に撮影</dt>
                <dd>
                <p className="arrow"><img src="../img/top/sample03.jpg" width={248} height={198} loading="lazy" alt="" /><span>2019/6/25/19:09</span></p>
                <p><img src="../img/top/sample04.jpg" width={248} height={198} loading="lazy" alt="" /><span>2019/6/25/21:11</span></p>
                </dd>
                </dl>
                <dl className="w3">
                <dt className="ico">普通のカメラで夜、暗所撮影</dt>
                <dd>
                <p className="arrow"><img src="../img/top/sample05.jpg" width={338} height={248} loading="lazy" alt="" /><span>2019/6/25/19:09</span></p>
                </dd>
                </dl>
                <dl className="w3">
                <dt className="ico">高感度カメラで夜、同所暗所</dt>
                <dd>
                <p className="arrow"><img src="../img/top/sample06.jpg" width={338} height={248} loading="lazy" alt="" /></p>
                </dd>
                </dl>
                <dl className="w3">
                <dt className="ico">高感度カメラで夜ズーム暗所</dt>
                <dd>
                    <p><img src="../img/top/sample07.jpg" width={338} height={248} loading="lazy" alt="" /></p>
                </dd>
                </dl>
            </div>
            
            <div className="cen"><img src="../img/top/sample08.png" width={655} height={337} loading="lazy" alt="" /></div>
            
            <p className="link mp"><Link to="/sample/">調査報告書サンプルはコチラ</Link></p>

            </div>
          </div>
          <div className="bg_back2">
            <img src="../img/top/bg02.jpg" width="100%" loading="lazy" className="dsp_hp" alt="" />
            <img src="../img/top/bg02_smp.jpg" width="100%" loading="lazy" className="dsp_tbs" alt="" />
          </div>
        </div>
      </section>

      <section id="container" className="cf">
        <div className="main">
          <div id="top_column" className="top_column bg_wide pt pb">
            <h3 className="cen mp">浮気調査広島コラム</h3>
            <div className="box">
              <div id="blog_list">
                <dl>
                  <dt>2023/02/23</dt>
                  <dd><a href="https://www.chuou.biz/column/2003" target="_parent">浮気調査が上手な探偵社を見分けるチェックリスト７項目</a></dd>
                </dl>
                <dl>
                  <dt>2023/02/16</dt>
                  <dd><a href="https://www.chuou.biz/column/2002" target="_parent">【浮気調査編】探偵調査員ってどんな人？お仕事のやりがいをインタビュー</a></dd>
                </dl>
              </div>
              
              <p className="rit nm"><Link to="/column/">一覧はこちら »</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section id="topprofile">
        <div className="topprofile">
          <TopComment />
        </div>
        <div className="bg_back">
            <img src="../img/top/bg05.jpg" width="100%" loading="lazy" alt="" />
          </div>
      </section>

      <section id="toppromise" className="cf">
        <div className="toppromise">
          <div id="top_promise">
            <h3 className="mp">お客様との<span className="fm">6</span>つの約束</h3>
            <div className="wrap">
            <div className="box">
                <p className="no">1</p>
                <h4 className="mp">即日調査可能</h4>
                <p className="ttl serif">解決までの<br />対応トップクラス</p>
                <p className="bg_gray nm">地元だからこそ、迅速な調査が可能、探偵経験10年以上のベテラン調査員が迅速かつ正確な調査を24時間年中無休で対応致します。</p>
            </div>
            <div className="box">
                <p className="no">2</p>
                <h4 className="mp">完全秘密厳守</h4>
                <p className="ttl serif">常にお客様の立場で<br />お力になる事をお約束</p>
                <p className="bg_gray nm">当探偵社に、ご相談、ご依頼の秘密が第三者に漏えいする事はございません。また業務上知りえた資料や個人情報につきましても、報告書提出後には責任を持ってシュレッダーで破棄致します。</p>
            </div>
            <div className="box">
                <p className="no">3</p>
                <h4 className="mp">業界最安値</h4>
                <p className="ttl serif">適正な料金で<br />見積もります</p>
                <p className="bg_gray nm">無駄のない調査プランで低料金のお見積りを致します。弊社のシステムは追加料金不要で安心です。低価格にて契約した後から、ご契約した料金が再び上がる事はございません。</p>
            </div>
            <div className="box">
                <p className="no">4</p>
                <h4 className="mp">卓越した調査能力</h4>
                <p className="ttl serif">地元広島50年以上の<br />実績で卓越した調査技術</p>
                <p className="bg_gray nm">探偵業法及び法令を順守した上で、迅速かつ確実な調査を責任をもってお引き受けいたします。<br />トップクラスの調査能力や調査技術開発力を持つ当探偵社をご利用くださいませ。</p>
            </div>
            <div className="box">
                <p className="no">5</p>
                <h4 className="mp">まごころ調査</h4>
                <p className="ttl serif">9割のお客様が最初から<br className='dsp_smt' />当社にお願いすれば良かった</p>
                <p className="bg_gray nm">当探偵社は結果が出るまで、できる限りサービスしてでも親身になって調査し問題解決に尽力致します。他の探偵社にご依頼されても結果が出なかった方、当社は必ずお力になる事をお約束致します。</p>
            </div>
            <div className="box">
                <p className="no">6</p>
                <h4 className="mp">アフターフォロー</h4>
                <p className="ttl serif">全国で約300名の<br />弁護士と連携</p>
                <p className="bg_gray nm">調査結果に基づき、今後の対策、再発防止策等、最良な方法を責任もってアドバイス致します。<br />必要に応じて、事案内容が得意とされる有能な弁護士を無料でご紹介する事も可能です。</p>
            </div>
            </div>
          </div>
        </div>
        <div className="bg_back">
          <img src="../img/top/bg06.jpg" width="100%" loading="lazy" alt="" />
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
        <div className="bg_back2"><img src="../img/top/bg07.jpg" width="100%" loading="lazy" className="dsp_hp" alt="" /><img src="../img/top/bg07_smp.jpg" width="100%" loading="lazy" className="dsp_tbs" alt="" /></div>
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
              <a href="https://youtu.be/MMlJj9fimqU" rel="nofollow noopener noreferrer" target="_blank">
                <img src="img/top/youtube.jpg" alt="YouTube" width={900} height={507} loading="lazy" />
              </a>
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
            <img src="../img/top/bg08.jpg" width="100%" loading="lazy" alt="" />
          </div>
        </section>

        <section id="topguide" className="cf">
          <div className="topguide">
            <TopGuide />
          </div>
          <div className="bg_back">
            <img src="../img/top/bg09.jpg" width="100%" loading="lazy" alt="" />
          </div>
        </section>

        <section id="container" className="cf">
          <div className="main">
            <div id="top_blog" className="top_column bg_wide pt pb">
              <h3 className="cen mp">探偵ブログ</h3>
              <div className="box">
                <div id="blog_list">
                  <dl>
                    <dt>2023/03/02</dt>
                    <dd><a href="https://www.chuou.biz/info/2023/03021157252005.html" target="_parent">あの人の素行を知りたい！素行調査を依頼できる対象はどんな人？</a></dd>
                  </dl>
                  <dl>
                    <dt>2023/02/08</dt>
                    <dd><a href="https://www.chuou.biz/info/2023/02080844281999.html" target="_parent">家出調査・人探しは警察と探偵社どっち？両者の違いを徹底解説！</a></dd>
                  </dl>
                </div>
                <p className="rit nm"><Link to="/info/">一覧はこちら »</Link></p>
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
                <li className="dsp_hp"><a href="https://www.pref.hiroshima.lg.jp/site/police/" rel="nofollow noopener noreferrer" target="_blank"><img src="../img/top/hiroshimapolice.jpg" width={180} height={46} loading="lazy" alt="広島県警察" /></a></li>
                <li className="dsp_hp"><a href="https://rikon.vbest.jp/" rel="nofollow noopener noreferrer" target="_blank"><img src="../img/top/very_best.png" width={226} height={49} loading="lazy" alt="ベリーベスト法律事務所" /></a></li>
                <li className="dsp_hp"><a href="https://best-legal.jp/want-to-claim-affair-alimony-3366/" rel="nofollow noopener noreferrer" target="_blank"><img src="../img/top/20210416.png" width={220} height={46} loading="lazy" alt="浮気や不倫お役立ち情報はコチラ" /></a></li>
                <li id="ikuchan" className="dsp_hp"><a href="http://www.ikuchan.or.jp/service/" rel="nofollow noopener noreferrer" target="_blank"><img src="../img/top/ikuzennkoku.jpg" width={108} height={115} loading="lazy" alt="子育て応援イクちゃんサービス" /><span className="txt">お子様連れ大歓迎です。弊社は、<b className="orange">イクちゃんサービス参加店</b>に登録しております。</span></a></li>
              </ul>
            </div>

            <TopArea />

          </div>
        </section>

      <Footer />
      
    </>
  )
}

const jsonLd = {
  "@context": "http://schema.org/",
  "@graph":[
    {
      "@type": "LocalBusiness",
      "name": "広島探偵 中央リサーチ",
      "description": "中央リサーチ広島は｢浮気調査が最も得意｣な探偵社であり、裁判証拠収集ならお任せください!!ご相談は無料です。広島県公安委員会探偵業届出済で、浮気調査は信頼と実績ある当社にご相談ください！プロの探偵が全力でお悩みを解決いたします！高い追跡技術を持つ中央リサーチ広島が浮気・不倫の現場を突き止めます。",
      "url": "https://www.chuou.biz/",
      "logo": "https://www.chuou.biz/img/title.png",
      "image": [
        "https://www.chuou.biz/img/top/title_sp.jpg"
      ],
      "telephone": "0120-30-6630",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "広島県広島市中区上幟町2-45 今田ビル2F",
        "addressLocality": "広島市中区",
        "postalCode": "730-0014",
        "addressRegion": "広島県",
        "addressCountry": "日本"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.397117,
        "longitude": 132.460127
      },
      "priceRange": "お問い合わせください",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "24:00"
        }
      ],
    },
    {
      "@type":"WebSite",
      "@id":"https://www.chuou.biz/#website",
      "url":"https://www.chuou.biz/",
      "name":"広島探偵 中央リサーチ",
      "description":"総合探偵社中央リサーチ広島は「浮気調査、不倫調査が最も得意」な探偵事務所です。浮気調査なら高いスキルで浮気の証拠をとり早期解決に導きます。分かりやすい料金表でお見積り、ご相談無料です。所在地 広島県広島市中区上幟町2-45今田ビル2階(広島家庭裁判所前)広島県公安委員会届け出済み",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://www.chuou.biz/#person"
      }
    },
    {
      "@type":"WebPage",
      "@id":"https://www.chuou.biz/#webpage",
      "url":"https://www.chuou.biz/",
      "name":"広島探偵 中央リサーチ",
      "description":"総合探偵社中央リサーチ広島は「浮気調査、不倫調査が最も得意」な探偵事務所です。浮気調査なら高いスキルで浮気の証拠をとり早期解決に導きます。分かりやすい料金表でお見積り、ご相談無料です。所在地 広島県広島市中区上幟町2-45今田ビル2階(広島家庭裁判所前)広島県公安委員会届け出済み",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://www.chuou.biz/#website"
      },
      "breadcrumb":{
        "@id":"https://www.chuou.biz/#breadcrumblist"
      },
      "datePublished":"2023-2-22T21:00:00+09:00",
      "dateModified":"2023-2-24T19:00:00+09:00"
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.chuou.biz/#breadcrumblist",
      "itemListElement":[
        {
          "@type":"ListItem",
          "@id":"https://www.chuou.biz/#listItem",
          "position":1,
          "item":{
            "@type":"WebPage",
            "@id":"https://www.chuou.biz/",
            "name":"広島探偵 中央リサーチ",
            "description":"総合探偵社中央リサーチ広島は「浮気調査、不倫調査が最も得意」な探偵事務所です。浮気調査なら高いスキルで浮気の証拠をとり早期解決に導きます。分かりやすい料金表でお見積り、ご相談無料です。所在地 広島県広島市中区上幟町2-45今田ビル2階(広島家庭裁判所前)広島県公安委員会届け出済み",
            "url":"https://www.chuou.biz/"
          },
          "nextItem":"https://www.chuou.biz/#listItem"
        }
      ]
    }
    
  ]
  
}

export const Head = () => (
  <>  
    <Seo />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)
export default IndexPage
