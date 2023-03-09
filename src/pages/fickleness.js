import React from 'react'
import { Link } from 'gatsby'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const fickleness = () => {
    const pagemeta = {
        title:`浮気・不倫調査`,
        slug:`fickleness`
    }
    return (
        <>
            
            <div id="wrap">
            <Header h1title="広島の総合探偵社 中央リサーチ広島本社で浮気調査・不倫調査" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">

                        <div className="fickleness_about bg_wide">
                            
                            <h3 className="mp cen">浮気の証拠は<br className="dsp_smt" />当社にお任せください</h3>
                            <dl>
                            <dt className="bg_blue_grad2 mp">こんなことでお悩みの方へ･･･</dt>
                            <dd>
                                <ul className="chk">
                                <li><b>SNSのやり取りで浮気</b>している感じ･･･これからどうしよう？</li>
                                <li>１日でも早く<b>浮気相手と別れてほしい</b>･･･</li>
                                <li>帰宅時間が遅く、<b>外泊が増え</b>ている･･･</li>
                                <li><b>事実関係をはっきりさせて</b>、夫婦間で話し合いをしたい。</li>
                                <li>浮気相手について<b>どんな人物なのか詳しく知りたい。</b></li>
                                <li>浮気しているようだが、<b>追求しても事実を認めない。</b></li>
                                <li><b>離婚はしたくない</b>ので、より良い解決方法が知りたい。</li>
                                <li>すでに離婚を考えているので、<b>裁判を有利に進める確実な証拠が欲しい。</b></li>
                                </ul>
                                <p className="img nm"><img src="../img/fickleness/img01.png" alt="" /></p>
                            </dd>
                            </dl>
                        </div>
                        <div className="fickleness_you pt">
                            <div className="sec">
                            <div className="txt_area">
                                <h3 className="headline">つらい思いを<br className="dsp_smt" />されている方へ･･･</h3>
                                <p className="txt"><b>ご相談される方の多くは「気になって食事もできない」、「夜も眠れない日々が続く」と、つらい思いを抱えていらっしゃいます。</b></p>
                                <p className="txt"><b>ただ、ずっと考えているだけでは、前に進みません。良い未来に向けて、一歩踏み出すためにも、私たちにお悩みをお聞かせください。</b></p>
                                <p className="txt"><b className="red">私たちはあなたの味方です。</b><b>きっとお役に立てると思いますし、相談員のアドバイスで早期に解決できる事もあります。私たちは、</b><b className="red">お客様の気持ちを大切にし全力でサポートいたします。</b></p>
                            </div>
                            <p className="img nm"><img src="../img/fickleness/img01.jpg" alt="" /></p>
                            </div>
                            <div className="sec">
                            <div className="txt_area">
                                <h3 className="headline">浮気調査を<br className="dsp_smt" />迷われている方へ･･･</h3>
                                <p className="txt"><b className="red">今、必要なのは真実であり不貞の証拠を収集する事です｡</b>お悩みになられている方も<b>「このまま様子をみていようか？」</b>とか、<b>｢私だけが我慢したらいいのかな？」</b>とか思われていませんか?</p>
                                <p className="txt"><b>お悩みを早期に解決する為、大切なことは調査を行い、まず事実を確認する事です。その結果、解決の糸口を見い出し、<span className="red">必ずお力になることをお約束いたします。</span></b></p>
                            </div>
                            <p className="img nm"><img src="../img/fickleness/img02.jpg" alt="" /></p>
                            </div>
                        </div>
                        <div className="fickleness_point bg_wide pb">
                            <h3 className="headline">動かぬ証拠をつかむ<br className="dsp_smt" />５つのポイント！</h3>
                            <dl>
                            <dt className="bg_blue_grad2 mp"><span>1</span>浮気調査経験10年以上の<br className="dsp_smt" />探偵が調査に対応</dt>
                            <dd>「継続は力なり」と言いますが、場数を重ねることで目に見えない起点や、機敏な動き、行動予測などを把握し調査を進める能力を持っています。
                                <p className="img nm"><img src="../img/fickleness/point01.jpg" alt="" /></p>
                            </dd>
                            </dl>
                            <dl>
                            <dt className="bg_blue_grad2 mp"><span>2</span>難しい調査もバイクと車を<br className="dsp_smt" />併用し必ず証拠を掴む</dt>
                            <dd>もともと浮気をする人物はある程度警戒しています。警戒の厳しい対象者に気づかれずに追尾する場合、交通事情など考慮すると数名の調査員とバイクの存在は欠かせません。
                                <p className="img nm"><img src="../img/fickleness/point02.jpg" alt="" /></p>
                            </dd>
                            </dl>
                            <dl>
                            <dt className="bg_blue_grad2 mp"><span>3</span>プロの探偵は最新の撮影機材<br className="dsp_smt" />を使用しています</dt>
                            <dd>最近では４K、８Kの高画質カメラやビデオ、高感度レンズなども使用し深夜の真っ暗な環境でも顔をはっきり写すことが可能です。また車内などの不貞も立証します。
                                <p className="img nm"><img src="../img/fickleness/point03.jpg" alt="" /></p>
                            </dd>
                            </dl>
                            <dl>
                            <dt className="bg_blue_grad2 mp"><span>4</span>不貞の証拠と浮気相手を<br className="dsp_smt" />特定します</dt>
                            <dd>せっかく不貞の証拠をつかんでも浮気相手の帰宅先が解らなければ内容証明や慰謝料も請求できず泣き寝入り。弊社は追加料金不要で帰宅先まで割り出すよう進めます。
                                <p className="img nm"><img src="../img/fickleness/point04.jpg" alt="" /></p>
                            </dd>
                            </dl>
                            <dl>
                            <dt className="bg_blue_grad2 mp"><span>5</span>弊社の報告書はご依頼者様の<br className="dsp_smt" />期待にこたえます</dt>
                            <dd><p className="txt">動かぬ証拠となる報告書は裁判に進む上で、非常に有利となりますが、対象者に証拠をつきつけることで、裁判に進むことなく非を謝罪し、和解に進むこともあります。動かぬ証拠はあなたに精神的な余裕を与え、今ある悩み、苦しみを解決する糸口となります。</p>
                                <p className="img nm"><img src="../img/fickleness/point05.jpg" alt="" /></p>
                            </dd>
                            </dl>
                            <div className="wrap">
                            <dl>
                                <dt className="bg_blue_grad2 mp">夫婦（恋人）間の関係を<br className="dsp_smt" />修復したい場合</dt>
                                <dd><p className="txt nm"><b className="red">事実関係を調査</b>し、それを基に夫婦間で話し合いを行い、関係を元に戻すためのアドバイスをいたします。<br />
                                    浮気相手と二度と会わない（完全に別れる）事はもちろん重要ですが、なぜ浮気・不貞に至ってしまったのか、相手を理解することも大切です。信頼を裏切られたことでパートナーを責めたくなる気持ちが大きくなりがちですが、これからの人生を共に歩むためには、二人で努力し、歩み寄る話し合いが必要です。</p>
                                <p className="img nm"><img src="../img/fickleness/point06.jpg" alt="" /></p>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="bg_blue_grad2 mp">離婚をしたい場合</dt>
                                <dd><p className="txt nm">浮気が原因で離婚となる場合、不貞の証拠（性的関係の事実）が必要です。ふたりで食事しているだけの証拠では有利にならないのです。裁判では不貞の証拠がないと、こちらの主張が認められず不利な立場になってしまいます。何故なら裁判は証拠を基に審理するからです。<br />
                                    離婚後のご不安についても、優秀な弁護士のご紹介など、最善の選択肢を選べるよう、全力でサポートしますのでご安心ください。</p>
                                <p className="more rit  nm"><Link to="/type/">» 詳しくはこちら</Link></p>
                                <p className="img nm nm"><img src="../img/fickleness/point07.jpg" alt="" /></p>
                                </dd>
                            </dl>
                            </div>
                            <div className="bg_blue">
                            <dl>
                                <dt className="mp">浮気調査に係わる内容証明について</dt>
                                <dd><p className="txt nm">内容証明とは浮気の証拠を基に弁護士等が作成し浮気相手に送付し慰謝料を請求するものです。浮気相手と別れてもらう目的でも合法的に使われます。</p>
                                <p className="more rit nm"><Link to="/proof/">» 詳しくはこちら</Link></p>
                                </dd>
                            </dl>
                            </div>
                            <p className="img cen"><img src="../img/fickleness/point00.png" alt="" /></p>
                            <br />
                            <p className="link nm"><Link to="/sample/">調査報告書サンプルはコチラ</Link></p>
                        </div>
                        <div className="fickleness_check pt pb">
                            <h3 className="headline">あなたの夫･妻は浮気<br className="dsp_smt" />をしているのか？<span className="dsp_hpt"><br />簡単に見抜けるチェックリスト12選!</span></h3>
                            <p>パートナーが浮気をすると、普段のちょっとした行動に変化が現れます。「あれ？おかしいな？」と思うような行動がリストの半分以上当てはまるようでしたら、浮気をしている可能性が高いです。<br />
                            ※このリストはあくまでも浮気をしている人の傾向であり、浮気の可能性を100％保障するものではありません。</p>
                            <div className="bg bg_blue_grad2">
                            <p className="ico cen nm"><img src="../img/fickleness/ico.png" alt="" /></p>
                            <dl>
                                <dt><span className="no serif">01</span><span className="line mp">LINEにロック画面をし始めた</span></dt>
                                <dd><p className="txt nm">以前はLINEにロックをかけていなかったのに、浮気をし始めたと同時にLINEにロック画面を設定する人がいます。<br />
                                    浮気相手とLINEで連絡を取り合っている場合、画面にメッセージの中身が表示されてしまうので、夫・妻にバレてしまわないようにロックをかけるのです。</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt><span className="no serif">02</span><span className="line mp">SNS<span className="fs">（Facebook、Instagram、Twitterなど）</span>のDM<span className="fs">（ダイレクトメッセージ）</span>でやり取りしている</span></dt>
                                <dd><p className="txt nm">LINEは家族や知り合いと連絡を取るために使っている人は、浮気相手とSNSのDMでメッセージをやり取りしている可能性があります。<br />
                                    自宅でくつろいでいる時に、頻繁にSNSを開くようになったら、SNSのDMを使っているかもしれません。ゲームアプリのメッセージ機能も要チェックです。<br />
                                    ただし、自分のスマホやPCでパートナーのアカウントにログインするのは不正アクセス禁止法に当たる違法行為ですから注意してください。</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt><span className="no serif">03</span><span className="line mp">パートナーとの性行為が減った</span></dt>
                                <dd><p className="txt nm">浮気を始めると家で夫婦での性行為が減ることが多いです。男性の場合は性欲が刺激されて、稀に増えることもありますが、女性の場合はパートナーを拒絶するほど態度が変わります。男性の浮気は女性の体が目的の場合がありますが、女性の浮気は心まで変わってしまい、夫との会話をしなくなり、性行為を拒否するようになります。</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt><span className="no serif">04</span><span className="line mp">服装や化粧など身なりを気にするようになった</span></dt>
                                <dd><p className="txt nm">これまで服装やヘアスタイルにかまわなかったパートナーが、急に身だしなみ（ファッション、へアスタイル、口臭・体臭ケアなど）に気を遣うようになるのは浮気の兆候である可能性が高いです。</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt><span className="no serif">05</span><span className="line mp">スマホを触らなくなった</span></dt>
                                <dd><p className="txt nm">浮気を始めると、極端にスマホを触らなくなる人もいます。夫婦で二人でいる時にスマホに通知が鳴ったのに、スマホを見ない場合は怪しいです。<br />
                                    浮気相手からのメッセージだと分かっていると、パートナーから「誰から？」と聞かれるのが嫌なので、後でこっそりと返信するのでしょう。</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt><span className="no serif">06</span><span className="line mp">家でもスマホを肌身離さない</span></dt>
                                <dd><p className="txt nm">先程のパターンと逆で、浮気を始めたら、家の中でもどこでもスマホをポケットに入れて、肌身離さない人もいます。お風呂やお手洗いにもスマホを持っていったら浮気を疑いましょう。</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt><span className="no serif">07</span><span className="line mp">自分がパートナーのスマホに近づくと慌てる</span></dt>
                                <dd><p className="txt nm">自分がパートナーの後ろからスマホに近づいて話しかけると、急に慌てて画面を変えたり、スマホを閉じたり、動作が変わった場合は何か隠し事をしている可能性が高いです。</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt><span className="no serif">08</span><span className="line mp">出会い系サイトやマッチングアプリを使った形跡がある</span></dt>
                                <dd><p className="txt nm">インターネットの履歴で出会い系サイトやセフレのサイト、スマホでマッチングアプリを見ていた形跡があれば、浮気をする前兆かもしれません。</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt><span className="no serif">09</span><span className="line mp">電話がかかってくるとベランダや外に出る</span></dt>
                                <dd><p className="txt nm">男性は独身だと偽って、浮気相手と遊んでいる場合があります。浮気相手から電話がかかってくると、子供の声が入ったり、生活音が入ってしまいますので、外に出るのです。</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt><span className="no serif">10</span><span className="line mp">車内をよく掃除する</span></dt>
                                <dd><p className="txt nm">浮気の移動手段に車を使っている人は浮気相手の落とし物などの証拠が残らないように、頻繁に掃除をするようになります。助手席の位置が変わった場合も怪しいです。</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt><span className="no serif">11</span><span className="line mp">帰宅後にすぐお風呂に入るようになった</span></dt>
                                <dd><p className="txt nm">浮気相手と性行為をして体を洗った時にボディーソープの匂いが残っているので、帰宅後すぐにお風呂に入るようになったら、浮気の可能性があります。</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt><span className="no serif">12</span><span className="line mp">休日出勤や付き合いの飲み会、外出が増えた</span></dt>
                                <dd><p className="txt nm">最近はコロナの影響で夜の飲食は自粛傾向ですので、急に飲み会が増えることはありえません。残業や出張、休日出勤、ママ友のランチ会は一旦疑ってみるとよいでしょう。</p>
                                </dd>
                            </dl>
                            </div>
                        </div>
                        <div className="fickleness_request pt pb bg_wide">
                            <h3 className="headline">浮気調査はどうやって<br className="dsp_smt" />依頼するの？<br className="dsp_smt" /><span>Ａ子さんの場合</span></h3>
                            <p className="ico"><img src="../img/fickleness/woman.png" alt="" /></p>
                            <div className="list">
                            <div className="sec">
                                <p className="mp"><span className="no">1</span>HPを見て、フリーダイヤルへ電話する</p>
                                <dl>
                                <dt><img src="../img/fickleness/woman01.png" alt="" /></dt>
                                <dd><p className="txt nm">「相談無料」と書いてあるので、勇気を出して電話を掛けてみた。怖い人が出るかも、うまく説明できるかしら…と不安な気持ちでいたけれど、窓口のスタッフは優しく話してくれたし、説明しにくい事情も上手に聞き出してくれた。電話で話した内容で想定できる見積り金額もはっきりと教えてもらえた。</p></dd>
                                </dl>
                                <dl>
                                <dt><img src="../img/fickleness/man.png" alt="" /></dt>
                                <dd><p className="b nm">相談員から一言</p>
                                    <p className="txt nm">最初は皆さん不安いっぱいなお気持ちで電話を掛けてこられます。どんな状況のお客様でも私たちがしっかりお聞きしますから大丈夫ですよ。女性相談員専用の電話番号や、メール窓口、LINE窓口もありますので、一番相談しやすいものを選んでくださいね。</p></dd>
                                </dl>
                            </div>
                            <div className="sec chk">
                                <p className="mp"><span className="no">2</span>もっと具体的な話をしたいので、面談を申し込む</p>
                                <dl>
                                <dt><img src="../img/fickleness/woman02.png" alt="" /></dt>
                                <dd><p className="txt nm">夫の生活習慣や帰宅時間、帰りの遅い日や休日出勤のこと、親しげにメールのやりとりをしている女性のことなど、詳しく話した上で正確な見積りを提案してもらった。どうしても調べてほしい日のことや、予算のこともすべて伝えると、私にぴったりな調査プランを作ってもらえた。面談室は予約制で、ほかの人に会わずに済んだのも安心。</p></dd>
                                </dl>
                                <dl>
                                <dt><img src="../img/fickleness/man.png" alt="" /></dt>
                                <dd><p className="b nm">相談員から一言</p>
                                    <p className="txt nm">面談のご予約は当日でも可能です。また、遠方にお住まいなどで弊社面談室へお越しになるのが難しい場合は、ご指定の場所へ相談員がお伺いすることもできますので、遠慮なくご相談ください。</p></dd>
                                </dl>
                                <p className="chk"><span>CHECK!</span>面談の際は、本人の写真（正面、横顔、全身など数パターンあれば最良）や車のナンバー、関係のありそうな人物の情報を揃えておくとスムーズに調査に入れます。</p>
                            </div>
                            <div className="sec">
                                <p className="mp"><span className="no">3</span>これから先のことを考えて決断、浮気調査を依頼する</p>
                                <dl>
                                <dt><img src="../img/fickleness/woman03.png" alt="" /></dt>
                                <dd><p className="txt nm">夫の帰りが遅い夜、疑いながら眠れずに過ごすのは終わりにしたい。やっぱり調査を頼もう、と決断して調査を申し込むことに。もちろん、見積金額以外にお金がかからないこともチェックしておく。<br className="dsp_hp" />&nbsp;</p></dd>
                                </dl>
                                <dl>
                                <dt><img src="../img/fickleness/man.png" alt="" /></dt>
                                <dd><p className="b nm">相談員から一言</p>
                                    <p className="txt nm">浮気調査のご契約時には、書類の内容もしっかりご説明しますので、わからないところは遠慮なく質問してくださいね。</p></dd>
                                </dl>
                            </div>
                            <div className="sec chk">
                                <p className="mp"><span className="no">4</span>調査開始から終了まで…</p>
                                <dl>
                                <dt><img src="../img/fickleness/woman04.png" alt="" /></dt>
                                <dd><p className="txt nm">担当相談員と一緒に調査の日時も決めて、あとは結果を待つのみ。いつも通りに過ごしてください、と言われたけど意識しすぎてないか心配。調査の結果はこまめに担当相談員から教えてもらえるので、ただじっと待つよりはずいぶん気が楽になったかも。<br className="dsp_hp" />&nbsp;</p></dd>
                                </dl>
                                <dl>
                                <dt><img src="../img/fickleness/man.png" alt="" /></dt>
                                <dd><p className="b nm">相談員から一言</p>
                                    <p className="txt nm">お客様とのご連絡・ご相談は担当相談員が引き続き行いますので、気兼ねなく何でもご相談くださいね。</p></dd>
                                </dl>
                                <p className="chk"><span>CHECK!</span>調査期間中は、くれぐれも「日頃のふるまい」を保っていただくことです。急に詮索し始めたり、いつもと態度を変えると相手の警戒を招きます。無事に調査が終わるまで、もう少し我慢していてくださいね。</p>
                            </div>
                            <div className="sec">
                                <p className="mp"><span className="no">5</span>調査報告書を受けとる</p>
                                <dl>
                                <dt><img src="../img/fickleness/woman05.png" alt="" /></dt>
                                <dd><p className="txt nm">調査日程分すべての報告書を受け取った。「２０時XX分　『△△ホテル』へ入る」…時間まで詳しく書いてあるし、浮気相手の顔もばっちり写っていてビックリ。浮気相手と腕を組んでホテルに入る夫の姿を見ると腹が立つけど、「このまま放っておかなくて良かった…」とスッキリする自分もいる。</p></dd>
                                </dl>
                                <dl>
                                <dt><img src="../img/fickleness/man.png" alt="" /></dt>
                                <dd><p className="b nm">相談員から一言</p>
                                    <p className="txt nm">弊社の調査報告書は、対象者の行動がよく分かる詳細な報告書です。いい加減な報告書は絶対にお渡ししません。裁判になっても認められるような不貞の証拠を確実に捉えた写真や動画（DVD）「動かぬ証拠」です。</p></dd>
                                </dl>
                            </div>
                            <div className="sec">
                                <p className="mp"><span className="no">6</span>浮気相手ときっちり別れてもらうために…</p>
                                <dl>
                                <dt><img src="../img/fickleness/woman06.png" alt="" /></dt>
                                <dd><p className="txt nm">夫と別れることは考えられないけれど、浮気を許すこともできない。浮気相手にはきちんと慰謝料を請求して、夫とも絶対に別れてもらいたい。浮気の証拠は手に入れたけれど、これからどうしたらいいんだろう？<br className="dsp_hp" />&nbsp;</p></dd>
                                </dl>
                                <dl>
                                <dt><img src="../img/fickleness/man.png" alt="" /></dt>
                                <dd><p className="b nm">相談員から一言</p>
                                    <p className="txt nm">浮気調査で判明した結果をどのように活かすか、ということは一番大切な問題です。中央リサーチでは、問題が解決するまで責任をもって対応致します。そのほか法的な問題に関しては、優秀な弁護士等を無料でご紹介できますのでご安心ください。</p></dd>
                                </dl>
                            </div>
                            </div>
                        </div>

                        <div className="investigation_case pb">
                            <h3 className="line2 mp bg_wide"><span>調査事例</span></h3>

                            <h4 className="cen">これまでに当社で行った<br className="dsp_smt" />浮気調査の事例をご紹介します。<span className="dsp_hpt"><br className="dsp_tbs" />調査を検討される際の参考に<br className="dsp_smt" />してください。</span></h4>
                            
                            <div className="box">
                                <div className="bg">
                                    <div className="head">
                                        <p className="case serif">case01</p>                                    
                                        <input id="case-check1" className="case-check1" type="checkbox" checked />
                                        <label className="case-label" htmlFor="case-check1">夫が貯金をおろして浮気のデート代に使っている予感！妻の予想が的中した調査事例<br />
                                        <span>会社員の夫が頻繁にATMでお金をおろすようになり、貯金額が減って浮気の疑惑が…。妻の予想が見事に当たった浮気調査事例です。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>依頼者：妻（34歳）</span>
                                                    <span className="target">対象者：会社員の夫（36歳）</span>
                                                </div>
                                                <p className="img"><img src="../img/investigation_case/img01.jpg" alt="" /></p>
                                                <dl className="content">
                                                    <dt>依頼内容</dt>
                                                    <dd>夫は土日祝休みの会社員です。休みの日はテレビを見るか、昼寝をするか、のんびりした性格ですが、この1ヶ月の間にコンビニのATMで頻繁に3万円ずつお金をおろしている事が発覚。子供の教育費に貯めている預金口座から、10万円以上なくなっていたので、夫に問いただしたところ、いきなり怒り出して、休みの日は家を空けるようになりました。普段の会話も上の空で、気持ちがここにあらずという感じです。もしかして、浮気でもしているのか？と感じています。早く解決したいので、浮気調査を依頼することにしました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>調査内容</dt>
                                                    <dd>ご主人様は休日になるとお金をおろして、家を出ることが増えたそうです。会社の人と飲みに行くと言っているようですが、昼間から出かけるので奥様は怪しいと感じています。休日に夫は誰とどこで過ごしているのか、尾行・張り込み・聞き込みで浮気調査を行います。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査結果</dt>
                                                    <dd>土曜の昼1時頃、対象者（夫）は家を出ると近くのコンビニのATMで3万円をおろして、何度もスマホで時間を確認しながら、一人電車に乗り込みました。2つ先の駅に降りると、ワンピース姿の30代前半くらいの女性が笑顔で手を振っていました。対象者が「待たせてごめんね」と言いながら、近づいていき、二人は腕を組んで個室レストランに入店。個室レストランは浮気カップルのデート現場によく使われる定番の場所です。<br />
                                                    1時間位で食事を済ませ、駅前にあるレンタカーを借りて、ショッピングモールで買い物をした後に、女性の自宅マンションに入り、翌日の夕方まで二人で過ごしたのを確認できました。<br />
                                                    休日にお金をおろすのは間違いなく浮気相手とのデートに使うためです。個室レストランやレンタカーを利用するのは、万が一知り合いに見られないための対策と考えられます。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="requester sec">
                                                        <dl>
                                                            <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                            <dd>
                                                            <p className="b">依頼者様からのコメント</p>
                                                            <p className="nm">夫の浮気が確実だと分かり、ショックな気持ちと呆れた気持ちが入り混じっています。不器用で騙されやすい性格なので、女性の言いなりになっていると想像できます。会社の慰安旅行で行った温泉旅館の領収書やデパートでのブランド品のレシートも浮気相手とのデートだったんですね…。<br />
                                                                まだ子供が小さいので離婚は考えていませんが、浮気の証拠写真は私の切り札です。夫にはいい加減浮気から目を覚まして、子供の教育費を使ったバツを受けてもらうことにします。</p>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="chu sec">
                                                        <dl>
                                                            <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                            <dd>
                                                            <p className="b">中央リサーチから一言</p>
                                                            <p className="nm">今回は奥様の鋭いカンが浮気の早期発見に繋がった事例でした。いつもと違う様子や言動は浮気のシグナルかもしれません。同様のケースでお悩みの方は、一度ご相談くださいませ。</p>
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
                                        <label className="case-label" htmlFor="case-check2">急に離婚を切り出してきた夫が怪しい!朝帰りが多く、無口になった夫の浮気調査でわかったこと<br />
                                        <span>結婚7年目で小学生のお子様が一人いるご夫婦。半年くらい前から夫の朝帰りが多くなり、いきなり離婚を切り出された奥様は真実を知るために浮気調査を依頼されました。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>依頼者：妻（38歳）</span>
                                                    <span className="target">対象者：営業職・夫（34歳）</span>
                                                </div>
                                                <p className="img"><img src="../img/investigation_case/img02.jpg" alt="" /></p>
                                                <dl className="content">
                                                    <dt>依頼内容</dt>
                                                    <dd>夫はコロナ禍以降残業がなくなり、仕事が終わると19時ごろに家に帰ってきます。しかし、半年くらい前から夫の様子が変になりました。朝帰りが多くなり、家では無口になったのです。<br />
                                                    常にスマホを離さず、トイレにも持っていくので怪しすぎます。そして最近、「もう上手く行かないから離婚しよう」と急に言われたのです。驚いたと同時に夫は浮気をしているに違いないと思いました。自分勝手な理由で別れようとする夫の浮気の証拠を掴みたいです。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>調査内容</dt>
                                                    <dd>依頼者の相談から、ご主人様は木曜日または金曜日は決まって朝帰りになると事前に分かっているので、日程や時間を絞り込んで効率よく調査することに。ご家族は社宅に住んでおり、周りには会社の知り合いが多いので、調査がバレないように調査員は慎重に動きます。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査結果</dt>
                                                    <dd>結果から申し上げますと、社内不倫であることが分かりました。木曜日に仕事が終わると対象者（夫）は3つ先の駅に降りてカフェで待機。すると、その30分後に同じ会社の部下である20代後半くらいの女性が対象者に近づいていきました。<br />
                                                    女性も既婚者でお互いに自覚しているW不倫になります。本人たち二人は上手くやっていると思っているようですが、実際は社内では既に二人の関係はバレており、いい迷惑だと感じる社員もいました。<br />
                                                    上司である対象者が会社の飲み会で部下の女性に近づき、深い関係に発展したと考えられます。以降二人は社内の飲み会には出席せず、必死に周りに隠れて会っていたようです。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="requester sec">
                                                        <dl>
                                                            <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                            <dd>
                                                            <p className="b">依頼者様からのコメント</p>
                                                            <p className="nm">夫が部下の女性と半年間の不倫関係にあり、その相手と再婚するため私に離婚を切り出したのですね。最近、会話が減って無口になった理由が分かりました。<br />
                                                                二人がラブホテルに出入りする複数の証拠写真を見たら、愛が冷めきってしまいました。浮気相手への慰謝料請求も視野に入れて離婚を進めたいと思います。ありがとうございました。</p>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="chu sec">
                                                        <dl>
                                                            <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                            <dd>
                                                            <p className="b">中央リサーチから一言</p>
                                                            <p className="nm">対象者は会社の部下と浮気関係になりました。会社から3つ先の駅前のラブホテルに宿泊したり、行動が大胆だったので、浮気の証拠も一目瞭然です。<br />
                                                                夫・妻の浮気が原因で離婚する場合、ご自身が不利な条件で離婚することにならないよう、しっかりと証拠を確保することが大切です。</p>
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
                                        <label className="case-label" htmlFor="case-check3">田舎あるある！なんと浮気現場は人が多いお店の駐車場だった<br />
                                        <span>結婚して3年目になるご夫婦。3歳のお子様がいる幸せそうなご家庭ですが、ご主人様は妻の浮気を疑うように…。妻が浮気をする現場は驚くことに人が多いお店の駐車場だったケース。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>依頼者：販売職・夫（28歳）</span>
                                                    <span className="target">対象者：パート従業員・妻（27歳）</span>
                                                </div>
                                                <p className="img"><img src="../img/investigation_case/img03.jpg" alt="" /></p>
                                                <dl className="content">
                                                    <dt>依頼内容</dt>
                                                    <dd>妻は１００円ショップでパートタイマーとして働いています。性格は明るく社交的で人当たりもいい方だと思います。最近、夜の夫婦生活がなくなり、同じベッドに寝ていても体を離すように…。<br />
                                                    スキンシップで抱き合うことも避けるようになり、妻は触らないでというような冷たい態度を取るのです。会話もそっけなく、もしかして誰かと浮気でもしているのかと疑っています。<br />
                                                    もし、本当に妻が浮気をしているなら絶対に許せないです。でも、そのまま放置するわけには行かないので、浮気調査で証拠を掴んで、その後夫婦で相談したいと思います。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>調査内容</dt>
                                                    <dd>奥様は平日は自家用車の軽自動車に乗って、勤務先の100円ショップにでかけます。土日は自宅にいるようなので、浮気をしている可能性は平日の仕事の後と予想して、調査を開始します。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査結果</dt>
                                                    <dd>対象者（妻）の仕事が終わる時刻は19時。２月のこの時間帯はすでに周辺が薄暗くなっています。19時20分頃に対象者が店舗から出てくると、軽自動車に乗って、すぐ反対側にあるドラッグストアへ向かいました。<br />
                                                    勤務先の100円ショップの反対側には、スーパーやドラッグストア、クリーニング店、本屋などが並ぶショッピングセンターがあります。<br />
                                                    対象者はドラックストアの駐車場に車を停めると、１５分後にシルバーのセダンが横付けで停まりました。運転手は浮気相手と見られる30代くらいの男性です。<br />
                                                    対象者はセダンの助手席に乗り込むと、すぐに誰もいない駐車場の端っこに車を移動して駐車しました。周りはすでに暗くなっていますが、調査員のカメラは衝撃の事実を収めました。<br />
                                                    対象者が助手席から後部座席へ移ると、次に男性も後部座席へ移り、二人はゴソゴソと服を脱ぎ始めました。上半身はそのままで、女性のスカートと男性のズボンは脱いだ状態です。<br />
                                                    その場で二人は性行為を始めました。その様子は映像からも、しっかり二人の顔まで確認することができます。二人の浮気現場は人が多い駐車場で大胆な行動をしていたのです。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="requester sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">依頼者様からのコメント</p>
                                                        <p className="nm">今回は中央リサーチさんの素晴らしい調査力で短期間で証拠を掴んでもらい、大変感謝しております。田舎のショッピングセンターは街の住民が買い物をする定番のスポットです。<br />
                                                            そんな場所で浮気相手と、それも車の中で性行為に及んでいるとは、どこかの安っぽいAVのような信じがたい事実でした。妻は汚れた人間だと分かり、悲しいですが、選択肢は離婚しかありません。<br />
                                                            人生の教訓として自分も反省するところは反省して、同じような被害を受けないように気をつけたいです。ありがとうございました。</p>
                                                        </dd>
                                                    </dl>
                                                    </div>
                                                    <div className="chu sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">近年は、妻が浮気をしてご主人様が悩まれるケースが増えています。なかなか人には言えない相談も実績豊富な中央リサーチにぜひご相談ください。</p>
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
                                        <p className="case serif">case04</p>                                        
                                        <input id="case-check4" className="case-check4" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check4">幸せな新婚カップルに起こった真実！夫が独身を装って5人の女性と交際？！<br />
                                        <span>今回は結婚したばかりの新婚カップルに実際に起こった衝撃の真実をご紹介します。夫は独身のフリをして出会い系アプリを使い、結婚を前提に複数人の女性と交際していたケースです。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>依頼者：販売職・妻（31歳）</span>
                                                    <span className="target">対象者：営業職・夫（34歳）</span>
                                                </div>
                                                <p className="img"><img src="../img/investigation_case/img04.jpg" alt="" /></p>
                                                <dl className="content">
                                                    <dt>依頼内容</dt>
                                                    <dd>大学生の頃に知り合った夫とは交際１０年の末に結婚しました。お付き合いの期間が長いのでお互いに短所もすべて受け入れて、信頼関係が強いです。<br />
                                                    最近、自宅のゴミ箱から映画館のチケットやレストランのレシートが出てきて、夫が外で遊んでいると勘付きました。自称イケメンで確かにモテるタイプなので心配しています。<br />
                                                    家には生後間もない子供もおり、外出もままならないため、口コミサイトで浮気調査の評判が良かった中央リサーチさんに依頼することにしました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>調査内容</dt>
                                                    <dd>ご夫婦の間は信頼関係が強く、日頃は特に問題なく仲良く過ごされているようですが、奥様は旦那様が外で娯楽を楽しんでいることが分かり、誰と何をしているのか気にされていました。<br />
                                                    営業職で社交的な性格の旦那様は行動範囲が広く、どこかに出かける時も口が達者なのでごまかされることも多く、本当のことを知りたいとおっしゃっていました。真実を追求し、早急に浮気調査を開始します。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査結果</dt>
                                                    <dd>奥様のおっしゃる通り、対象者（夫）は非常にフットワークが軽く、仕事で営業回りをしている途中に女性とデートを楽しんでいることが分かりました。<br />
                                                    基本的に営業回りは電車またはバス移動ですので、浮気相手の女性と駅で待ち合わせをした後に、食事や映画、カラオケなどを楽しむパターンです。<br />
                                                    そして、驚いたことに対象者は複数の女性たちとデートをしていることが判明。スマホのデートアプリを使って女性と出会う機会を増やしているようです。<br />
                                                    対象者は、結婚を前提にと偽って付き合っている女性、身体の関係だけの女性、飲食代を出してもらう女性など、目的別に付き合い方を分けており、器用さを見せていました。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="requester sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">依頼者様からのコメント</p>
                                                        <p className="nm">自宅のゴミ箱から、女性の化粧品を購入したコンビニのレシートや個室の居酒屋のレシートが出てきたので浮気していると薄々感じていましたが、やはり事実でしたね。<br />
                                                            ショックでしたが、結婚前にも同じようなことをされたので、「またか」と思いました。<br />
                                                            結婚して赤ちゃんも生まれたのですから、夫にはしっかり既婚者を自覚してもらいたいです。いつまでも独身気分で遊んでいると、バチが当たることを教えてやります！</p>
                                                        </dd>
                                                    </dl>
                                                    </div>
                                                    <div className="chu sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">最近は、スマホの出会い系アプリやSNSをきっかけに既婚者も出会いを求めて、大胆な行動に出るケースが増えています。同様のケースでお悩みの方は、一度ご相談頂ければと思います。</p>
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
                                        <p className="case serif">case05</p>                                        
                                        <input id="case-check5" className="case-check5" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check5">W不倫の再婚カップルは浮気を繰り返す？次は浮気の被害者になってしまった妻の事例<br />
                                        <span>今回ご紹介する浮気調査の事例は、社内でのW不倫の末に再婚されたカップルに待ち受けていた意外な結末です。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>依頼者：主婦（37歳）</span>
                                                    <span className="target">対象者：会社員・夫（42歳）</span>
                                                </div>
                                                <p className="img"><img src="../img/investigation_case/img05.jpg" alt="" /></p>
                                                <dl className="content">
                                                    <dt>依頼内容</dt>
                                                    <dd>私には夫がいましたが、職場で今の主人と知り合ってW不倫の関係になり、再婚しました。私は二人の子連れ再婚、主人は子供一人の親権を妻に渡しての再婚です。<br />
                                                    不倫で始まった職場恋愛ですが、再婚したばかりは幸せで、子供たちも新しい生活を受け入れ、慣れていってくれました。しかし、再婚して3年後、夫が自宅マンションに帰らない日が多くなりました。<br />
                                                    スーツには香水の匂いがして、夫の態度も素っ気なくなっていき、浮気をしている可能性が高いのでは、と思うようになりました。自分も略奪して再婚しましたが、今度は自分が被害者かもしれません。<br />
                                                    もし、夫が浮気をしていると分かったら、自業自得と反省しますが、2度の離婚は避けたいのでなんとか修復したいです。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>調査内容</dt>
                                                    <dd>ご主人様は中堅のIT企業に勤める会社員です。平日は朝7時に家を出て、帰宅時間は２０時ごろと生活パターンは決まっていましたが、最近は会社に泊まる日が増えたそうです。<br />
                                                    コロナ禍で残業がほとんどなくなり、在宅勤務が増えたにもかかわらず、泊まりが多くなり、スーツには女性の化粧品の匂いがするそうです。早速、浮気調査を開始します。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査結果</dt>
                                                    <dd>平日の勤務日に張り込みと尾行を開始。いつもどおり対象者（夫）が18時に会社を出ると、すぐに駅に向かい、3つ先のターミナル駅で下車。チェーンの喫茶店に入ると女性が待っていました。<br />
                                                    女性は20代後半から30代前半、スマホを片手にピンクベージュの明るいスーツを着ています。聞き込みによると取引先の女性と仲が良くなったと同僚に自慢げに話していたそうです。<br />
                                                    女性と笑顔で会話をすると、二人は10分後に喫茶店を出て、少し先にあるコンビニで食べ物や飲み物を購入していました。その後、二人は繁華街へ行き、堂々とラブホテルに入っていきました。<br />
                                                    二人は1泊して翌朝出てくると、何事もなかったように駅へ向かい、別々の電車に乗って、会社へ向かいました。<br />
                                                    浮気の期間は3ヶ月くらいと予想されますが、対象者は仲の良い会社の同僚に「隠れて恋愛をする方が楽しい」と話し、浮気好きを自覚しているようです。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="requester sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">依頼者様からのコメント</p>
                                                        <p className="nm">予想的中で妙に納得しました。ラブホテルに入る前からマスクを外して随分と強気ですね。でも今回の浮気調査で自分が過去にやったW不倫の過ちを反省するきっかけになりました。<br />
                                                            私はズルいですが2回の離婚は辛すぎるので、夫と話し合って関係を修復したいです。親切なカウンセリングとスピーディーな調査に感謝しています。</p>
                                                        </dd>
                                                    </dl>
                                                    </div>
                                                    <div className="chu sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">人には相談できない浮気問題は、中央リサーチのベテランカウンセラーが丁寧にお話をお伺いいたします。お困りごと、浮気調査のご相談はお気軽にどうぞ。</p>
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
                                        <p className="case serif">case06</p>
                                        <input id="case-check6" className="case-check6" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check6">夫がSNS経由で昔の彼女と連絡を取り密会していた…浮気調査で分かった事実<br />
                                        <span>最近は、SNSを通じて人と簡単に出会える時代です。今回ご紹介する事例は妻が夫のスマホ画面をキッカケに浮気発覚したケースです。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>依頼者：妻（43歳）</span>
                                                    <span className="target">対象者：会社員・夫　（45 歳）</span>
                                                </div>
                                                <p className="img"><img src="../img/investigation_case/img06.jpg" alt="" /></p>
                                                <dl className="content">
                                                    <dt>依頼内容</dt>
                                                    <dd>夫は家族思いで優しい性格ですが、ここ半年ぐらい家庭で話をしなくなり、休みの日は逃げるように外出するので、外で夫が何をしているのか気になります。<br />
                                                    ある日、私が皿洗いをしていると、夫のスマホにメッセージの着信音が何度も連続して鳴りました。その時夫はお風呂に入っており、もしかしたら仕事の緊急メッセージかもと、思わず私は画面を覗いてしまいました。<br />
                                                    すると女性らしき人が「今度はここに行きたい」といった内容でレストランやホテルの写真を連投していたのです。<br />
                                                    その後、お風呂から出てきた夫には、素知らぬふりをして何も言いませんでした。夫は確実に浮気をしているようです。ただ、どこまで本気で、相手は誰なのか考えたら眠れなくなり、浮気調査を依頼しました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>調査内容</dt>
                                                    <dd>奥様は旦那様が家庭的ではなくなり、気持ちが外に向いていることに不安を覚えていらっしゃいました。休みの日に外食したり、旅行に行くこともなくなり、お子様も寂しがっているようです。<br />
                                                    旦那様のスマホメッセージの内容から浮気をしている可能性が高いとみて、調査日を休みの日に絞り込んで行動を調査します。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査結果</dt>
                                                    <dd>土曜日の昼頃、対象者（夫）が家から出ると、駅に向かい5つ先のターミナル駅に到着しました。スマホを片手に周りをキョロキョロしながら誰かと待ち合わせをしているようです。<br />
                                                    すると、40代くらいの薄いグリーンのコートを着た女性が対象者に近づいていきました。二人は笑顔で挨拶をしてから、体を寄せ合うように密着し、駅前にあるレンタカー屋に寄りました。。<br />
                                                    きっと事前に予約していたと思われます。二人は用意されていたコンパクトカーに乗り込み、隣町にある温泉旅館へチェックインしました。そこで1泊したのを確認できました。<br />
                                                    聞き込み調査によれば、二人はなんと高校時代の同級生だと分かりました。年末に恒例の同窓会で二人は再会したようです。<br />
                                                    当時、女性が男性を好きだったらしく、その話を真に受けた対象者はSNSを通じて女性と連絡を取り合うようになり、親密な関係になったと分かりました。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="requester sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">依頼者様からのコメント</p>
                                                        <p className="nm">今回はスピーディーな調査をして頂きありがとうございました。夫は高校時代の同級生と浮気関係になったと分かり、大変驚きました。<br />
                                                            あの時、夫のスマホを覗かなかったら、浮気されていることも気が付かないままでした。浮気相手との写真は衝撃的でしたが、事実を受け止めて夫婦で一度話し合いたいと思います。</p>
                                                        </dd>
                                                    </dl>
                                                    </div>
                                                    <div className="chu sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">近頃は、SNSを通じて昔の知り合いや交際相手と連絡を取るようになり、浮気関係に発展するケースが増えています。同様のケースでお悩みの方は一度お気軽にご相談ください。</p>
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
                                        <p className="case serif">case07</p>
                                        <input id="case-check7" className="case-check7" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check7">息子の嫁の行動が怪しい…衝撃事実発覚！パート勤めではなく〇〇で働いていた<br />
                                        <span>夫・妻は距離が近すぎて、意外と本心がわからないもの。今回の事例は姑さんの素晴らしいカンが的中した浮気調査の事例をご紹介しましょう。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>依頼者：息子の母親（61歳）</span>
                                                    <span className="target">対象者：息子の嫁（27歳）</span>
                                                </div>
                                                <p className="img"><img src="../img/investigation_case/img07.jpg" alt="" /></p>
                                                <dl className="content">
                                                    <dt>依頼内容</dt>
                                                    <dd>会社員の息子は現在35歳。1年前に知人の紹介で知り合った女性と結婚しました。年末年始やお盆休みには夫婦で実家に来てくれて、結婚生活も安定していて幸せそうに見えます。<br />
                                                    しかし、私には一つ気がかりなことがあるのです。お嫁さんが「近くのケーキ屋さんでパート勤めをしています」と言ったので、先日近くを通ったので、挨拶しにお店に寄ってみました。<br />
                                                    すると、店のスタッフが「そのような人は働いていない」と言ったのです。「あれ、おかしいな」と思い、本人に電話で聞いてみると「最近辞めました」と答えました。<br />
                                                    それでも息子は「妻は週に6回もパートで働いていて、結構稼いでいる」というので、様子が変だと思うようになりました。<br />
                                                    もしかして浮気でもしているのか？と思い、余計なお世話かもしれませんが、事実を知るために浮気調査を依頼することにしました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>調査内容</dt>
                                                    <dd>息子さんのお母様はお嫁さんが週に6日家を空けて何をしているのか気にされていました。もしかして浮気の可能性もあると思い、素行と浮気の調査を依頼されました。<br />
                                                    対象者の行動パターンは夕方5時頃に家を出て、電車に乗って出かけるようです。まずは尾行をして誰とどこで何をしているのか調査を開始します。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査結果</dt>
                                                    <dd>対象者（嫁）は17時に自宅を出て駅へ足早に向かい、5つ先の駅で降りて急ぎ足で繁華街へ向かいました。そして居酒屋の入り口で誰かを待っているようです。しばらくするとスーツ姿の50代くらいの男性が近づいてきて、二人で居酒屋に入りました。<br />
                                                    二人は40分後に店を出ると、お互いの距離を3メートルくらい空けながら無言で歩いていき、順番にラブホテルに入っていきました。<br />
                                                    そして1時間後に二人で出てきて、反対方向へ歩き出し別れました。その後、5日間連続で素行を調査したところ、異なる男性と居酒屋、ラブホテルと同じパターンを繰り返していました。<br />
                                                    調査で分かったことは、対象者はデリバリーヘルスに登録していて、週6回夕方から3時間ほど働いていると判明しました。顧客の一人は60代の男性で週に1日ペースで会っています。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="requester sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">依頼者様からのコメント</p>
                                                        <p className="nm">お嫁さんが男性とラブホテルに入っていく調査報告書を見て、絶句しました。複数の男性と関係を持ち、風俗の仕事をしているなんて信じられずにショックを受けています。<br />
                                                            一番気がかりなのは息子のことです。このまま放置はできませんので、息子に打ち明けて今後の結婚生活について考えてもらうことにします。ありがとうございました。</p>
                                                        </dd>
                                                    </dl>
                                                    </div>
                                                    <div className="chu sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">今回のように、奥様が秘密の仕事をしているケースは珍しくありません。気になることがございましたら、中央リサーチまでお気軽にご相談頂ければと思います。</p>
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
                                        <p className="case serif">case08</p>
                                        <input id="case-check8" className="case-check8" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check8">知らない女性から夫に向けて電話がかかってきます・・・浮気調査で浮気相手の素行が発覚！<br />
                                        <span>専業主婦の奥様が不思議な電話がかかってくると悩んでいました。その相手とは夫の浮気相手のストレス発散だった、という驚きの事例です。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>依頼者：専業主婦（36歳）</span>
                                                    <span className="target">対象者：夫（37歳）</span>
                                                </div>
                                                <p className="img"><img src="../img/investigation_case/img08.jpg" alt="" /></p>
                                                <dl className="content">
                                                    <dt>依頼内容</dt>
                                                    <dd>私はコロナ禍でパートを辞めて、専業主婦になり、ずっと自宅にいるのですが、最近家の留守番電話に、知らない女性からの伝言が残るようになり、不気味に思っています。<br />
                                                    その内容は「夫がネクタイを忘れている」とか、「貴重品を忘れたので取りに来てください」とか要望を言うのですが、名前とその忘れた場所がどこなのかは言いません。<br />
                                                    夫にそのことを伝えると急に困ったような顔をして、会社の事務職の人だというのですが、私は何か隠していると思います。そこで浮気の可能性があると思い、調査を依頼しました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>調査内容</dt>
                                                    <dd>奥様は家の電話に知らない女性から電話がかかってくることを気にされていました。旦那様の反応から浮気の疑いがあると感じ、今回浮気調査をご依頼されました。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査結果</dt>
                                                    <dd>対象者(夫)は出勤日は朝7時半に家を出て、19時頃に帰宅する規則正しい生活をされています。しかし、金曜日は会社の同僚たちとスナックへ行き、夜の12時頃まで飲む行動パターンだと分かりました。<br />
                                                    対象者には行きつけのスナックが3件あり、そのうちの一つは、対象者が一人で訪れるお気に入りのお店です。家に電話をかけてくる女性はそのスナックで働いていると判明しました。<br />
                                                    対象者は仕事仲間とそのスナックを訪れたことがきっかけで、その女性と仲良くなり、外で食事やデートをする関係になったようです。<br />
                                                    二人で女性のマンションに出入りする証拠写真も残しました。対象者とスナック勤務の女性は6ヶ月くらい浮気関係にあります。<br />
                                                    会社の同僚も対象者がスナック勤務の女性と浮気をしている事実を知っています。女性は浮気相手の家にわざわざ電話をして、浮気相手の妻に「あなたの旦那が忘れ物をしましたよ」と浮気を匂わせました。<br />
                                                    対象者は一度は別れようとしたものの、女性に泣きつかれて別れられず困っているようです。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="requester sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">依頼者様からのコメント</p>
                                                        <p className="nm">今回は素早い対応をして頂いて感謝しております。夫は会社の仲間と飲み歩くのが好きですが、まさかスナック勤務の女性と浮気をして困っているとは情けない話です。<br />
                                                            会社の同僚にも夫の素行が知られているので、出世も難しいと思いました。証拠写真を見て、夫にしっかり反省してもらうことに決めました。ありがとうございました。</p>
                                                        </dd>
                                                    </dl>
                                                    </div>
                                                    <div className="chu sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">会社での飲み会がキッカケでホステスやスナック勤務の女性と知り合うケースは珍しくありません。<br />
                                                            旦那様は別れたくても別れられない状態でお困りのようです。浮気調査の結果をキッカケに夫婦関係が見直されて、関係が改善されることを心から祈っております。</p>
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
                                        <p className="case serif">case09</p>                                        
                                        <input id="case-check9" className="case-check9" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check9">浮気期間が30年超え！夫が妻に隠し続けたもう一つの家庭が浮気調査で発覚<br />
                                        <span>当社は多くの浮気問題のご相談を受けますが、多くの浮気カップルの平均的な交際期間は1年から1年半くらいです。今回ご紹介するのは浮気期間がなんと35年という驚きのケースです。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>依頼者：専業主婦（63歳）</span>
                                                    <span className="target">対象者：会社代表・夫（65歳）</span>
                                                </div>
                                                <p className="img"><img src="../img/investigation_case/img09.jpg" alt="" /></p>
                                                <dl className="content">
                                                    <dt>依頼内容</dt>
                                                    <dd>私の夫は地元広島県で不動産業を営んでおります。私は事務の手伝いをしていましたが、退職して今は専業主婦です。最近、近所の方に我が家の車を温泉施設で見かけたというのです。<br />
                                                    私は温泉に行っていませんし、夫は会社に行く通勤時しか車を運転しないはず。夕食の時に「近所の人が温泉施設で家の車を見たそうだけど」と聞いたら話をはぐらかされました。<br />
                                                    夫は何か知られたくないことを隠しているに違いないです。浮気していることも想定して探偵社に調査を依頼することにしました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>調査内容</dt>
                                                    <dd>旦那様は出勤時にしか車を運転しないはずが、先日温泉施設の駐車場に車が止まっているのを偶然ご近所の方が見かけました。旦那様の反応から浮気の可能性があるとみて調査します。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査結果</dt>
                                                    <dd>対象者（夫）は仕事が終わる19時頃に会社を出て、運転席に乗り込みましたが出発しません。社員たちが続々と会社を後にして、最後に一人の女性が出てきました。５０代くらいの落ち着いた雰囲気の女性です。<br />
                                                    女性は対象者の車に近づくと、周りをぐるっと見渡してから助手席に乗り込みました。調査員の聞き込みによれば、会社ではほとんどの社員が知っている浮気関係だと分かりました。<br />
                                                    女性が新入社員として18歳の頃に入社してからなんと35年くらい関係が続いているそうです。<br />
                                                    二人は女性のマンション宅に入っていき、一晩泊まると対象者は自宅へ帰っていきました。<br />
                                                    仕事が終わると女性のマンションに宿泊する事が多く、二人でよく温泉に行っていることも社員たちは知っていました。対象者は愛人と二重生活をしてバランスを取っていました。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="requester sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">依頼者様からのコメント</p>
                                                        <p className="nm">夫の浮気相手がまさか職場の女性だったとは…。私も何度か話をしたことがある女性だったので驚きとショックを隠しきれません。今年で結婚生活は40年、しかし浮気期間が35年だなんて、今まで気が付かなかった自分が情けないです。決定的な証拠をありがとうございました。</p>
                                                        </dd>
                                                    </dl>
                                                    </div>
                                                    <div className="chu sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">浮気関係もズルズルと続くとお互いに馴れ合って別れられなくなるケースがあります。離婚は考えていなくても、もう一つの家庭を持つような感じです。実際にありますので要注意です。</p>
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
                                        <p className="case serif">case10</p>
                                        <input id="case-check10" className="case-check10" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check10">夫に浮気をされた妻が取った行動は…浮気のリベンジだった！浮気調査の衝撃事実<br />
                                        <span>専業主婦はずっと家にいるイメージがあるかもしれません。最近は、スマホのアプリ、SNS、習い事やスポーツジムで既婚者同士の出会いを求めるケースが起きています。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                    <span>依頼者：会社員・夫（41歳）</span>
                                                    <span className="target">対象者：専業主婦（32歳）</span>
                                                </div>
                                                <p className="img"><img src="../img/investigation_case/img10.jpg" alt="" /></p>
                                                <dl className="content">
                                                    <dt>依頼内容</dt>
                                                    <dd>結婚2年目の夫婦です。実は去年、私は出会い系アプリで知り合った女性と浮気関係にあり、妻にスマホを見られたことで浮気がバレ、、大喧嘩したことがありました。<br />
                                                    その後は夫婦関係の修復に努め、妻も許してくれて幸せに過ごしていました。でも最近、気になることがあって、妻が週2回通っているスポーツジムで誰かと会っている気がするのです。<br />
                                                    妻がジムに行く日は昼頃ですが、帰りは夜中の12時頃です。深夜2時頃になることもあります。顔が赤くてほろ酔いの気分の時もあり、明らかに怪しいです。そこで浮気調査をお願いしました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                    <dt>調査内容</dt>
                                                    <dd>奥様はスポーツジムの帰りが深夜になり、お酒を飲んで帰宅することがあるため、奥様の行動調査と浮気の可能性を調査することになりました。調査の日程と時間、場所が決まっていますので、スムーズに調査が進むでしょう。</dd>
                                                </dl>
                                                <dl className="content">
                                                    <dt>調査結果</dt>
                                                    <dd>対象者(妻)はいつも通りにスポーツジムに入ると、黙々とエアロバイクを漕いでトレーニングに励んでいました。しばらくすると、30代くらいの細マッチョな男性が近づき、一緒にバイクを漕ぎながら、楽しそうにおしゃべりするのを確認できました。<br />
                                                    二人で2時間位トレーニングすると、一緒にジムを出て、駐車場に停めてある男性のSUVに乗り込みました。その後はオシャレな個室カラオケで2時間位過ごし、ほろ酔い気分で出てきました。<br />
                                                    その後、二人の乗った車はラブホテルの駐車場に入っていきました。3時間後に二人が出てきて、男性が対象者の自宅マンション近くまで車で送り、車内でバイバイのキスをしたのを撮影しました。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="requester sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">依頼者様からのコメント</p>
                                                        <p className="nm">まず、丁寧な調査報告書を作成いただきありがとうございました。悲しい結果となり、ショックで立ち直れそうもありません。妻に見せたらリベンジだと反論されダブルショックです。<br />
                                                            妻を愛していますが、自分も浮気をして悲しませた経験があるので、怒りたくても怒れない情けなさです。私たちは離婚に向けて話し合いを進めることにしました。</p>
                                                        </dd>
                                                    </dl>
                                                    </div>
                                                    <div className="chu sec">
                                                    <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">自宅に籠もりきりの専業主婦であっても、簡単に異性と出会える時代ですから、思わぬ事実が発覚することがあります。何かお困りのことがありましたら、一度ご相談ください。</p>
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

const jsonN = "総合探偵社 中央リサーチ広島本社",
jsonT = "浮気調査・不倫調査",
jsonS = "fickleness",
jsonD = "広島で浮気調査を依頼する場合、探偵事務所選びは非常に重要です。この記事では、広島の探偵事務所で浮気調査を依頼する前に知っておくべきことを解説します。";

const jsonLd = {
    "@context": "http://schema.org/",
    "@graph":[
        {
            "@type": "Article",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.chuou.biz/${jsonS}/`
            },
            "headline": "広島の探偵事務所で浮気調査を依頼する前に知っておくべきこと",
            "description": `${jsonD}`,
            "image": {
            "@type": "ImageObject",
            "url": "https://www.chuou.biz/img/top/title_sp.jpg",
            "height": 568,
            "width": 750
            },
            "author": {
                "@type": "Organization",
                "name": `${jsonN}`
            },
            "publisher": {
                "@type": "Organization",
                "name": `${jsonN}`,
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.chuou.biz/img/title.png",
                    "width": 430,
                    "height": 36
                }
            },
            "datePublished": "2023-02-28T09:00:00+09:00",
            "dateModified": "2023-02-28T09:00:00+09:00"  
        },
        {
            "@type":"WebSite",
            "@id":`https://www.chuou.biz/${jsonS}/#website`,
            "url":`https://www.chuou.biz/${jsonS}/`,
            "name":`${jsonT}｜ 広島の探偵　浮気調査なら55年の実績｜${jsonN}`,
            "description":`${jsonD}${jsonT}`,
            "inLanguage":"ja",
            "publisher":{
                "@id":`https://www.chuou.biz/${jsonS}/#person`
            }
        },
        {
            "@type":"WebPage",
            "@id":`https://www.chuou.biz/${jsonS}/#webpage`,
            "url":`https://www.chuou.biz/${jsonS}/`,
            "name":`${jsonN}`,
            "description":`${jsonD}${jsonT}`,
            "inLanguage":"ja",
            "isPartOf":{
                "@id":`https://www.chuou.biz/${jsonS}/#website`
            },
            "breadcrumb":{
                "@id":`https://www.chuou.biz/${jsonS}/#breadcrumblist`
            },
            "datePublished":"2023-2-22T21:00:00+09:00",
            "dateModified":"2023-2-24T19:00:00+09:00"
        },
        {
            "@type":"BreadcrumbList",
            "@id":`https://www.chuou.biz/${jsonS}/#breadcrumblist`,
            "itemListElement":[
                {
                    "@type":"ListItem",
                    "@id":`https://www.chuou.biz/#listItem`,
                    "position":1,
                    "item":{
                        "@type":"WebPage",
                        "@id":`https://www.chuou.biz/`,
                        "name":`${jsonN}`,
                        "description":"当探偵社は広島に本社を構え、皆様の信頼に支えられ55年の実績を重ねてまいりました。調査・解決共経験豊富な当社にまずはお気軽にご相談ください。",
                        "url":`https://www.chuou.biz/`
                    },
                    "nextItem":`https://www.chuou.biz/${jsonS}/#listItem`
                },
                {
                    "@type":"ListItem",
                    "@id":`https://www.chuou.biz/${jsonS}/#listItem`,
                    "position":2,
                    "item":{
                        "@type":"WebPage",
                        "@id":`https://www.chuou.biz/${jsonS}/`,
                        "name":`${jsonT}｜${jsonN}`,
                        "description":`${jsonD}`,
                        "url":`https://www.chuou.biz/${jsonS}/`
                    },
                    "previousItem":`https://www.chuou.biz/#listItem`
                }
            ]
        }
    ]
}

export const Head = () => (
    <>
        <Seo
            title2="広島で浮気調査・不倫調査は総合探偵社中央リサーチ広島本社にお任せください"
            description="広島で浮気調査・不倫調査をお考えなら、総合探偵社中央リサーチ広島本社にお任せください。55年の実績を誇り、信頼と実績でお客様の問題を解決します。まずは無料相談をご利用ください。"
            keyword="広島、浮気調査、不倫調査、探偵、総合探偵社、中央リサーチ広島"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
)
export default fickleness
