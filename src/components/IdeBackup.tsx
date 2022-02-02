import React, { useState, useEffect, FC, Fragment } from "react"
import parse from 'html-react-parser';
import hljs from "highlight.js";
import 'highlight.js/styles/tomorrow-night-blue.css'
import '../styles/ide.scss'
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";

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

const IdeBackup: FC<IdeComponentType> = ({datas}) => {
  const [tabActive, setTabActive] = useState<tabDataType | null>(null)
  const [tabLoading, setTabLoading] = useState<boolean>(true)

  const convertContent = (dataParse:tabDataType) => {
    return new Promise<tabDataType>((resolve, reject) => {
      try {
        dataParse.content = dataParse.content.map(x => hljs.highlight(x, {language: dataParse.lang}).value)
        resolve(dataParse)
      } catch (error) {
        reject(error)
      }
    })
  }

  const typewritingCode = () => {
    const codeTl = gsap.timeline()
    gsap.utils.toArray<HTMLElement>('.codeScript-writter')
    .forEach(el => {
      codeTl.fromTo(el,
        {text: "", display: 'block'},
        { text: el.innerHTML, stagger: el.innerText.length * 0.3 }
      )
    })
    codeTl.play()
  }

  useEffect(() => {
    let ready = true
    if (ready) {
      gsap.registerPlugin(TextPlugin)
      setTabLoading(true)
      convertContent({...datas[0]}).then((res) => {
        setTabLoading(false)
        setTabActive(res)
      })
    }
    return () => {ready = false}
  }, [])

  useEffect(() => {
    typewritingCode()
  }, [tabActive])

  return (
    <Fragment>
      <div className="ide-component">
        <div className="bar-ide-component">
          {datas.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setTabLoading(true)
                convertContent({...datas[idx]}).then((res) => {
                  setTabLoading(false)
                  setTabActive(res);
                })}
              }
              className={`tab-bar ${tabActive?.id == item?.id ? 'active' : ''}`}
            >
              <span className="icon-logo">{item.icon}</span>
              <p>{item.filename}</p>
            </button>
          ))}
        </div>
        <div className="body-editor">
          { !tabLoading && tabActive?.content?.map((item, idx) => (
            <div key={idx} className="content-editor">
              <div id="number-body" className="number-content-editor">
                <span>{idx+1}</span>
              </div>
              <div className="text-content-editor">
                <pre style={{padding: '0px !important', background: 'transparent !important'}}>
                  <code style={{padding: '0px !important', background: 'transparent !important'}} className="codeScript-writter hidden-script">
                    {parse(item)}
                  </code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default IdeBackup