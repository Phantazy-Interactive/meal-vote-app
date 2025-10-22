import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{c as U,C as Z}from"./index-323Do6uA.js";import{B as n}from"./button-CR3ZQWbs.js";import{B as A}from"./badge-CJW5stbL.js";import{C as F,U as G}from"./users-BDsr0dGB.js";import{C as h}from"./circle-check-BvvrER6z.js";import"./index-GiUgBvb1.js";import"./index-DzYlqESo.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=U("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=U("Vote",[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]]),D=({date:_,slotType:I,status:t,finalRecipe:s,voteCount:m,onOpenVoting:g,onViewRecipe:O,onMarkCooked:P})=>{const p={planning:{color:"bg-muted text-muted-foreground",icon:J,label:"Planning"},voting:{color:"bg-info/10 text-info",icon:x,label:"Voting Open"},locked:{color:"bg-primary/10 text-primary",icon:h,label:"Decided"},cooked:{color:"bg-success/10 text-success",icon:h,label:"Cooked"}}[t],E=p.icon,H=_.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return e.jsxs(Z,{className:"p-4 hover:shadow-medium transition-smooth",children:[e.jsxs("div",{className:"flex items-start justify-between mb-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:H}),e.jsx("h3",{className:"font-semibold text-foreground capitalize",children:I})]}),e.jsxs(A,{className:p.color,children:[e.jsx(E,{className:"w-3 h-3 mr-1"}),p.label]})]}),s?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[s.imageUrl&&e.jsx("img",{src:s.imageUrl,alt:s.title,className:"w-20 h-20 object-cover rounded-md"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h4",{className:"font-medium text-foreground line-clamp-2",children:s.title}),e.jsxs("div",{className:"flex items-center gap-3 mt-1 text-xs text-muted-foreground",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(F,{className:"w-3 h-3"}),s.timeTotal,"m"]}),s.servings&&e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(G,{className:"w-3 h-3"}),s.servings]})]})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{variant:"outline",size:"sm",className:"flex-1",onClick:O,children:"View Recipe"}),t==="locked"&&e.jsx(n,{variant:"default",size:"sm",className:"flex-1",onClick:P,children:"Mark Cooked"})]})]}):e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"h-20 bg-muted rounded-md flex items-center justify-center",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"No meal planned"})}),t==="planning"&&e.jsxs(n,{variant:"outline",size:"sm",className:"w-full",onClick:g,children:[e.jsx(x,{className:"w-4 h-4 mr-2"}),"Start Voting"]}),t==="voting"&&m!==void 0&&e.jsxs("div",{className:"text-center",children:[e.jsxs("p",{className:"text-sm text-muted-foreground",children:[m," vote",m!==1?"s":""," cast"]}),e.jsx(n,{variant:"link",size:"sm",onClick:g,children:"View & Vote"})]})]})]})};D.__docgenInfo={description:"",methods:[],displayName:"MealSlot",props:{date:{required:!0,tsType:{name:"Date"},description:""},slotType:{required:!0,tsType:{name:"union",raw:'"breakfast" | "lunch" | "dinner"',elements:[{name:"literal",value:'"breakfast"'},{name:"literal",value:'"lunch"'},{name:"literal",value:'"dinner"'}]},description:""},status:{required:!0,tsType:{name:"union",raw:'"planning" | "voting" | "locked" | "cooked"',elements:[{name:"literal",value:'"planning"'},{name:"literal",value:'"voting"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"cooked"'}]},description:""},finalRecipe:{required:!1,tsType:{name:"Recipe"},description:""},voteCount:{required:!1,tsType:{name:"number"},description:""},onOpenVoting:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onViewRecipe:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMarkCooked:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const te={title:"Components/MealSlot",component:D,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{onOpenVoting:{action:"open-voting"},onViewRecipe:{action:"view-recipe"},onMarkCooked:{action:"mark-cooked"},status:{control:"select",options:["planning","voting","locked","cooked"]},slotType:{control:"select",options:["breakfast","lunch","dinner"]}}},a=new Date,u={id:"1",title:"Spicy Thai Basil Chicken",imageUrl:"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",timeTotal:30,servings:4,cuisines:["Thai"],difficulty:"medium"},o={args:{date:a,slotType:"dinner",status:"planning"}},r={args:{date:a,slotType:"dinner",status:"voting",voteCount:3}},i={args:{date:a,slotType:"dinner",status:"locked",finalRecipe:u}},c={args:{date:a,slotType:"dinner",status:"cooked",finalRecipe:u}},l={args:{date:a,slotType:"breakfast",status:"planning"}},d={args:{date:a,slotType:"lunch",status:"locked",finalRecipe:{...u,title:"Caesar Salad",timeTotal:15}}};var y,f,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    date: today,
    slotType: "dinner",
    status: "planning"
  }
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var v,j,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    date: today,
    slotType: "dinner",
    status: "voting",
    voteCount: 3
  }
}`,...(T=(j=r.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var N,C,w;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    date: today,
    slotType: "dinner",
    status: "locked",
    finalRecipe: sampleRecipe
  }
}`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var b,S,V;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    date: today,
    slotType: "dinner",
    status: "cooked",
    finalRecipe: sampleRecipe
  }
}`,...(V=(S=c.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var M,R,q;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    date: today,
    slotType: "breakfast",
    status: "planning"
  }
}`,...(q=(R=l.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var z,B,L;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    date: today,
    slotType: "lunch",
    status: "locked",
    finalRecipe: {
      ...sampleRecipe,
      title: "Caesar Salad",
      timeTotal: 15
    }
  }
}`,...(L=(B=d.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const ne=["Planning","Voting","Locked","Cooked","BreakfastSlot","LunchSlot"];export{l as BreakfastSlot,c as Cooked,i as Locked,d as LunchSlot,o as Planning,r as Voting,ne as __namedExportsOrder,te as default};
