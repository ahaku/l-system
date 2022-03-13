var j=Object.defineProperty,V=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var X=(t,e,a)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))K.call(e,a)&&X(t,a,e[a]);if(S)for(var a of S(e))$.call(e,a)&&X(t,a,e[a]);return t},w=(t,e)=>V(t,H(e));var u=(t,e,a)=>(X(t,typeof e!="symbol"?e+"":e,a),a);import{V as h,S as J,C as Q,P as U,O as Z,W as _,L as ee,B as te,a as ae}from"./vendor.c224f0a2.js";const se=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}};se();const g=t=>t*(Math.PI/180);class C{constructor(){u(this,"lineLength");u(this,"angle");u(this,"angleDelta");u(this,"lastPos");u(this,"positionsStack");u(this,"anglesStack");u(this,"points");this.lineLength=.1,this.angle=90,this.angleDelta=25,this.lastPos=new h(0,0),this.positionsStack=[],this.anglesStack=[],this.points=[]}static getCodeString(e,a,i){let s=a;for(let n=0;n<i;n++){let o="";for(let F=0;F<s.length;F++)o+=e[s[F]]||s[F];s=o}return s}resetRenderVariables(){this.angle=90,this.lastPos=new h(0,0),this.positionsStack=[],this.anglesStack=[],this.points=[]}getPoints(e,a){this.resetRenderVariables(),this.angleDelta=a;for(const i of e)switch(i){case"A":case"F":case"G":this.points.push(this.lastPos);const s=this.lastPos.x+Math.cos(g(this.angle))*this.lineLength,n=this.lastPos.y+Math.sin(g(this.angle))*this.lineLength,o=new h(s,n);this.points.push(o),this.lastPos=o;break;case"B":const F=this.lastPos.x+Math.cos(g(this.angle))*this.lineLength,p=this.lastPos.y+Math.sin(g(this.angle))*this.lineLength;this.lastPos=new h(F,p);break;case"-":this.angle+=this.angleDelta;break;case"+":this.angle-=this.angleDelta;break;case"[":this.positionsStack.push(this.lastPos),this.anglesStack.push(this.angle);break;case"]":const N=this.anglesStack.pop();this.angle=N;const W=this.positionsStack.pop();this.lastPos=W;break}return this.points}}const ne={tree:"Fractal Tree",dragonCurve:"Dragon Curve",serpinskiTriangle:"Serpinski Triangle",serpinskiTriangleApproximate:"Serpinski Triangle (Approximate)",serpinskiCurve:"Serpinski Curve",serpinskiCarpet:"Serpinski Carpet",kochCurve:"Koch Curve",kochSnowflake:"Koch Snowflake",iceFractal:"Ice Fractal",gosperCurve:"Gosper Curve",hilbertCurve:"Hilbert Curve",squareCarpet:"Square Carpet",plant1:"A Plant (Type 1)",plant2:"A Plant (Type 2)",plant3:"A Plant (Type 3)",boxFractal:"Box Fractal",mosaic:"Mosaic",levyCurve:"Levy C curve",pentigree:"McWorter's Pentigree",border:"McWorter's Border",mazeAndFractal:"McWorter's Maze and Fractal",moore:"McWorter's Moore",doily:"Adrian Mariano Doily"},ie={values:{axiom:"X",iterations:6,angleDelta:25},rules:{X:"F-[[X]+X]+F[+FX]-X",F:"FF"}},oe={values:{axiom:"XY",iterations:10,angleDelta:90},rules:{X:"X+YF+",Y:"-FX-Y"}},re={values:{axiom:"F-G-G",iterations:6,angleDelta:120},rules:{F:"F-G+F+G-F",G:"GG"}},le={values:{axiom:"F",iterations:6,angleDelta:60},rules:{F:"G-F-G",G:"F+G+F"}},ce={values:{axiom:"F+XF+F+XF",iterations:5,angleDelta:90},rules:{X:"XF-F+F-XF+F+XF-F+F-X"}},Fe={values:{axiom:"F",iterations:5,angleDelta:90},rules:{F:"FFF[+FFF+FFF+FFF]"}},ue={values:{axiom:"F",iterations:5,angleDelta:90},rules:{F:"F+F-F-F+F"}},de={values:{axiom:"F++F++F",iterations:5,angleDelta:60},rules:{F:"F-F++F-F"}},me={values:{axiom:"F+F+F+F",iterations:5,angleDelta:90},rules:{F:"FF+F++F+F"}},pe={values:{axiom:"XF",iterations:4,angleDelta:60},rules:{X:"X+YF++YF-FX--FXFX-YF+",Y:"-FX+YFYF++YF+FX--FX-Y"}},he={values:{axiom:"X",iterations:5,angleDelta:90},rules:{X:"-YF+XFX+FY-",Y:"+XF-YFY-FX+"}},ge={values:{axiom:"F+F+F+F",iterations:5,angleDelta:90},rules:{F:"FF+F+F+F+FF"}},ve={values:{axiom:"Y",iterations:7,angleDelta:25},rules:{X:"X[-FFF][+FFF]FX",Y:"YFX[+Y][-Y]"}},Xe={values:{axiom:"F",iterations:4,angleDelta:22},rules:{F:"FF+[+F-F-F]-[-F+F+F]"}},fe={values:{axiom:"F",iterations:4,angleDelta:30},rules:{F:"F[+FF][-FF]F[-F][+F]F"}},De={values:{axiom:"F-F-F-F",iterations:4,angleDelta:90},rules:{F:"F-F+F+F-F"}},ye={values:{axiom:"F-F-F-F",iterations:2,angleDelta:90},rules:{F:"F-B+FF-F-FF-FB-FF+B-FF+F+FF+FB+FFF",B:"BBBBBB"}},be={values:{axiom:"F++F++F++F",iterations:12,angleDelta:45},rules:{F:"-F++F-"}},Ye={values:{axiom:"F-F-F-F-F",iterations:4,angleDelta:72},rules:{F:"F-F++F+F-F-F"}},xe={values:{axiom:"XYXYXYX+XYXYXYX+XYXYXYX+XYXYXYX",iterations:4,angleDelta:90},rules:{X:"FX+FX+FXFY-FY-",Y:"+FX+FXFY-FY-FY"}},Se={values:{axiom:"X",iterations:8,angleDelta:120},rules:{X:"FY+FYFY-FY",Y:"FX-FXFX+FX"}},ke={values:{axiom:"X",iterations:5,angleDelta:90},rules:{X:"FX+FX+FXFYFX+FXFY-FY-FY-",Y:"+FX+FX+FXFY-FYFXFY-FY-FY"}},we={values:{axiom:"F--F--F--F--F--F",iterations:4,angleDelta:30},rules:{F:"-F[--F--F]++F--F+"}},L={tree:ie,dragonCurve:oe,serpinskiTriangle:re,serpinskiTriangleApproximate:le,serpinskiCurve:ce,serpinskiCarpet:Fe,kochCurve:ue,kochSnowflake:de,iceFractal:me,gosperCurve:pe,hilbertCurve:he,squareCarpet:ge,plant1:ve,plant2:Xe,plant3:fe,boxFractal:De,mosaic:ye,levyCurve:be,pentigree:Ye,border:xe,mazeAndFractal:Se,moore:ke,doily:we},Ce=()=>{const t=document.querySelector("[name^=type-select]");Object.entries(ne).forEach(([e,a])=>{const i=document.createElement("option");i.value=e,i.text=a,t.appendChild(i)}),t.value="tree"},Le=()=>{const t=document.querySelectorAll("[name^=rule]"),e=document.querySelectorAll("[for^=rule]");t.forEach(a=>{a.remove()}),e.forEach(a=>{a.remove()})},P=t=>{Be(L[t].values),Pe(L[t].rules)},Pe=t=>{Le();const e=document.querySelector(".form");Object.entries(t).forEach(([a,i])=>{const s=document.createElement("label");s.setAttribute("for",`rule${a}`),s.innerHTML=`${a}:`;const n=document.createElement("input");n.setAttribute("name",`rule${a}`),n.setAttribute("value",i),n.setAttribute("type","text"),n.addEventListener("keyup",B),e.insertBefore(s,e.children[e.children.length-1]),e.insertBefore(n,e.children[e.children.length-1])})},Be=t=>{Object.entries(t).forEach(([e,a])=>{const i=document.forms.LSystem;i&&(i[e].value=a)})};function B(){this.value=this.value.replace(/[^ABFGXY\-\+\[\]]/gi,"")}const A=new C;let v=!1;const M=document.querySelector("canvas.webgl"),q=document.querySelector("[name^=type-select]"),f=document.querySelector(".sidebar"),D=document.querySelector(".show-sidebar-btn"),y=document.querySelector("[class*=pin-btn]"),Ae=document.querySelector("[name=axiom]");Ae.addEventListener("keyup",B);const G=t=>{v||f.contains(t.target)||(f.classList.remove("visible"),D.classList.add("visible"))};document.addEventListener("mousedown",G);document.addEventListener("touchstart",G);D.onclick=()=>{f.classList.add("visible"),D.classList.remove("visible")};y.onclick=()=>{v=!v,v?y.classList.add("active"):y.classList.remove("active")};Ce();const Me=document.querySelector(".form");q.onchange=t=>{const{value:e}=t.target;P(e),x()};Me.onsubmit=t=>{t.preventDefault(),x()};const d=new J;d.background=new Q(16777215);const r={width:window.innerWidth,height:window.innerHeight},c=new U(75,r.width/r.height,.1,1500);c.position.z=10;d.add(c);const E=new Z(c,M),m=new _({canvas:M});m.setSize(r.width,r.height);m.setPixelRatio(Math.min(window.devicePixelRatio,2));window.addEventListener("resize",()=>{r.width=window.innerWidth,r.height=window.innerHeight,c.aspect=r.width/r.height,c.updateProjectionMatrix(),m.setSize(r.width,r.height),m.setPixelRatio(Math.min(window.devicePixelRatio,2))});let T=null,O=null,z=null,R=null,b=null,Y=null,l=null;const qe=()=>{l!==null&&(A.resetRenderVariables(),b.dispose(),Y.dispose(),d.remove(l));const t=C.getCodeString(O,T,z),e=A.getPoints(t,R);Y=new ee({color:"#212121"}),b=new te().setFromPoints(e),l=new ae(b,Y),l.geometry.computeBoundingSphere(),l.geometry.computeBoundingBox(),E.target.copy(l.geometry.boundingSphere.center);const{min:a,max:i}=l.geometry.boundingBox,s=Math.max(Math.abs(a.x-i.x),Math.abs(a.y-i.y));c.position.x=l.geometry.boundingSphere.center.x,c.position.y=l.geometry.boundingSphere.center.y,c.position.z=s*.7,d.add(l)};function x(){const t=new FormData(document.forms.LSystem);if(t){const e=t.get("axiom"),a=t.get("iterations"),i=t.get("angleDelta");O=Array.from(t.entries()).filter(([n])=>n.startsWith("rule")).reduce((n,[o,F])=>{const p=o[o.length-1];return w(k({},n),{[p]:F})},{}),z=Number(a),T=e,R=Number(i),qe()}}P(q.value);x();const I=()=>{E.update(),m.render(d,c),requestAnimationFrame(I)};I();