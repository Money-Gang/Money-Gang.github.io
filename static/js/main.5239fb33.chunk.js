(this["webpackJsonphype-mapper-site"]=this["webpackJsonphype-mapper-site"]||[]).push([[0],[,,function(e,t,a){},,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),i=a.n(c),r=(a(10),a(2),a(4));function o(e){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"slide-content-title"},e.title),l.a.createElement("p",{className:"slide-content-text"},"Cras ac mi diam. Donec condimentum eget egestas. Nam diam eros, convallis quis justo in, pellentesque arcu convallis quis justo in, dictum. Aenean vehicula accumsan rhoncus. "),l.a.createElement("div",{className:"slide-content-image"},l.a.createElement("p",null,"IMAGE HERE")))}function s(){var e=[l.a.createElement(o,{title:"Slide 1"}),l.a.createElement(o,{title:"Slide 2"}),l.a.createElement(o,{title:"Slide 3"}),l.a.createElement(o,{title:"Slide 4"}),l.a.createElement(o,{title:"Slide 5"})],t=Object(n.useState)(0),a=Object(r.a)(t,2),c=a[0],i=a[1],s=function(e){i(100*(1-e.target.value))};return l.a.createElement("div",{className:"slider"},e.map((function(e,t){return l.a.createElement("div",{className:"slide",style:{transform:"translateY(".concat(c,"%)")}},l.a.createElement("br",null),e)})),l.a.createElement("button",{id:"go-up",onClick:function(){i(0===c?-100*(e.length-1):c+100)}},"Up"),l.a.createElement("button",{id:"go-down",onClick:function(){c===-100*(e.length-1)?i(0):i(c-100)}},"Down"),l.a.createElement("div",{id:"slide-count"},l.a.createElement("button",{onClick:s,value:1},"1"),l.a.createElement("button",{onClick:s,value:2},"2"),l.a.createElement("button",{onClick:s,value:3},"3"),l.a.createElement("button",{onClick:s,value:4},"4"),l.a.createElement("button",{onClick:s,value:5},"5")))}function m(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header-logo"},"Hype mapper"),l.a.createElement("div",{className:"header-nav"},l.a.createElement("a",{href:"#"},"Sign up"),l.a.createElement("a",{href:"#"},"Sign in")))}function u(){return l.a.createElement("div",{class:"container"},l.a.createElement(m,null),l.a.createElement(s,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.5239fb33.chunk.js.map