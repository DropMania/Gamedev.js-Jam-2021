import{r as e,o as a,c as s,a as t,u as l,b as A,F as o,d as n,i as r,p as i,e as d,f as c,w as m,v as g,g as u,t as p,h as v,j as y,k as h,l as k,m as f,n as I,q as C,s as E,x as w,y as R,z as K,C as B,A as S,B as U,D as b}from"./vendor.aabbeb6c.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(s){const t=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((s,A)=>{const o=new URL(e,t);if(self[a].moduleMap[o])return s(self[a].moduleMap[o]);const n=new Blob([`import * as m from '${o}';`,`${a}.moduleMap['${o}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){A(new Error(`Failed to import: ${e}`)),l(r)},onload(){s(self[a].moduleMap[o]),l(r)}});document.head.appendChild(r)})),self[a].moduleMap={}}}("/assets/");let L=new Audio("/src/assets/sounds/ost.mp3");L.loop=!0,L.volume=.4,L.crossOrigin="anonymous";let G=new Audio("/src/assets/sounds/win.mp3");G.volume=1,G.crossOrigin="anonymous";let O=new Audio("/src/assets/sounds/fail.mp3");O.volume=1,O.crossOrigin="anonymous";let Q=new Audio("/src/assets/sounds/blick.mp3");Q.volume=1,Q.crossOrigin="anonymous";let M=()=>{try{Q.play(),setTimeout((()=>{Q.pause(),Q.currentTime=0}),100)}catch(e){}};const x={key:0,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAElJREFUOI3tkTEOACAMAsH4/y/r4lgUTNxktHAlFXitsaTm7RQ+LZAAJywBbhgAemK2G3xAJlaP1c+QLL1lA2W2AQlke4OkybUmiNAcEEwyLWYAAAAASUVORK5CYII="},F={key:1,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAGBJREFUOI3tk8EKwCAMQ5Ph//+yu6wgNc2KsNtykrR5lqLA15qPshfn6y2sfJKMWgmowuEHRAKqcL4dAIZrVmCSXD27g45+ADDyVgH/gFoTqMYV7upbs/oLbsoSchTu6AaLtlPnxD7rrwAAAABJRU5ErkJggg=="},X={expose:[],setup(r){let i=e(!1);function d(){i.value=!i.value,L.muted=!L.muted}document.body.addEventListener("click",(()=>{(()=>{try{L.play()}catch(e){}})()})),null==localStorage.getItem("runningGames")&&localStorage.setItem("runningGames","[]");let c=JSON.parse(localStorage.getItem("runningGames"));return c.length>5&&(c.splice(0,c.length-5),localStorage.setItem("runningGames",JSON.stringify(c))),(e,r)=>{const c=n("router-view");return a(),s(o,null,[t("button",{onClick:d,class:"muteButton"},[l(i)?(a(),s("img",x)):A("",!0),l(i)?A("",!0):(a(),s("img",F))]),t(c)],64)}}};const D=r(location.href.startsWith("http://localhost:3000/")?"http://localhost:5000":location.href.includes("itch.io")?"https://mirrormates.herokuapp.com":void 0),W=["  0,   0,   0","228, 166, 114","184, 111,  80","116,  63,  57"," 63,  40,  50","158,  40,  53","229,  59,  68","251, 146,  43","255, 231,  98"," 99, 198,  77"," 50, 115,  69"," 25,  61,  63"," 79, 103, 129","175, 191, 210","255, 255, 255"," 44, 232, 244","  4, 132, 209"];var Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAIxJREFUWIXtzjkSwCAMQ9H4oDldDkraDIPBi2RS8DtbzZNLqbV2f28RebRd20b//icaoAoxBVQglgA2wgSgIqwAFsIFYCDcADQiBEAiwgAYIgNAINKALAICyCBggCgCCogg4AA3ggHwIGgAK4IKsCDogBWiBDBDlAE0RClgiKgG9IgtgB6xrV8gTqftvW876Z6S4LesAAAAAElFTkSuQmCC";const H={props:{mine:Boolean,player:Object},setup(a){console.log(a);let s,t=W,l=e(null),A=!1,o=[0,0,0],n={};function r(e,a,s){let t=4*e+32*a*4;s[t]=o[0],s[t+1]=o[1],s[t+2]=o[2],s[t+3]=255}function i(e,a,s){let t=4*e+32*a*4;return`${s[t]},${s[t+1]},${s[t+2]},${s[t+3]}`}return c((()=>{s=l.value.getContext("2d"),n=s.getImageData(0,0,32,32);for(var e=0;e<n.data.length;e+=4)n.data[e]=0,n.data[e+1]=0,n.data[e+2]=0,n.data[e+3]=20;s.putImageData(n,0,0);let{x:a,y:t}=l.value.getBoundingClientRect();function o(e){if(A){r(Math.floor((e.x-a)/16),Math.floor((e.y-t)/16),n.data),s.putImageData(n,0,0)}}function d(e,a,t,l){i(e,a-1,l.data)==t&&(r(e,a-1,l.data),d(e,a-1,t,l)),i(e,a+1,l.data)==t&&(r(e,a+1,l.data),d(e,a+1,t,l)),i(e-1,a,l.data)==t&&(r(e-1,a,l.data),d(e-1,a,t,l)),i(e+1,a,l.data)==t&&(r(e+1,a,l.data),d(e+1,a,t,l)),r(e,a,l.data),s.putImageData(l,0,0)}l.value.addEventListener("mousedown",(e=>{e.ctrlKey?function(e){let s=Math.floor((e.x-a)/16),l=Math.floor((e.y-t)/16),A=i(s,l,n.data);d(s,l,A,n)}(e):(A=!0,o(e))})),l.value.addEventListener("mouseup",(e=>{A=!1})),l.value.addEventListener("mouseleave",(e=>{A=!1})),l.value.addEventListener("mousemove",o)})),{cnvs:l,getBase64:()=>l.value.toDataURL(),setColor:e=>o=e.split(","),undo:()=>{},colors:t,props:a}}},J=v();i("data-v-c758228c");const q={class:"frame"},N={class:"cnvs"},T=t("img",{class:"mirror_line",src:Y},null,-1),V={id:"game",width:"32",height:"32",ref:"cnvs"},j={class:"colors"};d();const Z=J(((e,l,A,n,r,i)=>(a(),s("div",q,[m(t("div",N,[T,t("canvas",V,null,512),t("div",j,[(a(!0),s(o,null,u(n.colors,(e=>(a(),s("div",{class:"color",key:e,onClick:a=>n.setColor(e),style:{backgroundColor:`rgb(${e})`}},null,12,["onClick"])))),128))])],512),[[g,n.props.mine]]),m(t("div",{class:"others"},p(n.props.player.name)+" is drawing... ",513),[[g,!n.props.mine]])]))));H.render=Z,H.__scopeId="data-v-c758228c";const P={expose:[],setup:e=>(e,t)=>(a(),s("button",{onClick:t[1]||(t[1]=(...e)=>l(M)&&l(M)(...e))},[y(e.$slots,"default")]))};const z=v();i("data-v-2eae89e1");const _={class:"Home"},$=t("div",{class:"big-title"},"MirrorMates",-1),ee=t("div",{class:"sub-title"},"ARE YOU TRUE MATES?",-1),ae=t("div",{class:"spacer1"},null,-1),se=t("img",{src:"data:image/gif;base64,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"},null,-1),te=I("Search Games"),le=t("div",{class:"spacer1"},null,-1),Ae=I("Create Public Game"),oe=t("div",{class:"spacer1"},null,-1),ne=I("Create Private Game"),re=t("div",{class:"spacer1"},null,-1),ie=I(" Enter via ID:"),de=t("div",{class:"spacer1"},null,-1),ce=t("div",{class:"footer"},[t("a",{href:"https://github.com/DropMania/Gamedev.js-Jam-2021",target:"_blank"},"© DropMania")],-1);d();const me={expose:[],setup(A){let o=e("");function n(){ha.push({name:"Enter",params:{id:o.value}})}function r(e){D.emit("createGame",{type:e},(e=>{ha.push({name:"Enter",params:{host:!0,id:e.gameId}})}))}return(e,A)=>(a(),s("div",_,[$,ee,ae,se,t(P,{onClick:A[1]||(A[1]=e=>{ha.push({name:"Search"})})},{default:z((()=>[te])),_:1}),le,t(P,{onClick:A[2]||(A[2]=e=>r("public"))},{default:z((()=>[Ae])),_:1}),oe,t(P,{onClick:A[3]||(A[3]=e=>r("private"))},{default:z((()=>[ne])),_:1}),re,ie,m(t("input",{type:"text","onUpdate:modelValue":A[4]||(A[4]=e=>k(o)?o.value=e:o=e),onKeyup:f(n,["enter"]),placeholder:"ID..."},null,40,["onKeyup"]),[[h,l(o)]]),de,ce]))},__scopeId:"data-v-2eae89e1"};var ge=C({game:{players:[],maxPlayers:0,minPlayers:0,started:!1,state:"NONE",timeLeft:0,currentWord:"",lifes:3,currentCompare:"",threshold:0,score:0,type:"private"},images:[],player:{id:"",name:"",host:!1,sort:0}});const ue={class:"config"},pe={class:"config-item"},ve={class:"players"},ye={class:"config-item"},he=I(" Time: "),ke={class:"config-item"},fe=I(" Threshold: "),Ie={class:"config-item"},Ce=I(" Lifes: "),Ee={key:1},we={class:"config-item copys"},Re=I("Copy link!"),Ke=I("Copy ID!"),Be=I(" Start! "),Se={expose:[],setup(n){const r=E(),i=e(""),d=e("");let c=r.params.id,g=location.href;const v=[["Long",60],["Normal",30],["Short",20],["Super quick",10]],y=[["Easy",10],["Normal",20],["Hard",30],["Insane",50]];function f(e){D.emit("set_config",r.params.id,{timeLeft:e.target.value,defaultTime:e.target.value})}function C(e){D.emit("set_config",r.params.id,{threshold:e.target.value})}function R(e){D.emit("set_config",r.params.id,{lifes:e.target.value})}function K(e){e.preventDefault()}return(e,n)=>(a(),s("div",ue,[t("div",pe,[I(" Players "+p(l(ge).game.players.length)+" / "+p(l(ge).game.maxPlayers)+": ",1),t("div",ve,[(a(!0),s(o,null,u(l(ge).game.players,(e=>(a(),s("span",{class:"player",key:e.id},p(e.name),1)))),128))])]),t("div",ye,[he,l(ge).player.host?(a(),s("select",{key:0,onInput:f},[(a(),s(o,null,u(v,(e=>t("option",{key:e[0],selected:l(ge).game.defaultTime==e[1],value:e[1]},p(e[0]),9,["selected","value"]))),64))],32)):(a(),s(o,{key:1},u(v,(e=>t("span",{key:e[0]},p(l(ge).game.defaultTime==e[1]?e[0]:""),1))),64))]),t("div",ke,[fe,l(ge).player.host?(a(),s("select",{key:0,onInput:C},[(a(),s(o,null,u(y,(e=>t("option",{key:e[0],selected:l(ge).game.threshold==e[1],value:e[1]},p(e[0])+" ("+p(e[1])+"%) ",9,["selected","value"]))),64))],32)):(a(),s(o,{key:1},u(y,(e=>t("span",{key:e[0]},p(l(ge).game.threshold==e[1]?`${e[0]} (${e[1]}%)`:""),1))),64))]),t("div",Ie,[Ce,l(ge).player.host?(a(),s("input",{key:0,type:"number",value:l(ge).game.lifes,onInput:R,min:"1",max:"10",onKeydown:K},null,40,["value"])):(a(),s("span",Ee,p(l(ge).game.lifes),1))]),m(t("textarea",{ref:i,"onUpdate:modelValue":n[1]||(n[1]=e=>k(g)?g.value=e:g=e),class:"copytext"}," ",512),[[h,l(g)]]),m(t("textarea",{ref:d,"onUpdate:modelValue":n[2]||(n[2]=e=>k(c)?c.value=e:c=e),class:"copytext"}," ",512),[[h,l(c)]]),t("div",we,[t(P,{onClick:n[3]||(n[3]=e=>(i.value.focus(),i.value.select(),i.value.setSelectionRange(0,99999),document.execCommand("copy"),void i.value.blur()))},{default:w((()=>[Re])),_:1}),t(P,{onClick:n[4]||(n[4]=e=>(d.value.focus(),d.value.select(),d.value.setSelectionRange(0,99999),document.execCommand("copy"),void d.value.blur()))},{default:w((()=>[Ke])),_:1})]),l(ge).player.host?(a(),s(P,{key:0,disabled:l(ge).game.players.length<l(ge).game.minPlayers,onClick:n[5]||(n[5]=e=>{D.emit("start_game",r.params.id)}),class:"config-item",title:l(ge).game.players.length<l(ge).game.minPlayers?"you need at least 2 players":""},{default:w((()=>[Be])),_:1},8,["disabled","title"])):A("",!0)]))}};const Ue=I(" The Word you need to draw is:"),be=t("br",null,null,-1),Le={class:"big-title"},Ge=t("div",{class:"spacer6"},null,-1),Oe={expose:[],setup:e=>(e,A)=>(a(),s("div",null,[Ue,be,t("div",Le,p(l(ge).game.currentWord),1),Ge]))};const Qe=I(" You've lost with a score of:"),Me=t("br",null,null,-1),xe={class:"big-title"},Fe=t("div",{class:"spacer6"},null,-1),Xe={expose:[],setup:e=>(e,A)=>(a(),s("div",null,[Qe,Me,t("div",xe,p(l(ge).game.score),1),Fe]))};const De={class:"med-title"},We={class:"draw"},Ye=t("div",{class:"spacer1"},null,-1),He={expose:[],setup(A){let n=E(),r=e(null);return R((()=>ge.game.state),((e,a)=>{"DRAW"==a&&"COMPARE"==e&&r.value&&(console.log("donedrawing"),D.emit("done_drawing",{gameId:n.params.id,playerId:ge.player.id,image:r.value.getBase64()}))})),(e,A)=>(a(),s("div",null,[t("div",De,p(l(ge).game.currentWord),1),t("div",We,[(a(!0),s(o,null,u(l(ge).game.players,(e=>(a(),s("div",{class:"drawer",key:e.id},[l(ge).player.sort==e.sort?(a(),s(H,{key:0,ref:r,mine:"",player:e},null,8,["player"])):(a(),s(H,{key:1,player:e},null,8,["player"]))])))),128))]),Ye]))}};const Je={class:"compare"},qe={class:"med-title"},Ne={class:"images"},Te=t("img",{class:"mirror_line",src:Y},null,-1),Ve={expose:[],setup(e){let A=ge.game.players,n=K((()=>ge.images.sort(((e,a)=>A.find((a=>a.id==e[0])).sort-A.find((e=>e.id==a[0])).sort))));return(e,r)=>(a(),s("div",Je,[t("div",qe,p(l(ge).game.currentCompare)+"%",1),t("div",Ne,[(a(!0),s(o,null,u(l(n),(e=>{return a(),s("div",{class:"image",key:e[0]},[Te,t("img",{class:"drawing",src:e[1]},null,8,["src"]),t("div",null,p((l=e[0],A.find((e=>e.id==l)).name)),1)]);var l})),128))])]))}};const je={class:"timer"},Ze=t("div",null,[t("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAKCAYAAABCHPt+AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV8/pEUqgs0g4pChOlkQFXGUKhbBQmkrtOpgcukXNDEkKS6OgmvBwY/FqoOLs64OroIg+AHi5uak6CIl/i8ptIjx4Lgf7+497t4B/maNqWZwHFA1y8gkE2K+sCKGXhFEFAIGEJaYqaeyCzl4jq97+Ph6F+dZ3uf+HH1K0WSATySeZbphEa8TT29aOud9YoFVJIX4nHjMoAsSP3JddvmNc9lhP88UjFxmjlggFstdLHcxqxgq8RRxTFE1yvfnXVY4b3FWa3XWvid/YaSoLWe5TnMYSSwihTREyKijihosxGnVSDGRof2Eh3/I8afJJZOrCkaOeWxAheT4wf/gd7dmaXLCTYokgJ4X2/4YAUK7QKth29/Htt06AQLPwJXW8W80gZlP0hsdLXYE9G8DF9cdTd4DLneAwSddMiRHCtD0l0rA+xl9UwGI3gK9q25v7X2cPgA56mrpBjg4BEbLlL3m8e5wd2//nmn39wM5bnKQdlMRJgAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+UEExUFJojmbgMAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAASUlEQVRIx+3XIQ4AIAwEwR7///MhG4LC0BO7gqA7CaGqzkWTqcCIyvfFBua3wjlz9wFGAop5rsJsFjPIChBA6OnLRbMGAiVrMdw3VRvvG3tPawAAAABJRU5ErkJggg=="})],-1),Pe=t("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAKCAYAAABCHPt+AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV8/pEUqgs0g4pChOlkQFXGUKhbBQmkrtOpgcukXNDEkKS6OgmvBwY/FqoOLs64OroIg+AHi5uak6CIl/i8ptIjx4Lgf7+497t4B/maNqWZwHFA1y8gkE2K+sCKGXhFEFAIGEJaYqaeyCzl4jq97+Ph6F+dZ3uf+HH1K0WSATySeZbphEa8TT29aOud9YoFVJIX4nHjMoAsSP3JddvmNc9lhP88UjFxmjlggFstdLHcxqxgq8RRxTFE1yvfnXVY4b3FWa3XWvid/YaSoLWe5TnMYSSwihTREyKijihosxGnVSDGRof2Eh3/I8afJJZOrCkaOeWxAheT4wf/gd7dmaXLCTYokgJ4X2/4YAUK7QKth29/Htt06AQLPwJXW8W80gZlP0hsdLXYE9G8DF9cdTd4DLneAwSddMiRHCtD0l0rA+xl9UwGI3gK9q25v7X2cPgA56mrpBjg4BEbLlL3m8e5wd2//nmn39wM5bnKQdlMRJgAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+UEExUEK+9MI/8AAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAACw0lEQVRIx+1X23EcMQwDtG7ILiDjPhI3l8ykDrsBpyHPIh+k+JDk7+TDN3O7eyuRokAQ1BH5Eb4+//LDuADQj8dXEAQFuwMY/jzi3RyHjzPmUsCI53IXMICwHWQbHwLI4rf4jPU93nHXueZnzLWLjyHa12MfIK6bIO1u74lrvgdxKd8NWRzz+dLovmRrX/7b1hrlt9mk34zp8rjTt63/oAEAHAD0/fEVgPDz/VsWi5SPIABBWxEx5nCWWFzYpsCT0uvRDKXdK3WiT7cnLTKylLe4RGn00eKTRCxMd2h+lOPzHZWbLFIipv8uMDaRCYj54xYRHm5LnK9raRGFX+/PeHl628FjeaO+SZQUaVrMixSLam6ZM8E2hQ4wmZvt95JCoRi7zYxAJTbqAI8AlkRpcoYQMx5N6nmGBUJi7ldl97QqQi57EH4FQVRj9JUI4eO6Me60GBOpl6e3BZOZMx3aiwJ3bk2IbRaxz+GESTputs7WprAK+4lkq1ztgUk1RcxCk5KtagpuLjSZXFdwdAKXXj1JGgUJWTKm8C1PFHAPLQnhCrexhOvGVqjU1emkZmsuU14ma9Xkpm6mSUTd5Jp8stls0spe9Sk5lRR1AMUX3XLqsnzLjLFKqK4cDIBYoZJX4aLCpUKElZ+ZVS7MXoNWEISLL7ocrmytDLd+UcDcS673ExZ9dnmCFBsM2A/SsTqjsles9Xs8cjYQ1LSgFudsGM2bqhVbj94TslCcDlZiy21GApxpD+ZKDpIOxbOUuXYifG7Fgzo4FyMQ7b3IDwDnykmmRyPvrRNVDJZTQXapqShrb5+yyky+WAnbHQ8A/P3n2fUsda6ToYAdJw7mnhrBmF8xQKynsXhWUamD/hbSl5OJQ8Z+cldp8AuRcdRdVtJbMNJKWEWf2XKgEiCz11SNpVQAYtXBIPDEgPs58uuP4f/wx/AvFvyWFpDcLGsAAAAASUVORK5CYII="},null,-1),ze={style:{"margin-top":"7px"}},_e={expose:[],setup:e=>(e,A)=>(a(),s("div",je,[t("div",null,[Ze,t("div",{style:{width:l(ge).game.timeLeft/l(ge).game.defaultTime*100+"%",overflow:"hidden"}},[Pe],4),t("div",ze,p(l(ge).game.timeLeft)+"s",1)])]))};const $e={class:"game"},ea={class:"topSection"},aa={class:"lifes"},sa={class:"score sub-title"},ta={class:"gameSection"},la={key:0},Aa={key:1},oa={key:2},na={key:3},ra={key:4},ia={expose:[],setup(e){let n=E();return c((()=>{n.params.fromEnter?(D.emit("request_game",{gameId:n.params.id}),D.emit("request_image",{gameId:n.params.id})):ha.push({name:"Enter",params:{id:n.params.id}})})),D.on("game_updated",(e=>{console.log(e),ge.game=e,e.players.forEach((e=>{e.id==n.params.playerId&&(ge.player=e)}))})),D.on("image_updated",(e=>{ge.images=e})),D.on("timer_updated",(e=>{console.log(e),ge.game.timeLeft=e})),(e,n)=>(a(),s("div",$e,[t("div",ea,[t("div",aa,[(a(!0),s(o,null,u(+l(ge).game.lifes,(e=>(a(),s("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAHxJREFUOI3FkzESgCAMBA9eQFr9/9OkhR/ERpQEAszojNvBkW1yODwwJE6du3l5xEcIIt1zXsp9LwSA6451vqUkct9MKomWR6JbAgBDgUUkeieo+V9grmlGWWNdlmVJ3ZGmbTOJKlgjGEr0sCXoSnrDI4GQWMMrMNpf+C0npQk0LXlRwwgAAAAASUVORK5CYII=",key:e,alt:e},null,8,["alt"])))),128))]),t("div",sa,"Score: "+p(l(ge).game.score),1),t(_e,{class:"timer"})]),t("div",ta,["DISPLAY"==l(ge).game.state?(a(),s("div",la,[t(Oe)])):A("",!0),"NONE"==l(ge).game.state?(a(),s("div",Aa,[t(Se)])):A("",!0),"COMPARE"==l(ge).game.state?(a(),s("div",oa,[t(Ve)])):A("",!0),"DRAW"==l(ge).game.state?(a(),s("div",na,[t(He)])):A("",!0),"LOST"==l(ge).game.state?(a(),s("div",ra,[t(Xe)])):A("",!0)])]))}};const da={class:"enter"},ca=t("div",{class:"sub-title"},"ENTER YOUR NAME:",-1),ma=t("div",{class:"spacer2"},null,-1),ga={expose:[],setup(A){let o=E(),n=e(""),r=JSON.parse(localStorage.getItem("runningGames"));function i(e){"Enter"==e.key&&(console.log("test"),D.emit("player_join_game",{id:B.generate(),name:n.value,host:o.params.host||!1,gameId:o.params.id},(e=>{console.log(e),e.id&&(r.push({gameId:o.params.id,playerId:e.id}),localStorage.setItem("runningGames",JSON.stringify(r)),ge.player=e,ha.push({name:"Game",params:{playerId:e.id,id:o.params.id,fromEnter:!0}}))})))}return r.forEach((e=>{e.gameId==o.params.id&&ha.push({name:"Game",params:{playerId:e.playerId,id:o.params.id,fromEnter:!0}})})),(e,A)=>(a(),s("div",da,[ca,ma,m(t("input",{type:"text","onUpdate:modelValue":A[1]||(A[1]=e=>k(n)?n.value=e:n=e),onKeyup:i,placeholder:"NAME..."},null,544),[[h,l(n)]])]))}};const ua=v();i("data-v-f16ab778");const pa=I(" All public Games: ");d();const va={expose:[],setup(A){let n=e([]);return c((()=>{D.emit("request_public_games",(e=>{console.log(e),n.value=e}))})),(e,A)=>(a(),s("div",null,[pa,(a(!0),s(o,null,u(l(n),(e=>(a(),s("div",{key:e[0]},[t(P,{onClick:a=>{return s=e[0],void ha.push({name:"Enter",params:{id:s}});var s}},{default:ua((()=>[I("/"+p(e[0]),1)])),_:2},1032,["onClick"])])))),128))]))},__scopeId:"data-v-f16ab778"},ya=[{path:"/",name:"Home",component:me},{path:"/game/:id",name:"Game",component:ia},{path:"/enter/:id",name:"Enter",component:ga},{path:"/search",name:"Search",component:va}],ha=S({history:U(),routes:ya});b(X).use(ha).mount("#app");
