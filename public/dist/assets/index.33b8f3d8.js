import{r as e,o as a,c as t,i as s,p as l,a as n,b as o,d as r,e as i,F as m,f as d,w as A,g as c,u as p,h as u,t as g,j as y,v,k as f,l as k,m as h,n as I,C,q as E,s as G,x as R}from"./vendor.c5346808.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const s=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,n)=>{const o=new URL(e,s);if(self[a].moduleMap[o])return t(self[a].moduleMap[o]);const r=new Blob([`import * as m from '${o}';`,`${a}.moduleMap['${o}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){n(new Error(`Failed to import: ${e}`)),l(i)},onload(){t(self[a].moduleMap[o]),l(i)}});document.head.appendChild(i)})),self[a].moduleMap={}}}("/assets/");null==localStorage.getItem("runningGames")&&localStorage.setItem("runningGames","[]");let w=JSON.parse(localStorage.getItem("runningGames"));w.length>5&&(w.splice(0,w.length-5),localStorage.setItem("runningGames",JSON.stringify(w)));const O={};O.render=function(s,l,n,o,r,i){const m=e("router-view");return a(),t(m)};const M=s("http://localhost:5000");const B={setup(){let e,a=o(null),t=!1,s=[0,0,0],l={};function n(e,a,t){let l=4*e+32*a*4;t[l]=s[0],t[l+1]=s[1],t[l+2]=s[2],t[l+3]=255}function i(e,a,t){let s=4*e+32*a*4;return`${t[s]},${t[s+1]},${t[s+2]},${t[s+3]}`}return r((()=>{e=a.value.getContext("2d"),l=e.getImageData(0,0,32,32);for(var s=0;s<l.data.length;s+=4)l.data[s]=0,l.data[s+1]=0,l.data[s+2]=0,l.data[s+3]=20;e.putImageData(l,0,0);let{x:o,y:r}=a.value.getBoundingClientRect();function m(a){if(t){n(Math.floor((a.x-o)/16),Math.floor((a.y-r)/16),l.data),e.putImageData(l,0,0)}}function d(a,t,s,l){i(a,t-1,l.data)==s&&(n(a,t-1,l.data),d(a,t-1,s,l)),i(a,t+1,l.data)==s&&(n(a,t+1,l.data),d(a,t+1,s,l)),i(a-1,t,l.data)==s&&(n(a-1,t,l.data),d(a-1,t,s,l)),i(a+1,t,l.data)==s&&(n(a+1,t,l.data),d(a+1,t,s,l)),n(a,t,l.data),e.putImageData(l,0,0)}a.value.addEventListener("mousedown",(e=>{e.ctrlKey?function(e){let a=Math.floor((e.x-o)/16),t=Math.floor((e.y-r)/16),s=i(a,t,l.data);d(a,t,s,l)}(e):(t=!0,m(e))})),a.value.addEventListener("mouseup",(e=>{t=!1})),a.value.addEventListener("mouseleave",(e=>{t=!1})),a.value.addEventListener("mousemove",m)})),{cnvs:a,getBase64:()=>a.value.toDataURL(),setColor:e=>s=e.split(","),undo:()=>{},colors:["0,0,0","255,0,0","0,255,0","0,0,255","255,255,0","255,0,255","0,255,255","255,255,255"]}}},K=A();l("data-v-613b8186");const N={class:"cnvs"},q={id:"game",width:"32",height:"32",ref:"cnvs"},U={class:"colors"};n();const L=K(((e,s,l,n,o,r)=>(a(),t("div",N,[i("canvas",q,null,512),i("div",U,[(a(!0),t(m,null,d(n.colors,(e=>(a(),t("div",{class:"color",key:e,onClick:a=>n.setColor(e),style:{backgroundColor:`rgb(${e})`}},null,12,["onClick"])))),128))])]))));B.render=L,B.__scopeId="data-v-613b8186";l("data-v-264f3fe7");const S={class:"Home"},H=i("div",{class:"big-title"},"MirrorMates",-1),b=i("div",{class:"sub-title"},"ARE YOU TRUE FRIENDS?",-1),x=i("div",{class:"spacer6"},null,-1),Y=i("img",{src:"data:image/gif;base64,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"},null,-1);n();const Q={expose:[],setup:e=>(e,s)=>(a(),t("div",S,[H,b,x,Y,i("button",{onClick:s[1]||(s[1]=e=>{M.emit("createGame",{maxPlayers:2},(e=>{ye.push({name:"Enter",params:{host:!0,id:e.gameId}})}))})},"Create Game")])),__scopeId:"data-v-264f3fe7"};var W=c({game:{players:[],maxPlayers:0,minPlayers:0,started:!1,state:"NONE",timeLeft:0,currentWord:"",lifes:3,currentCompare:""},images:[],player:{id:"",name:"",host:!1,sort:0}});const j={class:"config"},D={class:"config-item"},F=h(" Time: "),V={class:"config-item"},X=h(" Max Players: "),P={key:1},J=i("span",{class:"emoji"},"📎",-1),T=h(" Copy link! "),Z={expose:[],setup(e){const s=p(),l=o("");let n=location.href;const r=[["Long",60],["Normal",30],["Short",20],["Super quick",10]];function A(e){M.emit("set_config",s.params.id,{defaultTime:e.target.value,timeLeft:e.target.value})}function c(e){M.emit("set_config",s.params.id,{maxPlayers:e.target.value})}function h(e){e.preventDefault()}return(e,o)=>(a(),t("div",j,[i("div",D,[F,u(W).player.host?(a(),t("select",{key:0,onInput:A},[(a(),t(m,null,d(r,(e=>i("option",{key:e[0],selected:u(W).game.defaultTime==e[1],value:e[1]},g(e[0]),9,["selected","value"]))),64))],32)):(a(),t(m,{key:1},d(r,(e=>i("span",{key:e[0]},g(u(W).game.defaultTime==e[1]?e[0]:""),1))),64))]),i("div",V,[X,u(W).player.host?(a(),t("input",{key:0,type:"number",value:u(W).game.maxPlayers,onInput:c,min:"2",onKeydown:h},null,40,["value"])):(a(),t("span",P,g(u(W).game.maxPlayers),1))]),y(i("textarea",{ref:l,"onUpdate:modelValue":o[1]||(o[1]=e=>f(n)?n.value=e:n=e),class:"copytext"}," ",512),[[v,u(n)]]),u(W).player.host&&!u(W).game.started?(a(),t("button",{key:0,onClick:o[2]||(o[2]=e=>(l.value.focus(),l.value.select(),l.value.setSelectionRange(0,99999),void document.execCommand("copy"))),class:"config-item"},[J,T])):k("",!0),u(W).player.host&&!u(W).game.started?(a(),t("button",{key:1,disabled:u(W).game.players.length<u(W).game.minPlayers,onClick:o[3]||(o[3]=e=>{M.emit("start_game",s.params.id)}),class:"config-item",title:u(W).game.players.length<u(W).game.minPlayers?"you need at least 2 players":""}," Start! ",8,["disabled","title"])):k("",!0)]))}};const z={expose:[],setup:e=>(e,s)=>(a(),t("div",null,g(u(W).game.currentWord),1))};const _={expose:[],setup(e){let s=p(),l=o(null);return I((()=>W.game.state),((e,a)=>{"DRAW"==a&&"COMPARE"==e&&l.value&&(console.log("donedrawing"),M.emit("done_drawing",{gameId:s.params.id,playerId:W.player.id,image:l.value.getBase64()}))})),(e,s)=>(a(),t("div",null,[h(g(u(W).game.timeLeft)+" ",1),i(B,{ref:l},null,512)]))}};const $={expose:[],setup:e=>(e,s)=>(a(),t("div",null,g(u(W).game.currentCompare),1))};const ee={class:"game"},ae={class:"playerSection"},te={key:0,class:"playerMe"},se={key:0,class:"emoji"},le={key:1,class:"playerOther"},ne={key:0,class:"emoji"},oe={class:"gameSection"},re={key:0},ie={key:1},me={key:2},de={key:3},Ae={expose:[],setup(e){let s=p();return r((()=>{s.params.fromEnter?(M.emit("request_game",{gameId:s.params.id}),M.emit("request_image",{gameId:s.params.id})):ye.push({name:"Enter",params:{id:s.params.id}})})),M.on("game_updated",(e=>{console.log(e),W.game=e,e.players.forEach((e=>{e.id==s.params.playerId&&(W.player=e)}))})),M.on("image_updated",(e=>{W.images=e})),M.on("timer_updated",(e=>{console.log(e),W.game.timeLeft=e})),(e,s)=>(a(),t("div",ee,[i("div",ae,[h(g(u(W).game.players.length)+" / "+g(u(W).game.maxPlayers)+" ",1),(a(!0),t(m,null,d(u(W).game.players,(e=>(a(),t("div",{key:e.id,class:"playerDisplay"},[e.id==u(W).player.id?(a(),t("div",te,[h(g(e.name)+" ",1),e.host?(a(),t("span",se,"👑")):k("",!0)])):(a(),t("div",le,[h(g(e.name)+" ",1),e.host?(a(),t("span",ne,"👑")):k("",!0)]))])))),128))]),i("div",oe,["NONE"==u(W).game.state?(a(),t("div",re,[i(Z)])):k("",!0),"DISPLAY"==u(W).game.state?(a(),t("div",ie,[i(z)])):k("",!0),"DRAW"==u(W).game.state?(a(),t("div",me,[i(_)])):k("",!0),"COMPARE"==u(W).game.state?(a(),t("div",de,[i($)])):k("",!0)])]))}};const ce={class:"enter"},pe=i("div",{class:"sub-title"},"ENTER YOUR NAME:",-1),ue=i("div",{class:"spacer2"},null,-1),ge=[{path:"/",name:"Home",component:Q},{path:"/game/:id",name:"Game",component:Ae},{path:"/enter/:id",name:"Enter",component:{expose:[],setup(e){let s=p(),l=o(""),n=JSON.parse(localStorage.getItem("runningGames"));function r(e){"Enter"==e.key&&M.emit("player_join_game",{id:C.generate(),name:l.value,host:s.params.host||!1,gameId:s.params.id},(e=>{console.log(e),e.id&&(n.push({gameId:s.params.id,playerId:e.id}),localStorage.setItem("runningGames",JSON.stringify(n)),W.player=e,ye.push({name:"Game",params:{playerId:e.id,id:s.params.id,fromEnter:!0}}))}))}return n.forEach((e=>{e.gameId==s.params.id&&ye.push({name:"Game",params:{playerId:e.playerId,id:s.params.id,fromEnter:!0}})})),(e,s)=>(a(),t("div",ce,[pe,ue,y(i("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=e=>f(l)?l.value=e:l=e),onKeyup:r,placeholder:"NAME..."},null,544),[[v,u(l)]])]))}}}],ye=E({history:G(),routes:ge});R(O).use(ye).mount("#app");