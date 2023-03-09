import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
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
                <Header h1title="お客様の声" />
                <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
                <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">
                        
                        <div className="investigation_case pb">
                            
                            

                            <div className="box">
                                <div className="bg">

                                    
                                    <div className="head">
                                        <p className="case serif">浮気調査</p>
                                        <input id="case-check1" className="case-check1" type="checkbox" checked />
                                        <label className="case-label" htmlFor="case-check1">泣き続けた心が晴れて、家族の絆が強まりました <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                <span>ご依頼者様：S様主婦・30代</span>
                                                <span className="time">調査期間：20時間</span>
                                                </div>
                                                
                                                <dl className="content">
                                                <dt>浮気調査を依頼されたきっかけは？</dt>
                                                <dd>家庭的で優しい夫の様子が変わり、態度が冷たくなって、帰宅しない日が増えたからです。ある日、車の中が化粧品の匂いがすることに気がついて、浮気を疑い始めました。誰にも相談できず、このまま家庭が崩壊すると思うと、一人で一日中泣き続けました。夫が外出時に誰といるのか気になって、探偵に調査を依頼する方法があるとネットで知りました。まだ子供が小さいので離婚は考えていませんが、浮気の事実を確かめたいと思い、浮気調査を依頼することにしました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>人生で初めて探偵社を利用するので、わからないことばかりでした。とりあえず、地元広島で浮気調査に定評のある業者を探して、電話相談で話を聞いてもらうことに。その中でも中央リサーチさんは私が動揺していても優しく聞いてくれて、将来を見据えたアドバイスをいただけたので、信頼できると直感しました。面談を予約して、相談員の方も親切で分かりやすく、終始安心でした。調査のスケジュールと料金の説明もクリーンで好印象でしたので、中央リサーチさんに浮気調査の依頼を決めました。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>調査期間中はこまめに担当相談員の方から状況報告の連絡を頂き、スピーディーな対応。おかげで調査中に不安にならずに、いつも通りに過ごせました。調査報告書には夫が浮気相手とホテルに入る写真があり驚きましたが、どこか冷静な自分もいました。浮気調査の目的は夫に反省してもらうことでしたので、これは確かな証拠で自分は絶対に負けないと確信しました。休日に改めて夫と話し合い、証拠を目の前に出すと、顔面蒼白で黙り込みました。その後、私に深く謝罪して、私を傷つけたこと、子供を無視して、無駄なお金を使って遊んだことを後悔していました。それからは、いつもの優しい夫に戻り、家庭に笑顔が戻りました。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>夫に探偵を付けるなんておかしいと思う方はまだ多いかと思います。自分もそうでした。でも正直言って、証拠がなければ現状は何も変わらないです。浮気の証拠を見た時は辛いですし、金銭的な負担もあるので、見て見ぬ振りをする人も多いと思います。証拠があることで夫は逃げずに現実に直面して話し合いの姿勢を見せてくれました。そのためにも、浮気調査は意味があるものだと思います。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="chu sec">
                                                        <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                            <p className="b">中央リサーチから一言</p>
                                                            <p className="nm">今回はご利用ありがとうございました。ご家庭に平穏が戻られたと聞き、スタッフ一同喜びの気持ちでいっぱいです。どうぞ、いつまでもお幸せに。</p>
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
                                        <label className="case-label" htmlFor="case-check2">確固たる証拠が浮気夫に教訓を与えました。浮気調査後に強くなった家庭の絆 <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                <span>ご依頼者様：K様 主婦・会社員、40代</span>
                                                <span className="time">調査時間：20時間</span>
                                                </div>                                
                                                <dl className="content">
                                                <dt>浮気調査を依頼されたきっかけは？</dt>
                                                <dd>「会社の飲み会」と言い訳をしながら、夫が女性と会っているのを私は知っていました。自然と別れるだろうと思っていましたが、1年経った後も、クレジットカードの明細書に食事や旅行に出かけていた記録がありショック。銀行口座も夫婦別々にしようと言い出して、浮気の本気度に焦りました。まだ子供が小学生ですので、経済的にも離婚は考えていませんが、浮気を止めさせるために、浮気の証拠を突きつけて話し合うことに決めました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>広島で浮気調査に依頼した人の口コミを見て、中央リサーチさんを知りました。実績が長くて電話対応も丁寧で、説明もわかりやすかったです。面談でも同様の事例などを見せていただいて、「ここなら大丈夫」と感じて依頼を決めました。探偵社の利用は初めてでしたが、相談員やスタッフの方たちが優しく接してくれて、安心して調査を依頼することができました。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>夫が浮気相手と会うのは木曜日か金曜日、仕事後に2日くらい宿泊するパターンだったので、狙った日時に調査を開始。調査員の方が追跡し、迅速に対応してくれました。調査中も状況を細かく連絡して頂いて、結果待ちの間も安心でしたね。<br />
                                                    調査報告書にはこと細かい情報が記されていて、驚きとショックでしばらく落ち込みました。その後、夫が帰宅してリビングでくつろいでいる時に、そっと報告書を差し出しました。すると、夫は驚いた顔で黙り込み、しばらくすると浮気を始めた3年前から今までの現状を話し出しました。職場不倫は会社にもバレており、昇格テストに落ちたことも告白しました。すべては自分のせいだと反省し、今では家庭内の会話も増えて、平和な日常を取り戻しています。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>今回は迅速に調査して頂いてありがとうございました。中央リサーチさんのご対応はプロフェッショナルで調査も丁寧で早く、大満足しております。お陰様で家庭が平穏になり、感謝しています。主人も何かを悟ったような顔をしています。本当にありがとうございました。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="chu sec">
                                                        <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                            <p className="b">中央リサーチから一言</p>
                                                            <p className="nm">今回はご利用ありがとうございました。事前に色々と情報提供していただき、早く問題解決に繋がり、スタッフ一同、安心しております。また、お気軽に近況をご報告ください。</p>
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
                                        <input id="case-check3" className="case-check3" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check3">浮気調査が自分の未来を守ってくれた！離婚調停が無事に終わって一安心です <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>

                                        <div className="info">
                                            <div className="hito">
                                            <span>ご依頼者様：M様　英会話教室経営、妻、40代</span>
                                            <span className="time">調査時間：20時間</span>
                                            </div>
                                            
                                            <dl className="content">
                                            <dt>浮気調査を依頼されたきっかけは？</dt>
                                            <dd>夫がリビングでスマホからメッセージを送信していたり、電話で呼び出されて泊まり込みして帰宅しない、といった不審な行動が増えたからです。「きっと浮気しているに違いない」と思いました。夫は結婚後も何度も浮気をして、私は何度も泣きました。今度こそは決定的な証拠を掴んで、夫と離婚しようと密かに決めた次第です。</dd>
                                            </dl>
                                            <dl className="content cb">
                                            <dt>中央リサーチを選んだ理由は？</dt>
                                            <dd>中央リサーチさんは広島で55年の実績があるからです。経験が浅い業者は不安なので、運営が長い業者だけを絞り込みました。4社くらい電話相談をしましたが、中央リサーチさんはプロの対応で説明が分かりやすく、信頼できると感じました。面談でも親切な対応で安心したので、早く解決するために、浮気調査を依頼することにしました。</dd>
                                            </dl>
                                            <dl className="content">
                                            <dt>調査の内容はどうでしたか？</dt>
                                            <dd>私は夫の浮気相手の情報が全くなく、夫の行動パターンを伝えるしか情報がなかったのですが、迅速に調査して頂いて、流石はプロだと感動しました。私は自宅で教室を開いているので、メールで状況報告をして頂きました。コチラの要望にもしっかりと応えてくれて感謝しています。調査報告書は裁判で通用する内容で大満足しました。弁護士さんの紹介もしていただけましたので、裁判までスムーズに進みました。離婚調停では無事に浮気の事実が認められて、精神的苦痛のダメージにより、慰謝料請求と養育費の支払いも認められて、今は晴れ晴れした気持ちです。</dd>
                                            </dl>
                                            <dl className="content">
                                            <dt>ご利用になったご感想をお聞かせください</dt>
                                            <dd>離婚の準備は大変だと想像していましたが、中央リサーチさんにどう進めればよいのかアドバイスしていただき、ストレスなく思い通りの結果になって、本当に感謝しています。裁判に認められる浮気の証拠収集は自分一人では無理なことだと痛感し、浮気調査をして間違いなかったと実感しております。今回は本当にお世話になりました。ありがとうございました。</dd>
                                            </dl>
                                            <div className="comment">
                                            <div className="chu sec">
                                                <dl>
                                                <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">ご利用ありがとうございました。無事に裁判が終わったと聞いてスタッフ一同、ホッと一安心しております。これからご依頼者様に明るい未来が訪れるように願っております。</p>
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
                                        <input id="case-check4" className="case-check4" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check4">妻の浮気を放置しないで良かった！不利な立場で離婚する結果にならないために… <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                <span>ご依頼者様：K様　会社員、夫（40代）</span>
                                                <span className="time">調査時間：20時間</span>
                                                </div>
                                                
                                                <dl className="content">
                                                <dt>浮気調査を依頼されたきっかけは？</dt>
                                                <dd>結婚して7年になりますが、妻が会話をしなくなり、体に触られるのも避けるようになりました。妻も正社員として働いていて、共働きですので、出会いの場は多いかと思い、不安になったのです。特に浮気のサインは見当たりませんが、現状を把握したいので浮気調査を依頼しようと考えました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>広島の土地勘があると思ったからです。私も妻も広島県出身、広島在住、広島の企業に勤めておりますので、地元の浮気調査に精通している業者にしようと思い、中央リサーチさんに決めました。正直、妻に探偵を付けるなんて、自分のやっていることは正気じゃないと罪悪感もありました。それでも依頼を決めたのは、浮気の可能性が高いと思ったことと、事実であれば離婚せざるを得ないと思ったからです。自分を裏切る妻は人生のパートナーになり得ませんからね。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>私が伝えた妻の情報は僅かでしたが、こんなにも細かい情報を入手していただいて驚いております。衝撃の事実は上司との社内不倫、ラブホテルに何度も出入りする写真を見て、一気に愛が冷めました。夫婦関係の修復なんて無理です。今後どうするか、相談員の方と話し合い、離婚を決めました。調査報告書の内容が素晴らしく、弁護士を通じて無事に離婚が成立しました。中央リサーチさんのおかげで真実が分かり、これからは最愛のパートナー探しに励みます。まさか、自分が探偵社を利用する機会があるとは思いませんでした。よい人生経験になりました。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>今回は、丁寧に状況報告をしていただき、調査報告書にまとめて頂きありがとうございます。もう悲しみは癒えましたのでご心配なく。中央リサーチさんに依頼して良かったです。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="chu sec">
                                                        <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                            <p className="b">中央リサーチから一言</p>
                                                            <p className="nm">こちらこそ、ご利用ありがとうございました。調査で浮気の事実が発覚し、早い段階から離婚を決断されて、慰謝料請求もできたとお伺いして安心しております。ご依頼者様がお幸せになることを心から祈っております。</p>
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
                                        <input id="case-check5" className="case-check5" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check5">娘の婚約者に謎が多い…結婚調査でもモヤモヤが晴れました <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                <span>ご依頼者様：娘の母親（50代）　娘の婚約者を結婚調査</span>
                                                <span className="time">調査時間：20時間</span>
                                                </div>
                                                
                                                <dl className="content">
                                                <dt>結婚調査を依頼されたきっかけは？</dt>
                                                <dd>娘が出会い系アプリで出会った4歳年上の男性と婚約し、実家に挨拶に来ました。感じのいい好青年でしたが1時間位しか話す時間がなく、ご家族について聞くことができませんでした。もうすぐ籍を入れるというので、その前に男性のご家族について調べてもらいたいと思い、今回探偵社に結婚調査をお願いすることにしました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>友人の紹介です。私が所属するコーラス部の仲間が「子供の婚約者は一度調査をすべき」と言っていたのを思い出し、中央リサーチさんの調査力を知り、問い合わせしました。探偵社はテレビで見た印象からなんとなく怖いイメージがあり、正直不安もありました。しかし、中央リサーチさんは明るいスタッフさんが笑顔で出迎えてくれて、清潔感もあり良かったです。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>調査内容は細かくてとても驚きでした。こんなに追求できるものなのですね。両親の生活の様子や性格、近所付き合いや健康状態まで分かり、「凄いね」と主人も驚いています。特に気掛かりなこともなく、安心して結婚を承諾したいと思います。娘から出会い系アプリで知り合ったと聞いて、怪しい人だったらどうやって止めようかと考えていましたが、大丈夫そうです。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>今回は大変お世話になりました。自分は心配しすぎだと思っていましたが、「結婚調査のご依頼者は親御さんが多いですよ。」といっていただいて安心して依頼できました。今、お子様の結婚相手について悩んでいる方は、結婚調査で気持ちのモヤモヤは晴れますのでおすすめですよ。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="chu sec">
                                                        <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                            <p className="b">中央リサーチから一言</p>
                                                            <p className="nm">今回は当探偵社の結婚調査をご利用いただき、ありがとうございます。最近は、ネットやアプリを通じて知り合い、婚約に至るケースが多く、親御さんからの結婚調査依頼が増えています。同様のお悩みや気になることがございましたら、一度お気軽にご相談ください。</p>
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
                                        <input id="case-check6" className="case-check6" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check6">結婚調査の重要性を痛感しています…本当に依頼してよかった <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                            <div className="hito">
                                            <span>ご依頼者様：息子の母親（60代）　息子の婚約者を結婚調査</span>
                                            <span className="time">調査時間：20時間</span>
                                            </div>
                                            
                                            <dl className="content">
                                            <dt>結婚調査を依頼されたきっかけは？</dt>
                                            <dd>我が家は家族経営の和菓子店を営んでおり、長男が跡継ぎになります。この度その長男に結婚の話が出て、婚約者の女性と一緒に食事をすることになりました。婚約者の女性は息子と同い年の32歳で接客業の経験があり、笑顔が素敵な女性です。しかし、気になるのは離婚歴があり、3歳の息子さんがいるとのことで、再婚になるようです。離婚した理由をその場で聞くのは失礼になると思い、聞きませんでしたが、真実を知りたいと思い、探偵社の結婚調査を依頼することにしました。</dd>
                                            </dl>
                                            <dl className="content cb">
                                            <dt>中央リサーチを選んだ理由は？</dt>
                                            <dd>「広島　結婚調査」でネット検索し、何件か電話してみたのですが、その中でも電話応対が丁寧で分かりやすく、実績も豊富な中央リサーチさんに相談してみることに決めました。実際に相談室に行ってみると、スタッフさんが親切に話を聞いてくれて、面談でも調査の流れや料金についてしっかり説明してくれたので納得して依頼することを決めました。</dd>
                                            </dl>
                                            <dl className="content">
                                            <dt>調査の内容はどうでしたか？</dt>
                                            <dd>調査依頼の後も状況報告のこまめな連絡をいただけましたので、親切な対応に感謝しています。結果的に、息子の婚約者は前の夫からのDV被害で離婚に至ったと分かり、驚いております。しかし、本人は仕事をしながら子育てをされて、真面目な方だと分かりましたので、息子との結婚が上手くいくことを願うばかりです。跡継ぎのことも積極的な様子でしたので、結婚後も上手くサポートできればと思っております。</dd>
                                            </dl>
                                            <dl className="content">
                                            <dt>ご利用になったご感想をお聞かせください</dt>
                                            <dd>短期間の間に、これだけ多くの情報を収集していただき、本当に感謝の気持ちでいっぱいです。息子にも、婚約者本人にも聞き出せずにいましたので、中央リサーチさんに依頼して良かったです。調査員と相談員、スタッフの皆様に感謝申し上げます。ありがとうございました。</dd>
                                            </dl>
                                            <div className="comment">
                                                <div className="chu sec">
                                                    <dl>
                                                    <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                    <dd>
                                                        <p className="b">中央リサーチから一言</p>
                                                        <p className="nm">今回はご利用ありがとうございました。お子様の婚約者に離婚歴がある場合、親御さんがその理由を知っておいて損はありません。また同じ離婚を繰り返さないためにも、結婚調査は有効です。</p>
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
                                        <input id="case-check7" className="case-check7" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check7">高校生の息子が急に家出！早急に対応して頂いて感謝しきれません <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                <span>ご依頼者様：息子のご両親　50代　高校生の息子さんの家出調査</span>
                                                <span className="time">調査時間：20時間</span>
                                                </div>
                                                
                                                <dl className="content">
                                                <dt>家出調査を依頼されたきっかけは？</dt>
                                                <dd>高校生の息子が夕方頃に、急にリュック一つで家を飛び出してから3日間家に帰ってこなくなりました。学校も欠席していると連絡があり、不安になりました。警察にも相談しましたが、事件性がないと判断され対応してもらえず、探偵社に家出調査を依頼することにしました。息子はいつもリビングでSNSをやっていて、誰かの相談に乗っていると話していたので、誰かとSNSを通じて知り合い、それが家出と関係があるのかと思いました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>日数が経過し、万が一事件に巻き込まれたら危ないと思い、焦っていました。ネットで見つけた中央リサーチさんは広島で50年以上の調査実績があり、家出調査も受け付けていると聞いてすぐに問い合わせしました。相談員の方は優しく話を聞いて下さり、早急に見つけ出しますと言ってくれたので、心強かったですね。対応がテキパキとしていたので、ここならきっと大丈夫だと思ってお願いしました。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>驚くほどスピーディーで感動しました！息子はSNS上で知り合った隣街の男子高校生に家出を誘われ、一緒にいることが分かりました。その高校生は髪を染めたことを父親に激怒され、それがきっかけで、息子とプチ家出の計画を立てたようです。広島市内のネットカフェで二人一緒にソファーで漫画を読んでいるところを見つけてもらい、無事に帰宅しました。調査期間中もこまめにスマホにメッセージや電話連絡をしていただき、お心遣いに本当に感謝しています。相手の親御さんからも謝罪していただきまして、二人共無事でしたので、本当に良かったです。最近は、物騒な事件も多いので、早めに依頼して良かったと思っています。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>中央リサーチさんの調査力はもちろんのこと、こちらに心配をかけないように、気配りしていただき、本当に親切だと思いました。困ったときの警察ではなく、困った時は中央リサーチさんです。本当にありがとうございました。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="chu sec">
                                                        <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                            <p className="b">中央リサーチから一言</p>
                                                            <p className="nm">今回はご依頼いただきありがとうございました。息子様が無事に帰宅されてスタッフ一同胸を撫でおろしております。こちらこそ満足いただけたことを嬉しく思っています。</p>
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
                                        <input id="case-check8" className="case-check8" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check8">認知症のおじいちゃんが帰ってこない！早急な安否確認に安心しました <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                <span>ご依頼者様：主婦　50代　おじいちゃんの家出調査</span>
                                                <span className="time">調査時間：20時間</span>
                                                </div>
                                                
                                                <dl className="content cb">
                                                <dt>家出調査を依頼されたきっかけは？</dt>
                                                <dd>認知症の70代のおじいちゃんが買い物に行くと言ってそのまま帰ってこなくなり、2日間が過ぎました。認知症でもいつもは必ず帰宅して、遅くなる時は携帯電話から電話もしますが、今回は電話も繋がらずに不安になり、探偵社に行方不明者の調査を依頼することにしたのです。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>まずは警察に相談しましたが、早急に動いてもらえないと分かり、広島で家出調査をしている探偵社を探し、ネットで中央リサーチさんを見つけました。電話対応が親切で早急に調査を依頼できると分かり、すぐに調査をお願いすることに。動揺している私を落ち着かせてくれて、とても安心しました。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>調査中はこまめに現在の状況を伝えてくれましたので、一緒に現場にいるような気持ちになりました。結局、うちのおじいちゃんは昔住んでいた広島市内の一軒家に行くために、電車に乗って一人で歩いていたそうです。2日間、駅前の宿に泊まり、昔通った銭湯に行ったらしく、昔の生活を思い出して、足が動いたのかもしれません。ウロウロ街を歩いているところを保護されて、無事に自宅まで帰ってくることができました。無傷で本当に安心しました。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>家族に認知症の方がいる場合、ウロウロと街を歩き回ったり、何かと行動が心配な方も多いかと思います。私も今回は事件や事故に巻き込まれたら…と心配でした。そんな時は探偵の調査が本当に役立つものだと実感しました。自分では絶対に見つけることはできません。本当に、中央リサーチさんの迅速なご対応に感謝しています。ありがとうございました。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="chu sec">
                                                        <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                            <p className="b">中央リサーチから一言</p>
                                                            <p className="nm">今回は、ご依頼いただきありがとうございました。無事に帰宅され、無傷で問題がなかったとお聞きして、スタッフ皆、胸を撫でおろしています。お困りの時はお力になりますので、いつでもお気軽にご相談いただければと思います。</p>
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
                                        <p className="case serif">嫌がらせ対策</p>
                                        <input id="case-check9" className="case-check9" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check9">元彼が自宅マンションに来て悪質な嫌がらせを…証拠のおかげで無事解決して平穏に！ <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                <span>ご依頼者様：Kさん（30代）　事務職</span>
                                                <span className="time">調査時間：20時間</span>
                                                </div>
                                                
                                                <dl className="content">
                                                <dt>嫌がらせ調査を依頼されたきっかけは？</dt>
                                                <dd>元彼が復縁を求めて、自宅マンションに待ち伏せする日が多くなりました。私は復縁するつもりはなく、電話も拒否して関係を断っていたのですが、それから悪質な嫌がらせを受けるようになりました。自宅マンションの郵便受けにゴミや雑草を溢れるほど入れられたり、私の写真をマンション共有部分の床に撒き散らしたり、相当悪質でした。警察に動いてもらうには証拠が必要と知り、今回探偵社に嫌がらせ調査を依頼することにしました。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>広島で調査実績が50年以上あって、嫌がらせ調査の評判が良かったからです。友人も利用したことがあり、おすすめされて即決しました。嫌がらせの人物は明確だったので、とにかく本人が嫌がらせをしている決定的な証拠撮影に専念していただきました。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>中央リサーチさんは問い合わせの電話対応から、面談での説明、そして調査の段取りまでとても迅速でプロフェッショナルだと思いました。慣れているというか、テキパキしていて、安心して任せることができました。隠しカメラにしっかり犯人を映し出すことに成功し、早めに警察に相談して、早急に対応してもらうことができました。本人は反省し、ピタリと大人しくなり、被害が止まりました。警察のアドバイスで念の為、引越しすることにしました。今回は迅速な調査をしていただき、感謝しています。ありがとうございました。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>嫌がらせの調査を探偵社に依頼できると知らない方も多いと思います。私も知らなかったのですが、友人に相談したところ、探偵社で解決できると知り、実際に被害が収まりました。警察に相談しても、事件性や信憑性がないと対応してもらえないので、まずは探偵社に嫌がらせ調査をすると良いと思います。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="chu sec">
                                                        <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                            <p className="b">中央リサーチから一言</p>
                                                            <p className="nm">今回は、ご依頼いただきありがとうございました。嫌がらせ被害が止まったと聞いて、安心いたしました。嫌がらせは時間とともにエスカレートする傾向にあります。同様の被害でお悩みの方は一度ご相談いただければと思います。</p>
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
                                        <p className="case serif">嫌がらせ対策</p>
                                        <input id="case-check10" className="case-check10" type="checkbox" />
                                        <label className="case-label" htmlFor="case-check10">ネットの誹謗中傷の犯人は身近にいた！嫌がらせ調査で仕事も順調に！ <FontAwesomeIcon icon={faAngleDown} /></label>
                                        <div className='case-content'>
                                            <div className="info">
                                                <div className="hito">
                                                <span>ご依頼者様：料理教室運営（30代）　ネットでの誹謗中傷による嫌がらせ調査</span>
                                                <span className="time">調査時間：20時間</span>
                                                </div>
                                                
                                                <dl className="content">
                                                <dt>嫌がらせ調査を依頼されたきっかけは？</dt>
                                                <dd>広島県内の自宅マンションの一室でお料理教室を運営しています。生徒さんは5名の少人数制です。口コミで少しずつ生徒さんが増えていました。しかし、SNSや口コミサイトで私の調理師免許は嘘だと嫌がらせや誹謗中傷が多くなり、生徒さんが激減してしまったのです。どこの誰が営業妨害をしているのか検討もつかずに悩んでいました。探偵社に嫌がらせ調査を依頼すれば、ネットでの誹謗中傷も犯人を見つけ出して、証拠を掴むことができると聞いて、思い切って依頼することにしたのです。</dd>
                                                </dl>
                                                <dl className="content cb">
                                                <dt>中央リサーチを選んだ理由は？</dt>
                                                <dd>広島の探偵社を調べていたら、中央リサーチさんの実績や運営期間が50年以上もあると分かり、早速問い合わせをしました。電話相談した時に、親身になって聞いてくれて、面談でも今後すべきことを分かりやすく提案してくれたので、信頼できると感じましたので、依頼をすることに決めました。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>調査の内容はどうでしたか？</dt>
                                                <dd>調査結果は具体的で明確、相当な情報量でした。嫌がらせ被害は相手に警告すると余計に被害が拡大するリスクがあるとアドバイスがあり、なるべくネットでの反応もせずに大人しく待っていました。結果は同じ市内にある料理教室のオーナーだと発覚。実は、そのオーナーは以前通っていた料理教室の元生徒さんで熱心な勉強家という印象でした。なぜ私を陥れようとしているのか理解できませんでしたが、自分がエリアでトップになるために、私以外にもネットで悪口を言っていることまで分かったのです。調査力の凄さに驚きました。</dd>
                                                </dl>
                                                <dl className="content">
                                                <dt>ご利用になったご感想をお聞かせください</dt>
                                                <dd>今回は、面談時から丁寧に話を聞いていただいてありがとうございます。生徒さんがどんどん辞めて途方に暮れていましたが、現在は前の生徒数を無事に取り戻しています。中央リサーチさんが調査してくれたおかげです。感謝してもしきれません。ありがとうございました。</dd>
                                                </dl>
                                                <div className="comment">
                                                    <div className="chu sec">
                                                        <dl>
                                                        <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                        <dd>
                                                            <p className="b">中央リサーチから一言</p>
                                                            <p className="nm">嫌がらせ調査をご依頼いただきありがとうございました。最近は、ネット上での誹謗中傷、個人情報の漏えい等、様々なご相談があります。犯人は意外にも近くにいるケースも少なくありません。気になるお悩みがございましたら、一度ご相談いただければと思います。</p>
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
            title="お客様の声"
            description="広島の探偵社「中央リサーチ」、お客様の声についてのページです。"
            keyword="お客様の声,広島,探偵,中央リサーチ"
            />
    </>
)
export default voice