import React from 'react'

import Seo from '../../components/SEO'
import HeaderOkayama from '../../components/HeaderOkayama'
import FooterOkayama from '../../components/FooterOkayama'
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
                <HeaderOkayama h1title="調査事例について" pagetitle="岡山駅より徒歩5分の探偵事務所" />
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
                                <label className="case-label" htmlFor="case-check1">「二重生活を10年以上続けた浮気夫と決着が付きました。」 <FontAwesomeIcon icon={faAngleDown} /></label>
                                <div className='case-content'>
                                    <div className="info">
                                        <div className="hito">
                                            <span>ご依頼者様：専業主婦／K様／60代</span>
                                            <span className="time">調査期間：20時間</span>
                                        </div>
                                        {/*p className="img"><img src="img/investigation_case/img01.jpg" alt=""></p*/}
                                        <dl className="content">
                                            <dt>浮気調査を依頼されたきっかけは？</dt>
                                            <dd>夫は結婚当初から浮気者ですが、直らないと半ば諦めていました。会社では役職に就いており稼ぎもよく、金銭面で苦労したことがないのは夫のおかげなので、許していたのです。<br />
                                            先月、会社の同僚の家族と食事会の機会があった時に「泊まり込みの仕事がない」と聞いて私は驚きました。なぜなら、夫の平日の半分以上が泊まりの仕事だと聞いていたからです。<br />
                                            その時に、私は夫の浮気を確信しましたが、平日はどこにいるのか、もうお互い60代ですから万が一のことがあったら心配ですし、気になるので浮気調査を依頼することにしました。</dd>
                                        </dl>
                                        <dl className="content cb">
                                            <dt>中央リサーチを選んだ理由は？</dt>
                                            <dd>あるブログ記事を読んで、私と同じ浮気男の夫を持つ女性が中央リサーチさんで浮気調査をして離婚調停中だと見ましたので、名前は知っていました。<br />
                                            実際に電話してみると対応がよく、カウンセリングに行った時に分かりやすく信頼できると判断して、私もここで調査を依頼しよう！と決めました。</dd>
                                        </dl>
                                        <dl className="content">
                                            <dt>調査の内容はどうでしたか？</dt>
                                            <dd>夫は浮気相手がいる可能性が高く、浮気の期間も長いかもしれませんが、調査して頂けますか？と尋ねるとOKでしたので、即日依頼をしました。結果、驚きの事実が分かりました。<br />
                                            夫は平日の火曜日、木曜日、金曜日は会社に泊まると説明していましたが、実は夫は10年の付き合いになる浮気相手がいて、半同棲状態をずっと続けていたのでした。<br />
                                            浮気相手の実家は福島で家が半壊したので、その修復費用や生活費の援助をしていたそうです。優しいというかボランティア魂というかなんとも言えない気持ちになりましたね。</dd>
                                        </dl>
                                        <dl className="content">
                                            <dt>ご利用になったご感想をお聞かせください</dt>
                                            <dd>結婚生活はもう20年以上、その半分の10年間、夫は二重生活をしていたと思うと夫には二人の妻が居た、といえるかもしれません。夫を責めるつもりはありませんが、複雑な心境です。<br />
                                            確実に言えるのは浮気調査をしてよかったということ。自分の結婚生活の裏にはもうひとりの女性がいました。最近、3人で話し合った結果、相手とは分かれると決着が付きました。</dd>
                                        </dl>
                                        <div className="comment">
                                            <div className="chu sec">
                                            <dl>
                                                <dt><img src="../../img/investigation_case/human.png" alt="" /></dt>
                                                <dd>
                                                <p className="b">中央リサーチから一言</p>
                                                <p className="nm">今回はご依頼頂きありがとうございました。浮気の証拠写真や動画は今後の結婚生活を話し合う上で重要な材料になるかと思います。また、何かありましたらご相談くださいませ。</p>
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
                                <label className="case-label" htmlFor="case-check2">「夫がパパ活をしているかも！浮気調査を依頼して分かった夫の素顔」 <FontAwesomeIcon icon={faAngleDown} /></label>
                                <div className='case-content'>
                                    <div className="info">
                                        <div className="hito">
                                            <span>ご依頼者様：妻／パート従業員／M様／40代</span>
                                            <span className="time">調査期間：30時間</span>
                                        </div>
                                        {/*p className="img"><img src="img/investigation_case/img01.jpg" alt=""></p*/}
                                        <dl className="content">
                                            <dt>浮気調査を依頼されたきっかけは？</dt>
                                            <dd>夫が最近、自宅にいる間ずっとスマホを見ながらニヤニヤしたり、真剣にメッセージを打ち込んでいるのを見て気味が悪いと思っていました。夫が入浴中にスマホが鳴って覗いてみると！<br />
                                            高校生のような若い女性のアイコンが出てきて「きのうはごちそうさまでした！また来週楽しみにしています♡」というメッセージを目撃したのです。<br />
                                            私が心配なのは40代の夫の浮気相手が18歳以下だったら違法ですから怖くなり、それがキッカケで浮気調査をお願いすることにしたのです。</dd>
                                        </dl>
                                        <dl className="content cb">
                                            <dt>中央リサーチを選んだ理由は？</dt>
                                            <dd>ネット検索をし、岡山で浮気調査に定評のある業者3社くらいに電話をして、中でも説明が分かりやすくて料金が分かりやすくて安心できると判断して中央リサーチに依頼を決めました。</dd>
                                        </dl>
                                        <dl className="content">
                                            <dt>調査の内容はどうでしたか？</dt>
                                            <dd>私は夫が未成年と性行為をして逮捕の事態になったら…と悪夢を見たので早めに真相究明をしてもらいたくてお願いをしました。対応が素早くて、調査も無駄がなく大変満足しています。<br />
                                            結局、夫はパパ活のアプリで大学生と食事をしたり、デートを楽しんでいたようです。ラブホテルに入る画像もありました。未成年ではなくとりあえずホッとしています。<br />
                                            同じ相手ではなく複数の若い女性とデートをするのが好きなようで、なんだか夫が可哀想に感じました。離婚するつもりはありません。お金の無駄遣いは辞めるように伝えました。</dd>
                                        </dl>
                                        <dl className="content">
                                            <dt>ご利用になったご感想をお聞かせください</dt>
                                            <dd>迅速な調査に大変感謝しています。夫に調査報告書を見せると黙り込んでゴメンと一言。仕事のストレスや興味本位でパパ活にハマったと白状しました。<br />
                                            私は夫のストレスも理解できたので怒りや恨みはなく、今後は仲良くしようと話し合い、夫婦関係の修復に務めることにしました。ありがとうございました。</dd>
                                        </dl>
                                        <div className="comment">
                                            <div className="chu sec">
                                            <dl>
                                                <dt><img src="../../img/investigation_case/human.png" alt="" /></dt>
                                                <dd>
                                                <p className="b">中央リサーチから一言</p>
                                                <p className="nm">調査後に、ご夫婦が関係を修復されると聞いてこれからは平穏で幸せな日々が続くように心から祈っております。お困りの際はまたお気軽にご相談頂ければと思います。</p>
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
                                <label className="case-label" htmlFor="case-check3">「エステサロン元従業員が退職後に怪我による損害賠償請求…調査でわかった事実に衝撃」<FontAwesomeIcon icon={faAngleDown} /></label>
                                <div className='case-content'>
                                <div className="info">
                            <div className="hito">
                                <span>ご依頼者様：エステサロン経営者／40代／K様</span>
                                <span className="time">調査期間：20時間</span>
                            </div>
                            {/*p className="img"><img src="img/investigation_case/img01.jpg" alt=""></p*/}
                            <dl className="content">
                                <dt>素行調査を依頼されたきっかけは？</dt>
                                <dd>岡山県内で女性向けエステサロンを運営しています。先月退職した30代の女性従業員が当店で使用したエステ機器を使用後に怪我をし、「現在は指の骨が折れて仕事ができない」といった理由で損害賠償請求をしてきたのです。<br />
                                退職前にはそういったトラブルはなく、本人も「一身上の都合により退職」と退職届に記載があり、あくまで本人の意思で退職しています。<br />
                                当店の防犯カメラでもそういった事故は起きておらず、突然の損害賠償請求の通知に驚いています。そこで探偵社に本人は本当に怪我をしているのか、現在の居場所などを調査してもらうことにしました。</dd>
                            </dl>
                            <dl className="content cb">
                                <dt>中央リサーチを選んだ理由は？</dt>
                                <dd>岡山で素行調査が評判の高い業者を探していたところ、中央リサーチさんが気になってホームページから電話の問い合わせをしました。カウンセリングで内容に納得し、即依頼しました。</dd>
                            </dl>
                            <dl className="content">
                                <dt>調査の内容はどうでしたか？</dt>
                                <dd>調査チームはあらゆる手段で対象者の居場所や現在の勤務場所、本人が主張する指の怪我などの状態を調べていただきました。対象者は指を骨折していますが、原因は異なる理由でした。<br />
                                趣味でフットサルチームに所属しており、ボールで突き指になって患部を固定しなかったために症状が悪化して整形外科に通い治療を受けています。<br />
                                それを前の職場であるエステサロンでエステ機器を使った際に骨折をしたと作り話を考えてお金を請求しようとしていたと分かり、驚いたと同時に呆れています。事実が分かって良かった。</dd>
                            </dl>
                            <dl className="content">
                                <dt>ご利用になったご感想をお聞かせください</dt>
                                <dd>正直、探偵社を利用するのは初めてだったのでコワかったのですが、中央リサーチさんのスタッフさんは皆明るくてイメージが変わりました。調査すると事実が分かり証拠が残ります。<br />
                                仕事中やプライベートでも自分の力では分からないことは積極的に探偵社を利用したいと思いました。ありがとうございました。</dd>
                            </dl>
                            <div className="comment">
                                <div className="chu sec">
                                <dl>
                                    <dt><img src="../../img/investigation_case/human.png" alt="" /></dt>
                                    <dd>
                                    <p className="b">中央リサーチから一言</p>
                                    <p className="nm">ご満足いただけて本当に良かったです。また何かお困りのことがありましたら、どうぞお気軽に中央リサーチへご相談頂ければ幸いです。</p>
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
                                <label className="case-label" htmlFor="case-check4">「娘の婚約者の仕事がイマイチ分かりません…結婚調査をして真実が分かり大正解でした」<FontAwesomeIcon icon={faAngleDown} /></label>
                                <div className='case-content'>
                                <div className="info">
                            <div className="hito">
                                <span>ご依頼者様：娘のご両親／50代／Y様</span>
                                <span className="time">調査期間：30時間</span>
                            </div>
                            {/*p className="img"><img src="img/investigation_case/img01.jpg" alt=""></p*/}
                            <dl className="content">
                                <dt>結婚調査を依頼されたきっかけは？</dt>
                                <dd>都内のアパートで一人暮らしをする娘が勝手に籍を入れて、既に結婚していることが発覚。しかし、私達両親は結婚相手と一度も会ったことがなく、挨拶したこともありません。<br />
                                ある日、娘から電話が来て「もう籍を入れたけど、これから実家に挨拶に行きます。」と言い、二人で岡山の実家にやってきました。婚約者は娘の21歳年上で拍子抜けしました。<br />
                                娘は年の差結婚を反対されるのが嫌だったので籍を始めに入れたと説明。その婚約者は現在、輸入・輸出業者に勤務しているとのことでした。<br />
                                娘の21歳年上の男性の結婚調査をして頂き、21歳年上ということもあり、不審な点があったら娘に警告して結婚解消のキッカケにしたいと思いました。</dd>
                            </dl>
                            <dl className="content cb">
                                <dt>中央リサーチを選んだ理由は？</dt>
                                <dd>中央リサーチさんは岡山での結婚調査が55年もの実績があり、運営体制がしっかりされていると分かったので依頼することにしました。明朗会計で料金提示も分かりやすく好印象でした。</dd>
                            </dl>
                            <dl className="content">
                                <dt>調査の内容はどうでしたか？</dt>
                                <dd>とても細かく調査して色んなことが分かり大満足しています。婚約者の輸入・輸出業者に勤務していたというは嘘。実はピザ配達のアルバイト経験のみ。学歴は高卒で専門学校中退。<br />
                                さらに、カメラマンになるために結婚撮影の会社に入社するも社員とトラブルを起こして6ヶ月で退社。地声が大きく、アパートでもトラブルを起こして退居されたことがあるということが発覚しました。</dd>
                            </dl>
                            <dl className="content">
                                <dt>ご利用になったご感想をお聞かせください</dt>
                                <dd>調査していただいたおかげで、娘の婚約者は大噓つきで自己制御ができない、ろくでなしと判断できましたので、娘を実家に呼び出して断固、結婚を解消するように促すつもりです。<br />
                                結婚調査をして本当に良かったです。娘は籍を入れてしまいましたが、これ以上、何か問題が起きないためにも早急に話し合いの場を作り、事実を認めさせます。ありがとうございました。</dd>
                            </dl>
                            <div className="comment">
                                <div className="chu sec">
                                <dl>
                                    <dt><img src="../../img/investigation_case/human.png" alt="" /></dt>
                                    <dd>
                                    <p className="b">中央リサーチから一言</p>
                                    <p className="nm">調査内容にご満足いただけて幸いです。ご家族様が安心して娘さんを見守ることができるように今後の幸せを祈っております。</p>
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
                                <p className="case serif">家出調査</p>
                                <input id="case-check5" className="case-check5" type="checkbox" />
                                <label className="case-label" htmlFor="case-check5">「夫が自分探しの旅とカッコつけて出かけた先は…家出調査の意外な結末に驚きです」<FontAwesomeIcon icon={faAngleDown} /></label>
                                <div className='case-content'>
                                <div className="info">
                            <div className="hito">
                                <span>ご依頼者様：妻／40代／N様</span>
                                <span className="time">調査期間：20時間</span>
                            </div>
                            {/*p className="img"><img src="img/investigation_case/img01.jpg" alt=""></p*/}
                            <dl className="content">
                                <dt>家出調査を依頼されたきっかけは？</dt>
                                <dd>夫は岡山県内の部品メーカーに勤める会社員です。ある日、突然「自分探しの旅に出る。会社には退職届を提出した」と言い残し急にいなくなってしまい、家出調査を依頼することに。<br />
                                夫は真面目過ぎる性格で思いつめる節があるので、最近コロナ禍で軽いうつ状態もあり、万が一の事態を考えて探してもらうことにしたのです。</dd>
                            </dl>
                            <dl className="content cb">
                                <dt>中央リサーチを選んだ理由は？</dt>
                                <dd>探偵社を利用したことがなかったのでブログで口コミ検索しました。中央リサーチさんは岡山で50年以上の実績があるので調査力もあり、信頼できると思ったからです。<br />
                                電話での対応もカウンセリングに行った際にも、女性のカウンセラーの方が親切で親身になってくれて嬉しかったです。終始、安心できました。</dd>
                            </dl>
                            <dl className="content">
                                <dt>調査の内容はどうでしたか？</dt>
                                <dd>私が分かる範囲の情報は夫の名前と年齢、職場だけでしたが、調査員の方はSNSやネット上でも細かくリサーチしてくれて、調査２日目に名古屋市のマンションにいることが発覚しました。<br />
                                実は夫は2年位前から職場で社内不倫をしていて、その女性が名古屋に転職後もまだ関係は続いていて、その自宅マンションで過ごしている様子、画像や動画の証拠を入手できました。</dd>
                            </dl>
                            <dl className="content">
                                <dt>ご利用になったご感想をお聞かせください</dt>
                                <dd>夫は自分探しの旅とキザなセリフを残して、私はどうせビジネスホテルにでも泊っているのだろうと呑気に構えていたら、浮気相手と半同棲だったなんて衝撃的な結果でした。<br />
                                私は夫の居場所を心配して、もし万が一のことがあったら…と心配していましたが、こんなに酷いことをする大噓つきの男だと分かり、愛情はゼロにリセットされました。<br />
                                探偵社ははじめて利用しましたが、最初から最後までスタッフの方、調査員の方、すべの方が親切に対応してくださって本当に感謝しております。ありがとうございました。</dd>
                            </dl>
                            <div className="comment">
                                <div className="chu sec">
                                <dl>
                                    <dt><img src="../../img/investigation_case/human.png" alt="" /></dt>
                                    <dd>
                                    <p className="b">中央リサーチから一言</p>
                                    <p className="nm">旦那様が家出をした行き先が浮気相手の自宅だったという事例は決して珍しくはありません。浮気の証拠写真は今後の夫婦関係の決定打になりますので、お役立て頂ければ幸いです。</p>
                                    </dd>
                                </dl>
                                </div>
                            </div>
                            </div>

                                </div>
                            </div>
                            
                        </div></div>
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
            title2="お客様の声｜総合探偵社中央リサーチ岡山"
            description="岡山の探偵社「中央リサーチ岡山」、お客様の声についての説明ページです。"
            keyword="お客様の声,探偵,岡山,問合せ,中央リサーチ岡山"
            />
    </>
  )
export default voice
