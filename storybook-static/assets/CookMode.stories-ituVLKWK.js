import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{r as o}from"./index-GiUgBvb1.js";import{c as g,C as G}from"./index-323Do6uA.js";import{B as r}from"./button-CR3ZQWbs.js";import{P as H}from"./progress-LoXDn6u9.js";import{B as b}from"./badge-CJW5stbL.js";import{C as Q}from"./circle-check-BvvrER6z.js";import"./index-DzYlqESo.js";import"./index-B7pcWWqY.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=g("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=g("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=g("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),q=({recipeName:L,steps:n,totalTime:M,onComplete:u,onExit:z})=>{const[t,m]=o.useState(0),[f,E]=o.useState(new Set),[I,p]=o.useState(!1),[U,h]=o.useState(null),x=(t+1)/n.length*100,y=t===n.length-1,i=n[t],F=()=>{E(new Set(f).add(t)),t<n.length-1?(m(t+1),p(!1),h(null)):u==null||u()},_=()=>{t>0&&(m(t-1),p(!1),h(null))},D=()=>{i.duration&&(h(i.duration*60),p(!0))};return e.jsx("div",{className:"min-h-screen bg-background p-4 md:p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-foreground",children:L}),e.jsxs("p",{className:"text-muted-foreground",children:["Total time: ",M," minutes"]})]}),e.jsx(r,{variant:"ghost",onClick:z,children:"Exit Cook Mode"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{className:"text-muted-foreground",children:["Step ",t+1," of ",n.length]}),e.jsxs("span",{className:"font-medium text-foreground",children:[Math.round(x),"%"]})]}),e.jsx(H,{value:x,className:"h-2"})]}),e.jsxs(G,{className:"p-8 md:p-12 min-h-[400px] flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs(b,{variant:"outline",className:"text-lg px-4 py-2",children:["Step ",t+1]}),e.jsx("p",{className:"text-2xl md:text-4xl leading-relaxed text-foreground font-medium",children:i.instruction}),i.duration&&e.jsxs("div",{className:"flex items-center gap-4 pt-4",children:[e.jsx(J,{className:"w-6 h-6 text-primary"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Recommended time"}),e.jsxs("p",{className:"text-xl font-semibold text-foreground",children:[i.duration," minutes"]})]}),I?e.jsx(b,{className:"bg-primary animate-pulse-soft",children:"Timer Active"}):e.jsx(r,{variant:"outline",onClick:D,children:"Start Timer"})]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-8 border-t mt-8",children:[e.jsxs(r,{variant:"outline",size:"lg",onClick:_,disabled:t===0,children:[e.jsx(O,{className:"w-5 h-5 mr-2"}),"Previous"]}),e.jsx(r,{size:"lg",onClick:F,className:y?"bg-success":"bg-gradient-primary",children:y?e.jsxs(e.Fragment,{children:[e.jsx(Q,{className:"w-5 h-5 mr-2"}),"Complete"]}):e.jsxs(e.Fragment,{children:["Next",e.jsx($,{className:"w-5 h-5 ml-2"})]})})]})]}),e.jsx("div",{className:"grid grid-cols-4 md:grid-cols-8 gap-2",children:n.map((V,a)=>e.jsx("button",{onClick:()=>m(a),className:`h-2 rounded-full transition-smooth ${a===t?"bg-primary":f.has(a)?"bg-success":"bg-muted"}`},a))})]})})};q.__docgenInfo={description:"",methods:[],displayName:"CookMode",props:{recipeName:{required:!0,tsType:{name:"string"},description:""},steps:{required:!0,tsType:{name:"Array",elements:[{name:"CookStep"}],raw:"CookStep[]"},description:""},totalTime:{required:!0,tsType:{name:"number"},description:""},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onExit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const oe={title:"Components/CookMode",component:q,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{onComplete:{action:"completed"},onExit:{action:"exited"}}},K=[{id:"1",instruction:"Heat 2 tablespoons of oil in a large wok or skillet over high heat until shimmering.",duration:2},{id:"2",instruction:"Add minced garlic and sliced chilies. Stir-fry for 30 seconds until fragrant.",duration:1},{id:"3",instruction:"Add chicken pieces and stir-fry for 5-7 minutes until cooked through and golden brown.",duration:7},{id:"4",instruction:"Add sliced bell peppers and onions. Stir-fry for 2-3 minutes until vegetables are tender-crisp.",duration:3},{id:"5",instruction:"Add soy sauce, oyster sauce, and a splash of fish sauce. Stir to coat everything evenly."},{id:"6",instruction:"Turn off heat and fold in fresh Thai basil leaves. Stir until wilted."},{id:"7",instruction:"Serve immediately over steamed jasmine rice. Garnish with extra basil leaves and sliced chilies if desired."}],s={args:{recipeName:"Spicy Thai Basil Chicken",steps:K,totalTime:30}},d={args:{recipeName:"5-Minute Avocado Toast",steps:[{id:"1",instruction:"Toast 2 slices of bread until golden brown.",duration:3},{id:"2",instruction:"Mash one ripe avocado with a fork. Add salt, pepper, and a squeeze of lemon juice."},{id:"3",instruction:"Spread the avocado mixture generously on the toasted bread. Top with cherry tomatoes, red pepper flakes, and a drizzle of olive oil."}],totalTime:5}},c={args:{recipeName:"Homemade Pasta Carbonara",steps:[{id:"1",instruction:"Bring a large pot of salted water to a boil.",duration:10},{id:"2",instruction:"Cut guanciale or pancetta into small strips and cook in a large pan over medium heat until crispy, about 5 minutes.",duration:5},{id:"3",instruction:"In a bowl, whisk together 4 egg yolks, 1 whole egg, and 1 cup of grated Pecorino Romano cheese."},{id:"4",instruction:"Cook 1 pound of spaghetti according to package directions until al dente. Reserve 1 cup of pasta water before draining.",duration:10},{id:"5",instruction:"Remove the pan with guanciale from heat. Add the drained pasta and toss to coat with the rendered fat."},{id:"6",instruction:"Pour the egg mixture over the pasta, tossing quickly and constantly. Add pasta water a little at a time to create a creamy sauce."},{id:"7",instruction:"Season with freshly ground black pepper. Serve immediately with extra Pecorino Romano on top."}],totalTime:45}},l={args:{recipeName:"Chocolate Chip Cookies",steps:[{id:"1",instruction:"Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",duration:10},{id:"2",instruction:"In a large bowl, cream together softened butter and sugars until fluffy, about 3-4 minutes.",duration:4},{id:"3",instruction:"Beat in eggs one at a time, then add vanilla extract."},{id:"4",instruction:"In a separate bowl, whisk together flour, baking soda, and salt."},{id:"5",instruction:"Gradually mix the dry ingredients into the wet ingredients until just combined. Fold in chocolate chips."},{id:"6",instruction:"Drop rounded tablespoons of dough onto prepared baking sheets, spacing them 2 inches apart."},{id:"7",instruction:"Bake for 9-11 minutes until edges are golden but centers are still soft. Let cool on the baking sheet for 5 minutes.",duration:11},{id:"8",instruction:"Transfer cookies to a wire rack to cool completely. Enjoy warm or store in an airtight container.",duration:5}],totalTime:25}};var k,v,w;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    recipeName: "Spicy Thai Basil Chicken",
    steps: sampleSteps,
    totalTime: 30
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,C,N;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    recipeName: "5-Minute Avocado Toast",
    steps: [{
      id: "1",
      instruction: "Toast 2 slices of bread until golden brown.",
      duration: 3
    }, {
      id: "2",
      instruction: "Mash one ripe avocado with a fork. Add salt, pepper, and a squeeze of lemon juice."
    }, {
      id: "3",
      instruction: "Spread the avocado mixture generously on the toasted bread. Top with cherry tomatoes, red pepper flakes, and a drizzle of olive oil."
    }],
    totalTime: 5
  }
}`,...(N=(C=d.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var S,T,R;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    recipeName: "Homemade Pasta Carbonara",
    steps: [{
      id: "1",
      instruction: "Bring a large pot of salted water to a boil.",
      duration: 10
    }, {
      id: "2",
      instruction: "Cut guanciale or pancetta into small strips and cook in a large pan over medium heat until crispy, about 5 minutes.",
      duration: 5
    }, {
      id: "3",
      instruction: "In a bowl, whisk together 4 egg yolks, 1 whole egg, and 1 cup of grated Pecorino Romano cheese."
    }, {
      id: "4",
      instruction: "Cook 1 pound of spaghetti according to package directions until al dente. Reserve 1 cup of pasta water before draining.",
      duration: 10
    }, {
      id: "5",
      instruction: "Remove the pan with guanciale from heat. Add the drained pasta and toss to coat with the rendered fat."
    }, {
      id: "6",
      instruction: "Pour the egg mixture over the pasta, tossing quickly and constantly. Add pasta water a little at a time to create a creamy sauce."
    }, {
      id: "7",
      instruction: "Season with freshly ground black pepper. Serve immediately with extra Pecorino Romano on top."
    }],
    totalTime: 45
  }
}`,...(R=(T=c.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var A,B,P;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    recipeName: "Chocolate Chip Cookies",
    steps: [{
      id: "1",
      instruction: "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",
      duration: 10
    }, {
      id: "2",
      instruction: "In a large bowl, cream together softened butter and sugars until fluffy, about 3-4 minutes.",
      duration: 4
    }, {
      id: "3",
      instruction: "Beat in eggs one at a time, then add vanilla extract."
    }, {
      id: "4",
      instruction: "In a separate bowl, whisk together flour, baking soda, and salt."
    }, {
      id: "5",
      instruction: "Gradually mix the dry ingredients into the wet ingredients until just combined. Fold in chocolate chips."
    }, {
      id: "6",
      instruction: "Drop rounded tablespoons of dough onto prepared baking sheets, spacing them 2 inches apart."
    }, {
      id: "7",
      instruction: "Bake for 9-11 minutes until edges are golden but centers are still soft. Let cool on the baking sheet for 5 minutes.",
      duration: 11
    }, {
      id: "8",
      instruction: "Transfer cookies to a wire rack to cool completely. Enjoy warm or store in an airtight container.",
      duration: 5
    }],
    totalTime: 25
  }
}`,...(P=(B=l.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const re=["Default","QuickRecipe","ComplexRecipe","BakingRecipe"];export{l as BakingRecipe,c as ComplexRecipe,s as Default,d as QuickRecipe,re as __namedExportsOrder,oe as default};
