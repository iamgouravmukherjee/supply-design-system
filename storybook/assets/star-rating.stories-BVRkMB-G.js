import{j as p}from"./jsx-runtime-BZOhw9RR.js";import{r as o}from"./iframe-Dw_bmKF-.js";import{c as _}from"./index-CdJFUDDL.js";import{c as j,a as A}from"./utils-CBfrqCZ4.js";function x(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function N(...e){return t=>{let r=!1;const n=e.map(a=>{const s=x(a,t);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let a=0;a<n.length;a++){const s=n[a];typeof s=="function"?s():x(e[a],null)}}}}function T(e){const t=I(e),r=o.forwardRef((n,a)=>{const{children:s,...l}=n,i=o.Children.toArray(s),u=i.find(O);if(u){const c=u.props.children,m=i.map(f=>f===u?o.Children.count(c)>1?o.Children.only(null):o.isValidElement(c)?c.props.children:null:f);return p.jsx(t,{...l,ref:a,children:o.isValidElement(c)?o.cloneElement(c,void 0,m):null})}return p.jsx(t,{...l,ref:a,children:s})});return r.displayName=`${e}.Slot`,r}var z=T("Slot");function I(e){const t=o.forwardRef((r,n)=>{const{children:a,...s}=r;if(o.isValidElement(a)){const l=$(a),i=q(s,a.props);return a.type!==o.Fragment&&(i.ref=n?N(n,l):l),o.cloneElement(a,i)}return o.Children.count(a)>1?o.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var L=Symbol("radix.slottable");function O(e){return o.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===L}function q(e,t){const r={...t};for(const n in t){const a=e[n],s=t[n];/^on[A-Z]/.test(n)?a&&s?r[n]=(...i)=>{const u=s(...i);return a(...i),u}:a&&(r[n]=a):n==="style"?r[n]={...a,...s}:n==="className"&&(r[n]=[a,s].filter(Boolean).join(" "))}return{...e,...r}}function $(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}const P=_("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function w({className:e,variant:t,size:r,asChild:n=!1,...a}){const s=n?z:"button";return p.jsx(s,{"data-slot":"button",className:j(P({variant:t,size:r,className:e})),...a})}w.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),B=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase()),C=e=>{const t=B(e);return t.charAt(0).toUpperCase()+t.slice(1)},S=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim(),D=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var F={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=o.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:s,iconNode:l,...i},u)=>o.createElement("svg",{ref:u,...F,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:S("lucide",a),...!s&&!D(i)&&{"aria-hidden":"true"},...i},[...l.map(([c,m])=>o.createElement(c,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(e,t)=>{const r=o.forwardRef(({className:n,...a},s)=>o.createElement(H,{ref:s,iconNode:t,className:S(`lucide-${W(C(e))}`,`lucide-${e}`,n),...a}));return r.displayName=C(e),r};/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],U=M("star",Z);function V({max:e=5,value:t,defaultValue:r=0,onChange:n,className:a,readOnly:s=!1,size:l=24}){const[i,u]=o.useState(null),[c,m]=o.useState(r),f=t!==void 0?t:c,k=b=>{s||(n&&n(b),t===void 0&&m(b))},E=Array.from({length:e},(b,d)=>{const R=i!==null?d<i:d<f;return p.jsx(w,{variant:"ghost",size:"icon",onClick:()=>k(d+1),onMouseEnter:()=>!s&&u(d+1),onMouseLeave:()=>!s&&u(null),disabled:s,className:"p-0.5","aria-label":`Rate ${d+1} star${d+1>1?"s":""}`,children:p.jsx(U,{fill:R?"#facc15":"none",stroke:"#facc15",width:l,height:l})},d)});return p.jsx("div",{className:A("inline-flex items-center",a),children:E})}V.__docgenInfo={description:"",methods:[],displayName:"StarRating",props:{max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}}}};const X={title:"Feedback/StarRating",component:V,tags:["autodocs"],argTypes:{max:{control:{type:"number",min:1,max:10}},value:{control:{type:"number",min:0,max:10}},defaultValue:{control:{type:"number",min:0,max:10}},size:{control:{type:"number",min:10,max:48}},readOnly:{control:"boolean"}}},g={args:{max:5,defaultValue:3}},v={args:{max:5,value:4}},h={args:{max:5,value:2,readOnly:!0}},y={args:{max:5,defaultValue:4,size:36}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    max: 5,
    defaultValue: 3
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    max: 5,
    value: 4
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    max: 5,
    value: 2,
    readOnly: true
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    max: 5,
    defaultValue: 4,
    size: 36
  }
}`,...y.parameters?.docs?.source}}};const Y=["Default","Controlled","ReadOnly","CustomSize"];export{v as Controlled,y as CustomSize,g as Default,h as ReadOnly,Y as __namedExportsOrder,X as default};
