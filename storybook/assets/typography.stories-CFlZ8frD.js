import{j as g}from"./jsx-runtime-BZOhw9RR.js";import{c as h}from"./utils-CBfrqCZ4.js";import"./iframe-Dw_bmKF-.js";const f={default:{tag:"p",className:"text-base text-foreground"},muted:{tag:"p",className:"text-sm text-muted-foreground"},lead:{tag:"p",className:"text-xl text-muted-foreground"},small:{tag:"small",className:"text-sm font-medium leading-none"},blockquote:{tag:"blockquote",className:"mt-6 border-l-2 pl-6 italic"},code:{tag:"code",className:"bg-muted px-1.5 py-1 font-mono text-sm rounded"}},l=({variant:n="default",className:c,children:d,...i})=>{const{tag:m,className:u}=f[n],p=m;return g.jsx(p,{className:h(u,c),...i,children:d})};l.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:"keyof typeof variantMap",elements:[{name:"literal",value:"default"},{name:"literal",value:"muted"},{name:"literal",value:"lead"},{name:"literal",value:"small"},{name:"literal",value:"blockquote"},{name:"literal",value:"code"}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["HTMLAttributes"]};const T={title:"Components/Typography",component:l,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","muted","lead","small","blockquote","code"]},children:{control:"text"}}},e={args:{variant:"default",children:"This is default typography"}},a={args:{variant:"muted",children:"This is muted text"}},t={args:{variant:"lead",children:"This is lead text"}},r={args:{variant:"small",children:"This is small text"}},s={args:{variant:"blockquote",children:"This is a blockquote"}},o={args:{variant:"code",children:"console.log('Hello World')"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    children: "This is default typography"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "muted",
    children: "This is muted text"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "lead",
    children: "This is lead text"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "small",
    children: "This is small text"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "blockquote",
    children: "This is a blockquote"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "code",
    children: "console.log('Hello World')"
  }
}`,...o.parameters?.docs?.source}}};const q=["Default","Muted","Lead","Small","Blockquote","Code"];export{s as Blockquote,o as Code,e as Default,t as Lead,a as Muted,r as Small,q as __namedExportsOrder,T as default};
