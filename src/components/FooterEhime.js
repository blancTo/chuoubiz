import React from 'react'
import { Link } from 'gatsby'

const FooterEhime = () => {
  return (
    <>
        <footer id="footer">
            {/* タブレット・スマホ時ページ下部に表示される内容 */}
            <div id="footer_btn">
                <ul>
                    <li className="mail"><Link to="/ehime/contact/"><img src="../../img/btn_mail.png" alt="メールで相談" /></Link></li>
                    <li className="line"><a href="https://line.me/R/ti/p/65gpK3qcDs" aria-label="ラインで相談" rel="nofollow noopener noreferrer" target="_blank"><img src="../../img/btn_line.png" alt="LINEで相談" /></a></li>
                    <li className="tel"><a href="tel:0120-30-6630" aria-label="電話で相談"><img src="../../img/btn_tel.png" alt="電話で相談" /></a></li>
                </ul>
            </div>
            {/* ここまで */}
            <div className="contact bg bg_wide">
                <div className="main">
                    <h3 className="mp"><span>まごころ調査</span>の当社へまずはお電話を!</h3>
                    <div className="box">
                        <h4 className="mp">話しやすい相談員が親身になって応対</h4>
                        <div className="wrap">
                            <div className="shikaku">無料<span>相談窓口</span></div>
                            <div className="tel_area">
                                <p className="free sans">
                                    <a href="tel:0120-30-6630" aria-label="相談窓口電話番号">
                                        <img src="../img/tel.svg" width={60} height={39} alt="フリーダイヤル" />
                                        0120-30-6630
                                    </a>
                                </p>
                                <p className="free2">
                                    <span className="txt mp">女性相談員ご希望の方はこちら</span>
                                    <a href="tel:0120-20-3399" aria-label="女性相談員ご希望の方はこちら">
                                    <img src="../img/tel.svg" width={30} height={20} alt="フリーダイヤル" />
                                        0120-20-3399
                                    </a>
                                </p>
                            </div>
                        </div>
                        <p className="mp txt2">年中無休！ 24時間受付！<br className="dsp_smt" /><span>携帯電話でもOK!</span></p>
                        <p className="nm">※このお電話は、最寄りの営業所に繋がります。</p>
                    </div>
                </div>
                
            </div>
            {/* PC時ページ下部に表示されるリンク */}
            <div className="links dsp_hp">
                <ul>
                <li><Link to="/ehime/">ホーム</Link></li>
                <li><Link to="/ehime/contact/">お問い合わせ</Link></li>
                <li><Link to="/policy/">個人情報保護に関する取り組み</Link></li>
                </ul>
            </div>
            {/* ここまで */}
            <p id="copyright">Copyright &copy; 2022 株式会社中央リサーチ愛媛. All Rights Reserved.</p>
        </footer>

    </>
  )
}

export default FooterEhime
