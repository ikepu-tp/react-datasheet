import { j as l } from "../../jsx-runtime-DpuKGoME.js";
import o from "react";
import m from "../DatasheetContext/index.js";
const D = o.memo(({ component: i, row: t, column: e, cellData: s }) => {
  const { data: n, theme: u, updateCellData: p } = o.useContext(m), d = i || u.cellComponent || "div";
  let a;
  if (s)
    a = s;
  else {
    if (!n[t] || !n[t][e] && n[t][e] !== void 0 && n[t][e] !== null)
      throw new Error(`No data at row: ${t}, column: ${e}`);
    a = n[t][e];
  }
  const r = o.useRef(a);
  function f(c) {
    r.current = c.currentTarget.textContent, p(t, e, r.current);
  }
  return /* @__PURE__ */ l.jsx(d, { onInput: f, contentEditable: !0, children: r.current });
});
export {
  D as default
};
