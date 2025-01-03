import { j as o } from "../../jsx-runtime-DpuKGoME.js";
import t from "react";
import i from "../DatasheetContext/index.js";
import w from "../DatasheetRow/index.js";
const f = t.memo(({ component: m }) => {
  const {
    data: p,
    theme: e,
    headers: { rowHeaderComponent: r }
  } = t.useContext(i), s = m || e.sheetComponent || "div", d = e.rowHeaderWrapperComponent || t.Fragment, c = e.rowsWrapperComponent || t.Fragment, n = r && /* @__PURE__ */ o.jsx(d, { children: r });
  return /* @__PURE__ */ o.jsxs(s, { children: [
    n,
    /* @__PURE__ */ o.jsx(c, { children: p.map((h, a) => /* @__PURE__ */ o.jsx(w, { row: a, rowData: h }, `row-${a}`)) }),
    e.rowHeaderTopAndBottom && n
  ] });
});
export {
  f as default
};
