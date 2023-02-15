import React from 'react'
import { Link } from 'gatsby'

const SubmenuEhime = () => {
  return (
    <>
    {/* タブレット・スマホ時メイン画の下に表示されるメニュー */}
    <div id="menu_sp" className="ehime dsp_tbs">
      <ul>
        <li><Link to="/ehime/voice/">お客様の声</Link></li>
        <li><Link to="/ehime/contact/">お問い合わせ</Link></li>
        <li><Link to="/ehime/company/">会社概要</Link></li>
        <li><Link to="/ehime/price/">料金表</Link></li>
      </ul>
    </div>
    {/* ここまで */}      
    </>
  )
}

export default SubmenuEhime
