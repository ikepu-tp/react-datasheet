import { j as e } from "../../jsx-runtime-DpuKGoME.js";
import p from "../DatasheetContext/index.js";
import n from "../useDatasheet/index.js";
const i = ({ children: t }) => /* @__PURE__ */ e.jsx("div", { className: "ikpeuTp-reactDatasheet__wrapper", children: t });
function d({
  children: t,
  wrapperComponent: s = i,
  ...a
}) {
  const r = n(a), o = s;
  return /* @__PURE__ */ e.jsxs(p.Provider, { value: r, children: [
    r.style && /* @__PURE__ */ e.jsx("style", { children: r.style }),
    /* @__PURE__ */ e.jsx(o, { children: t })
  ] });
}
export {
  d as default,
  i as defaultWrapperComponent
};
