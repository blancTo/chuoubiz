import React from 'react'

const submenu = () => {
  return (
    <>
      {/* タブレット・スマホ時メイン画の下に表示されるメニュー */}
      <div id="menu_sp" className="dsp_tbs">
            <ul>
              <li><a href="/beginner/">はじめての方へ</a></li>
              <li><a href="/choose/">探偵社の選び方</a></li>
              <li><a href="/service/">当社の取り組み</a></li>
            </ul>
            <ul>
              <li><a href="/contact/">お問い合わせ</a></li>
              <li><a href="/company/">会社概要</a></li>
              <li><a href="/price/">料金表</a></li>
            </ul>
        </div>
        {/* ここまで */}
    </>
  )
}

export default submenu
