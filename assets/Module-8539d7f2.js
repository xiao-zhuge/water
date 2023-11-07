import{S as d}from"./StudyMenu-f91430e9.js";import{m as a}from"./marked.esm-fcaba525.js";import{H as m}from"./index-0153fe02.js";import{_ as u,r as l,a as _,p as i,e as p,b as f,c as S,d as s,f as v}from"./index-333d309d.js";import"./_commonjsHelpers-042e6b4d.js";const g=`
## Common JS
> 简称CMJ，社区规范，目前只有 node 支持

#### 规范

1. 每一个js文件都是一个单独的模块
2. 模块中的全局变量和函数不会互相污染
3. 需要将某些功能**导出**，供其他模块使用

\`\`\`js
module.exports = 123
\`\`\`

4. **导入**才能使用其他模块的内容（导入路径必须是 ./ 或 ../ 开头）

\`\`\`js
require('./main.js')
\`\`\`

5. **模块有缓存，第一次导入后会被缓存起来，后面再导入会之间从缓存中取**
`;const h={CommonJS:g},y={components:{StudyMenu:d},setup(){const o=l("CommonJS"),t=_([{key:"CommonJS",title:"CommonJS"}]),n=i(()=>a(h[o.value],{headerIds:!1,mangle:!1,highlight:function(e){return m.highlightAuto(e).value}}));return{menu:t,curSelected:o,mdContent:n}}},C={class:"page study-page"},M={class:"content"},J=["innerHTML"];function x(o,t,n,e,k,b){const c=p("StudyMenu");return f(),S("div",C,[s("div",M,[s("div",{class:"markdown-body",innerHTML:e.mdContent},null,8,J)]),v(c,{menu:e.menu,curSelected:e.curSelected,"onUpdate:curSelected":t[0]||(t[0]=r=>e.curSelected=r)},null,8,["menu","curSelected"])])}const N=u(y,[["render",x],["__scopeId","data-v-51f1999b"]]);export{N as default};
