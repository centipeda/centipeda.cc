(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{260:function(t,r,e){"use strict";e.d(r,"b",(function(){return x})),e.d(r,"a",(function(){return w})),e.d(r,"c",(function(){return M}));var n=e(22),o=(e(18),e(105),e(104),e(57),e(26),e(58),e(34),e(27),e(33),e(59),e(60),e(35),e(262));function c(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return l(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==e.return||e.return()}finally{if(f)throw o}}}}function l(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,e=new Array(r);i<r;i++)e[i]=t[i];return e}function f(t,r){return void 0===t?r:t}function d(t,r){return t-r+Math.random()*r}function v(t,r,e){var n=e*Math.PI/180;return[Math.cos(n)*(t[0]-r[0])-Math.sin(n)*(t[1]-r[1])+r[0],Math.sin(n)*(t[0]-r[0])+Math.cos(n)*(t[1]-r[1])+r[1]]}function h(t,r){var svg=document.createElementNS("http://www.w3.org/2000/svg","svg");return svg.setAttribute("height",t.toString()),svg.setAttribute("width",t.toString()),svg.setAttribute("viewBox","-10 -10 ".concat(t," ").concat(t)),svg.style.position="absolute",svg.classList.add(r),svg}function polygon(svg,t,r){var e=document.createElementNS("http://www.w3.org/2000/svg","polygon");return e.setAttribute("fill",r),e.setAttribute("points",t),e.setAttribute("stroke","black"),e.setAttribute("stroke-width","1"),svg.appendChild(e),svg}function m(t){var r=document.createElement("div");return r.style.width="".concat(t,"px"),r.style.height="".concat(t,"px"),r.style.border="1px solid black",r.style.position="absolute",r}function y(t,r){var e=t/Math.sqrt(3),n=v([e,0],[e/2,e/2],r),o=v([e,0],[e/2,e/2],r-120),c=v([e,0],[e/2,e/2],r-240);return"".concat(n[0],",").concat(n[1]," ").concat(o[0],",").concat(o[1]," ").concat(c[0],",").concat(c[1])}function x(t,r){var e=r.size,l=r.angle,m=r.radius,x=r.color,w=f(r.pos,[0,0]),M=f(r.iters,10),k=document.createElement("div");k.classList.add("jellyfish"),k.style.position="absolute",k.style.left="".concat(w[0],"px"),k.style.top="".concat(w[1],"px"),t.appendChild(k);var O=polygon(h(e,"tri"),y(e,l+45),x),j=polygon(h(e,"tri"),y(e,l+45),x),S=polygon(h(e,"tri"),y(e,l+45),x),C=polygon(h(e,"tri"),y(e,l+225),x),A=v([m,0],[0,0],l),I=Object(n.a)(A,2),z=I[0],_=I[1];O.style.left="".concat(z,"px"),O.style.top="".concat(_,"px");var E=v([m,0],[0,0],l+240),P=Object(n.a)(E,2),Y=P[0],T=P[1];j.style.left="".concat(Y,"px"),j.style.top="".concat(T,"px");var X=v([m,0],[0,0],l+120),L=Object(n.a)(X,2),D=L[0],N=L[1];S.style.left="".concat(D,"px"),S.style.top="".concat(N,"px");var F,J=[C,O,j,S],$=c(J);try{for($.s();!(F=$.n()).done;){var s=F.value;k.appendChild(s)}}catch(t){$.e(t)}finally{$.f()}var B=0,H=0,R=0;return function t(){if(!(R>=M)){if(Math.random()<.25)if(Math.random()<.5){var r=function(t,r){return[t=(t+120)%360,r=[r[0],r[3],r[1],r[2]]]}(l,J),e=Object(n.a)(r,2);l=e[0],J=e[1]}else{var c=function(t,r){return[t=(t+240)%360,r=[r[0],r[2],r[3],r[1]]]}(l,J),f=Object(n.a)(c,2);l=f[0],J=f[1]}var h=v([45,0],[0,0],l),m=Object(n.a)(h,2),y=m[0],x=m[1],w=v([250,0],[0,0],l),k=Object(n.a)(w,2),O=k[0],j=k[1],S=v([25,0],[0,0],l),C=Object(n.a)(S,2),A=C[0],I=C[1],z=d(1500,500),_=d(5e3,1200);Object(o.a)({targets:J,keyframes:[{translateX:function(t,r,e){var n=A;return 1===r&&(n*=.5),B-n},translateY:function(t,r,e){var n=I;return 1===r&&(n*=.5),H-n},duration:z,rotate:function(t,r,e){return 2===r?15:3===r?-15:"0deg"},scale:function(t,r,e){if(0===r)return.75},easing:"easeInOutSine"},{translateX:function(t,r,e){var n=y;return 1===r&&(n*=.9),B+n},translateY:function(t,r,e){var n=x;return 1===r&&(n*=.9),H+n},rotate:function(t,r,e){return 2===r?-15:3===r?15:"0deg"},scale:function(t,r,e){if(0===r)return 1},duration:800,easing:"easeInSine"},{translateX:B+y+O,translateY:H+x+j,duration:_,easing:"easeOutCubic"}],complete:t}),B+=O,H+=j,R++}}(),k}function w(t,r){for(var e=void 0===r.pos?[0,0]:r.pos,n=r.amplitude,c=r.frequency,l=r.speed,d=r.distance,v=r.angle,h=r.stretchFactor,y=r.partDistance,x=r.length,w=r.size,M=r.darkColor,k=r.lightColor,O=f(r.pulses,3),j=f(r.pulseTime,800),S=f(r.pulseSpeed,10),C=d/(l/100),A=[],p=0;p<O;p++)A.push({value:M,duration:j,delay:o.a.stagger(S),easing:"easeInOutSine"}),A.push({value:k,duration:j,delay:o.a.stagger(S),easing:"easeInOutSine"});A.push({value:M});var I=document.createElement("div");I.classList.add("eel"),I.style.position="absolute",I.style.transform="rotate(".concat(v,"deg)"),I.style.left="".concat(e[0],"px"),I.style.top="".concat(e[1],"px"),t.appendChild(I);for(var z=[],i=0;i<x;i++){var _=m(w);_.style.left="".concat(i*y*-1,"px"),_.style.background=M,z.push(_),I.append(_)}return Object(o.a)({targets:z,translateX:{value:d,easing:function(t,r,e){return function(t){return Math.max(0,t-r*h)}}},translateY:{value:2*n,easing:function(t,r,e){return function(t){return t=(t=Math.max(0,t-r*h))*Math.PI/2,Math.sin(t*c)}}},rotate:{value:5*c,easing:function(t,r,e){return function(t){return t=(t=Math.max(0,t-r*h))*Math.PI/2,n*Math.cos(t*c)/c}}},background:A,duration:C}),I}function M(t,r){var e=f(r.pos,[0,0]),n=r.size,c=r.units,l=n+1,d=f(r.rotation,360),v=f(r.expansion,5),h=f(r.duration,2e4),y=f(r.stagger,500),x=f(r.colors,["#ffffff"]),w=f(r.revolutionTime,3e4),M=f(r.revolution,360),k=document.createElement("div");k.classList.add("pufferfish"),k.style.position="absolute",k.style.width="".concat(n+l*(c-1),"px"),k.style.height="".concat(n+l*(c-1),"px"),k.style.left="".concat(e[0],"px"),k.style.top="".concat(e[1],"px"),k.style.transformOrigin="center",t.appendChild(k);for(var O=[],j=0;j<c;j++)for(var S=0;S<c;S++){var b=m(n);b.style.left="".concat(S*l,"px"),b.style.top="".concat(j*l,"px"),b.style.background="white",k.append(b),O.push(b)}return Object(o.a)({targets:k,rotate:M,duration:w,easing:"linear",loop:!0}),Object(o.a)({targets:O,rotate:[o.a.stagger(d,{grid:[c,c],from:"center"}),o.a.stagger(0,{grid:[c,c],from:"center"}),o.a.stagger(d,{grid:[c,c],from:"center"})],translateX:[o.a.stagger(v,{grid:[c,c],from:"center",axis:"x"}),o.a.stagger(0,{grid:[c,c],from:"center",axis:"x"}),o.a.stagger(v,{grid:[c,c],from:"center",axis:"x"})],translateY:[o.a.stagger(v,{grid:[c,c],from:"center",axis:"y"}),o.a.stagger(0,{grid:[c,c],from:"center",axis:"y"}),o.a.stagger(v,{grid:[c,c],from:"center",axis:"y"})],borderRadius:[o.a.stagger("50%",{grid:[c,c],from:"center"}),o.a.stagger("0%",{grid:[c,c],from:"center"}),o.a.stagger("50%",{grid:[c,c],from:"center"})],background:x,delay:o.a.stagger(y,{grid:[c,c],from:"center"}),easing:"linear",duration:h,direction:"alternate",loop:!0}),k}},261:function(t,r,e){"use strict";e.d(r,"e",(function(){return o})),e.d(r,"b",(function(){return c})),e.d(r,"f",(function(){return l})),e.d(r,"g",(function(){return f})),e.d(r,"d",(function(){return d})),e.d(r,"h",(function(){return v})),e.d(r,"a",(function(){return h})),e.d(r,"c",(function(){return m}));var n=e(22);e(104);function o(t,r){return Math.floor(t+Math.random()*(r-t))}function c(t,r){return Math.floor(t+Math.random()*(r-t))}function l(t,r){return[-t/2+Math.random()*t,-r/2+Math.random()*r]}function f(t,r,e,o){var c=l(t,r),f=Object(n.a)(c,2);return[e+f[0],o+f[1]]}function d(s,t){return"hsl(".concat(Math.floor(360*Math.random()),", ").concat(s,"%, ").concat(t,"%)")}function v(){var t=255*Math.random(),g=255*Math.random(),b=255*Math.random();return"rgba(".concat(t,", ").concat(g,", ").concat(b,", 1)")}function h(){return c(0,360)}function m(){return Math.random()<.5?-1:1}},264:function(t,r,e){var content=e(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(103).default)("cc4b02f4",content,!0,{sourceMap:!1})},268:function(t,r,e){"use strict";e(264)},269:function(t,r,e){var n=e(102)((function(i){return i[1]}));n.push([t.i,':root{--content-bg-color:#adc0d2;--content-link-color:#1569b7;--content-txt-color:#000;--bg-main-color:#020024;--sky-color:#96d4fd;--surface-color:#000;--shallow-color:#053b99;--deep-color:#303082;--sky-portion:75%;--deep-portion:30%;--border-portion:calc(var(--sky-portion) - 0.25%)}a{color:var(--content-link-color)}a:hover{text-decoration-line:underline}body,html{font-family:"Source Sans Pro";overflow:auto}.bg{background:var(--bg-main-color);overflow:hidden}.aquarium-upper{z-index:101;height:50vh;background:linear-gradient(0deg,var(--bg-main-color),var(--deep-color) var(--deep-portion),var(--shallow-color) var(--border-portion),var(--surface-color) var(--border-portion),var(--surface-color) var(--sky-portion),var(--sky-color) var(--sky-portion),var(--sky-color))}.aquarium-container{height:100vh;z-index:50;display:flex;position:relative;overflow:hidden}.serif-font{font-family:"Source Serif Pro"}.mono-font{font-family:"Source Code Pro"}.content{background-color:var(--content-bg-color);color:var(--content-txt-color);border:3px solid #000;z-index:100}.content-outer{width:100%;position:absolute}.navbar{border:1px solid #000}.nav-item{transition:.05s}.nav-item:hover{color:var(--content-bg-color);background-color:var(--content-txt-color)}.footer{width:10px;margin-left:auto;margin-right:auto;text-align:center;bottom:0;transform:translateY(-25px);height:0;color:#add8e6}',""]),n.locals={},t.exports=n},275:function(t,r,e){"use strict";e.r(r);e(61);var n=e(260),o=e(261);function c(t){return o.g(500,500,t.offsetWidth/2,t.offsetHeight/2)}function l(t){for(var r=[],i=0;i<5;i++)e();function e(){if(r.length>20&&(r[0].remove(),r.shift()),Math.random()<.5){var e,l=3*Math.random();l<1?e=function(t){var r=o.b(20,30),e=.6*r;return Object(n.b)(t,{size:r,angle:o.a(),radius:e,pos:c(t),color:o.h()})}(t):l>1&&l<2?e=function(t){return Object(n.a)(t,{pos:c(t),amplitude:25,frequency:18,speed:10,distance:2e3,angle:o.a(),stretchFactor:.008,partDistance:2,length:o.e(7,30),size:15,darkColor:o.d(20,5),lightColor:o.d(80,80),pulses:o.e(2,7),pulseTime:o.b(600,1e3),pulseDelay:10})}(t):l>2&&l<3&&(e=function(t){return Object(n.c)(t,{pos:c(t),size:o.b(7,15),units:o.e(3,7),rotation:o.b(180,480),expansion:o.b(5,10),duration:o.b(1e4,4e4),revolutionTime:o.b(5e3,3e4),revolution:360*o.c(),stagger:500,colors:["rgba(0, 0, 0, 0)",o.h(),o.h(),o.h(),"rgba(0, 0, 0, 0)"]})}(t)),r.push(e)}}setInterval(e,6e3)}var f={mounted:function(){l(this.$refs.container)},data:function(){return{page:"default"}}},d=(e(268),e(75)),component=Object(d.a)(f,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"bg"},[r("div",{staticClass:"content-outer flex justify-center"},[r("div",{staticClass:"content sm:w-10/12 md:w-2/3 lg:w-7/12 xl:w-5/12 min-h-screen px-2 md:px-10 my-10"},[r("Nuxt")],1)]),t._v(" "),r("div",{staticClass:"aquarium-upper"}),t._v(" "),r("div",{ref:"container",staticClass:"aquarium-container"}),t._v(" "),r("div",{staticClass:"footer text-xs"},[t._v(";)")])])}),[],!1,null,null,null);r.default=component.exports}}]);