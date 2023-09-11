import{S as a}from"./StudyMenu-9f7df49d.js";import{m as d}from"./marked.esm-fcaba525.js";import{_ as p,r as i,a as l,p as m,e as _,b as u,c as S,d as r,f as y}from"./index-39890213.js";const f=""+new URL("prototype-c9da5484.png",import.meta.url).href,h=`
## 原型和原型链

### 一. 函数原型 prototype

- 所有函数都有一个属性：prototype，称为函数原型。
- prototype 中有一个属性 constructor，它指向构造函数本身

### 二. 隐式原型 __proto__

- 所有对象都有一个属性：__proto__, 称为隐式原型。
- 隐式原型指向创建该对象的函数的函数原型

### 三. 原型链
1. Function的隐式原型指向自身的函数原型
2. Object的函数原型的隐式原型指向null

**注意：箭头函数不能使用new 调用，箭头函数没有函数原型**

![](${f})
`,v=`
## this 指向
### 一. 在全局代码中使用this，指代全局对象
### 二. 在函数中使用this, 看函数是如何调用的
- 通过 new 调用： 新对象
- 直接调用：全局对象
- 通过对象调用：指向对象
- call：call的第一个参数
- apply：apply的第一个参数
### 三. 箭头函数
**没有this**
> 箭头函数中的this使用的是外层的this
\`\`\`js
var obj = {
    a: 1,
    getA() {
        setTimeout(() => {
            console.log(this.a)
        }, 1000)
    }
}
var a = 10;
var getA = obj.getA;
obj.getA(); // 1
getA(); // 10
\`\`\`
`,g=""+new URL("domSize1-29a5a82e.png",import.meta.url).href,b=""+new URL("domSize2-64795dc2.png",import.meta.url).href,z=""+new URL("domSize3-fb8868bb.png",import.meta.url).href,L=`
## DOM的尺寸和位置
![](${g})

![](${b})

![](${z})
`;const k={prototype:h,thisFor:v,domSize:L},w={components:{StudyMenu:a},setup(){const o=i("prototype"),e=l([{key:"prototype",title:"原型和原型链"},{key:"thisFor",title:"this指向"},{key:"domSize",title:"尺寸和位置"}]),n=m(()=>d(k[o.value],{headerIds:!1,mangle:!1}));return{menu:e,curSelected:o,mdContent:n}}},M={class:"page study-page"},R={class:"content"},j=["innerHTML"];function x(o,e,n,t,A,U){const s=_("StudyMenu");return u(),S("div",M,[r("div",R,[r("div",{innerHTML:t.mdContent},null,8,j)]),y(s,{menu:t.menu,curSelected:t.curSelected,"onUpdate:curSelected":e[0]||(e[0]=c=>t.curSelected=c)},null,8,["menu","curSelected"])])}const F=p(w,[["render",x],["__scopeId","data-v-3348e7dd"]]);export{F as default};
