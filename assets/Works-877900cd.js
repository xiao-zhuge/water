var y=Object.defineProperty;var x=(e,t,s)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var d=(e,t,s)=>(x(e,typeof t!="symbol"?t+"":t,s),s),m=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var u=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)};var h=(e,t,s)=>(m(e,t,"access private method"),s);import{S}from"./StudyMenu-9b7801b1.js";import{_,B as g,r as b,a as v,e as C,b as w,c as E,f as G,y as I,z as M,d as k}from"./index-c0cab0c6.js";function A(e,t){let s=e[0].x,o=e[0].x,c=e[0].y,n=e[0].y;for(const{x:l,y:a}of e)l<s?s=l:l>o&&(o=l),a<c?c=a:a>n&&(n=a);const r={left:s,right:o,top:c,bottom:n},i=[];for(const l of t)j(l,r)&&B(l,e)&&i.push(l);return i}function j(e,t){const{x:s,y:o}=e;return!(s<t.left||s>t.right||o<t.top||o>t.bottom)}function B(e,t){let s=t.length,o=0;for(let c=0;c<s;c++){let n=t[c],r=t[(c+1)%s];if(n.y===r.y||e.y<Math.min(n.y,r.y)||e.y>=Math.max(n.y,r.y))continue;(e.y-n.y)*(r.x-n.x)/(r.y-n.y)+n.x>e.x&&o++}return o%2===1}const F={setup(){return()=>g("div")}};var f,p;class D extends Application{constructor(s){super(s);u(this,f);d(this,"pointCon",new Container);d(this,"areaG",new Graphics);d(this,"selectEls",[]);this.stage.addChild(this.pointCon),this.stage.addChild(this.areaG),h(this,f,p).call(this)}drawArea(s){this.areaG.clear(),this.areaG.beginFill(16729088,.3),this.areaG.drawPolygon(s),this.areaG.endFill()}computeAreaEls(s){this.selectEls=A(s,this.pointCon.children),this.selectEls.forEach(o=>o.tint=2293538)}clearSelect(){this.areaG.clear(),this.selectEls.forEach(s=>s.tint=14540253),this.selectEls=[]}}f=new WeakSet,p=function(){const{width:s,height:o}=this.screen;for(let c=0;c<100;c++){const n=new Graphics;n.beginFill(16777215),n.drawCircle(0,0,5),n.endFill(),n.tint=14540253,n.x=Math.floor(Math.random()*s),n.y=Math.floor(Math.random()*o),this.pointCon.addChild(n)}};const V=_(F,[["__scopeId","data-v-228b236b"]]);const L={components:{StudyMenu:S,LassoSelect:V},setup(){const e=b("lassoSelect");return{menu:v([{key:"lassoSelect",title:"套索选择算法"}]),curSelected:e}}},N=e=>(I("data-v-72df333b"),e=e(),M(),e),R={class:"page works-page"},W=N(()=>k("div",{class:"content"},null,-1));function $(e,t,s,o,c,n){const r=C("StudyMenu");return w(),E("div",R,[W,G(r,{menu:o.menu,curSelected:o.curSelected,"onUpdate:curSelected":t[0]||(t[0]=i=>o.curSelected=i)},null,8,["menu","curSelected"])])}const H=_(L,[["render",$],["__scopeId","data-v-72df333b"]]);export{H as default};
