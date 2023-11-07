import{S as a}from"./StudyMenu-f91430e9.js";import{m as d}from"./marked.esm-fcaba525.js";import{H as i}from"./index-0153fe02.js";import{_ as l,r as u,a as m,p as _,e as p,b as f,c as g,d as s,f as h}from"./index-333d309d.js";import"./_commonjsHelpers-042e6b4d.js";const S=`
## 尺寸的百分比

### 参考系
百分比是一个相对单位，其相对于元素的参考系。
- 普通元素的参考系为**父元素的内容区域**
- 绝对(固定)定位元素的参考系为**父元素中第一个定位元素的padding区域**

### 常见百分比
1. width: 参考系的宽度
2. height：参考系的高度（参考系的高度受本身影响时，设置无效）
3. padding：参考系的宽度
4. border: 参考系的宽度
5. margin: 参考系的宽度
`,y=`
## 属性值计算过程
    样式表：用户声明的属性+浏览器默认属性
### 一. 确定声明值
    参考样式表中没有声明冲突的属性，作为 css 属性值
### 二. 层叠冲突
    对有冲突的声明使用层叠规则
##### 1.比较重要性
        用户声明 > 浏览器默认样式
##### 2.比较特殊性
        权重
##### 3.比较原次序
        后面的覆盖前面的
### 三. 使用继承
    对仍然没有值的属性、若可以继承，则继承父元素的值
### 四. 使用默认值
    对仍然没有值的属性，使用默认值
**注意：设置值为 inherit（color:inherit）,直接使用继承，绕过第三步**
`;const v={sizePercentage:S,styleCompute:y},C={components:{StudyMenu:a},setup(){const n=u("sizePercentage"),t=m([{key:"sizePercentage",title:"尺寸的百分比"},{key:"styleCompute",title:"属性计算"}]),o=_(()=>d(v[n.value],{headerIds:!1,mangle:!1,highlight:function(e){return i.highlightAuto(e).value}}));return{menu:t,curSelected:n,mdContent:o}}},k={class:"page study-page"},b={class:"content"},M=["innerHTML"];function x(n,t,o,e,H,z){const c=p("StudyMenu");return f(),g("div",k,[s("div",b,[s("div",{class:"markdown-body",innerHTML:e.mdContent},null,8,M)]),h(c,{menu:e.menu,curSelected:e.curSelected,"onUpdate:curSelected":t[0]||(t[0]=r=>e.curSelected=r)},null,8,["menu","curSelected"])])}const N=l(C,[["render",x],["__scopeId","data-v-feef3eb7"]]);export{N as default};
