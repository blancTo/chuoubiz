import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const marriage = () => {
    const pagemeta = {
        title:`結婚・身上調査`,
        slug:`marriage`
    }
    return (
        <>
        
            <div id="wrap">
            <Header h1title="結婚調査、身上調査について" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">

                        <div className="about box_flex pb">
                            <div className="info">
                            <h3 className="mp blue2">結婚する可能性のある2人のために・・・<br className="dsp_hpt" />幸せはお互いの家族の事を知ることから</h3>
                            <p>一生に関わるご縁談に際し<b className="red fm">新しく親戚関係になる事は慎重に判断せざるを得ません。</b><br />
                                失敗しないため、騙されない為、そして建設的に考えるからこそ事実を確認し納得してから前に進む事が当然の考えです。</p>
                            <p className="img nm dsp_smt"><img src="../img/marriage/img01.jpg" alt="" /></p><br className="dsp_smt" />
                            <p className="line mp"><span>結婚・身上調査の必要性</span></p>
                            <p className="txt">これから結婚される2人が、<b className="fm red">本当の幸せな結婚生活を送るために確かな「安心」を得るための大切な調査です。</b></p>
                            <p>例えば・・・反社会勢力や特殊な宗教団体との関係や家族の人物性、金銭トラブル、経歴詐称、健康面、資産状況、特殊な思想など、交際中は分からなかいことや聞きづらいことについて結婚前に調査をすることで、<b className="fm">「結婚をする時の客観的な後押し」</b>にもなり、<b className="fm">「結婚後に後悔することを事前に防ぐ」</b>ことができます。</p>
                            </div>
                            <p className="img nm dsp_hpt"><img src="../img/marriage/img01.jpg" alt="" /></p>
                        </div>
                        <div className="bg bg_wide pt pb">
                            <div className="sec">
                            <h3 className="headline">家族・親族の調査</h3>
                            <p className="txt">新しく婚姻関係を結ぶにあたり、<b className="blue2 fm">交際相手の家族事項について調査</b>いたします。<br />
                                交際中には、なかなか詳しく聞きだしにくい相手の家族や兄弟姉妹についての状況等、<b className="red fm">結婚前に調査をしておくことで、安心を得られます。</b></p>
                            <table>
                                <tbody><tr>
                                    <th>性格・風評</th><td><b className="fm">相手の両親がどのような性格で、どのように周りに思われているのか、事前に調査いたします。</b><br />
                                    同居をする場合、近隣の人との関係も大きく関わってきます。相手の両親と今後の人間関係を作る上での事前準備にもなります。</td>
                                </tr>
                                <tr>
                                    <th>生活実態・職業</th><td><b className="fm">結婚相手の両親がどのような生活を送っているのか、また、どんな仕事をしているのかについて調査を行います。</b><br />
                                    特に両親の生活環境については、結婚相手本人に大きく影響を与えている場合がありますので、結婚相手について知る意味でも、<br className="dsp_hp" />その両親の生活環境について知ることは重要になります。</td>
                                </tr>
                                <tr>
                                    <th>健康</th><td><b className="fm">先天性の病気や重い病気がないか等、なかなか聞きにくい相手の健康状態について調査いたします。</b><br />
                                    結婚前に相手の健康状態を事前に知ることで、「安心」を得られ、その後の対応についても考えることができます。</td>
                                </tr>
                                <tr>
                                    <th>思想・政治・宗教</th><td><b className="fm">結婚相手の両親がどのような思考をもっているかを調査します。</b><br />
                                    結婚相手の両親と同居をする場合、ものの考え方や思想・政治について事前に知っておくことで、<br className="dsp_hp" />結婚後の対立を防ぐことができます。</td>
                                </tr>
                                </tbody></table>
                            </div>
                            <div className="sec">
                            <h3 className="headline">本人事項の調査</h3>
                            <p className="txt"><b className="blue2 fm">結婚相手の人物性や、周りからの評判について調査</b>をいたします。付き合いが長くても、交際中と結婚後では違ってくるものです。</p>
                            <p className="txt">事前に調査することで、これから一生を添い遂げる相手について「客観的に」知ることができます。<b className="red fm">実情を知ることで安心を得られ、不測の事態を防ぐことができます。</b></p>
                            <table>
                                <tbody><tr>
                                    <th>学歴・経歴・職業</th><td><b className="fm">学歴・職歴・婚姻歴については、事実と照らし合わせ、詐称がないか等を調査いたします。</b><br />
                                    経歴等を知ることで、一緒に過ごしていない期間の、バックグラウンドについて知ることができます。</td>
                                </tr>
                                <tr>
                                    <th>趣味・嗜好</th><td><b className="fm">どのような趣味・嗜好を持っているかを調査いたします。</b><br />
                                    交際歴が短い場合、相手の趣味・嗜好についてあまり知らない場合もあるでしょう。結婚相手の好きなものや趣味について、<br className="dsp_hp" />自分の知らなかった相手の一面を知ることで、より深い相互理解を得ることができます。</td>
                                </tr>
                                <tr>
                                    <th>性格・風評</th><td>交際歴の長さに関係なく、結婚前に相手の実像を知らなかったことで、後で後悔をすることもあります。<b className="fm">表面上は繕っていて普段では見えない部分（性格・本質）について、家族や会社関係、友人等、本人に対する周りの評判から、客観的に相手を知ることができます。</b>そうすることで、性格の不一致による離婚やDV、ギャンブルなどの被害を未然に防ぐことができます。</td>
                                </tr>
                                <tr>
                                    <th>素行</th><td>調査をすることで、相手に対する疑いをなくし信頼を得ることが出来、結婚前に浮気をしていないか等、真実を知ることで、<br className="dsp_hp" />その対応について事前に考えることができます。</td>
                                </tr>
                                <tr>
                                    <th>交友関係</th><td>結婚後の人間関係について事前に知ることで、不安を取り除くことができます。また、生活や金銭感覚など本人に大きな影響を与える<br className="dsp_hp" />交友関係について事前に知っておくことで、今後の対策について考えることができます。</td>
                                </tr>
                                </tbody></table>
                            </div>
                        </div>
                        <div className="reason pt">
                            <div className="img_headline_area">
                            <div className="sec">
                                <p className="img"><img src="../img/marriage/img02.jpg" alt="" /></p>
                                <div className="info">
                                <h3 className="headline">離婚理由の調査</h3>
                                <p>結婚する際、交際相手に婚姻歴があることは少なくありません。そういった状況下にある方は、同じ失敗の繰り返しになるリスクを避けるためにも結婚に向けての心構え、あるいは結論づけが必要になってくると考えます。</p>
                                <p>婚姻期間や、子供の有る無し（親権）。また、どういった理由で離婚に至ってしまったのか？双方からの情報でないと本人の主張のみでは事実と食い違う事があるかもしれないのです。</p>
                                <p>離婚に至る理由としては、借金や浮気そしてDVなどが多く見受けられますが、<b className="red fm">本当の離婚理由を側面から調査する事により事前に事実関係を織り込んで判断する</b>ことができます。</p>
                                <p>事前の調査によって再び同じ理由で離婚に至ってしまうことのないようお手伝いをさせていただきます。</p>
                                <p className="nm">親御様にとっては、娘様や息子様の将来の幸せを考え、一生に係るご決断は真実を知る事から取り組んで行き、その上で本当の幸せをつかむ事が大切であると思います。</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="investigation_case pb">
                            <h3 className="line2 mp bg_wide"><span>調査事例</span></h3>
                            <h4 className="cen">これまでに当社で行った<br className="dsp_smt" />結婚・身上調査の事例をご紹介します。<span className="dsp_hpt"><br className="dsp_tbs" />調査を検討される際の参考に<br className="dsp_smt" />してください。</span></h4>
                            <div className="box">
                            <div className="bg">
                                <div className="head">
                                    <p className="case serif">case01</p>
                                    <input id="case-check1" className="case-check1" type="checkbox" />
                                    <label className="case-label" htmlFor="case-check1">近所の子供に注意した後に嫌がらせが加速！電磁波被害調査でわかった事実<br />
                                    <span>最近、身体のあちこちがしびれるように痛くなったり、頭痛が止まらないとお悩みの方は電磁波の被害を受けている可能性があります。早速、最新の事例をご紹介しましょう。</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito"> <span>依頼者：事務職、会社員（37歳）</span> <span className="target">対象者：美容外科医の婚約者（46歳）</span> {/*span className="time">調査時間：●時間</span*/}</div>
                                            <p className="img"><img src="../img/marriage/jirei01.jpg" alt="" /></p>
                                            <dl className="content">
                                                <dt>依頼内容</dt>
                                                <dd>私は医師と弁護士だけが登録しているサイト主催のお見合いパーティーに参加しました。男性は高収入なので、女性の登録条件も厳しいですが、何とか通過することができました。<br />
                                                そこである40代の男性と知り合いました。最近、美容外科医に転職したばかりの医師です。都内の美容クリニックに勤めていて、毎日症例の研究と施術をしていると目が輝いています。<br />
                                                誠実な性格に惹かれてお付き合いを始め1ヶ月経つのですが、勤務先のクリニックを教えてくれないので不思議に思っています。本当に外科医なの？と不安にもなってきました。<br />
                                                結婚の話もしていて、同棲も始める予定ですが、あまり相手の仕事や素行が分からず、両親に紹介しても良いのか不安です。そこで、結婚調査を依頼することにしました。</dd>
                                            </dl>
                                            <dl className="content cb">
                                                <dt>調査内容</dt>
                                                <dd>ご依頼者様が婚約者について知っていることは、婚活サイトでみたプロフィールページに記載されている名前と住所、勤務先、経歴のみ。真実を把握するために早速、調査開始です。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>調査結果</dt>
                                                <dd>対象者の自宅マンションはご依頼者様からの情報提供で確認できましたので、尾行や聞き込み調査で素行を徹底的に調べていきます。<br />
                                                金曜日の夜、対象者が向かった先は別の婚活パーティーでした。平日昼間はほとんど家から出ずに、都内のどの美容クリニックにも医師として勤めている形跡はありませんでした。<br />
                                                そして、職業だけでなく、対象者のプロフィールはほぼ偽りであることが分かりました。卒業大学の学歴詐称、医師免許なし、現在は無職で消費者金融から借金があることも発覚。<br />
                                                さらには、早く結婚をしたい30代の女性をターゲットに多くの婚活パーティーに参加しては、女性から金銭を要求する目的で接触している証拠を掴みました。</dd>
                                            </dl>
                                            <div className="comment">
                                                <div className="requester sec">
                                                <dl>
                                                    <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                    <dd>
                                                    <p className="b">依頼者様からのコメント</p>
                                                    <p className="nm">報告を頂いたときは、ショックで倒れそうになりました。こんな嘘で固めたような男を信じて婚約したと信じた自分が情けないです。両親に紹介する前に真実が分かって良かったです。<br />
                                                        相手とは早く縁を切るために引っ越して、もう二度と連絡を取りません。丁寧な調査をありがとうございました。</p>
                                                    </dd>
                                                </dl>
                                                </div>
                                                <div className="chu sec">
                                                <dl>
                                                    <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                    <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">最近は、嘘のプロフィールで女性を騙す婚活の手口が増えています。悪質さはケースバイケースですが、結婚調査をしておいて損はありません。一度、中央リサーチまでご相談ください。</p>
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
                                    <label className="case-label" htmlFor="case-check2">娘の婚約者はバツイチ子持ちを隠している？結婚調査で分かった驚きの調査結果<br />
                                    <span>お子様が結婚報告をされた時は、本来喜ぶべきお祝いとなりますが、ご両親は「何かがおかしい…」と直感で気がつくことがあります。結婚調査で分かった驚きの事例とは？</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>
                                        <div className="info">
                                            <div className="hito"> <span>依頼者：大学4年生の娘さんのご両親（47歳、51歳）</span> <span className="target">対象者：娘さんの婚約者（42歳）</span>{/*span className="time">調査時間：●時間</span*/}</div>
                                            <p className="img"><img src="../img/marriage/jirei02.jpg" alt="" /></p>
                                            <dl className="content">
                                                <dt>依頼内容</dt>
                                                <dd>娘は都内の私立大学に通う21歳です。塾で講師のアルバイトをしており、この度そこで知り合った塾長という４２歳の男性と婚約をしました。<br />
                                                私たち夫婦は、まだ大学生で社会に出ていないのに結婚なんてまだ早いと思いましたが、娘が「早く結婚したい」、「幸せになりたい」と言うので、電話口で承諾することにしました。<br />
                                                まだ相手の男性とは面識はありませんが、年齢が20歳も離れていますし、大学生の娘が結婚するのにふさわしい相手なのかも分からず、プロの目から結婚調査を依頼しました。</dd>
                                            </dl>
                                            <dl className="content cb">
                                                <dt>調査内容</dt>
                                                <dd>大学生の娘さんが塾長をされている男性と知り合い、結婚を決意されたとのこと。本来は喜ぶべきことですが、年齢20歳差と学生の身ということでご不安が多いご様子でした。<br />
                                                不安を解消するためにも、一刻も早く対象者の素行を調査し、結婚にふさわしい相手なのか調査していきます。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>調査結果</dt>
                                                <dd>学習塾は午後5時頃から始まるので、一日の様子を調べるために朝から張り込みと尾行を開始。驚いたことに、対象者の賃貸アパートから小学生の男の子二人が出てきました。<br />
                                                聞き込み調査によれば、以前はご夫婦とお子様2人の4人暮らしでしたが、性格の不一致で離婚されてからは、奥様が家を出ていき、今は家族3人で暮らしているそうです。<br />
                                                対象者は離婚して子供が2人いますが、その事実を娘さんにはまだ伝えておらず、先にプロポーズをしたと思われます。<br />
                                                まずは交際相手に離婚歴があり、子供がいることを伝えるべきですが、別れを恐れているのか現段階では隠しているようです。年の差よりもその点が気にかかりました。</dd>
                                            </dl>
                                            <div className="comment">
                                                <div className="requester sec">
                                                <dl>
                                                    <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                    <dd>
                                                    <p className="b">依頼者様からのコメント</p>
                                                    <p className="nm">今回は調査報告書に丁寧にまとめていただいてありがとうございます。娘の婚約者はバツイチで小学生のお子様が2人もいるとは…驚きで言葉が出ません。<br />
                                                        娘がその事実を知らずに本気で結婚するつもりでいて、私達夫婦が先にその事実を知り、悲しくなりました。結果的には、早く真実が分かって良かったです。</p>
                                                    </dd>
                                                </dl>
                                                </div>
                                                <div className="chu sec">
                                                <dl>
                                                    <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                    <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">お二人の愛は確かであるかもしれませんが、離婚歴やお子様と同居していることを婚約者に隠しているのは信頼度に欠けます。また何かお困りのことがございましたら、ご連絡ください。</p>
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
                                    <label className="case-label" htmlFor="case-check3">息子の婚約者の家族が知りたいです…結婚調査で分かった複雑な家庭環境<br />
                                    <span>息子さんが婚約者を実家に連れてきてくれた時に、婚約者がなにか隠している…と直感するのは決して珍しいケースではありません。結婚調査で分かった複雑な家庭環境とは？</span> <FontAwesomeIcon icon={faAngleDown} /></label>
                                    <div className='case-content'>

                                        <div className="info">
                                            <div className="hito"> <span>依頼者：息子の母親（54歳）</span> <span className="target">対象者：息子の婚約者（25歳）</span> {/*span className="time">調査時間：●時間</span*/}</div>
                                            <p className="img"><img src="../img/marriage/jirei03.jpg" alt="" /></p>
                                            <dl className="content">
                                                <dt>依頼内容</dt>
                                                <dd>息子は広島県内で自動車整備士をしています。実家暮らしで地味な生活をしていると思っていましたが、結婚を前提にお付き合いしている女性がいるとのことで、先日家に連れてきてくれました。<br />
                                                挨拶もしっかりとできて、可愛らしく、優しそうな女性です。介護施設で働いているとのこと、とても真面目そうで好印象でした。<br />
                                                しかし、家族の話は全くしてくれず、「家族は元気です」と一言だけ。驚いたことに、息子も婚約者の家族構成をよく知らないのです。<br />
                                                なにか重大なことを隠しているのでは…と親心で心配になり、今回探偵社に結婚調査を依頼して、家族関係を調べてもらうことにしました。</dd>
                                            </dl>
                                            <dl className="content cb">
                                                <dt>調査内容</dt>
                                                <dd>息子さんのご両親は、息子さんの婚約者の家族構成や、住まい、職業など、基本的な情報を知りたいと希望されています。事実関係を確かめるために、早急に調査を開始します。</dd>
                                            </dl>
                                            <dl className="content">
                                                <dt>調査結果</dt>
                                                <dd>対象者の名前や勤務先の介護施設の在籍確認は間違いありませんでした。対象者の実家は福岡県で3歳の頃に父親が蒸発して、母親が兄弟３人を一人で育てました。<br />
                                                その後、対象者が小学3年の頃に母親が再婚します。一家で広島県内に引っ越し、2LDKの賃貸マンションに住み始めますが、3年後に交通事故で再婚相手の父親が亡くなりました。<br />
                                                兄弟たちはみな社会人となり、会社勤めをしています。母親はパーキンソン病を発症しており、入院費用や治療費などの金銭面は兄弟3人で協力し合っているそうです。<br />
                                                対象者は責任感があり、現在の職場でもとても信頼されていました。特に目立った問題はなく、きっと複雑な家庭環境なので、後日改めて話すつもりでいるようです。</dd>
                                            </dl>
                                            <div className="comment">
                                                <div className="requester sec">
                                                <dl>
                                                    <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                    <dd>
                                                    <p className="b">依頼者様からのコメント</p>
                                                    <p className="nm">今回は息子の婚約者の家族関係を徹底的に調べていただいてありがとうございました。感無量です。複雑な家庭環境には驚きましたが、素晴らしい女性であると再確認できました。<br />
                                                        二人には頑張ってもらいたいので、できることは私達夫婦も協力したいと思います。本当にありがとうございました。</p>
                                                    </dd>
                                                </dl>
                                                </div>
                                                <div className="chu sec">
                                                <dl>
                                                    <dt><img src="../img/investigation_case/human.png" alt="" /></dt>
                                                    <dd>
                                                    <p className="b">中央リサーチから一言</p>
                                                    <p className="nm">息子さんがご結婚される前に、結婚調査でお相手の気になる点を明らかにして、安心してご結婚を祝福されることができて良かったです。お幸せを祈っております。</p>
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
        title="広島で結婚相手の身上調査なら"
        keyword="結婚・身上調査,広島,探偵,中央リサーチ"
        description="結婚・身上調査について説明した広島の探偵社「中央リサーチ」のページです。"
        />
    </>
)
export default marriage
