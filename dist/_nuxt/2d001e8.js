(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{252:function(t,e,o){var content=o(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(103).default)("3bc05d49",content,!0,{sourceMap:!1})},256:function(t,e,o){"use strict";o(252)},257:function(t,e,o){var n=o(102)((function(i){return i[1]}));n.push([t.i,"body,html{height:100%;overflow-x:hidden;overflow-y:hidden}.holder{position:relative;top:200px;left:50%}",""]),n.locals={},t.exports=n},262:function(t,e,o){"use strict";o.r(e);o(104);var n=o(22),r=(o(18),o(105),o(255));function c(t,e){return t-e+Math.random()*e}function l(t,e,o){var n=o*Math.PI/180;return[Math.cos(n)*(t[0]-e[0])-Math.sin(n)*(t[1]-e[1])+e[0],Math.sin(n)*(t[0]-e[0])+Math.cos(n)*(t[1]-e[1])+e[1]]}function d(t,e){var svg=document.createElementNS("http://www.w3.org/2000/svg","svg");return svg.setAttribute("height",t.toString()),svg.setAttribute("width",t.toString()),svg.setAttribute("viewBox","-10 -10 ".concat(t," ").concat(t)),svg.style.position="absolute",svg.classList.add(e),svg}function polygon(svg,t,e){var o=document.createElementNS("http://www.w3.org/2000/svg","polygon");return o.setAttribute("fill",e),o.setAttribute("points",t),o.setAttribute("stroke","black"),o.setAttribute("stroke-width","1"),svg.appendChild(o),svg}function h(t,e){var o=t/Math.sqrt(3),n=l([o,0],[o/2,o/2],e),r=l([o,0],[o/2,o/2],e-120),c=l([o,0],[o/2,o/2],e-240);return"".concat(n[0],",").concat(n[1]," ").concat(r[0],",").concat(r[1]," ").concat(c[0],",").concat(c[1])}function f(t,e){var o=e.size,f=e.angle,v=e.radius,y=e.color,m=void 0===e.pos?[0,0]:e.pos,w=void 0===e.iters?10:e.iters,M=void 0===e.delay?0:e.delay;console.log(m);var x=document.createElement("div");x.classList.add("jellyfish"),x.style.position="absolute",x.style.left="".concat(m[0],"px"),x.style.top="".concat(m[1],"px"),t.appendChild(x);var j=polygon(d(o,"tri"),h(o,f+45),y),O=polygon(d(o,"tri"),h(o,f+45),y),A=polygon(d(o,"tri"),h(o,f+45),y),k=polygon(d(o,"tri"),h(o,f+225),y),_=l([v,0],[0,0],f),C=Object(n.a)(_,2),S=C[0],E=C[1];j.style.left="".concat(S,"px"),j.style.top="".concat(E,"px");var z=l([v,0],[0,0],f+240),J=Object(n.a)(z,2),L=J[0],N=J[1];O.style.left="".concat(L,"px"),O.style.top="".concat(N,"px");var X=l([v,0],[0,0],f+120),Y=Object(n.a)(X,2),B=Y[0],I=Y[1];A.style.left="".concat(B,"px"),A.style.top="".concat(I,"px");for(var P=[j,k,O,A],$=0,D=P;$<D.length;$++){var s=D[$];x.appendChild(s)}var F=l([100,0],[0,0],f),G=Object(n.a)(F,2),H=G[0],K=G[1],Q=l([25,0],[0,0],f),R=Object(n.a)(Q,2),T=R[0],U=R[1],V=0,W=0,Z=0,tt=M;!function t(){if(!(Z>=w)){Z>0&&(tt=0),V+=H,W+=K,Z++;var e=c(25,18.75),o=c(45,33.75),n=c(45,33.75);Object(r.a)({targets:P,keyframes:[{translateX:V-H-T,translateY:W-K-U,duration:c(1e3,500),easing:"easeOutSine"},{translateX:V,translateY:W,duration:c(1e4,10),easing:"spring(".concat(e,", ").concat(o,", ").concat(n,", ").concat(0,")")}],complete:t,delay:r.a.stagger(50,{start:tt+3e3*Math.random()})})}}()}var v={layout:"empty",mounted:function(){(function(t){for(var i=0;i<30;i++){var e=25+50*Math.random(),o=.6*e,n=1500*Math.random()-750,r=500*Math.random()-250;f(t,{size:e,angle:360*Math.random(),radius:o,pos:[n,r],color:"rgb(".concat(255*Math.random(),", ").concat(255*Math.random(),", ").concat(255*Math.random(),")")})}})(this.$refs.holder)}},y=(o(256),o(75)),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"txt"},[t._v("hello")]),t._v(" "),e("div",{ref:"holder",staticClass:"holder"})])}),[],!1,null,null,null);e.default=component.exports}}]);