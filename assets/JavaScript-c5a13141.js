import{S as a}from"./StudyMenu-1adc01bf.js";import{m as p}from"./marked.esm-fcaba525.js";import{_ as i,r as d,a as m,p as l,e as _,b as u,c as v,d as r,f as y}from"./index-c3229e12.js";const S=""+new URL("prototype-c9da5484.png",import.meta.url).href,h=`
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

![](${S})
`,f=`
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
`,g=""+new URL("domSize1-29a5a82e.png",import.meta.url).href,L=""+new URL("domSize2-64795dc2.png",import.meta.url).href,b=""+new URL("domSize3-fb8868bb.png",import.meta.url).href,w=`
## DOM的尺寸和位置
![](${g})

![](${L})

![](${b})
`,z=""+new URL("eventLoop-44627701.png",import.meta.url).href,k=`
## 事件循环

### 一. 浏览器进程模型

> 浏览器是一个多进程多线程的应用程序。为了避免相互影响，浏览器在启动后会自动开启多个进程

1. 浏览器进程

主要负责页面交互、用户交互、子进程管理等，内部会启动多个线程处理不同的任务

2. 网络进程

负责加载网络资源，内部会启动多个线程处理不同的任务

3. 渲染进程

渲染进程开启后，会自动创建一个**渲染主线程**，负责执行html、js、css代码

浏览器进程会为每个tab页开启一个独立的渲染进程（后面改成一个站点一个进程），保证互相不影响。

### 二. 渲染主线程工作原理

![](${z})

- 最开始，渲染主线程会进入一个无限循环
- 每一次循环会检查消息队列中是否有任务存在。如果有，就取出第一个任务执行，执行完一个后进入下一次循环；如果没有，则进入休眠状态。
- 其他所有线程（包括其他进程的线程）可以随时向消息队列添加任务。新任务会加到消息队列的末尾。在添加新任务时，如果主线程是休眠状态，则会将其唤醒以继续循环拿取任务

### 三. 消息队列优先级

- 每个任务都有一个任务类型，同一个类型的任务必须在一个队列中，不同类型的任务可以分属于不同的队列。
- 在一次事件循环中，浏览器可以根据实际情况从不同的队列中取出任务执行。
- 浏览器必须准备好一个微队列，微队列中的任务优先所有其他任务执行。(w3c不再使用宏队列)

> Promise，MutationObserver 会讲任务添加到微队列

### 四. Chrome中

在Chrome中，有很多任务队列，其中有延时队列、交互队列、微队列

> 优先级：**微队列 > 交互队列 > 延时队列**
`;const M={prototype:h,thisFor:f,domSize:w,eventLoop:k},R={components:{StudyMenu:a},setup(){const o=d("prototype"),e=m([{key:"prototype",title:"原型和原型链"},{key:"thisFor",title:"this指向"},{key:"domSize",title:"尺寸和位置"},{key:"eventLoop",title:"事件循环"}]),n=l(()=>p(M[o.value],{headerIds:!1,mangle:!1}));return{menu:e,curSelected:o,mdContent:n}}},j={class:"page study-page"},C={class:"content"},U=["innerHTML"];function $(o,e,n,t,x,A){const s=_("StudyMenu");return u(),v("div",j,[r("div",C,[r("div",{innerHTML:t.mdContent},null,8,U)]),y(s,{menu:t.menu,curSelected:t.curSelected,"onUpdate:curSelected":e[0]||(e[0]=c=>t.curSelected=c)},null,8,["menu","curSelected"])])}const J=i(R,[["render",$],["__scopeId","data-v-3582146e"]]);export{J as default};
