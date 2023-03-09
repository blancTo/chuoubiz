import React from 'react'

import Seo from '../../components/SEO'
import HeaderYamaguchi from '../../components/HeaderYamaguchi'
import FooterYamaguchi from '../../components/FooterYamaguchi'
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
                <HeaderYamaguchi h1title="調査事例について" pagetitle="JR徳山駅前にある探偵事務所" />
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
                                        <label className="case-label" htmlFor="case-check1">浮気を繰り返す夫に証拠を突き付けて今度こそ反省させたい！<br />
                                        <span>浮気調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                        <div className="info">
                                        <div className="hito">
                                        <span>依頼者：主婦／53歳</span>
                                        <span className="target">対象者：会社役員／56歳</span>
                                        </div>
                                        <p className="img"><img src="../../img/yamaguchi/jirei/img01.jpg" alt="" /></p>
                                        <dl className="content">
                                        <dt>依頼内容</dt>
                                        <dd>私の夫は結婚当初から浮気を繰り返し、同じ社内の女性従業員やスナックのママ、取引先の女性など、数々の浮気をする典型的な女好きです。今まで見て見ぬふりをしていたのですが、我慢の限界です。その理由は息子の大学資金に貯めていた定期預金からごっそりとお金が引き出されていて、それを夫に問い詰めたら「仕事の緊急事態だから！」と意味不明な言い訳をしたことです。息子は私立の医学部に進学する予定で数千万円の貯金があったのですが、額面は半分まで減りその使い道が女性関係だと勘付いています。そこで浮気の証拠を突き付けて今度こそ浮気を反省させたいです。</dd>
                                        </dl>
                                        <dl className="content cb">
                                        <dt>調査内容</dt>
                                        <dd>ご依頼者様はご主人様に息子さんの教育費をまるごと使われて、相当ご立腹のご様子でした。対象者であるご主人様は浮気をしている可能性が高く、頻度も多いため、すぐに調査チームを編成して、お相手と金銭の行方、反省材料となる証拠集めを行います。</dd>
                                        </dl>
                                        <dl className="content">
                                        <dt>調査結果</dt>
                                        <dd>対象者が勤務終了となる17時半頃、スーツ姿で出口から出てくるとそのまま足早に駐車場に向かい、15分程車を走らせ、コンビニに立ち寄り、お菓子、コーヒーを購入。その後、とあるマンションの駐車場にあるゲストパーキングに駐車しました。そこは対象者の浮気相手、スナックのママの自宅マンションでした。年齢は30代後半、前夫からの息子である小学生と二人暮らしです。<br />
                                            スナック勤務の従業員や近所の人に聞き込みをしたところ、対象者は3年くらい女性とその息子を金銭的に援助していると発覚しました。近所の女性は「妾（めかけ）だよ！」と知っていました。息子さんの大学資金の定期預金は対象者が女性の家族を金銭面で援助しているために使われたのだと分かり、マンションを出入りする様子や3人で外食する様子の証拠写真を撮影しました。</dd>
                                        </dl>
                                        <div className="comment">
                                        <div className="requester sec">
                                            <dl>
                                            <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                            <dd>
                                                <p className="b">依頼者様からのコメント</p>
                                                <p className="nm">今回は詳しく調べてくださりありがとうございます。3年間も金銭的援助とは呆れて言葉を失いました。息子の大学資金が夫の浮気に消えて本当に腹立たしいです。離婚も考えています。</p>
                                            </dd>
                                            </dl>
                                        </div>
                                        <div className="chu sec">
                                            <dl>
                                            <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                            <dd>
                                                <p className="b">中央リサーチから一言</p>
                                                <p className="nm">このような結果に驚き、お気持ちをお察します。浮気の決定的な証拠、金銭的なダメージ、精神的なダメージは証拠があるからこそ立証されます。また何かありましたらご相談ください。</p>
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
                                        <input id="case-check2" className="case-check2" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check2">新入社員が次々に辞める原因は悪質な女性従業員か？素行調査で分かったいじめの実態とは<br />
                                        <span>素行調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                <span>依頼者：美容室経営／62歳／男性</span>
                                                <span className="target">対象者：いじめをしている可能性がある女性従業員</span>
                                                </div>
                                                <p className="img"><img src="../../img/yamaguchi/jirei/img02.jpg" alt="" /></p>
                                                <dl className="content">
                                                <dt>依頼内容</dt>
                                                <dd>県内で個人の美容室を経営しており、お客様とのカウンセリングを重視し、髪の悩みやメンテナンスに力を入れていて、売上も年々伸びておりお陰様で順調なのですが…。<br />
                                                    ただ、一つ悩みがありまして、新しくスタッフを採用してもすぐに辞めてしまい、定着率が非常に悪いのです。<br />
                                                    教育係はベテランを配置しており、原因がわかりません。最近、ある女性美容師が新入社員にキツくあたっているという情報を聞きつけて、そのせいかもしれない…と思い、素行調査をお願いする運びとなりました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                <dt>調査内容</dt>
                                                <dd>従業員は美容師が8名、受付スタッフが4名の合計12名です。3ヶ月の間に8名の美容師が早期退職されており、新入社員の採用コストがかかり、定着率を上げたいと希望されています。<br />
                                                    従業員の中で上下関係やいじめの実態があるかどうか見極めるために、スタッフへの聞き込みや元従業員から聞き込みをし、実態の調査を行います。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>調査結果</dt>
                                                <dd>現スタッフ、元スタッフなどに聞き込みやリサーチをしたところ、40代のベテラン女性美容師が新入社員を個人的に呼び出して、服装や言葉遣いを厳しく注意していると分かりました。<br />
                                                    その女性美容師は若い女性スタッフに冷たく当たり、嫌味を言い、やる気をなくすとのことで、多くの新人スタッフが嫌になって退職されたようです。<br />
                                                    オーナー様に気づかれないように個人的に呼び出しをし、LINEで嫌がらせのメッセージを送るなど、やり方は悪質ですので、十分に警告をする必要があるでしょう。</dd>
                                                </dl>
                                                <div className="comment">
                                                <div className="requester sec">
                                                    <dl>
                                                    <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                    <dd>
                                                        <p className="b">依頼者様からのコメント</p>
                                                        <p className="nm">今回はたった数回の調査で深く調査して頂きありがとうございます。私が不在の間に従業員同士で嫌がらせやいじめがあったとはショックです。しかし、事実が分かりスッキリしました。<br />
                                                        今後は事業拡大のために、従業員を増やしていきたいのでしっかり定着するようにベテラン美容師の教育も力を入れることに致します。ありがとうございました。</p>
                                                    </dd>
                                                    </dl>
                                                </div>
                                                <div className="chu sec">
                                                    <dl>
                                                    <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                    <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">職場での長年続く問題は探偵の素行調査で解決することがありますので、同様のお悩みを抱えていらっしゃる方、またはそうでない方もお気軽にご相談くださいませ。</p>
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
                                        <label className="case-label" htmlFor="case-check3">憧れのマイホーム入居後に近隣住民から嫌がらせを受けて地獄の日々…<br />
                                        <span>嫌がらせの事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                <span>依頼者：新婚夫婦／30代</span>
                                                <span className="target">対象者：近隣住民、両隣の住民</span>
                                                </div>
                                                <p className="img"><img src="../../img/yamaguchi/jirei/img03.jpg" alt="" /></p>
                                                <dl className="content">
                                                <dt>依頼内容</dt>
                                                <dd>結婚して2年目、コロナが落ち着いたので、念願の新築マンションを購入。夫婦二人共気に入った物件だったので、入居した時はとても嬉しくてインテリア雑貨を考えていました。<br />
                                                    引越しを終え、近隣住民に挨拶をするため両隣に和菓子を持っていった時に、「はい」としか言われずに無言で受け取って無愛想な印象を受けました。<br />
                                                    その時に嫌な予感がしましたが気にしないでいると、急にベランダからホースの水が飛んできて窓ガラスが濡れてベランダが水浸しになり、ラジオやテレビの騒音がひどく眠れない程に。<br />
                                                    ベランダに生ゴミの袋の口を開けたまま放置するので、ベランダに大量のカラスがやってきて騒音で恐ろしくなり、マンションの管理人に言ったのですが状況は変わらず…。<br />
                                                    もう、ノイローゼになりそうなので引越しを考えましたが、住宅ローンの事情ですぐには引越しできず、誰に頼ればいいか分からず、探偵社に調査を依頼することにしました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                <dt>調査内容</dt>
                                                <dd>ご依頼者様の深刻な状況を伺っていると早急に解決が必要と判断し、嫌がらせ行為の証拠獲得のために即日調査を開始することに、両隣からの嫌がらせは相当な精神的ダメージです。<br />
                                                    テレビとラジオを最大音量にしてご依頼者様のベランダに向けている様子、ホースで大量の水を窓にあてて水浸しにする行為、ゴミ袋から悪臭を放つなどの様子を調査します。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>調査結果</dt>
                                                <dd>毎日ワンパターンの嫌がらせが続いていることも分かり、調査報告書に時系列で嫌がらせの様子と証拠動画、写真を添付してご依頼者様にお渡ししました。犯罪レベルとなる証明です。<br />
                                                    引越はご検討されていないとのことで、まずは警察署に証拠を提出して相談し、両隣の住民は警察からの事情聴取を受けることになるでしょう。</dd>
                                                </dl>
                                                <div className="comment">
                                                <div className="requester sec">
                                                    <dl>
                                                    <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                    <dd>
                                                        <p className="b">依頼者様からのコメント</p>
                                                        <p className="nm">大変お世話になりました。警察に被害届を出しました。話し合いだけで難しい場合は、民事調停を申し立てて解決をすると決めました。証拠が何よりの自信です。ありがとうございます。</p>
                                                    </dd>
                                                    </dl>
                                                </div>
                                                <div className="chu sec">
                                                    <dl>
                                                    <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                    <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">嫌がらせ被害のお悩みは探偵社の調査報告書があれば、警察人被害届を出して、慰謝料請求や損害賠償の手続きに入ることが可能です。まずは、お気軽にご相談ください。</p>
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
                                        <label className="case-label" htmlFor="case-check4">婚約者にLGBTQであることを隠されているかもしれない…隠し事をせず話してほしい…<br />
                                        <span>結婚調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                <span>依頼者：化粧品販売／36歳／女性</span>
                                                <span className="target">対象者：美容師／35歳／婚約者の男性</span>
                                                </div>
                                                <p className="img"><img src="../../img/yamaguchi/jirei/img04.jpg" alt="" /></p>
                                                <dl className="content">
                                                <dt>依頼内容</dt>
                                                <dd>地元山口の婚活パーティーに何気なく参加すると、一人の好青年と知り合い、共通点が多くあり、すぐに意気投合し交際することになり、婚約する運びになりました。<br />
                                                    しかし、二人で会話中に婚約者が「前の彼が…」と話し始めて、その後焦ったように慌てて話を変えたのです。それが何回かありました。<br />
                                                    私は「元彼女じゃなくて？」と聞き返すと「そうだね！」と返されますが、なんだか様子が変で隠し事をしている感じなのです。<br />
                                                    そこで彼の隠し事の真実を知るために婚約者の結婚調査を依頼しました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                <dt>調査内容</dt>
                                                <dd>ご依頼者様は婚約者の言動に隠し事があるみたいとおっしゃっていました。そこで真実を探るべく、調査チームを結成して、聞き込み等にて調査を進め真実を追求します。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>調査結果</dt>
                                                <dd>対象者の交友関係、近所の聞き込みによれば、多くの方が男性と二人で手を繋いだり、キスをしたりする現場を目撃したという情報を入手しました。また、周囲にも伝えているそうです。<br />
                                                    ただし、ご両親想いの一面があり、ご両親がお孫さんを望んでいることから結婚して早く子供を抱かせてあげたいと対象者自身が思っているそうです。<br />
                                                    本当は同性が好きであるけれども、子供をご両親に見せて安心させるために結婚をすると決めたそうです。匿名でブログも書いており、そこに悩みを綴ることもあるようです。</dd>
                                                </dl>
                                                <div className="comment">
                                                <div className="requester sec">
                                                    <dl>
                                                    <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                    <dd>
                                                        <p className="b">依頼者様からのコメント</p>
                                                        <p className="nm">迅速な調査をしていただき、ありがとうございます。やはり彼は同性とお付き合いしていた過去があるのですね。自分でも男性や女性は関係ないみたいなことを言っていたのを思い出しました。<br />
                                                        もしバイ・セクシャルならば隠し事をせずに私に真実を打ち明けてほしいです。婚約者と話し合って今後のことを決めたいと思います。ありがとうございました。</p>
                                                    </dd>
                                                    </dl>
                                                </div>
                                                <div className="chu sec">
                                                    <dl>
                                                    <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                    <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">今後の話し合いで、お二人が幸せな生活を送れるように心より祈っております。何かあればお気軽にご相談くださいませ。</p>
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
                                        <label className="case-label" htmlFor="case-check5">朝起きたら認知症のおばあちゃんがいない！荷物も何も持たずにどこへ行った？！<br />
                                        <span>家出調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                <span>依頼者：主婦／54歳</span>
                                                <span className="target">対象者：母親／81歳</span>
                                                </div>
                                                <p className="img"><img src="../../img/yamaguchi/jirei/img05.jpg" alt="" /></p>
                                                <dl className="content">
                                                <dt>依頼内容</dt>
                                                <dd>我が家は私達夫婦と娘二人、私の母親（認知症の81歳）です。朝7時に全員で朝食を取るのですが、私の母親がなかなか2階から降りてこないので見に行くと姿がありません！！<br />
                                                    何も荷物を持たずにどこかへ行ってしまいました。夜中にでかけたのか、明け方に出かけたのかもわかりません。<br />
                                                    母親は認知症なので自分の行き先も分かっていないと思います。すごく不安になり、ネットで調べて探偵社に探してもらうことにしました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                <dt>調査内容</dt>
                                                <dd>対象者であるお母様は認知症とのことでどこかに確保されている可能性があります。お金も持たずに手ぶらで出かけていますので、まずは近所、認知症になる前によく行っていた場所など範囲を広げてすぐに調査を開始します。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>調査結果</dt>
                                                <dd>対象者は若い頃に住んでいた3つ隣の駅近くにある自宅近くで見つかりました。ジャケットに小銭と千円札１枚を入れて、電車で3つ隣の駅まで行き自宅周辺をウロウロしていたようです。おばあちゃんに怪我はなく無事な様子です。</dd>
                                                </dl>
                                                <div className="comment">
                                                <div className="requester sec">
                                                    <dl>
                                                    <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                    <dd>
                                                        <p className="b">依頼者様からのコメント</p>
                                                        <p className="nm">
                                                        母親が前住んでいた自宅へ行ったと知り、本当に驚いて拍子抜けしました。<br />
                                                        早期に見つかり、無事に帰ってきましたので本当に良かったですし、安心しました。迅速に調査してくださり、本当にありがとうございました。</p>
                                                    </dd>
                                                    </dl>
                                                </div>
                                                <div className="chu sec">
                                                    <dl>
                                                    <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                    <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">
                                                        こちらこそありがとうございました。無事で本当に良かったです。認知症の方の失踪はよく起こり、以前住んでいた家に行くパターンは多いです。<br />
                                                        早期のご相談・ご依頼が早い解決に繋がりますので、まずはお気軽にお電話、メールにてご相談頂ければと思います。</p>
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
            <FooterYamaguchi />
        
        </>
    )
}
export const Head = () => (
    <>
        <Seo
            title2="当探偵社へのご相談事例｜総合探偵社中央リサーチ山口"
            description="山口の探偵社「中央リサーチ山口」、事例紹介についての説明ページです。"
            keyword="ご相談事例,探偵,山口,問合せ,中央リサーチ山口"
            />
    </>
  )
export default jirei
