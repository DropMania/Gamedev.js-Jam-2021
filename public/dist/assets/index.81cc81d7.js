import{r as e,o as a,c as t,i as s,p as l,a as A,b as n,d as o,w as r,v as i,e as d,F as m,f as c,t as p,g,h as u,u as v,j as h,k as y,l as f,m as k,n as I,q as E,s as C,x as w,C as R,y as K,z as G,A as S}from"./vendor.3c51bc7b.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const s=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,A)=>{const n=new URL(e,s);if(self[a].moduleMap[n])return t(self[a].moduleMap[n]);const o=new Blob([`import * as m from '${n}';`,`${a}.moduleMap['${n}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){A(new Error(`Failed to import: ${e}`)),l(r)},onload(){t(self[a].moduleMap[n]),l(r)}});document.head.appendChild(r)})),self[a].moduleMap={}}}("/assets/");null==localStorage.getItem("runningGames")&&localStorage.setItem("runningGames","[]");let b=JSON.parse(localStorage.getItem("runningGames"));b.length>5&&(b.splice(0,b.length-5),localStorage.setItem("runningGames",JSON.stringify(b)));const U={};U.render=function(s,l,A,n,o,r){const i=e("router-view");return a(),t(i)};const L=s(location.href.startsWith("http://localhost:3000/")?"http://localhost:5000":void 0),B=["  0,   0,   0","228, 166, 114","184, 111,  80","116,  63,  57"," 63,  40,  50","158,  40,  53","229,  59,  68","251, 146,  43","255, 231,  98"," 99, 198,  77"," 50, 115,  69"," 25,  61,  63"," 79, 103, 129","175, 191, 210","255, 255, 255"," 44, 232, 244","  4, 132, 209"];const O={props:{mine:Boolean,player:Object},setup(e){console.log(e);let a,t=B,s=n(null),l=!1,A=[0,0,0],r={};function i(e,a,t){let s=4*e+32*a*4;t[s]=A[0],t[s+1]=A[1],t[s+2]=A[2],t[s+3]=255}function d(e,a,t){let s=4*e+32*a*4;return`${t[s]},${t[s+1]},${t[s+2]},${t[s+3]}`}return o((()=>{a=s.value.getContext("2d"),r=a.getImageData(0,0,32,32);for(var e=0;e<r.data.length;e+=4)r.data[e]=0,r.data[e+1]=0,r.data[e+2]=0,r.data[e+3]=20;a.putImageData(r,0,0);let{x:t,y:A}=s.value.getBoundingClientRect();function n(e){if(l){i(Math.floor((e.x-t)/16),Math.floor((e.y-A)/16),r.data),a.putImageData(r,0,0)}}function o(e,t,s,l){d(e,t-1,l.data)==s&&(i(e,t-1,l.data),o(e,t-1,s,l)),d(e,t+1,l.data)==s&&(i(e,t+1,l.data),o(e,t+1,s,l)),d(e-1,t,l.data)==s&&(i(e-1,t,l.data),o(e-1,t,s,l)),d(e+1,t,l.data)==s&&(i(e+1,t,l.data),o(e+1,t,s,l)),i(e,t,l.data),a.putImageData(l,0,0)}s.value.addEventListener("mousedown",(e=>{e.ctrlKey?function(e){let a=Math.floor((e.x-t)/16),s=Math.floor((e.y-A)/16),l=d(a,s,r.data);o(a,s,l,r)}(e):(l=!0,n(e))})),s.value.addEventListener("mouseup",(e=>{l=!1})),s.value.addEventListener("mouseleave",(e=>{l=!1})),s.value.addEventListener("mousemove",n)})),{cnvs:s,getBase64:()=>s.value.toDataURL(),setColor:e=>A=e.split(","),undo:()=>{},colors:t,props:e}}},M=g();l("data-v-3788bdf9");const Q={class:"frame"},X={class:"cnvs"},F={id:"game",width:"32",height:"32",ref:"cnvs"},x={class:"colors"};A();const W=M(((e,s,l,A,n,o)=>(a(),t("div",Q,[r(d("div",X,[d("canvas",F,null,512),d("div",x,[(a(!0),t(m,null,c(A.colors,(e=>(a(),t("div",{class:"color",key:e,onClick:a=>A.setColor(e),style:{backgroundColor:`rgb(${e})`}},null,12,["onClick"])))),128))])],512),[[i,A.props.mine]]),r(d("div",{class:"others"},p(A.props.player.name)+" is drawing... ",513),[[i,!A.props.mine]])]))));O.render=W,O.__scopeId="data-v-3788bdf9";l("data-v-294e068f");const H={class:"Home"},Y=d("div",{class:"big-title"},"MirrorMates",-1),J=d("div",{class:"sub-title"},"ARE YOU TRUE MATES?",-1),q=d("div",{class:"spacer1"},null,-1),D=d("img",{src:"data:image/gif;base64,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"},null,-1),j=d("div",{class:"spacer1"},null,-1),N=d("div",{class:"spacer1"},null,-1),T=d("div",{class:"spacer1"},null,-1),V=f(" Enter via ID:"),Z=d("div",{class:"spacer1"},null,-1),P=d("div",{class:"footer"},[d("a",{href:"https://github.com/DropMania/Gamedev.js-Jam-2021",target:"_blank"},"© DropMania")],-1);A();const z={expose:[],setup(e){let s=n("");function l(){ze.push({name:"Enter",params:{id:s.value}})}function A(e){L.emit("createGame",{type:e},(e=>{ze.push({name:"Enter",params:{host:!0,id:e.gameId}})}))}return(e,n)=>(a(),t("div",H,[Y,J,q,D,d("button",{onClick:n[1]||(n[1]=e=>{ze.push({name:"Search"})})},"Search Games"),j,d("button",{onClick:n[2]||(n[2]=e=>A("public"))},"Create Public Game"),N,d("button",{onClick:n[3]||(n[3]=e=>A("private"))},"Create Private Game"),T,V,r(d("input",{type:"text","onUpdate:modelValue":n[4]||(n[4]=e=>h(s)?s.value=e:s=e),onKeyup:y(l,["enter"]),placeholder:"ID..."},null,40,["onKeyup"]),[[u,v(s)]]),Z,P]))},__scopeId:"data-v-294e068f"};var _=k({game:{players:[],maxPlayers:0,minPlayers:0,started:!1,state:"NONE",timeLeft:0,currentWord:"",lifes:3,currentCompare:"",threshold:0,score:0,type:"private"},images:[],player:{id:"",name:"",host:!1,sort:0}});const $={class:"config"},ee={class:"config-item"},ae={class:"players"},te={class:"config-item"},se=f(" Time: "),le={class:"config-item"},Ae=f(" Threshold: "),ne={class:"config-item"},oe=f(" Lifes: "),re={key:1},ie={expose:[],setup(e){const s=I(),l=n("");let A=location.href;const o=[["Long",60],["Normal",30],["Short",20],["Super quick",10]],i=[["Easy",10],["Normal",20],["Hard",30],["Insane",50]];function g(e){L.emit("set_config",s.params.id,{timeLeft:e.target.value,defaultTime:e.target.value})}function y(e){L.emit("set_config",s.params.id,{threshold:e.target.value})}function k(e){L.emit("set_config",s.params.id,{lifes:e.target.value})}function C(e){e.preventDefault()}return(e,n)=>(a(),t("div",$,[d("div",ee,[f(" Players "+p(v(_).game.players.length)+" / "+p(v(_).game.maxPlayers)+": ",1),d("div",ae,[(a(!0),t(m,null,c(v(_).game.players,(e=>(a(),t("span",{class:"player",key:e.id},p(e.name),1)))),128))])]),d("div",te,[se,v(_).player.host?(a(),t("select",{key:0,onInput:g},[(a(),t(m,null,c(o,(e=>d("option",{key:e[0],selected:v(_).game.defaultTime==e[1],value:e[1]},p(e[0]),9,["selected","value"]))),64))],32)):(a(),t(m,{key:1},c(o,(e=>d("span",{key:e[0]},p(v(_).game.defaultTime==e[1]?e[0]:""),1))),64))]),d("div",le,[Ae,v(_).player.host?(a(),t("select",{key:0,onInput:y},[(a(),t(m,null,c(i,(e=>d("option",{key:e[0],selected:v(_).game.threshold==e[1],value:e[1]},p(e[0])+" ("+p(e[1])+"%) ",9,["selected","value"]))),64))],32)):(a(),t(m,{key:1},c(i,(e=>d("span",{key:e[0]},p(v(_).game.threshold==e[1]?`${e[0]} (${e[1]}%)`:""),1))),64))]),d("div",ne,[oe,v(_).player.host?(a(),t("input",{key:0,type:"number",value:v(_).game.lifes,onInput:k,min:"1",max:"10",onKeydown:C},null,40,["value"])):(a(),t("span",re,p(v(_).game.lifes),1))]),r(d("textarea",{ref:l,"onUpdate:modelValue":n[1]||(n[1]=e=>h(A)?A.value=e:A=e),class:"copytext"}," ",512),[[u,v(A)]]),d("button",{onClick:n[2]||(n[2]=e=>(l.value.focus(),l.value.select(),l.value.setSelectionRange(0,99999),document.execCommand("copy"),void l.value.blur())),class:"config-item"},"Copy link!"),v(_).player.host?(a(),t("button",{key:0,disabled:v(_).game.players.length<v(_).game.minPlayers,onClick:n[3]||(n[3]=e=>{L.emit("start_game",s.params.id)}),class:"config-item",title:v(_).game.players.length<v(_).game.minPlayers?"you need at least 2 players":""}," Start! ",8,["disabled","title"])):E("",!0)]))}};const de=f(" The Word you need to draw is:"),me=d("br",null,null,-1),ce={class:"big-title"},pe=d("div",{class:"spacer6"},null,-1),ge={expose:[],setup:e=>(e,s)=>(a(),t("div",null,[de,me,d("div",ce,p(v(_).game.currentWord),1),pe]))};const ue=f(" You've lost with a score of:"),ve=d("br",null,null,-1),he={class:"big-title"},ye=d("div",{class:"spacer6"},null,-1),fe={expose:[],setup:e=>(e,s)=>(a(),t("div",null,[ue,ve,d("div",he,p(v(_).game.score),1),ye]))};const ke={class:"med-title"},Ie={class:"draw"},Ee=d("div",{class:"spacer1"},null,-1),Ce={expose:[],setup(e){let s=I(),l=n(null);return C((()=>_.game.state),((e,a)=>{"DRAW"==a&&"COMPARE"==e&&l.value&&(console.log("donedrawing"),L.emit("done_drawing",{gameId:s.params.id,playerId:_.player.id,image:l.value.getBase64()}))})),(e,s)=>(a(),t("div",null,[d("div",ke,p(v(_).game.currentWord),1),d("div",Ie,[(a(!0),t(m,null,c(v(_).game.players,(e=>(a(),t("div",{class:"drawer",key:e.id},[v(_).player.sort==e.sort?(a(),t(O,{key:0,ref:l,mine:"",player:e},null,8,["player"])):(a(),t(O,{key:1,player:e},null,8,["player"]))])))),128))]),Ee]))}};const we={class:"compare"},Re={class:"med-title"},Ke={class:"images"},Ge={expose:[],setup(e){let s=_.game.players,l=w((()=>_.images.sort(((e,a)=>s.find((a=>a.id==e[0])).sort-s.find((e=>e.id==a[0])).sort))));return(e,A)=>(a(),t("div",we,[d("div",Re,p(v(_).game.currentCompare)+"%",1),d("div",Ke,[(a(!0),t(m,null,c(v(l),(e=>{return a(),t("div",{class:"image",key:e[0]},[d("img",{src:e[1]},null,8,["src"]),d("div",null,p((l=e[0],s.find((e=>e.id==l)).name)),1)]);var l})),128))])]))}};const Se={class:"timer"},be=d("div",null,[d("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAKCAYAAABCHPt+AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV8/pEUqgs0g4pChOlkQFXGUKhbBQmkrtOpgcukXNDEkKS6OgmvBwY/FqoOLs64OroIg+AHi5uak6CIl/i8ptIjx4Lgf7+497t4B/maNqWZwHFA1y8gkE2K+sCKGXhFEFAIGEJaYqaeyCzl4jq97+Ph6F+dZ3uf+HH1K0WSATySeZbphEa8TT29aOud9YoFVJIX4nHjMoAsSP3JddvmNc9lhP88UjFxmjlggFstdLHcxqxgq8RRxTFE1yvfnXVY4b3FWa3XWvid/YaSoLWe5TnMYSSwihTREyKijihosxGnVSDGRof2Eh3/I8afJJZOrCkaOeWxAheT4wf/gd7dmaXLCTYokgJ4X2/4YAUK7QKth29/Htt06AQLPwJXW8W80gZlP0hsdLXYE9G8DF9cdTd4DLneAwSddMiRHCtD0l0rA+xl9UwGI3gK9q25v7X2cPgA56mrpBjg4BEbLlL3m8e5wd2//nmn39wM5bnKQdlMRJgAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+UEExUFJojmbgMAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAASUlEQVRIx+3XIQ4AIAwEwR7///MhG4LC0BO7gqA7CaGqzkWTqcCIyvfFBua3wjlz9wFGAop5rsJsFjPIChBA6OnLRbMGAiVrMdw3VRvvG3tPawAAAABJRU5ErkJggg=="})],-1),Ue=d("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAKCAYAAABCHPt+AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV8/pEUqgs0g4pChOlkQFXGUKhbBQmkrtOpgcukXNDEkKS6OgmvBwY/FqoOLs64OroIg+AHi5uak6CIl/i8ptIjx4Lgf7+497t4B/maNqWZwHFA1y8gkE2K+sCKGXhFEFAIGEJaYqaeyCzl4jq97+Ph6F+dZ3uf+HH1K0WSATySeZbphEa8TT29aOud9YoFVJIX4nHjMoAsSP3JddvmNc9lhP88UjFxmjlggFstdLHcxqxgq8RRxTFE1yvfnXVY4b3FWa3XWvid/YaSoLWe5TnMYSSwihTREyKijihosxGnVSDGRof2Eh3/I8afJJZOrCkaOeWxAheT4wf/gd7dmaXLCTYokgJ4X2/4YAUK7QKth29/Htt06AQLPwJXW8W80gZlP0hsdLXYE9G8DF9cdTd4DLneAwSddMiRHCtD0l0rA+xl9UwGI3gK9q25v7X2cPgA56mrpBjg4BEbLlL3m8e5wd2//nmn39wM5bnKQdlMRJgAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+UEExUEK+9MI/8AAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAACw0lEQVRIx+1X23EcMQwDtG7ILiDjPhI3l8ykDrsBpyHPIh+k+JDk7+TDN3O7eyuRokAQ1BH5Eb4+//LDuADQj8dXEAQFuwMY/jzi3RyHjzPmUsCI53IXMICwHWQbHwLI4rf4jPU93nHXueZnzLWLjyHa12MfIK6bIO1u74lrvgdxKd8NWRzz+dLovmRrX/7b1hrlt9mk34zp8rjTt63/oAEAHAD0/fEVgPDz/VsWi5SPIABBWxEx5nCWWFzYpsCT0uvRDKXdK3WiT7cnLTKylLe4RGn00eKTRCxMd2h+lOPzHZWbLFIipv8uMDaRCYj54xYRHm5LnK9raRGFX+/PeHl628FjeaO+SZQUaVrMixSLam6ZM8E2hQ4wmZvt95JCoRi7zYxAJTbqAI8AlkRpcoYQMx5N6nmGBUJi7ldl97QqQi57EH4FQVRj9JUI4eO6Me60GBOpl6e3BZOZMx3aiwJ3bk2IbRaxz+GESTputs7WprAK+4lkq1ztgUk1RcxCk5KtagpuLjSZXFdwdAKXXj1JGgUJWTKm8C1PFHAPLQnhCrexhOvGVqjU1emkZmsuU14ma9Xkpm6mSUTd5Jp8stls0spe9Sk5lRR1AMUX3XLqsnzLjLFKqK4cDIBYoZJX4aLCpUKElZ+ZVS7MXoNWEISLL7ocrmytDLd+UcDcS673ExZ9dnmCFBsM2A/SsTqjsles9Xs8cjYQ1LSgFudsGM2bqhVbj94TslCcDlZiy21GApxpD+ZKDpIOxbOUuXYifG7Fgzo4FyMQ7b3IDwDnykmmRyPvrRNVDJZTQXapqShrb5+yyky+WAnbHQ8A/P3n2fUsda6ToYAdJw7mnhrBmF8xQKynsXhWUamD/hbSl5OJQ8Z+cldp8AuRcdRdVtJbMNJKWEWf2XKgEiCz11SNpVQAYtXBIPDEgPs58uuP4f/wx/AvFvyWFpDcLGsAAAAASUVORK5CYII="},null,-1),Le={style:{"margin-top":"7px"}},Be={expose:[],setup:e=>(e,s)=>(a(),t("div",Se,[d("div",null,[be,d("div",{style:{width:v(_).game.timeLeft/v(_).game.defaultTime*100+"%",overflow:"hidden"}},[Ue],4),d("div",Le,p(v(_).game.timeLeft)+"s",1)])]))};const Oe={class:"game"},Me={class:"topSection"},Qe={class:"lifes"},Xe={class:"score sub-title"},Fe={class:"gameSection"},xe={key:0},We={key:1},He={key:2},Ye={key:3},Je={key:4},qe={expose:[],setup(e){let s=I();return o((()=>{s.params.fromEnter?(L.emit("request_game",{gameId:s.params.id}),L.emit("request_image",{gameId:s.params.id})):ze.push({name:"Enter",params:{id:s.params.id}})})),L.on("game_updated",(e=>{console.log(e),_.game=e,e.players.forEach((e=>{e.id==s.params.playerId&&(_.player=e)}))})),L.on("image_updated",(e=>{_.images=e})),L.on("timer_updated",(e=>{console.log(e),_.game.timeLeft=e})),(e,s)=>(a(),t("div",Oe,[d("div",Me,[d("div",Qe,[(a(!0),t(m,null,c(+v(_).game.lifes,(e=>(a(),t("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAHxJREFUOI3FkzESgCAMBA9eQFr9/9OkhR/ERpQEAszojNvBkW1yODwwJE6du3l5xEcIIt1zXsp9LwSA6451vqUkct9MKomWR6JbAgBDgUUkeieo+V9grmlGWWNdlmVJ3ZGmbTOJKlgjGEr0sCXoSnrDI4GQWMMrMNpf+C0npQk0LXlRwwgAAAAASUVORK5CYII=",key:e,alt:e},null,8,["alt"])))),128))]),d("div",Xe,"Score: "+p(v(_).game.score),1),d(Be,{class:"timer"})]),d("div",Fe,["DISPLAY"==v(_).game.state?(a(),t("div",xe,[d(ge)])):E("",!0),"NONE"==v(_).game.state?(a(),t("div",We,[d(ie)])):E("",!0),"COMPARE"==v(_).game.state?(a(),t("div",He,[d(Ge)])):E("",!0),"DRAW"==v(_).game.state?(a(),t("div",Ye,[d(Ce)])):E("",!0),"LOST"==v(_).game.state?(a(),t("div",Je,[d(fe)])):E("",!0)])]))}};const De={class:"enter"},je=d("div",{class:"sub-title"},"ENTER YOUR NAME:",-1),Ne=d("div",{class:"spacer2"},null,-1),Te={expose:[],setup(e){let s=I(),l=n(""),A=JSON.parse(localStorage.getItem("runningGames"));function o(e){"Enter"==e.key&&(console.log("test"),L.emit("player_join_game",{id:R.generate(),name:l.value,host:s.params.host||!1,gameId:s.params.id},(e=>{console.log(e),e.id&&(A.push({gameId:s.params.id,playerId:e.id}),localStorage.setItem("runningGames",JSON.stringify(A)),_.player=e,ze.push({name:"Game",params:{playerId:e.id,id:s.params.id,fromEnter:!0}}))})))}return A.forEach((e=>{e.gameId==s.params.id&&ze.push({name:"Game",params:{playerId:e.playerId,id:s.params.id,fromEnter:!0}})})),(e,s)=>(a(),t("div",De,[je,Ne,r(d("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=e=>h(l)?l.value=e:l=e),onKeyup:o,placeholder:"NAME..."},null,544),[[u,v(l)]])]))}};l("data-v-99d2a1d4");const Ve=f(" All public Games: ");A();const Ze={expose:[],setup(e){let s=n([]);return o((()=>{L.emit("request_public_games",(e=>{console.log(e),s.value=e}))})),(e,l)=>(a(),t("div",null,[Ve,(a(!0),t(m,null,c(v(s),(e=>(a(),t("div",{key:e[0]},[d("button",{onClick:a=>{return t=e[0],void ze.push({name:"Enter",params:{id:t}});var t}},"/"+p(e[0]),9,["onClick"])])))),128))]))},__scopeId:"data-v-99d2a1d4"},Pe=[{path:"/",name:"Home",component:z},{path:"/game/:id",name:"Game",component:qe},{path:"/enter/:id",name:"Enter",component:Te},{path:"/search",name:"Search",component:Ze}],ze=K({history:G(),routes:Pe});S(U).use(ze).mount("#app");
