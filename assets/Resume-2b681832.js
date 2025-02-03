import{_ as x,b as n,c as l,d as e,t as o,e as I,f as _,F as g,q as R,s as k,A as E,y as C,z as N,h as L,n as P,r as w,o as j,l as U,w as z,v as B,i as V,j as q}from"./index-3c751f17.js";import{P as M,C as Y}from"./resumeData-9debd4ec.js";import S from"./html2canvas.esm-0a33ed42.js";import{E as F}from"./jspdf.es.min-b2bed0a2.js";const T={props:{title:String}},H={class:"split-box"},A={class:"title"};function G(s,r,i,t,m,f){return n(),l("div",H,[e("div",A,[e("span",null,o(i.title),1)])])}const J=x(T,[["render",G],["__scopeId","data-v-30b13a86"]]),K=""+new URL("idPhoto-ec5b95c4.png",import.meta.url).href;const O={components:{Split:J},setup(){const s=[...Y];return s.pop(),{companyData:s,programs:M}}},p=s=>(C("data-v-61b66939"),s=s(),N(),s),Q={class:"resume"},W={class:"info-container"},X=p(()=>e("img",{src:K,alt:"",srcset:""},null,-1)),Z={class:"info"},ee=p(()=>e("label",{class:"label"},"年龄",-1)),se=p(()=>e("label",{class:"label"},"学历",-1)),te=p(()=>e("span",null,"研究生(全日制)",-1)),ae=p(()=>e("label",{class:"label"},"经验",-1)),oe=E('<label class="label" data-v-61b66939>面貌</label><span data-v-61b66939>党员</span><label class="label" data-v-61b66939>母校</label><span data-v-61b66939>合肥工业大学(2014.09-2017.06)</span><label class="label" data-v-61b66939>现居</label><span data-v-61b66939>苏州吴中区</span><label class="label" data-v-61b66939>证书</label><span class="certificate-info" data-v-61b66939>大学英语六级，发表一篇EI论文一篇SCI论文</span>',8),ne=E('<div class="describe-container" data-v-61b66939><ul data-v-61b66939><li data-v-61b66939>精通浏览器渲染原理、js执行机制、作用域链、原型链、闭包、预编译等</li><li data-v-61b66939>精通canvas 2D(pixijs)/3D(webgl,threejs,webVR)绘图</li><li data-v-61b66939>精通promise、proxy、class等ES6+特性</li><li data-v-61b66939>精通webpack、vite</li><li data-v-61b66939>精通VUE，React</li><li data-v-61b66939>精通TypeScript</li><li data-v-61b66939>熟悉c#开发</li><li data-v-61b66939>熟悉blender建模</li></ul><h3 data-v-61b66939>评价</h3><ol data-v-61b66939><li data-v-61b66939>热爱前端技术，学习能力强，喜欢钻研</li><li data-v-61b66939>为人正直热情，对工作认真负责</li></ol></div>',1),le={class:"company-container"},ie={class:"gray"},ce={class:"detail gray"},re=p(()=>e("h4",null,"取得成就",-1)),de={class:"program-container"},ue={class:"item-header"},_e={class:"item-content"},pe={class:"description"},me=p(()=>e("p",null,"项目描述:",-1)),fe={class:"technology"},he={class:"difficulty"},ve=p(()=>e("p",null,"困难点:",-1)),ge={class:"difficulty-item"};function be(s,r,i,t,m,f){const c=I("Split");return n(),l("div",Q,[e("div",W,[X,e("div",Z,[ee,e("span",null,o(s.$moment().diff(s.$moment("1991"),"years")),1),se,te,ae,e("span",null,o((s.$moment().diff(s.$moment("2017-06"),"months")/12).toFixed(1))+"年",1),oe])]),_(c,{title:"自我描述"}),ne,_(c,{title:"工作经历"}),e("div",le,[(n(!0),l(g,null,R(t.companyData,(a,b)=>(n(),l("div",{class:"item",key:b},[e("h3",null,[k(o(a.name)+" ",1),e("span",null,o(a.post),1),e("span",ie,o(a.timeRange),1)]),e("p",ce,o(a.jobs),1),re,e("ul",null,[(n(!0),l(g,null,R(a.contributes,(u,y)=>(n(),l("li",{key:y},o(u),1))),128))])]))),128))]),_(c,{title:"项目经历"}),e("div",de,[(n(!0),l(g,null,R(t.programs,(a,b)=>(n(),l("div",{class:"company",key:b},[(n(!0),l(g,null,R(a,(u,y)=>(n(),l("div",{class:"item",key:y},[e("div",ue,[e("h3",null,o(u.name),1),e("p",null,o(u.time),1)]),e("div",_e,[e("div",pe,[me,e("p",null,o(u.description),1)]),e("div",fe,[e("p",null,"相关技术: "+o(u.technology),1)]),e("div",he,[ve,e("ul",ge,[(n(!0),l(g,null,R(u.difficulty,(d,v)=>(n(),l("li",{key:v},o(d),1))),128))])])])]))),128))]))),128))])])}const ye=x(O,[["render",be],["__scopeId","data-v-61b66939"]]);const Re={components:{ResumeBody:ye},props:{pageNo:{type:String},offset:{type:Number,default:0}}},we=s=>(C("data-v-3949420c"),s=s(),N(),s),$e={class:"resume-item"},Se=we(()=>e("div",{class:"header footer"},[k(" 朱冠群 "),e("a",{href:"tel:16606160524"}," 16606160524 ")],-1)),xe={class:"content"},De={class:"footer"};function Ie(s,r,i,t,m,f){const c=I("ResumeBody");return n(),l("div",$e,[L(s.$slots,"head",{},()=>[Se],!0),e("div",xe,[_(c,{style:P({marginTop:`-${i.offset}px`})},null,8,["style"])]),e("div",De,o(i.pageNo),1)])}const ke=x(Re,[["render",Ie],["__scopeId","data-v-3949420c"]]);function Ce(s=null){if(typeof s!="function")throw new Error("callBack is not a function !");function r(t){s(t.matches?"dark":"light")}const i=window.matchMedia("(prefers-color-scheme: dark)");return r(i),i.addEventListener("change",r),function(){i.removeEventListener("change",r)}}const Ne={components:{ResumeItem:ke},setup(){const s=w([]),r=w([]),i=w([]),t=w([]),m=1050,f=1484;let c=0;const a=w(!1);function b(){a.value||(a.value=!0,u().then(()=>{a.value=!1}))}async function u(){const d=[],v={width:m,height:f,scale:2,backgroundColor:c};let h=await S(s.value.$el,v);d.push(h.toDataURL("image/png",1)),h=await S(r.value.$el,v),d.push(h.toDataURL("image/png",1)),h=await S(i.value.$el,v),d.push(h.toDataURL("image/png",1)),h=await S(t.value.$el,v),d.push(h.toDataURL("image/png",1));const $=new F("p","pt","a4",!0);$.deletePage(1);for(let D=0;D<d.length;D++)$.addPage([m,f]),$.addImage(d[D],"PNG",0,0,m,f);$.save(`朱冠群简历_${q().format("YYYY-MM-DD HH.mm.ss")}.pdf`)}const y=Ce(()=>{const d=document.querySelector(":root");c=getComputedStyle(d).getPropertyValue("--color-background")});return j(()=>{y()}),{refResume1:s,refResume2:r,refResume3:i,refResume4:t,download:b,isDowning:a}}},ze=s=>(C("data-v-83230eb4"),s=s(),N(),s),Be={class:"page resume-page"},Ee=ze(()=>e("div",{class:"first-page--head"},[e("div",{class:"name"},[k(" 朱冠群 "),e("span",null,"资深前端")]),e("div",{class:"connect-methods"},[e("a",{href:"tel:16606160524"},[e("i",{class:"iconfont icon-telephone"}),e("span",null,"16606160524")]),e("a",{href:"https://xiao-zhuge.github.io/water",target:"_blank"},[e("i",{class:"iconfont icon-zhuye"}),e("span",null,"https://xiao-zhuge.github.io/water")]),e("a",{href:"mailto:zhuguanqun1991@126.com"},[e("i",{class:"iconfont icon-youjian"}),e("span",null,"zhuguanqun1991@126.com")])])],-1)),Le={class:"iconfont icon-xiazaiwenjian"};function Pe(s,r,i,t,m,f){const c=I("ResumeItem");return n(),l(g,null,[e("div",Be,[_(c,{class:"resume-item",ref:"refResume1",pageNo:"1/4"},{head:U(()=>[Ee]),_:1},512),_(c,{class:"resume-item",ref:"refResume2",offset:1313,pageNo:"2/4"},null,512),_(c,{class:"resume-item",ref:"refResume3",offset:2710,pageNo:"3/4"},null,512),_(c,{class:"resume-item",ref:"refResume4",offset:4110,pageNo:"4/4"},null,512)]),e("div",{class:V(["download",{"download-ing":t.isDowning}]),onClick:r[0]||(r[0]=(...a)=>t.download&&t.download(...a))},[z(e("span",null,"...",512),[[B,t.isDowning]]),z(e("i",Le,null,512),[[B,!t.isDowning]])],2)],64)}const Me=x(Ne,[["render",Pe],["__scopeId","data-v-83230eb4"]]);export{Me as default};
