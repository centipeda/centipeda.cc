(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{252:function(t,e,r){var content=r(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(103).default)("71745b4b",content,!0,{sourceMap:!1})},256:function(t,e,r){"use strict";r(252)},257:function(t,e,r){var n=r(102)((function(i){return i[1]}));n.push([t.i,"body,html{height:100%;overflow-x:hidden;overflow-y:hidden;background:#000}.holder{position:relative;top:200px;left:25%}",""]),n.locals={},t.exports=n},262:function(t,e,r){"use strict";r.r(e);r(104);var n=r(22),o=(r(18),r(105),r(57),r(26),r(58),r(34),r(27),r(33),r(59),r(60),r(35),r(255));function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(d)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function d(t,e){return t-e+Math.random()*e}function f(t,e,r){var n=r*Math.PI/180;return[Math.cos(n)*(t[0]-e[0])-Math.sin(n)*(t[1]-e[1])+e[0],Math.sin(n)*(t[0]-e[0])+Math.cos(n)*(t[1]-e[1])+e[1]]}function h(t,e){var svg=document.createElementNS("http://www.w3.org/2000/svg","svg");return svg.setAttribute("height",t.toString()),svg.setAttribute("width",t.toString()),svg.setAttribute("viewBox","-10 -10 ".concat(t," ").concat(t)),svg.style.position="absolute",svg.classList.add(e),svg}function polygon(svg,t,e){var r=document.createElementNS("http://www.w3.org/2000/svg","polygon");return r.setAttribute("fill",e),r.setAttribute("points",t),r.setAttribute("stroke","black"),r.setAttribute("stroke-width","1"),svg.appendChild(r),svg}function v(t){var e=document.createElement("div");return e.style.width="".concat(t,"px"),e.style.height="".concat(t,"px"),e.style.border="1px solid black",e.style.position="absolute",e}function m(t,e){var r=t/Math.sqrt(3),n=f([r,0],[r/2,r/2],e),o=f([r,0],[r/2,r/2],e-120),c=f([r,0],[r/2,r/2],e-240);return"".concat(n[0],",").concat(n[1]," ").concat(o[0],",").concat(o[1]," ").concat(c[0],",").concat(c[1])}function y(t){var e=25+50*Math.random(),r=.6*e,l=1500*Math.random()-750,v=500*Math.random()-250;!function(t,e){var r=e.size,l=e.angle,v=e.radius,y=e.color,x=void 0===e.pos?[0,0]:e.pos,M=void 0===e.iters?10:e.iters,w=document.createElement("div");w.classList.add("jellyfish"),w.style.position="absolute",w.style.left="".concat(x[0],"px"),w.style.top="".concat(x[1],"px"),t.appendChild(w);var O=polygon(h(r,"tri"),m(r,l+45),y),j=polygon(h(r,"tri"),m(r,l+45),y),S=polygon(h(r,"tri"),m(r,l+45),y),k=polygon(h(r,"tri"),m(r,l+225),y),A=f([v,0],[0,0],l),C=Object(n.a)(A,2),I=C[0],E=C[1];O.style.left="".concat(I,"px"),O.style.top="".concat(E,"px");var Y=f([v,0],[0,0],l+240),_=Object(n.a)(Y,2),X=_[0],z=_[1];j.style.left="".concat(X,"px"),j.style.top="".concat(z,"px");var D=f([v,0],[0,0],l+120),L=Object(n.a)(D,2),T=L[0],P=L[1];S.style.left="".concat(T,"px"),S.style.top="".concat(P,"px");var F,J=[k,O,j,S],N=c(J);try{for(N.s();!(F=N.n()).done;){var s=F.value;w.appendChild(s)}}catch(t){N.e(t)}finally{N.f()}var $=0,B=0,R=0;!function t(){if(!(R>=M)){if(Math.random()<.25)if(Math.random()<.5){var e=function(t,e){return[t=(t+120)%360,e=[e[0],e[3],e[1],e[2]]]}(l,J),r=Object(n.a)(e,2);l=r[0],J=r[1]}else{var c=function(t,e){return[t=(t+240)%360,e=[e[0],e[2],e[3],e[1]]]}(l,J),h=Object(n.a)(c,2);l=h[0],J=h[1]}var v=f([45,0],[0,0],l),m=Object(n.a)(v,2),y=m[0],x=m[1],w=f([250,0],[0,0],l),O=Object(n.a)(w,2),j=O[0],S=O[1],k=f([25,0],[0,0],l),A=Object(n.a)(k,2),C=A[0],I=A[1],E=d(1500,500),Y=d(5e3,1200);Object(o.a)({targets:J,keyframes:[{translateX:function(t,e,r){var n=C;return 1===e&&(n*=.5),$-n},translateY:function(t,e,r){var n=I;return 1===e&&(n*=.5),B-n},duration:E,rotate:function(t,e,r){return 2===e?15:3===e?-15:"0deg"},scale:function(t,e,r){if(0===e)return.75},easing:"easeInOutSine"},{translateX:function(t,e,r){var n=y;return 1===e&&(n*=.9),$+n},translateY:function(t,e,r){var n=x;return 1===e&&(n*=.9),B+n},rotate:function(t,e,r){return 2===e?-15:3===e?15:"0deg"},scale:function(t,e,r){if(0===e)return 1},duration:800,easing:"easeInSine"},{translateX:$+y+j,translateY:B+x+S,duration:Y,easing:"easeOutCubic"}],complete:t}),$+=j,B+=S,R++}}()}(t,{size:e,angle:360*Math.random(),radius:r,pos:[l,v],color:"rgb(".concat(255*Math.random(),", ").concat(255*Math.random(),", ").concat(255*Math.random(),")")})}function x(t){var e=360*Math.random(),r=7+Math.floor(20*Math.random()),n=1500*Math.random()-750,c=500*Math.random()-250,l="hsl(".concat(Math.floor(360*Math.random()),", 20%, 5%)"),d="hsl(".concat(Math.floor(360*Math.random()),", 80%, 80%)"),f=600+400*Math.random();!function(t,e){for(var r=void 0===e.pos?[0,0]:e.pos,n=e.amplitude,c=e.frequency,l=e.speed,d=e.distance,f=e.angle,h=e.stretchFactor,m=e.partDistance,y=e.length,x=e.size,M=e.darkColor,w=e.lightColor,O=void 0===e.pulses?3:e.pulses,j=void 0===e.pulseTime?800:e.pulseTime,S=void 0===e.pulseSpeed?10:e.pulseDelay,k=d/(l/100),A=[],p=0;p<O;p++)A.push({value:M,duration:j,delay:o.a.stagger(S),easing:"easeInOutSine"}),A.push({value:w,duration:j,delay:o.a.stagger(S),easing:"easeInOutSine"});A.push({value:M});var C=document.createElement("div");C.classList.add("eel"),C.style.position="absolute",C.style.transform="rotate(".concat(f,"deg)"),C.style.left="".concat(r[0],"px"),C.style.top="".concat(r[1],"px"),t.appendChild(C);for(var I=[],i=0;i<y;i++){var E=v(x);E.style.left="".concat(i*m*-1,"px"),E.style.background=M,I.push(E),C.append(E)}Object(o.a)({targets:I,translateX:{value:d,easing:function(t,e,r){return function(t){return Math.max(0,t-e*h)}}},translateY:{value:2*n,easing:function(t,e,r){return function(t){return t=(t=Math.max(0,t-e*h))*Math.PI/2,Math.sin(t*c)}}},rotate:{value:5*c,easing:function(t,e,r){return function(t){return t=(t=Math.max(0,t-e*h))*Math.PI/2,n*Math.cos(t*c)/c}}},background:A,duration:k})}(t,{pos:[n,c],amplitude:25,frequency:18,speed:10,distance:2e3,angle:e,stretchFactor:.008,partDistance:3,length:r,size:25,darkColor:l,lightColor:d,pulses:Math.floor(2+5*Math.random()),pulseTime:f,pulseDelay:10})}function animate(t){for(var i=0;i<5;i++)y(t);for(var e=0;e<5;e++)x(t);!function(t,e){var r=[0,0],n=document.createElement("div");n.classList.add("pufferfish"),n.style.position="absolute",n.style.left="".concat(r[0],"px"),n.style.top="".concat(r[1],"px"),t.appendChild(n);for(var c=[],l=0;l<5;l++)for(var d=0;d<5;d++){var b=v(15);b.style.left="".concat(20*d,"px"),b.style.top="".concat(20*l,"px"),b.style.background="white",n.append(b),c.push(b)}Object(o.a)({targets:n,translateY:10,loop:!0,direction:"alternate",duration:1e3,easing:"easeInOutSine"}),Object(o.a)({targets:c,borderRadius:o.a.stagger("35%",{grid:[5,5],from:"center"}),scale:1.6,easing:"easeOutSine",translateY:[{duration:2e3,value:o.a.stagger(10,{grid:[5,5],from:"center",axis:"x"})},{duration:2e3,value:o.a.stagger(10,{grid:[5,5],from:"center",axis:"y"})},{duration:2e3,value:o.a.stagger(-10,{grid:[5,5],from:"center",axis:"x"})},{duration:2e3,value:o.a.stagger(0,{grid:[5,5],from:"center",axis:"y"})}],translateX:[{duration:2e3,value:o.a.stagger(10,{grid:[5,5],from:"center",axis:"y"})},{duration:2e3,value:o.a.stagger(0,{grid:[5,5],from:"center",axis:"y"})},{duration:2e3,value:o.a.stagger(-10,{grid:[5,5],from:"center",axis:"y"})},{duration:2e3,value:o.a.stagger(10,{grid:[5,5],from:"center",axis:"x"})}],delay:o.a.stagger(250,{grid:[5,5],from:"center"}),duration:4e3,loop:!0})}(t)}var M={head:{title:"aquarium demo"},layout:"empty",mounted:function(){animate(this.$refs.holder)}},w=(r(256),r(75)),component=Object(w.a)(M,(function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"txt"},[t._v("hello")]),t._v(" "),e("div",{ref:"holder",staticClass:"holder"})])}),[],!1,null,null,null);e.default=component.exports}}]);