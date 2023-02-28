import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <>
    <footer id="footer">
        <div id="footer_btn">
            <ul>
                <li className="mail">
                    <Link to="/contact/" aria-label="メールで相談">
                        <img src="../img/btn_mail.png" width={186} height={39} alt="メールで相談" />
                    </Link>
                </li>
                <li className="line">
                    <a href="https://line.me/R/ti/p/65gpK3qcDs" aria-label="ラインで相談" rel="nofollow noopener noreferrer" target="_blank">
                        <img src="../img/btn_line.png" width={186} height={39} alt="LINEで相談" />
                    </a>
                </li>
                <li className="tel">
                    <a href="tel:0120-30-6630" aria-label="電話で相談">
                        <img src="../img/btn_tel.png" width={398} height={67} alt="" />
                    </a>
                </li>
            </ul>
        </div>
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

        <p id="copyright">Copyright &copy; 2022 株式会社中央リサーチ. All Rights Reserved.</p>
    </footer>
    </>
  )
}
