import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const policy = () => {
    const pagemeta = {
        title:`個人情報保護方針`,
        slug:`policy`
    }
    return (
        <>
        <Seo
        title="個人情報保護に関する取り組み"
        description="広島の探偵社「中央リサーチ」の個人情報保護に関する取り組みについて。"
        />
            <div id="wrap">
            <Header h1title="広島の探偵社「中央リサーチ」の個人情報保護に関する取り組み" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">
                    <p className="pb">株式会社中央リサーチ（以下「当社」という。）は、探偵業の業務の適正化に関する法律に定める探偵業務及び同業務と密接に関連する業務（以下「業務」という。）を推進するに当たり、当社が取り扱うすべての個人情報の保護について社会的責任を認識し、個人情報の保護に関する法令その他の規範等を遵守します。また、次のとおり個人情報保護方針を定め、個人情報の管理及び個人情報を取り扱う者に対する監督を適切に行います。</p>
  <div className="pb">
    <h3 className="headline">個人情報保護方針</h3>
    <ol>
      <li>個人情報は業務を遂行する上で必要な範囲に限定して取得、利用及び提供します。また、利用目的を達成するために必要な範囲を越えて個人情報の取り扱いはしません。</li>
      <li>個人情報保護に関する法令、国が定める指針その他の規範を遵守します。</li>
      <li>個人情報の漏えい、滅失、き損などのリスクに対しては、安全対策を講じて防止します。</li>
      <li>個人情報の取り扱いに関する苦情、相談に対しては、適切かつ迅速に対応します。</li>
      <li>個人情報の管理及び個人情報を取り扱う者に対する監督については、関係法令の改正及び業務の環境変化に対応し、適時、適切に継続して改善していきます。</li>
    </ol>
  </div>
  <div className="pb">
    <h3 className="headline">個人情報の取扱</h3>
    <p>当社は上記方針に基づき個人の権利や利益を保護するため、次のとおり個人情報を適正に取り扱います。</p>
    <dl>
      <dt>1. 個人情報の利用目的</dt>
      <dd>当社の個人情報の利用目的は次のとおりです。<br />
        (1) 依頼者から委任された業務を遂行する目的<br />
        (2) 依頼者に業務の実施結果を報告する目的<br />
        (3) 業務に関する苦情、相談及び問い合わせに対応する目的</dd>
    </dl>
    <dl>
      <dt>2. 個人情報の管理</dt>
      <dd>当社は、個人情報の漏えい、滅失、き損などを防止するため、代表取締役を個人情報管理責任者とし、組織的にセキュリティを強化し適切に管理します。</dd>
    </dl>
    <dl>
      <dt>3. 個人情報の提供</dt>
      <dd>次の場合を除き、あらかじめ依頼者の同意を得ることなく、個人情報を第三者に提供することはしません。<br />
        ・依頼者の同意が得られている場合<br />
        ・法令により要求された場合</dd>
    </dl>
    <dl>
      <dt>4. 個人情報の預託</dt>
      <dd>当社は業務の運営上、依頼者により良いサービスを提供するため、依頼者の承諾を得て、業務の全部又は一部を外部に委託することがあります。この場合、委託先に個人情報を預託することがあります。委託先には個人情報保護の重要性を認識している業者を選定し、個人情報の管理と監督を徹底します。</dd>
    </dl>
    <dl>
      <dt>5. 個人情報開示の請求</dt>
      <dd>個人情報によって識別される特定の個人（以下「本人」という。）は、当社に対して自己の個人情報の開示に関して申し出ることができます。その際、本人であることを確認させていただいた上で、遅滞なく対応します。ただし、次のいずれかに該当する場合は、その全部又は一部を開示できないことがあります。<br />
        ⑴	 本人又は第三者の生命、身体、財産その他の権利利益を害するおそれがある場合<br />
        ⑵	 当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合<br />
        ⑶	 他の法令に違反することとなる場合</dd>
    </dl>
    <dl>
      <dt>6. 個人情報の処分</dt>
      <dd>個人情報の利用目的を達成した場合、取得した個人情報は速やかに破棄処分します。ただし、依頼者と十分協議をして処分期限を決定します。</dd>
    </dl>
    <dl>
      <dt>7. 改定</dt>
      <dd>本個人情報保護の取扱は、法令等の改正及び業務の環境変化に対応するため、予告なく改定することがあります。</dd>
    </dl>
    <dl>
      <dt>8. 問い合わせ先</dt>
      <dd><p>個人情報の取り扱いに対する苦情、相談及び問い合わせ先は次のとおりです。</p>
        <p className="cen">株式会社中央リサーチ　<br className="dsp_smt" />TEL：082-211-1600（代表）<br />
          広島市中区上幟町2-45　今田ビル２階</p>
      </dd>
    </dl>
  </div>
                    </div>
                </Layout>
            </div>
            <Footer />
        </>
    )
}

export const Head = () => (
    <>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/respond.js"></script>
        <script src="/js/fetch.min.js"></script>
    </>
)

export default policy
