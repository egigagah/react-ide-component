import React, { HTMLAttributes, useState, useEffect, FC, Fragment } from "react"
import parse from 'html-react-parser';
import hljs from "highlight.js";
import 'highlight.js/styles/tomorrow-night-blue.css'
import '../styles/ide.scss'

interface tabDataType {
  /**
   * Id for data object
   * Type: string | name
   * Default: ""
   */
  id: string | number,
  /**
   * Icon for tab bar editor
   * Type: JSX Element
   * Default: ""
   * Description: you can pass icon JSX in here
   */
  icon: JSX.Element,
  /**
   * Filename for tab bar editor
   * Type: string
   * Default: ""
   * Description: giving name with the extention file like .tsx .js etc
   */
  filename: string,
  /**
   * Content code for editor
   * Type: string[]
   * Default: ""
   * Description: pass your code in here
   */
  content: string[],
  /**
   * Language code
   * Type: string
   * Default: ""
   * Description: pass your language code in here
   */
  lang: string
}
// interface IdeComponentType extends HTMLAttributes<HTMLDivElement> {
interface IdeComponentType {
  /**
   * Array of object data to render in editor
   * Type: tabDataType[]
   * Default: ""
   */
  datas: tabDataType[]
}

const IdeComponent: FC<IdeComponentType> = ({datas}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [tabActive, setTabActive] = useState<tabDataType | null>(null)
  const [tabLoading, setTabLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsMounted(true);
  }, [])

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
  })

  return (
    <Fragment>
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
            <div key={idx} className="content-editor">
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
    </Fragment>
  )
}

export default IdeComponent