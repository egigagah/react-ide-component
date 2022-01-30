import React from "react"
import '../styles/ide.scss'

export default function IdeComponent() {
  return (
    <div id="cstm-editor" className="ide-component">
      <div id="bar-editor" className="bar-ide-component">
        {/* {tabData.map((item, idx) => ( */}
        <button
          // key={idx}
          // onClick={() => setTabActive(item)}
          className="tab-bar"
        >
          asdasd
          <p>asdasdds</p>
        </button>)
      </div>
      <div id="body-editor" className="body-editor">
        <div className="content-editor">
          <div id="number-body" className="number-content-editor">
            <span>1</span>
          </div>
          <div id="text-body" className="text-content-editor">
            <pre style={{padding: '0px !important', background: 'transparent !important'}}><code style={{padding: '0px !important', background: 'transparent !important'}}>skljdkljskld</code></pre>
          </div>
        </div>
      </div>
    </div>
  )
}