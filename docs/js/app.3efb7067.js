(function(){var e={6465:function(e,t,n){"use strict";n.r(t);var r=n(8081),o=n.n(r),s=n(3645),a=n.n(s),i=a()(o());i.push([e.id,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}nav{padding:30px}nav a{font-weight:700;color:#2c3e50}nav a.router-link-exact-active{color:#42b983}img{width:100%}",""]),t["default"]=i},4792:function(e,t,n){"use strict";n.r(t);var r=n(8081),o=n.n(r),s=n(3645),a=n.n(s),i=a()(o());i.push([e.id,"h3[data-v-75d3bdc6]{margin:40px 0 0}ul[data-v-75d3bdc6]{list-style-type:none;padding:0}li[data-v-75d3bdc6]{display:inline-block;margin:0 10px}a[data-v-75d3bdc6]{color:#42b983}.title[data-v-75d3bdc6]{font-size:1.3rem;text-decoration:underline}.ruletitle[data-v-75d3bdc6]{font-size:2rem;font-weight:bolder}.rules[data-v-75d3bdc6]{font-size:1.4rem}.follow-button[data-v-75d3bdc6]{font-size:2rem}.bg-c[data-v-75d3bdc6]{background-color:#c7c7c72c;border-radius:10px;border:1px solid #4c4c4c5a}.wmann[data-v-75d3bdc6]{max-height:100px;max-width:100px;border-radius:50%}",""]),t["default"]=i},4296:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(9963),o=(n(560),n(6252)),s=n.p+"img/wegners.0a8f24c7.gif";function a(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("img",{alt:"Vue logo",onClick:t[0]||(t[0]=t=>e.$router.push("/")),src:s}),(0,o.Wm)(n)],64)}n(7775);var i=n(3744);const l={},c=(0,i.Z)(l,[["render",a]]);var u=c,d=n(5205);(0,d.z)("/wegnersweihnachtswichteln/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=n(2201);const g={class:"home"};function v(e,t,n,r,s,a){const i=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.iD)("div",g,[(0,o.Wm)(i,{msg:"Alle Informationen zum Wichteln findest du hier."})])}var h=n(3577),p=n(770);const w=e=>((0,o.dD)("data-v-75d3bdc6"),e=e(),(0,o.Cn)(),e),m={class:"hello"},x={class:"title mt-3"},b=(0,o.uE)('<div class="rules mx-3 mt-3" data-v-75d3bdc6><p class="ruletitle" data-v-75d3bdc6>Regelwerk für Wichteln</p><p class="ruleone" data-v-75d3bdc6>1. Keiner verrät wer für wen wichtelt!</p><p class="ruleone" data-v-75d3bdc6> 2. Jeder Wichtel sollte sich für den Kauf von Geschenken in ein Ladengeschäft begeben! (Sollte das absolut nicht möglich sein kann natürlich auch übers Internet bestellt werden) </p><p class="ruleone" data-v-75d3bdc6> 3. Der Wert darf den Gesamtbetrag von 30€ nicht überschreiten, dabei ist die Anzahl der Geschenke unrelevant! </p><p class="ruleone" data-v-75d3bdc6> 4. Die Wichtelgeschenke sollten so ausgesucht werden das der zu Beschenkende diese auch gut nutzen kann. </p></div>',1),k={key:0},C={class:"alert alert-danger d-flex m-2",role:"alert"},E=w((()=>(0,o._)("img",{alt:"",class:"wmann",src:p},null,-1))),y={class:"form-check d-flex p-5 m-2 bg-c"},z=w((()=>(0,o._)("label",{class:"form-check-label",for:"flexCheckDefault"}," Ich habe die Regeln verstanden und bin damit einverstanden, dass ich bei Nichteinhaltung die Rute vom Weihnachtsmann zu spüren bekomme. 😀 ",-1)));function M(e,t,n,s,a,i){return(0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("div",x,(0,h.zw)(e.msg),1),b,e.myerror?((0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("div",C,[(0,o.Uk)((0,h.zw)(e.myerror)+" ",1),E])])):(0,o.kq)("",!0),(0,o._)("div",y,[(0,o.wy)((0,o._)("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[0]||(t[0]=t=>e.checked=t)},null,512),[[r.e8,e.checked]]),z]),(0,o._)("div",{class:"btn btn-dark my-5 follow-button",onClick:t[1]||(t[1]=t=>e.weiterzurauslosung())}," Weiter zu Auslosung ")])}n(9355);var B=(0,o.aZ)({name:"HelloWorld",props:{msg:String},data(){return{checked:!1,myerror:""}},methods:{weiterzurauslosung(){1==this.checked?this.$router.push("/auslosung"):this.myerror="Du hast die Regeln nicht akzeptiert! Das solltest du lieber tun der Weihnachtsmann sieht Alles!"}}});n(1356);const j=(0,i.Z)(B,[["render",M],["__scopeId","data-v-75d3bdc6"]]);var _=j,A=(0,o.aZ)({name:"HomeView",components:{HelloWorld:_}});const O=(0,i.Z)(A,[["render",v]]);var L=O;const W=[{path:"/",name:"home",component:L},{path:"/auslosung",name:"about",component:()=>n.e(443).then(n.bind(n,3830))}],D=(0,f.p7)({history:(0,f.r5)(),routes:W});var S=D,I=(n(5886),n(8877),n(3977)),Z=n(6100);const N={apiKey:"AIzaSyAy8QiMJXYuRYxeLbRdtpOaadWNk2p0VR0",authDomain:"wegners-weihnachtswichteln.firebaseapp.com",projectId:"wegners-weihnachtswichteln",storageBucket:"wegners-weihnachtswichteln.appspot.com",messagingSenderId:"877242643232",appId:"1:877242643232:web:4f67d714b80c2d679d5d45"},R=((0,I.ZF)(N),(0,Z.ad)());var T=R;(0,r.ri)(u).use(S).mount("#app")},7775:function(e,t,n){var r=n(6465);r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);var o=n(4402).Z;o("c1a0bcfc",r,!0,{sourceMap:!1,shadowMode:!1})},1356:function(e,t,n){var r=n(4792);r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);var o=n(4402).Z;o("d236ee12",r,!0,{sourceMap:!1,shadowMode:!1})},8709:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3E%3Ccircle r=%272%27 fill=%27%23fff%27/%3E%3C/svg%3E"},1403:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3E%3Ccircle r=%273%27 fill=%27%2386b7fe%27/%3E%3C/svg%3E"},5832:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3E%3Ccircle r=%273%27 fill=%27%23fff%27/%3E%3C/svg%3E"},4213:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3E%3Ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3E%3C/svg%3E"},4160:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3E%3Ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3E%3C/svg%3E"},9474:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23052c65%27%3E%3Cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3E%3C/svg%3E"},3598:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3E%3Cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3E%3C/svg%3E"},5996:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3E%3Cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3E%3C/svg%3E"},3585:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3E%3Cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3E%3C/svg%3E"},3084:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3E%3Cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3E%3C/svg%3E"},3221:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3E%3C/svg%3E"},7389:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3E%3Cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3E%3C/svg%3E"},817:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3E%3Cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3E%3C/svg%3E"},388:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3E%3Cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3E%3C/svg%3E"},5322:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3E%3Cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3E%3C/svg%3E"},138:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3E%3Cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3E%3C/svg%3E"},4141:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3E%3Cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3E%3C/svg%3E"},185:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3E%3Cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3E%3C/svg%3E"},6708:function(e){"use strict";e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3E%3Ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3E%3Cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3E%3Ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3E%3C/svg%3E"},770:function(e,t,n){"use strict";e.exports=n.p+"img/weihnachtsmann.2ae44475.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,s){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],s=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.ccf51ba1.js"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="zufallsgenerator:";n.l=function(r,o,s,a){if(e[r])e[r].push(o);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+s){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+s),i.src=r),e[r]=[o];var f=function(t,n){i.onerror=i.onload=null,clearTimeout(g);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/wegnersweihnachtswichteln/"}(),function(){n.b=document.baseURI||self.location.href;var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var s=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=s);var a=n.p+n.u(t),i=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var s=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,o[1](i)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,s,a=r[0],i=r[1],l=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var u=l(n)}for(t&&t(r);c<a.length;c++)s=a[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},r=self["webpackChunkzufallsgenerator"]=self["webpackChunkzufallsgenerator"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4296)}));r=n.O(r)})();
//# sourceMappingURL=app.3efb7067.js.map