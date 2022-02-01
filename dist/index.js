

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
require('highlight.js/styles/tomorrow-night-blue.css');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var parse__default = /*#__PURE__*/_interopDefaultLegacy(parse);
var hljs__default = /*#__PURE__*/_interopDefaultLegacy(hljs);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

___$insertStylesToHeader(".ide-component {\n  height: min(75vh, 480px);\n  width: min(90vw, 880px);\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  background-color: #222A2E;\n  border-radius: 24px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-width: 1px;\n  border-color: #222A2E;\n  line-height: 1.5;\n}\n.ide-component p, .ide-component span {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n.ide-component > .bar-ide-component {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 48px;\n  overflow: scroll;\n  background-color: #1A2023;\n  color: #F4F4F4;\n}\n.ide-component > .bar-ide-component > button {\n  border-width: 0px;\n}\n.ide-component > .bar-ide-component > button.tab-bar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  min-width: 160px;\n  padding-left: 16px;\n  padding-right: 16px;\n  border-right-width: 0.5px;\n  background-color: #1A2023;\n  border-color: #1A2023;\n  color: #F4F4F4;\n}\n.ide-component > .bar-ide-component > button.tab-bar.active {\n  background-color: #222A2E;\n  border-bottom-width: 0px;\n  border-top-width: 3px;\n  border-top-color: #3b82f6;\n}\n.ide-component > .bar-ide-component > button.tab-bar:hover {\n  background-color: #222A2E;\n  border-bottom-width: 0px;\n  cursor: pointer;\n}\n.ide-component > .bar-ide-component > button.tab-bar > :not([hidden]) ~ :not([hidden]) {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n.ide-component > .body-editor {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  padding-top: 16px;\n  color: #F4F4F4;\n  overflow-y: scroll;\n  cursor: text;\n}\n.ide-component > .body-editor > .content-editor {\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: max-content;\n}\n.ide-component > .body-editor > .content-editor > :not([hidden]) ~ :not([hidden]) {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n.ide-component > .body-editor > .content-editor > .number-content-editor {\n  display: flex;\n  flex-direction: row;\n  width: 24px;\n  padding-left: 12px;\n  padding-right: 12px;\n  background-color: #222A2E;\n}\n.ide-component > .body-editor > .content-editor > .number-content-editor > span {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  justify-content: end;\n}\n.ide-component > .body-editor > .content-editor > .text-content-editor {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n}\n.ide-component > .body-editor > .content-editor > .text-content-editor > pre {\n  padding: 0px !important;\n  margin: 0px !important;\n  background-color: transparent !important;\n}\n.ide-component > .body-editor > .content-editor > .text-content-editor > pre > code {\n  padding: 0px !important;\n  background-color: transparent !important;\n}");

var IdeComponent = function (_a) {
    var _b;
    var datas = _a.datas;
    var _c = React.useState(null), tabActive = _c[0], setTabActive = _c[1];
    var _d = React.useState(true), tabLoading = _d[0], setTabLoading = _d[1];
    var convertContent = function (dataParse) {
        return new Promise(function (resolve, reject) {
            try {
                dataParse.content = dataParse.content.map(function (x) { return hljs__default["default"].highlight(x, { language: dataParse.lang }).value; });
                resolve(dataParse);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    React.useEffect(function () {
        var ready = true;
        if (ready) {
            setTabLoading(true);
            convertContent(__assign({}, datas[0])).then(function (res) {
                setTabLoading(false);
                setTabActive(res);
            });
        }
        return function () { ready = false; };
    }, []);
    // useEffect(() => {
    //   typewritingCode(document.querySelectorAll<HTMLElement>('.codeScript-writter'))
    // }, [tabActive])
    return (React__default["default"].createElement(React.Fragment, null,
        React__default["default"].createElement("div", { id: "cstm-editor", className: "ide-component" },
            React__default["default"].createElement("div", { id: "bar-editor", className: "bar-ide-component" }, datas.map(function (item, idx) { return (React__default["default"].createElement("button", { key: idx, onClick: function () {
                    setTabLoading(true);
                    convertContent(__assign({}, datas[idx])).then(function (res) {
                        setTabLoading(false);
                        setTabActive(res);
                    });
                }, className: "tab-bar ".concat((tabActive === null || tabActive === void 0 ? void 0 : tabActive.id) == (item === null || item === void 0 ? void 0 : item.id) ? 'active' : '') },
                item.icon,
                React__default["default"].createElement("p", null, item.filename))); })),
            React__default["default"].createElement("div", { id: "body-editor", className: "body-editor" }, !tabLoading && ((_b = tabActive === null || tabActive === void 0 ? void 0 : tabActive.content) === null || _b === void 0 ? void 0 : _b.map(function (item, idx) { return (React__default["default"].createElement("div", { key: idx, className: "content-editor" },
                React__default["default"].createElement("div", { id: "number-body", className: "number-content-editor" },
                    React__default["default"].createElement("span", null, idx + 1)),
                React__default["default"].createElement("div", { id: "text-body", className: "text-content-editor" },
                    React__default["default"].createElement("pre", { style: { padding: '0px !important', background: 'transparent !important' } },
                        React__default["default"].createElement("code", { style: { padding: '0px !important', background: 'transparent !important' } }, parse__default["default"](item)))))); }))))));
};

// export {default as IdeComponent} from "./components/Ide"

exports["default"] = IdeComponent;
//# sourceMappingURL=index.js.map
