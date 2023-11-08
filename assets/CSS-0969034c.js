import{_ as l,b as d,c as o,F as p,q as m,i as f,t as y,r as g,a as S,p as h,e as v,d as r,f as C}from"./index-365ac7d5.js";import{m as u}from"./marked.esm-fcaba525.js";const k={props:{menu:{type:Array,default:[]},curSelected:{type:String,default:""}},emits:{"on-change":null,"update:curSelected":null},setup(c,{emit:t}){function n(e){t("update:curSelected",e),t("on-change",e)}return{changeMenu:n}}},M={class:"study-menu"},x=["onClick"];function $(c,t,n,e,i,_){return d(),o("div",M,[(d(!0),o(p,null,m(n.menu,s=>(d(),o("p",{class:f(["study-item",{"study-item-select":s.key===n.curSelected}]),key:s.key,onClick:a=>e.changeMenu(s.key)},y(s.title),11,x))),128))])}const z=l(k,[["render",$],["__scopeId","data-v-681dffcd"]]),I=`
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
`,L=`
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
`;const P={sizePercentage:u(I,{headerIds:!1,mangle:!1}),styleCompute:u(L,{headerIds:!1,mangle:!1})},b={components:{StudyMenu:z},setup(){const c=g("sizePercentage"),t=S([{key:"sizePercentage",title:"尺寸的百分比"},{key:"styleCompute",title:"属性计算"}]),n=h(()=>P[c.value]);return{menu:t,curSelected:c,mdContent:n}}},B={class:"page study-page"},w={class:"content"},F=["innerHTML"];function H(c,t,n,e,i,_){const s=v("StudyMenu");return d(),o("div",B,[r("div",w,[r("div",{class:"markdown-body",innerHTML:e.mdContent},null,8,F)]),C(s,{menu:e.menu,curSelected:e.curSelected,"onUpdate:curSelected":t[0]||(t[0]=a=>e.curSelected=a)},null,8,["menu","curSelected"])])}const T=l(b,[["render",H],["__scopeId","data-v-3191957d"]]);export{T as default};
