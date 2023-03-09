import React from 'react'

import Seo from '../../components/SEO'
import Layout from '../../components/Layout'
import SubpageTitle from '../../components/SubpageTitle'
import Breadcrumb from '../../components/breadcrumb'
import HeaderShimane from '../../components/HeaderShimane'
import FooterShimane from '../../components/FooterShimane'
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
                <HeaderShimane h1title="お客様の声" pagetitle="JR松江駅前にある探偵事務所" />
                <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
                <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">
                        <h3 className="headline mp">お客様の声</h3>
                        <div className="investigation_case pb">
                            
                            <div className="box">
                                <div className="bg">
                                    <div className="head">
                                        <p className="case serif">浮気調査</p>
                                        <input id="case-check1" className="case-check1" type="checkbox" checked />
                                        <label className="case-label" htmlFor="case-check1">急に離婚を切り出してきた夫を浮気調査して分かった衝撃の真実！最後まで諦めません <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>ご依頼者様：主婦（30代）Y様</span>
                                                    <span className="time">調査期間：20時間</span>
                                                </div>
                                                
                                                <dl className="content">
                                                    <dt>浮気調査を依頼されたきっかけは？</dt>
                                                    <dd>ある日、夫がいきなり「もう別れよう。別々の人生を歩みたい」と言い出したからです。幼稚園児の娘がいますが、娘もキョトンとした様子でした。特に大喧嘩をしたわけでもなく、不仲の理由はありませんが、突然の離婚を切り出したのは何か理由があると思い、浮気を疑い始めました。最近、夫婦の会話や性生活がなくなりました。私は離婚するつもりは全くなく、もし浮気相手がいてその人を選ぶならば、ちゃんと話し合いたいと思い、浮気の証拠をプロの方に撮ってもらい、話し合いの材料にしたいと思いました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>中央リサーチを選んだ理由は？</dt>
                                                    <dd>島根で浮気調査を依頼した方のブログ記事を見たからです。探偵社は素人みたいな人もいるから気をつけないといけないと知り、中央リサーチさんは55年の実績があるので信頼できます。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査の内容はどうでしたか？</dt>
                                                    <dd>電話で相談後、事務所でカウンセラーの女性が親身になって話を聞いて下さり、私はすぐに証拠が必要でしたのですぐに依頼しました。調査員の方々の素晴らしい連携で感心しました。私が自宅で待機中のときも、こまめにメッセージや電話をして頂き、尾行や張り込み中も安心して任せることができました。夫は社内不倫をしていて、お相手の女性のお腹がポッコリ。そう、浮気相手は妊娠していたのです。夫は私と娘から離れて、その浮気相手と再婚するために私に離婚を切り出したのでした。しかし、私には証拠がありますので、最後まで戦います。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>ご利用になったご感想をお聞かせください</dt>
                                                    <dd>浮気調査をして調査報告書を見た時は一日中泣き続けましたが、今は戦いモードに入っています。浮気者2人に対して、慰謝料と養育費を請求し、裁判で認められるまでがんばります。今回はスピーディーに対応していただいて本当にありがとうございました。最後まで弁護士を紹介していただいたり、良くして頂いて感謝しております。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="chu sec">
                                                        <dl>
                                                            <dt><img src="../../img/investigation_case/human.png" alt="" /></dt>
                                                            <dd>
                                                            <p className="b">中央リサーチから一言</p>
                                                            <p className="nm">こちらこそ、調査にご協力頂き早期に証拠獲得となり感謝しています。ご依頼者様と娘さんが明るい未来になるようにフタッフ一同祈っております。</p>
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
                                        <p className="case serif">浮気調査</p>                                    
                                        <input id="case-check2" className="case-check2" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check2">妻は浮気相手と賃貸アパートを借りていた！本気の浮気の意外な結末に安堵しました <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>ご依頼者様：メーカー勤務・夫（30代）　H様</span>
                                                    <span className="time">調査時間：30時間</span>
                                                </div>
                                                
                                                <dl className="content">
                                                    <dt>浮気調査を依頼されたきっかけは？</dt>
                                                    <dd>専業主婦の妻が服や化粧品を頻繁に買うようになり、おしゃれして出かけることが増えたので浮気を疑ったからです。実は私達夫婦の出会いも浮気でした。私は当時既婚者でしたが、社内不倫で今の妻と出会い、再婚しました。今度は自分が浮気の被害者になった嫌な予感がしました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>中央リサーチを選んだ理由は？</dt>
                                                    <dd>中央リサーチさんは浮気調査の老舗であること、事例の実績が豊富にあって、ベテラン調査員が多いと分かったので特に他と比べることなく、依頼の候補にしました。カウンセリングではカウンセラーが優しい感じで話を聞いてくれました。私はとにかく浮気の事実を確かめたかったので、なるべく早急にお願いしたいと伝えました。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査の内容はどうでしたか？</dt>
                                                    <dd>調査員のチームは迅速に行動して、すぐに現場の写真を撮影に成功。浮気の事実を悲しむヒマもないほどトントン拍子に進んでいきました。妻はアプリで知り合った浮気相手がいました。妻は浮気相手と賃貸アパートを契約して性行為に明け暮れていたそうです。信じられない事実に吐き気がしました。しかも、妻は騙されていました。男はその場所に他の女性も連れてきていたのです。すべての証拠が見える調査報告書を受け取った私は妻に突きつけて言い放ちました。「説明しなさい」と、すると妻は急に泣き出して「ごめんなさい。本当にごめんなさい」と謝罪。しかし、私は妻への愛情は完全に消えてしまいました。妻は浮気相手の男が他の女性とも関係を持っていたとも知らず、そのバカさ加減に呆れました。そして私達は離婚を決めたのです。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>ご利用になったご感想をお聞かせください</dt>
                                                    <dd>中央リサーチさんの調査力、カウンセリング力、迅速な行動にすべて満足しています。浮気調査は対象者にバレることがあると聞いてビクビクしていましたが、そんな心配は不要でした。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="chu sec">
                                                    <dl>
                                                        <dt><img src="../../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">こちらこそ、調査にご協力頂き、早期解決となり安心しております。ありがとうございました。どのようなご決断をされるにしても、ご依頼者様の今後の幸せを祈っております。</p>
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
                                    <p className="case serif">素行調査</p>                                    
                                        <input id="case-check3" className="case-check3" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check3">前夫からの養育費の支払いが止まり…無職になった事実は本当か素行調査で分かった事実 <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>ご依頼者様：看護師（40代）S様</span>
                                                    <span className="time">調査時間：20時間</span>
                                                </div>
                                                
                                                <dl className="content">
                                                    <dt>素行調査を依頼されたきっかけは？</dt>
                                                    <dd>前夫が浮気をして家を飛び出して３年。小学１年生の娘と賃貸アパートで暮らしています。夫から毎月養育費の７万円が振り込まれていましたが、突然途絶えてしまいました。電話で本人と話したところ、会社のリストラがあり、今転職活動中なので新しく仕事が決まったら養育費の支払いを再開すると約束しました。しかし、その後何ヶ月も支払いがなく…。夫が「こっちだって無職で生活を切り詰めているのだからいい加減にしろ！」とキレて怒られました。シングルマザーとしてはこのまま養育費が止まると貯金がなくなり、生活に困ります。そこで探偵社の方に前夫の現在の仕事はどうなのか、１年以上無職と言っているが本当なのか調べてもらいたくて素行調査を依頼しました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>中央リサーチを選んだ理由は？</dt>
                                                    <dd>島根県内で素行調査の事例数が多く、運営年数が５０年以上と長いために信頼できると判断して依頼を決めました。調査の説明から料金の設定まで明確で分かりやすく安心できました。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査の内容はどうでしたか？</dt>
                                                    <dd>前夫の情報は名前と現住所、前の職場の名前しか分からなかったのですが、その少ない情報をもとにして素早く調査して頂き、さすがプロでした。夫は退職後、すぐに同業他社へ入社。リストラにあったと言う話は嘘で実は自主退職。前職は年収700万円だったが、現職は1,000万円超えの高給取りと発覚したのです。養育費を支払わない理由は不動産投資を始めたから、という自分勝手な理由でした。本人にその事実を話すとあっさり認めて、毎月の養育費を支払うようになりました。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>ご利用になったご感想をお聞かせください</dt>
                                                    <dd>探偵社の方々の張り込みや尾行などの調査力は凄いですね。証拠写真を見て素人では絶対に無理だと分かりました。目的が達成できて調査員の全員に感謝しています。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="chu sec">
                                                    <dl>
                                                        <dt><img src="../../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">ご希望どおりに毎月の養育費の支払いが戻ったとお聞きして、良かったと一安心しております。同様のケースでお悩みの方は、どうぞ中央リサーチまでお気軽にご相談ください。</p>
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
                                    <p className="case serif">結婚調査</p>
                                        <input id="case-check4" className="case-check4" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check4">日本人女性とバツ３になったトルコ人婚約者は信頼できるか…結婚調査後の両親の想い <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>ご依頼者様：娘の母親（60代）N様</span>
                                                    <span className="time">調査時間：30時間</span>
                                                </div>
                                                
                                                <dl className="content">
                                                    <dt>結婚調査を依頼されたきっかけは？</dt>
                                                    <dd>島根で一人暮らしをする会社員の娘は40歳になって初めて実家に婚約者の男性を連れてきました。その婚約者は38歳、トルコ料理店に勤めるシェフの方です。二人は友人の紹介で知り合い、結婚することになり、実家に挨拶に来てくれたのですが、喜んでいるのも束の間、その男性は過去に日本人女性と3回の結婚・離婚歴があるというのです。娘とは4回目の結婚になります。御本人は日本語が堪能で結婚・離婚歴をサラリと説明しましたがバツ３とは流石に驚いて、二人が帰った後に夫と「大丈夫なのか…」と心配になりました。本当は本人たちが幸せならば祝福したいのですが、バツ3になった理由が分からずに不安な気持ちで心からお祝いできません。そこで娘の婚約者について結婚調査をお願いします。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>中央リサーチを選んだ理由は？</dt>
                                                    <dd>中央リサーチさんの名前は地元の情報サイトで知っていたので、安心感がありました。結婚調査が失敗したら娘に申し訳ないので、調査スキルの高く実績のある業者を選びました。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査の内容はどうでしたか？</dt>
                                                    <dd>調査の段取りがテキパキしていて、次々と対象者の素顔が分かり実に爽快でしたね。調査報告書には普段の様子、休日の様子、友人関係や家族関係まで希望通りの調査内容でした。バツ３になった理由はすべて女性側から性格の不一致や宗教的な理由で離婚されたと判明。1人目の元妻から子供1人、2人目から1人、3人目からも1人、合計3人の子持ちだと分かりました。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>ご利用になったご感想をお聞かせください</dt>
                                                    <dd>短時間で多くの情報を入手していただいて本当に助かりました。大満足の調査結果でした。本当にありがとうございます。性格的には問題がなく、もやもやした気持ちは晴れました。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="chu sec">
                                                    <dl>
                                                        <dt><img src="../../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">今回は結婚調査をご依頼頂き、ありがとうございました。娘さんのご結婚祝いのご準備をされているとご報告があり、スタッフ一同喜んでおります。どうぞいつまでもお幸せに。</p>
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
                                        <p className="case serif">家出調査</p>
                                        <input id="case-check5" className="case-check5" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check5">プチ家出の癖がある高校生の娘が３日間帰ってこない！早期に家出調査して良かった <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>ご依頼者様：母親・S様（40代）</span>
                                                    <span className="time">調査時間：20時間</span>
                                                </div>
                                                
                                                <dl className="content">
                                                    <dt>家出調査を依頼されたきっかけは？</dt>
                                                    <dd>高校生の娘が塾に行って翌朝に帰ってきたり、学校を無断欠席して地元の不良仲間と遊ぶことが増えました。家族会議をして、もし22時過ぎて帰ってきたらお小遣いなしの罰則を決定。その後、娘は開き直ったようにプチ家出を繰り返しましたが、ある日、塾に行ってから3日間帰宅せず、学校も無断で欠席したと分かりあちこちに電話したのですが見つからず…。警察に相談しても事件性はないと判断されて、もうプロの探偵社に依頼するしかないと思い、島根の家出調査に定評のある中央リサーチさんに捜索を依頼することにしました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>中央リサーチを選んだ理由は？</dt>
                                                    <dd>以前、知り合いが調査を依頼して丁寧で良かったと話していて名前を覚えていたので、信頼できる探偵社さんだと思い、即日依頼しました。早く見つけないと…と思っていましたので。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査の内容はどうでしたか？</dt>
                                                    <dd>私は心配で泣き崩れたのですが、カウンセラーの方は私から名前や塾の場所、娘の友人などの情報を聞き出してくれて、すぐに調査チームが編成されて即、調査が始まりました。娘のスマホと連絡が取れなかったのですが、依頼後１日位したら「娘さんは無事ですよ」と調査員の方から電話が来て安堵しました。娘は他校の友人たちとネットカフェに寝泊まりしていたのです。待っている間はこまめに連絡をしていただいて安心して依頼できました。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>ご利用になったご感想をお聞かせください</dt>
                                                    <dd>プロの探偵は本当にスピーディーで凄いです。私一人では娘の居場所を見つけ出すことは不可能でした。その後、娘は猫のように大人しくなり、プチ家出の悪いクセも落ち着きました。ありがとうございました。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="chu sec">
                                                    <dl>
                                                        <dt><img src="../../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">娘さんがご無事に帰宅されて本当に良かったです。家出をしなくなったとお伺いして安心しております。10代の家出は珍しくはありません。また何かありましたら、ご相談くださいね。</p>
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
            <FooterShimane />
        
        </>
    )
}
export const Head = () => (
    <>
        <Seo
            title2="お客様の声｜島根の総合探偵社中央リサーチ"
            description="島根の興信所・探偵社の中央リサーチ島根のお客様の声について。浮気調査を最も得意とする探偵社です。ご依頼者様の心のお悩みを解決し、平穏な日々を取り戻せるよう全力を尽くします。浮気調査に多くの実績を持つ当社にお任せください。"
            keyword="お客様の声,探偵,島根,興信所,浮気調査,中央リサーチ島根"
            />
    </>
  )
export default voice
