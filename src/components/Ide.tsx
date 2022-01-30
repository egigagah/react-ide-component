import React, { HTMLAttributes, useState, useEffect } from "react"
import parse from 'html-react-parser';
import hljs from "highlight.js";
import 'highlight.js/styles/tomorrow-night-blue.css'
import '../styles/ide.scss'

interface tabDataType {
  id: string | number,
  icon: JSX.Element,
  filename: string,
  content: string[],
  lang: string
}
// interface IdeComponentType extends HTMLAttributes<HTMLDivElement> {
interface IdeComponentType {
  datas: tabDataType[]
}

export default function IdeComponent({datas}:IdeComponentType) {
  const [tabActive, setTabActive] = useState<tabDataType | undefined>(datas[0])
  const [tabLoading, setTabLoading] = useState<boolean>(true)

  useEffect(() => {
    let ready = true
    if (ready) {
      setTabLoading(true)
      datas.forEach((x) => {
        x.content.forEach((c, i) => {
          x.content[i] = hljs.highlight(c, {language: x.lang}).value;
        })
      })
      setTabActive(datas[0])
      setTabLoading(false)
    }
    return () => {ready = false}
  }, [])

  return (
    <div id="cstm-editor" className="ide-component">
      <div id="bar-editor" className="bar-ide-component">
        {datas.map((item, idx) => (
          <button
            key={idx}
            // onClick={() => setTabActive(item)}
            className={`tab-bar ${tabActive == item ? 'active' : ''}`}
          >
            {item.icon}
            <p>{item.filename}</p>
          </button>
        ))}
      </div>
      <div id="body-editor" className="body-editor">
        { !tabLoading && datas[0]?.content?.map((item, idx) => (
          <div className="content-editor">
            <div id="number-body" className="number-content-editor">
              <span>{idx+1}</span>
            </div>
            <div id="text-body" className="text-content-editor">
              <pre style={{padding: '0px !important', background: 'transparent !important'}}><code style={{padding: '0px !important', background: 'transparent !important'}}>
                {parse(item)}
              </code></pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}