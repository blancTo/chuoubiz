import React from 'react'

import Seo from '../../components/SEO'
import Layout from '../../components/Layout'
import SubpageTitle from '../../components/SubpageTitle'
import Breadcrumb from '../../components/breadcrumb'
import HeaderShimane from '../../components/HeaderShimane'
import FooterShimane from '../../components/FooterShimane'
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
                <HeaderShimane h1title="調査事例について" pagetitle="JR松江駅前にある探偵事務所" />
                <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
                <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">

                        <div className="investigation_case pb">
                            <h3 className="line2 mp bg_wide"><span>調査事例</span></h3>
                            <h4 className="cen">これまでに当社で行った調査事例をご紹介します。調査を検討される際の参考にしてください。</h4>

                            <div id="case01" className="pad_anchor">
                                <div className="box">
                                    <div className="bg">
                                        <div className="head">
                                            <p className="case serif">case01</p>                                            
                                            <input id="case-check1" className="case-check1" type="checkbox" checked />
                                            <label className="case-label" htmlFor="case-check1">夫のスーツからいつも同じ女性用の香水が漂い…浮気調査で分かった社内不倫の結末とは？<br />
                                            <span>浮気調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                            <div className='case-content'>
                                                <div className="info">
                                                    <div className="hito">
                                                        <span>依頼者：主婦／38歳</span>
                                                        <span className="target">対象者：上場企業勤務の会社員／47歳</span>
                                                    </div>
                                                    <p className="img"><img src="../../img/shimane/jirei/img01.jpg" alt="" /></p>
                                                    <dl className="content">
                                                    <dt>依頼内容</dt>
                                                    <dd>結婚して5年目、3歳の娘がいる家庭です。夫は身長183cmで顔も整っており、世にいうイケメンで女性にモテるタイプです。バスケとサッカーが好きで、少年のような爽やかな印象が魅力です。<br />
                                                        そんな夫はあまり女性にのめり込むタイプではないのですが、最近、夫が帰宅するとスーツから女性用の香水が漂い、浮気を疑っています。夫婦の会話も少なく、性生活もなくなりました。<br />
                                                        浮気の事実があるか確かめて、本当にその事実があるならば夫に反省してもらい、いつもの明るく家庭的な旦那さんに戻って欲しいです。探偵依頼は初めてですがよろしくお願いします。</dd>
                                                    </dl>
                                                    <dl className="content cb">
                                                    <dt>調査内容</dt>
                                                    <dd>ご依頼者様はご主人様の家庭での様子が変わり、帰宅時間が遅くなり、ほろ酔いで帰宅する事が増えて、女性用の香水が漂うことから浮気の予感がすると心配されています。真相を探るべく浮気調査を開始します。</dd>
                                                    </dl>
                                                    <dl className="content">
                                                    <dt>調査結果</dt>
                                                    <dd>対象者が勤める企業は有名な上場企業で、自社ビルに多くの社員が通勤しており、張り込みや聞き込みに困難を極めましたが、同僚と部下の聞き込みから有力な情報をキャッチしました。<br />
                                                        対象者は同じ部署の5つ後輩の女性社員と恋仲になり、職場では全員にバレているようです。木曜日か金曜日に帰宅が遅いとのことで張り込みをすると、二人は18時に別々の出口から退勤。<br />
                                                        すると、対象者は会社から最寄り駅の2つ先のスターバックスに入り、その後を追いかけるように30代前半くらいの女性が店に入り、二人は同じ席に座りました。<br />
                                                        その後、二人は個室があるオシャレなイタリアン居酒屋で2時間くらい食事をすると電車で別々に帰宅。後日の調査では二人が映画鑑賞後にラブホテルに入る様子を撮影しました。<br />
                                                        女性は独身ですが社内不倫・浮気は当然ながら禁止となっており、周囲も迷惑に思っており、今後のキャリアと家庭のためにも今回取得した証拠を見せて、反省させると良いでしょう。</dd>
                                                    </dl>
                                                    <div className="comment">
                                                        <div className="requester sec">
                                                            <dl>
                                                            <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                            <dd>
                                                                <p className="b">依頼者様からのコメント</p>
                                                                <p className="nm">とても細かく調査していただいて感謝申し上げます。ありがとうございます。予想通り、夫は浮気していましたね。その女性は会社の部下だと分かり、夫の仕事にも影響があるかも‥‥です。<br />
                                                                まだ子供が小さいので離婚するつもりはありませんが、社内不倫は職場でも迷惑なのでやめてほしいです。浮気相手にお金を使うのもやめてほしいですし、家庭でじっくり話し合いをします。</p>
                                                            </dd>
                                                            </dl>
                                                        </div>
                                                        <div className="chu sec">
                                                            <dl>
                                                            <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                            <dd>
                                                                <p className="b">中央リサーチから一言</p>
                                                                <p className="nm">奥様の勘が働いてご主人の浮気に気がつくパターンは大体浮気の事実が発覚します。浮気の証拠写真があれば、逃げ場はありません。離婚をしなくても反省させる材料になるでしょう。</p>
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

                            <div id="case02" className="pad_anchor">
                                <div className="box">
                                    <div className="bg">
                                        <div className="head">
                                            <p className="case serif">case02</p>                                            
                                            <input id="case-check2" className="case-check2" type="checkbox" />
                                            <label className="case-label" htmlFor="case-check2">夫のインスタに投稿された風景に浮気の予感！素行調査を依頼します<br />
                                            <span>素行調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                            <div className='case-content'>
                                                <div className="info">
                                                    <div className="hito">
                                                    <span>依頼者：パート従業／37歳</span>
                                                    <span className="target">対象者：県職員／42歳</span>
                                                    </div>
                                                    <p className="img"><img src="../../img/shimane/jirei/img02.jpg" alt="" /></p>
                                                    <dl className="content">
                                                    <dt>依頼内容</dt>
                                                    <dd>夫は真面目な性格で子煩悩です。3歳の娘を可愛がってくれて、休みの日は公園で写真を撮るのが楽しみでした。しかし、2ヶ月くらい前から夫がそっけなくなり、夫婦の会話が減りました。<br />
                                                        県職員をしている夫は「コロナ禍の対応で疲れる」と言っていたので、私はそっとしてあげようと思っていたところ、久しぶりに夫のインスタを見てびっくり。<br />
                                                        島根の夜景や公園、海などデートスポットばかりの写真や動画が大量に投稿されていて、「いつ誰と行ったの？」と疑問に思い、浮気を疑うようになりました。<br />
                                                        夫はファッションセンスもなく、印象は変わっていませんが、自宅では明らかに無口になり、休日は外出することも多くなりました。そこで夫の素行調査をお願いします。</dd>
                                                    </dl>
                                                    <dl className="content cb">
                                                    <dt>調査内容</dt>
                                                    <dd>ご主人様の自宅での様子が冷たくなり、夫婦の会話や性生活もなくなったとのことで浮気の可能性が強まりました。すぐに調査チームを結成して、素行調査で浮気の真実を確かめます。<br />
                                                        浮気が事実であれば、どこの誰なのか、出会った場所や密会場所、交際期間などを調べて、証拠となる画像や動画の撮影まで行います。</dd>
                                                    </dl>
                                                    <dl className="content">
                                                    <dt>調査結果</dt>
                                                    <dd>対象者が勤めるビルで張り込みをしていると、就業時間の18時頃に正面玄関から出てきて、足早に近くの居酒屋に入りました。30代くらいの女性と待ち合わせの様子でした。カウンターに座っている二人は慣れた様子で、笑顔で楽しそうに会話をしています。<br />
                                                        お相手の女性は元同じ職場の仕事仲間で年齢は5歳下。女性は夫の転勤で引越しましたが、飲み会で再開したのをキッカケに付き合いを始めたと判明。お互い既婚者のダブル不倫のようです。<br />
                                                        調査日1日目は、居酒屋デートを2時間して、別々に帰宅しましたが、調査日2日目と3日目は博物館や美術館などのデート後にラブホテルへ入る様子を撮影し、浮気の決定的証拠となりました。</dd>
                                                    </dl>
                                                    <div className="comment">
                                                        <div className="requester sec">
                                                            <dl>
                                                            <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                            <dd>
                                                                <p className="b">依頼者様からのコメント</p>
                                                                <p className="nm">見た目がダサい主人ですが、女性と浮気をしている写真を見るとさすがにショックを受けますね。子供のためにも離婚は考えていませんが、夫婦で話し合って十分に反省してもらいます。</p>
                                                            </dd>
                                                            </dl>
                                                        </div>
                                                        <div className="chu sec">
                                                            <dl>
                                                            <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                            <dd>
                                                                <p className="b">中央リサーチから一言</p>
                                                                <p className="nm">SNSに投稿されていた写真や動画もすべて浮気デートの現場でした。最近はSNSでパートナーの浮気が発覚するケースが増えています。同様のお悩み等お気軽にご相談ください。</p>
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

                            <div id="case03" className="pad_anchor">
                                <div className="box">
                                    <div className="bg">
                                        <div className="head">
                                            <p className="case serif">case03</p>
                                            <input id="case-check3" className="case-check3" type="checkbox" />
                                            <label className="case-label" htmlFor="case-check3">平日昼間に不審者の悪質行為が止まらない！器物損壊を証明できた成功事例<br />
                                            <span>嫌がらせの事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                            <div className='case-content'>
                                                <div className="info">
                                                    <div className="hito">
                                                    <span>依頼者：主婦／46歳</span>
                                                    <span className="target">対象者：不明</span>
                                                    </div>
                                                    <p className="img"><img src="../../img/shimane/jirei/img03.jpg" alt="" /></p>
                                                    <dl className="content">
                                                    <dt>依頼内容</dt>
                                                    <dd>平日の昼過ぎから17時くらいに戸建ての我が家で悪質な嫌がらせを受けるようになりました。はじめの1週間はインターホンのピンポンダッシュ、その後は、大量のチラシを入れられるなど…。<br />
                                                        次第にエスカレートして家の門を空けて、ドアをガンガンと叩いたり、植木鉢を落とすなど、恐ろしい行為に変わっていったので警察に電話をしました。<br />
                                                        しかし、犯人が特定できないため、現行犯でないと無理だと分かり、思い切って探偵社に嫌がらせ調査を依頼することにしました。昼間は主人がおらず恐怖でしたので即決依頼しました。</dd>
                                                    </dl>
                                                    <dl className="content cb">
                                                    <dt>調査内容</dt>
                                                    <dd>ご依頼者様は不審者によるエスカレートする嫌がらせ行為を早急に解決したいと切迫されていた状況でしたので、ご依頼後、即日調査チームが始動し、自宅に特殊機材を設置しました。</dd>
                                                    </dl>
                                                    <dl className="content">
                                                    <dt>調査結果</dt>
                                                    <dd>対象者が来る時間帯が特定できていたので、翌日の昼間15時頃にカメラに写った映像を見ると、そこには男が裏口から侵入して、ドアを叩き、植木鉢を床に突き落とす姿がありました。<br />
                                                        また、2日後にも同様に同じ男が裏口から侵入し、郵便受けに大量の古新聞を撒き散らす姿も映し出され、犯人を特定することができ、嫌がらせ行為の証拠動画、写真の撮影に成功しました。<br />
                                                        犯人は同様の手口で嫌がらせ行為を繰り返す、30代後半の無職の男でした。犯人が来る時間帯や行動がパターン化していたので、早急に解決できた事例です。<br />
                                                        自宅の敷地内に無断で侵入し、嫌がらせ行為をすることは刑法にも抵触する犯罪行為となりますので、調査報告書は証拠映像として警察へ提出することができます。</dd>
                                                    </dl>
                                                    <div className="comment">
                                                    <div className="requester sec">
                                                        <dl>
                                                        <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                        <dd>
                                                            <p className="b">依頼者様からのコメント</p>
                                                            <p className="nm">本当にスピーディーな対応をしていただき心から感謝しております。昼間になると犯人が来ると思うと怖くて外出もできず怯えていましたが、これで警察に動いてもらえて器物損壊罪で訴えられます。<br />
                                                            探偵社を利用するのは初めてでしたが、イメージしていたよりも明るくて心地がよく、カウンセラーの方も親切でしたので安心して結果を待つことができました。ありがとうございます。</p>
                                                        </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="chu sec">
                                                        <dl>
                                                        <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                        <dd>
                                                            <p className="b">中央リサーチから一言</p>
                                                            <p className="nm">最近は、治安の良いエリアでも不審者による悪質な嫌がらせのご相談が増えています。探偵社で証拠を掴むと解決策になりますので、同様のお悩みの方はお気軽にご相談ください。</p>
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

                            <div id="case04" className="pad_anchor">
                                <div className="box">
                                    <div className="bg">
                                        <div className="head">
                                            <p className="case serif">case04</p>
                                            <input id="case-check4" className="case-check4" type="checkbox" />
                                            <label className="case-label" htmlFor="case-check4">結婚相手の両親に挨拶へ行ったら無愛想で冷たくあしらわれて…結婚調査で分かった事実<br />
                                            <span>結婚調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                            <div className='case-content'>

                                                <div className="info">
                                                    <div className="hito">
                                                    <span>依頼者：会社員女性／37歳</span>
                                                    <span className="target">対象者：婚約者の男性と家族／41歳</span>
                                                    </div>
                                                    <p className="img"><img src="../../img/shimane/jirei/img04.jpg" alt="" /></p>
                                                    <dl className="content">
                                                    <dt>依頼内容</dt>
                                                    <dd>出会い系アプリで知り合った男性とお付き合いを始めて3年。彼からプロポーズされて実家のある島根県へご両親に挨拶へ行きました。ご両親はニコリともせず冷たい対応で驚きました。<br />
                                                        おめでとうの一言もなく、「ご出身は？」「お仕事は何をされているのですか？」と事務的に質問攻めにされて入社の面接みたいで変な空気が流れました…。<br />
                                                        帰り道の車の中で「ご両親は私の印象が悪かったのかな？」と聞いたら「そんなことないよ。気にしないで。」と一言。息子との会話もなく本当の両親なのか疑うほどでした。<br />
                                                        そこで、本当に彼と結婚して良かったのかプロの探偵の方に調査してもらうことに決めました。悪い結果も受け止める覚悟です。よろしくお願いいたします。</dd>
                                                    </dl>
                                                    <dl className="content cb">
                                                    <dt>調査内容</dt>
                                                    <dd>婚約者の男性は出会い系アプリで知り合ったということで、共通の知人などがおらず、家族や友好関係が分からないケースが多いです。早急に事実を確認するため調査を開始します。</dd>
                                                    </dl>
                                                    <dl className="content">
                                                    <dt>調査結果</dt>
                                                    <dd>対象者の幼少期の友人や現職の同僚、近所の人などの聞き込み調査によれば、複雑な家庭環境で育ったことが分かりました。<br />
                                                        実のご両親ですが、事業の失敗のためにご両親は結婚と離婚を数回繰り返し、兄弟は兄が2人、弟が1人いますが、別々に育てられたそうです。<br />
                                                        対象者は母方の祖父母に育てられて、あまりご両親と一緒に過ごした時代がなく、社会人になって金銭的な援助をするために月10万円の仕送りをしています。<br />
                                                        特に借金や目立つ性癖などは見当たらず、家庭環境が複雑であったために、高校卒業後に社会人となって真面目に会社員を続けている一面がありました。</dd>
                                                    </dl>
                                                    <div className="comment">
                                                    <div className="requester sec">
                                                        <dl>
                                                        <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                        <dd>
                                                            <p className="b">依頼者様からのコメント</p>
                                                            <p className="nm">今回は少ない情報でここまで詳しく調べていただいてありがとうございます。出会い系で知り合った相手と結婚するなんて…と親友に反対されましたが、私は婚約者を信頼しています。<br />
                                                            複雑な家庭環境だと聞いていましたが、幼少期の事実は衝撃でした。思ったより苦労したのですね…。調査してよかったです。これから私達は温かい家庭を築いていきたいです。</p>
                                                        </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="chu sec">
                                                        <dl>
                                                        <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                        <dd>
                                                            <p className="b">中央リサーチから一言</p>
                                                            <p className="nm">お二人が幸せなご結婚生活を送られることをスタッフ一同、心より祈っております。同様のお悩み、ご相談は中央リサーチまでお気軽にどうぞ。</p>
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

                            <div id="case05" className="pad_anchor">
                                <div className="box">
                                    <div className="bg">
                                        <div className="head">
                                            <p className="case serif">case05</p>
                                            <input id="case-check5" className="case-check5" type="checkbox" />
                                            <label className="case-label" htmlFor="case-check5">一人暮らしの大学生息子の消息が不明…調査員の聞き込みで分かった息子の行き先とは？<br />
                                            <span>家出調査の事例</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                            <div className='case-content'>
                                                <div className="info">
                                                    <div className="hito">
                                                    <span>依頼者：大学生の息子さんのご両親／40代</span>
                                                    <span className="target">対象者：一人暮らしの息子／19歳</span>
                                                    </div>
                                                    <p className="img"><img src="../../img/shimane/jirei/img05.jpg" alt="" /></p>
                                                    <dl className="content">
                                                    <dt>依頼内容</dt>
                                                    <dd>息子は鳥取県の実家を出て島根県内のアパートで一人暮らしをしています。週に1回はLINEを送ってくれるのですが、ある日突然、「1ヶ月間そっとしておいて」と一言メッセージを残して音信不通になりました。<br />
                                                        夫は「男の子だし、心配し過ぎだよ」というのですが、最近、コロナでアルバイト先も見つからないと悩んでいたので、何か怪しい仕事でも始めるのかと考えたりして眠れなくなり…。<br />
                                                        1ヶ月間、本当にLINEは既読マークが付かず、息子の友人の連絡先も知らないので不安になったので、夫と探偵社に相談し、息子の行き先を調査してもらうことにしました。</dd>
                                                    </dl>
                                                    <dl className="content cb">
                                                    <dt>調査内容</dt>
                                                    <dd>ご依頼者様のご両親は急に連絡が途絶えた息子さんの行方、居場所が分からずご不安な様子でした。まずは交友関係を調べて早急に居場所を突き止めるため、調査チームを編成しました。</dd>
                                                    </dl>
                                                    <dl className="content">
                                                    <dt>調査結果</dt>
                                                    <dd>大学で所属しているフットサルサークルとゼミの仲間、1ヶ月前まで働いていたピザ屋のスタッフなどに聞き込みをしたところ、「近々、インドへ一人旅をしたい」と言っていた情報を聞きつけました。<br />
                                                        普段、あまりSNSはしないという息子さんでしたが、一人旅前にアカウントを作り、出発からインド旅行中の様子を頻繁に投稿されているのを確認できました。旅行は1ヶ月間と判明し、あと数日で帰国することが分かりました。<br />
                                                        息子さんは大学で学んだ仏教の研究をするために格安のインド一人旅を計画されたようです。1ヶ月間は自分と向き合いたいということで、家族や友人と連絡を断っていたようです。<br />
                                                        特に事件性はなく、御本人の興味での行動だと分かりました。</dd>
                                                    </dl>
                                                    <div className="comment">
                                                    <div className="requester sec">
                                                        <dl>
                                                        <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                        <dd>
                                                            <p className="b">依頼者様からのコメント</p>
                                                            <p className="nm">
                                                            息子からLINEが来ました。「心配したのよ」と伝えると「こんなに心配されるとは思わなかった…」と反省した様子でした。全く人騒がせで困りました。今回はお世話になりました。</p>
                                                        </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="chu sec">
                                                        <dl>
                                                        <dt><img src="../../img/yamaguchi/jirei/human.png" alt="" /></dt>
                                                        <dd>
                                                            <p className="b">中央リサーチから一言</p>
                                                            <p className="nm">
                                                            息子さんが無事に帰国されたと聞いてスタッフ一同ホッと胸を撫で下ろしています。大切な家族等の居場所が分からずお困りの方は、一度ご相談ください。</p>
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
            title2="当探偵社へのご相談事例｜総合探偵社中央リサーチ島根"
            description="島根の探偵社「中央リサーチ島根」、事例紹介についての説明ページです。"
            keyword="ご相談事例,探偵,島根,問合せ,中央リサーチ島根"
            />
    </>
  )
export default jirei
