import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const whereabouts = () => {
    const pagemeta = {
        title:`家出・所在調査`,
        slug:`trial`
    }
    return (
        <>
        
            <div id="wrap">
            <Header h1title="家出人調査・所在調査について" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">
                    
                      <div className="bg bg_wide pb">
                        <h3 className="mp cen blue2">コロナ禍で家出人が急増中!<br className="dsp_smt" />早期にご相談・早急に調査を!</h3>
                        <p className="cen_pc">家出してしまった家族の行方や認知症などが原因で行方がわからなくなった方の捜索を行います。<br />
                          また音信不通となってしまった親族、幼い頃の旧友・恩師など懐かしい人の所在についてもお任せください。<br className="dsp_tbs" /><b className="fm red">「人探し」全般</b>に調査を行います。</p>
                        <p className="cen txt">弊社の調査能力は、<b className="fm blue2">地元ならではの膨大な情報ネットワーク</b>で<b className="fm red">発見率95%以上の実績があります。</b></p>

                        <div className="box_flex graf">
                          <dl>
                            <dt className="bg_blue_grad2 b cen">SNSの普及により少年少女の家出が急増</dt>
                            <dd><img src="../img/whereabouts/img01.jpg" alt="" /></dd>
                          </dl>
                          <dl>
                            <dt className="bg_blue_grad2 b cen">家出するとSNSの出会い系に走る<br />少年・少女が急増している</dt>
                            <dd><img src="../img/whereabouts/img02.jpg" alt="" /></dd>
                          </dl>
                        </div>

                        <div className="box_flex line_area">
                          <div className="info">
                            <p className="line mp"><span>早急に発見しないと事件に巻き込まれる可能性が高くなる。</span></p>
                            <p>少女や少年の家出の要因は、主に家庭でのストレスや学校でのいじめなどが多く見受けられます。家出するとSNSの出会い系サイトに流れ、見知らぬ人の家を泊り歩く生活など<b className="fm">犯罪にも巻き込まれるケースが増えています。</b></p>
                            <p>また薬を飲まされたり、本人の意思ではどうにもできないような危険もありますので、早期の発見は欠かせません。必ずお力になりますので私たちプロの捜索技術にお任せ下さい。</p>
                            <p className="nm">発見後は、<b className="fm">その要因を解消しない限り家出は繰り返されます。</b><br />
                              きちんと事実に基づく話し合いをし、本当の問題を解決して行きましょう。</p>
                          </div>
                          <p className="img nm"><img src="../img/whereabouts/img03.jpg" alt="" /></p>
                        </div>

                      </div>

                      <div className="about pt pb">

                        <div className="sec">
                          <h3 className="headline">家出人調査について</h3>
                          <p>お子様の家出や<b className="red fm">安否が気になる方の調査</b>をいたします。人命に係わる事もございますので<b className="red fm">早期相談・早期発見</b>が必須です。</p>

                          <div className="box_flex">
                            <div className="info">
                              <h3 className="line mp">家出した家族の行方が知りたい</h3>
                              <p>少女や少年の家出の要因は様々ですが、家庭でのストレスや学校でのいじめなどが原因で家出に至ることが多いようです。家出するとSNSの出会い系サイトなどで、見知らぬ人の家を泊まり歩くなどの可能性もありますので、時間が経つほど大変危険です。<b className="fm">また薬を飲まされたり、何らかの犯罪に巻き込まれたり、本人の意思ではどうにもできないような危険もありますので早期の発見は欠かせません。</b></p>
                            </div>
                            <p className="img"><img src="../img/whereabouts/img04_01.jpg" alt="" /></p>
                          </div>

                          <div className="box_flex box_r">
                            <div className="info">
                              <h3 className="line mp">家族の安否を確認したい</h3>
                              <p><b className="fm">同居家族が突然の音信不通に。一人暮らしの家族が音信不通。また、多重債務</b>を抱えて消息を断ってしまった家族の行方や生活実態などを調査いたします。</p>
                            </div>
                            <p className="img"><img src="../img/whereabouts/img04_02.jpg" alt="" /></p>
                          </div>

                          <div className="box_flex">
                            <div className="info">
                              <h3 className="line mp">行方不明者の調査</h3>
                              <p><b className="fm">認知症などが原因で自宅に帰りたくても帰れなくなった方の捜索</b>をいたします。<br />
                                幼いころに行った場所や山、川、海に行き事故にあう可能性もあります。また財布を奪われるなど、何らかの事件に巻き込まれている可能性もありますので早期にご相談ください。</p>
                            </div>
                            <p className="img"><img src="../img/whereabouts/img04_03.jpg" alt="" /></p>
                          </div>

                        </div>

                        <div className="sec">
                          <h3 className="headline">所在調査について</h3>
                          <p>交際相手に騙さているかもしれない、お金を貸したまま逃げられたなどの問題解決の為、所在調査でお力になります。<br />
                            また<b className="blue2 fm">同窓会など同級生・恩人、初恋の人などの消息についても調査</b>いたします。</p>

                          <div className="box_flex box_r">
                            <div className="info">
                              <h3 className="line mp">お金を貸したが、返済されず行方がわからなくなった</h3>
                              <p>知人やSNSで知り合った人物などに出資させられたり、高額なお金を貸したものの、その後、一切連絡が取れなくなり困っている方が増えています。まずは対象者の所在を突き止めることが大事です。その後は弁護士にご相談ください。</p>
                            </div>
                            <p className="img"><img src="../img/whereabouts/img05_01.jpg" alt="" /></p>
                          </div>

                          <div className="box_flex">
                            <div className="info">
                              <h3 className="line mp">恩師やお世話になった方の消息が知りたい</h3>
                              <p><b className="fm">お世話になってお礼を言えなかった恩人や、懐かしい思い出の恩師の消息</b>についてもお調べいたします。数年ぶりの感動的な再会のお手伝いをいたします。</p>
                            </div>
                            <p className="img"><img src="../img/whereabouts/img05_02.jpg" alt="" /></p>
                          </div>

                          <div className="box_flex box_r">
                            <div className="info">
                              <h3 className="line mp">懐かしい旧友の消息が知りたい</h3>
                              <p>急な引っ越しで連絡が取れなくなってしまった。あるいは連絡先を無くして連絡先がわからなくなった懐かしい同級生、旧友の消息について所在調査いたします。<br />
                                こちらの調査は、<b className="fm">同窓会や仲間内での久しぶりの会合等にもご活用いただけます。</b>懐かしい旧友との再会のお手伝いをいたします。</p>
                            </div>
                            <p className="img"><img src="../img/whereabouts/img05_03.jpg" alt="" /></p>
                          </div>

                        </div>

                        <div className="sec">
                          <div className="box_flex">
                            <div className="info">
                              <h3 className="headline">ペット調査について</h3>
                              <p>目撃者の聞き込み・ポスター・ペット特有の獣道・足跡の確認・飼い主の呼ぶ声の録音・えさの仕掛けと水のある場所の捜索等、<b className="blue2 fm">行動範囲の狭いペット（猫）から行動範囲の広いペット（犬）まで迅速に対応いたします。</b><b className="fm red">プロの発見率90パーセントです。</b></p>
                              <p className="img dsp_tbs"><img src="../img/whereabouts/img06.jpg" alt="" /></p>
                              <h3 className="line mp">迷子になったペットを探し出したい</h3>
                              <p className="img_rit dsp_hp"><img src="../img/whereabouts/img06_02.jpg" alt="" /></p>
                              <p>ペットは大切な家族の一員です。１日でも早くご家族のもとに帰る事が望ましいです。<br />
                                ペットは自宅に帰りたくても帰れない状況になっている場合もありますので早期にご相談ください。<br />
                                ペット調査では、<b className="blue2 fm">周辺へのビラ貼りや聞き込み。また、動物が行く可能性の高い場所の捜索</b>を行い、迷子になってしまった愛犬(猫)その他のペットを早急に探し出します。</p>
                            </div>
                            <p className="img dsp_hp"><img src="../img/whereabouts/img06.jpg" alt="" /></p>
                            <p className="img dsp_tbs"><img src="../img/whereabouts/img06_02_l.jpg" alt="" /></p>
                          </div>
                        </div>

                      </div>

                      <div className="investigation_case pb">
                        <h3 className="line2 mp bg_wide"><span>調査事例</span></h3>
                        <h4 className="cen">これまでに当社で行った<br className="dsp_smt" />家出・所在調査の事例をご紹介します。<span className="dsp_hpt"><br className="dsp_tbs" />調査を検討される際の参考に<br className="dsp_smt" />してください。</span></h4>

                        <div className="box">
                          <div className="bg">
                            <div className="head">
                              <p className="case serif">case01</p>
                              <input id="case-check1" className="case-check1" type="checkbox" checked />
                              <label className="case-label" htmlFor="case-check1">夫婦喧嘩の後に夫が家を出て5日間帰宅せず…調査を依頼して居場所を確認したいです<br />
                              <span>夫婦の間でもこれだけは言ってはいけないというボーダーラインがあります。それを超えてしまうと‥。家出調査の事例をご紹介します。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                              <div className='case-content'>

                                <div className="info">
                                  <div className="hito"> <span>依頼者：妻（41歳）</span> <span className="target">対象者：会社員、夫（49歳）</span> {/*span className="time">調査時間：●時間</span*/}</div>
                                  <p className="img"><img src="../img/whereabouts/jirei01.jpg" alt="" /></p>
                                  <dl className="content">
                                    <dt>依頼内容</dt>
                                    <dd>コロナ禍になり、夫は時短勤務の在宅ワークとなり、給与が半分に減ってしまいました。その日、夫は朝起きてすぐSNSを見て大笑いしており、あまりの危機感のなさに、思わず私は冷たく当たってしまいました。<br />
                                      「そんな暇があったら副業でもして稼ぎを増やせばいいんじゃない？」と。当然ながら口論が始まり、私は夫が低学歴でスキルもない！と言い放ってしまいました。<br />
                                      夫は無言で家を出ていきましたが、おそらく実家に行ったのだろうと思っていました。ただ、実家に電話してみると、夫は来ていないとのこと。会社に出勤はしていますがほとんど在宅ワークのため、どこにいるのか分からず困っています。<br />
                                      夫にキツく言い過ぎた自分を反省しています。とりあえず無事でいてほしいのと、早く謝りたいので、探偵社に相談し、調査を依頼することにいたしました。</dd>
                                  </dl>
                                  <dl className="content cb">
                                    <dt>調査内容</dt>
                                    <dd>奥様は夫婦喧嘩で旦那様を深く傷つけてしまったと反省されていました。最悪な事態になる前にどうか早く居場所を見つけて欲しいと深刻なご様子でした。</dd>
                                  </dl>
                                  <dl className="content">
                                    <dt>調査結果</dt>
                                    <dd>対象者は在宅ワーク以外のオフィスへの出勤日には顔を出していると確認できましたので、無事であることをまず奥様にお伝えしました。しかし、奥様の発言には深く傷ついており、会話したくないと仲の良い同僚にも漏らしていたそうです。<br />
                                      対象者が出勤日に会社を出てから尾行すると、行き着いた先は高校時代の同級生の自宅マンションでした。その人は独身の男性です。困った様子を見て家に入れてあげたそうです。<br />
                                      奥様が心配されていることを伝えると、困った様子を見せましたが、十分に反省しているなら…と家に帰ると約束してくれました。友人の助言もあって、気持ちが動いたようです。</dd>
                                  </dl>
                                  <div className="comment">
                                    <div className="requester sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">依頼者様からのコメント</p>
                                          <p className="nm">今回は迅速な家出調査をしていただいて心から感謝いたしております。本当にありがとうございます。夫に万が一の事があったら、すべて自分の責任だと思いました。夫婦喧嘩は何を言ってもいいものではなく、人を侮辱する発言は深く傷つける結果になることを学びました。<br />夫に謝ったら少しずつ笑顔を取り戻してくれて本当に良かったです。今回は本当にお世話になりました。</p>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="chu sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">中央リサーチから一言</p>
                                          <p className="nm">奥様は食事が喉を通らないほどストレスがピークに達していました。ご主人様の出勤している事実が分かった後は、もう居場所は時間の問題でした。無事にご帰宅されて良かったです。</p>
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
                              <label className="case-label" htmlFor="case-check2">妻が怪しいサークルに誘われて急に家出…LINEだけは繋がりますが居場所が分かりません<br />
                              <span>家出する理由は人それぞれですが、他人からの勧誘などで、急に姿を消してしまうケースがあります。事件に繋がる前に早急な対応が求められます。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                              <div className='case-content'>
                                <div className="info">
                                  <div className="hito"> <span>依頼者：会社員、夫（56歳）</span> <span className="target">対象者：専業主婦、妻（54歳）</span> {/*span className="time">調査時間：●時間</span*/}</div>
                                  <p className="img"><img src="../img/whereabouts/jirei02.jpg" alt="" /></p>
                                  <dl className="content">
                                    <dt>依頼内容</dt>
                                    <dd>妻は地元のヨガサークルに入っています。同年代の主婦が多く、おしゃべりしながら体を動かすとストレス発散になるようです。<br />
                                      それはいいことだと応援していましたが、最近、また新しいサークルに入ると言い出して、瞑想を習うという怪しい感じのパンフレットを見せてきました。<br />
                                      ネットで調べてみると宗教団体が絡んでいると分かり、私は「ゆっくり考えてからにすれば？」と言ったのですが、妻は勧誘してくる相手とLINEでずっと話していて、焦っている様子でした。<br />
                                      妻はその2日後にスーツケースに荷物をまとめて家出しました。LINEは繋がりますが、居場所を教えてくれません。とても心配しているので調査で突き止めてもらいたいです。</dd>
                                  </dl>
                                  <dl className="content cb">
                                    <dt>調査内容</dt>
                                    <dd>ご依頼者様は奥様が新しいサークルに勧誘されて、そのサークルが宗教の可能性があるので出家でもしたのかと心配されていました。LINEとスマホでは連絡を取れますが、「大丈夫」しか言わないので、本人が返信しているかも分からず、心配されているご様子でした。</dd>
                                  </dl>
                                  <dl className="content">
                                    <dt>調査結果</dt>
                                    <dd>奥様はヨガサークルで知り合った30代の女性にある宗教団体に勧誘されていることが分かりました。表向きは宗教ではなく、瞑想のリラクゼーションサロンですが、その後に宗教へ誘導されると見られます。奥様は瞑想でストレスを発散するスキルを身につけたい一心だそうです。<br />
                                      しかし、まだ宗教団体が主催していると知りませんので、そのセミナーが終われば帰宅する可能性があります。瞑想セミナーは3日間の宿泊ですが、そこで宗教に入らなかったら帰宅するケースがほとんどだそうです。<br />
                                      幸い、奥様は宗教に入る気はなく、瞑想セミナーが終わり次第、帰宅するとサロンに伝えてあるそうです。そして、調査日がちょうど3日目でしたので、無事に帰宅する姿を確認できました。</dd>
                                  </dl>
                                  <div className="comment">
                                    <div className="requester sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">依頼者様からのコメント</p>
                                          <p className="nm">無事に妻が帰ってきました！本当にホッとして全身が脱力状態です。宗教の洗脳にあわず本当に良かった。迅速な対応に感謝しています。感謝してもしきれません。</p>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="chu sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">中央リサーチから一言</p>
                                          <p className="nm">今回はカウンセリングからご主人さまの深刻なご様子を見て、早く奥様を発見しなければ、と使命に燃えました。奥様もご無事とのことで一件落着ですね。本当に良かったです。</p>
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
                              <label className="case-label" htmlFor="case-check3">引きこもりフリーター息子が突然の失踪…家出調査で居場所を知りたいです<br />
                              <span>いつも自宅にいるフリーターの息子さんが突然いなくなり、家に帰ってこない日が続いています。息子さんが宿泊していた場所と家出の理由とは？</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                              <div className='case-content'>

                                <div className="info">
                                  <div className="hito"> <span>依頼者：息子さんの母親（67歳）</span> <span className="target">対象者：引きこもり43歳の息子さん</span> {/*span className="time">調査時間：●時間</span*/}</div>
                                  <p className="img"><img src="../img/whereabouts/jirei03.jpg" alt="" /></p>
                                  <dl className="content">
                                    <dt>依頼内容</dt>
                                    <dd>息子は週2回コンビニで深夜のアルバイトをしているフリーターの43歳です。いわゆるオタクで彼女はいません。結婚も諦めていると思います。そんな息子がある日突然、リュックに荷物をまとめて家を出ていきました。そのうち戻るだろうと思いながら、1週間経ちました。<br />
                                      息子はネットに入り浸りで社会的ではなく、友人もほとんどいませんので、一体どこで何をしているのか分かりません。考えると不安になってきて、今回探偵社に相談することに。<br />
                                      中央リサーチさんは広島の土地勘があり、迅速な対応に定評があるのでまさに神頼みと言った感じです。初めての依頼ですがよろしくお願いいたします。</dd>
                                  </dl>
                                  <dl className="content cb">
                                    <dt>調査内容</dt>
                                    <dd>息子さんの社会的接点はコンビニのアルバイト、ネットのSNSのみです。それでもアカウントや知人の情報から居場所を突き止めることが可能です。早く解決するためにスピード調査をします。</dd>
                                  </dl>
                                  <dl className="content">
                                    <dt>調査結果</dt>
                                    <dd>息子さんはオンラインゲームを通じて、ある30代の女性と親密な関係にあると分かりました。SNSのサブアカウントにはその出会いの嬉しさをコメントしています。「彼女ができたのは20年ぶりなので生き返った気分」と表現しています。<br />
                                      そして、息子さんは彼女とオンラインで話す時に部屋にご両親が写ってしまうのが恥ずかしいので、マンガ喫茶に宿泊して彼女とビデオ通話していることが分かりました。<br />
                                      マンガ喫茶にいる息子さんはちゃんとシャワーをして汚れた様子はなく落ち着いていました。息子さんにご両親が心配されているので、帰宅するようにと助言すると、渋々承諾してくれました。</dd>
                                  </dl>
                                  <div className="comment">
                                    <div className="requester sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">依頼者様からのコメント</p>
                                          <p className="nm">今回はカウンセリング時から丁寧なご対応ありがとうございます。無事に息子が帰ってきました。オンラインゲームを通じて彼女ができて、彼女に自宅の様子を見られるのが恥ずかしいと思い、マンガ喫茶のパソコンを使っていたと説明されました。<br />
                                            40代で引きこもり、両親と同居がバレてしまうのを恐れていたのです。確かにうちは狭いので気持ちが分かりました。本当に今回はお騒がせしました。ご対応ありがとうございます。</p>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="chu sec">
                                      <dl>
                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                        <dd>
                                          <p className="b">中央リサーチから一言</p>
                                          <p className="nm">息子さんがマンガ喫茶から無事に帰宅されたとのことで、調査員もほっといたしました。家出の理由が微笑ましたかったです。お力になれて幸いです。</p>
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
        title2="行方不明の人探し、家出人調査なら"
        description="広島の探偵社「中央リサーチ」、家出・所在調査、所在調査について説明しています。"
        keyword="家出・所在調査,所在調査,広島,探偵,中央リサーチ"
        />
  </>
)
export default whereabouts