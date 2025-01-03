import l from "react";
import V from "../DefaultTheme/index.js";
function C({
  data: o,
  theme: s,
  headers: u,
  style: d,
  updateData: g
}) {
  const t = l.useRef(o), [i, f] = l.useState(V(s)), [m, y] = l.useState(u || {}), [r, c] = l.useState(d || "");
  function a(e, n = void 0) {
    g && g(t.current, n || v(e, t.current));
  }
  function p(e) {
    const n = JSON.parse(JSON.stringify(t.current));
    t.current = e, a(n);
  }
  function D(e, n, h) {
    const S = JSON.parse(JSON.stringify(t.current));
    t.current[e] || (t.current[e] = []), t.current[e][n] = h, a(S, [
      {
        oldValue: S[e] ? S[e][n] : void 0,
        newValue: h,
        rowIndex: e,
        columnIndex: n
      }
    ]);
  }
  function R(e, n) {
    const h = JSON.parse(JSON.stringify(t.current));
    t.current[e] = n, a(h);
  }
  function J(e) {
    f({ ...e });
  }
  function N(e) {
    y({ ...e });
  }
  function O(e) {
    c(e);
  }
  return {
    data: t.current,
    changeData: p,
    updateCellData: D,
    updateRowData: R,
    theme: i,
    changeTheme: J,
    headers: m,
    changeHeaders: N,
    style: r,
    changeStyle: O
  };
}
function v(o, s) {
  const u = [], d = Math.max(o.length, s.length);
  return Array.from({ length: d }).forEach((g, t) => {
    const i = o[t] || [], f = s[t] || [], m = Math.max(i.length, f.length);
    Array.from({ length: m }).forEach((y, r) => {
      const c = i[r], a = f[r];
      c !== a && u.push({
        oldValue: c !== void 0 ? c : void 0,
        newValue: a !== void 0 ? a : void 0,
        rowIndex: t,
        columnIndex: r
      });
    });
  }), u;
}
export {
  C as default
};
