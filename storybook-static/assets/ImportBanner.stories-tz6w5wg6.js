import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{r as i}from"./index-GiUgBvb1.js";import{c as h,a as H,C as O}from"./index-323Do6uA.js";import{B as G}from"./button-CR3ZQWbs.js";import{P as v}from"./progress-LoXDn6u9.js";import{C as J}from"./circle-check-BvvrER6z.js";import"./index-DzYlqESo.js";import"./index-B7pcWWqY.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=h("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=h("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=h("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),w=i.forwardRef(({className:s,type:r,...t},m)=>e.jsx("input",{type:r,className:H("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:m,...t}));w.displayName="Input";w.__docgenInfo={description:"",methods:[],displayName:"Input"};const A=({onImport:s,quota:r})=>{const[t,m]=i.useState(""),[o,c]=i.useState("idle"),[D,a]=i.useState(0),[f,n]=i.useState(""),z=async y=>{if(y.preventDefault(),!!t.trim()){c("loading"),a(25),n("Fetching recipe...");try{setTimeout(()=>{a(50),n("Parsing ingredients...")},500),setTimeout(()=>{a(75),n("Normalizing data...")},1e3),await s(t),a(100),c("success"),n("Recipe imported successfully!"),setTimeout(()=>{m(""),c("idle"),a(0),n("")},2e3)}catch(I){c("error"),n(I instanceof Error?I.message:"Failed to import recipe"),a(0)}}},W=r?r.used/r.total*100:0;return e.jsx(O,{className:"p-6 bg-gradient-warm border-primary/20",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-foreground flex items-center gap-2",children:[e.jsx(V,{className:"w-5 h-5 text-primary"}),"Import Recipe from URL"]}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Paste a recipe link to automatically import ingredients and instructions"})]}),r&&e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"text-xs text-muted-foreground",children:"Monthly imports"}),e.jsxs("p",{className:"text-sm font-semibold text-foreground",children:[r.used," / ",r.total]})]})]}),r&&e.jsx(v,{value:W,className:"h-1"}),e.jsxs("form",{onSubmit:z,className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(w,{type:"url",placeholder:"https://example.com/recipe",value:t,onChange:y=>m(y.target.value),disabled:o==="loading",className:"flex-1"}),e.jsx(G,{type:"submit",disabled:o==="loading"||!t.trim(),className:"bg-gradient-primary",children:o==="loading"?e.jsxs(e.Fragment,{children:[e.jsx(X,{className:"w-4 h-4 mr-2 animate-spin"}),"Importing..."]}):"Import"})]}),o==="loading"&&e.jsxs("div",{className:"space-y-2 animate-fade-in",children:[e.jsx(v,{value:D}),e.jsx("p",{className:"text-xs text-muted-foreground",children:f})]}),o==="success"&&e.jsxs("div",{className:"flex items-center gap-2 text-success text-sm animate-fade-in",children:[e.jsx(J,{className:"w-4 h-4"}),f]}),o==="error"&&e.jsxs("div",{className:"flex items-center gap-2 text-destructive text-sm animate-fade-in",children:[e.jsx(K,{className:"w-4 h-4"}),f]})]})]})})};A.__docgenInfo={description:"",methods:[],displayName:"ImportBanner",props:{onImport:{required:!0,tsType:{name:"signature",type:"function",raw:"(url: string) => Promise<void>",signature:{arguments:[{type:{name:"string"},name:"url"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},quota:{required:!1,tsType:{name:"signature",type:"object",raw:"{ used: number; total: number }",signature:{properties:[{key:"used",value:{name:"number",required:!0}},{key:"total",value:{name:"number",required:!0}}]}},description:""}}};const ae={title:"Components/ImportBanner",component:A,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{onImport:{action:"import"}}},l={args:{onImport:async s=>{console.log("Importing:",s),await new Promise(r=>setTimeout(r,2e3))}}},u={args:{onImport:async s=>{console.log("Importing:",s),await new Promise(r=>setTimeout(r,2e3))},quota:{used:7,total:10}}},d={args:{onImport:async s=>{console.log("Importing:",s),await new Promise(r=>setTimeout(r,2e3))},quota:{used:9,total:10}}},p={args:{onImport:async s=>{throw new Error("Monthly quota exceeded. Upgrade to Pro for more imports.")},quota:{used:10,total:10}}},g={args:{onImport:async s=>{console.log("Importing:",s),await new Promise(r=>setTimeout(r,2e3))},quota:{used:3,total:10}}},x={args:{onImport:async s=>{console.log("Importing:",s),await new Promise(r=>setTimeout(r,2e3))},quota:{used:45,total:300}}};var b,j,N;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    onImport: async (url: string) => {
      console.log("Importing:", url);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
}`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var P,k,T;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    onImport: async (url: string) => {
      console.log("Importing:", url);
      await new Promise(resolve => setTimeout(resolve, 2000));
    },
    quota: {
      used: 7,
      total: 10
    }
  }
}`,...(T=(k=u.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var q,S,C;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    onImport: async (url: string) => {
      console.log("Importing:", url);
      await new Promise(resolve => setTimeout(resolve, 2000));
    },
    quota: {
      used: 9,
      total: 10
    }
  }
}`,...(C=(S=d.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var E,L,U;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    onImport: async (url: string) => {
      throw new Error("Monthly quota exceeded. Upgrade to Pro for more imports.");
    },
    quota: {
      used: 10,
      total: 10
    }
  }
}`,...(U=(L=p.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var M,Q,_;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    onImport: async (url: string) => {
      console.log("Importing:", url);
      await new Promise(resolve => setTimeout(resolve, 2000));
    },
    quota: {
      used: 3,
      total: 10
    }
  }
}`,...(_=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};var B,F,R;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    onImport: async (url: string) => {
      console.log("Importing:", url);
      await new Promise(resolve => setTimeout(resolve, 2000));
    },
    quota: {
      used: 45,
      total: 300
    }
  }
}`,...(R=(F=x.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const ne=["Default","WithQuota","QuotaNearLimit","QuotaExceeded","FreeUser","ProUser"];export{l as Default,g as FreeUser,x as ProUser,p as QuotaExceeded,d as QuotaNearLimit,u as WithQuota,ne as __namedExportsOrder,ae as default};
