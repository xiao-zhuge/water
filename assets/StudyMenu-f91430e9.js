import{_ as r,b as s,c as u,F as d,q as o,i as l,t as _}from"./index-333d309d.js";const i={props:{menu:{type:Array,default:[]},curSelected:{type:String,default:""}},emits:{"on-change":null,"update:curSelected":null},setup(a,{emit:c}){function e(t){c("update:curSelected",t),c("on-change",t)}return{changeMenu:e}}},p={class:"study-menu"},y=["onClick"];function f(a,c,e,t,S,g){return s(),u("div",p,[(s(!0),u(d,null,o(e.menu,n=>(s(),u("p",{class:l(["study-item",{"study-item-select":n.key===e.curSelected}]),key:n.key,onClick:m=>t.changeMenu(n.key)},_(n.title),11,y))),128))])}const k=r(i,[["render",f],["__scopeId","data-v-681dffcd"]]);export{k as S};
