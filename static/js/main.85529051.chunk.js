(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),i=c.n(n),s=c(16),r=c.n(s),l=(c(23),c(24),function(){return Object(n.useEffect)((function(){var e=document.createElement("script");e.src="https://platform.twitter.com/widgets.js",e.async=!0,document.body.appendChild(e)}),[]),Object(a.jsx)("div",{className:"twitter",children:Object(a.jsx)("a",{className:"twitter-timeline","data-lang":"pl","data-width":"500","data-height":"600","data-theme":"dark",href:"https://twitter.com/MZ_GOV_PL?ref_src=twsrc%5Etfw",children:"Tweets by MZ_GOV_PL"})})}),j=c(9),o=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(null),r=Object(j.a)(s,2),l=r[0],o=r[1],d=Object(n.useState)(""),b=Object(j.a)(d,2),h=b[0],u=b[1];return Object(a.jsxs)("div",{className:"roulette",children:[Object(a.jsx)("h1",{children:h||"wpisz min, max i kliknij losuj :P"}),Object(a.jsx)("input",{type:"number",id:"min",placeholder:"min",onChange:function(e){return function(e){i(e.target.value),console.log("min =>"+c)}(e)}}),Object(a.jsx)("input",{type:"number",id:"max",placeholder:"max",onChange:function(e){return function(e){o(e.target.value),console.log("max =>"+l)}(e)}}),Object(a.jsx)("button",{onClick:function(){!function(e,t){e=Math.ceil(e),t=Math.floor(t),u(Math.floor(Math.random()*(t-e+1))+e)}(c,l)},children:"LOSUJ"})]})},d=c(7),b=function(e){return Object(a.jsx)("div",{className:"sidebar",onClick:e.show,children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/home",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/ruletka",children:"Ruletka"})}),Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/twitter",children:"Twitter"})}),Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/podkarpacie",children:"Podkarpacie"})})]})})},h=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],i=t[1],s=function(){i(!c)};return Object(a.jsxs)("nav",{children:[c?Object(a.jsx)(b,{show:s}):null,Object(a.jsxs)("div",{className:"hamburger",onClick:s,children:[Object(a.jsx)("div",{className:"stick stick-1"}),Object(a.jsx)("div",{className:"stick stick-2"}),Object(a.jsx)("div",{className:"stick stick-3"})]}),Object(a.jsx)("h2",{children:"Korona Ruletka!"})]})},u=c.p+"static/media/crown.6f2706cb.svg",m=function(){return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("img",{src:u,className:"hide_mobile",alt:""}),Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("div",{className:"card ",children:Object(a.jsx)(d.b,{className:"ruletka",to:"/ruletka",children:"Ruletka"})}),Object(a.jsx)("div",{className:"card ",children:Object(a.jsx)(d.b,{className:"tt",to:"/twitter",children:"Twitter"})}),Object(a.jsx)("div",{className:"card",children:Object(a.jsx)(d.b,{className:"podkarpacie",to:"/podkarpacie",children:"Podkarpacie"})})]})]})},O=function(){return Object(n.useEffect)((function(){var e=document.createElement("script");e.src="https://platform.twitter.com/widgets.js",e.async=!0,document.body.appendChild(e)}),[]),Object(a.jsxs)("div",{className:"twitter pdk",children:[Object(a.jsx)("h4",{children:"Nie da\u0142o si\u0119 wyci\u0105gn\u0105\u0107 jego odpowiedzi, to masz przynajmniej na niego namiar"}),Object(a.jsx)("a",{className:"twitter-timeline","data-lang":"pl","data-width":"500","data-height":"600","data-theme":"dark",href:"https://twitter.com/McMarcel83?ref_src=twsrc%5Etfw",children:"Tweety go\u015bcia od podkarpacia"})]})},x=c(2);var p=function(){return Object(a.jsx)(d.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h,{}),Object(a.jsxs)(x.c,{children:[Object(a.jsx)(x.a,{path:["/","/home"],exact:!0,component:m}),Object(a.jsx)(x.a,{path:"/ruletka",exact:!0,component:o}),Object(a.jsx)(x.a,{path:"/twitter",exact:!0,component:l}),Object(a.jsx)(x.a,{path:"/podkarpacie",exact:!0,component:O})]})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),f()}},[[30,1,2]]]);
//# sourceMappingURL=main.85529051.chunk.js.map