import React from 'react'
import { Link } from 'gatsby'

const TopAbout = () => {
  return (
    <>
        <div id="top_about">
            <div className="bg">
            <h3 className="cen"><span><img src="../img/top/txt.png" width={335} height={36} loading="lazy" alt="総合探偵社 中央リサーチ" /></span></h3>
            <p className="earth"><span className="maru"><img src="../img/top/earth.png" width={42} height={49} loading="lazy" alt="" /><span className="txt">全国対応<br />海外もOK!</span></span></p>
            <p className="mp cen msg">つらい思いをされている方が<br className="dsp_tbs" />一日も早く笑顔を取り戻す為に・・・。<br />
                弊社スタッフは一丸となり<br className="dsp_smt" />「人助け」の思いで、<br className="dsp_tbs" />日夜探偵業務に取り組んでおります。</p>
            <div className="wrap">
                <dl>
                <dt>広島相談室</dt>
                <dd><Link to="/">総合探偵社中央リサーチ広島</Link><br />
                    広島県広島市中区上幟町2-45 今田ビル2F<br />
                    (家庭裁判所前 白島線電車道り沿い)<br />
                    TEL：082-211-1600(代)</dd>
                </dl>
                <dl>
                <dt>山口相談室</dt>
                <dd><Link to="/yamaguchi/">総合探偵社中央リサーチ山口</Link><br />
                    山口県周南市平和通2丁目31 三真樹ビル2階<br />
                    （徳山駅徒歩3分）<br />
                    TEL：0834-22-7513(代)</dd>
                </dl>
                <dl>
                <dt>島根相談室</dt>
                <dd><Link to="/shimane/">総合探偵社中央リサーチ島根</Link><br />
                    島根県松江市津田町305番 ツダマチビル1階<br />
                    （松江駅徒歩5分）<br />
                    TEL：0852-67-6573(代)</dd>
                </dl>
                <dl>
                <dt>岡山相談室</dt>
                <dd><Link to="/okayama/">総合探偵社中央リサーチ岡山</Link><br />
                    岡山県岡山市北区富田町1丁目1-1<br />
                    富士野ビル2階<br />
                    TEL：086-231-6661(代)</dd>
                </dl>
                <dl>
                <dt>愛媛相談室</dt>
                <dd><Link to="/ehime/">総合探偵社中央リサーチ愛媛</Link><br />
                    愛媛県松山市三番町7-7-1 村上ビル2階<br />
                    （松山市民病院徒歩2分）<br />
                    TEL：089-931-3800(代)</dd>
                </dl>
                <dl>
                <dt>広島本社</dt>
                <dd>広島県広島市中区上幟町2-45 今田ビル2F<br />
                    (家庭裁判所前 白島線電車道り沿い)<br />
                    TEL：082-211-1600(代)<br />
                    FAX：082-211-1688</dd>
                </dl>
            </div>
            <ul className="wrap">
                <li><a href="https://www.ncia-research.or.jp/" target="_blank" rel="noopener noreferrer">内閣総理大臣認可<br />全国調査業協同組合組合員<br />第3266号</a></li>
                <li>広島県公安委員会<br />探偵業届出証明書番号<br />第73070084号</li>
                <li>広島商工会議所<br />正会員<br />第9700302号</li>
            </ul>
            </div>
        </div>
    </>
  )
}

export default TopAbout
