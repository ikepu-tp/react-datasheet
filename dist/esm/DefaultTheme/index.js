import { j as n } from "../../jsx-runtime-DpuKGoME.js";
function s(r = void 0) {
  let t = {};
  switch (r == null ? void 0 : r.theme) {
    case "flex":
      t.sheetComponent = ({ children: e, ...o }) => /* @__PURE__ */ n.jsx("div", { ...o, children: e }), t.rowComponent = ({ children: e, ...o }) => /* @__PURE__ */ n.jsx("div", { style: { display: "flex" }, ...o, children: e }), t.cellComponent = ({ children: e, ...o }) => /* @__PURE__ */ n.jsx("div", { ...o, children: e }), t.rowHeaderWrapperComponent = ({ children: e, ...o }) => /* @__PURE__ */ n.jsx("div", { style: { display: "flex" }, ...o, children: e }), t.columnHeaderWrapperComponent = ({ children: e, ...o }) => /* @__PURE__ */ n.jsx("div", { ...o, children: e });
      break;
    case "table":
      t.sheetComponent = ({ children: e, ...o }) => /* @__PURE__ */ n.jsx("table", { ...o, children: e }), t.rowsWrapperComponent = ({ children: e, ...o }) => /* @__PURE__ */ n.jsx("tbody", { ...o, children: e }), t.rowComponent = ({ children: e, ...o }) => /* @__PURE__ */ n.jsx("tr", { ...o, children: e }), t.cellComponent = ({ children: e, ...o }) => /* @__PURE__ */ n.jsx("td", { ...o, children: e }), t.rowHeaderWrapperComponent = ({ children: e, ...o }) => /* @__PURE__ */ n.jsx("thead", { ...o, children: e }), t.columnHeaderWrapperComponent = ({ children: e, ...o }) => /* @__PURE__ */ n.jsx("th", { ...o, children: e });
      break;
  }
  return {
    ...t,
    ...r
  };
}
export {
  s as default
};
