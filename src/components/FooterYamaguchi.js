import React from 'react'
import { Link } from 'gatsby'

const FooterYamaguchi = () => {
  return (
    <>
        <footer id="footer">
            
            {/* タブレット・スマホ時ページ下部に表示される内容 */}
            <div id="footer_btn">
                <ul>
                    <li className="mail"><Link to="/yamaguchi/contact/"><img src="../../img/btn_mail.png" alt="メールで相談" /></Link></li>
                    <li className="line"><a href="https://line.me/R/ti/p/65gpK3qcDs" aria-label="ラインで相談" rel="nofollow noopener noreferrer" target="_blank"><img src="../../img/btn_line.png" alt="LINEで相談" /></a></li>
                    <li className="tel"><a href="tel:0120-30-6630" aria-label="電話で相談"><img src="../../img/btn_tel.png" alt="電話で相談" /></a></li>
                </ul>
            </div>            
            {/* ここまで */}

            <div className="contact bg bg_wide"><div className="main">
                <div className="in">
                    <h3 className="mp"><span>まごころ調査</span>の当社へまずはお電話を!</h3>
                    <div className="box">
                        <h4 className="mp">話しやすい相談員が親身になって応対</h4>
                        <div className="wrap">
                            <div className="shikaku">
                                無料<br className="dsp_hpt" /><span>相談窓口</span>
                            </div>
                            <div className="tel_area">
                                <p className="free sans"><a href="tel:0120-30-6630">0120-30-6630</a></p>
                                <p className="free2"><span className="txt mp">女性相談員ご希望の方はこちら</span><a href="tel:0120-20-3399">0120-20-3399</a></p>
                            </div>
                        </div>
                        <p className="mp txt2">年中無休！ 24時間受付！<span><br className="dsp_smt" />携帯電話でもOK!</span></p>
                        <p className="nm">※このお電話は、最寄りの営業所に繋がります。</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PC時ページ下部に表示されるリンク */}
            <div className="links dsp_hp">
                <ul>
                    <li><Link to="/yamaguchi/">ホーム</Link></li>
                    <li><Link to="/yamaguchi/contact/">お問い合わせ</Link></li>
                    <li><Link to="/policy/">個人情報保護に関する取り組み</Link></li>
                </ul>
            </div>
            {/* ここまで */}

            <p id="copyright">Copyright &copy; 2022 株式会社中央リサーチ山口. All Rights Reserved.</p>
        </footer>
    </>    
  )
}

export default FooterYamaguchi
