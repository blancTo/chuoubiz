import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const beginner = () => {    
    const pagemeta = {
        title:`はじめての方へ`,
        slug:`beginner`        
    }
  return (
    <>
    
    <div id="wrap">
        <Header h1title="はじめての方への、ご説明" />
        <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
        <Breadcrumb subtitle={pagemeta.title} />
        <Layout>
            <div id={pagemeta.slug} className="main">
            
                <div id="beginner_msg">
                    <div className="msg_box01">
                        <div className="txt_area">
                        <h3 className="headline mp">一歩踏み出して<br className="dsp_hpt" />私たちに<br className="dsp_smt" />ご相談をされてみませんか？</h3>
                        <p className="msg_txt01">&gt;ご相談、ご依頼される方は初めての方が多数です。</p>
                        <p>中央リサーチでは話しやすい専門カウンセラーが24時間無料相談を受け付けております。<br />
                            お客様の状況や、ご相談内容は多種多様ですので、お客様と相談員の細かい対話を最も重要視し高い成果で無駄のない調査プランをご提案しております。</p>
                        <p className="msg_txt02">お客様の心に寄り添う対応を致します。</p>
                        </div>
                        <img src="../img/beginner/img01.jpg" alt="一歩踏み出して私たちにご相談をされてみませんか？" className="img01" />
                    </div>
                    <p className="msg_txt03">ご相談は無料ですので<br className="dsp_smt" />安心してお問い合わせ下さい!</p>
                    <div className="msg_box02">
                        <div className="txt_area">
                        <dl className="box02_flex">
                            <dt><span className="txt_free mp">無料<span>相談窓口</span></span></dt>
                            <dd className="tel_area">
                            <a href="tel:0120-30-6630" className="tel tel_m sans"><img src="../img/free.png" alt="フリーダイヤル" />0120-30-6630</a>
                            <p className="msg_txt04">女性相談員ご希望の方はこちら</p>
                            <a href="tel:0120-20-3399" className="tel sans"><img src="../img/free.png" alt="フリーダイヤル" />0120-20-3399</a>
                            </dd>
                        </dl>
                        <p className="msg_txt05">年中無休！ 24時間受付！<span>携帯電話でもOK! </span></p>
                        </div>
                    </div>
                    <p className="red b a_note">※営業、セールスのお電話は一切お断り致します。</p>
                </div>

                <div id="beginner_flow" className="bg_wide">
                <div className="flow_wrapper">
                    <div className="flow_box01">
                    <div className="txt_area">
                        <h3 className="headline mp">ご相談から解決までの流れ</h3>
                        <p className="flow_txt01">あなたのお気持ちを大切にする安心・ご納得の調査をお約束いたします。</p>
                        <p>経験豊富な専門の相談員が、あなたのお悩みをお聞きし、最も良い解決法や調査方法のプランをご提案し、お見積もりをさせて頂きます。<br className="dsp_smt" />ご契約に関しては、相談員の説明にご納得頂いた上で業法に基づく重要事項のご説明・利用目的確認書・契約書を交付させていただきます。<br className="dsp_smt" />その後は調査の日程など、お客様と打ち合わせを行いながら適正かつ迅速な調査を進めて参ります。<br />
                        調査終了後、<span className="flow_txt02">再発防止対策や今後のアフターフォローまで</span>責任をもって担当者が対応させていただきます。<br />
                        <span className="flow_txt03">秘密厳守、ご相談、お見積り無料</span>です。些細なことでもお悩みをお聞かせください。</p>
                    </div>
                    <img src="../img/beginner/flow01.png" alt="ご相談から解決までの流れ" className="img_flow01" />
                    </div>
                    <div className="flow_box02">
                    <div className="step">STEP</div>
                    <div className="txt_area">
                        <h4 className="headline">ご相談<span className="free">無 料</span></h4>
                        <p>お電話・ライン・メール等にてお気軽にご相談ください。ご相談の内容は完全<span className="bold">秘密厳守</span>致します。<br className="dsp_smt" />当社の専門カウンセラーが、あなたの立場に立って親身にお話しを伺いします。<span className="bold">女性相談員ご希望の方は無料相談コーナーを</span>ご用意しております。</p>
                        <div className="flow_flex">
                        <p className="flow_txt04 mp">無料<span>相談窓口</span></p>
                        <div className="tel">
                            <a href="tel:0120-30-6630" className="tel01 sans"><img src="../img/free.png" alt="フリーダイヤル" />0120-30-6630</a>
                            <div className="nm">
                                <span className="flow_txt05 mp">女性相談員ご希望の方はこちら</span><a href="tel:0120-20-3399" className="tel02 sans"><img src="../img/free.png" alt="フリーダイヤル" />0120-20-3399</a>
                            </div>
                        </div>
                        <p className="flow_txt06 mp nm">年中無休!24時間受付!<span>携帯電話でもOK! </span></p>
                        </div>
                    </div>
                    </div>
                    <div className="flow_box02">
                    <div className="step">STEP</div>
                    <div className="txt_area">
                        <h4 className="headline">面談<span className="free">無 料</span></h4>
                        <p className="nm"><span className="bold">面談をご希望の場合は、日時をご予約され弊社相談室にお越し頂くか、お客様ご指定の場所にご訪問</span>となります。<br className="dsp_smt" />（当社のオフィスには、<span className="bold">プライバシーを守る相談室をご用意</span>しております）</p>
                    </div>
                    </div>
                    <div className="flow_box02">
                    <div className="step">STEP</div>
                    <div className="txt_area">
                        <h4 className="headline">お見積<span className="free">無 料</span></h4>
                        <p className="nm">ご相談内容により、お客様に最も適した調査方法をご提案し、お見積りさせて頂きます。<br className="dsp_smt" />ご契約した内容以外に<span className="bold">追加料金等の費用が発生することはございませんのでご安心ください。</span></p>
                    </div>
                    </div>
                    <div className="flow_box02">
                    <div className="step">STEP</div>
                    <div className="txt_area">
                        <h4 className="headline">ご契約</h4>
                        <p className="nm"><span className="bold">お見積内容をご理解とご納得頂きましたら、ご契約手続</span>に入ります。<br className="dsp_smt" />業法に基づいた重要事項説明・利用目的確認書・契約書について詳しくご説明させて頂き、各書類に署名・ご捺印頂く事で、ご契約の完了となります。</p>
                    </div>
                    </div>
                    <div className="flow_box02">
                    <div className="step">STEP</div>
                    <div className="txt_area">
                        <h4 className="headline">事前予備調査</h4>
                        <p className="nm">正式な調査に入る前に事前に専門調査員による準備や予備調査を行います、例えば対象者の自宅、勤務先、立ち寄り先等の立地状況、道路、交通、信号、生活環境等の事前準備調査を行います。</p>
                    </div>
                    </div>
                    <div className="flow_box02">
                    <div className="step">STEP</div>
                    <div className="txt_area">
                        <h4 className="headline">調査開始</h4>
                        <p className="nm">経験豊富なベテランの探偵調査員が<span className="bold">卓越した調査技術を駆使し迅速かつ正確な調査を行います。</span><br />
                        調査期間中は、状況など細かく内容をご連絡、ご報告します。お客様が不安にならない様に進行状況を細かく打ち合わせしながら調査を進めて行く事も可能です。</p>
                    </div>
                    </div>
                    <div className="flow_box02">
                    <div className="step">STEP</div>
                    <div className="txt_area">
                        <h4 className="headline">報告書</h4>
                        <p className="nm">調査終了後１週間前後で<span className="bold">正式な調査報告書を提出</span>いたします。<br />
                        報告書の内容は詳細な記録文章と写真またはDVDの証拠等、裁判の証拠資料としても活用できる書類を提出させて頂いておりますのでご安心ください。</p>
                    </div>
                    </div>
                    <div className="flow_box02">
                    <div className="step">STEP</div>
                    <div className="txt_area">
                        <h4 className="headline">アフターフォロー</h4>
                        <p className="nm">調査後は今後の対策のアドバイスや再発防止対策等、担当の専門カウンセラーが責任を持って対応させて頂きます。<br />
                        また、<span className="bold">調査内容の事案が得意とされる有能な弁護士を無料にてご紹介させて頂くことも可能です。</span></p>
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
        title="初めての方へ、浮気調査の相談から解決まで。"
        description="探偵の調査方法については沢山の方法がございます。お客様からご相談いただいた内容を元に、もっとも適切で有効な方法をご提案させていただきます。広島で長年の実績を持つ当社にご相談ください。"
    />
    </>
)
export default beginner