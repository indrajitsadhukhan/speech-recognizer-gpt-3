(this.webpackJsonpvoicetext=this.webpackJsonpvoicetext||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/micBtn.c01661c8.svg"},function(e,t,n){e.exports=n.p+"static/media/speak.a7c65d20.jpg"},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),i=(n(14),n(1)),s=n.n(i),l=n(2),u=n(3),p=(n(16),n(6)),m=n(7),h=n.n(m),f=n(8),d=n.n(f),b="https://main--visionary-youtiao-038df7.netlify.app/.netlify/functions/api",E=new(window.SpeechRecognition||window.webkitSpeechRecognition);E.continuous=!0,E.interimResults=!0,E.lang="en-US";var v=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(" "),i=Object(u.a)(c,2),m=i[0],f=i[1],v=Object(a.useState)(""),g=Object(u.a)(v,2),y=g[0],w=g[1],x=Object(p.useSpeechSynthesis)(),k=x.speak,j=x.cancel,S=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}f(""),E.start(),E.onend=function(){E.start()},w("Listening to your input..."),j(),e.next=12;break;case 8:return E.stop(),E.onend=function(){},e.next=12,A();case 12:E.onstart=function(){},E.onresult=function(e){var t=Array.from(e.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");f(t),E.onerror=function(e){console.log(e.error),f("")}};case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function O(e){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b+"/completion",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:t})}).catch((function(e){return console.log(e)}));case 2:if(!(null===(n=e.sent)||void 0===n?void 0:n.ok)){e.next=11;break}return e.next=6,n.json();case 6:return a=e.sent,r=a.bot,e.abrupt("return",r);case 11:return e.abrupt("return","I am sorry, could you say that again please");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w("Processing your input..."),e.next=3,O(m);case 3:t=e.sent,w(t.split("\n").map((function(e){return r.a.createElement("p",null,e)}))),k({text:t});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"main-div"},r.a.createElement("header",null,r.a.createElement("h1",{style:{fontSize:30}},"Assistant on the Go"),r.a.createElement("p",null,"(Enabled with GPT)")),r.a.createElement("section",{className:"holder-section"},r.a.createElement("h2",null,"Your transcript"),r.a.createElement("div",{className:"text-holder"},r.a.createElement("p",null,m))),r.a.createElement("section",{className:"holder-section"},r.a.createElement("h2",null,"Response"),r.a.createElement("div",{className:"text-holder"},r.a.createElement("p",null,y))),r.a.createElement("footer",{className:"bg-blur"},r.a.createElement("div",{className:"tooltip info"},"?",r.a.createElement("span",{className:"tooltiptext",style:{width:300}},"Allow microphone to use this app. ",r.a.createElement("br",null),"Settings -> All Apps -> Permission -> Enable Microphone")),r.a.createElement("p",{style:{marginBottom:20}},n?r.a.createElement(r.a.Fragment,null,"Speak & tap the Microphone..."):r.a.createElement(r.a.Fragment,null,"Tap the Microphone...")),r.a.createElement("button",{className:"mic-btn",onClick:function(){o(!n),S(!n)}},n?r.a.createElement("img",{src:d.a,style:{background:"no-repeat center",height:90},alt:"oo"}):r.a.createElement("img",{src:h.a,style:{background:"no-repeat center"},alt:"oo"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.53605d50.chunk.js.map