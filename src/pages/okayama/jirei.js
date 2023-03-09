import React from 'react'

import Seo from '../../components/SEO'
import HeaderOkayama from '../../components/HeaderOkayama'
import FooterOkayama from '../../components/FooterOkayama'
import Layout from '../../components/Layout'
import SubpageTitle from '../../components/SubpageTitle'
import Breadcrumb from '../../components/breadcrumb'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const jirei = () => {
    const pagemeta = {
        title:`事例紹介`,
        slug:`jirei`        
    }
    return (
        <>
        
            <div id="wrap">
                <HeaderOkayama h1title="調査事例について" pagetitle="岡山駅より徒歩5分の探偵事務所" />
                <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
                <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">
                    
                        <div className="investigation_case pb">
                            <h3 className="line2 mp bg_wide"><span>調査事例</span></h3>
                            <h4 className="cen">これまでに当社で行った調査事例をご紹介します。調査を検討される際の参考にしてください。</h4>
                            <div id="case01" className="pad_anchor"><div className="box"><div className="bg">
                                <div className="head">
                                    <p className="case serif">case01</p>
                                    <input id="case-check1" className="case-check1" type="checkbox" checked />
                                    <label className="case-label" htmlFor="case-check1">昼間の嫁の行動が怪しい！スマホで何やら出会い系アプリか？浮気調査をお願いします！<br />
                                    <span>浮気調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito">
                                            <span>依頼者：会社員／39歳／男性</span>
                                            <span className="target">対象者：飲食店の清掃パート従業員の妻／33歳</span>
                                            </div>
                                            <p className="img"><img src="../../img/okayama/jirei/img01.jpg" alt="" /></p>
                                            <dl className="content">
                                            <dt>依頼内容</dt>
                                            <dd>私の妻は週に3回、近所の飲食店で清掃の仕事をしており、仕事がない日は自宅で家事をしています。しかし、最近昼間に遠くへ出かけることが多くなり、帰りが遅い日が増えました。<br />
                                                妻は某男性アイドルグループの追っかけをやっているのでその集会やイベントに出かけると言っていますが、パート代を服や化粧品に使い、雰囲気が派手になってきたので怪しいです。<br />
                                                もしかして浮気をしているのか…と思い、昼間の休憩時間に電話をしても無視されたり、LINEの返信も遅いのでイライラが募ります。昼間にどこで誰と何をしているのか調査願います。</dd>
                                            </dl>
                                            <dl className="content cb">
                                            <dt>調査内容</dt>
                                            <dd>パート従業員の奥様は仕事がない日も昼間に出かけて帰宅が遅かったり、酒を飲んで帰ってくることも増えて、服装やメイクも変わったためにご主人様は浮気を疑っていました。<br />
                                                出かける曜日は仕事がない日が多いということで、自宅にいる曜日に調査をして、どこで誰と何をしているのか、浮気の事実はあるのか、あればどこの誰なのか浮気調査を開始します。</dd>
                                            </dl>
                                            <dl className="content">
                                            <dt>調査結果</dt>
                                            <dd>対象者を張り込みすると午後13時40分頃、自宅を出ました。服装はロングワンピースに白のスニーカー、メイクは薄め、特に派手な様子はありません。<br />
                                                行き先を尾行すると自宅の最寄り駅まで歩いていき、岡山駅近くの駐車場でスマホを片手に辺りを見渡していました。すると青いセダンが近づいて窓際から「ちょっとまってね」と一言。<br />
                                                30代前半くらいの男性が駐車場に停めると対象者に近づき、二人は軽くキスを交わしてから腕を組んで完全個室の飲食店へ入っていきました。その日は別々に帰宅。<br />
                                                2日目の調査では、また同じ駐車場で待ち合わせをし、その日は美観地区へ行き、二人は仲良さそうに見学をしていました。<br />
                                                二人の出会いは地元のコミュニティサイトでした。<br />
                                                夜になると駐車場に戻り、二人はラブホテルに入り、翌朝まで過ごした事実を証拠撮影に成功し、その後も同じホテルを利用している様子を証拠に残し、調査終了となりました。</dd>
                                            </dl>
                                            <div className="comment">
                                                <div className="requester sec">
                                                    <dl>
                                                    <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                    <dd>
                                                        <p className="b">依頼者様からのコメント</p>
                                                        <p className="nm">妻が浮気をしている事実を知ってショックでした。地味なタイプですが服装とメイクが変わったのは恋をしているから、それが事実ですね。<br />
                                                        結婚して3年目、まだ子供が居ないのが幸いです。もう妻を信じることはできず、離婚を考えています。浮気の証拠が決定打になりました。感謝しております。ありがとうございます。</p>
                                                    </dd>
                                                    </dl>
                                                </div>
                                                <div className="chu sec">
                                                    <dl>
                                                    <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                    <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">離婚を決断されたとのことで今回の調査報告書が浮気の決定的な証拠となります。ご依頼者様は被害者である証明が可能です。どうか幸せな人生のためにも諦めずに。応援しています。</p>
                                                    </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                </div></div>
                            </div>
                            <div id="case02" className="pad_anchor"><div className="box"><div className="bg">
                                <div className="head">
                                    <p className="case serif">case02</p>
                                    <input id="case-check2" className="case-check2" type="checkbox" />
                                    <label className="case-label" htmlFor="case-check2">大事な顧客名簿がどこかへ消えた？元従業員の怪しい行動を素行調査<br />
                                    <span>素行調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito">
                                            <span>依頼者：商店街の電器店／73歳</span>
                                            <span className="target">対象者：元従業員／40代</span>
                                            </div>
                                            <p className="img"><img src="../../img/okayama/jirei/img02.jpg" alt="" /></p>
                                            <dl className="content">
                                            <dt>依頼内容</dt>
                                            <dd>小さな商店街で約50年間、電器店を経営しています。「街の電器屋さん」です。最近はネットショップや家電量販店に押されてしまい、顧客は昔からの顔なじみのご近所さんだけです。<br />
                                                それでも何とか生活できる収入があり、50年間愛してくれているご近所さんに感謝しています。ある日、当店の命である大事な顧客帳が突然棚から消えてしまったのです。<br />
                                                顧客からエアコン故障の修理依頼が来ても、お客さんの住所が分からずに大変困っています。思い当たるのは先月退職した40代の元従業員です。彼が退職後、顧客帳が消えました。<br />
                                                そこで、元従業員が当店の顧客帳を持ち出して盗んだかどうか確かめてもらい、事実であれば反省して戻してもらいたいので、素行調査をお願いします。</dd>
                                            </dl>
                                            <dl className="content cb">
                                            <dt>調査内容</dt>
                                            <dd>従業員は5名、先月退職した元従業員の行動に手掛かりがありそうです。すぐに調査チームを結成して、元従業員の居場所、顧客帳の行方を特定すべく、調査に乗り出します。</dd>
                                            </dl>
                                            <dl className="content">
                                            <dt>調査結果</dt>
                                            <dd>先月退職した40代の元従業員は駅近くの家電量販店に勤めており、パソコン売り場にて販売員をしています。愛想がよく人当たりは良いと評判ですが、驚きの事実が発覚。<br />
                                                スタッフの聞き込みによれば、現在の職場でも大事な書類が紛失し、社内で捜索中だと分かりました。対象者は周囲の人に将来、オンラインショップを立ち上げると話しているそうです。<br />
                                                今の仕事を辞めたらオンラインショップでパソコン販売をする計画があるようなので、顧客帳を持っている可能性が高いです。</dd>
                                            </dl>
                                            <div className="comment">
                                            <div className="requester sec">
                                                <dl>
                                                <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                <dd>
                                                    <p className="b">依頼者様からのコメント</p>
                                                    <p className="nm">今回は素早い調査をありがとうございます。元従業員の元に行き話をしました。後日、元従業員が店に来て、顧客帳を持って菓子折りと一緒に反省の手紙を渡されました。無事に帰ってきて良かったです！！</p>
                                                </dd>
                                                </dl>
                                            </div>
                                            <div className="chu sec">
                                                <dl>
                                                <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">お店の命とも言える顧客データが帰ってきて本当に良かったです。スタッフ一同、ホッとしております。</p>
                                                </dd>
                                                </dl>
                                            </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                
                                </div></div></div>
                            <div id="case03" className="pad_anchor"><div className="box"><div className="bg">
                                <div className="head">
                                    <p className="case serif">case03</p>
                                    <input id="case-check3" className="case-check3" type="checkbox" />
                                    <label className="case-label" htmlFor="case-check3">復縁を迫る元交際相手がストーカー化して嫌がらせ行為が深刻に…！調査で発覚した驚きの行動<br />
                                    <span>嫌がらせの事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito">
                                            <span>依頼者：会社員／事務職／29歳</span>
                                            <span className="target">対象者：元交際相手の男／31歳</span>
                                            </div>
                                            <p className="img"><img src="../../img/okayama/jirei/img03.jpg" alt="" /></p>
                                            <dl className="content">
                                            <dt>依頼内容</dt>
                                            <dd>岡山県内のワンルームマンションで一人暮らしをしています。2年交際した元カレから悪質な嫌がらせを受けて相談しました。当初は復縁を迫ってきてしつこいLINEメッセージが止まらず。<br />
                                                私が仕事から帰宅する18時頃になると、最寄り駅や自宅マンションの玄関でスマホを片手に待ち伏せするようになり、段々怖くなり、LINEの返信もやめました。
                                                その後、元カレは狂ったようにストーカー行為が激しくなり、私の職場に電話をかけたり、SNSのアカウントを突き止められたのです。<br />
                                                一人暮らしで誰にも相談できず、夜がとてもコワイので、岡山で嫌がらせ調査に定評のある中央リサーチさんに依頼することにしました。</dd>
                                            </dl>
                                            <dl className="content cb">
                                            <dt>調査内容</dt>
                                            <dd>ご依頼者様は恐怖に怯えながらも、カウンセラーと話すうちに落ち着きを取り戻されて、相手の基本情報や被害の状況を詳しく説明して頂きました。<br />
                                                犯人の名前や住居、職場などの基本情報を予め把握できましたので、調査チームは効率よく、素早く行動し、尾行と張り込みの他、盗聴・盗撮の調査も開始しました。</dd>
                                            </dl>
                                            <dl className="content">
                                            <dt>調査結果</dt>
                                            <dd>調査チームのリサーチによれば、犯人は元交際相手の会社員の男。ご依頼者様の行動をすべて把握しており、常に付きまとい、会社に電話をして風評被害、SNS上での嫌がらせも確認できました。<br />
                                                ご依頼者様のSNSアカウントにログインして、ストーカー行為中に撮影した画像や動画を投稿するという非常に悪質な行為も発覚し、どれも精神的苦痛を受ける嫌がらせ行為です。<br />
                                                元交際相手によるストーカー行為、嫌がらせは早急に解決しないとエスカレートすることが多いので、早期に警察署へ行き相談し、証拠を提出して対処することをアドバイスしました。</dd>
                                            </dl>
                                            <div className="comment">
                                            <div className="requester sec">
                                                <dl>
                                                <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                <dd>
                                                    <p className="b">依頼者様からのコメント</p>
                                                    <p className="nm">SNSを乗っ取られたのは分かっていましたが、私が通勤している姿、コンビニで買い物している姿の画像を投稿されていると分かり、非常に腹が立ち、リベンジに燃えています！！<br />
                                                    つい先日、警察署に証拠写真を持って相談したところ、事件とみなされて動いてもらえるようです。本当に中央リサーチさんには感謝しかありません。ありがとうございます。</p>
                                                </dd>
                                                </dl>
                                            </div>
                                            <div className="chu sec">
                                                <dl>
                                                <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">何者かに嫌がらせやストーカー行為、盗聴・盗撮などを受けてお困りの方は、探偵社による専門の調査を行い、証拠を獲得することで解決策になります。</p>
                                                </dd>
                                                </dl>
                                            </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                
                                </div></div></div>
                            <div id="case04" className="pad_anchor"><div className="box"><div className="bg">
                                <div className="head">
                                    <p className="case serif">case04</p>
                                    
                                    <input id="case-check4" className="case-check4" type="checkbox" />
                                    <label className="case-label" htmlFor="case-check4">フィリピンパブで知り合った30代の女性と幸せになりたい！念の為に結婚調査をお願いします。<br />
                                    <span>結婚調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito">
                                            <span>依頼者：製造業社員／64歳</span>
                                            <span className="target">対象者：フィリピンパブのホステス／32歳</span>
                                            </div>
                                            <p className="img"><img src="../../img/okayama/jirei/img04.jpg" alt="" /></p>
                                            <dl className="content">
                                            <dt>依頼内容</dt>
                                            <dd>フィリピンパブで知り合った女性に本気で恋をし、お付き合いして1年半。彼女は歌の才能があり、洋楽からフィリピンの名曲など、気持ちを込めて歌うことができる素敵な女性です。<br />
                                                仕事のお昼休憩の時、会社の同僚に「フィリピン人女性と結婚することになった」というと、「絶対に辞めたほうがいい」、「狂っている」と猛反対されてかなり落ち込みました。<br />
                                                私の両親は85歳の高齢ですから「64歳で初婚なんて…」とからかわれ、60歳の妹は「嫁の歳が私の半分か」とブツブツ言われて、誰も真剣に祝ってくれない状況です。<br />
                                                確かに私も彼女の性格と顔、源氏名しか分からず、本名もわかりませんので気持ちが先走っている状態です。籍を入れる前に探偵の方に調べていただきたいと思います。</dd>
                                            </dl>
                                            <dl className="content cb">
                                            <dt>調査内容</dt>
                                            <dd>ご依頼者様が婚約者であるフィリピン人女性の分かっていることは、源氏名の「ジェニファー」、年齢は32歳、という情報だけでした。籍を入れる前に深く本人の実態を調査していきます。</dd>
                                            </dl>
                                            <dl className="content">
                                            <dt>調査結果</dt>
                                            <dd>対象者は来日して3年と話をしていますが、聞き込み調査によれば9年目になるそうです。そうなると年齢の詐称も考えられ、調べていくと実年齢は43歳。10歳のサバ読みでした。<br />
                                                フィリピンで一度結婚・離婚歴があり、一人息子がいましたが内科系の病気で亡くなられています。夢はアメリカで歌手になること。そのために日本国籍を取りたいとの事でした。<br />
                                                日本での経歴は新宿のフィリピンパブで2年、その後、池袋のフィリピンパブで3年半、その後広島県から岡山県の店に移り、フィリピンパブを転々として生活していると分かりました。</dd>
                                            </dl>
                                            <div className="comment">
                                            <div className="requester sec">
                                                <dl>
                                                <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                <dd>
                                                    <p className="b">依頼者様からのコメント</p>
                                                    <p className="nm">詳細を調べていただいてありがとうございます。彼女が日本に9年も居たなんて知りませんでした。日本に来たばかりと聞いていたのですっかり信じていました。<br />
                                                    フィリピンで結婚・離婚していた事実も初めて知り、色々と彼女のことが分かって良かったです。私は彼女を深く愛しており、運命を感じていますので、安心して結婚に踏み切ります！</p>
                                                </dd>
                                                </dl>
                                            </div>
                                            <div className="chu sec">
                                                <dl>
                                                <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">お二人が幸せな結婚生活を送られることを祈っております。結婚相手について調べてみたいことがある方は、中央リサーチまで一度ご相談くださいませ。</p>
                                                </dd>
                                                </dl>
                                            </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                
                                </div></div></div>
                            <div id="case05" className="pad_anchor"><div className="box"><div className="bg">
                                <div className="head">
                                    <p className="case serif">case05</p>
                                    
                                    <input id="case-check5" className="case-check5" type="checkbox" />
                                    <label className="case-label" htmlFor="case-check5">社会人2年目の息子が急に家を飛び出した理由は？家出調査で分かった真相<br />
                                    <span>家出調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito">
                                            <span>依頼者：息子の母親／57歳</span>
                                            <span className="target">対象者：同居する社会人2年目の息子</span>
                                            </div>
                                            <p className="img"><img src="../../img/okayama/jirei/img05.jpg" alt="" /></p>
                                            <dl className="content">
                                            <dt>依頼内容</dt>
                                            <dd>社会人2年目になる息子と住んでいる母親です。父は病気で他界して息子と二人暮らしです。最近、息子の様子が変というか元気がないと思っていたら、急にリュック一つで家出しました。<br />
                                                はじめはそのうち帰ってくるだろうと思っていたのですが、1ヶ月LINEの返信がなく、帰って来る気配がなく、会社に連絡したら出社していないと聞き、驚いて探偵社に駆け込みました。<br />
                                                息子はどこで何をやっているのか、少し元気がない様子だったので自死や事件に巻き込まれるリスクがあると考えると眠れなくなり、調査を依頼しました。</dd>
                                            </dl>
                                            <dl className="content cb">
                                            <dt>調査内容</dt>
                                            <dd>息子さんは人見知りするタイプで休みの日も家に籠もってネットをやっていることが多く、運転免許はあるが車の運転はほとんどしない、という情報だけを頼りに聞込み張り込み等にて調査を開始します。</dd>
                                            </dl>
                                            <dl className="content">
                                            <dt>調査結果</dt>
                                            <dd>会社の同僚へ聞き込み調査をしたところ、「近いうちに退職する」と話していたそうですが、まだ実際には退職しておらず、無断欠勤ではなく、有給休暇を使っていると判明。<br />
                                                会社にはリフレッシュ休暇と説明しているようですが、息子さんのSNSアカウントを調査するとアニメ同好会の会長を務めていることが分かり、その関係で失踪したと考えられます。<br />
                                                SNSアカウントで行動を追跡すると、アニメ同好会のオフラインイベントを開催するために運営者がホテルに集まって企画されていると分かり、現場に行ってみると息子さんを発見。<br />
                                                事件性や事故の可能性はなく、趣味のために家を出て泊まり込みで真剣にイベントの計画をされている様子でしたので、ご依頼者様のお母様に報告いたしました。</dd>
                                            </dl>
                                            <div className="comment">
                                            <div className="requester sec">
                                                <dl>
                                                <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                <dd>
                                                    <p className="b">依頼者様からのコメント</p>
                                                    <p className="nm">
                                                    息子がアニメ同好会のために一ヶ月家に帰らなかったと分かり、唖然としました。ホッとしましたが、呆れて開いた口が塞がりません。<br />
                                                    「なぜ、ひとこと言わなかったの？」と問い詰めると私は口が軽いから、会社に休んだ言い訳を告げ口されるのを恐れていたらしいです。調査員の方に心配かけて申し訳ありません。</p>
                                                </dd>
                                                </dl>
                                            </div>
                                            <div className="chu sec">
                                                <dl>
                                                <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">
                                                    息子さんが無事でいてくださって本当に良かったです。最近は、オンラインとオフラインの世界を上手く生き抜いている若者が多いですからね。お困りの際はご相談してください。</p>
                                                </dd>
                                                </dl>
                                            </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                
                                </div></div></div>
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
            title2="当探偵社へのご相談事例｜総合探偵社中央リサーチ岡山"
            description="岡山の探偵社「中央リサーチ岡山」、事例紹介についての説明ページです。"
            keyword="ご相談事例,探偵,岡山,問合せ,中央リサーチ岡山"
            />
    </>
  )
export default jirei
