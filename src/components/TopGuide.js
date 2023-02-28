import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const TopGuide = () => {
  return (
    <>
        <div id="top_hiroshima">
            <h3 className="mp">広島相談室案内</h3>
            <div className="wrap">
            <div className="map">
                <a href="https://goo.gl/maps/sexpTLmVC3urDhUC9" aria-label="グーグルマップで見る" rel="nofollow noopener noreferrer" target="_blank">
                    <img src="../img/top/map.jpg" width={528} height={275} loading="lazy" alt="" />
                </a>
            </div>
            <div className="img">
                <dl>
                <dt><img src="../img/top/map_l.jpg" width={248} height={248} alt="" loading="lazy" /></dt>
                <dd>当社の青い看板が目印</dd>
                </dl>
                <dl>
                <dt><img src="../img/top/map_r.jpg" width={248} height={248} alt="" loading="lazy" /></dt>
                <dd>プライバシーを守る安心できる相談室</dd>
                </dl>
            </div>
            </div>

            <div className="top_guide_box">
                <input id="guide-check1" className="guide-check1" type="checkbox" />
                <label className="guide-label" htmlFor="guide-check1">相談室への経路はこちらから<FontAwesomeIcon icon={faAngleDown} /></label>
                <ul className="guide-content">                    
                    <li><a href="/img/top/map01.jpg" target="_blank" rel="noopener noreferrer"><img src="../img/top/map01s.jpg" width={245} height={184} loading="lazy" alt="相談室への経路1" /></a><br />①広島駅南口へ向かいます。</li>
                    <li><a href="/img/top/map02.jpg" target="_blank" rel="noopener noreferrer"><img src="../img/top/map02s.jpg" width={245} height={184} loading="lazy" alt="相談室への経路2" /></a><br />②南口階段を降ります。</li>
                    <li><a href="/img/top/map03.jpg" target="_blank" rel="noopener noreferrer"><img src="../img/top/map03s.jpg" width={245} height={184} loading="lazy" alt="相談室への経路3" /></a><br />③右折します。</li>
                    <li><a href="/img/top/map05.jpg" target="_blank" rel="noopener noreferrer"><img src="../img/top/map05s.jpg" width={245} height={184} loading="lazy" alt="相談室への経路4" /></a><br />④市内を走る広島電鉄のバス乗り場へ向かいます。</li>
                    <li><a href="/img/top/map06.jpg" target="_blank" rel="noopener noreferrer"><img src="../img/top/map06s.jpg" width={245} height={184} loading="lazy" alt="相談室への経路5" /></a><br />⑤バス乗り場（8番乗り場）へ向かいます。</li>
                    <li><a href="/img/top/map07.jpg" target="_blank" rel="noopener noreferrer"><img src="../img/top/map07s.jpg" width={245} height={184} loading="lazy" alt="相談室への経路6" /></a><br />⑥広島交通 合同庁舎、広島バスセンター、基町経由　高陽・深川方面行きのバスに乗車して下さい。</li>
                    <li><a href="/img/top/map08.jpg" target="_blank" rel="noopener noreferrer"><img src="../img/top/map08s.jpg" width={245} height={184} loading="lazy" alt="相談室への経路7" /></a><br />⑦「女学院前」で降車し、右手の「広島幟町中特ビル内郵便局」の方向へ進みます。</li>
                    <li><a href="/img/top/map09.jpg" target="_blank" rel="noopener noreferrer"><img src="../img/top/map09s.jpg" width={245} height={184} loading="lazy" alt="相談室への経路8" /></a><br />⑧「女学院前」交差点まで来ましたら、右に曲がり北進します。</li>
                    <li><a href="/img/top/map10.jpg" target="_blank" rel="noopener noreferrer"><img src="../img/top/map10s.jpg" width={245} height={184} loading="lazy" alt="相談室への経路9" /></a><br />⑨「広島県立美術館」前をさらに北進します。</li>
                    <li><a href="/img/top/map11.jpg" target="_blank" rel="noopener noreferrer"><img src="../img/top/map11s.jpg" width={245} height={184} loading="lazy" alt="相談室への経路10" /></a><br />⑩「広島県立美術館」を150m程進むと、中央リサーチの入っている「今田ビル」がございます。</li>
                    <li><a href="/img/top/map12.jpg" target="_blank" rel="noopener noreferrer"><img src="../img/top/map12s.jpg" width={245} height={184} loading="lazy" alt="相談室への経路11" /></a><br />⑪ビルの2階へお上がりください。</li>
                </ul>
            </div>

            <div className="example">
            <h3 className="mp">弊社へのご相談事例</h3>
            <div className="wrap">
                <dl>
                <dt className="mp">事例<span>1</span></dt>
                <dd><Link to="/jirei/">夫の携帯を見たら浮気相手と思われる女性とのメールを見ました｡<br />話し合う為にも動かぬ証拠と浮気相手がどんな人物か知りたい。</Link></dd>
                </dl>
                <dl>
                <dt className="mp">事例<span>2</span></dt>
                <dd><Link to="/jirei/">営業社員の業績が上がらないことで、悩んでいました。<br />このままでは会社が倒産してしまうという不安がよぎり、思い切って相談してみました。</Link></dd>
                </dl>
                <dl>
                <dt className="mp">事例<span>3</span></dt>
                <dd><Link to="/jirei/">夫が急に離婚しようと言い出し、その原因はと問いただすと、こちらばかり責められます。もしかして愛人がいるのでは？</Link></dd>
                </dl>
                <dl>
                <dt className="mp">事例<span>4</span></dt>
                <dd><Link to="/jirei/">娘が家出をしてしまい、眠れない日々を過ごしています。<br />今、何処で何をしているのか、気になります。</Link></dd>
                </dl>
                <dl>
                <dt className="mp">事例<span>5</span></dt>
                <dd><Link to="/jirei/">「いま付き合っている相手と別れた方がよいのか？」と悩んでいます。<br />自分の気持ちに、ふん切りを付けるためにも事実関係を確認したいのです。</Link></dd>
                </dl>
                <dl>
                <dt className="mp">事例<span>6</span></dt>
                <dd><Link to="/jirei/">離婚した元妻とは、定期的に連絡はとって子供の近況報告は受けています。<br />しかし、それが本当なのか？「虐待はないのか？」「いじめられていないか？」「元気そうに学校に行っているか？」気になります。</Link></dd>
                </dl>
            </div>
            </div>
        </div>
    </>
  )
}

export default TopGuide
