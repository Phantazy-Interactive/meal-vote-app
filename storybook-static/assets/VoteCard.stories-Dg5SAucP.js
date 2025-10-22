import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{r as L}from"./index-GiUgBvb1.js";import{c as N,C as u}from"./index-323Do6uA.js";import{B as M}from"./button-CR3ZQWbs.js";import{R as B}from"./RecipeCard-Jb8h-qYV.js";import"./index-DzYlqESo.js";import"./badge-CJW5stbL.js";import"./users-BDsr0dGB.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=N("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=N("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]),T=({candidates:t,onVote:k,maxSelections:a=999,title:z="Vote for tonight's dinner",description:U="Select all options you'd be happy with"})=>{const[i,q]=L.useState(new Set),m=s=>{const o=new Set(i);o.has(s)?o.delete(s):o.size<a&&o.add(s),q(o)},A=()=>{k(Array.from(i))};return e.jsxs(u,{className:"p-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold text-foreground mb-2",children:z}),e.jsx("p",{className:"text-muted-foreground",children:U}),a<999&&e.jsxs("p",{className:"text-sm text-muted-foreground mt-1",children:["Select up to ",a," option",a!==1?"s":""]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map(s=>{var o,p;return e.jsxs("div",{className:"relative",children:[s.recipe?e.jsx(B,{recipe:s.recipe,onClick:()=>m(s.id),selected:i.has(s.id)}):e.jsxs(u,{className:`p-4 cursor-pointer transition-smooth hover:shadow-medium ${i.has(s.id)?"ring-2 ring-primary shadow-medium":""}`,onClick:()=>m(s.id),children:[((o=s.suggestion)==null?void 0:o.imageUrl)&&e.jsx("img",{src:s.suggestion.imageUrl,alt:s.suggestion.text,className:"w-full h-32 object-cover rounded-md mb-3"}),e.jsx("p",{className:"text-foreground font-medium",children:(p=s.suggestion)==null?void 0:p.text})]}),i.has(s.id)&&e.jsx("div",{className:"absolute top-2 left-2 bg-primary text-primary-foreground rounded-full p-2 shadow-medium animate-scale-in",children:e.jsx(W,{className:"w-4 h-4"})})]},s.id)})}),e.jsxs("div",{className:"flex justify-between items-center pt-4 border-t",children:[e.jsxs("p",{className:"text-sm text-muted-foreground",children:[i.size," selected"]}),e.jsxs(M,{onClick:A,disabled:i.size===0,size:"lg",className:"bg-gradient-primary hover:opacity-90",children:[e.jsx(_,{className:"w-4 h-4 mr-2"}),"Submit Vote"]})]})]})};T.__docgenInfo={description:"",methods:[],displayName:"VoteCard",props:{candidates:{required:!0,tsType:{name:"Array",elements:[{name:"Candidate"}],raw:"Candidate[]"},description:""},onVote:{required:!0,tsType:{name:"signature",type:"function",raw:"(candidateIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"candidateIds"}],return:{name:"void"}}},description:""},maxSelections:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"999",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:`"Vote for tonight's dinner"`,computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:`"Select all options you'd be happy with"`,computed:!1}}}};const $={title:"Components/VoteCard",component:T,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{onVote:{action:"voted"},maxSelections:{control:{type:"number",min:1,max:10}}}},c=[{id:"1",recipe:{id:"1",title:"Spicy Thai Basil Chicken",imageUrl:"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",timeTotal:30,servings:4,cuisines:["Thai"],difficulty:"medium"}},{id:"2",recipe:{id:"2",title:"Classic Margherita Pizza",imageUrl:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",timeTotal:45,servings:4,cuisines:["Italian"],difficulty:"easy"}},{id:"3",recipe:{id:"3",title:"Beef Tacos",imageUrl:"https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",timeTotal:25,servings:6,cuisines:["Mexican"],difficulty:"easy"}}],r={args:{candidates:c,onVote:t=>console.log("Voted for:",t),title:"What should we have for dinner?",description:"Select all options you'd be happy with"}},n={args:{candidates:c,onVote:t=>console.log("Voted for:",t),maxSelections:2,title:"Vote for your top 2 choices",description:"Pick up to 2 meals"}},d={args:{candidates:[...c.slice(0,2),{id:"4",suggestion:{text:"Let's order pizza tonight!",imageUrl:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800"}},{id:"5",suggestion:{text:"Homemade burgers on the grill"}}],onVote:t=>console.log("Voted for:",t),title:"Tonight's dinner options"}},l={args:{candidates:[c[0]],onVote:t=>console.log("Voted for:",t),maxSelections:1,title:"Approve or pass?"}};var g,h,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    candidates: sampleCandidates,
    onVote: ids => console.log("Voted for:", ids),
    title: "What should we have for dinner?",
    description: "Select all options you'd be happy with"
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,y,V;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    candidates: sampleCandidates,
    onVote: ids => console.log("Voted for:", ids),
    maxSelections: 2,
    title: "Vote for your top 2 choices",
    description: "Pick up to 2 meals"
  }
}`,...(V=(y=n.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var b,S,v;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    candidates: [...sampleCandidates.slice(0, 2), {
      id: "4",
      suggestion: {
        text: "Let's order pizza tonight!",
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800"
      }
    }, {
      id: "5",
      suggestion: {
        text: "Homemade burgers on the grill"
      }
    }],
    onVote: ids => console.log("Voted for:", ids),
    title: "Tonight's dinner options"
  }
}`,...(v=(S=d.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var w,j,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    candidates: [sampleCandidates[0]],
    onVote: ids => console.log("Voted for:", ids),
    maxSelections: 1,
    title: "Approve or pass?"
  }
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const F=["Default","Limited","WithSuggestions","SingleOption"];export{r as Default,n as Limited,l as SingleOption,d as WithSuggestions,F as __namedExportsOrder,$ as default};
