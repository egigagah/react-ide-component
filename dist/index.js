

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

___$insertStylesToHeader(".ide-component {\n  height: 65vh;\n  width: 90vw;\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  background-color: #222A2E;\n  border-radius: 24px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-width: 1;\n  border-color: #222A2E;\n  line-height: 1.5;\n}\n@media (min-width: 768px) {\n  .ide-component {\n    width: 880px;\n    height: 480px;\n  }\n}\n.ide-component > .bar-ide-component {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 48px;\n  overflow: scroll;\n  background-color: #1A2023;\n  color: #F4F4F4;\n}\n.ide-component > .bar-ide-component > .tab-bar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  min-width: 160px;\n  padding-left: 16px;\n  padding-right: 16px;\n  border-right-width: 1px;\n  border-color: #1A2023;\n  color: #F4F4F4;\n}\n.ide-component > .bar-ide-component > .tab-bar.active {\n  background-color: #222A2E;\n  border-bottom: 0px;\n  border-top: 2px;\n  border-top-color: #3b82f6;\n}\n.ide-component > .bar-ide-component > .tab-bar :active:hover {\n  background-color: #222A2E;\n  cursor: pointer;\n}\n.ide-component > .bar-ide-component > .tab-bar > :not([hidden]) ~ :not([hidden]) {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n.ide-component > .body-editor {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  padding-top: 16px;\n  color: #F4F4F4;\n  overflow-y: scroll;\n  cursor: text;\n}\n.ide-component > .body-editor > .content-editor {\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: 100%;\n}\n.ide-component > .body-editor > .content-editor > :not([hidden]) ~ :not([hidden]) {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n.ide-component > .body-editor > .content-editor > .number-content-editor {\n  display: flex;\n  flex-direction: row;\n  width: 24px;\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.ide-component > .body-editor > .content-editor > .number-content-editor span {\n  display: flex;\n  flex-direction: row;\n  justify-content: end;\n  padding-right: 12px;\n}\n.ide-component > .body-editor > .content-editor > .text-content-editor {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n}\n.ide-component > .body-editor > .content-editor > .text-content-editor > pre {\n  padding: 0px !important;\n  margin: 0px !important;\n  background-color: transparent !important;\n}\n.ide-component > .body-editor > .content-editor > .text-content-editor > pre > code {\n  padding: 0px !important;\n  background-color: transparent !important;\n}");

var IdeComponent = function (_a) {
    var _b, _c;
    var datas = _a.datas;
    var _d = React.useState(false); _d[0]; var setIsMounted = _d[1];
    var _e = React.useState(null), tabActive = _e[0], setTabActive = _e[1];
    var _f = React.useState(true), tabLoading = _f[0], setTabLoading = _f[1];
    React.useEffect(function () {
        setIsMounted(true);
    }, []);
    React.useEffect(function () {
        var ready = true;
        if (ready) {
            setTabLoading(true);
            datas.forEach(function (x) {
                x.content.forEach(function (c, i) {
                    x.content[i] = hljs__default["default"].highlight(c, { language: x.lang }).value;
                });
            });
            setTabActive(datas[0]);
            setTabLoading(false);
        }
        return function () { ready = false; };
    });
    return (React__default["default"].createElement(React.Fragment, null,
        React__default["default"].createElement("div", { id: "cstm-editor", className: "ide-component" },
            React__default["default"].createElement("div", { id: "bar-editor", className: "bar-ide-component" }, datas.map(function (item, idx) { return (React__default["default"].createElement("button", { key: idx, 
                // onClick={() => setTabActive(item)}
                className: "tab-bar ".concat(tabActive == item ? 'active' : '') },
                item.icon,
                React__default["default"].createElement("p", null, item.filename))); })),
            React__default["default"].createElement("div", { id: "body-editor", className: "body-editor" }, !tabLoading && ((_c = (_b = datas[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.map(function (item, idx) { return (React__default["default"].createElement("div", { key: idx, className: "content-editor" },
                React__default["default"].createElement("div", { id: "number-body", className: "number-content-editor" },
                    React__default["default"].createElement("span", null, idx + 1)),
                React__default["default"].createElement("div", { id: "text-body", className: "text-content-editor" },
                    React__default["default"].createElement("pre", { style: { padding: '0px !important', background: 'transparent !important' } },
                        React__default["default"].createElement("code", { style: { padding: '0px !important', background: 'transparent !important' } }, parse__default["default"](item)))))); }))))));
};

exports["default"] = IdeComponent;
//# sourceMappingURL=index.js.map
