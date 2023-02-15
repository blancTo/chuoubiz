import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const TopEvidence = () => {
  return (
    <>
        <div id="top_evidence">
            <h2 className="serif"><span className="red">証拠</span>こそが真実を立証します</h2>
            <p className="mp b">今､あなたの心を救うのは真実しかありません。今、勇気をもってください！</p>
            <p>結果がどんなに残酷なものであっても真実ならば人はそれを受け入れ先に進むことが出来るのですが、偽りは、人の心を膠着させてしまいます。</p>
            <p className="serif sub">裁判所は証拠を基に審理いたします</p>
            <p className="txt">当探偵社の、ご相談内容で最も多いのは、浮気調査や不倫調査についてのご相談です。</p>
            <p className="txt">そこで問題になるのが、多くのお客様がSNSのやり取り等を浮気の証拠になると誤認し、その結果、裁判に負けてしまう可能性がある事です。</p>
            <p className="txt">弊社では、不貞の事実を立証する為に、例えば対象者が自宅から出る所の映像から浮気相手と合流し、食事（立ち寄り先）やホテル（マンション）に出入りする不貞の証拠を取り、同時その経過時間などを記録します。</p>
            <p className="txt">その後、浮気相手の帰宅先も割り出します。また状況次第では継続性や信憑性を立証する為、複数回の証拠固めも行います。</p>
            <div className="sample">
            <h3 className="line mp">報告書写真サンプル</h3>
            <div className="wrap dsp_hpt">
                <dl className="w2">
                <dt>ズームで、ここまで撮ることが出来ます</dt>
                <dd>
                    <p className="arrow"><StaticImage src="../img/top/sample01.jpg" width={248} height={198} loading="lazy" alt="" /></p>
                    <p><StaticImage src="../img/top/sample02.jpg" width={248} height={198} loading="lazy" alt="" /></p>
                </dd>
                </dl>
                <dl className="w2">
                <dt>ホテルの出入りや、自宅の出入りを確実に撮影</dt>
                <dd>
                    <p className="arrow"><StaticImage src="../img/top/sample03.jpg" width={248} height={198} loading="lazy" alt="" /><span>2019/6/25/19:09</span></p>
                    <p><StaticImage src="../img/top/sample04.jpg" width={248} height={198} loading="lazy" alt="" /><span>2019/6/25/21:11</span></p>
                </dd>
                </dl>
                <dl className="w3">
                <dt className="ico">普通のカメラで夜、暗所撮影</dt>
                <dd>
                    <p className="arrow"><StaticImage src="../img/top/sample05.jpg" width={338} height={248} loading="lazy" alt="" /><span>2019/6/25/19:09</span></p>
                </dd>
                </dl>
                <dl className="w3">
                <dt className="ico">高感度カメラで夜、同所暗所</dt>
                <dd>
                    <p className="arrow"><StaticImage src="../img/top/sample06.jpg" width={338} height={248} loading="lazy" alt="" /></p>
                </dd>
                </dl>
                <dl className="w3">
                <dt className="ico">高感度カメラで夜ズーム暗所</dt>
                <dd>
                    <p><StaticImage src="../img/top/sample07.jpg" width={338} height={248} loading="lazy" alt="" /></p>
                </dd>
                </dl>
            </div>
            <p className="cen"><StaticImage src="../img/top/sample08.png" width={655} height={337} loading="lazy" alt="" /></p>
            <p className="link mp"><Link to="/sample/">調査報告書サンプルはコチラ</Link></p>
            </div>
        </div>
    </>
  )
}

export default TopEvidence
