function ___$insertStylesToHeader(css) {
  if (!css) {
    return
  }
  if (typeof window === 'undefined') {
    return
  }

  const style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css
}

import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow-night-blue.css';
import gsap from 'gsap';
import TextPlugin from 'gsap/dist/TextPlugin';

___$insertStylesToHeader(".ide-component{height:min(75vh,480px);width:min(90vw,880px);font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;background-color:#222a2e;border-radius:24px;display:flex;flex-direction:column;overflow:hidden;border-width:1px;border-color:#222a2e;line-height:1.5}.ide-component p,.ide-component span{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}.ide-component>.bar-ide-component{display:flex;flex-direction:row;width:100%;height:48px;overflow:scroll;background-color:#1a2023;color:#f4f4f4}.ide-component>.bar-ide-component>button{border-width:0px}.ide-component>.bar-ide-component>button.tab-bar{display:flex;flex-direction:row;align-items:center;min-width:160px;padding-left:16px;padding-right:16px;border-right-width:.5px;background-color:#1a2023;border-color:#1a2023;color:#f4f4f4}.ide-component>.bar-ide-component>button.tab-bar>span.icon-logo{width:18px;height:18px}.ide-component>.bar-ide-component>button.tab-bar.active{background-color:#222a2e;border-bottom-width:0px;border-top-width:3px;border-top-color:#3b82f6}.ide-component>.bar-ide-component>button.tab-bar:hover{background-color:#222a2e;border-bottom-width:0px;cursor:pointer}.ide-component>.bar-ide-component>button.tab-bar>:not([hidden])~:not([hidden]){margin-right:8px;margin-left:8px}.ide-component>.body-editor{display:flex;flex-direction:column;height:100%;width:100%;padding-top:16px;color:#f4f4f4;overflow-y:scroll;cursor:text}.ide-component>.body-editor>.content-editor{display:flex;flex-direction:row;position:relative;width:max-content}.ide-component>.body-editor>.content-editor>:not([hidden])~:not([hidden]){margin-right:8px;margin-left:8px}.ide-component>.body-editor>.content-editor>.body-number-wrapper{display:flex;flex-direction:column;width:24px;padding-left:12px;padding-right:12px;background-color:#222a2e;position:sticky;top:0;left:0}.ide-component>.body-editor>.content-editor>.body-number-wrapper>.number-content-editor>span{display:flex;flex:1;flex-direction:row;justify-content:end}.ide-component>.body-editor>.content-editor>.body-text-wrapper{display:flex;flex-direction:column;flex:1;text-align:start;width:max-content;min-width:100%}.ide-component>.body-editor>.content-editor>.body-text-wrapper>.text-content-editor>pre{padding:0px !important;margin:0px !important;background-color:transparent !important;width:max-content;min-width:100%}.ide-component>.body-editor>.content-editor>.body-text-wrapper>.text-content-editor>pre>code{padding:0px !important;background-color:transparent !important}");

const IdeComponent = ({ datas }) => {
    var _a, _b;
    const [tabActive, setTabActive] = useState(null);
    const [tabLoading, setTabLoading] = useState(true);
    const mappingDatas = (d) => new Promise((resolve, reject) => {
        try {
            const arr = d.content.split("<br>");
            arr.forEach((c, i) => {
                arr[i] = hljs.highlight(c, { language: d.lang }).value;
            });
            d.contentData = arr;
            resolve(d);
        }
        catch (error) {
            reject(error);
        }
    });
    const typewritingCode = () => {
        const codeTl = gsap.timeline();
        gsap.utils.toArray(".codeScript-writter").forEach((el) => {
            codeTl.fromTo(el, { text: "", display: "block" }, { text: el.innerHTML, stagger: el.innerText.length * 0.3 });
        });
        codeTl.play();
    };
    useEffect(() => {
        let ready = true;
        if (ready) {
            gsap.registerPlugin(TextPlugin);
            setTabLoading(true);
            mappingDatas(Object.assign({}, datas[0])).then((res) => {
                setTabActive(res);
                setTabLoading(false);
                typewritingCode();
            });
        }
        return () => {
            ready = false;
        };
    }, []);
    return (React.createElement("div", { id: "cstm-editor", className: "ide-component" },
        React.createElement("div", { id: "bar-editor", className: "bar-ide-component" }, datas.map((item, idx) => {
            var _a;
            return (React.createElement("button", { id: (_a = item === null || item === void 0 ? void 0 : item.id) !== null && _a !== void 0 ? _a : `${item === null || item === void 0 ? void 0 : item.filename}-${idx + Math.floor(Math.random() * (100 - 1))}`, key: `${item === null || item === void 0 ? void 0 : item.filename}-${item === null || item === void 0 ? void 0 : item.id}-${idx}`, onClick: () => {
                    mappingDatas(Object.assign({}, item)).then((res) => {
                        setTabActive(res);
                        setTabLoading(false);
                        typewritingCode();
                    });
                }, className: `tab-bar ${(tabActive === null || tabActive === void 0 ? void 0 : tabActive.id) === item.id ? "active" : ""}`, type: "button" },
                React.createElement("span", { className: "icon-logo" }, item.icon),
                React.createElement("p", null, item.filename)));
        })),
        React.createElement("div", { id: "body-editor", className: "body-editor" },
            React.createElement("div", { className: "content-editor" },
                React.createElement("div", { className: "body-number-wrapper" }, !tabLoading &&
                    ((_a = tabActive === null || tabActive === void 0 ? void 0 : tabActive.contentData) === null || _a === void 0 ? void 0 : _a.map((item, idx) => (React.createElement("div", { key: `num-${tabActive.id}-${idx}`, id: "number-body", className: "number-content-editor" },
                        React.createElement("span", null, idx + 1)))))),
                React.createElement("div", { className: "body-text-wrapper" }, !tabLoading &&
                    ((_b = tabActive === null || tabActive === void 0 ? void 0 : tabActive.contentData) === null || _b === void 0 ? void 0 : _b.map((item, idx) => (React.createElement("div", { key: `text-${tabActive.id}-${idx}`, id: "text-body", className: "text-content-editor" },
                        React.createElement("pre", { style: {
                                padding: "0px !important",
                                background: "transparent !important",
                            } },
                            React.createElement("code", { style: {
                                    padding: "0px !important",
                                    background: "transparent !important",
                                }, className: "codeScript-writter" }, parse(item === "" ? " " : item))))))))))));
};

// export {default as IdeComponent} from "./components/Ide"

export { IdeComponent as default };
//# sourceMappingURL=index.js.map
