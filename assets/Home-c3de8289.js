import{_ as f,r as h,a as _,o as u,w as v,v as w,b as T,c as x,d as e,n as o,e as P,f as g}from"./index-43dd7faa.js";import{u as B,T as H}from"./tween.esm-f6e4d32f.js";const k={setup(p,{expose:a}){const c=h(!1),t=_({title1:0,title2:0,title3:0,title4:0,first1:0,first2:0,first3:0,first4:0,first5:0,first6:0,first7:0,first8:0,first9:0,first10:0,first11:0,second1:0,second2:0,second3:0,second4:0,second5:0,second6:0,second7:0,second8:0,second9:0,second10:0,second11:0,third1:0,third2:0,third3:0,third4:0,third5:0,third6:0,third7:0,third8:0,third9:0,third10:0,third11:0,fourth1:0,fourth2:0,fourth3:0,fourth4:0,fourth5:0,fourth6:0,fourth7:0,fourth8:0,fourth9:0,fourth10:0,fourth11:0,author1:0,author2:0}),s=Object.keys(t);let i=null;function y(){let r=null,l=0;function m(j){return new H(t).to({...t,[j]:1},300).onComplete(()=>{l++,l<s.length&&(r=m(s[l]))}).start()}r=m("title1");let O=null;d();function d(){O=requestAnimationFrame(d),B()}return()=>{r.stop(),cancelAnimationFrame(O)}}let n=null;function b(){n=setTimeout(()=>{c.value=!0,i=y()},2e3)}return u(()=>{clearTimeout(n),i==null||i()}),a({createPorm:b}),{showPoem:c,poemTextOpacityObj:t}}},F={class:"poem"},I={class:"author"};function R(p,a,c,t,s,i){return v((T(),x("div",F,[e("h1",null,[e("span",{style:o({opacity:t.poemTextOpacityObj.title1})},"终",4),e("span",{style:o({opacity:t.poemTextOpacityObj.title2})},"南",4),e("span",{style:o({opacity:t.poemTextOpacityObj.title3})},"别",4),e("span",{style:o({opacity:t.poemTextOpacityObj.title4})},"业",4)]),e("p",null,[e("span",{style:o({opacity:t.poemTextOpacityObj.first1})},"中",4),e("span",{style:o({opacity:t.poemTextOpacityObj.first2})},"岁",4),e("span",{style:o({opacity:t.poemTextOpacityObj.first3})},"颇",4),e("span",{style:o({opacity:t.poemTextOpacityObj.first4})},"好",4),e("span",{style:o({opacity:t.poemTextOpacityObj.first5})},"道，",4),e("span",{style:o({opacity:t.poemTextOpacityObj.first6})},"晚",4),e("span",{style:o({opacity:t.poemTextOpacityObj.first7})},"家",4),e("span",{style:o({opacity:t.poemTextOpacityObj.first9})},"南",4),e("span",{style:o({opacity:t.poemTextOpacityObj.first10})},"山",4),e("span",{style:o({opacity:t.poemTextOpacityObj.first11})},"陲",4)]),e("p",null,[e("span",{style:o({opacity:t.poemTextOpacityObj.second1})},"兴",4),e("span",{style:o({opacity:t.poemTextOpacityObj.second2})},"来",4),e("span",{style:o({opacity:t.poemTextOpacityObj.second3})},"每",4),e("span",{style:o({opacity:t.poemTextOpacityObj.second4})},"独",4),e("span",{style:o({opacity:t.poemTextOpacityObj.second5})},"往，",4),e("span",{style:o({opacity:t.poemTextOpacityObj.second6})},"胜",4),e("span",{style:o({opacity:t.poemTextOpacityObj.second7})},"事",4),e("span",{style:o({opacity:t.poemTextOpacityObj.second9})},"空",4),e("span",{style:o({opacity:t.poemTextOpacityObj.second10})},"自",4),e("span",{style:o({opacity:t.poemTextOpacityObj.second11})},"知",4)]),e("p",null,[e("span",{style:o({opacity:t.poemTextOpacityObj.third1})},"行",4),e("span",{style:o({opacity:t.poemTextOpacityObj.third2})},"到",4),e("span",{style:o({opacity:t.poemTextOpacityObj.third3})},"水",4),e("span",{style:o({opacity:t.poemTextOpacityObj.third4})},"穷",4),e("span",{style:o({opacity:t.poemTextOpacityObj.third5})},"处，",4),e("span",{style:o({opacity:t.poemTextOpacityObj.third6})},"坐",4),e("span",{style:o({opacity:t.poemTextOpacityObj.third7})},"看",4),e("span",{style:o({opacity:t.poemTextOpacityObj.third9})},"云",4),e("span",{style:o({opacity:t.poemTextOpacityObj.third10})},"起",4),e("span",{style:o({opacity:t.poemTextOpacityObj.third11})},"时",4)]),e("p",null,[e("span",{style:o({opacity:t.poemTextOpacityObj.fourth1})},"偶",4),e("span",{style:o({opacity:t.poemTextOpacityObj.fourth2})},"然",4),e("span",{style:o({opacity:t.poemTextOpacityObj.fourth3})},"值",4),e("span",{style:o({opacity:t.poemTextOpacityObj.fourth4})},"林",4),e("span",{style:o({opacity:t.poemTextOpacityObj.fourth5})},"叟，",4),e("span",{style:o({opacity:t.poemTextOpacityObj.fourth6})},"谈",4),e("span",{style:o({opacity:t.poemTextOpacityObj.fourth7})},"笑",4),e("span",{style:o({opacity:t.poemTextOpacityObj.fourth9})},"无",4),e("span",{style:o({opacity:t.poemTextOpacityObj.fourth10})},"还",4),e("span",{style:o({opacity:t.poemTextOpacityObj.fourth11})},"期",4)]),e("p",I,[e("span",{style:o({opacity:t.poemTextOpacityObj.author1})},"王",4),e("span",{style:o({opacity:t.poemTextOpacityObj.author2})},"维",4)])],512)),[[w,t.showPoem]])}const A=f(k,[["render",R],["__scopeId","data-v-38a0f01c"]]),C=""+new URL("homeBG-3a4171c8.jpeg",import.meta.url).href;const L={components:{Poem:A},setup(){const p=h(null);function a(){p.value.createPorm()}return{refPoem:p,loadHomeBg:a}}},N={class:"page-home page"};function S(p,a,c,t,s,i){const y=P("Poem");return T(),x("div",N,[e("img",{class:"home-bg",src:C,alt:"",onLoad:a[0]||(a[0]=(...n)=>t.loadHomeBg&&t.loadHomeBg(...n))},null,32),g(y,{ref:"refPoem",class:"home-poem"},null,512)])}const q=f(L,[["render",S],["__scopeId","data-v-e1193653"]]);export{q as default};
