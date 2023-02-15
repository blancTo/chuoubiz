import React from 'react'

import { StaticImage } from "gatsby-plugin-image"

import Seo from '../../components/SEO'
import Layout from '../../components/Layout'
import SubpageTitle from '../../components/SubpageTitle'
import Breadcrumb from '../../components/breadcrumb'
import HeaderEhime from '../../components/HeaderEhime'
import FooterEhime from '../../components/FooterEhime'
import SubmenuEhime from '../../components/SubmenuEhime'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const jirei = () => {
    const pagemeta = {
        title:`調査事例`,
        slug:`jirei`        
    }
    return (
        <>
        <Seo
                title2="当探偵社へのご相談事例｜総合探偵社中央リサーチ愛媛"
                description="愛媛の探偵社「中央リサーチ愛媛」、事例紹介についての説明ページです。"
                keyword="ご相談事例,探偵,愛媛,問合せ,中央リサーチ愛媛"
                />
                <div id="wrap">
                    <HeaderEhime h1title="調査事例について" pagetitle="松山市民病院前にある探偵事務所" />
                    <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
                    <SubmenuEhime />
                    <Breadcrumb subtitle={pagemeta.title} />
                    <Layout>
                        <div id={pagemeta.slug} className="main">
                        
                            <div className="investigation_case pb">
                                <h3 className="line2 mp bg_wide"><span>調査事例</span></h3>
                                <h4 className="cen">これまでに当社で行った調査事例をご紹介します。調査を検討される際の参考にしてください。</h4>
                                <div id="case01" className="pad_anchor"><div className="box"><div className="bg">
                                    <div className="head">
                                        <p className="case serif">case01</p>
                                        <input id="case-check1" class="case-check1" type="checkbox" />
                                        <label class="case-label" for="case-check1">お料理教室に通っているはずの妻が向かった行き先とは…20代新妻の大胆行動に驚き！<br />
                                        <span>浮気調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                        <div className="info">
                                        <div className="hito">
                                        <span>依頼者：夫／34歳</span>
                                        <span className="target">対象者：妻／27歳</span>
                                        </div>
                                        <p className="img"><StaticImage src="../../img/ehime/jirei/img01.jpg" alt="" /></p>
                                        <dl className="content">
                                        <dt>依頼内容</dt>
                                        <dd>結婚して1年目の夫婦です。20代の妻が「料理のレパートリーを増やしたい」と言い、週に2回お料理教室に通い始めました。<br />
                                            インスタに料理写真を投稿したり、和食や洋食が得意になって自宅でも習った料理を作ってくれるので、喜んでいました。<br />
                                            しかし、1ヶ月位前から様子がおかしく、お料理教室に行くはずなのにミニスカートやキャミソールなど肌の露出が多いので「もう少し控えめな格好で行けば？」と言ったら、無視されました。<br />
                                            その後は、機嫌が悪くなり、帰りが夜中の2時になったり、電話で誰かと話すためにベランダへ出てコソコソしたり、非常に行動が怪しくなりました。極めつけは夜の生活が途絶えた事です。<br />
                                            妻は私に触れられたくないといった感じで、同じベッドで寝ているのに端っこの方まで離れて会話もなく、浮気でもしているのか…と思うと苦しいので、浮気調査をお願いしました。
                                        </dd>
                                        </dl>
                                        <dl className="content cb">
                                        <dt>調査内容</dt>
                                        <dd>ご主人さまは新婚生活なのに辛いです…と肩を落とされていました。習い事からの帰宅時間が遅い、夫婦の会話が少ない、露出の高い服で外出することが多くなった奥様の真実とは…。<br />
                                            まずは浮気の事実があるのか、あるとすればどこの誰が相手で何をしているのか、知り合った場所や交際期間など含めて、早急な解決をすべくチームを組んで調査に乗り出します。
                                        </dd>
                                        </dl>
                                        <dl className="content">
                                        <dt>調査結果</dt>
                                        <dd>対象者がお料理教室に通う火曜日と金曜日に調査を実施。自宅を14時に出て、服装は黄色のTシャツに白のショートパンツ、ミュールという夏の装い。特別派手な様子はありません。<br />
                                            自宅マンションから駅に向かって歩き、隣駅で下車。そこには20代と見られる男性が立っていて、奥様は近づくと「お待たせ！」と周りに響き渡るほどの元気な声で挨拶をして二人はデートをしていました。<br />
                                            お料理教室に行くというのは真っ赤な嘘でした。1ヶ月で退会したことが判明。相手の男性は同じ高校の同級生と飲み会をした際に連絡先を交換して、付き合いが始まったようです。<br />
                                            お互いに既婚者なのでW不倫です。見た目は20代の普通のカップルですがお互いに既婚者の身でありながら、週2回ペースでデートをしていると分かりました。<br />
                                            調査日1日目は日中デートをし、夜は居酒屋へ行った後に慣れた様子でラブホテルへ…。<br />
                                            調査日2日目と3日目もデート後も同じラブホテルへ行くというお決まりのパターン。調査報告書に証拠を添付してご依頼者様に提出しました。
                                        </dd>
                                        </dl>
                                        <div className="comment">
                                        <div className="requester sec">
                                            <dl>
                                            <dt><StaticImage src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                            <dd>
                                                <p className="b">依頼者様からのコメント</p>
                                                <p className="nm">お世話になりました。ある程度は予想範囲内でしたが、実際に証拠を見ると精神的にキツイですね。新婚ですがとても後悔しています。夫婦で話し合って今後について話し合います。</p>
                                            </dd>
                                            </dl>
                                        </div>
                                        <div className="chu sec">
                                            <dl>
                                            <dt><StaticImage src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                            <dd>
                                                <p className="b">中央リサーチから一言</p>
                                                <p className="nm">ご主人様の辛いお気持ちを察します。浮気の証拠はご自身が被害者である証拠になりますので今後の将来のためにお役立て頂ければ幸いです。</p>
                                            </dd>
                                            </dl>
                                        </div>
                                        </div>
                                    </div>

                                        </div>
                                    </div>
                                    
                                    </div></div></div>

                                <div id="case02" className="pad_anchor"><div className="box"><div className="bg">
                                    <div className="head">
                                        <p className="case serif">case02</p>
                                        <input id="case-check2" class="case-check2" type="checkbox" />
                                        <label class="case-label" for="case-check2">試食販売のスタッフが大量万引き犯だった？！素行調査で分かった衝撃の事実<br />
                                        <span>素行調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                <span>依頼者：地元の小規模スーパー経営者／男性／67歳</span>
                                                <span className="target">対象者：大量万引き犯</span>
                                                </div>
                                                <p className="img"><StaticImage src="../../img/ehime/jirei/img02.jpg" alt="" /></p>
                                                <dl className="content">
                                                <dt>依頼内容</dt>
                                                <dd>県内の小さな商店街で小規模のスーパーを経営しています。生鮮食品と日用品などを取り揃えており、お客様はほとんど地元住民です。最近、不気味な現象が起きて困っています。<br />
                                                    それはお菓子や菓子パン、ヨーグルト、はちみつなど大量の食料品がごっそりと無くなっているのです。大量の万引き犯がいると思い、防犯カメラを見ても誰も気配がありません。<br />
                                                    1ヶ月に1回くらいのペースで大量の商品を盗まれているので困っています。犯人が分からず不気味ですので素行調査をお願いしたいと思います。
                                                </dd>
                                                </dl>
                                                <dl className="content cb">
                                                <dt>調査内容</dt>
                                                <dd>ご依頼者様に防犯カメラを見せていただいたところ、本当に犯人らしき人物は見当たりませんでした。被害総額は大きいですので早急に解決すべくカメラを設置して犯人を突き止めます。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>調査結果</dt>
                                                <dd>従業員は正社員とバイトを含めて全員で9名、すべての従業員に怪しい行動はありませんでしたが、月に1回試食販売で来る派遣社員の怪しい行動を隠しカメラがキャッチしました。<br />
                                                    それは、試食販売のテーブルの下に大きな入れ物があり、試食販売の派遣社員（50代女性）がスーパーの商品をかごに入れるとそのまま、テーブルの下に隠したのです。
                                                    就業時間になるとその女性はかごに入れた食料品を自分のバッグに移し替えて、店長とスタッフに「お疲れさまでした！」と一言いい、盗んだ商品を自宅へ持ち帰ってしまったのでした。
                                                </dd>
                                                </dl>
                                                <div className="comment">
                                                <div className="requester sec">
                                                    <dl>
                                                    <dt><StaticImage src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                    <dd>
                                                        <p className="b">依頼者様からのコメント</p>
                                                        <p className="nm">今回はこんなにも早く犯人を特定して頂き本当に感謝しています。大量万引き犯は試食販売に来ている派遣社員だったなんて想像もできませんでした！店がヒマな日も盗まれたので納得です。本当にプロの調査に脱帽しました。派遣会社に電話をして適切に対処してもらいます。</p>
                                                    </dd>
                                                    </dl>
                                                </div>
                                                <div className="chu sec">
                                                    <dl>
                                                    <dt><StaticImage src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                    <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">繰り返す万引き犯が派遣社員の仕業とは我々スタッフも驚いています。事実が分かりましたので今後の対策にお役立て頂ければ幸いです。</p>
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
                                        <input id="case-check3" class="case-check3" type="checkbox" />
                                        <label class="case-label" for="case-check3">自宅のポストにあった謎の怪文書が不気味…。嫌がらせ調査でわかった意外な犯人とは？<br />
                                        <span>嫌がらせの事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                        <div className="info">
                                        <div className="hito">
                                        <span>依頼者：英会話スクール経営者／42歳</span>
                                        <span className="target">対象者：不明</span>
                                        </div>
                                        <p className="img"><StaticImage src="../../img/ehime/jirei/img03.jpg" alt="" /></p>
                                        <dl className="content">
                                        <dt>依頼内容</dt>
                                        <dd>夫と小学1年生の娘と3人暮らしです。最近、自宅マンションのポストに怪文書が届くようになりました。1回目は切手なしだったので、犯人は私の住所を知っている人物だと思います。<br />
                                            定規で書かれた不気味な文章で「あなたの英会話スクールは潰れます」といった内容でした。私は自宅の一室でマンツーマンの英会話レッスンをしています。開講してまだ3ヶ月目です。<br />
                                            生徒さんは7名で、今までに辞めた人もいませんし、一体誰が何の目的で嫌がらせをしているのか分からず、早く特定したい思いで探偵社に依頼することにしました。
                                        </dd>
                                        </dl>
                                        <dl className="content cb">
                                        <dt>調査内容</dt>
                                        <dd>カウンセリングで怪文書を拝見したところ、1通目は手投稿、2回目と3回目は切手がある郵便物でした。ご依頼者様のおっしゃる通り、住所や名前、職業を知っている身近な人物による犯行と見て良いでしょう。早急に解決するために張り込みやネット調査も同時に開始します。</dd>
                                        </dl>
                                        <dl className="content">
                                        <dt>調査結果</dt>
                                        <dd>調査日2日目に不審なセダン車が停車し、40代くらいの女性が封筒を手に持ち、ご依頼者様のポストに投函したのを確認。その犯人とは、開業を支援するコーディネーターでした。<br />
                                            ご依頼者様は英会話教室として独立開業するために、その女性コーディネーターのセミナーに参加して生徒として1年間学ばれて晴れて独立。SNSでも活躍されて起動に乗っています。<br />
                                            女性コーディネーターは県内のマンションに単身で住んでおり、オンラインで女性に独立開業の支援をしていますが、コロナ禍により生徒数が減って収益が落ち込んでいる様でした。<br />
                                            自分の元生徒であるご依頼者様のビジネスが想像以上に上手くいっており、嫉妬して嫌がらせ行為に及んだと考えられます。<br />
                                            不気味な怪文書は精神的なダメージと営業妨害になりますので、警察に被害届を出すことをアドバイスしました。
                                        </dd>
                                        </dl>
                                        <div className="comment">
                                        <div className="requester sec">
                                            <dl>
                                            <dt><StaticImage src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                            <dd>
                                                <p className="b">依頼者様からのコメント</p>
                                                <p className="nm">調査報告書を見て驚いて倒れそうになりました。今でも信じられませんし、信じたくない気持ちです。いつもメールや電話をして話をする師匠でしたので世の中がおかしく見えています。<br />
                                                中央リサーチさんのリサーチ力には脱帽です。初めての利用でしたが、素早く正確なご対応に満足しています。これで警察に相談できます。ありがとうございました。
                                                </p>
                                            </dd>
                                            </dl>
                                        </div>
                                        <div className="chu sec">
                                            <dl>
                                            <dt><StaticImage src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                            <dd>
                                                <p className="b">中央リサーチから一言</p>
                                                <p className="nm">悪質な嫌がらせ行為は見知らぬ人だけでなく、意外な身近な人物だったというケースはよくあります。エスカレートする前に中央リサーチまで一度、お気軽にご相談ください。</p>
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
                                        <input id="case-check4" class="case-check4" type="checkbox" />
                                        <label class="case-label" for="case-check4">昼間は仕事をせずにパチンコ三昧？！婚約者を結婚調査したら驚いた．．．<br />
                                        <span>結婚調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                        <div className="info">
                                        <div className="hito">
                                        <span>依頼者：派遣社員女性／38歳</span>
                                        <span className="target">対象者：貿易会社勤務の婚約者／43歳</span>
                                        </div>
                                        <p className="img"><StaticImage src="../../img/ehime/jirei/img04.jpg" alt="" /></p>
                                        <dl className="content">
                                        <dt>依頼内容</dt>
                                        <dd>婚活サイトで知り合った男性とお付き合いをして半年。私は早く子供が欲しくて、いい人がいればすぐにでも結婚したいと思っています。婚約者も家庭を欲しいと望んでいて意気投合。<br />
                                            趣味はサッカー観戦、仕事は輸入・輸出の貿易会社勤務と聞いていますが、デート中に仕事の話をしないので本当に仕事をしているのか、少し不安になりました。<br />
                                            昼間のごはん休憩にLINEをするとすぐに返ってきて、残業もないようです。私の仕事が終わると駅で待っていて優しいのですが、昼間の様子が分からず困っています。<br />
                                            そこで、私の家族や友人に紹介する前に婚約者のことを調べてほしいと思い、結婚調査を依頼することにしました。
                                        </dd>
                                        </dl>
                                        <dl className="content cb">
                                        <dt>調査内容</dt>
                                        <dd>ご依頼者様は婚約者のことを信じており、結婚するつもりでいますが、念の為に仕事や経歴、家族関係などの基本情報を知りたいとご依頼されました。早速、結婚調査を開始します。</dd>
                                        </dl>
                                        <dl className="content">
                                        <dt>調査結果</dt>
                                        <dd>対象者の自宅アパート付近で張り込みをすると、朝と昼間は外出せず、１４時頃になってコンビニでおにぎりを購入し、自転車に乗りながら口に頬張ると行き先はパチンコ店でした。<br />
                                            調査3日間、平日と週末のいずれもパチンコ三昧の生活で仕事には就いていません。周辺の聞き込みによれば、おそらく数年間はパチンコで生活していると考えられます。<br />
                                            しかし、借金や風俗通いなどのクセはなく、定職が見つからないタイプです。都内の専門学校を卒業後、地元愛媛に戻り、一旦は貿易会社に務めましたが7ヶ月で退社。<br />
                                            その後は、フリーターをしており、バーテンダーになろうと意気込んだ時期もありましたが、それも1年半余りで辞めており、結局ずっとパチンコで生計を立てているようです。<br />
                                            ご両親はおふたりとも健在で県内の実家におり、兄弟は兄が一人、弟が一人、妹が一人いて、定職がない以外は大きな問題は見当たりませんでした。
                                        </dd>
                                        </dl>
                                        <div className="comment">
                                        <div className="requester sec">
                                            <dl>
                                            <dt><StaticImage src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                            <dd>
                                                <p className="b">依頼者様からのコメント</p>
                                                <p className="nm">婚約者が仕事をしていない事実を知り、ショックです。しかも、何年も仕事をしていない、気にしていないとは…。結婚して子供ができたら私が一家の大黒柱になる運命だったのか…。<br />
                                                調査報告書をみながら、結婚を考え直す方向になりそうです。今回はありがとうございました。
                                                </p>
                                            </dd>
                                            </dl>
                                        </div>
                                        <div className="chu sec">
                                            <dl>
                                            <dt><StaticImage src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                            <dd>
                                                <p className="b">中央リサーチから一言</p>
                                                <p className="nm">婚約者の実態は意外と結婚後に分かることが多く、「結婚調査をしておけばよかった！」というお声をよく聞きます。今回は早めに事実が分かって良かったです。</p>
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
                                        <input id="case-check5" class="case-check5" type="checkbox" />
                                        <label class="case-label" for="case-check5">高校生の娘が家庭教師のレッスン後に消息を断った？！どこで何をやっているのか？？<br />
                                        <span>家出調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                        <div className="info">
                                        <div className="hito">
                                        <span>依頼者：女子高生のご両親／40代</span>
                                        <span className="target">対象者：高校3年生女子／17歳</span>
                                        </div>
                                        <p className="img"><StaticImage src="../../img/ehime/jirei/img05.jpg" alt="" /></p>
                                        <dl className="content">
                                        <dt>依頼内容</dt>
                                        <dd>大学受験を控えている高3の娘がいます。週3回、学習塾に通い、塾の授業についていくために家庭教師も付けています。現役で国公立大学に絶対に合格すると意気込んでいます。<br />
                                            ある日、いつも通りに夕食後、家庭教師に来てもらっていたのですが、レッスン中に窓から二人がいなくなりました。嘘のような本当の話です。SNSを見ると「二人で逃げた」という宣言を発見！！<br />
                                            私は驚いて夫に電話をして、直ぐに警察に電話をしたのですが、そのうち帰ってくるかもしれないと言われて動いてもらえず…。家庭教師センターも曖昧な対応で、娘は学校も休み、居場所が分からずに本当に困っているので家出調査を探偵社に相談しました。
                                        </dd>
                                        </dl>
                                        <dl className="content cb">
                                        <dt>調査内容</dt>
                                        <dd>娘さんは勉強部屋から居なくなっており、一緒にいた大学生の男性家庭教師も同時に居なくなっていますので、二人は一緒にいる可能性が高いです。SNSでも近況を把握できます。<br />
                                            二人の周辺の人に聞き込み調査をしながら、娘さんの居場所を早急に突き止めます。
                                        </dd>
                                        </dl>
                                        <dl className="content">
                                        <dt>調査結果</dt>
                                        <dd>娘さんのソフトテニス部の同級生に聞き込みしたところ、「家庭教師の大学生を好きになった」と言い、スマホに二人で撮影した写真が多くあり、学校で人に見せていたそうです。<br />
                                            大学生の同級生も「教え子の高校生と付き合うかもしれない」と話していたそうで、二人はお付き合いをしている可能性が高いと判断できます。<br />
                                            年齢差は1歳だけなので気が合って、恋仲になった可能性が考えられますが、あくまでも教師と生徒の関係ですので居場所が分かり次第、しっかり二人と話し合いをすべきだと考えます。<br />
                                            調査1日目が終わると、娘さんは何事もなかったように自宅に帰ってきたそうです。まずは無事で良かったです。</dd>
                                        </dl>
                                        <div className="comment">
                                        <div className="requester sec">
                                            <dl>
                                            <dt><StaticImage src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                            <dd>
                                                <p className="b">依頼者様からのコメント</p>
                                                <p className="nm">
                                                今回は早急に調査を進めてくださり、ありがとうございました。娘は無事でした。本人は大変反省しており、家庭教師の大学生は解雇されて、新しい女性教師に変わりました。</p>
                                            </dd>
                                            </dl>
                                        </div>
                                        <div className="chu sec">
                                            <dl>
                                            <dt><StaticImage src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                            <dd>
                                                <p className="b">中央リサーチから一言</p>
                                                <p className="nm">
                                                今回は娘さんが無事に帰宅されたと聞いてホッと致しました。多感な時期ですから、ストレスや突発的な行動もあるでしょう。大学受験が合格しますように祈っております。</p>
                                            </dd>
                                            </dl>
                                        </div>
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                    
                                    </div></div></div>
                            </div>
                            
                            {/*div class="bg_blue bg_wide pt pb">
                                            <div class="wrap">
                                                <p class="cen_pc txt nm"><b class="blue">中央リサーチに調査をご依頼いただいたお客様からの感想の一部をご紹介致します。</b><br>
                                                    当社にご依頼いただいたお客様の問題解決の力になれたことを誇りに思い、<br>
                                                    今後ともお客様からの喜びの声をいただけるよう頑張ってまいりたいと思います。</p>
                                                <p class="img nm"><img src="../img/jirei/woman.png" alt=""></p>
                                            </div>
                                            <div class="bg_dia">
                                                <dl class="plan">
                                                    <dt><span class="mp">浮気・不倫調査</span><a href="../fickleness.html">浮気・不倫調査について詳しくはこちら &raquo;</a></dt>
                                                    <dd>
                                                        <p class="txt">夫は残業と言いながら帰宅が遅い日々が続いていました。何かあるかも？と、夫の携帯を見たら浮気相手と思われる女性とのメールを見ました。<br>
                                                            話し合う為にも動かぬ証拠と浮気相手がどんな人物か知りたい。</p>
                                                        <div class="bg_gray">
                                                            <p class="nm">浮気する可能性の高い給料日後や、残業が多い日等の行動予測をしていただき、わずかな調査時間で浮気の証拠と相手女性の帰宅先が判明しました。<br>
                                                                その後、相手女性の人物性までもはっきり分かり、問題解決に向けて一気に加速できました。<br>
                                                                無駄な調査費用もかからず、調査費用も低料金に抑えていただき、本当に感謝しております。</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                                <dl class="plan">
                                                    <dt><span class="mp">素行調査</span><a href="../behavior.html">素行調査について詳しくはこちら &raquo;</a></dt>
                                                    <dd>
                                                        <p class="txt">厳しい時代の中、営業社員の業績が上がらないことで、悩んでいました。このままでは会社が倒産してしまうという不安がよぎり、思い切って相談してみました。</p>
                                                        <div class="bg_gray">
                                                            <p class="nm">相談員の適正なアドバイスから、従業員の勤務時間中の行動を確認した結果、まったく仕事をしていないことが判明しました。証拠が有ることで、トラブルなく、この営業社員を解雇することが出来ました。早く事実確認でき、意欲のない営業社員が居なくなることで職場の雰囲気も良くなりました。</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                                <dl class="plan">
                                                    <dt><span class="mp">浮気・不倫調査</span><a href="../fickleness.html">浮気・不倫調査について詳しくはこちら &raquo;</a></dt>
                                                    <dd>
                                                        <p class="txt">夫が急に離婚しようと言い出し、その原因はと問いただすと、こちらばかり責められます。もしかして愛人がいるのでは？と疑問だったのです。</p>
                                                        <div class="bg_gray">
                                                            <p class="nm">的確なアドバイスを頂き、行動調査を依頼した結果、離婚に係わる浮気の動かぬ証拠が撮れました。有能な弁護士さんも紹介され、おかげで慰謝料、親権、養育費等について、有利に進めることが出来ました。これからは気持ちを切り替えて、一からがんばります。</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                                <dl class="plan">
                                                    <dt><span class="mp">家出・所在調査</span><a href="../whereabouts.html">家出・所在調査について詳しくはこちら &raquo;</a></dt>
                                                    <dd>
                                                        <p class="txt">娘が家出をしてしまい、眠れない日々を過ごしています。今、何処で何をしているのか、気になります。</p>
                                                        <div class="bg_gray">
                                                            <p class="nm">どうしてもっと早く相談しなかったのかと思います。私たちだけではどう対応していいのかわかりませんでしたが、探偵さんの的確な調査により、探し出すことができました。この先やらなければならないことを一からやり直すつもりで、娘共々頑張っていきたいと思っています。</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                                <dl class="plan">
                                                    <dt><span class="mp">浮気・不倫調査</span><a href="../fickleness.html">浮気・不倫調査について詳しくはこちら &raquo;</a></dt>
                                                    <dd>
                                                        <p class="txt">交際相手には女性の影が？「いま付き合っている相手と別れた方がよいのか？」と悩んでいます。しかし自分が別れを持ち出すはっきりとした判断材料がありません。<br>
                                                            自分の気持ちに、ふん切りを付けるためにも事実関係を確認したいのです。</p>
                                                        <div class="bg_gray">
                                                            <p class="nm">相談員のアドバイスで数日間、交際相手と会わないようにして、彼の休日を中心に素行を確認してもらいました。その結果、別の女性との交際が発覚したのです。<br>
                                                                このままだとズルズル交際を続けて、自分の婚期まで失うところでした。はっきりした事実が解かり自分にも心のけじめを付ける事ができました。</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                                <dl class="plan">
                                                    <dt><span class="mp">素行調査</span><a href="../behavior.html">素行調査について詳しくはこちら &raquo;</a></dt>
                                                    <dd>
                                                        <p class="txt">離婚した元妻とは、定期的に連絡をとって子どもの近況報告は受けています。実際に会うことで子どもが迷ってはいけませんので、会う勇気もありません。<br>
                                                            しかし、「元妻の報告内容は本当なのか？」「虐待を受けていないか？」「学校でいじめられていないか？」「元気に学校へ通っているか？」等、気になります。<br>
                                                            子供の父には変わりないのです。離婚したと言えども心配です。</p>
                                                        <div class="bg_gray">
                                                            <p class="nm">元妻の現住所はあらかじめ聞いていましたので、その情報をもとに、子どもの生活実態（虐待・いじめの有無、健康面等）を確認していただきました。<br>
                                                                毎日きちんと決まった時間に、笑顔で通学する我が子の姿を確認でき、また、虐待やいじめの事実もなかったと聞き、安堵の涙が堪えられませんでした。お願いして本当によかったと思っております。</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div*/}


                        </div>
                    </Layout>
                </div>
                <FooterEhime />
        </>
    )
}

export default jirei
