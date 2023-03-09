import React from 'react'

import Seo from '../../components/SEO'
import Layout from '../../components/Layout'
import SubpageTitle from '../../components/SubpageTitle'
import Breadcrumb from '../../components/breadcrumb'
import HeaderEhime from '../../components/HeaderEhime'
import FooterEhime from '../../components/FooterEhime'
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
                <HeaderEhime h1title="お客様の声" pagetitle="松山市民病院前にある探偵事務所" />
                <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
                <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">

                        <h3 className="headline mp">お客様の声</h3>

                        <div className="investigation_case pb">
                            {/*h3 className="line">浮気調査</h3*/}
                            <div className="box"><div className="bg">
                                <div className="head">
                                <p className="case serif">浮気調査</p>
                                
                                    <input id="case-check1" className="case-check1" type="checkbox" checked />
                                    <label className="case-label" htmlFor="case-check1">夫のスマホにマッチングアプリが３つあります！浮気調査で分かった依存症の問題 <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito">
                                                <span>ご依頼者様：主婦（30代）K様</span>
                                                <span className="time">調査期間：30時間</span>
                                            </div>
                                            {/*p className="img"><img src="img/investigation_case/img01.jpg" alt=""></p*/}
                                            <dl className="content">
                                                <dt>浮気調査を依頼されたきっかけは？</dt>
                                                <dd>ある情報サイトで浮気する男はマッチングアプリを隠してインストールしているという記事を読みました。アプリが隠れているというので気になって夫がお風呂中にチェックしたのです。そのやり方をやってみると夫のスマホに３つのマッチングアプリが見つかりました。分かりやすく「マッチングアプリ」とカテゴリ分けしています。怒りを覚えましたがグッと我慢。最近、お小遣いが足りずに銀行預金から万単位で引き出すことが増えて、それはデートするためだったのか…と考えると眠れなくなってしまい…。浮気調査の依頼を決めたのです。</dd>
                                            </dl>
                                            <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>県内で浮気調査の実績が豊富にあり、明朗会計な業者を3つぐらい絞り、各社に電話して問い合わせたところ、一番丁寧で分かりやすかったのが中央リサーチさんでした。実際に事務所へカウンセリングを受けに行った際にもカウンセラーの方や調査員の確かな腕に信頼できると思ったので、すぐに浮気問題を解決するために調査を依頼しました。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>とにかく素早かったです。無駄な動きがないというか、テキパキしていて早く証拠を掴みますという意気込みが感じられました。証拠写真は鮮明で高品質でしたので大満足です。夫は週に2回位のペースでマッチングアプリで知り合った女性とラブホテルへ行き、女性にお小遣いをあげたり、性行為中の写真を撮る趣味があることも発覚しました。正直、ショックというより呆れました。一人の女性ではなく複数人の女性と関係を持っていて私を裏切ってるつもりはなかったと説明されました。しかし、無駄なお金を使ったり、性病とかのリスクもあるので止めてほしいと話し合い、本人も納得して、その後は静かに帰宅するようになりました。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>夫に探偵を付けることに抵抗ある方は多いと思います。私もそうでした。でも、浮気の証拠があることで夫婦で真剣に話し合うことができたのです。今は平穏になり、大変感謝しています。</dd>
                                            </dl>
                                            <div className="comment">
                                                <div className="chu sec">
                                                <dl>
                                                    <dt><img src="../../img/investigation_case/human.png" alt="" /></dt>
                                                    <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">ご家族全員で過ごす時間が楽しく幸せだとご報告を頂いて、これ以上の喜びはありません。同様のお悩みがある方は、中央リサーチまでお気軽にご相談ください。</p>
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
                                    <label className="case-label" htmlFor="case-check2">夫の財布からラブホテルのメンバーズカードを発見！浮気調査で夫婦関係を改善しました <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito">
                                                <span>ご依頼者様：主婦・パート従業員（40代）　N様</span>
                                                <span className="time">調査時間：20時間</span>
                                            </div>
                                            {/*p className="img"><img src="img/investigation_case/img02.jpg" alt=""></p*/}
                                            <dl className="content">
                                                <dt>浮気調査を依頼されたきっかけは？</dt>
                                                <dd>つい先月、着払いの小包郵便が届いて、小銭がなかったので夫の財布を借りて中身を見た時にラブホテルのメンバーズカードを発見し、見てはいけないものを見てしまった気分に…。結婚10年以上、子どもたちも中学生なので夫の浮気で離婚するつもりはありませんが、夜中に考えだしたら不安になってしまって…。夫婦の会話も少なく、夜の営みもないので余計に。夫は会社員ですが相手が誰なのか分からず、浮気の事実と相手を特定してもらいたくて探偵社に調査をお願いすることにしたのです。</dd>
                                            </dl>
                                            <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>中央リサーチさんの名前は前から知っていました。ブログを読んだこともあって地元では歴史のある有名な探偵社ですので、特に複数社と比べることなく依頼を決めました。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>中央リサーチさんはスタッフさんがとても親切でプロフェッショナルです。夫が浮気をしているか確かではなくても調査してもらえるか不安でしたが、問題ないと分かり安心しました。実際に調査日にはドキドキして待機しました。日常では平常心を装うことをアドバイスされてなるべくいつも通りに振る舞いました。調査中もスタッフさんから状況報告があり親切でしたね。夫は会社で営業職ですが、取引先の営業職の女性とLINE交換をして親密になったらしく、それから1年位、週1日〜2日ペースでホテルで密会し、不貞関係が続いていると分かりました。調査報告書はとても細かく時系列でまとめられており大満足です。これなら離婚したほうが得なのか？と冗談半分で思ったほどです。夫は今反省中で夫婦関係を修復している最中です。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>モヤモヤした気持ちを早急な浮気調査でスッキリ解決してくれました。ありがとうございます。夫に探偵を付けている間は罪悪感がありましたが、結果的に良かったので感謝です。</dd>
                                            </dl>
                                            <div className="comment">
                                                <div className="chu sec">
                                                <dl>
                                                    <dt><img src="../../img/investigation_case/human.png" alt="" /></dt>
                                                    <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">こちらこそ、当社を信頼して頂きご依頼ありがとうございました。今後、ご家族全員が平穏で幸せな日々を送れるように望んでおります。</p>
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
                                    <label className="case-label" htmlFor="case-check3">老舗の和菓子店を長男家族に継がせたいが…素行調査でスッキリしました！ <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito">
                                                <span>ご依頼者様：和菓子店経営（80代）S様</span>
                                                <span className="time">調査時間：20時間</span>
                                            </div>
                                            {/*p className="img"><img src="img/investigation_case/img02.jpg" alt=""></p*/}
                                            <dl className="content">
                                                <dt>素行調査を依頼されたきっかけは？</dt>
                                                <dd>県内で和菓子店を経営しています。私と妻はどちらも80代、高齢によりリタイアしたいと考えており、長男家族に跡を継いでほしいと考えています。本人たちはやる気があります。しかし、次男がいうには「兄夫婦はケンカばかりしていつ離婚するか分からない状態だから、安心して任せられないよ！」と説得されました。次男夫婦は自営業のため継がせられません。そこで、離れて暮らす長男家族の家庭の様子はどうか、お嫁さんや子どもたちと上手くやっているのか、事実を知りたくて探偵社に調査依頼をお願いすることにしました。</dd>
                                            </dl>
                                            <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>数ある探偵社の中でも運営年数が長く、素行調査の実績が豊富だったからです。電話での問い合わせ対応も親切で分かりやすく、安心してお願いできると実感したのが大きいですね。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>カウンセリングで相談後、調査内容や料金に納得したので契約し、すぐに調査チームが結成されて素早く調査が始まりました。結果は大きな問題がなくホッとしているところです。時々、長男が地元の居酒屋で酔っ払い、バッグを忘れたり、大声で路上で歌うと言ったバカをすると分かり、これからは店の顔として気を引き締めて仕事に取り組んでほしいですね。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>最初から最後まで本当によくしてくださり、ありがとうございます。長男家族の普段の様子を画像や動画で初めてみて、なんだか新鮮な気分になりました。問題がなくて良かったです。これで安心して店を長男に引き継がせることができます。本人も意気込んでおりますのでがんばります。ありがとうございます。</dd>
                                            </dl>
                                            <div className="comment">
                                                <div className="chu sec">
                                                <dl>
                                                    <dt><img src="../../img/investigation_case/human.png" alt="" /></dt>
                                                    <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">調査にご満足いただけてこちらこそ嬉しく思っております。ご長男家族様がお店を引き継がれて一層お店が繁盛されますことをスタッフ一同、心より祈っております。</p>
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
                                    <label className="case-label" htmlFor="case-check4">娘の婚約者が罵倒、暴言癖の可能性…結婚調査をして婚約解消させてリセット！ <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito">
                                                <span>ご依頼者様：娘の母親（50代）N様</span>
                                                <span className="time">調査時間：30時間</span>
                                            </div>
                                            {/*p className="img"><img src="img/investigation_case/img02.jpg" alt=""></p*/}
                                            <dl className="content">
                                                <dt>結婚調査を依頼されたきっかけは？</dt>
                                                <dd>県内の戸建てに1階は私達夫婦、2階は娘と娘の婚約者が住んでいます。いわゆる2世帯住宅になりますが、ある悩みがありまして…。６ヶ月前に娘は婚約者を家に連れてきました。初めの頃はおしゃべりが面白いお兄さんという感じでしたが、次第に怒鳴ったり、暴言を履くようになり、うるさい声が1階まで響くのです。娘に言っても聞く耳持たず、解決しません。私としては婚約者と別れてもらい、家を出てほしいのが本音です。しかし、私の夫は「娘の婚約者なんだから二人で家を出てもらえばいいじゃないか」と言い、納得いきません。私は婚約者のことをよく知らないので、家族構成や職歴、年収や交友関係などを調べてもらいたいと思い、結婚調査をお願いすることにしました。</dd>
                                            </dl>
                                            <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>中央リサーチさんのブログをブックマークしていて名前を知っていたので初めに電話で問い合わせをしました。他にも２件問い合わせましたが、一番丁寧で分かりやすいので決めました。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>娘の婚約者は愛知県出身の37歳、公立高校卒業後に代行サービス会社に入り5年間勤務後、引越しサービス会社に転職し、今ではリムジン会社に勤めており、年収は400万円と判明。大体は本人から聞いていた通りでしたが驚いたのはここから。実は3年前に知り合いに怒鳴りつけて脅迫罪で逮捕歴があると分かりました。今は執行猶予が過ぎたそうです。その事実は娘も知らないはずだと思い、実は探偵社を利用していろいろ調べたら「逮捕歴が分かったよ！」というと娘の顔色が変わりました。その翌日、婚約者の男は出ていきました。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>娘が婚約者を家に連れてきてから、怒鳴る声や暴言を吐いて叫ぶので何か性格に問題があると思っていました。やはり、あの男は普通じゃなかった。娘は証拠を見て婚約を解消しました。</dd>
                                            </dl>
                                            <div className="comment">
                                                <div className="chu sec">
                                                <dl>
                                                    <dt><img src="../../img/investigation_case/human.png" alt="" /></dt>
                                                    <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">色々と大変な時間を過ごされて心労を察します。ご家族様の全員が安心して幸せな生活が送れるようにスタッフ一同、心より祈っております。</p>
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
                                    <label className="case-label" htmlFor="case-check5">認知症のおじいちゃんが夜中に家出！安全に保護して頂いた調査員全員に感謝します。 <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito">
                                                <span>ご依頼者様：認知症のお祖父様のご家族／M様</span>
                                                <span className="time">調査時間：20時間</span>
                                            </div>
                                            {/*p className="img"><img src="img/investigation_case/img02.jpg" alt=""></p*/}
                                            <dl className="content">
                                                <dt>家出調査を依頼されたきっかけは？</dt>
                                                <dd>我が家は夫婦と中学生の娘、おじいちゃんの4人暮らし。朝、いつも通りにおじいちゃんの部屋に「朝食の用意ができたよ」と言うと返事がないので、部屋に入ると姿がありません！認知症のおじいちゃんは85歳で何処へ行ったのか分からず不安になりました。警察に電話をしても捜索はしてもらえず、困り果てた上に探偵社に依頼することを思いつきました。</dd>
                                            </dl>
                                            <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>愛媛の探偵社をネット検索して一番実績があって、運営年数が長かったので大丈夫だろうと思い電話してみると、分かりやすく説明してくれて明朗会計だったので即日依頼しました。とにかく早くおじいちゃんを見つけ出してもらいたくて、探偵社を比較するヒマはありませんでした。中央リサーチさんは行動がテキパキされていて地元のカンが鋭く素晴らしかった。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>認知症のおじいちゃんは自分の名前は言えますが、自分が何処にいるのかもわからないほど症状が進んでいましたので心配しましたが、調査員の方々は見事に見つけ出してくれました。おじいちゃんは小銭入れをポケットに入れて、隣町の公園のベンチで寝転がっているところに見回りの警察官に保護されて、警察署にいるという情報を入手。すぐに迎えに行きました。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>中央リサーチさんの調査員の連携プレーは迅速で素晴らしかったです。こんなに早くおじいちゃんを見つけ出してくれて感謝しています。身分証明書も持っていなかったのに…。中央リサーチさんにお願いしてよかったです。探偵社を利用する機会は人生で多くはありません。いざというときのために信頼できる業者を事前に見つけておくことは大事だと思います。</dd>
                                            </dl>
                                            <div className="comment">
                                                <div className="chu sec">
                                                <dl>
                                                    <dt><img src="../../img/investigation_case/human.png" alt="" /></dt>
                                                    <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">今回は家出調査のご依頼ありがとうございました。お祖父様がご無事にご帰宅されたとのことで本当に良かったです。ご家族の平穏を祈っております。</p>
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
            <FooterEhime />
        
        </>
    )
}
export const Head = () => (
    <>
        <Seo
            title2="お客様の声｜愛媛の総合探偵社中央リサーチ"
            description="愛媛の興信所・探偵社の中央リサーチ愛媛のお客様の声について。浮気調査を最も得意とする探偵社です。ご依頼者様の心のお悩みを解決し、平穏な日々を取り戻せるよう全力を尽くします。浮気調査に多くの実績を持つ当社にお任せください。"
            keyword="お客様の声,探偵,愛媛,興信所,浮気調査,中央リサーチ愛媛"
            />
    </>
  )
export default voice
