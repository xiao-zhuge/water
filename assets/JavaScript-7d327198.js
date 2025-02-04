import{S as i}from"./StudyMenu-f108a648.js";import{u as c}from"./useMarked-9234b812.js";import{_ as l,r as p,a as u,p as d,e as m,b as f,c as y,d as r,f as h}from"./index-c5ee65c8.js";import"./commonjsHelpers-042e6b4d.js";const g=""+new URL("prototype-1edecc9d.png",import.meta.url).href,_=`
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

![](${g})
`,v=`
## this 指向
### 一. 在全局代码中使用this，指代全局对象
### 二. 在函数中使用this, 看函数是如何调用的
- 通过 new 调用： 新对象
- 直接调用：全局对象
- 通过对象调用：指向对象
- DOM事件函数，this指向事件源
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
`,S=""+new URL("domSize1-29a5a82e.png",import.meta.url).href,b=""+new URL("domSize2-64795dc2.png",import.meta.url).href,k=""+new URL("domSize3-fb8868bb.png",import.meta.url).href,N=""+new URL("domSize4-mouse-7c539811.jpeg",import.meta.url).href,O=`
## DOM的尺寸和位置
![](${S})

![](${b})

![](${k})
### 鼠标位置
![](${N})
- page: 当前鼠标距离页面的坐标
- client: 鼠标相对视口的坐标 （等同于 x, y）
- offset: 鼠标相对**事件源内边距**的坐标
- screen: 鼠标相对屏幕的坐标
`,j=""+new URL("eventLoop-44627701.png",import.meta.url).href,L=`
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

![](${j})

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
`,x=""+new URL("eventLoopNode-3d3f9c01.png",import.meta.url).href,R=`
## Node事件循环

![](${x})

> 每次循环有6个阶段，每个阶段都是一个队列

### 一. 队列

1. timers: setTimeout,setInterval
2. pendingCallback: 与操作系统相关，不用管
3. idle,prepare: 系统内部使用，不用管
4. poll: **轮训队列**，IO,用户请求等
5. checks: setImmediate
6. closingCallback: 与操作系统相关，不用管

### 二. poll轮训

- 如果poll中有回掉，一次执行知道清空poll
- 如果poll中没有回掉，等待其他队列
   - 其他队列出现回掉，就结束该阶段，进入下一个阶段
   - 其他队列没有回掉， 如果有监听就一直等，否则结束

### 三. 微队列

> process.nextTick、promise

**事件循环每次要执行一个回掉时，都必须先清空微队列，优先级：process.nextTick > promise**
`,P=`
## 算术运算
### 一. 加号运算
###### 1. 加号一边有字符串
> 变成字符串拼接，将另外一边其他类型转成字符串
- 数字 -> 数字字符串
- 布尔 -> 布尔字符串
- null -> 'null'
- undefined -> 'undefined'
- 对象 -> '[object Object]'
> 对象会先调用valueOf得到对象的值，如果值还是个对象，则调用toString方法转换成字符串
###### 2. 加号两边都没有字符串但一边有对象
> 将对象转成字符串，然后按照上面规则进行
###### 3. 其他情况和数学运算一致
### 二. 其他运算
> 将原始类型转换为数字类型，然后进行运算
- 布尔：true -> 1; false -> 0
- null -> 0
- undefined -> NaN
- string: 1.如果字符串内部是一个正确的数字则直接变成数字; 2.如果是一个非数字则直接转成NaN; 3.空字符串转换成0; 
**字符串会忽略前后空格**
**NaN与任何其他数据运算得到的结果都是NaN**
> 将对象类型转换成字符串，字符串再转换成数字
对象类型 -> '[object Object]' -> NaN
## 比较运算
### 一. 大小比较
###### 1. 两个字符串比较大小，比较的是字符串的字符编码
###### 2. 如果一个不是字符串，两个都是原始类型，将他们都转换成数字进行比较
**NaN与任何数字比较，得到的结果都是false**
###### 3. 如果一个是对象，将对象转换成原始类型，然后按照上面规则比较
### 二. 相等比较(== !=)
###### 1. 两端类型相同，直接比较两个数据本身是否相同
> 对象比较的是地址
###### 2. 两端类型不同
- null和undefined相等，与其他原始类型比较都不想等
- 其他原始类型要先转成数字再比较
- NaN与谁比较都是false
- 对象比较要先转成原始类型再比较
`,w=`
## 执行上下文
> 一个函数执行前会创建一个内存空间，该空间中包含函数执行所需要的数据，该空间中主要包含this和VO变量对象
### 一. this指向
### 二. VO对象
> VO中保存了该环境中所有声明的变量和函数，全局执行上下文又叫GO，当前执行上下文又叫AO
#### 创建VO步骤
1. 确定所有形参值和变量arguments
2. 确定通过var声明的变量并赋值undefined,**如果VO中已有该名称变量，则忽略这一步**
3. 确定通过字面量声明的函数，**如果VO中已有该名称变量，则覆盖**
> 当代码执行时，如果当前VO中不存在某个属性，则会从之前的上下文中寻找
`,$=""+new URL("actionScope-26c3d1da.png",import.meta.url).href,U=`
## 作用域链
- VO 中包含一个额外的属性，该属性指向创建该 VO 的函数本身
- 每个函数在创建时，会有一个隐藏属性\`\`\`[[scope]]\`\`\`，它指向创建该函数时的 AO
#### 示例
\`\`\`js
var a = 1;
function t() {
  console.log(a);
}
function t1() {
  var a = 2;
  t();
}
t1();
\`\`\`
![](${$})
`,V=""+new URL("Promise1-a8212b78.png",import.meta.url).href,z=""+new URL("Promise2-da0f3668.png",import.meta.url).href,M=`
## Promise
### Promise A+规范
1. 所有的异步场景都可以看作是一个异步任务，每个异步任务在js中应该是一个对象，该对象被称为Promise对象
2. 每个任务对象都应该有两个阶段、三个状态
3. resolve: 挂起 -> 完成；reject: 挂起 -> 失败

![](${V})

4. 完成的后续处理叫onFulfilled，失败的后续处理叫onRejected

![](${z})
### Promise 链式调用
- then方法必定返回一个新的Promise（后续处理也是一个新的任务）
- 新任务的状态取决于后续处理
1. 如果没有后续处理，新任务状态和前任务一致，数据为前一个任务的数据
没有then或catch
2. 如果有后续处理
- 如果有新任务但还未执行，则新任务挂起
- 如果有新任务并执行了
1. 后续处理没有报错，新任务状态为完成，数据为返回值
2. 后续处理执行报错，新任务状态为失败，数据为错误对象
3. 后续处理返回Promise，新任务的状态和数据与该Promise一致
`,A=`
## 迭代器 iterator
**具有一个next方法，并且next返回以下格式对象的对象**

\`\`\` {value: 数据, done: 是否迭代完成} \`\`\`

- 迭代器创建函数：一个返回迭代器的函数

### 可迭代协议

**ES6规定，如果一个对象有知名符号属性\`\`\`Symbol.iterator\`\`\`,并且属性值是一个迭代器创建函数，则该对象可迭代**

>for..of 循环可遍历可迭代协议；展开运算符可操作可迭代对象

\`\`\`
const [a, b] = {a: 1, b: 2}

Object.prototype[Symbol.iterator] = function () {
    const keys = Object.keys(this);
    let i = 0;
    return {
      next: () => {
        const prop = keys[i];
        const value = this[prop];
        const result = {
          value,
          done: i >= keys.length,
        };
        i++;
        return result;
      },
    };
  };
\`\`\`
`,C=`
## 生成器 Generator
**生成器是一个通过构造函数Generator创建的对象，生成器即是一个迭代器，也是一个可迭代对象**

\`\`\`js

function* generator() {
    
}

\`\`\`

### 注意
1. 生成器函数可以有返回值，返回值出现在第一次done为true对应的value中
2. 调用生成器的next方法时可以**传递参数**，传递的参数会交给**上一个yield的返回值**
3. 第一次调用next时候，传参没有任何意义
4. 生成器函数内部可以调用其他生成器函数，但是要加*号
\`\`\`js

yield* text()

\`\`\`

\`\`\`
const [a, b] = {a: 1, b: 2}

Object.prototype[Symbol.iterator] = function* () {
    for(const prop in this) {
        yield this[prop]
    }
  };
\`\`\`

### 异步实现
\`\`\`

function* task() {
    const d = yield 1;
    console.log(d)
    // //d : 1
    const resp = yield fetch("http://101.132.72.36:5100/api/local")
    const result = yield resp.json();
    console.log(result);
}

run(task)

function run(generatorFunc) {
    const generator = generatorFunc();
    let result = generator.next(); //启动任务（开始迭代）, 得到迭代数据
    handleResult();
    //对result进行处理
    function handleResult() {
        if (result.done) {
            return; //迭代完成，不处理
        }
        //迭代没有完成，分为两种情况
        //1. 迭代的数据是一个Promise
        //2. 迭代的数据是其他数据
        if (typeof result.value.then === "function") {
            //1. 迭代的数据是一个Promise
            //等待Promise完成后，再进行下一次迭代
            result.value.then(data => {
                result = generator.next(data)
                handleResult();
            })
        } else {
            //2. 迭代的数据是其他数据，直接进行下一次迭代
            result = generator.next(result.value)
            handleResult();
        }
    }
}
\`\`\`
`,I=`
## 数据存储

### 前置知识
1. 计算机使用固定的位数来存储数字，无论数字大小，在内存中占用的空间是固定的
2. n位无符号整数可表示 2^n 个数字，范围是 0 ～ 2^n-1
3. n位有符号整数可表示 2^n 个数字，范围是 -2^(n-1) ～ 2^(n-1) - 1
4. 浮点数表示法可表示整数和小数
    - 32位浮点数(单精度)：1位表示符号，8位表示阶码(指数)，23位表示尾数
    - 64位浮点数(双精度)：1位表示符号，11位表示阶码(指数)，52位表示尾数

\`\`\`
1.位数 * 2^阶码
\`\`\`

### JS数据存储
> 64位双精度
#### 特殊情况
1. 指数为0，尾数为0，表示0
2. 符号为0，指数为2047，尾数为0，表示正无穷
> Infinity: 0  11111111111  0000......
3. 符号为1，指数为2047，尾数为0，表示负无穷
> Infinity: 1  11111111111  0000......
4. 指数为2047，尾数不为0，表示NaN
> NaN: 1  11111111111  0100110......
#### 正常数字
> 指数最大为 2046
能表示的最大数字是：0  11111111110  11111111......
`;const F={prototype:_,thisFor:v,domSize:O,eventLoop:L,eventLoopNode:R,dataOperation:P,context:w,actionScope:U,promise:M,iterator:A,generator:C,dataStorage:I},T={components:{StudyMenu:i},setup(){const o=p("prototype"),e=u([{key:"prototype",title:"原型和原型链"},{key:"thisFor",title:"this指向"},{key:"domSize",title:"尺寸和位置"},{key:"eventLoop",title:"事件循环"},{key:"eventLoopNode",title:"Node事件循环"},{key:"dataOperation",title:"类型转换"},{key:"context",title:"执行上下文"},{key:"actionScope",title:"作用域链"},{key:"promise",title:"Promise"},{key:"iterator",title:"迭代器"},{key:"generator",title:"生成器"},{key:"dataStorage",title:"数据存储"}]),n=d(()=>c(F[o.value],!0));return{menu:e,curSelected:o,mdContent:n}}},J={class:"page study-page"},B={class:"content"},G=["innerHTML"];function D(o,e,n,t,E,H){const s=m("StudyMenu");return f(),y("div",J,[r("div",B,[r("div",{class:"markdown-body",innerHTML:t.mdContent},null,8,G)]),h(s,{menu:t.menu,curSelected:t.curSelected,"onUpdate:curSelected":e[0]||(e[0]=a=>t.curSelected=a)},null,8,["menu","curSelected"])])}const X=l(T,[["render",D],["__scopeId","data-v-ce55099d"]]);export{X as default};
