(this["webpackJsonphype-mapper-site"]=this["webpackJsonphype-mapper-site"]||[]).push([[0],{25:function(e,a,t){},33:function(e,a,t){e.exports=t(50)},38:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(27),c=t.n(r),s=(t(38),t(3)),o=t(1),i=t(28),m=t(29),u=t(32),d=t(31),p=(t(10),t(21),t(17),t(11)),g=t.n(p);t(40),t(42);g.a.initializeApp({apiKey:"AIzaSyCaBdj-Yro-A8s9vDC-tjkgeyHHLaYpYRg",authDomain:"money-gang-db5cb.firebaseapp.com",databaseURL:"https://money-gang-db5cb.firebaseio.com",projectId:"money-gang-db5cb",storageBucket:"money-gang-db5cb.appspot.com",messagingSenderId:"775893076178",appId:"1:775893076178:web:a0c4d4f1d2a0462f0d850b",measurementId:"G-F7BZNFHZMX"});var E=g.a.auth(),b=(g.a.firestore(),new g.a.auth.GoogleAuthProvider),h=function(){E.signInWithPopup(b)},v=Object(n.createContext)({user:null}),f=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={user:null},e.componentDidMount=function(){E.onAuthStateChanged((function(a){e.setState({user:a})}))},e}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(v.Provider,{value:this.state.user},this.props.children)}}]),t}(n.Component),N=(t(25),t(7));var w=function(e){var a=Object(n.useState)(""),t=Object(N.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),i=Object(N.a)(o,2),m=i[0],u=i[1],d=Object(n.useState)(null),p=Object(N.a)(d,2),g=p[0],E=(p[1],function(e){var a=e.currentTarget,t=a.name,n=a.value;"userEmail"===t?c(n):"userPassword"===t&&u(n)});return l.a.createElement("div",{className:"mt-8"},l.a.createElement("h1",{className:"text-3xl mb-2 text-center font-bold"},"Sign In"),l.a.createElement("div",{className:"border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"},null!==g&&l.a.createElement("div",{className:"py-4 bg-red-600 w-full text-white text-center mb-3"},g),l.a.createElement("form",{className:""},l.a.createElement("label",{htmlFor:"userEmail",className:"block"},"Email:"),l.a.createElement("input",{type:"email",className:"my-1 p-1 w-full",name:"userEmail",value:r,placeholder:"E.g: faruq123@gmail.com",id:"userEmail",onChange:function(e){return E(e)}}),l.a.createElement("label",{htmlFor:"userPassword",className:"block"},"Password:"),l.a.createElement("input",{type:"password",className:"mt-1 mb-3 p-1 w-full",name:"userPassword",value:m,placeholder:"Your Password",id:"userPassword",onChange:function(e){return E(e)}}),l.a.createElement("button",{className:"bg-green-400 hover:bg-green-500 w-full py-2 text-white",onClick:function(e){!function(e,a,t){e.preventDefault()}(e)}},"Sign in")),l.a.createElement("p",{className:"text-center my-3"},"or"),l.a.createElement("button",{className:"bg-red-500 hover:bg-red-600 w-full py-2 text-white",onClick:function(e){h()}},"Sign in with Google"),l.a.createElement("p",{className:"text-center my-3"},"Don't have an account?"," ",l.a.createElement(s.b,{to:"signUp",className:"text-blue-500 hover:text-blue-600"},"Sign up here")," ",l.a.createElement("br",null)," ",l.a.createElement(s.b,{to:"passwordReset",className:"text-blue-500 hover:text-blue-600"},"Forgot Password?"))))};function y(e){var a="/Money-Gang.github.io"+e.path;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"slide-content-text"},l.a.createElement("h1",{className:"slide-title"},e.title),l.a.createElement("p",{className:"slide-paragraph"},"Cras ac mi diam. Donec condimentum eget egestas. Nam diam eros, convallis quis justo in, pellentesque arcu convallis quis justo in, dictum. Aenean vehicula accumsan rhoncus. as ")),l.a.createElement("div",{className:"slide-content-image",style:{backgroundImage:"url(".concat(a,")")}}))}function x(e){var a="/Money-Gang.github.io"+e.path;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"slide-content-text-2"},l.a.createElement("h1",{className:"slide-title-2"},e.title),l.a.createElement("p",{className:"slide-paragraph-2"},"Cras ac mi diam. Donec condimentum eget egestas. Nam diam eros, convallis quis justo in, pellentesque arcu convallis quis justo in, dictum. Aenean vehicula accumsan rhoncus. as ")),l.a.createElement("div",{className:"slide-content-image-2",style:{backgroundImage:"url(".concat(a,")")}}))}function S(){var e=[l.a.createElement(y,{title:"Hype Mapper: the new way to resell",path:"/img/first_slide_1.png"}),l.a.createElement(x,{title:"Slide 2",path:"/img/first_slide_2.png"}),l.a.createElement(x,{title:"Slide 3",path:"/img/first_slide_3.png"}),l.a.createElement(y,{title:"Slide 4",path:"/img/first_slide_4.png"}),l.a.createElement(y,{title:"Slide 5",path:"/img/first_slide_5.png"})],a=Object(n.useState)(0),t=Object(N.a)(a,2),r=t[0],c=t[1],s=function(e){var a=100*parseInt(e.target.id);c(100-a)};return l.a.createElement("div",{className:"slider"},e.map((function(e,a){return l.a.createElement("div",{className:"slide",style:{transform:"translateY(".concat(r,"%)")}},e)})),l.a.createElement("div",{id:"go-up",onClick:function(){c(0===r?-100*(e.length-1):r+100)}},l.a.createElement("img",{src:"/Money-Gang.github.io/img/arrow_up.png"})),l.a.createElement("div",{id:"go-down",onClick:function(){r===-100*(e.length-1)?c(0):c(r-100)}},l.a.createElement("img",{src:"/Money-Gang.github.io/img/arrow_down.png"})),l.a.createElement("div",{id:"slide-count"},l.a.createElement("div",{className:0===r?"rounded-selector rounded-selector-active":"rounded-selector",id:"1",onClick:s}),l.a.createElement("div",{className:-100===r?"rounded-selector rounded-selector-active":"rounded-selector",id:"2",onClick:s}),l.a.createElement("div",{className:-200===r?"rounded-selector rounded-selector-active":"rounded-selector",id:"3",onClick:s}),l.a.createElement("div",{className:-300===r?"rounded-selector rounded-selector-active":"rounded-selector",id:"4",onClick:s}),l.a.createElement("div",{className:-400===r?"rounded-selector rounded-selector-active":"rounded-selector",id:"5",onClick:s})))}function j(e){e.props;return l.a.createElement(S,null)}var k=function(){var e=Object(n.useContext)(v);if(e){var a=e.photoURL,t=e.displayName,r=e.email;return l.a.createElement("div",{className:"mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8"},l.a.createElement("div",{className:"flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4"},l.a.createElement("div",{style:{background:"url(".concat(a,")  no-repeat center center"),backgroundSize:"cover",height:"200px",width:"200px"},className:"border border-blue-300"}),l.a.createElement("div",{className:"md:pl-4"},l.a.createElement("h2",{className:"text-2xl font-semibold"},t),l.a.createElement("h3",{className:"italic"},r))),l.a.createElement("button",{className:"w-full py-3 bg-red-600 mt-4 text-white",onClick:function(){E.signOut()}},"Sign out"))}return l.a.createElement("div",null," no user ")},C=function(){var e=Object(n.useState)(""),a=Object(N.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),o=Object(N.a)(c,2),i=o[0],m=o[1],u=Object(n.useState)(""),d=Object(N.a)(u,2),p=d[0],g=d[1],E=Object(n.useState)(null),b=Object(N.a)(E,2),v=b[0],f=(b[1],function(e){var a=e.currentTarget,t=a.name,n=a.value;"userEmail"===t?r(n):"userPassword"===t?m(n):"displayName"===t&&g(n)});return l.a.createElement("div",{className:"mt-8"},l.a.createElement("h1",{className:"text-3xl mb-2 text-center font-bold"},"Sign Up"),l.a.createElement("div",{className:"border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"},null!==v&&l.a.createElement("div",{className:"py-4 bg-red-600 w-full text-white text-center mb-3"},v),l.a.createElement("form",{className:""},l.a.createElement("label",{htmlFor:"displayName",className:"block"},"Display Name:"),l.a.createElement("input",{type:"text",className:"my-1 p-1 w-full ",name:"displayName",value:p,placeholder:"E.g: Faruq",id:"displayName",onChange:function(e){return f(e)}}),l.a.createElement("label",{htmlFor:"userEmail",className:"block"},"Email:"),l.a.createElement("input",{type:"email",className:"my-1 p-1 w-full",name:"userEmail",value:t,placeholder:"E.g: faruq123@gmail.com",id:"userEmail",onChange:function(e){return f(e)}}),l.a.createElement("label",{htmlFor:"userPassword",className:"block"},"Password:"),l.a.createElement("input",{type:"password",className:"mt-1 mb-3 p-1 w-full",name:"userPassword",value:i,placeholder:"Your Password",id:"userPassword",onChange:function(e){return f(e)}}),l.a.createElement("button",{className:"bg-green-400 hover:bg-green-500 w-full py-2 text-white",onClick:function(e){!function(e,a,t){e.preventDefault(),r(""),m(""),g("")}(e)}},"Sign up")),l.a.createElement("p",{className:"text-center my-3"},"or"),l.a.createElement("button",{className:"bg-red-500 hover:bg-red-600 w-full py-2 text-white",onClick:function(e){h()}},"Sign In with Google"),l.a.createElement("p",{className:"text-center my-3"},"Already have an account?"," ",l.a.createElement(s.b,{to:"/",className:"text-blue-500 hover:text-blue-600"},"Sign in here"))))};var O=function(e){return l.a.createElement("div",null,"Welcome User!",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"button",onClick:function(){e.history.push("/login")},value:"Logout"}))};function P(){var e=Object(n.useContext)(v);return console.log(e),null!=e.user?l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header-logo"},l.a.createElement(s.b,{to:"/"},"Hype mapper")),l.a.createElement("div",{className:"header-nav"},l.a.createElement(s.b,{to:"/profile"},"Profile"))):l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header-logo"},l.a.createElement(s.b,{to:"/"},"Hype mapper")),l.a.createElement("div",{className:"header-nav"},l.a.createElement(s.b,{to:"/signup"},"Sign up"),l.a.createElement(s.b,{to:"/login"},"Sign in")))}var I=t(20);function _(){return l.a.createElement(s.a,null,l.a.createElement("div",{class:"container"},l.a.createElement(P,null),l.a.createElement(f,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/"},l.a.createElement(j,null)),l.a.createElement(o.a,{path:"/login"},l.a.createElement(w,null)),l.a.createElement(o.a,{path:"/signup"},l.a.createElement(C,null)),l.a.createElement(o.a,{path:"/dashboard"},l.a.createElement(O,null)),l.a.createElement(o.a,{path:"/profile"},l.a.createElement(k,null))))))}I.a.initialize("G-ZPS4E8CS8F"),I.a.pageview(window.location.pathname+window.location.search);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.792fc206.chunk.js.map