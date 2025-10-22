import{j as s}from"./jsx-runtime-dsZ8nYAA.js";import{r as h}from"./index-GiUgBvb1.js";import{c as S,C as x}from"./index-323Do6uA.js";import{B as y}from"./button-CR3ZQWbs.js";import{B as E}from"./badge-CJW5stbL.js";import{R as k}from"./RecipeCard-Jb8h-qYV.js";import"./index-DzYlqESo.js";import"./users-BDsr0dGB.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=S("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=S("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]),O=({candidates:i,onVote:U,title:A="Rank your preferences",description:B="Drag to reorder from most to least preferred"})=>{const[a,p]=h.useState([]),[o,g]=h.useState(null),f=i.filter(e=>!a.includes(e.id)),I=e=>{g(e)},z=(e,r)=>{if(e.preventDefault(),!o||o===r)return;const t=[...a],n=t.indexOf(o),c=t.indexOf(r);n!==-1&&c!==-1&&(t.splice(n,1),t.splice(c,0,o),p(t))},F=e=>{e.preventDefault(),g(null)},M=e=>{p([...a,e])},q=e=>{p(a.filter(r=>r!==e))},W=()=>{U(a)},_=e=>i.find(r=>r.id===e);return s.jsxs(x,{className:"p-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-bold text-foreground mb-2",children:A}),s.jsx("p",{className:"text-muted-foreground",children:B})]}),a.length>0&&s.jsxs("div",{className:"space-y-3",children:[s.jsxs("h3",{className:"font-semibold text-foreground flex items-center gap-2",children:[s.jsx(v,{className:"w-5 h-5 text-primary"}),"Your Rankings"]}),a.map((e,r)=>{var n;const t=_(e);return t?s.jsxs("div",{draggable:!0,onDragStart:()=>I(e),onDragOver:c=>z(c,e),onDrop:F,className:"flex items-center gap-3 bg-card border rounded-lg p-3 cursor-move hover:shadow-medium transition-smooth",children:[s.jsx(E,{variant:"default",className:"w-8 h-8 flex items-center justify-center rounded-full",children:r+1}),s.jsx(G,{className:"w-5 h-5 text-muted-foreground"}),s.jsx("div",{className:"flex-1",children:t.recipe?s.jsx(k,{recipe:t.recipe,compact:!0}):s.jsx("p",{className:"font-medium",children:(n=t.suggestion)==null?void 0:n.text})}),s.jsx(y,{variant:"ghost",size:"sm",onClick:()=>q(e),children:"Remove"})]},e):null})]}),f.length>0&&s.jsxs("div",{className:"space-y-3",children:[s.jsx("h3",{className:"font-semibold text-foreground",children:"Available Options"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:f.map(e=>{var r,t;return s.jsx("div",{onClick:()=>M(e.id),children:e.recipe?s.jsx(k,{recipe:e.recipe}):s.jsxs(x,{className:"p-4 cursor-pointer hover:shadow-medium transition-smooth",children:[((r=e.suggestion)==null?void 0:r.imageUrl)&&s.jsx("img",{src:e.suggestion.imageUrl,alt:e.suggestion.text,className:"w-full h-32 object-cover rounded-md mb-3"}),s.jsx("p",{className:"text-foreground font-medium",children:(t=e.suggestion)==null?void 0:t.text})]})},e.id)})})]}),s.jsxs("div",{className:"flex justify-between items-center pt-4 border-t",children:[s.jsxs("p",{className:"text-sm text-muted-foreground",children:[a.length," ranked"]}),s.jsxs(y,{onClick:W,disabled:a.length===0,size:"lg",className:"bg-gradient-primary hover:opacity-90",children:[s.jsx(v,{className:"w-4 h-4 mr-2"}),"Submit Rankings"]})]})]})};O.__docgenInfo={description:"",methods:[],displayName:"RankedVoteCard",props:{candidates:{required:!0,tsType:{name:"Array",elements:[{name:"Candidate"}],raw:"Candidate[]"},description:""},onVote:{required:!0,tsType:{name:"signature",type:"function",raw:"(rankedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"rankedIds"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Rank your preferences"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Drag to reorder from most to least preferred"',computed:!1}}}};const Z={title:"Components/RankedVoteCard",component:O,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{onVote:{action:"ranked"}}},u=[{id:"1",recipe:{id:"1",title:"Spicy Thai Basil Chicken",imageUrl:"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",timeTotal:30,servings:4,cuisines:["Thai"],difficulty:"medium"}},{id:"2",recipe:{id:"2",title:"Classic Margherita Pizza",imageUrl:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",timeTotal:45,servings:4,cuisines:["Italian"],difficulty:"easy"}},{id:"3",recipe:{id:"3",title:"Beef Tacos",imageUrl:"https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",timeTotal:25,servings:6,cuisines:["Mexican"],difficulty:"easy"}},{id:"4",recipe:{id:"4",title:"Grilled Salmon with Vegetables",imageUrl:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",timeTotal:35,servings:4,cuisines:["Mediterranean"],difficulty:"medium"}}],l={args:{candidates:u,onVote:i=>console.log("Ranked:",i),title:"Rank your meal preferences",description:"Drag to reorder from most to least preferred"}},d={args:{candidates:u.slice(0,2),onVote:i=>console.log("Ranked:",i),title:"Which would you prefer?",description:"Rank these two options"}},m={args:{candidates:[...u,{id:"5",recipe:{id:"5",title:"Chicken Parmesan",imageUrl:"https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800",timeTotal:50,servings:4,cuisines:["Italian"],difficulty:"medium"}},{id:"6",recipe:{id:"6",title:"Stir-Fry Vegetables",imageUrl:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",timeTotal:20,servings:4,cuisines:["Asian"],difficulty:"easy"}}],onVote:i=>console.log("Ranked:",i),title:"Weekly meal preferences"}};var j,w,b;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    candidates: sampleCandidates,
    onVote: ids => console.log("Ranked:", ids),
    title: "Rank your meal preferences",
    description: "Drag to reorder from most to least preferred"
  }
}`,...(b=(w=l.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var R,N,C;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    candidates: sampleCandidates.slice(0, 2),
    onVote: ids => console.log("Ranked:", ids),
    title: "Which would you prefer?",
    description: "Rank these two options"
  }
}`,...(C=(N=d.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var V,T,D;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    candidates: [...sampleCandidates, {
      id: "5",
      recipe: {
        id: "5",
        title: "Chicken Parmesan",
        imageUrl: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800",
        timeTotal: 50,
        servings: 4,
        cuisines: ["Italian"],
        difficulty: "medium" as const
      }
    }, {
      id: "6",
      recipe: {
        id: "6",
        title: "Stir-Fry Vegetables",
        imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
        timeTotal: 20,
        servings: 4,
        cuisines: ["Asian"],
        difficulty: "easy" as const
      }
    }],
    onVote: ids => console.log("Ranked:", ids),
    title: "Weekly meal preferences"
  }
}`,...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const $=["Default","FewOptions","ManyOptions"];export{l as Default,d as FewOptions,m as ManyOptions,$ as __namedExportsOrder,Z as default};
