import React from 'react'

import Seo from '../../components/SEO'
import HeaderYamaguchi from '../../components/HeaderYamaguchi'
import FooterYamaguchi from '../../components/FooterYamaguchi'
import Layout from '../../components/Layout'
import SubpageTitle from '../../components/SubpageTitle'
import Breadcrumb from '../../components/breadcrumb'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const voice = () => {
    const pagemeta = {
        title:`お客様の声`,
        slug:`voice`        
    }
    return (
        <>
        
            <div id="wrap">
                <HeaderYamaguchi h1title="お客様の声" pagetitle="JR徳山駅前にある探偵事務所" />
                <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
                <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">
                    
                        <h3 className="headline mp">お客様の声</h3>
                        <div className="investigation_case pb">
                            
                            <div className="box"><div className="bg">
                                <div className="head">
                                    <p className="case serif">浮気調査</p>
                                    <input id="case-check1" className="case-check1" type="checkbox" checked />
                                    <label className="case-label" htmlFor="case-check1">優しい夫は器用に愛妻と愛人を使い分け？浮気調査で夫の本性を知りました <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito">
                                                <span>ご依頼者様：主婦（30代）F様</span>
                                                <span className="time">調査期間：20時間</span>
                                            </div>
                                            
                                            <dl className="content">
                                                <dt>浮気調査を依頼されたきっかけは？</dt>
                                                <dd>夫は上場企業に勤める営業マンです。人当たりがよく、私や娘にも優しく家庭で何の問題もありませんでした。しかし、ある日夫のスーツのポケットからピアスの片方が出てきて…。女性のピアスがポケットに…どういうこと？これは女性が私に存在を匂わせているサインなのか？と考えたら心配で眠れなくなり、誰にも相談できずに探偵社に相談したのです。</dd>
                                            </dl>
                                            <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>夫が浮気をしている事実を確かめたくて、浮気調査の腕がある探偵社を調べました。その中で中央リサーチさんは調査方法と料金が表示されていて分かりやすく信頼できると思いました。浮気調査は早く始めたほうが確実に証拠が取れると知り、離婚しないケースでも証拠は役立つと分かりましたので、すぐに調査依頼を決めました。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>中央リサーチさんは浮気調査の実績が最も多いと仰っていた通り、県内の土地勘や今までの調査の事例を活かして素早い調査をして頂きました。無駄がなく気配りが素晴らしかったです。夫は社内不倫をしていて、同じ部署の20代後半女性と飲み会で仲良くなり、週に2回のペースで女性の自宅マンションで密会している証拠写真を入手しました。カウンセリングの時から調査日、そして結果を待っている間も安心して任せることができて中央リサーチさんにして間違いなかったです。調査力、撮影スキルともに大満足です。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>早く浮気の事実が分かって調査依頼して良かったです。多くの女性たちは夫が浮気をしていると知りながら見てみぬふりをしていると思います。事実を知りたくない気持ちもありますし。しかし、事実を見つめなければ本当の幸せは掴めないと思います。私は浮気の証拠を入手したことで、夫婦で真剣に話し合うことができて、夫は生まれ変わったように激変しました。だから、浮気調査を踏みとどまっている方はリベンジと言うよりも自分のためにやる価値はあると思います。</dd>
                                            </dl>
                                            <div className="comment">
                                                <div className="chu sec">
                                                <dl>
                                                    <dt><img src="../../img/investigation_case/human.png" loading="lazy" alt="" /></dt>
                                                    <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">ご依頼者様が前向きに幸せな家族の時間を過ごしているとご報告を頂いて、スタッフ一同大変嬉しく思っています。また、お困りの際にはお気軽にご連絡くださいね。</p>
                                                    </dd>
                                                </dl>
                                                </div>
                                            </div>
                                            </div>

                                    </div>
                                </div>
                                
                            </div></div>
                            <div className="box"><div className="bg">
                                <div className="head">
                                    <p className="case serif">浮気調査</p>
                                    <input id="case-check2" className="case-check2" type="checkbox" />
                                    <label className="case-label" htmlFor="case-check2">スポーツジム帰りの妻がほろ酔いで浮かれている…浮気調査で妻の奔放さが暴かれた <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito">
                                                <span>ご依頼者様：会社員・夫（30代）　U様</span>
                                                <span className="time">調査時間：20時間</span>
                                            </div>
                                            
                                            <dl className="content">
                                                <dt>浮気調査を依頼されたきっかけは？</dt>
                                                <dd>妻はダイエットのために最寄り駅近くにあるスポーツジムへ週3回通っています。妻は35歳、同年代の友人と仲良くなり、ジム帰りにランチやカフェに行ったりして楽しそうです。先月くらいから妻がジムから帰る時間が遅くなり、夜中の2時頃にほろ酔いで帰ってくることが増えて「どうしたの？」と聞いても。「ジム仲間との飲み会！」としか答えません。ある日、妻のインスタを覗くとジム帰りに男と二人でオシャレなバーで微笑んでいる写真を見てしまいました。男の腕が写っていたので「これは浮気だ。」と確信しました。子供は小学生が二人でまだ育ち盛りで妻と離婚するつもりはないですが、もし浮気の事実が判明すれば離婚も考えざるを得ないと悩んだ挙げ句、探偵の浮気調査をお願いすることにしました。</dd>
                                            </dl>
                                            <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>探偵社を利用するのが初めてだったので探偵社の選び方をネットで調べました。山口で浮気調査に定評のある業者を5つくらい絞り込んで、まずは問い合わせの電話をしました。中央リサーチさんはホームページに調査方法と料金設定を表示していて明朗会計を宣言していて、電話対応も良かったので第一候補に。翌日、カウンセリングに行き、相談しました。妻が浮気をしている可能性があると分かり、早く事実を確かめたかったのですぐに依頼を決めました。調査中は正直、辛かったですが我が人生のためだと思い、普通を装いましたね。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>スピーディーな対応で驚きました。調査チームはすぐに妻の浮気現場の写真を撮影して、その写真も顔がわかるほど鮮明でしたのでプロ魂を感じましたね。ジム仲間と浮気の事実が発覚。それを知った時はショックでしたが、本人にどういうつもりなのか聞き出してくて調査報告書を突きつけると妻は絶句していました。すぐに謝り「もう二度としません」と泣きました。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>もし、浮気調査をしなかったら妻は浮気相手と疑似恋愛に溺れて、家庭が崩壊に向かったでしょう。今でも私は妻を100％信じきれません。また浮気をする可能性はゼロではないから。それでも、浮気の証拠を持って話し合ったことは再発の抑止になって、平和な家庭を維持するために必要だったと思っています。ありがとうございました。</dd>
                                            </dl>
                                            <div className="comment">
                                                <div className="chu sec">
                                                <dl>
                                                    <dt><img src="../../img/investigation_case/human.png" loading="lazy" alt="" /></dt>
                                                    <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">ご依頼者様のお辛い気持ちを察します。どんなご決断をされるにしても、将来が明るく幸せであることをスタッフ一同祈っております。また、何かございましたらご連絡ください。</p>
                                                    </dd>
                                                </dl>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                
                            </div></div>
                            <div className="box"><div className="bg">
                                <div className="head">
                                    <p className="case serif">素行調査</p>
                                    <input id="case-check3" className="case-check3" type="checkbox" />
                                    <label className="case-label" htmlFor="case-check3">安月給を浮気に浪費した夫に天罰が下った！素行調査で発覚した夫の嘘パレード <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito">
                                                <span>ご依頼者様：主婦・パート従業員（40代）M様</span>
                                                <span className="time">調査時間：20時間</span>
                                            </div>
                                            
                                            <dl className="content">
                                                <dt>素行調査を依頼されたきっかけは？</dt>
                                                <dd>夫は40代で手取り月収23万円という安月給です。私は夫婦喧嘩をすると低収入をバカにして少し言い過ぎたかな…と反省しますが、生活が厳しいのは事実なので夫の尻叩きをしています。ある日、銀行で生活費を引き落としに行くと月収の半分の11万円がなくなっていました。給料日にすぐ引き落としするほど素早い行動です。何に使ったのか尋ねると誤魔化されました。私は近所のプラスチック組立工場で、時給900円でパートをしていますが、最近コロナ禍で週5から週3に出勤日が減らされて、本当に生活が苦しくなっています。そんなつらい時期に毎月給料日に11万円を引き落として本当に腹ただしいです。もう5回以上続いていますので、いい加減に事実を知りたいと思い、夫の素行調査の依頼をお願いしました。</dd>
                                            </dl>
                                            <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>私の知り合いが中央リサーチを教えてくれたからです。友人は素行調査をやったことがあり、満足できたと聞いて、私は特に他社と比較することなく中央リサーチに決めました。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>夫はオンラインカジノに月11万円課金していました。投資のセミナー料金だと説明していたのは全部ウソ。そしてカジノにハマりつつ負け続けているので合計80万円を無駄にしました。私はこの事実に唖然として本人に問い詰めたところ、嘘をついたことを謝り、もうギャンブルをしないと約束しました。幸いにも借金がないため、夫婦で改めて頑張っていきたいです。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>今回、夫が私に黙ってオンラインカジノにハマり、自己投資だのカッコつけて浪費していたことが分かり、夫婦でじっくり話し合う機会ができました。本当にありがとうございます。</dd>
                                            </dl>
                                            <div className="comment">
                                                <div className="chu sec">
                                                <dl>
                                                    <dt><img src="../../img/investigation_case/human.png" loading="lazy" alt="" /></dt>
                                                    <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">ご夫婦が新たな気持ちで前に進むとのご報告を受けまして、スタッフ一同嬉しく思っております。また、何かお困りのことがございましたら、お気軽にご連絡お待ちいたしております。</p>
                                                    </dd>
                                                </dl>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                
                            </div></div>
                            <div className="box"><div className="bg">
                                <div className="head">
                                    <p className="case serif">結婚調査</p>
                                    <input id="case-check4" className="case-check4" type="checkbox" />
                                    <label className="case-label" htmlFor="case-check4">婚約者の弟がいつも金銭を要求してきます…結婚調査で婚約をキャンセルして良かった <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito">
                                                <span>ご依頼者様：会社員女性（30代）M様</span>
                                                <span className="time">調査時間：12時間</span>
                                            </div>
                                            
                                            <dl className="content">
                                                <dt>結婚調査を依頼されたきっかけは？</dt>
                                                <dd>婚活サイトに登録して1年後。今までにはない最高の男性に出会いました。彼は母親が日本人、父親が中東系のハーフで堀が深いイケメンです。性格は優しくて情熱的なタイプです。交際して6ヶ月でプロポーズされ、私の1DKマンションに婚約者が入居して、二人暮らしをはじめました。幸せだったのも束の間。彼の弟が頻繁に訪れてきてお金を要求し始めました。弟は私にも「お金を貸してくれないかなぁ」と言い、しつこくねだってくるのです。一人暮らしで引越し業者に勤めていますが、生活費が足りないと切羽詰まっているそうなのです。私は婚約者を信頼していて愛していますが、この弟がいつも家にやってきてお金を貸してくれと言われるのは絶対にイヤです。もし何か問題があるタイプならば婚約解消を考えています。そこで、探偵社に婚約者の家族について結婚調査をお願いしました。</dd>
                                            </dl>
                                            <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>県内で3つの業者を絞って電話で問い合わせしたところ、最も親切で説明が分かりやすく、運営実績も長くて信頼できると思ったのが、中央リサーチさんでした。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>驚きの細かさで凄いと感心しました。まず、婚約者の弟は自分がハーフだからという言い訳をして転職を繰り返し、定職につかないと分かりました。いつも兄を頼っていたそうです。クレジットカードのキャッシングでリボ払いの借金が200万円くらいあり、5万円のアパートで自炊生活をしており、仕事の引越し業者は、今はバイトですが社員になりたいようです。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>私が調べてほしい内容を迅速に調査して頂けて満足しています。婚約者のことは問題無く、弟も可愛そうですがまだ20代ですし、改善の余地はあるかな…と思っています。これで安心して結婚に踏み切ることができます。100％完璧な条件の結婚はないと思いますので私にはこの条件でOKです。本当にありがとうございました。</dd>
                                            </dl>
                                            <div className="comment">
                                                <div className="chu sec">
                                                <dl>
                                                    <dt><img src="../../img/investigation_case/human.png" loading="lazy" alt="" /></dt>
                                                    <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">今回は当社を信頼して頂きご依頼くださってありがとうございました。お二人の幸せな結婚生活をスタッフ一同、心より祈っております。どうぞいつまでも、お幸せに…。</p>
                                                    </dd>
                                                </dl>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                
                            </div></div>
                            <div className="box">
                                <div className="bg">
                                    <div className="head">
                                        <p className="case serif">家出調査</p>
                                        
                                        <input id="case-check5" className="case-check5" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check5">息子の衝動的な家出を解決して頂いて家族の絆が強まりました <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>ご依頼者様：息子の母親・K様（50代）</span>
                                                    <span className="time">調査時間：10時間</span>
                                                </div>
                                                
                                                <dl className="content">
                                                    <dt>家出調査を依頼されたきっかけは？</dt>
                                                    <dd>20代の息子が職場で重大なミスを犯したらしく、最近落ち込んだ様子だったのですが、突然スーツ姿とバッグを持ったまま失踪したのです。会社にも電話で休むといい、3日間不明です。そこで万が一、息子が事件に巻き込まれたり、自死などのリスクを考えると今にでも見つけ出さないと大変だと思い、探偵社に家出調査を依頼して見つけ出してもらうことにしました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>中央リサーチを選んだ理由は？</dt>
                                                    <dd>名前を聞いたことがあって、ホームページを見ると実績が豊富で電話の対応も良かったので割と即決でした。早く息子を見つけ出してほしい一心で必死でした。カウンセラーの方も私に親切にしてくださり、名前や顔写真などの基本情報を伝えるとすぐに調査チームが結成されて捜索に乗り出してくれました。スピーディーで心強かったです。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査の内容はどうでしたか？</dt>
                                                    <dd>息子と電話が繋がらない状態でしたが、調査員の方々は息子がネットカフェで寛いでいるのを発見し、帰宅するように促すようにお願いしました。待機中も何度も連絡して頂き感謝しています。家族が家出をするとパニックになりますが、肝心な警察は動いてもらえないので、信頼できる探偵社を前から知っておくといざという時に慌てないと今回勉強になりましたね。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>ご利用になったご感想をお聞かせください</dt>
                                                    <dd>息子が帰宅後に、仕事のストレスで押しつぶされそうだと言いました。上司が厳しく転職したいのだけれど、3回目の転職は採用が厳しいからどうすればいいか分からないと泣いて…。その後、会社に相談したところ、仕事のミスは疲れているせいかもとアドバイスを受けて、現在は重要な仕事はせずに事務的な仕事を中心にやって、少し表情も明るくなりました。家族もサポートが欠如していたので、これからは食事中に息子との会話をするようにしたり、家族の絆の重要性についても見直すきっかけとなりました。ありがとうございました。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="chu sec">
                                                    <dl>
                                                        <dt><img src="../../img/investigation_case/human.png" loading="lazy" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">保護された時の息子さんは落ち込んだご様子でしたが、今は表情が明るくなられたと聞いてスタッフ一同、嬉しく思っております。また、お困りのことがありましたらお力になります。</p>
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
            <FooterYamaguchi />
        </>
    )
}
export const Head = () => (
    <>
        <Seo
            title2="お客様の声｜山口の総合探偵社中央リサーチ"
            description="山口の興信所・探偵社の中央リサーチ山口のお客様の声について。浮気調査を最も得意とする探偵社です。ご依頼者様の心のお悩みを解決し、平穏な日々を取り戻せるよう全力を尽くします。浮気調査に多くの実績を持つ当社にお任せください。"
            keyword="お客様の声,探偵,山口,興信所,浮気調査,中央リサーチ山口"
            />
    </>
  )
export default voice
