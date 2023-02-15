import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

export default function Footer() {
  return (
    <>
    <footer id="footer">
        {/* タブレット・スマホ時ページ下部に表示される内容 */}
        <div id="footer_btn">
            <ul>
                <li className="mail"><Link to="/contact/"><StaticImage src="../img/btn_mail.png" alt="メールで相談" /></Link></li>
                <li className="line"><Link to="https://line.me/R/ti/p/65gpK3qcDs" rel="nofollow noopener noreferrer" target="_blank"><StaticImage src="../img/btn_line.png" alt="LINEで相談" /></Link></li>
                <li className="tel"><Link to="tel:0120-30-6630"><StaticImage src="../img/btn_tel.png" alt="" /></Link></li>
            </ul>
        </div>
        {/* ここまで */}
        <div className="contact bg bg_wide">
            <div className="main">
                <div className="in">
                    <h3 className="mp"><span>まごころ調査</span>の当社へまずはお電話を!</h3>
                    <div className="box">
                        <h4 className="mp">話しやすい相談員が親身になって応対</h4>
                        <div className="wrap">
                            <div className="shikaku">無料<br className="dsp_hpt" /><span>相談窓口</span></div>
                            <div className="tel_area">
                                <p className="free sans"><Link to="tel:0120-30-6630">0120-30-6630</Link></p>
                                <p className="free2"><span className="txt mp">女性相談員ご希望の方はこちら</span><Link to="tel:0120-20-3399">0120-20-3399</Link></p>
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
                <li><Link to="/">広島の探偵社 中央リサーチトップページ</Link></li>
                <li><Link to="/service/">当社の取り組み</Link></li>
                <li><Link to="/company/">会社概要</Link></li>
                <li><Link to="/jirei/">事例紹介</Link></li>
                <li><Link to="/price/">料金表</Link></li>
                <li><Link to="/jobs/">採用情報</Link></li>
                <li><Link to="/contact/">お問い合わせ</Link></li>
                <li><Link to="/policy/">個人情報保護に関する取り組み</Link></li>
                <li><Link to="/sitemap/">サイトマップ</Link></li>
            </ul>
            <ul>
                <li><Link to="/beginner/">はじめての方</Link></li>
                <li><Link to="/choose/">探偵社の選び方</Link></li>
                <li><Link to="/fickleness/">浮気・不倫調査</Link></li>
                <li><Link to="/behavior/">素行調査</Link></li>
                <li><Link to="/trial/">裁判証拠収集</Link></li>
                <li><Link to="/marriage/">結婚・身上調査</Link></li>
                <li><Link to="/whereabouts/">家出・所在調査</Link></li>
                <li><Link to="/stalker/">嫌がらせ対策</Link></li>
                <li><Link to="/tapping/">盗聴器発見</Link></li>
                <li><Link to="/fingerprint/">指紋・筆跡鑑定</Link></li>
            </ul>
        </div>
        {/* ここまで */}
        <p id="copyright">Copyright &copy; 2022 株式会社中央リサーチ. All Rights Reserved.</p>
    </footer>
    </>
  )
}
