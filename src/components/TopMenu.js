import React from 'react'
import { Link } from 'gatsby'

const TopMenu = () => {
  return (
    <>
        <div id="top_menu">
            <div className="head">
            <div className="dsp_smt">
                <div className="star cen">
                    <a href="https://www.google.co.jp/search?tbm=lcl&ei=XWsGX-yqB4_W0gSAhYHwBA&q=%E4%B8%AD%E5%A4%AE%E3%83%AA%E3%82%B5%E3%83%BC%E3%83%81%E5%BA%83%E5%B3%B6&oq=%E4%B8%AD%E5%A4%AE%E3%83%AA%E3%82%B5%E3%83%BC%E3%83%81%E5%BA%83%E5%B3%B6&gs_l=psy-ab.3...155248.157868.0.158152.0.0.0.0.0.0.0.0..0.0....0...1c.1j4.64.psy-ab..0.0.0....0.8ef4ngT_iJU#rlfi=hd:;si:14351266089033009334;mv:[[34.40155767731903,132.4662481279093],[34.40119772268097,132.46581187209068]]" rel="nofollow noopener noreferrer" target="_blank">
                        Googleクチコミ実績
                    </a>
                    <img src="../img/top/hoshi4.5.png" width={66} height={11} loading="lazy" alt="" />
                </div>
               </div>
                <br className="dsp_smt" />

                <p className="maru"><span className="in serif"><span className="fs">探偵実績</span><br />55<span className="fs">年</span></span></p>
                <div className="cb cen">
                    <h2><span className="dsp_smt">浮気調査最大50％OFF</span>
                    <span className="dsp_hpt">相場価格より最大50％OFFで<br className="dsp_tbs" />浮気調査実績1位を誇る探偵社。</span></h2>
                    
                    <div className="star cen dsp_hpt">
                        <span>
                        <a href="https://www.google.co.jp/search?tbm=lcl&ei=XWsGX-yqB4_W0gSAhYHwBA&q=%E4%B8%AD%E5%A4%AE%E3%83%AA%E3%82%B5%E3%83%BC%E3%83%81%E5%BA%83%E5%B3%B6&oq=%E4%B8%AD%E5%A4%AE%E3%83%AA%E3%82%B5%E3%83%BC%E3%83%81%E5%BA%83%E5%B3%B6&gs_l=psy-ab.3...155248.157868.0.158152.0.0.0.0.0.0.0.0..0.0....0...1c.1j4.64.psy-ab..0.0.0....0.8ef4ngT_iJU#rlfi=hd:;si:14351266089033009334;mv:[[34.40155767731903,132.4662481279093],[34.40119772268097,132.46581187209068]]" rel="nofollow noopener noreferrer" target="_blank">
                            Googleクチコミ実績
                        </a>
                        <img src="../img/top/hoshi4.5.png" width={66} height={11} loading="lazy" alt="" />
                        </span>
                    </div>
                    <p className="comment cen dsp_hpt"><Link to="/#top_profile">広島の弁護士から推奨されている<span className="fm">唯一</span>の探偵社です！ »</Link></p>
                    <p className="cen dsp_smt white">詳細は画像をタップしてください。</p>
                </div>
            </div>

            <p className="dsp_smt title_new">調査項目</p>
            <div className="wrap">
                <Link to="/fickleness/">
                    <dl>
                    <dt><img src="../img/top/menu01.jpg" width={250} height={150} loading="lazy" alt="浮気・不倫調査" /></dt>
                    <dd className="mp">浮気・不倫調査</dd>
                    <dd className="txt dsp_hpt">
                        <p>対象者に気づかれる事なく、浮気・不倫の事実を分単位で記録し動かぬ証拠を取ります。</p>
                        <p className="thin fs nm">※裁判に勝つ為、及び真実を基に話し合う為、重要な材料となります。</p>
                    </dd>
                    </dl>
                </Link>
                <Link to="/behavior/">
                    <dl>
                    <dt><img src="../img/top/menu02.jpg" width={250} height={150} loading="lazy" alt="素行調査" /></dt>
                    <dd className="mp">素行調査</dd>
                    <dd className="txt dsp_hpt">
                        <p className="nm">家族のお金の使い道、生活状況、また従業員の勤務態度など「いつ、誰と、何処で、何を」しているのか？お調べします。<br />※振込詐欺防止対策にも。</p>
                    </dd>
                    </dl>
                </Link>
                <Link to="/trial/">
                    <dl>
                    <dt><img src="../img/top/menu03.jpg" width={250} height={150} loading="lazy" alt="裁判証拠収集" /></dt>
                    <dd className="mp">裁判証拠収集</dd>
                    <dd className="txt dsp_hpt">
                        <p className="nm">民事・刑事事件に係る事案など、不貞、DV、いじめ、嫌がらせ、犯罪、交通事故、その他、裁判に勝つた為の動かぬ証拠を収集します。</p>
                    </dd>
                    </dl>
                </Link>
                <Link to="/marriage/">
                    <dl>
                    <dt><img src="../img/top/menu04.jpg" width={250} height={150} loading="lazy" alt="結婚・身上調査" /></dt>
                    <dd className="mp">結婚・身上調査</dd>
                    <dd className="txt dsp_hpt">
                        <p className="nm">交際相手の、ご家族や親族などの人物性・風評・生活実態等、大きな懸念材料があるか？お調べいたします。</p>
                    </dd>
                    </dl>
                </Link>
                <Link to="/whereabouts/">
                    <dl>
                    <dt><img src="../img/top/menu05.jpg" width={250} height={150} loading="lazy" alt="家出・所在調査" /></dt>
                    <dd className="mp">家出・所在調査</dd>
                    <dd className="txt dsp_hpt">
                        <p className="nm">「今どこに居るの？」と、安否が気になる方、人命にも係わる事も・・豊富な技術で発見率97％以上の実績を誇ります。</p>
                    </dd>
                    </dl>
                </Link>
                <Link to="/stalker/">
                    <dl>
                    <dt><img src="../img/top/menu06.jpg" width={250} height={150} loading="lazy" alt="嫌がらせ対策" /></dt>
                    <dd className="mp">嫌がらせ対策</dd>
                    <dd className="txt dsp_hpt">
                        <p className="nm">嫌がらせや、いじめを行う人物の特定や証拠撮りを行い、問題解決に繋がるお手伝いをさせていただきます。</p>
                    </dd>
                    </dl>
                </Link>
                <Link to="/tapping/">
                    <dl>
                    <dt><img src="../img/top/menu07.jpg" width={250} height={150} loading="lazy" alt="盗聴器発見" /></dt>
                    <dd className="mp">盗聴器発見</dd>
                    <dd className="txt dsp_hpt">
                        <p className="nm">最近では盗聴・盗撮などの危険が身近に潜んでいます。<br />お客様の不安を取り除く為、最新の技術でお力になります。</p>
                    </dd>
                    </dl>
                </Link>
                <Link to="/fingerprint/">
                    <dl>
                    <dt><img src="../img/top/menu08.jpg" width={250} height={150} loading="lazy" alt="指紋・筆跡鑑定" /></dt>
                    <dd className="mp">指紋・筆跡鑑定</dd>
                    <dd className="txt dsp_hpt">
                        <p className="nm">真相を明らかにする為、警察OBが中心となり高い技術力で指紋採取や指紋鑑定、筆跡鑑定、声紋鑑定などを行います。</p>
                    </dd>
                    </dl>
                </Link>
            </div>
            
        </div>
    </>
  )
}

export default TopMenu
