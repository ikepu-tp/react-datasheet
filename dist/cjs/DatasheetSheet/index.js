"use strict";const t=require("../../jsx-runtime-DGh1k5sI.js"),o=require("react"),u=require("../DatasheetContext/index.js"),d=require("../DatasheetRow/index.js"),h=o.memo(({component:a})=>{const{data:p,theme:e,headers:{rowHeaderComponent:r}}=o.useContext(u),m=a||e.sheetComponent||"div",c=e.rowHeaderWrapperComponent||o.Fragment,x=e.rowsWrapperComponent||o.Fragment,n=r&&t.jsxRuntimeExports.jsx(c,{children:r});return t.jsxRuntimeExports.jsxs(m,{children:[n,t.jsxRuntimeExports.jsx(x,{children:p.map((i,s)=>t.jsxRuntimeExports.jsx(d,{row:s,rowData:i},`row-${s}`))}),e.rowHeaderTopAndBottom&&n]})});module.exports=h;