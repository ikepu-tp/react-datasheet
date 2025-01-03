import { j as n } from "../../jsx-runtime-DpuKGoME.js";
import r from "react";
import C from "../DatasheetCell/index.js";
import h from "../DatasheetContext/index.js";
const R = r.memo(({ component: c, row: e, rowData: a }) => {
  const {
    data: m,
    theme: t,
    headers: { columnHeaderComponent: s }
  } = r.useContext(h), d = c || t.rowComponent || "div";
  let o;
  if (a)
    o = a;
  else {
    if (!m[e]) throw new Error(`No data at row: ${e}`);
    o = m[e];
  }
  const i = t.columnHeaderWrapperComponent || r.Fragment, p = s && /* @__PURE__ */ n.jsx(i, { children: s });
  return /* @__PURE__ */ n.jsxs(d, { children: [
    p,
    o.map((u, l) => /* @__PURE__ */ n.jsx(C, { row: e, column: l, cellData: u }, `row-${e}-cell-${l}`)),
    t.columnHeaderLeftAndRight && p
  ] });
});
export {
  R as default
};
