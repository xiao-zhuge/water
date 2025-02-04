import{S as l}from"./StudyMenu-d800e77f.js";import{_ as d,r as a,a as i,p as f,e as p,b as u,c as h,d as o,f as m}from"./index-affac10e.js";import{u as _}from"./useMarked-9234b812.js";import"./jspdf.es.min-c5b8ef46.js";import"./commonjsHelpers-042e6b4d.js";const S=`
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
`,x=`
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
`,y=`
## 伪类选择器

- E:not(s)  选中的E中 不包括s选中的元素
- E:root  根元素选择器,在html中等价于 html标签选择器
- E:target 点击a标签，跳转到响应锚地后的元素

- E:first-child  所有选中的元素的第一个孩子元素
- E:last-child 选中元素的最后一个孩子元素
- E:only-child  没有任何兄弟元素的元素
- E:nth-child(n)  第n个子元素
- E:nth-last-child  倒数第n个子元素

- E:first-of-type  第一个该类型的元素
- E:last-of-type  最后一个该类型的元素
- E:only-of-type  只有该类型元素的元素
- E:nth-of-type(n)  第n个该类型的元素
- E:nth-of-last-type(n)  倒数第n个该类型的元素

- E:empty  空内容的元素
- E:checked  checked的元素
- E:enabled  enabled的元素
- E:disabled  disabled的元素
- E:read-only  不可被编辑的元素
- E:read-write  可被编辑的元素
`,k=""+new URL("flexShrink1-2af1cc18.png",import.meta.url).href,E=""+new URL("flexShrink2-2f491ddd.png",import.meta.url).href,b=`
## flex-shrink
> 当空间不够时设置了flex-shrink的元素将被缩小，默认为0不缩小
#### 1. 父宽600，自宽300，flex-shrink: 1 1 1,
**子元素宽度都被缩小到了200**
![](${k})
#### 2. 父宽600，box1 box2是200，box3是400，flex-shrink：1 1 3
**子元素缩放后的宽度为175 175 250, 而不是160 160 280** 
![](${E})
\`\`\`shell
# 需要缩放的宽度的 200
# 算法：加权平均数
# 1. 加权
# 200 * 1 + 200 * 1 + 400 * 3 = 1600 
# 2. 求平均值
# box1 box2
# (200 * 1) / 1600 * 200 = 25px
# box3
# (400 * 3) / 1600 * 200 = 150px
\`\`\`
**加权时候，200不是盒模型宽度，而是真实内容宽度**
`;const g={sizePercentage:S,styleCompute:x,pseudoClasses:y,flexShrink:b},C={components:{StudyMenu:l},setup(){const n=a("sizePercentage"),e=i([{key:"sizePercentage",title:"尺寸的百分比"},{key:"styleCompute",title:"属性计算"},{key:"pseudoClasses",title:"伪类选择器"},{key:"flexShrink",title:"flex-shrink"}]),s=f(()=>_(g[n.value]));return{menu:e,curSelected:n,mdContent:s}}},v={class:"page study-page"},w={class:"content"},M=["innerHTML"];function L(n,e,s,t,z,P){const r=p("StudyMenu");return u(),h("div",v,[o("div",w,[o("div",{class:"markdown-body",innerHTML:t.mdContent},null,8,M)]),m(r,{menu:t.menu,curSelected:t.curSelected,"onUpdate:curSelected":e[0]||(e[0]=c=>t.curSelected=c)},null,8,["menu","curSelected"])])}const T=d(C,[["render",L],["__scopeId","data-v-94f2d187"],["__file","/Users/zhuguanqun/Documents/personalWebProject/water-fe/water-fe/src/views/CSS/CSS.vue"]]);export{T as default};
