import React from 'react'

const breadcrumb = (props) => {
  return (
    <>
      <div className='breadcrumb'>
        <ul id="page_navi">
            <li><a href="/">ホーム</a></li>
            <li>{props.subtitle}</li>
        </ul>
    </div>
    </>
  )
}

export default breadcrumb
