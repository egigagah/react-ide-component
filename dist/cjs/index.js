

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

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var parse = require('html-react-parser');
var hljs = require('highlight.js');
var gsap = require('gsap');
var TextPlugin = require('gsap/dist/TextPlugin');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var parse__default = /*#__PURE__*/_interopDefaultLegacy(parse);
var hljs__default = /*#__PURE__*/_interopDefaultLegacy(hljs);
var gsap__default = /*#__PURE__*/_interopDefaultLegacy(gsap);
var TextPlugin__default = /*#__PURE__*/_interopDefaultLegacy(TextPlugin);

___$insertStylesToHeader(".ide-component{height:min(75vh,480px);width:min(90vw,880px);font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;border-radius:24px;display:flex;flex-direction:column;overflow:hidden;line-height:1.5}.ide-component p,.ide-component span{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}.ide-component>.bar-ide-component{display:flex;flex-direction:row;width:100%;height:48px;overflow:scroll}.ide-component>.bar-ide-component>button{border-width:0px}.ide-component>.bar-ide-component>button.tab-bar{display:flex;flex-direction:row;align-items:center;min-width:160px;padding-left:16px;padding-right:16px}.ide-component>.bar-ide-component>button.tab-bar>span.icon-logo{width:18px;height:18px}.ide-component>.bar-ide-component>button.tab-bar.active{border-bottom-width:0px;border-top-width:3px;border-top-color:#3b82f6}.ide-component>.bar-ide-component>button.tab-bar:hover{border-bottom-width:0px;cursor:pointer}.ide-component>.bar-ide-component>button.tab-bar>:not([hidden])~:not([hidden]){margin-right:8px;margin-left:8px}.ide-component>.body-editor{display:flex;flex-direction:column;height:100%;width:100%;padding-top:16px;overflow-y:scroll;cursor:text}.ide-component>.body-editor>.content-editor{display:flex;flex-direction:row;position:relative;width:max-content}.ide-component>.body-editor>.content-editor>:not([hidden])~:not([hidden]){margin-right:8px;margin-left:8px}.ide-component>.body-editor>.content-editor>.body-number-wrapper{display:flex;flex-direction:column;width:24px;padding-left:12px;padding-right:12px;position:sticky;top:0;left:0}.ide-component>.body-editor>.content-editor>.body-number-wrapper>.number-content-editor>span{display:flex;flex:1;flex-direction:row;justify-content:end}.ide-component>.body-editor>.content-editor>.body-text-wrapper{display:flex;flex-direction:column;flex:1;text-align:start;width:max-content;min-width:100%}.ide-component>.body-editor>.content-editor>.body-text-wrapper>.text-content-editor>pre{padding:0px !important;margin:0px !important;background-color:transparent !important;width:max-content;min-width:100%}.ide-component>.body-editor>.content-editor>.body-text-wrapper>.text-content-editor>pre>code{padding:0px !important;background-color:transparent !important}.ide-component[data-theme=dark]{background-color:#1a2023;border:solid 1px #222a2e}.ide-component[data-theme=dark]>.bar-ide-component{background-color:#222a2e;color:#f4f4f4}.ide-component[data-theme=dark]>.bar-ide-component>button.tab-bar{background-color:#222a2e;border:solid .5px #222a2e;color:#f4f4f4}.ide-component[data-theme=dark]>.bar-ide-component>button.tab-bar.active{background-color:#1a2023}.ide-component[data-theme=dark]>.bar-ide-component>button.tab-bar:hover{background-color:#1a2023}.ide-component[data-theme=dark]>.body-editor{color:#f4f4f4}.ide-component[data-theme=dark]>.body-editor>.content-editor>.body-number-wrapper{background-color:#1a2023}.ide-component[data-theme=light]{background-color:#fff;border:solid 1px #f4f4f4}.ide-component[data-theme=light]>.bar-ide-component{background-color:#f4f4f4;color:#222a2e}.ide-component[data-theme=light]>.bar-ide-component>button.tab-bar{background-color:#f4f4f4;border:solid .5px #f4f4f4;color:#222a2e}.ide-component[data-theme=light]>.bar-ide-component>button.tab-bar.active{background-color:#fff}.ide-component[data-theme=light]>.bar-ide-component>button.tab-bar:hover{background-color:#fff}.ide-component[data-theme=light]>.body-editor{color:#222a2e}.ide-component[data-theme=light]>.body-editor>.content-editor>.body-number-wrapper{background-color:#fff}");

function IdeComponent({ datas, mode = "dark" }) {
    var _a, _b;
    const [tabActive, setTabActive] = React.useState(null);
    const [tabLoading, setTabLoading] = React.useState(true);
    // const [readyLoaded, setreadyLoaded] = useState<boolean>(true);
    const ideRef = React.useRef(null);
    const mappingDatas = (d) => new Promise((resolve, reject) => {
        try {
            const x = Object.assign({}, d);
            const arr = x.content.split("<br>");
            arr.forEach((c, i) => {
                arr[i] = hljs__default["default"].highlight(c, { language: x.lang }).value;
            });
            x.contentData = arr;
            resolve(x);
        }
        catch (error) {
            reject(error);
        }
    });
    const typewritingCode = () => {
        const codeTl = gsap__default["default"].timeline();
        gsap__default["default"].utils
            .toArray(".codeScript-writter")
            .forEach((el) => {
            codeTl.fromTo(el, { text: "", display: "block" }, { text: el.innerHTML, stagger: el.innerText.length * 0.3 });
        });
        codeTl.play();
    };
    React.useEffect(() => {
        let ready = true;
        if (ready) {
            gsap__default["default"].registerPlugin(TextPlugin__default["default"]);
            setTabLoading(true);
            mappingDatas(datas[0]).then((res) => {
                setTabActive(res);
                setTabLoading(false);
                typewritingCode();
            });
        }
        return () => {
            ready = false;
        };
    }, []);
    React.useEffect(() => {
        var _a;
        if (mode === "dark")
            Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('highlight.js/styles/stackoverflow-dark.css')); });
        else
            Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('highlight.js/styles/stackoverflow-light.css')); });
        (_a = ideRef.current) === null || _a === void 0 ? void 0 : _a.setAttribute("data-theme", mode);
    }, [mode]);
    return (React__default["default"].createElement("div", { ref: ideRef, id: "cstm-editor", className: "ide-component" },
        React__default["default"].createElement("div", { id: "bar-editor", className: "bar-ide-component" }, datas.map((item, idx) => {
            var _a;
            return (React__default["default"].createElement("button", { id: (_a = item === null || item === void 0 ? void 0 : item.id) !== null && _a !== void 0 ? _a : `${item === null || item === void 0 ? void 0 : item.filename}-${idx + Math.floor(Math.random() * (100 - 1))}`, key: `${item === null || item === void 0 ? void 0 : item.filename}-${item === null || item === void 0 ? void 0 : item.id}-${idx}`, onClick: () => {
                    mappingDatas(item).then((res) => {
                        setTabActive(res);
                        setTabLoading(false);
                        typewritingCode();
                    });
                }, className: `tab-bar ${(tabActive === null || tabActive === void 0 ? void 0 : tabActive.id) === item.id ? "active" : ""}`, type: "button" },
                React__default["default"].createElement("span", { className: "icon-logo" }, item.icon),
                React__default["default"].createElement("p", null, item.filename)));
        })),
        React__default["default"].createElement("div", { id: "body-editor", className: "body-editor" },
            React__default["default"].createElement("div", { className: "content-editor" },
                React__default["default"].createElement("div", { className: "body-number-wrapper" }, !tabLoading &&
                    ((_a = tabActive === null || tabActive === void 0 ? void 0 : tabActive.contentData) === null || _a === void 0 ? void 0 : _a.map((item, idx) => (React__default["default"].createElement("div", { key: `num-${tabActive.id}-${idx}`, id: "number-body", className: "number-content-editor" },
                        React__default["default"].createElement("span", null, idx + 1)))))),
                React__default["default"].createElement("div", { className: "body-text-wrapper" }, !tabLoading &&
                    ((_b = tabActive === null || tabActive === void 0 ? void 0 : tabActive.contentData) === null || _b === void 0 ? void 0 : _b.map((item, idx) => (React__default["default"].createElement("div", { key: `text-${tabActive.id}-${idx}`, id: "text-body", className: "text-content-editor" },
                        React__default["default"].createElement("pre", { style: {
                                padding: "0px !important",
                                background: "transparent !important",
                            } },
                            React__default["default"].createElement("code", { style: {
                                    padding: "0px !important",
                                    background: "transparent !important",
                                }, className: "codeScript-writter" }, parse__default["default"](item === "" ? " " : item))))))))))));
}

exports["default"] = IdeComponent;
//# sourceMappingURL=index.js.map
