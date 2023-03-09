import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const behavior = () => {
    const pagemeta = {
        title:`素行調査`,
        slug:`behavior`
    }
    return (
        <>
        
            <div id="wrap">
            <Header h1title="素行調査について" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">
                      
                      <div className="bg bg_wide pb">                        
                        <h3 className="cen blue2 mp">家族の生活実態や従業員の素行面<br className="dsp_smt" />など問題ないのか確認したい。</h3>
                        <dl>
                          <dt className="bg_blue_grad2 b mp">こんなことでお悩みの方へ･･･</dt>
                          <dd>
                            <ul className="chk">
                              <li>子供（息子、娘）が、<b>どこで誰と会い何をしているのか</b>気になる。</li>
                              <li>交際相手の<b>生活実態・職業・人物性</b>などが知りたい。</li>
                              <li><b>従業員の不正や、背任行為</b>の事実確認がしたい。</li>
                              <li>取引する上で、<b>信用できる相手（会社）なのか</b>確認したい。</li>
                              <li><b>詐欺や金銭トラブル</b>など特定の人物の実態を解明したい。</li>
                              <li><b>債務者の現在の勤務先</b>（収入源）が知りたい。</li>
                              <li><b>実家で暮らす高齢者</b>の生活実態が気になる。</li>
                            </ul>
                            <p className="img nm"><img src="../img/behavior/man.png" alt="" /></p>
                          </dd>
                        </dl>
                      </div>

                      <div className="behavior pt pb">
                        <h3 className="headline">素行調査</h3>
                        <p>ご依頼内容に応じ、事案に則し最も適した２通りの調査方法で探偵業務を行います。</p>
                        <div className="wrap">
                          <dl>
                            <dt><img src="../img/behavior/img01.jpg" alt="" /></dt>
                            <dd>
                              <p className="bg_blue_grad2 mp nm cen white">調査方法1</p>
                              <div className="in">探偵が尾行・張り込みを行う調査手法によって、対象者本人の素行や生活実態などを、分単位で記録し映像を取る事により事実を把握する方法</div>
                            </dd>
                          </dl>
                          <dl>
                            <dt><img src="../img/behavior/img02.jpg" alt="" /></dt>
                            <dd>
                              <p className="bg_blue_grad2 mp nm cen white">調査方法2</p>
                              <div className="in">対象者に気づかれないよう経歴を基に特殊な技術で周囲に聞き込み、SNSなどからも情報を取集する等、対象者の素行の実状を調査する方法</div>
                            </dd>
                          </dl>
                        </div>
                      </div>

                      <div id="top_faq">
                        <h3 className="headline">よくあるご相談</h3>
                        <div className="list">
                          <dl>
                            <dt><span>Q</span>家族で理由の解らない出費が急に増え始めたのでお金の使い道が知りたい。</dt>
                            <dd><span>A</span>本人は振込詐欺や特殊詐欺に騙されて振り込みを続ける事例もありますので<br className="dsp_hp" />弊社では、まず事実確認を行い、その上で解決のための適正・的確な対策を行う必要があると思います。</dd>
                          </dl>
                          <dl>
                            <dt><span>Q</span>子供が1人暮らしを始めたが音信不通で心配、特に生活実態などが気になる。</dt>
                            <dd><span>A</span>本人は一人暮らしを始めたものの、孤独感や寂しさのあまり犯罪まがいの怪しい仕事をしたり<br className="dsp_hp" />SNSの出会い系にはまり見知らぬ人と出会う事で危険にさらされている場合もあります。<br />
                              健全な生活をしているのであれば安心できますから、手遅れになる前に疑わしい時は早めに調査を行うことをお勧めします。</dd>
                          </dl>
                          <dl>
                            <dt><span>Q</span>従業員が真面目に仕事しているか気になるので調査したい。</dt>
                            <dd><span>A</span>社員が労働契約違反（懲戒免職に匹敵する）をしているケースが増えています。<br />
                              事実を確認し、証拠撮りを行う事で労働契約違反に対する的確な判断ができる材料となります。</dd>
                          </dl>
                          <dl>
                            <dt><span>Q</span>息子（娘）が生活できているのか心配、単身赴任先の夫の生活状況が知りたい。</dt>
                            <dd><span>A</span>息子が借金をしていて素行を調べたらパチンコ依存症になっていたり、<br className="dsp_hp" />娘が借金を作り素行を調査してみたら風俗でアルバイトをしていたりといった事実は後を絶ちません。<br />
                              修復できる段階で早期発見して的確な方向へ進めていけるようアフターケアなども致します。</dd>
                          </dl>
                          <dl>
                            <dt><span>Q</span>交際中の彼はもしかして既婚者なのか？それとも結婚歴などがあるのではないか？</dt>
                            <dd><span>A</span>交際中は客観的に相手を見ることができないため、相手にとって都合の悪い情報を知ることは難しいものです。<br />
                              弊社では<b className="red fm">隠された真実を、客観的に調査して正確な情報収集</b>を行います。<br />
                              調査結果を基に、これからの交際を考える判断材料にしていただき、問題解決にお力添えができればと考えております。</dd>
                          </dl>
                          <dl>
                            <dt><span>Q</span>遠方に一人で暮らす父親（母親）が心配。最近連絡しても家にいないこともあり、何をしているのか知りたい。</dt>
                            <dd><span>A</span>家族形態の変化から、家族が離れて暮らすケースは少なくありません。一人暮らしの寂しさから、ギャンブルにのめり込んでいたり、詐欺まがいのトラブルに巻き込まれていることも考えられます。また、調査することで初めて認知症などの病気を疑ったというケースもあります。早期に事実確認することで早めの対処も可能です。また、認知症などの疑いがある場合は、その後の身辺、見守りなどで、ご家族の安心につながるようお手伝いします。</dd>
                          </dl>
                        </div>
                      </div>

                      <div className="end">
                        <p className="mp cen"><span className="line">ご家族などの心配事を迅速に確認し、問題解決のお役に立ちたいと思います。</span></p>
                        <p className="cen txt">また様々なトラブルによる慰謝料の請求を行う場合なども、まずは対象者の事を、お知りになったうえで進めていかれる事をお勧めします。<br />
                          抱えている事案に対しスムーズな<b className="red fm">問題解決を図る為には、事前に情報収集する事が重要と考えます。</b></p>
                      </div>
                    </div>
                    <div className="investigation_case main">
                        <h3 className="line2 mp bg_wide"><span>調査事例</span></h3>
                        <h4 className="cen">これまでに当社で行った<br className="dsp_smt" />素行調査の事例をご紹介します。<span className="dsp_hpt"><br className="dsp_tbs" />調査を検討される際の参考に<br className="dsp_smt" />してください。</span></h4>
                        <div className="box">
                          <div className="bg">
                            <div className="head">
                              <p className="case serif">case01</p>
                              <input id="case-check1" className="case-check1" type="checkbox" checked />
                              <label className="case-label" htmlFor="case-check1">妻は見抜いた！消防士の夫が借金してまで貢いだ女性の影…素行調査で判明した真実<br />
                              <span>探偵社には毎日多くの浮気相談が寄せられますが、奥様が旦那様の浮気に気がつくカンの鋭さには感心するものがあります。素行調査で分かった浮気発覚の事例です。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                              <div className='case-content'>

                                <div className="info">
                                  <div className="hito"> <span>依頼者：妻・保育士（23歳）</span> <span className="target">対象者：夫・消防士（27歳）</span></div>
                                  <p className="img"><img src="../img/behavior/jirei01.jpg" alt="" /></p>
                                  <dl className="content">
                                    <dt>依頼内容</dt>
                                    <dd>結婚2年目で子供が一人いる夫婦です。夫は消防士で性格は真面目で落ち着いています。結婚後は仕事熱心で子供のお世話もしてくれ良い夫、良い父親でした。<br />
                                      しかし、半年くらい前から仕事の帰りが遅くなり、深夜帰りや朝帰りも増えて、家にいる時間が少なくなりました。口数も減り、話をはぐらかすようになって、怪しさを感じます。<br />
                                      夫は上司と大事な話があるから飲みに行くだけだと言うので、私は同じ消防仲間に聞いてみたのですが、「飲み会はなかった」とのこと…。私はますます不安になりました。<br />
                                      その数日後、夫が帰宅するなりいきなりキレだし、「仕事仲間に勝手に電話するな！」と怒鳴ったのです。私は「本当は仕事の飲み会じゃないんでしょ！」と怒ると夫は家を飛び出しました。<br />
                                      最近、銀行の預金残高も少しずつ減っているのもおかしいし、夫は何か私に隠しているのだと思い、思い切って探偵社に調査を依頼することにしました。</dd>
                                  </dl>
                                  <dl className="content cb">
                                    <dt>調査内容</dt>
                                    <dd>ご依頼者様は保育士をされている奥様です。消防士の旦那様の態度が冷たくなり、深夜や早朝に帰ることが増えて、口喧嘩の末に家を出てしまい、かなり困惑したご様子でした。<br />
                                      対象者の勤務地、仕事の行動範囲、交友関係などの事前情報を多く提供して頂いたので、一刻でも早く事実が分かるように、全力で素行調査を開始します。</dd>
                                  </dl>
                                  <dl className="content">
                                    <dt>調査結果</dt>
                                    <dd>対象者の仕事のスケジュールは非番・休日・24時間勤務のシフト制ですが、仕事が終わると仕事仲間と近くの定食屋で食事をした後に、駅前にあるスナックへ通っていました。<br />
                                      1日目の調査日には午後7時から深夜1時まで、2日目も3日目も約5時間はそのスナックに入り浸っている状態です。対象者はスナックに勤める30代前半の女性を気に入っていました。<br />
                                      女性は駅前のワンルームマンションに一人暮らし。スナックが閉店すると、タクシーに二人で乗り込み、女性宅に向かいました。浮気をしている事実は仕事仲間も承知していました。<br />
                                      ご依頼者様が夫の行動に不安を覚えたのも、銀行の預金残高が減っているのも、対象者がスナックで勤める女性と知り合い浮気をしているのが原因でした。<br />
                                      浮気相手の自宅マンションに出入りする様子、二人でデートをする様子、不貞行為がある事実も確認できましたので、調査報告書にまとめてご依頼者様に提出しました。</dd>
                                  </dl>
                                  <div className="comment">
                                    <div className="requester sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">依頼者様からのコメント</p>
                                          <p className="nm">今回は本当にスピーディーな調査をして頂きありがとうございます。証拠を見たときは唖然としました。浮気は薄々感づいていましたが…。子供がまだ小さいので離婚するつもりはないです。でも、夫には反省してもらいます。安月給で切り詰めている私の気持ちも考えて‥と。</p>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="chu sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">中央リサーチから一言</p>
                                          <p className="nm">こちらこそ調査にご協力いただいてありがとうございました。素行調査で浮気の事実が分かりましたが、早い段階でご依頼されたので夫婦の再構築も上手くいくと信じております。</p>
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
                              <label className="case-label" htmlFor="case-check2">娘の婚約者は何をジラしている？両親に挨拶して3年経っても結婚しない男の本心とは？<br />
                              <span>娘さんや息子さんから「結婚する」と報告を受けた親御さんは喜びでいっぱいな気持ちになりますが、「あれ？本当に大丈夫かな」と心配になるケースも少なくありません。今回は、娘の婚約者が両親にご挨拶をしてもなかなか結婚せずに3年もジラしている…というケースの素行調査をご紹介します。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                              <div className='case-content'>
                                <div className="info">
                                  <div className="hito"> <span>依頼者：娘の母親（64歳）</span> <span className="target">対象者：娘の婚約者（36歳）</span></div>
                                  <p className="img"><img src="../img/behavior/jirei02.jpg" alt="" /></p>
                                  <dl className="content">
                                    <dt>依頼内容</dt>
                                    <dd>娘は都内で会社員をしている35歳です。仕事を通して知り合った婚約者（36歳）がいます。3年前に二人は結婚報告をするために、広島の実家までご挨拶に来てくれました。<br />
                                      見た目が若くて好青年という感じで、二人の雰囲気もよく、無事に結婚できると感慨深くなり、とても喜んでおりました。しかし、コロナ禍もあってか二人はなかなか結婚しないのです。<br />
                                      心配で時々娘に聞くのですが、「まだコロナだから」といって結婚を先延ばししている状態です。結婚の日時は二人が決めるとのことですが、娘も30代半ばですし、子供のことを考えると早く結婚して欲しいのが本音です。もしかして別れてしまったのか…気になっています。<br />
                                      そこで、探偵社に調査を依頼すれば、素行調査で事実が分かると知って、勇気を出して調査を依頼することにしました。婚約者の素行を調べてください。お願いいたします。</dd>
                                  </dl>
                                  <dl className="content cb">
                                    <dt>調査内容</dt>
                                    <dd>対象者は娘さんの婚約者。都内の医療機器メーカーに勤める会社員です。3年前に婚約したけれども、まだお二人は籍を入れていない状態なので、まだお付き合いが続いているのか、調査を開始します。</dd>
                                  </dl>
                                  <dl className="content">
                                    <dt>調査結果</dt>
                                    <dd>お二人は2つ駅が離れた場所にそれぞれのマンションで一人暮らしをされています。対象者は土日祝休みで平日は朝7時半に家を出て、19時に帰宅する規則正しい生活をしています。<br />
                                      土日には娘さんが住む最寄り駅で待ち合わせをして、食事をしたり、映画を見に行ったり、買い物をする様子を確認しました。まだお付き合いが続いています。<br />
                                      対象者は職場でも真面目で悪い噂はありませんでした。交友関係も親しい異性の影はなく、健康状態や精神状態も良好で目立った特徴はなく、好青年といった印象でした。<br />
                                      一点、聞き込み調査で分かった大事なことがあります。それは、婚約者の両親が二人とも認知症で介護施設に入居しており、対象者が金銭的な面をすべて工面している様です。<br />
                                      対象者には弟さんと妹さんがいますが、兄弟二人は低収入のため金銭的なサポートができず、両親の介護はすべて対象者が面倒を見ているようです。<br />
                                      結婚になかなか踏み切れないのは、経済的な理由があるかもしれません。二人の関係は良好ですので、これからタイミング次第で結婚される可能性があるでしょう。</dd>
                                  </dl>
                                  <div className="comment">
                                    <div className="requester sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">依頼者様からのコメント</p>
                                          <p className="nm">迅速で素晴らしい情報ありがとうございます。 二人がまだ交際していると知り、ホッとしました。婚約者が両親の介護をしているとは知りませんでした。<br />
                                            コロナが落ち着いて結婚式を挙げるときには、金銭的な援助も考えようと思います。今回は依頼して本当に良かったです。ありがとうございました！</p>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="chu sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">中央リサーチから一言</p>
                                          <p className="nm">こちらこそ迅速なご対応ありがとうございます。娘さんと婚約者はとても仲睦まじく、素行に問題点はありませんでした。 またご心配なことがありましたらお気軽にご相談下さい。</p>
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
                              <label className="case-label" htmlFor="case-check3">子供の教育費に貯めた100万円が消えた！妻がハマって浪費したものとは…？<br />
                              <span>人間はハマってしまうと金銭感覚がなくなり、あるだけのお金をどんどん使ってしまい、気がついた時には借金地獄に陥るケースもあるので注意が必要です。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                              <div className='case-content'>

                                <div className="info">
                                  <div className="hito"> <span>依頼者：夫・会社員（41歳）</span> <span className="target">対象者：妻・パート従業員（37歳）</span></div>
                                  <p className="img"><img src="../img/behavior/jirei03.jpg" alt="" /></p>
                                  <dl className="content">
                                    <dt>依頼内容</dt>
                                    <dd>妻が定期預金を勝手に使って困っています。子供が高校まで通うための塾代、学費などを定期預金で貯めていますが、ある日いきなり100万円がなくなったのです。<br />
                                      驚いて妻に尋ねると「妹にお金を貸してと言われたから」とすました顔で返答しました。しかし、妻の妹夫婦は共働きで子供もいないので、お金を貸してなんて言わないと思います。<br />
                                      妻が一体何にお金を使ったのか、なんで正直に答えないのか、考えたら夜も眠れず、誰にも相談できなく、探偵社の素行調査を依頼することにしました。</dd>
                                  </dl>
                                  <dl className="content cb">
                                    <dt>調査内容</dt>
                                    <dd>旦那様は突然奥様が定期預金から100万円をおろして、何に使ったのかとても気にされていました。奥様は清掃のパート従業員をされていますが、目立った行動はない、とのこと。早速、対象者の素行を調査していきます。</dd>
                                  </dl>
                                  <dl className="content">
                                    <dt>調査結果</dt>
                                    <dd>対象者は自宅近くの飲食店で清掃のパートを週4日、出勤しています。そこで知り合った同年代の従業員から「電話占い」について知り、体験占いをすることになったそうです。<br />
                                      初めは興味本位もあり500円くらいで終わりましたが、電話占いで当たる先生に出会ってから、ハマってしまい、毎日3時間位利用しているようです。一日1万円から3万円使っています。<br />
                                      交友関係や行動パターンを調査した結果、異性との関係や浮気の可能性はありませんでした。買い物や旅行など、大きな出費はなく、奥様は電話占いにハマっているのは事実です。<br />
                                      最近は、電話だけでなくメール（テキスト形式）の占いもあり、自宅にいるときはメールで占い、外出しているときは車の中で電話占いをしていることがわかりました。<br />
                                      請求書は対象者のスマホのみに通知されるように設定されています。報告書にまとめてご依頼者様に提出しました。</dd>
                                  </dl>
                                  <div className="comment">
                                    <div className="requester sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">依頼者様からのコメント</p>
                                          <p className="nm">報告書をみて拍子抜けしました。妻は毎日スマホ片手に真剣な顔をしているので、何かと思っていましたが、電話占いに課金をしていたなんて…。<br />
                                            子供の教育費を犠牲にするなんて信じられませんね。手遅れになる前に相談してよかったです。ありがとうございます。</p>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="chu sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">中央リサーチから一言</p>
                                          <p className="nm">パートナーがお金を何に使っているか、分からず困っているご相談は多いです。今回のように心当たりのある方は、一度ご相談いただければと思います。</p>
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
                </Layout>
            </div>
            <Footer />
        </>
    )
}
export const Head = () => (
  <>
      <Seo
        title="広島で素行調査は総合探偵社中央リサーチ広島本社へ"
        keyword="素行調査,広島,探偵,中央リサーチ"
        description="素行調査は広島本社で55年の実績を持つ中央リサーチにお任せください。皆様に少しでも早く安心をお届けできるよう責任と誠意を持ってサポートいたします。"
        />
  </>
)
export default behavior