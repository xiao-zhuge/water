import{_ as C,r as S,a as k,o as E,w as R,v as m,b as I,c as M,d as s,n as a,e as F,f as A}from"./index-470d9fb2.js";var T=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return this.None(t)},Out:function(t){return this.None(t)},InOut:function(t){return this.None(t)}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(t){var e=1.70158;return t===1?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return t===0?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(t){return 1-T.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?T.Bounce.In(t*2)*.5:T.Bounce.Out(t*2-1)*.5+.5}}),generatePow:function(t){return t===void 0&&(t=4),t=t<Number.EPSILON?Number.EPSILON:t,t=t>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(e*2,t)/2:(1-Math.pow(2-e*2,t))/2+.5}}}}),v=function(){return performance.now()},U=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(r){return e._tweens[r]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,r){e===void 0&&(e=v()),r===void 0&&(r=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var n=0;n<i.length;n++){var h=this._tweens[i[n]],o=!r;h&&h.update(e,o)===!1&&!r&&delete this._tweens[i[n]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),y={Linear:function(t,e){var r=t.length-1,i=r*e,n=Math.floor(i),h=y.Utils.Linear;return e<0?h(t[0],t[1],i):e>1?h(t[r],t[r-1],r-i):h(t[n],t[n+1>r?r:n+1],i-n)},Bezier:function(t,e){for(var r=0,i=t.length-1,n=Math.pow,h=y.Utils.Bernstein,o=0;o<=i;o++)r+=n(1-e,i-o)*n(e,o)*t[o]*h(i,o);return r},CatmullRom:function(t,e){var r=t.length-1,i=r*e,n=Math.floor(i),h=y.Utils.CatmullRom;return t[0]===t[r]?(e<0&&(n=Math.floor(i=r*(1+e))),h(t[(n-1+r)%r],t[n],t[(n+1)%r],t[(n+2)%r],i-n)):e<0?t[0]-(h(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[r]-(h(t[r],t[r],t[r-1],t[r-1],i-r)-t[r]):h(t[n?n-1:0],t[n],t[r<n+1?r:n+1],t[r<n+2?r:n+2],i-n)},Utils:{Linear:function(t,e,r){return(e-t)*r+t},Bernstein:function(t,e){var r=y.Utils.Factorial;return r(t)/r(e)/r(t-e)},Factorial:function(){var t=[1];return function(e){var r=1;if(t[e])return t[e];for(var i=e;i>1;i--)r*=i;return t[e]=r,r}}(),CatmullRom:function(t,e,r,i,n){var h=(r-t)*.5,o=(i-e)*.5,c=n*n,f=n*c;return(2*e-2*r+h+o)*f+(-3*e+3*r-2*h-o)*c+h*n+e}}},B=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),x=new U,N=function(){function t(e,r){r===void 0&&(r=x),this._object=e,this._group=r,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=T.Linear.None,this._interpolationFunction=y.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=B.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.to=function(e,r){if(r===void 0&&(r=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=r,this},t.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},t.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},t.prototype.start=function(e,r){if(e===void 0&&(e=v()),r===void 0&&(r=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||r){if(this._propertiesAreSetUp=!0,!this._isDynamic){var n={};for(var h in this._valuesEnd)n[h]=this._valuesEnd[h];this._valuesEnd=n}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,r)}return this},t.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},t.prototype._setupProperties=function(e,r,i,n,h){for(var o in i){var c=e[o],f=Array.isArray(c),_=f?"array":typeof c,l=!f&&Array.isArray(i[o]);if(!(_==="undefined"||_==="function")){if(l){var p=i[o];if(p.length===0)continue;for(var O=[c],d=0,j=p.length;d<j;d+=1){var w=this._handleRelativeValue(c,p[d]);if(isNaN(w)){l=!1,console.warn("Found invalid interpolation list. Skipping.");break}O.push(w)}l&&(i[o]=O)}if((_==="object"||f)&&c&&!l){r[o]=f?[]:{};var g=c;for(var b in g)r[o][b]=g[b];n[o]=f?[]:{};var p=i[o];if(!this._isDynamic){var P={};for(var b in p)P[b]=p[b];i[o]=p=P}this._setupProperties(g,r[o],p,n[o],h)}else(typeof r[o]>"u"||h)&&(r[o]=c),f||(r[o]*=1),l?n[o]=i[o].slice().reverse():n[o]=r[o]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=v()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=v()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,r=this._chainedTweens.length;e<r;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return e===void 0&&(e=x),this._group=e,this},t.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},t.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},t.prototype.easing=function(e){return e===void 0&&(e=T.Linear.None),this._easingFunction=e,this},t.prototype.interpolation=function(e){return e===void 0&&(e=y.Linear),this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,r){if(e===void 0&&(e=v()),r===void 0&&(r=!0),this._isPaused)return!0;var i,n,h=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>h)return!1;r&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),n=(e-this._startTime)/this._duration,n=this._duration===0||n>1?1:n;var o=this._easingFunction(n);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,n),n===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var c=0,f=this._chainedTweens.length;c<f;c++)this._chainedTweens[c].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,r,i,n){for(var h in i)if(r[h]!==void 0){var o=r[h]||0,c=i[h],f=Array.isArray(e[h]),_=Array.isArray(c),l=!f&&_;l?e[h]=this._interpolationFunction(c,n):typeof c=="object"&&c?this._updateProperties(e[h],o,c,n):(c=this._handleRelativeValue(o,c),typeof c=="number"&&(e[h]=o+(c-o)*n))}},t.prototype._handleRelativeValue=function(e,r){return typeof r!="string"?r:r.charAt(0)==="+"||r.charAt(0)==="-"?e+parseFloat(r):parseFloat(r)},t.prototype._swapEndStartRepeatValues=function(e){var r=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=r},t}(),u=x;u.getAll.bind(u);u.removeAll.bind(u);u.add.bind(u);u.remove.bind(u);var z=u.update.bind(u);const D={setup(t,{expose:e}){const r=S(!1),i=k({title1:0,title2:0,title3:0,title4:0,first1:0,first2:0,first3:0,first4:0,first5:0,first6:0,first7:0,first8:0,first9:0,first10:0,first11:0,second1:0,second2:0,second3:0,second4:0,second5:0,second6:0,second7:0,second8:0,second9:0,second10:0,second11:0,third1:0,third2:0,third3:0,third4:0,third5:0,third6:0,third7:0,third8:0,third9:0,third10:0,third11:0,fourth1:0,fourth2:0,fourth3:0,fourth4:0,fourth5:0,fourth6:0,fourth7:0,fourth8:0,fourth9:0,fourth10:0,fourth11:0,author1:0,author2:0}),n=Object.keys(i);let h=null;function o(){let _=null,l=0;function p(j){return new N(i).to({...i,[j]:1},300).onComplete(()=>{l++,l<n.length&&(_=p(n[l]))}).start()}_=p("title1");let O=null;d();function d(){O=requestAnimationFrame(d),z()}return()=>{_.stop(),cancelAnimationFrame(O)}}let c=null;function f(){c=setTimeout(()=>{r.value=!0,h=o()},2e3)}return E(()=>{clearTimeout(c),h==null||h()}),e({createPorm:f}),{showPoem:r,poemTextOpacityObj:i}}},L={class:"poem"},q={class:"author"};function H(t,e,r,i,n,h){return R((I(),M("div",L,[s("h1",null,[s("span",{style:a({opacity:i.poemTextOpacityObj.title1})},"终",4),s("span",{style:a({opacity:i.poemTextOpacityObj.title2})},"南",4),s("span",{style:a({opacity:i.poemTextOpacityObj.title3})},"别",4),s("span",{style:a({opacity:i.poemTextOpacityObj.title4})},"业",4)]),s("p",null,[s("span",{style:a({opacity:i.poemTextOpacityObj.first1})},"中",4),s("span",{style:a({opacity:i.poemTextOpacityObj.first2})},"岁",4),s("span",{style:a({opacity:i.poemTextOpacityObj.first3})},"颇",4),s("span",{style:a({opacity:i.poemTextOpacityObj.first4})},"好",4),s("span",{style:a({opacity:i.poemTextOpacityObj.first5})},"道，",4),s("span",{style:a({opacity:i.poemTextOpacityObj.first6})},"晚",4),s("span",{style:a({opacity:i.poemTextOpacityObj.first7})},"家",4),s("span",{style:a({opacity:i.poemTextOpacityObj.first9})},"南",4),s("span",{style:a({opacity:i.poemTextOpacityObj.first10})},"山",4),s("span",{style:a({opacity:i.poemTextOpacityObj.first11})},"陲",4)]),s("p",null,[s("span",{style:a({opacity:i.poemTextOpacityObj.second1})},"兴",4),s("span",{style:a({opacity:i.poemTextOpacityObj.second2})},"来",4),s("span",{style:a({opacity:i.poemTextOpacityObj.second3})},"每",4),s("span",{style:a({opacity:i.poemTextOpacityObj.second4})},"独",4),s("span",{style:a({opacity:i.poemTextOpacityObj.second5})},"往，",4),s("span",{style:a({opacity:i.poemTextOpacityObj.second6})},"胜",4),s("span",{style:a({opacity:i.poemTextOpacityObj.second7})},"事",4),s("span",{style:a({opacity:i.poemTextOpacityObj.second9})},"空",4),s("span",{style:a({opacity:i.poemTextOpacityObj.second10})},"自",4),s("span",{style:a({opacity:i.poemTextOpacityObj.second11})},"知",4)]),s("p",null,[s("span",{style:a({opacity:i.poemTextOpacityObj.third1})},"行",4),s("span",{style:a({opacity:i.poemTextOpacityObj.third2})},"到",4),s("span",{style:a({opacity:i.poemTextOpacityObj.third3})},"水",4),s("span",{style:a({opacity:i.poemTextOpacityObj.third4})},"穷",4),s("span",{style:a({opacity:i.poemTextOpacityObj.third5})},"处，",4),s("span",{style:a({opacity:i.poemTextOpacityObj.third6})},"坐",4),s("span",{style:a({opacity:i.poemTextOpacityObj.third7})},"看",4),s("span",{style:a({opacity:i.poemTextOpacityObj.third9})},"云",4),s("span",{style:a({opacity:i.poemTextOpacityObj.third10})},"起",4),s("span",{style:a({opacity:i.poemTextOpacityObj.third11})},"时",4)]),s("p",null,[s("span",{style:a({opacity:i.poemTextOpacityObj.fourth1})},"偶",4),s("span",{style:a({opacity:i.poemTextOpacityObj.fourth2})},"然",4),s("span",{style:a({opacity:i.poemTextOpacityObj.fourth3})},"值",4),s("span",{style:a({opacity:i.poemTextOpacityObj.fourth4})},"林",4),s("span",{style:a({opacity:i.poemTextOpacityObj.fourth5})},"叟，",4),s("span",{style:a({opacity:i.poemTextOpacityObj.fourth6})},"谈",4),s("span",{style:a({opacity:i.poemTextOpacityObj.fourth7})},"笑",4),s("span",{style:a({opacity:i.poemTextOpacityObj.fourth9})},"无",4),s("span",{style:a({opacity:i.poemTextOpacityObj.fourth10})},"还",4),s("span",{style:a({opacity:i.poemTextOpacityObj.fourth11})},"期",4)]),s("p",q,[s("span",{style:a({opacity:i.poemTextOpacityObj.author1})},"王",4),s("span",{style:a({opacity:i.poemTextOpacityObj.author2})},"维",4)])],512)),[[m,i.showPoem]])}const G=C(D,[["render",H],["__scopeId","data-v-38a0f01c"]]),Q=""+new URL("homeBG-ba348534.jpeg",import.meta.url).href;const W={components:{Poem:G},setup(){const t=S(null);function e(){t.value.createPorm()}return{refPoem:t,loadHomeBg:e}}},J={class:"page-home page"};function K(t,e,r,i,n,h){const o=F("Poem");return I(),M("div",J,[s("img",{class:"home-bg",src:Q,alt:"",onLoad:e[0]||(e[0]=(...c)=>i.loadHomeBg&&i.loadHomeBg(...c))},null,32),A(o,{ref:"refPoem",class:"home-poem"},null,512)])}const Y=C(W,[["render",K],["__scopeId","data-v-e1193653"]]);export{Y as default};
