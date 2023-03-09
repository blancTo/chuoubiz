import React from 'react'
import { Link } from 'gatsby'

import Seo from '../../components/SEO'
import HeaderOkayama from '../../components/HeaderOkayama'
import FooterOkayama from '../../components/FooterOkayama'

const index = () => {
  return (
    <>
      
        <div id="wrap">
            <HeaderOkayama h1title="岡山で浮気調査なら55年の実績と信頼｜岡山の探偵社、中央リサーチ岡山" pagetitle="岡山駅より徒歩5分の探偵事務所" />
  
  <div id="img_top_msg" className="bg_blue_grad">
    <p className="mp nm">内閣総理大臣認可 全国調査業協同組合組合員</p>
    <p className="txt nm">当探偵事務所は厳重な審査を経て<Link to="http://www.ncia-research.or.jp/" rel="nofollow" target="_blank">全国調査業協同組合</Link>に加盟しております。<br />
      広告は新聞・看板や<Link to="https://itp.ne.jp/info/341545111182370410/" rel="nofollow" target="_blank">NTT iタウンページ (探偵欄) </Link>にも掲載中！</p>
  </div>
  <section id="container" className="cf">
    <div id="page_title">
      <div className="dsp_hpt"><img src="../../img/top/title.png" alt="総合探偵社中央リサーチ" /></div>
      <div className="dsp_smt"><img src="../../img/top/title_sp.jpg" alt="総合探偵社中央リサーチ" /></div>
    </div>
    <div id="img_bottom_msg">
      <p className="nm cen thin">※弊社では探偵経験10年以上のスタッフが卓越した調査力で、<br className="dsp_tbs" />ご安心、ご納得できるサービスを提供します。</p>
    </div>
    <p id="top_comment" className="dsp_smt"><Link to="#top_profile">弁護士事務所から推奨されている<br />探偵社です！ »</Link></p>
    {/* タブレット・スマホ時メイン画の下に表示されるメニュー */}
    <div id="menu_sp" className="dsp_tbs okayama">
      <ul>
        <li><Link to="/okayama/voice/">お客様の声</Link></li>
        <li><Link to="/okayama/contact/">お問い合わせ</Link></li>
        <li><Link to="/okayama/company/">会社概要</Link></li>
        <li><Link to="/okayama/price/">料金表</Link></li>
      </ul>
    </div>
    {/* ここまで */}
    <div className="main">
      <div id="top_menu" className="bg_wide pt pb okayama">
        <div className="head">
          <div className="dsp_smt">
            <div className="star">
              <span>
              <Link to="https://www.google.co.jp/search?tbm=lcl&ei=XWsGX-yqB4_W0gSAhYHwBA&q=%E4%B8%AD%E5%A4%AE%E3%83%AA%E3%82%B5%E3%83%BC%E3%83%81%E5%BA%83%E5%B3%B6&oq=%E4%B8%AD%E5%A4%AE%E3%83%AA%E3%82%B5%E3%83%BC%E3%83%81%E5%BA%83%E5%B3%B6&gs_l=psy-ab.3...155248.157868.0.158152.0.0.0.0.0.0.0.0..0.0....0...1c.1j4.64.psy-ab..0.0.0....0.8ef4ngT_iJU#rlfi=hd:;si:14351266089033009334;mv:[[34.40155767731903,132.4662481279093],[34.40119772268097,132.46581187209068]]" rel="nofollow" target="_blank">
                Googleクチコミ実績
              </Link>
              <img src="../../img/top/hoshi4.5.png" alt="" />
              </span>
            </div>
          </div>
          <br className="dsp_smt" />
          <p className="maru"><span className="in serif"><span className="fs">探偵実績</span><br />55<span className="fs">年</span></span></p>
          <div className="cb">
            <h2>地元岡山で、<br className="dsp_smt" />調査力No.1を誇る探偵社です｡</h2>
            <div className="cen dsp_hpt">
              <div className="star">
                <span>
                  <Link to="https://www.google.co.jp/search?tbm=lcl&ei=XWsGX-yqB4_W0gSAhYHwBA&q=%E4%B8%AD%E5%A4%AE%E3%83%AA%E3%82%B5%E3%83%BC%E3%83%81%E5%BA%83%E5%B3%B6&oq=%E4%B8%AD%E5%A4%AE%E3%83%AA%E3%82%B5%E3%83%BC%E3%83%81%E5%BA%83%E5%B3%B6&gs_l=psy-ab.3...155248.157868.0.158152.0.0.0.0.0.0.0.0..0.0....0...1c.1j4.64.psy-ab..0.0.0....0.8ef4ngT_iJU#rlfi=hd:;si:14351266089033009334;mv:[[34.40155767731903,132.4662481279093],[34.40119772268097,132.46581187209068]]" rel="nofollow" target="_blank">
                    Googleクチコミ実績
                  </Link>
                  <img src="../../img/top/hoshi4.5.png" alt="" />
                </span>
              </div>
              <p className="comment"><Link to="#top_profile">弁護士事務所から推奨されている探偵社です！ »</Link></p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div id="about"><div id="okayama_about" className="bg_wide main pt pb">
        <h3 className="ttl"><span>調査項目</span></h3>
        <div className="box_flex">
          <dl id="uwaki">
            <dt><img src="../../img/okayama/about/img01.jpg" alt="" /><b className="mp">浮気・不倫調査</b></dt>
            <dd>対象者の行動を気づかれないように尾行・張り込みを行い、分単位の記録と動かぬ証拠を取る調査です。</dd>
          </dl>
          <dl id="saiban">
            <dt><img src="../../img/okayama/about/img02.jpg" alt="" /><b className="mp">裁判証拠収集</b></dt>
            <dd>真実を立証できるように裁判になる可能性のある事案の事実確認調査や動かぬ証拠収集を行います。</dd>
          </dl>
          <dl id="konzen">
            <dt><img src="../../img/okayama/about/img03.jpg" alt="" /><b className="mp">婚前・身上調査</b></dt>
            <dd>将来結婚する可能性のある人物や、そのご家族についての職業や人物性、風評など大きな懸念材料があるか調査します。</dd>
          </dl>
          <dl id="sokou">
            <dt><img src="../../img/okayama/about/img04.jpg" alt="" /><b className="mp">素行調査</b></dt>
            <dd>ご家族の見守り、お子様の一人暮らしの生活実態や、不信感のある従業員の素行面を確認する調査です。</dd>
          </dl>
          <dl id="iede">
            <dt><img src="../../img/okayama/about/img05.jpg" alt="" /><b className="mp">家出・所在調査</b></dt>
            <dd>家出人の捜索や、同窓会、恩師、恩人など、大切なご家族やお世話になった方などの所在調査を行います。</dd>
          </dl>
          <dl id="iyagarase">
            <dt><img src="../../img/okayama/about/img06.jpg" alt="" /><b className="mp">嫌がらせ対策</b></dt>
            <dd>SNSや近隣に誹謗・中傷する行為など不信感や不安感を抱かす嫌がらせ行為の事実確認の調査を行います。</dd>
          </dl>
          <dl id="tousatsuki">
            <dt><img src="../../img/okayama/about/img07.jpg" alt="" /><b className="mp">盗撮器発見</b></dt>
            <dd>盗聴器は意外と身近に潜んでいます。不審な事や情報が知らぬ間に漏れていると思われた時は早期にご相談ください。</dd>
          </dl>
          <dl id="simon">
            <dt><img src="../../img/okayama/about/img08.jpg" alt="" /><b className="mp">指紋・声紋・筆跡鑑定</b></dt>
            <dd>不審者の出入りによる盗難や紛失。遺言状や契約書、誹謗・中傷の手紙など指紋検出、筆跡鑑定で事実確認いたします。</dd>
          </dl>
        </div>
        <p className="link nm"><Link to="/okayama/jirei/">調査事例はこちら</Link></p>
      </div></div>
    <div id="okayama_reason"><div className="main pt pb">
        <h3 className="serif">当探偵社が選ばれる理由</h3>
        <div className="box_flex">
          <dl>
            <dt><b className="mp">1</b><img src="../../img/okayama/img_reason01.jpg" width={450} height={300} alt="" /></dt>
            <dd>
              <p className="ttl mp">知識と経験、<br />良識のある相談員が応対</p>
              <p>当探偵社の相談員は、女性相談員（教員免許資格者）を中心に経験豊富なスタッフが、お客様のお悩みに心から寄り添い対応いたします。</p>
            </dd>
          </dl>
          <dl>
            <dt><b className="mp">2</b><img src="../../img/okayama/img_reason02.jpg" width={450} height={300} alt="" /></dt>
            <dd>
              <p className="ttl mp">業界最安値の<br />料金プラン</p>
              <p>調査料金のお見積もりはお電話でも、解りやすくご説明いたします。また、お客様の事案にあった無駄のないプランを細かく説明いたします。弊社は後から追加料金を請求する事は一切ございません。</p>
            </dd>
          </dl>
          <dl>
            <dt><b className="mp">3</b><img src="../../img/okayama/img_reason03.jpg" width={450} height={300} alt="" /></dt>
            <dd>
              <p className="ttl mp">全国約300名の<br />弁護士との連携</p>
              <p>当社の探偵調査員は、弁護士事務所からも推奨される調査能力のエビデンスがあります。また、常に難しい調査でも解決できるよう研究を重ね力量を向上しています。</p>
            </dd>
          </dl>
          <dl>
            <dt><b className="mp">4</b><img src="../../img/okayama/img_reason04.jpg" width={450} height={300} alt="" /></dt>
            <dd>
              <p className="ttl mp">中四国最大級の<br />探偵事務所</p>
              <p>地元の経験豊富な探偵調査員が膨大な情報や土地勘で、迅速な調査対応が可能です。早期に問題解決につなげるため探偵調査員は各地で24時間稼働しています。</p>
            </dd>
          </dl>
          <dl>
            <dt><b className="mp">5</b><img src="../../img/okayama/img_reason05.jpg" width={450} height={300} alt="" /></dt>
            <dd>
              <p className="ttl mp">当探偵社は特殊な事案でも<br />幅広く対応</p>
              <p>浮気調査はもちろんのこと、その他、婚前調査・いじめ調査・見守り素行調査・家出人調査・指紋鑑定など幅広く調査を行う技術がありますので特殊な事案も安心してご相談ください。</p>
            </dd>
          </dl>
          <dl>
            <dt><b className="mp">6</b><img src="../../img/okayama/img_reason06.jpg" width={450} height={300} alt="" /></dt>
            <dd>
              <p className="ttl mp">裁判になっても<br />有利に進める報告書</p>
              <p>高い撮影技術で証拠能力の高い報告書を提出いたしておりますので、万が一の際もご安心ください。また、お客様が笑顔を取り戻すことのできるようアフターケアも万全です。</p>
            </dd>
          </dl>
        </div>
      </div></div>
    <div className="main">
      
      <div id="yamaguchi_button">
        <p className="link mp pt pb"><Link to="/okayama/voice/">お客様の声はこちら</Link></p>
      </div>
      <div id="top_plan" className="bg_wide pb">
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
      <div id="okayama_point" className="bg_wide pt">
        
        <div className="in">
          <p className="cen_pc nm"><b className="fm">証拠は問題解決への第一歩です。</b><br />
            相手と話し合いを行うための材料として、また浮気相手に内容証明を送る場合にも、<br />
            何より裁判などの紛争などで有利に立つためにも、確かな効力を発揮します。<br />
            証拠能力とは客観的に判断されるもので、ご自分が思うものが正しいとは限りません。<br />
            プロの探偵が的確・適正に調査を進め、裁判などでしっかりと立証できる動かぬ証拠を収集いたします。</p>
        </div>
      </div>
      <div id="top_evidence">
        <div className="sample pb">
          <h3 className="line mp">報告書写真サンプル</h3>
          <div className="wrap">
            <dl className="w2">
              <dt>遠くから確実に証拠を押さえます。</dt>
              <dd>
                <p className="arrow"><img src="../../img/top/sample01.jpg" loading="lazy" alt="" /></p>
                <p><img src="../../img/top/sample02.jpg" alt="" /></p>
              </dd>
            </dl>
            <dl className="w2">
              <dt>決定的な証拠も確実に撮影</dt>
              <dd>
                <p className="arrow"><img src="../../img/top/sample03.jpg" loading="lazy" alt="" /><span>2019/6/25/19:09</span></p>
                <p><img src="../../img/top/sample04.jpg" alt="" /><span>2019/6/25/21:11</span></p>
              </dd>
            </dl>
          </div>
          <p className="cen"><img src="../../img/okayama/sample08.png" alt="" className /></p>
          <p className="link mp"><Link to="/sample/">調査報告書サンプルはコチラ</Link></p>
        </div>
      </div>
      <div id="top_profile">
        <h3 className="mp bg_wide okayama"><img src="../../img/top/medal_big.png" alt='' width={53} height={53} loading="lazy" /><span>弁護士事務所からの推奨コメント</span></h3>
        <div className="bg bg_wide pb">
          <dl>
            <dt><img src="../../img/okayama/profile_name01.png" alt="" /></dt>
            <dd><img src="../../img/okayama/profile_txt01.png" alt="" className="dsp_hpt" /><img src="../../img/okayama/profile_txt01_sp.png" alt="" className="dsp_smt" /></dd>
          </dl>
          <dl>
            <dt><img src="../../img/okayama/profile_name02.png" alt="" /></dt>
            <dd><img src="../../img/okayama/profile_txt02.png" alt="" className="dsp_hpt" /><img src="../../img/okayama/profile_txt02_sp.png" alt="" className="dsp_smt" /></dd>
          </dl>
          <dl>
            <dt><img src="../../img/okayama/profile_name03.png" alt="" /></dt>
            <dd><img src="../../img/okayama/profile_txt03.png" alt="" className="dsp_hpt" /><img src="../../img/okayama/profile_txt03_sp.png" alt="" className="dsp_smt" /></dd>
          </dl>
          <dl>
            <dt>
              <img src="../../img/okayama/profile_name04.png" alt="" />
              <span className="label very"><Link to="https://rikon.vbest.jp/" target="_blank" rel="nofollow"><img src="../../img/top/bery_best_btn.png" alt="ベリーベスト法律事務所" loading="lazy" /></Link></span>
            </dt>
            <dd><img src="../../img/okayama/profile_txt04.png" alt="" className="dsp_hpt" /><img src="../../img/okayama/profile_txt04_sp.png" alt="" className="dsp_smt" /></dd>
          </dl>
        </div>
      </div>
      
      <div id="top_faq" className="pt pb">
        <h3 className="mp">よくある質問</h3>
        <div className="list">
          <dl>
            <dt><span>Q</span>料金相場について：探偵に調査を依頼したいのですが、調査料金の相場はどの程度ですか？</dt>
            <dd><span>A</span>調査の内容に対しての労働の対価となりますので、内容に応じたお見積もりをさせていただきます。当社は適正な価格設定を心がけています。また、不当な追加料金などはいただきません。お客様のご相談に合わせた調査方法と料金でご対応させていただきます。</dd>
          </dl>
          <dl>
            <dt><span>Q</span>浮気調査の成功率について：探偵の浮気調査の成功率はどれくらいなのでしょうか？</dt>
            <dd><span>A</span>事案によっては、調査にある程度の日数が必要となる場合がございますが、当社の探偵調査の技術は、尾行に必要な機動力や、証拠を撮影する確かな専門技術を備えております。いくら警戒が厳しい状況でも、いただいたほとんどの案件で成果を出せると思われます。</dd>
          </dl>
          <dl>
            <dt><span>Q</span>調査の合法性について：探偵に浮気調査を依頼したいのですが、尾行というのはストーカーやつきまとい行為として法律に抵触しないか心配です。調べてもらうことに違法性は無いのでしょうか？</dt>
            <dd><span>A</span>探偵業者は通常、探偵業の届出を公安委員会（警察）に提出しています。当社でも届出をして、探偵業届出証明書を交付されています。調査対象に気づかれないように尾行・張り込みを行いながら浮気調査をすることに違法性はございません。</dd>
          </dl>
          <dl>
            <dt><span>Q</span>対象者の警戒心について：浮気調査を依頼する前に、夫に警戒されたかもしれません。調査は可能でしょうか？</dt>
            <dd><span>A</span>浮気に対する少しくらいの警戒であれば、当社では問題なく気づかれないように調査することは可能です。対象者が疑われていると感じたら、逆に配偶者の携帯の履歴や、SNS、カーナビの履歴などを見る可能性がございます。ご依頼にあたってはくれぐれもご注意ください。</dd>
          </dl>
          <dl>
            <dt><span>Q</span>GPSについて：私が自分で車にGPSを付けたら夫に気づかれたかもしれません。どうすればいいでしょう。</dt>
            <dd><span>A</span>今の時代、誰もがGPSのことは知っています。浮気をする人物ならそれくらいは警戒し、確認していることは多くあります。警戒を強めてしまえば、浮気の証拠は捉えにくくなります。そうなる前に当社の調査技術をぜひご利用ください。個人の判断で完全に気づかれた後では手遅れとなるケースもあります。</dd>
          </dl>
          <dl>
            <dt><span>Q</span>対象者の交通手段について：浮気調査では車の特徴やナンバーで対象者を追跡すると聞きました。妻は徒歩や自転車などで移動するのですが、顔だけで対象者を尾行することはできるのでしょうか？</dt>
            <dd><span>A</span>当社の調査員は暗い所からでも対象者の顔を判断できる高度な調査力があります。同時に対象者の浮気現場への出入りなど、望遠レンズや暗所でも撮影できるカメラを使用し、裁判でも有力となる浮気の証拠を撮ることが可能です。</dd>
          </dl>
          <dl>
            <dt><span>Q</span>浮気の証拠について：スマートフォンのSNSの履歴などは浮気の証拠になりますか？</dt>
            <dd><span>A</span>具体的な交際（性的関係）の事実が分かる内容があれば浮気の証拠になる場合もございます。しかし裁判に勝てるだけの証拠と考えると不十分な可能性もあります。探偵が行う行動調査で、対象者が浮気相手と接触している映像や、ホテルやマンションに出入りしていた証拠写真を合算された方が、より信憑性が高くなり裁判を有利に進めることができます。</dd>
          </dl>
        </div>
      </div>
      <div id="top_corona" className="bg_wide pt pb">
        <h3 className="mp cen"><span>中央リサーチ岡山は<br className="dsp_smt" />コロナ対策を実施しています。</span></h3>
        <p className="b">中央リサーチ岡山ではお客様の健康と安全を守るために以下の感染予防対策を実施しています。</p>
        <div className="wrap">
          <dl>
            <dt>アルコール消毒液の設置</dt>
            <dd>
              <p className="ico nm"><img src="../../img/top/corona01.png" loading="lazy" alt="アルコール消毒液の設置" /></p>
              <p className="txt thin nm">入口に消毒液を設置しておりますので手指の除菌にご協力お願いします。</p>
            </dd>
          </dl>
          <dl>
            <dt>スタッフのマスク着用</dt>
            <dd>
              <p className="ico nm"><img src="../../img/top/corona02.png" loading="lazy" alt="スタッフのマスク着用" /></p>
              <p className="txt thin nm">全スタッフのマスクの着用を徹底しております。</p>
            </dd>
          </dl>
          <dl>
            <dt>スタッフの検温の確認</dt>
            <dd>
              <p className="ico nm"><img src="../../img/top/corona03.png" loading="lazy" alt="スタッフの検温の確認" /></p>
              <p className="txt thin nm">毎日出勤時に全スタッフの検温を実施して発熱の確認をしています。</p>
            </dd>
          </dl>
        </div>
      </div>
      <div id="top_about" className="bg_wide pt pb">
        <div className="bg">
          <h3 className="cen"><span><img src="../../img/top/txt.png" alt="総合探偵社 中央リサーチ" /></span></h3>
          <p className="earth"><span className="maru"><img src="../../img/top/earth.png" alt="" /><span className="txt">全国対応<br />海外もOK!</span></span></p>
          <p className="mp cen msg">つらい思いをされている方が<br className="dsp_tbs" />一日も早く笑顔を取り戻す為に・・・。<br />
            弊社スタッフは一丸となり<br className="dsp_smt" />「人助け」の思いで、<br className="dsp_tbs" />日夜探偵業務に取り組んでおります。</p>
          <div className="wrap">
            <dl>
              <dt>岡山相談室</dt>
              <dd><Link to="/okayama/">総合探偵社中央リサーチ岡山</Link><br />
                岡山県岡山市北区富田町1丁目1-1<br />
                富士野ビル2階<br />
                TEL：086-231-6661(代)</dd>
            </dl>
            <dl>
              <dt>広島相談室</dt>
              <dd><Link to="https://www.chuou.biz/">総合探偵社中央リサーチ広島</Link><br />
                広島県広島市中区上幟町2-45 今田ビル2F<br className="dsp_hp" />(家庭裁判所前 白島線電車道り沿い)<br />
                TEL：082-211-1600(代)</dd>
            </dl>
            <dl>
              <dt>山口相談室</dt>
              <dd><Link to="/yamaguchi/">総合探偵社中央リサーチ山口</Link><br />
                山口県周南市平和通2丁目31 三真樹ビル2階<br />
                （徳山駅徒歩3分）<br />
                TEL：0834-22-7513(代)</dd>
            </dl>
            <dl>
              <dt>島根相談室</dt>
              <dd><Link to="/shimane/">総合探偵社中央リサーチ島根</Link><br />
                島根県松江市津田町305番 ツダマチビル1階<br />
                （松江駅徒歩5分）<br />
                TEL：0852-67-6573(代)</dd>
            </dl>
            <dl>
              <dt>愛媛相談室</dt>
              <dd><Link to="/ehime/">総合探偵社中央リサーチ愛媛</Link><br />
                愛媛県松山市三番町7-7-1 村上ビル2階<br />
                （松山市民病院徒歩2分）<br />
                TEL：089-931-3800(代)</dd>
            </dl>
            <dl>
              <dt>広島本社</dt>
              <dd>広島県広島市中区上幟町2-45 今田ビル2F<br className="dsp_hp" />(家庭裁判所前 白島線電車道り沿い)<br />
                TEL：082-211-1600(代)<br />
                FAX：082-211-1688</dd>
            </dl>
          </div>
          <ul className="wrap">
            <Link to="https://www.ncia-research.or.jp/" target="_blank"><li>内閣総理大臣認可<br />全国調査業協同組合組合員<br />第3266号</li></Link>
            <li>岡山県公安委員会<br />探偵業届出証明書番号<br />第72100026号</li>
            <li>商標登録証<br />第6531358号</li>
          </ul>
        </div>
      </div>
      <div id="top_hiroshima" className="bg_wide pb okayama">
        <h3 className="mp">岡山相談室案内</h3>
        <div className="wrap">
          <div className="img">
            <p><img src="../../img/okayama/img_yamaguchi.jpg" alt="" /><br />
              プライバシーを守る相談室</p>
          </div>
          <p className="map"><Link to="https://goo.gl/maps/Eyr7fYEAtyhkFcBN7" rel="nofollow" target="_blank"><img src="../../img/okayama/map.png" loading="lazy" alt="" /></Link></p>
        </div>
        
      </div>
      <div id="top_koukoku" className="pt pb">
        <div className="box_flex mb">
          <div className="line">
            <div className="in">
              <p><img src="../../img/okayama/logo_line.png" alt="" /></p>
              <p className="b">LINEからお問い合わせ<br className="dsp_smt" />できます！</p>
              <p>QRコードから<Link to="https://line.me/R/ti/p/65gpK3qcDs" target="_blank">「友だち登録」</Link>すると、LINEでお問い合わせができます。</p>
            </div>
            <p className="qr"><img src="../../img/okayama/qr_line.png" alt="" /></p>
          </div>
          <dl className="card">
            <dt>お支払いはクレジットでもご利用できます</dt>
            <dd>
              <p><img src="../../img/okayama/img_card01.png" alt="" /></p>
              <p><img src="../../img/okayama/img_card02.png" alt="" /></p>
            </dd>
          </dl>
        </div>
        <div className="list mb">
          <dl>
            <dt className="mp">誇大広告にはご注意ください！</dt>
            <dd className="b">探偵案内所、探偵ランキングなど作為的に掲載し、一部の業者だけあっせん・誘導する根拠のない嘘の誇大広告にはご注意ください。</dd>
          </dl>
        </div>
        <ul>
          <li><Link to="http://www.ncia-research.or.jp/" rel="nofollow" target="_blank"><img src="../../img/okayama/bana01.png" alt="全国調査業協同組合" /></Link></li>
          <li><Link to="https://www.pref.okayama.jp/site/kenkei/" rel="nofollow" target="_blank"><img src="../../img/okayama/okayama_p.png" alt="岡山県警察" /></Link></li>
          <li><Link to="http://www.rikonnsoudan.jp/" rel="nofollow" target="_blank"><img src="../../img/okayama/bana03.png" alt="ベリーベスト法律事務所" /></Link></li>
          <li><Link to="https://best-legal.jp/want-to-claim-affair-alimony-3366" rel="nofollow" target="_blank"><img src="../../img/okayama/bana04.png" alt="不倫・浮気の慰謝料請求ならベリーベスト法律事務所" /></Link></li>
        </ul>
      </div>
      <div id="top_area" className="bg_wide pt pb">
        <h3 className="mp"><b className="fm">全国対応</b>いたします<b className="ok">海外もOK!</b></h3>
        <div className="box">
          <h4 className="mp">岡山対応可能エリア</h4>
          <div className="wrap">
            <ul>
              <li>岡山市</li>
              <li>倉敷市</li>
              <li>津山市</li>
              <li>玉野市</li>
              <li>笠岡市</li>
              <li>井原市</li>
              <li>総社市</li>
              <li>高梁市</li>
              <li>新見市</li>
              <li>備前市</li>
            </ul>
            <ul>
              <li>瀬戸内市</li>
              <li>赤磐市</li>
              <li>真庭市</li>
              <li>美作市</li>
              <li>浅口市</li>
              <li>和気郡和気町</li>
              <li>都窪郡早島町</li>
              <li>浅口郡里庄町</li>
              <li>小田郡矢掛町</li>
              <li>真庭郡新庄村</li>
            </ul>
            <ul>
              <li>苫田郡鏡野町</li>
              <li>勝田郡勝央町</li>
              <li>勝田郡奈義町</li>
              <li>英田郡西粟倉村</li>
              <li>久米郡久米南町</li>
              <li>久米郡美咲町</li>
              <li>加賀郡吉備中央町</li>
            </ul>
          </div>
          <p className="blue nm">全国主要都市のネットワークで安心の調査をお約束いたします。<br />
            海外の調査も承ります。</p>
        </div>
      </div>
    </div>
  </section>
</div>
        <FooterOkayama />
    </>
  )
}
export const Head = () => (
  <>
      <Seo
        title2="岡山で浮気調査なら55年の実績と信頼｜岡山の探偵社、中央リサーチ岡山"
        description="中央リサーチ岡山は｢浮気調査が最も得意｣な探偵社であり、裁判証拠収集ならお任せください!!ご相談は無料です。岡山県公安委員会探偵業届出済で、浮気調査は信頼と実績ある当社にご相談ください！プロの探偵が全力でお悩みを解決いたします！高い追跡技術を持つ中央リサーチ岡山が浮気・不倫の現場を突き止めます。"
        keyword="探偵,岡山,興信所,浮気調査,中央リサーチ岡山"
        />
  </>
)
export default index
