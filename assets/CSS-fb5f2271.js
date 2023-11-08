import{S as r}from"./StudyMenu-36290836.js";import{m as a}from"./marked.esm-fcaba525.js";import{_ as i,r as l,a as u,p as m,e as _,b as p,c as S,d as s,f}from"./index-16a82f57.js";const g=`
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
`;const v={sizePercentage:g,styleCompute:y},h={components:{StudyMenu:r},setup(){const n=l("sizePercentage"),e=u([{key:"sizePercentage",title:"尺寸的百分比"},{key:"styleCompute",title:"属性计算"}]),o=m(()=>a(v[n.value],{headerIds:!1,mangle:!1}));return{menu:e,curSelected:n,mdContent:o}}},C={class:"page study-page"},k={class:"content"},M=["innerHTML"];function x(n,e,o,t,b,z){const c=_("StudyMenu");return p(),S("div",C,[s("div",k,[s("div",{class:"markdown-body",innerHTML:t.mdContent},null,8,M)]),f(c,{menu:t.menu,curSelected:t.curSelected,"onUpdate:curSelected":e[0]||(e[0]=d=>t.curSelected=d)},null,8,["menu","curSelected"])])}const w=i(h,[["render",x],["__scopeId","data-v-868d579d"]]);export{w as default};
