import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as m}from"./index-CqrSl2Gl.js";const b=m.createContext({data:[],changeData:()=>{},updateCellData:()=>{},updateRowData:()=>{},theme:{},changeTheme:()=>{},headers:{},changeHeaders:()=>{},style:"",changeStyle:()=>{}});function Y(o=void 0){let a={};switch(o==null?void 0:o.theme){case"flex":a.sheetComponent=({children:e,...t})=>n.jsx("div",{...t,children:e}),a.rowComponent=({children:e,...t})=>n.jsx("div",{style:{display:"flex"},...t,children:e}),a.cellComponent=({children:e,...t})=>n.jsx("div",{...t,children:e}),a.rowHeaderWrapperComponent=({children:e,...t})=>n.jsx("div",{style:{display:"flex"},...t,children:e}),a.columnHeaderWrapperComponent=({children:e,...t})=>n.jsx("div",{...t,children:e});break;case"table":a.sheetComponent=({children:e,...t})=>n.jsx("table",{...t,children:e}),a.rowsWrapperComponent=({children:e,...t})=>n.jsx("tbody",{...t,children:e}),a.rowComponent=({children:e,...t})=>n.jsx("tr",{...t,children:e}),a.cellComponent=({children:e,...t})=>n.jsx("td",{...t,children:e}),a.rowHeaderWrapperComponent=({children:e,...t})=>n.jsx("thead",{...t,children:e}),a.columnHeaderWrapperComponent=({children:e,...t})=>n.jsx("th",{...t,children:e});break}return{...a,...o}}function Z({data:o,theme:a,headers:e,style:t,updateData:d}){const r=m.useRef(o),[u,l]=m.useState(Y(a)),[p,i]=m.useState(e||{}),[R,c]=m.useState(t||"");function f(s,h=void 0){d&&d(r.current,h||ee(s,r.current))}function z(s){const h=JSON.parse(JSON.stringify(r.current));r.current=s,f(h)}function G(s,h,C){const x=JSON.parse(JSON.stringify(r.current));r.current[s]||(r.current[s]=[]),r.current[s][h]=C,f(x,[{oldValue:x[s]?x[s][h]:void 0,newValue:C,rowIndex:s,columnIndex:h}])}function K(s,h){const C=JSON.parse(JSON.stringify(r.current));r.current[s]=h,f(C)}function Q(s){l({...s})}function U(s){i({...s})}function X(s){c(s)}return{data:r.current,changeData:z,updateCellData:G,updateRowData:K,theme:u,changeTheme:Q,headers:p,changeHeaders:U,style:R,changeStyle:X}}function ee(o,a){const e=[],t=Math.max(o.length,a.length);return Array.from({length:t}).forEach((d,r)=>{const u=o[r]||[],l=a[r]||[],p=Math.max(u.length,l.length);Array.from({length:p}).forEach((i,R)=>{const c=u[R],f=l[R];c!==f&&e.push({oldValue:c!==void 0?c:void 0,newValue:f!==void 0?f:void 0,rowIndex:r,columnIndex:R})})}),e}const V=({children:o})=>n.jsx("div",{className:"ikpeuTp-reactDatasheet__wrapper",children:o});function B({children:o,wrapperComponent:a=V,...e}){const t=Z(e),d=a;return n.jsxs(b.Provider,{value:t,children:[t.style&&n.jsx("style",{children:t.style}),n.jsx(d,{children:o})]})}V.__docgenInfo={description:"",methods:[],displayName:"defaultWrapperComponent"};B.__docgenInfo={description:"",methods:[],displayName:"DatasheetProvider",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]}],raw:"DatasheetCellData[]"}],raw:"DatasheetCellData[][]"},description:""},wrapperComponent:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: PropsWithChildren) => React.ReactNode",signature:{arguments:[{type:{name:"PropsWithChildren"},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"",defaultValue:{value:`({ children }) => (
	<div className="ikpeuTp-reactDatasheet__wrapper">{children}</div>
)`,computed:!1}},theme:{required:!1,tsType:{name:"signature",type:"object",raw:`{
	theme?: DatasheetThemeTheme;
	sheetComponent?: DatasheetSheetComponent;
	rowComponent?: DatasheetRowComponent;
	cellComponent?: DatasheetCellComponent;
	rowsWrapperComponent?: DatasheetRowsWrapperComponent;
	rowHeaderWrapperComponent?: DatasheetRowHeaderComponent;
	columnHeaderWrapperComponent?: DatasheetColumnHeaderComponent;
	rowHeaderTopAndBottom?: boolean;
	columnHeaderLeftAndRight?: boolean;
}`,signature:{properties:[{key:"theme",value:{name:"union",raw:"'table' | 'flex'",elements:[{name:"literal",value:"'table'"},{name:"literal",value:"'flex'"}],required:!1}},{key:"sheetComponent",value:{name:"signature",type:"function",raw:"(props: PropsWithChildren) => React.ReactNode",signature:{arguments:[{type:{name:"PropsWithChildren"},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"rowComponent",value:{name:"signature",type:"function",raw:"(props: PropsWithChildren) => React.ReactNode",signature:{arguments:[{type:{name:"PropsWithChildren"},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"cellComponent",value:{name:"signature",type:"function",raw:`(
	props: PropsWithChildren & { onInput: React.FormEventHandler<HTMLDivElement>; contentEditable: boolean }
) => React.ReactNode`,signature:{arguments:[{type:{name:"intersection",raw:"PropsWithChildren & { onInput: React.FormEventHandler<HTMLDivElement>; contentEditable: boolean }",elements:[{name:"PropsWithChildren"},{name:"signature",type:"object",raw:"{ onInput: React.FormEventHandler<HTMLDivElement>; contentEditable: boolean }",signature:{properties:[{key:"onInput",value:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}],required:!0}},{key:"contentEditable",value:{name:"boolean",required:!0}}]}}]},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"rowsWrapperComponent",value:{name:"signature",type:"function",raw:"(props: PropsWithChildren) => React.ReactNode",signature:{arguments:[{type:{name:"PropsWithChildren"},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"rowHeaderWrapperComponent",value:{name:"signature",type:"function",raw:"(props: PropsWithChildren) => React.ReactNode",signature:{arguments:[{type:{name:"PropsWithChildren"},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"columnHeaderWrapperComponent",value:{name:"signature",type:"function",raw:"(props: PropsWithChildren) => React.ReactNode",signature:{arguments:[{type:{name:"PropsWithChildren"},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"rowHeaderTopAndBottom",value:{name:"boolean",required:!1}},{key:"columnHeaderLeftAndRight",value:{name:"boolean",required:!1}}]}},description:""},headers:{required:!1,tsType:{name:"signature",type:"object",raw:`{
	rowHeaderComponent?: React.ReactNode;
	columnHeaderComponent?: React.ReactNode;
}`,signature:{properties:[{key:"rowHeaderComponent",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"columnHeaderComponent",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}},description:""},style:{required:!1,tsType:{name:"string"},description:""},updateData:{required:!1,tsType:{name:"signature",type:"function",raw:"(newData: DatasheetData, differences: DatasheetDifferenceData[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Array",elements:[{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]}],raw:"DatasheetCellData[]"}],raw:"DatasheetCellData[][]"},name:"newData"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
	oldValue: DatasheetCellData | undefined;
	newValue: DatasheetCellData | undefined;
	rowIndex: number;
	columnIndex: number;
}`,signature:{properties:[{key:"oldValue",value:{name:"union",raw:"DatasheetCellData | undefined",elements:[{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},{name:"undefined"}],required:!0}},{key:"newValue",value:{name:"union",raw:"DatasheetCellData | undefined",elements:[{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},{name:"undefined"}],required:!0}},{key:"rowIndex",value:{name:"number",required:!0}},{key:"columnIndex",value:{name:"number",required:!0}}]}}],raw:"DatasheetDifferenceData[]"},name:"differences"}],return:{name:"void"}}},description:""}}};const O=m.memo(({component:o,row:a,column:e,cellData:t})=>{const{data:d,theme:r,updateCellData:u}=m.useContext(b),l=o||r.cellComponent||"div";let p;if(t)p=t;else{if(!d[a]||!d[a][e]&&d[a][e]!==void 0&&d[a][e]!==null)throw new Error(`No data at row: ${a}, column: ${e}`);p=d[a][e]}const i=m.useRef(p);function R(c){i.current=c.currentTarget.textContent,u(a,e,i.current)}return n.jsx(l,{onInput:R,contentEditable:!0,children:i.current})});O.__docgenInfo={description:"",methods:[],displayName:"DatasheetCell",props:{component:{required:!1,tsType:{name:"signature",type:"function",raw:`(
	props: PropsWithChildren & { onInput: React.FormEventHandler<HTMLDivElement>; contentEditable: boolean }
) => React.ReactNode`,signature:{arguments:[{type:{name:"intersection",raw:"PropsWithChildren & { onInput: React.FormEventHandler<HTMLDivElement>; contentEditable: boolean }",elements:[{name:"PropsWithChildren"},{name:"signature",type:"object",raw:"{ onInput: React.FormEventHandler<HTMLDivElement>; contentEditable: boolean }",signature:{properties:[{key:"onInput",value:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}],required:!0}},{key:"contentEditable",value:{name:"boolean",required:!0}}]}}]},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},row:{required:!0,tsType:{name:"number"},description:""},column:{required:!0,tsType:{name:"number"},description:""},cellData:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:""}}};const J=m.memo(({component:o,row:a,rowData:e})=>{const{data:t,theme:d,headers:{columnHeaderComponent:r}}=m.useContext(b),u=o||d.rowComponent||"div";let l;if(e)l=e;else{if(!t[a])throw new Error(`No data at row: ${a}`);l=t[a]}const p=d.columnHeaderWrapperComponent||m.Fragment,i=r&&n.jsx(p,{children:r});return n.jsxs(u,{children:[i,l.map((R,c)=>n.jsx(O,{row:a,column:c,cellData:R},`row-${a}-cell-${c}`)),d.columnHeaderLeftAndRight&&i]})});J.__docgenInfo={description:"",methods:[],displayName:"DatasheetRow",props:{component:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: PropsWithChildren) => React.ReactNode",signature:{arguments:[{type:{name:"PropsWithChildren"},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},row:{required:!0,tsType:{name:"number"},description:""},rowData:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]}],raw:"DatasheetCellData[]"},description:""}}};const $=m.memo(({component:o})=>{const{data:a,theme:e,headers:{rowHeaderComponent:t}}=m.useContext(b),d=o||e.sheetComponent||"div",r=e.rowHeaderWrapperComponent||m.Fragment,u=e.rowsWrapperComponent||m.Fragment,l=t&&n.jsx(r,{children:t});return n.jsxs(d,{children:[l,n.jsx(u,{children:a.map((p,i)=>n.jsx(J,{row:i,rowData:p},`row-${i}`))}),e.rowHeaderTopAndBottom&&l]})});$.__docgenInfo={description:"",methods:[],displayName:"DatasheetSheet",props:{component:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: PropsWithChildren) => React.ReactNode",signature:{arguments:[{type:{name:"PropsWithChildren"},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const re={title:"Components/Datasheet",component:te,tags:["autodocs"],argTypes:{}},w=[["data at row 0, column 0","data at row 0, column 1"],["data at row 1, column 0","data at row 1, column 1"]],g={args:{data:w,theme:{},style:".ikpeuTp-reactDatasheet__wrapper div[style] {border: 1px solid black;}"}},y={args:{data:w,theme:{theme:"flex"}}},H={args:{data:w,theme:{theme:"table"}}},D={args:{data:w,theme:{theme:"flex",columnHeaderLeftAndRight:!0,rowHeaderTopAndBottom:!0},headers:{rowHeaderComponent:n.jsxs(n.Fragment,{children:[n.jsx("div",{children:"Row Header 0"}),n.jsx("div",{children:"Row Header 1"}),n.jsx("div",{children:"Row Header 2"})]}),columnHeaderComponent:"Colunm Header"}}},v={args:{data:w,theme:{theme:"table",columnHeaderLeftAndRight:!0,rowHeaderTopAndBottom:!0},headers:{rowHeaderComponent:n.jsxs("tr",{children:[n.jsx("th",{children:"Row Header 0"}),n.jsx("th",{children:"Row Header 1"}),n.jsx("th",{children:"Row Header 2"})]}),columnHeaderComponent:"Colunm Header"}}};function te(o){function a(e,t){console.log(e,t)}return n.jsx("div",{className:"datasheet-story",children:n.jsx(B,{updateData:a,...o,children:n.jsx($,{})})})}var N,T,W;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    theme: {},
    style: '.ikpeuTp-reactDatasheet__wrapper div[style] {border: 1px solid black;}'
  }
}`,...(W=(T=g.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var j,E,q;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    theme: {
      theme: 'flex'
    }
  }
}`,...(q=(E=y.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var k,P,A;H.parameters={...H.parameters,docs:{...(k=H.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    theme: {
      theme: 'table'
    }
  }
}`,...(A=(P=H.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var _,S,F;D.parameters={...D.parameters,docs:{...(_=D.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    theme: {
      theme: 'flex',
      columnHeaderLeftAndRight: true,
      rowHeaderTopAndBottom: true
    },
    headers: {
      rowHeaderComponent: <>
                    <div>Row Header 0</div>
                    <div>Row Header 1</div>
                    <div>Row Header 2</div>
                </>,
      columnHeaderComponent: 'Colunm Header'
    }
  }
}`,...(F=(S=D.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var L,I,M;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    theme: {
      theme: 'table',
      columnHeaderLeftAndRight: true,
      rowHeaderTopAndBottom: true
    },
    headers: {
      rowHeaderComponent: <tr>
                    <th>Row Header 0</th>
                    <th>Row Header 1</th>
                    <th>Row Header 2</th>
                </tr>,
      columnHeaderComponent: 'Colunm Header'
    }
  }
}`,...(M=(I=v.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const oe=["Normal","Flex","Table","FlexWithHeaders","TableWithHeaders"];export{y as Flex,D as FlexWithHeaders,g as Normal,H as Table,v as TableWithHeaders,oe as __namedExportsOrder,re as default};
