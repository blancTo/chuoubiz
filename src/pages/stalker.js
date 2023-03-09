import React from 'react'
import { Link } from 'gatsby'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const stalker = ({data}) => {
    const pagemeta = {
        title:`嫌がらせ対策`,
        slug:`stalker`
    }
    return (
        <>
        
            <div id="wrap">
            <Header h1title="嫌がらせの対策について" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">

                      <div className="bg bg_wide pb">
                        <ul id="page_navi">
                          <li><Link to="/">ホーム</Link></li><li>嫌がらせ対策</li>
                        </ul>
                        <h3 className="mp blue2">安心・安全な生活を取り戻す為に・・・<br />迷惑行為によるトラブルを解消！</h3>
                        <p className="nm">あなたに精神的苦痛を与えるような迷惑行為、<b className="fm">嫌がらせの証拠をとります。</b><br />
                          <b className="fm red">また迷惑行為を行う人物を特定し、<br className="dsp_tbs" />警察や弁護士に動いてもらえる為の証拠を集めます。</b></p>
                        <p className="img nm"><img src="../img/stalker/woman.png" alt="" /></p>
                      </div>
                      <div className="pt pb measures">
                        <div className="sec">
                          <h3 className="headline">嫌がらせ対策</h3>
                          <div className="chk_box">
                            <dl className="chk">
                              <dt className="bg_blue_grad2 mp">こんな時に嫌がらせ対策を･･･</dt>
                              <dd>
                                <ul className="chk">
                                  <li>近隣での騒音など<b>迷惑行為</b>に悩んでいる</li>
                                  <li>自分（会社）がネット（SNS）で<b>誹謗中傷</b>されていて悩んでいる</li>
                                  <li><b>パワハラ、モラハラ、セクハラ</b>に悩んでいる</li>
                                  <li>会社や学校など、<b>いじめ</b>に悩んでいる</li>
                                </ul>
                                <ul className="chk">
                                  <li><b>怪文書</b>や近隣に<b>誹謗中傷の噂</b>を流されている</li>
                                  <li>自宅や近隣など<b>不審者につきまとわれる</b></li>
                                  <li>自分や子供に対する<b>DV被害</b>の事実がある</li>
                                </ul>
                              </dd>
                            </dl>
                          </div>
                          <div className="content box_flex">
                            <p className="img"><img src="../img/stalker/img01.jpg" alt="" /></p>
                            <div className="info">
                              <p>嫌がらせや迷惑行為は年々増加傾向にあります。特にネット（SNS）による誹謗中傷が目立ちます。また数々の近隣トラブルなどの迷惑行為や嫌がらせを受けたとの、ご相談も多数いただいております。</p>
                              <p>当社では、その要因となる人間関係や交際のもつれによる様々な問題、<b className="fm blue2">近隣トラブル、モラハラ、パワハラ、セクハラ、いじめ、DV等</b>について、一連の流れを把握し迷惑行為の事実確認及び証拠収集を行い、速やかな問題解決を図ります。</p>
                              <p>嫌がらせや、迷惑行為に対し被害者が直接交渉するのは相手を刺激し、関係を悪化させる事もありますので、非常に危険です。その事で更なる被害を助長させる事もあるのです。穏便に解決する為にも、<b className="fm red">客観的に事実を明らかに出来る証拠が必要</b>です。</p>
                              <p>まずは、当社が<b className="fm red">迅速かつ慎重に迷惑行為や嫌がらせの証拠収集</b>を行い、問題解決に繋がるお手伝いをいたします。</p>
                            </div>
                          </div>
                          <div className="list box_flex">
                            <dl>
                              <dt><span className="mp">家庭のトラブル</span></dt>
                              <dd>配偶者からの<br />パワハラ、モラハラ、DV・・・</dd>
                            </dl>
                            <dl>
                              <dt><span className="mp">近隣トラブル</span></dt>
                              <dd>事実でない噂を流される、<br />騒音問題、怪文書など・・・</dd>
                            </dl>
                            <dl>
                              <dt><span className="mp">学校</span></dt>
                              <dd>いじめ問題や<br />児童の安全を脅かす盗撮など・・・</dd>
                            </dl>
                            <dl>
                              <dt><span className="mp">いたずら電話</span></dt>
                              <dd>ワン切り電話や無言電話を行う行為・・・</dd>
                            </dl>
                            <dl>
                              <dt><span className="mp">SNSでの被害</span></dt>
                              <dd>SNSへの誹謗・中傷の投稿・・・</dd>
                            </dl>
                            <dl>
                              <dt><span className="mp">職場のトラブル</span></dt>
                              <dd>上司や同僚によるパワハラ、<br className="dsp_smt" />セクハラ被害・・・</dd>
                            </dl>
                          </div>
                        </div>
                        <div className="sec">
                          <h3 className="headline">ストーカー対策</h3>
                          <div className="chk_box">
                            <dl className="chk">
                              <dt className="bg_blue_grad2 mp">こんな時にストーカー対策を･･･</dt>
                              <dd>
                                <ul className="chk">
                                  <li><b>つきまとい</b>や会社・自宅で<b>待ち伏せ</b>される</li>
                                  <li><b>行動を監視</b>していることを告げられる</li>
                                  <li>面会・交際を<b>執拗に要求</b>される</li>
                                  <li><b>乱暴な言動</b>により被害を受けている</li>
                                </ul>
                                <ul className="chk">
                                  <li>多量のメールやいたずら<b>電話の被害</b></li>
                                  <li>汚物・動物の死体など<b>不快感を抱くものを投機される</b></li>
                                  <li><b>不特定多数の人に誹謗中傷</b>される</li>
                                  <li><b>わいせつ画像の送付を強要される</b></li>
                                </ul>
                              </dd>
                            </dl>
                          </div>
                          <div className="content box_flex pc_rev">
                            <p className="img"><img src="../img/stalker/img02.jpg" alt="" /></p>
                            <div className="info">
                              <p>平成12年に、ストーカー行為から被害者を守るため<a href="https://www.keishicho.metro.tokyo.lg.jp/kurashi/higai/dv/kiseho.html" target="_blank" rel="noopener noreferrer">「ストーカー規制法」</a>が制定されています。しかし、いくら警察に相談しても<b className="red fm">ストーカー行為を受けている明確な証拠がない</b>と、なかなか警察は動いてくれないのが実態です。</p>
                              <p>ストーカー犯罪は年々増加しており、警察の細かい対応が追いついていない事も事実で、過去の事案では警察に3回も相談したが<b className="fm">「事件性がない」</b>と動いてもらえず、結果的には殺人事件へと発展し、相談者は守ってもらうどころか無念の死を遂げてしまったというケースなど、心の痛むような事案が後を絶ちません。</p>
                              <p>ストーカー行為を行う人物の多くは、<b className="fm">被害者の元恋人・夫（妻）・知人の場合がほとんど</b>です。<br />
                                被害者に対して持つ歪んだ愛情表現によって、身の危険を感じる恐怖や精神的な苦痛を与えられます。</p>
                              <p>不審人物がストーカー行為を行う事実の（付近をうろつくなど・・・）証拠収集を行い、<b className="fm red">警察に動いてもらう為の、具体的な材料を集めて被害を未然に防げるようお手伝いいたします。</b></p>
                              <p>弊社では、いち早く危険を回避するため対策を講じ<b className="blue2 fm">その事案をこれ以上エスカレートさせないように</b>進めて行きたいと考えております。</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg02 bg_wide chk_box pt pb">
                        <h3 className="headline">子供のいじめ対策</h3>
                        <p className="sub cen blue2 b"><span>いじめがエスカレートや継続する前に<br className="dsp_tbs" />早期発見・早期解決を!</span></p>
                        <dl>
                          <dt className="bg_blue_grad2">子供の危険信号を読み取るポイント</dt>
                          <dd>
                            <ul className="chk">
                              <li>顔を合わせてもすぐに背け、<b className="red">家族との会話がなくなった</b></li>
                              <li>学校に行きたがらず、<b className="red">不登校ぎみ</b>になっている</li>
                              <li>急に<b className="red">学力が低下</b>して<b className="red">提出書類などにも無関心</b></li>
                              <li>解りにくい場所に、<b className="red">心当たりのないあざ</b>がある</li>
                            </ul>
                            <ul className="chk">
                              <li>最近<b className="red">衣服が汚れ</b>て帰ってくるようになり、<b className="red">紛失物も増え</b>ている</li>
                              <li>はっきりした病状がないのに<b className="red">体調不良を訴える</b>ことが増えた</li>
                              <li>何に使うのか不明な、<b className="red">金銭の要求</b>が増えた</li>
                              <li>友達間との<b className="red">SNSが気になり朝まで寝ていない</b>事もある</li>
                            </ul>
                          </dd>
                        </dl>
                        <div className="box_flex">
                          <div className="info">
                            <p>最近、特に子供同士のいじめによる自殺が社会問題になっています。子供の学びの場であるはずの学校は、いじめの事実を認識しても何もしないどころか、むしろ隠ぺいしようとする傾向があります。</p>
                            <p>訴えても助けてもらえないと思った子供は、いじめの事実を誰にも言えず、どんどん追い詰められていき、悲しい決断をしてしまう事もあり得るのです。</p>
                            <p><b className="red fm">いじめから子供を守るのはあなただけです。</b><br />
                              周囲が早期に事実関係を把握する事は難しいかもしれませんが、もし少しでも普段の子供の生活に違和感を持つことがあれば、すぐにでもご相談ください。</p>
                            <p>弊社のスタッフなら<b className="red fm">プロならではの知識や技術を使って、お子様がいじめられている事実確認や的確な証拠を集めることが可能</b>です。</p>
                            <p>例えば、お子様が友だちとどういうやり取りをしているのか、学校から帰るまでどこに行って何をしているのか・・など、法律的に有効な証拠を集めることが可能です。<br />
                              また<b className="fm">調査は、気づかれずに進めて行ける技術を持ったプロの探偵が調査にあたります。</b></p>
                          </div>
                          <p className="img"><img src="../img/stalker/img03.jpg" alt="" /></p>
                        </div>
                      </div>
                      <div className="pt example">
                        <div className="sec">
                          <h3 className="headline">子供のいじめ対策事例</h3>
                          <p>子供のいじめの種類はさまざまで、どういったいじめが行われているかによって調査方法も異なります。具体的にどうやって調査するのでしょうか？一部の調査事例をご案内いたします。</p>
                          <div className="box_flex">
                            <dl>
                              <dt><img src="../img/stalker/jirei01.jpg" alt="" /></dt>
                              <dd>
                                <p className="bg_blue_grad2 mp cen">誹謗中傷手紙を受け取る事例</p>
                                <div className="in">
                                  <p className="txt">いじめによる誹謗中傷の手紙やそれに類するものを確認した時は、<br className="dsp_hp" />指紋検出や筆跡鑑定をする事で、疑わしい人物と一致しているかを確認できますので、早期にご相談ください。</p>
                                </div>
                              </dd>
                            </dl>
                            <dl>
                              <dt><img src="../img/stalker/jirei02.jpg" alt="" /></dt>
                              <dd>
                                <p className="bg_blue_grad2 mp cen">聞き取り調査での証拠集め事例</p>
                                <div className="in">
                                  <p className="txt">お子様がいじめの事実を話さない事は多いです。<br />その場合、周りの友だちや関係者から聞き取り調査することが重要な証言となります。</p>
                                </div>
                              </dd>
                            </dl>
                            <dl>
                              <dt><img src="../img/stalker/jirei03.jpg" alt="" /></dt>
                              <dd>
                                <p className="bg_blue_grad2 mp cen">子供の素行調査を行う事例</p>
                                <div className="in">
                                  <p className="txt">学校周辺や登下校時、塾、友達との遊び場、など探偵が素行調査を行い、いじめの証拠を集めることもあります。<br />
                                    学校の敷地内へ入ることはできないものの、登下校中にいじめの被害にあっていることも多いため、行動を調査する事で交友関係や立ち寄り先、加害者の特定などいじめの証拠収集ができます。</p>
                                </div>
                              </dd>
                            </dl>
                            <dl>
                              <dt><img src="../img/stalker/jirei04.jpg" alt="" /></dt>
                              <dd>
                                <p className="bg_blue_grad2 mp cen">ネットでの調査の事例</p>
                                <div className="in">
                                  <p className="txt">最近のいじめにSNSを使ったものが増えています。<br />
                                    たとえば、TwitterやLINEなどを通じていじめが行われることが多いのです。<br />
                                    特にSNSのグループなどで特定の人の悪口を言ったり、仲間外れをしたり、嫌がらせをする事などを調査事例で確認しています。<br />
                                    ただ、こういったSNSの中で簡単に個人を特定するのは困難ですが、いじめている疑いのある子供を調査することで特定可能なこともあります。</p>
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                        <div className="img_headline_area">
                          <div className="sec">
                            <div className="info">
                              <h3 className="headline">真実を認めない場合の対策</h3>
                              <p>学校内のいじめの証拠を集めるには探偵が学校の敷地に入ることができないため、お子様自身が証拠をとる事が重要です。<br />
                                いじめられているお子様自身に承諾してもらった上で、相手とのやり取りをボイスレコダーやスマホなどを使って、そのいじめの現場の状況証拠を集める事が理想です。</p>
                            </div>
                            <p className="img"><img src="../img/stalker/img04.jpg" alt="" /></p>
                          </div>
                          <div className="sec">
                            <div className="info">
                              <h3 className="headline">お子様の様子が急変した時</h3>
                              <p>ご自分の子供が急に不登校になったり、引きこもりになると、どう接してよいのか周りは不安や心配で混乱してしまうと思います。<br />
                                お子様がたとえいじめられていても、本人自ら真実を明らかにするケースは非常に少ないです。</p>
                              <p>そんな時は、その状況を<b className="fm">周囲が感じ取り、できるだけ早い対処が必要</b>です。<br />
                                何とか自身でいじめの証拠を集めたいと思っても、素人の方が信頼性の高いいじめの証拠を集める事は、簡単ではありません。</p>
                              <p>手遅れになる前に<b className="fm red">調査のプロである私たちにお任せください。卓越した技術でいじめの事実確認を行い、証拠を集めます。</b></p>
                            </div>
                            <p className="img nm"><img src="../img/stalker/woman02.png" alt="" /></p>
                          </div>
                        </div>
                      </div>
                      <div className="investigation_case pb">
                        <h3 className="line2 mp bg_wide"><span>調査事例</span></h3>
                        <h4 className="cen">これまでに当社で行った<br className="dsp_smt" />嫌がらせ対策の調査事例をご紹介します。<span className="dsp_hpt"><br className="dsp_tbs" />調査を検討される際の参考に<br className="dsp_smt" />してください。</span></h4>
                        <div className="box">
                          <div className="bg">
                            <div className="head">
                              <p className="case serif">case01</p>

                              <input id="case-check1" className="case-check1" type="checkbox" checked />
                              <label className="case-label" htmlFor="case-check1">近所の子供に注意した後に嫌がらせが加速！電磁波被害調査でわかった事実<br />
                              <span>最近、身体のあちこちがしびれるように痛くなったり、頭痛が止まらないとお悩みの方は電磁波の被害を受けている可能性があります。早速、最新の事例をご紹介しましょう。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                              <div className='case-content'>

                                <div className="info">
                                  <div className="hito"> <span>依頼者：主婦（52歳）</span></div>
                                  <p className="img"><img src="../img/stalker/chousajirei01.jpg" alt="" /></p>
                                  <dl className="content">
                                    <dt>依頼内容</dt>
                                    <dd>数ヶ月前に反対側に住むご家族の息子さんとその友人たち（高校生）が夜遅くまでバイクで騒音を立てて走り回ったり、夜中に大声で叫ぶので、そこの奥様に行動を注意しました。<br />
                                      その時は、「ご迷惑をおかけしてすみませんでした」と謝って頂き、しばらくは騒音が止まって問題はなくなったように思いました。しかし、その1週間後に不審なバイクが数台、我が家の周りをぐるぐると回って、何かを操作しているようでした。<br />
                                      その後、頭痛がしたり、身体にしびれを感じるようになって、病院へ行きましたが異常なしと言われました。ただ、未だに頭痛が止まらず悩んでいます。<br />
                                      ネットで調べたところ、最近は電磁波の被害が増えているという記事を見かけて、もしかして自分も被害者では…と思ったら、眠れなくなったのです。そこで調査依頼を決めました。</dd>
                                  </dl>
                                  <dl className="content cb">
                                    <dt>調査内容</dt>
                                    <dd>ご依頼者様はご自宅周辺に電磁波が流れていて、それが原因で頭痛やしびれが出るようになった可能性があるとお悩みの様子でした。<br />
                                      電磁波は目に見えないもので、一般家庭の電子レンジや家電製品、スマートフォン、ノートパソコンなど、身近なアイテムからも発生しています。<br />
                                      今回は特殊な測定器を設置して電磁波を計測する調査を行い、問題を解決していきます。</dd>
                                  </dl>
                                  <dl className="content">
                                    <dt>調査結果</dt>
                                    <dd>日本においては電磁波の種類や周波数に対して規制がありますので、有害な強い電磁波が発生しているかどうか測定調査をしたところ、高周波の強い電磁波が確認されました。<br />
                                      また、自宅に隠しカメラを設置したところ、暴走族のバイク組が近くで機器を使って操作している様子も映像に残すことができました。これで電磁波被害の十分な証拠になります。<br />
                                      調査報告書を警察に見てもらうことで対応してもらえますので、ご自身の健康と平穏な生活のためにも、諦めずに解決に向けて対処していきましょう。</dd>
                                  </dl>
                                  <div className="comment">
                                    <div className="requester sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">依頼者様からのコメント</p>
                                          <p className="nm">今回は丁寧で明確な電磁波被害調査をして頂き、本当にありがとうございます。嫌がらせが健康被害に繋がって、悩み続けていたのでとても助かりました。<br />
                                            相手側に慰謝料を請求してなんとか解決に向けて動き出しました。治療費の負担から開放されて中央リサーチさんには本当に感謝しております。</p>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="chu sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">中央リサーチから一言</p>
                                          <p className="nm">最近は、電磁波被害のご相談が増えています。すべての電磁波が有害ではなく、ご自身での判断は難しいところがあります。<br />
                                            身体の不調で悩まれている方、電磁波被害かもしれないと心当たりのある方は一度無料相談をご利用くださいませ。</p>
                                        </dd>
                                      </dl>
                                    </div>
                                  </div>
                                </div>

                              </div>
                              
                            </div>
                            
                          </div>
                        </div>
                        <div className="box">
                          <div className="bg">
                            <div className="head">
                              <p className="case serif">case02</p>
                              <input id="case-check2" className="case-check2" type="checkbox" />
                              <label className="case-label" htmlFor="case-check2">小学生の娘が嫌がらせといじめの被害に遭い不登校に…探偵の調査でわかったこと<br />
                              <span>学校でのいじめ問題はいつの時代も起こり、悲しいことに解決策は見つかっていません。探偵社にもいじめ被害による嫌がらせのお悩み相談が多数寄せられています。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                              <div className='case-content'>

                                <div className="info">
                                  <div className="hito"> <span>依頼者：小学5年生女子の親御様（40代）</span></div>
                                  <p className="img"><img src="../img/stalker/chousajirei02.jpg" alt="" /></p>
                                  <dl className="content">
                                    <dt>依頼内容</dt>
                                    <dd>小学5年生の娘が学校の男子と女子のいじめグループからモノを投げつけられたり、荷物を盗まれたりして、泣きながら帰ってくることが多くなりました。<br />
                                      初めは気が付きませんでしたが、泣きはらして目が赤いことがあったので、聞いてみるといじめられて辛い…ということでした。<br />
                                      学校の担任の先生に相談したのですが、朝礼で名前を出して注意されたようで、その後、グループのリーダーがリベンジモードに入り、先生がいない時を見計らって更にいじめがエスカレートしたようなのです。<br />
                                      娘は「もう学校に行きたくない」といい出して、今は1ヶ月ほど学校を休んでいます。しかし、これから中学生、高校生となることを考えると、不登校は早く解決したいと思っています。<br />
                                      そこで探偵社の嫌がらせ調査を依頼して、いじめられている事実証拠を確認して、いじめている人物を特定していただきたいと思います。</dd>
                                  </dl>
                                  <dl className="content cb">
                                    <dt>調査内容</dt>
                                    <dd>小学生の娘さんの親御さんから学校でのいじめ被害を解決するために、嫌がらせの調査を相談されました。娘さんからもいじめてくる人物がある程度特定できましたので、後は証拠を残して、しっかりと警察にも被害届を出して、対処してもらえるように調査を開始します。</dd>
                                  </dl>
                                  <dl className="content">
                                    <dt>調査結果</dt>
                                    <dd>娘さんのクラスはとてもやんちゃな男女が多い印象です。登校中にランドセルを投げて遊んだり、靴を投げつけたり、乱暴な生徒が多いと分かりました。<br />
                                      娘さんが1ヶ月ぶりに登校した際にも、すぐ目を付けたいじめグループのリーダーがからかうように話しかけてきました。下駄箱にある下履きを隠したり、教科書を盗んだり悪質です。<br />
                                      登下校中と学校の様子からしっかりといじめる人物の行動を映像と画像に残すことができましたので、調査報告書にまとめました。</dd>
                                  </dl>
                                  <div className="comment">
                                    <div className="requester sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">依頼者様からのコメント</p>
                                          <p className="nm">今回は娘のいじめ、嫌がらせの証拠獲得に懸命に調査していただいて、本当にありがとうございます。娘も段々と闘う姿勢になり、泣くことがなくなりました。<br />
                                            まずは警察にも相談して、加害者の親御さんに慰謝料請求することまで視野に入れて、いじめ問題の解決に努力します。お世話になりました。</p>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="chu sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">中央リサーチから一言</p>
                                          <p className="nm">学校でのいじめ、嫌がらせの被害は誰にも言えずに自殺に発展する可能性もゼロではありません。そのような最悪な事態を避けるためにも、探偵社の早急な調査で解決されることをおすすめします。</p>
                                        </dd>
                                      </dl>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                            
                          </div>
                        </div>

                        <div className="box">
                          <div className="bg">
                            <div className="head">
                              <p className="case serif">case03</p>
                              
                              <input id="case-check3" className="case-check3" type="checkbox" />
                              <label className="case-label" htmlFor="case-check3">彼女の元カレから強烈な嫌がらせを受けて参った！探偵調査で分かった結果とは？<br />
                              <span>嫌がらせをする対象は、元交際相手というパターンが多いですが、嫌がらせの矛先が新しい交際相手に向かうこともあります。今回はそのような嫌がらせ調査の事例をご紹介します。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                              <div className='case-content'>

                                <div className="info">
                                  <div className="hito"> <span>依頼者：会社員、男性（34歳）</span></div>
                                  <p className="img"><img src="../img/stalker/chousajirei03.jpg" alt="" /></p>
                                  <dl className="content">
                                    <dt>依頼内容</dt>
                                    <dd>現在、会社員の私は数ヶ月前から知人の紹介で知り合った29歳の女性と交際することになりました。彼女とは性格が合い、結婚も視野に入れて交際しています。<br />
                                      しかし最近、私の自宅マンションに、彼女の前の彼氏と思われる人物からひどい嫌がらせ被害を受けるようになり、困っています。先日はゴキブリの死骸を玄関に置かれてゾッとしました。<br />
                                      嫉妬深い性格のようで、私と彼女に対して強烈な嫌がらせをしてきます。私は直接その男性とは面識がありませんので、無視したいのですが、被害がエスカレートする前に解決したいと思い、今回調査を依頼することにしました。</dd>
                                  </dl>
                                  <dl className="content cb">
                                    <dt>調査内容</dt>
                                    <dd>依頼者様の現在の交際相手の女性は元彼からSNSで監視されており、ブロックしてもしつこくメッセージが送られてくるようです。「そいつと別れろ」というメッセージも確認しました。<br />
                                      これは嫌がらせとストーカー被害である可能性が非常に高く、早期解決に向けて対象者の尾行と張り込み、聞き込みを徹底して、嫌がらせ問題を解決していきます。</dd>
                                  </dl>
                                  <dl className="content">
                                    <dt>調査結果</dt>
                                    <dd>ご依頼者様の自宅マンションに隠しカメラを設置するとスーツ姿の20代後半から30代くらいの男性が玄関に現れて、郵便物に手紙を入れました。その後に大量の土をばらまくなど、悪質な嫌がらせ行為を確認。その様子を動画撮影して、証拠として残しました。<br />
                                      彼女のSNSにも誹謗中傷や個人情報が特定できるメッセージを一般公開するなど、非常に悪質な行為が見受けられました。男性はご依頼者様の交際相手女性の前の彼氏と判明しました。<br />
                                      対象者の居場所や嫌がらせ行為をすべて調査報告書にまとめましたので、警察に被害届を出すことが可能です。また何かございましたら、ご連絡ください。</dd>
                                  </dl>
                                  <div className="comment">
                                    <div className="requester sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">依頼者様からのコメント</p>
                                          <p className="nm">今回は嫌がらせの調査をしていただいてありがとうございました。男性の行動が異常でしたので恐怖を感じる日々でしたが、あれから警察に相談し警告していただいて、被害が止まりました。<br />
                                            探偵社を利用するのは初めてでしたが、ある意味いい経験をさせていただきました。問題解決できて大満足です。</p>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="chu sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">中央リサーチから一言</p>
                                          <p className="nm">元彼が嫉妬や新しい彼氏に恨みが募って、嫌がらせやストーカー行為に発展するケースは珍しくありません。警察に警告されるとピタリと止まる可能性が高いです。<br />
                                            暴力事件や傷害事件になる前に、お困りの方は一度ご相談頂ければと思います。</p>
                                        </dd>
                                      </dl>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                            
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
        title="広島で嫌がらせやストーカー行為のトラブル対策はお任せ下さい"
        description="広島の探偵社「中央リサーチ」、嫌がらせ、ストーカー対策についての説明ページです。"
        keyword="嫌がらせ,ストーカー対策,広島,探偵,中央リサーチ" /> 
  </>
)
export default stalker