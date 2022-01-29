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
      <div id="body-editor" className="flex flex-col h-full w-full py-4 text-secondary hover:cursor-text overflow-scroll">
        <div className="flex flex-row space-x-2 relative w-full">
          <div id="number-body" className="flex flex-row w-6 sticky left-0 bg-accentDarkLight px-6">
            <span className="pr-4 flex flex-row justify-end">1</span>
          </div>
          <div id="text-body" className="flex flex-row flex-1">
            <pre style={{padding: '0px !important', background: 'transparent !important'}}><code style={{padding: '0px !important', background: 'transparent !important'}}>skljdkljskld</code></pre>
          </div>
        </div>
      </div>
    </div>
  )
}