import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const HeaderShimane = (props) => {
  return (
    <>
      <header id="header" className="cf">
        <h1>{props.h1title}</h1>
        <div id="sticky">
          <p className="title"><Link to="/shimane/"><span className="fs dsp_smt">{props.pagetitle}</span><img src="/img/shimane/title.png" alt="株式会社中央リサーチ島根" /></Link></p>
          <div className="contact">
            <p className="all_hour">24時間受付<br />携帯OK</p>
            <div className="txt_area">
              <p className="blue">{props.pagetitle}</p>
              <p className="tel">無料相談窓口<a href="tel:0120-30-6630">0120-30-6630</a></p>
            </div>
            <p className="line"><a href="https://line.me/R/ti/p/65gpK3qcDs" aria-label="LINE" rel="nofollow noopener noreferrer" target="_blank"><img src="/img/line.png" width={58} height={58} alt="LINE" /></a></p>
          </div>
        </div>
        {/*　タブレットスマホ時ハンバーガーメニュー　*/}
        <nav id="menu">      
          <ul className="g_menu shimane">
            <li><Link to="/shimane/voice/">お客様の声</Link></li>
            <li><Link to="/shimane/jirei/">調査事例</Link></li>
            <li><Link to="/shimane/company/">会社概要</Link></li>
            <li><Link to="/shimane/price/">料金表</Link></li>
            <li><Link to="/shimane/contact/">お問い合わせ</Link></li>
          </ul>
          {/*　ここまで　*/}
        </nav>
        <nav className='smp_nav'>
          <input type="checkbox" id="overlay-input" />
          <label htmlFor="overlay-input" id="overlay-button">
            <span></span>
          </label>
          <div id="overlay">
            <ul>
              <li><Link to="/shimane/">ホーム</Link></li>
              <li>
                <input id="smpnav-check4" className="smpnav-check4" type="checkbox" />
                <label className="smpnav-label" htmlFor="smpnav-check4">調査項目<FontAwesomeIcon icon={faPlus} /></label>
                  
                <ul className='smpnav-content'>
                  <li><Link to="/shimane/about/#uwaki">浮気・不倫調査</Link></li>
                  <li><Link to="/shimane/about/#sokou">素行調査</Link></li>
                  <li><Link to="/shimane/about/#kekkon">結婚・婚前調査</Link></li>
                  <li><Link to="/shimane/about/#iede">家出・所在調査</Link></li>
                  <li><Link to="/shimane/about/#stalker">いじめ・嫌がらせ対策</Link></li>
                  <li><Link to="/shimane/about/#touchouki">盗聴器発見</Link></li>
                </ul>
              </li>
              <li>
                <input id="smpnav-check3" className="smpnav-check3" type="checkbox" />
                <label className="smpnav-label" htmlFor="smpnav-check3">相談室案内<FontAwesomeIcon icon={faPlus} /></label>
                <ul className='smpnav-content'>
                  <li><Link to="/">広島相談室</Link></li>
                  <li><Link to="/okayama/">岡山相談室</Link></li>
                  <li><Link to="/ehime/">愛媛相談室</Link></li>
                  <li><Link to="/yamaguchi/">山口相談室</Link></li>
                  <li><Link to="/shimane/">島根相談室</Link></li>
                </ul>
              </li>
              <li><Link to="/shimane/voice/">お客様の声</Link></li>        
              <li><Link to="/shimane/jirei/">調査事例紹介</Link></li>
              <li><Link to="/shimane/company/">会社概要</Link></li>
              <li><Link to="/shimane/price/">料金表</Link></li>
              <li><Link to="/shimane/contact/">お問い合わせ</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default HeaderShimane
