import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{c as M,C as q}from"./index-323Do6uA.js";import{P as A}from"./progress-LoXDn6u9.js";import{B as _}from"./badge-CJW5stbL.js";import"./index-GiUgBvb1.js";import"./index-B7pcWWqY.js";import"./index-DzYlqESo.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=M("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),z=({results:P,totalVoters:l,mode:p="approval",live:m})=>{var u;const d=[...P].sort((a,c)=>c.votes-a.votes),L=((u=d[0])==null?void 0:u.votes)||0;return e.jsxs(q,{className:"p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:m?"Live Results":"Final Results"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[l," voter",l!==1?"s":""," • ",p==="ranked"?"Borda count":"Approval voting"]})]}),m&&e.jsxs(_,{variant:"default",className:"bg-success animate-pulse-soft",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-white mr-2"}),"Live"]})]}),e.jsx("div",{className:"space-y-4",children:d.map((a,c)=>e.jsxs("div",{className:"space-y-2 animate-fade-in",style:{animationDelay:`${c*50}ms`},children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[a.isWinner&&e.jsx(E,{className:"w-5 h-5 text-primary"}),e.jsx("span",{className:"font-medium text-foreground",children:a.candidateName})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-sm text-muted-foreground",children:[a.votes," ",p==="ranked"?"points":"votes"]}),e.jsxs("span",{className:"text-sm font-semibold text-foreground min-w-[3rem] text-right",children:[a.percentage,"%"]})]})]}),e.jsx(A,{value:a.votes/L*100,className:`h-3 ${a.isWinner?"[&>div]:bg-gradient-primary":"[&>div]:bg-secondary"}`})]},a.candidateId))}),d.length===0&&e.jsx("div",{className:"text-center py-8 text-muted-foreground",children:"No votes yet. Be the first to vote!"})]})};z.__docgenInfo={description:"",methods:[],displayName:"TallyBar",props:{results:{required:!0,tsType:{name:"Array",elements:[{name:"TallyResult"}],raw:"TallyResult[]"},description:""},totalVoters:{required:!0,tsType:{name:"number"},description:""},mode:{required:!1,tsType:{name:"union",raw:'"approval" | "ranked"',elements:[{name:"literal",value:'"approval"'},{name:"literal",value:'"ranked"'}]},description:"",defaultValue:{value:'"approval"',computed:!1}},live:{required:!1,tsType:{name:"boolean"},description:""}}};const J={title:"Components/TallyBar",component:z,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{live:{control:"boolean"},mode:{control:"select",options:["approval","ranked"]}}},W=[{candidateId:"1",candidateName:"Spicy Thai Basil Chicken",votes:8,percentage:50,isWinner:!0},{candidateId:"2",candidateName:"Classic Margherita Pizza",votes:5,percentage:31},{candidateId:"3",candidateName:"Beef Tacos",votes:3,percentage:19}],s={args:{results:W,totalVoters:8,mode:"approval",live:!1}},t={args:{results:[{candidateId:"1",candidateName:"Spicy Thai Basil Chicken",votes:24,percentage:45,isWinner:!0},{candidateId:"2",candidateName:"Classic Margherita Pizza",votes:18,percentage:34},{candidateId:"3",candidateName:"Beef Tacos",votes:11,percentage:21}],totalVoters:6,mode:"ranked",live:!1}},n={args:{results:W,totalVoters:8,mode:"approval",live:!0}},r={args:{results:[{candidateId:"1",candidateName:"Spicy Thai Basil Chicken",votes:7,percentage:35,isWinner:!0},{candidateId:"2",candidateName:"Classic Margherita Pizza",votes:7,percentage:35},{candidateId:"3",candidateName:"Beef Tacos",votes:6,percentage:30}],totalVoters:10,mode:"approval"}},o={args:{results:[],totalVoters:0,mode:"approval"}},i={args:{results:[{candidateId:"1",candidateName:"Spicy Thai Basil Chicken",votes:1,percentage:100,isWinner:!0}],totalVoters:1,mode:"approval"}};var v,g,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    results: sampleResults,
    totalVoters: 8,
    mode: "approval",
    live: false
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,f,N;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    results: [{
      candidateId: "1",
      candidateName: "Spicy Thai Basil Chicken",
      votes: 24,
      percentage: 45,
      isWinner: true
    }, {
      candidateId: "2",
      candidateName: "Classic Margherita Pizza",
      votes: 18,
      percentage: 34
    }, {
      candidateId: "3",
      candidateName: "Beef Tacos",
      votes: 11,
      percentage: 21
    }],
    totalVoters: 6,
    mode: "ranked",
    live: false
  }
}`,...(N=(f=t.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var y,T,j;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    results: sampleResults,
    totalVoters: 8,
    mode: "approval",
    live: true
  }
}`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var V,I,k;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    results: [{
      candidateId: "1",
      candidateName: "Spicy Thai Basil Chicken",
      votes: 7,
      percentage: 35,
      isWinner: true
    }, {
      candidateId: "2",
      candidateName: "Classic Margherita Pizza",
      votes: 7,
      percentage: 35
    }, {
      candidateId: "3",
      candidateName: "Beef Tacos",
      votes: 6,
      percentage: 30
    }],
    totalVoters: 10,
    mode: "approval"
  }
}`,...(k=(I=r.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var B,C,S;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    results: [],
    totalVoters: 0,
    mode: "approval"
  }
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var R,b,w;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    results: [{
      candidateId: "1",
      candidateName: "Spicy Thai Basil Chicken",
      votes: 1,
      percentage: 100,
      isWinner: true
    }],
    totalVoters: 1,
    mode: "approval"
  }
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const K=["ApprovalVoting","RankedVoting","LiveResults","CloseTie","NoVotes","SingleVoter"];export{s as ApprovalVoting,r as CloseTie,n as LiveResults,o as NoVotes,t as RankedVoting,i as SingleVoter,K as __namedExportsOrder,J as default};
