import{R as v}from"./RecipeCard-Jb8h-qYV.js";import"./jsx-runtime-dsZ8nYAA.js";import"./index-GiUgBvb1.js";import"./index-323Do6uA.js";import"./badge-CJW5stbL.js";import"./users-BDsr0dGB.js";const N={title:"Components/RecipeCard",component:v,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{onClick:{action:"clicked"},selected:{control:"boolean"},compact:{control:"boolean"}}},e={id:"1",title:"Spicy Thai Basil Chicken",imageUrl:"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",timeTotal:30,servings:4,tags:["quick","spicy"],cuisines:["Thai","Asian"],difficulty:"medium"},a={args:{recipe:e}},r={args:{recipe:e,selected:!0}},s={args:{recipe:e,compact:!0}},t={args:{recipe:{...e,difficulty:"easy",title:"Simple Pasta Salad",timeTotal:15}}},i={args:{recipe:{...e,difficulty:"hard",title:"Beef Wellington",timeTotal:120,servings:6}}},c={args:{recipe:{id:"2",title:"Homemade Bread",imageUrl:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",timeTotal:180,cuisines:["Bakery"]}}};var o,n,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    recipe: sampleRecipe
  }
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    recipe: sampleRecipe,
    selected: true
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    recipe: sampleRecipe,
    compact: true
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,S,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    recipe: {
      ...sampleRecipe,
      difficulty: "easy",
      title: "Simple Pasta Salad",
      timeTotal: 15
    }
  }
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var T,R,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    recipe: {
      ...sampleRecipe,
      difficulty: "hard",
      title: "Beef Wellington",
      timeTotal: 120,
      servings: 6
    }
  }
}`,...(B=(R=i.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var C,k,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    recipe: {
      id: "2",
      title: "Homemade Bread",
      imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
      timeTotal: 180,
      cuisines: ["Bakery"]
    }
  }
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const P=["Default","Selected","Compact","EasyDifficulty","HardDifficulty","NoServings"];export{s as Compact,a as Default,t as EasyDifficulty,i as HardDifficulty,c as NoServings,r as Selected,P as __namedExportsOrder,N as default};
