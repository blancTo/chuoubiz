import React from 'react'
import { Link } from 'gatsby'

const TopPlan = () => {
  return (
    <>
        <div id="top_plan">
            <h3 className="mp">浮気調査安心プラン</h3>
            <div className="box">
            <dl className="head">
                <dt className="mp"><span className="in">必要なところにピンポイント調査</span></dt>
                <dd>
                <p className="nm">お客様に合った無駄のないプランを提案し、動かぬ証拠を取ります。</p>
                </dd>
            </dl>
            <div className="wrap">
                <dl className="plan w2">
                <dt className="mp">浮気調査(行動調査)基本料金</dt>
                <dd>
                    <span className="red_waku mp">調査員1名毎</span><span className="fs_smt">行動調査1時間毎の基本料金</span><br className="dsp_tbs" /><span className="price red">5,000<span className="fs">円</span></span><span className="komi">税込 5,500円</span>
                </dd>
                </dl>
                <dl className="plan w2">
                <dt className="mp">1時間毎 基本料金</dt>
                <dd>
                    <span className="red_waku mp">調査員2名</span><span className="fs_smt">行動調査1時間毎の基本料金</span><br className="dsp_tbs" /><span className="price red">10,000<span className="fs">円</span></span><span className="komi">税込 11,000円</span>
                </dd>
                </dl>
                <dl className="plan w3">
                <dt className="mp">20時間プラン</dt>
                <dd>
                    <p>19万円<span className="fs">（税込 209,000円）</span>、調査員2名体制<span className="fs">（20時間を数日間にわけて調査致します）</span></p>
                    <p className="red attention">※浮気調査の目的達成率98.1％の実績</p>
                </dd>
                </dl>
                <dl className="plan w3">
                <dt className="mp">30時間プラン</dt>
                <dd>
                    <p>28万円<span className="fs">（税込 308,000円）</span>、調査員2名体制<span className="fs">（30時間を数日間にわけて調査致します）</span></p>
                    <p className="red attention">※浮気調査の目的達成率99.3％の実績</p>
                </dd>
                </dl>
                <dl className="plan w3">
                <dt className="mp">成功報酬プラン</dt>
                <dd>
                    <p>別途お見積り調査期間 最大6ヶ月</p>
                    <p className="red attention">※不貞の証拠取得時に適応</p>
                </dd>
                </dl>
            </div>
            {/*					
                <div class="pad">
                <p class="cen_pc red">
                    ※浮気調査でGPS使用を促す業者にご注意ください！<br class="dsp_tbs">違法な証拠取得は証拠として認められない可能性があります。</p>
                <p class="cen"><Link to="https://www.keishicho.metro.tokyo.lg.jp/about_mpd/keiyaku_horei_kohyo/horei_jorei/stalker.html" target="_blank">ストーカー規制法について<br class="dsp_smt">（警視庁）&raquo;</Link></p>
                </div>
            */}
            </div>
            <div className="box price_box">
            <dl className="head">
                <dt className="mp w2"><span className="in"><span className="txt"><span className="smt_red">追加料金不要</span>で任せて安心<br /><span className="smt_fs">（深夜料金一切不要で安心）</span><br /><span className="fs dsp_hpt">※お支払いはクレジットも利用可能</span></span></span></dt>
                <dd>
                <p className="icon"><img src="../img/top/pay00.png" width={49} height={37} loading="lazy" alt="" /><img src="../img/top/pay01.png" width={50} height={35} loading="lazy" alt="" /><img src="../img/top/pay02.png" width={85} height={26} loading="lazy" alt="" /><img src="../img/top/pay03.png" width={59} height={35} loading="lazy" alt="" /><img src="../img/top/pay04.png" width={124} height={32} loading="lazy" alt="" /></p>
                <p className="dsp_smt fs"><span className="fs">※お支払いはクレジットも利用可能</span></p>
                <p className="link mp"><Link to="/price/">料金の詳細はこちら</Link></p>
                </dd>
            </dl>
            </div>
        </div>      
    </>
  )
}

export default TopPlan
