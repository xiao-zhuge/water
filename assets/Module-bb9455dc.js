import{S as u}from"./StudyMenu-bdec709c.js";import{_ as c,r as m,a as l,p as a,e as _,b as i,c as p,d as r,f}from"./index-b6124a31.js";import{u as x}from"./useMarked-9234b812.js";import"./commonjsHelpers-042e6b4d.js";const S=`
## Common JS
> 简称CMJ，社区规范，目前只有 node 支持

### 规范

1. 每一个js文件都是一个单独的模块
2. 模块中的全局变量和函数不会互相污染
3. 需要将某些功能**导出**，供其他模块使用

\`\`\`js
module.exports = 123
exports.a = 123
\`\`\`

4. **导入**才能使用其他模块的内容（导入路径必须是 ./ 或 ../ 开头）

\`\`\`js
require('./main.js')
\`\`\`

5. **模块有缓存，第一次导入后会被缓存起来，后面再导入会之间从缓存中取**

6. 如果没有写后缀名，那么会按照 js json node mjs 依此补全尝试查找

7. 如果没有写文件名，那么先按照6来处理，如果都没有找到，会找该文件夹下的index.js文件

### require函数伪代码

\`\`\`js
function require(modulePath) {
    // 获取绝对路径
    const moduleId = getModuleId(modulePath);
    // 根据绝对路径，获取是否有缓存
    if(require.cache(moduleId)) return cache[moduleId]
    // 真正运行模块代码的辅助 函数
    function _require(exports, require, module, __filename, __dirname) {
        // 目标模块代码
    }
    // 准备并执行辅助函数
    let module = {
        exports: {

        }
    }
    let exports = module.exports;
    // 模块文件的绝对路径
    const __filename = moduleId;
    // 模块文件所在目录的绝对路径
    const __dirname = getDirname(__filename)
    // 执行
    _require.call(exports, exports, require, module, __filename, __dirname);
    // 缓存起来
    cache[moduleId] = module.exports;
    // 返回module.exports
    return module.exports // 注意返回的是module.exports
}

require.cache = {}
\`\`\`
`;const v={CommonJS:S},M={components:{StudyMenu:u},setup(){const t=m("CommonJS"),e=l([{key:"CommonJS",title:"CommonJS"}]),n=a(()=>x(v[t.value],!0));return{menu:e,curSelected:t,mdContent:n}}},j={class:"page study-page"},q={class:"content"},y=["innerHTML"];function C(t,e,n,o,h,g){const s=_("StudyMenu");return i(),p("div",j,[r("div",q,[r("div",{class:"markdown-body",innerHTML:o.mdContent},null,8,y)]),f(s,{menu:o.menu,curSelected:o.curSelected,"onUpdate:curSelected":e[0]||(e[0]=d=>o.curSelected=d)},null,8,["menu","curSelected"])])}const w=c(M,[["render",C],["__scopeId","data-v-1db1c959"],["__file","/Users/zhuguanqun/Documents/personalWebProject/water-fe/water-fe/src/views/Module/Module.vue"]]);export{w as default};
