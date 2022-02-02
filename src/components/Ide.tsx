import React, { useState, useEffect, FC } from "react";
import parse from "html-react-parser";
import hljs from "highlight.js";
import "highlight.js/styles/tomorrow-night-blue.css";
import "../styles/ide.scss";
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";

interface TabDataType {
  /**
   * an id for element id that might be could be usefull for your needed or u can let me generating randomly for you
   * Type: string | undefined
   * Default: ""
   */
  id: string | undefined;
  /**
   * Icon for tab bar editor
   * Type: JSX Element
   * Default: ""
   * Description: you can pass icon JSX in here
   */
  icon: JSX.Element;
  /**
   * Filename for tab bar editor
   * Type: string
   * Default: ""
   * Description: giving name with the extention file like .tsx .js etc
   */
  filename: string;
  /**
   * Content code for editor
   * Type: string[]
   * Default: ""
   * Description: pass your code in here
   */
  content: string;
  /**
   * Language code
   * Type: string
   * Default: ""
   * Description: pass your language code in here
   */
  lang: string;
}

interface IdeTypeState extends TabDataType {
  /**
   * Id for data object
   * Type: string | name
   * Default: ""
   */
  contentData?: string[];
}
// interface IdeComponentType extends HTMLAttributes<HTMLDivElement> {
interface IdeComponentType {
  /**
   * Array of object data to render in editor
   * Type: TabDataType[]
   * Default: ""
   */
  datas: TabDataType[];
}

const IdeComponent: FC<IdeComponentType> = ({ datas }) => {
  const [tabActive, setTabActive] = useState<IdeTypeState | null>(null);
  const [tabLoading, setTabLoading] = useState<boolean>(true);

  const mappingDatas = (d: IdeTypeState): Promise<IdeTypeState> =>
    new Promise((resolve, reject) => {
      try {
        const arr = d.content.split("<br>");
        arr.forEach((c, i) => {
          arr[i] = hljs.highlight(c, { language: d.lang }).value;
        });
        d.contentData = arr;
        resolve(d);
      } catch (error) {
        reject(error);
      }
    });

  const typewritingCode = () => {
    const codeTl = gsap.timeline();
    gsap.utils.toArray<HTMLElement>(".codeScript-writter").forEach((el) => {
      codeTl.fromTo(
        el,
        { text: "", display: "block" },
        { text: el.innerHTML, stagger: el.innerText.length * 0.3 }
      );
    });
    codeTl.play();
  };

  useEffect(() => {
    let ready = true;
    if (ready) {
      gsap.registerPlugin(TextPlugin);
      setTabLoading(true);
      mappingDatas({ ...datas[0] }).then((res) => {
        setTabActive(res);
        setTabLoading(false);
        typewritingCode();
      });
    }
    return () => {
      ready = false;
    };
  }, []);

  return (
    <div id="cstm-editor" className="ide-component">
      <div id="bar-editor" className="bar-ide-component">
        {datas.map((item, idx) => (
          <button
            id={
              item?.id ??
              `${item?.filename}-${idx + Math.floor(Math.random() * (100 - 1))}`
            }
            key={`${item?.filename}-${item?.id}-${idx}`}
            onClick={() => {
              mappingDatas({ ...item }).then((res) => {
                setTabActive(res);
                setTabLoading(false);
                typewritingCode();
              });
            }}
            className={`tab-bar ${tabActive?.id === item.id ? "active" : ""}`}
            type="button"
          >
            <span className="icon-logo">{item.icon}</span>
            <p>{item.filename}</p>
          </button>
        ))}
      </div>
      <div id="body-editor" className="body-editor">
        <div className="content-editor">
          <div className="body-number-wrapper">
            {!tabLoading &&
              tabActive?.contentData?.map((item, idx) => (
                <div
                  key={`num-${tabActive.id}-${idx}`}
                  id="number-body"
                  className="number-content-editor"
                >
                  <span>{idx + 1}</span>
                </div>
              ))}
          </div>
          <div className="body-text-wrapper">
            {!tabLoading &&
              tabActive?.contentData?.map((item, idx) => (
                <div
                  key={`text-${tabActive.id}-${idx}`}
                  id="text-body"
                  className="text-content-editor"
                >
                  <pre
                    style={{
                      padding: "0px !important",
                      background: "transparent !important",
                    }}
                  >
                    <code
                      style={{
                        padding: "0px !important",
                        background: "transparent !important",
                      }}
                      className="codeScript-writter"
                    >
                      {parse(item === "" ? " " : item)}
                    </code>
                  </pre>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeComponent;
