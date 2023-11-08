import{S as a}from"./StudyMenu-ba0b0c59.js";import{m as r}from"./marked.esm-fcaba525.js";import{_ as m,r as u,a as _,p as l,e as i,b as p,c as f,d as s,f as S}from"./index-6d12b1ee.js";const v=`
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
`;const y={CommonJS:v},C={components:{StudyMenu:a},setup(){const n=u("CommonJS"),e=_([{key:"CommonJS",title:"CommonJS"}]),t=l(()=>r(y[n.value],{headerIds:!1,mangle:!1}));return{menu:e,curSelected:n,mdContent:t}}},M={class:"page study-page"},x={class:"content"},J=["innerHTML"];function g(n,e,t,o,k,j){const c=i("StudyMenu");return p(),f("div",M,[s("div",x,[s("div",{class:"markdown-body",innerHTML:o.mdContent},null,8,J)]),S(c,{menu:o.menu,curSelected:o.curSelected,"onUpdate:curSelected":e[0]||(e[0]=d=>o.curSelected=d)},null,8,["menu","curSelected"])])}const b=m(C,[["render",g],["__scopeId","data-v-f4c2ac4e"]]);export{b as default};
