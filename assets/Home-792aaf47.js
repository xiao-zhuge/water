import{_ as r,o as c,a as s,c as a}from"./index-c893fdb0.js";function i(o=null){if(typeof o!="function")throw new Error("callBack is not a function !");function t(n){o(n.matches?"dark":"light")}const e=window.matchMedia("(prefers-color-scheme: dark)");return t(e),e.addEventListener("change",t),function(){e.removeEventListener("change",t)}}const l={setup(){const o=i(t=>{const e=document.querySelector(":root"),n=getComputedStyle(e).getPropertyValue("--color-background");console.log(n)});c(()=>{o()})}},d={class:"page",id:"mainPage"};function f(o,t,e,n,u,m){return s(),a("div",d,"asdfasdf")}const p=r(l,[["render",f]]);export{p as default};
