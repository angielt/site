(window.webpackJsonpangielt=window.webpackJsonpangielt||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(8),r=a.n(i),l=(a(14),a(2)),s=a(3),o=a(5),u=a(4),m=a(1),h=a(6),d=(a(15),a(16),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).language=a.language.bind(Object(m.a)(a)),a.about=a.about.bind(Object(m.a)(a)),a.contact=a.contact.bind(Object(m.a)(a)),a.project=a.project.bind(Object(m.a)(a)),a.game=a.game.bind(Object(m.a)(a)),a.state={tab:0,language:"english"},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"language",value:function(){"english"==this.state.language?this.setState({language:"chinese"}):"chinese"==this.state.language&&this.setState({language:"english"})}},{key:"about",value:function(){this.setState({tab:1})}},{key:"contact",value:function(){this.setState({tab:2})}},{key:"project",value:function(){this.setState({tab:3})}},{key:"game",value:function(){this.setState({tab:4})}},{key:"render",value:function(){return c.a.createElement("div",{id:"root"},c.a.createElement("div",{id:"button_group"},c.a.createElement("button",{type:"button",className:"detail_btn",id:"0",onClick:this.language,title:"coming soon\uff0c\u8acb\u7b49\u4e00\u4e0b"},"\u8a9e\u8a00"),c.a.createElement("button",{type:"button",className:"detail_btn",id:"1",onClick:this.about},"About"),c.a.createElement("button",{type:"button",className:"detail_btn",id:"2",onClick:this.contact},"Contact"),c.a.createElement("button",{type:"button",className:"detail_btn",id:"3",onClick:this.project},"Project Details"),c.a.createElement("button",{type:"button",className:"detail_btn",id:"4",onClick:this.game},"Game Dev")),c.a.createElement(p,{curTab:this.state.tab,curLanguage:this.state.language}))}}]),t}(c.a.Component)),p=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return 0==this.props.curTab||1==this.props.curTab?e=c.a.createElement(g,{curLanguage:this.props.curLanguage}):2==this.props.curTab?e=c.a.createElement(b,{curLanguage:this.props.curLanguage}):3==this.props.curTab?e=c.a.createElement(E,{curLanguage:this.props.curLanguage}):4==this.props.curTab&&(e=c.a.createElement(v,{curLanguage:this.props.curLanguage})),c.a.createElement("div",null,e)}}]),t}(c.a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={english:["My name is Angie Ta. I am a web/iOS developer and recent graduate from the University of California, Davis.","Some of my passions are:"],chinese:["\u4f60\u597d\uff0c\u6211\u53ebAngie Ta\u3002\u6211\u662fweb/iOS developer.\u6b63\u5728\u5728\u52a0\u5dde\u5927\u5b78\u6234\u7ef4\u65af\u7562\u696d\u4e86\u3002\u60c5\u770b\u6211\u7684\u7db2\u7ad9\u3002","\u6211\u7684\u4e00\u4e9b\u8208\u8da3\u662f:"]};return c.a.createElement("div",{className:"Content",onload:"this.style.opacity='1"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},{english:["About"],chinese:["\u6211\u662f\u8ab0\uff1f"]}[this.props.curLanguage]),c.a.createElement("p",{className:"card-text"},e[this.props.curLanguage][0]," ",c.a.createElement("br",null),e[this.props.curLanguage][1]),c.a.createElement("li",null,"React/ReactNative"),c.a.createElement("li",null,"CS in Medicine"),c.a.createElement("li",null,"Linguistics/Learning Spoken Languages"),c.a.createElement("li",null,"Language Translation"),c.a.createElement("li",null,"Game Dev/Game Art"))),c.a.createElement("div",{className:"card"},c.a.createElement("h4",{className:"card-title"},{english:["Projects and Experience"],chinese:["\u9805\u76ee"]}[this.props.curLanguage][0]),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},"PocketOphtho"),c.a.createElement("p",{className:"card-text"},"Google CSSI 2015 MTV"))))}}]),t}(c.a.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Content",onload:"document.body.style.opacity='1'"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},{english:"Contact Me",chinese:"\u806f\u7e6b\u65b9\u5f0f"}[this.props.curLanguage]),c.a.createElement("p",{className:"card-text"},{english:"I would love to chat! Reach me at:",chinese:"\u60f3\u8ddf\u6211\u8b1b\u7684\u8a71\u8acb\u7528:"}[this.props.curLanguage]),c.a.createElement("ul",null," angielisata@gmail.com"),c.a.createElement("ul",null," or on social media"))))}}]),t}(c.a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Content",onload:"document.body.style.opacity='1'"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},"Recent Projects:"),c.a.createElement("p",{className:"card-text"},"PocketOphtho"),c.a.createElement("img",{src:"images/ophth.png",height:"70",width:"70"}),c.a.createElement("div",null,c.a.createElement("ul",null," Developed closely with members of the UC Davis School of Medicine and UC Davis Eye Center.  "),c.a.createElement("ul",null," PocketOphtho is an interactive ophthalmology review app designed for residents and fellows preparing for OKAPs and written boards. With the use of spaced repetition, a learning technique that takes advantage of the psychological spacing effect, PocketOphtho aims to be the new standard for clinical review apps. "),c.a.createElement("img",{border:"0",alt:"github",src:"images/UCDavisHealth.svg",height:"30",width:"70"})),c.a.createElement("p",{className:"card-text"},"Google CSSI MTV"),c.a.createElement("div",null,c.a.createElement("a",{href:"www.stage-bright.appspot.com"},"Demo"),c.a.createElement("ul",null," Created several small projects in Python, HTML and CSS that were used to create the resource pages and establish the teleprompter on stage-bright.appspot.com, a web app that anyone, especially children, can use to improve their public speaking and presentation skills. The web app utilizes voice recognition APIs that produces a scrolling teleprompter and includes a library of linked YouTube videos and articles.  ")))))}}]),t}(c.a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Content",onload:"document.body.style.opacity='1'"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},"Recent Projects:"),c.a.createElement("p",{className:"card-text"},"I dabble a bit into the Game Dev and Art scene. Here is what I have created so far."),c.a.createElement("a",{href:"images/welcometotheoasis.html"},c.a.createElement("img",{border:"0",alt:"github",src:"images/toro.png",height:"70",width:"70"})),c.a.createElement("div",null,c.a.createElement("h5",null," The Oasis (Click fish to play)"),c.a.createElement("ul",null," A 2D scroller platformer exploring the themes of animal ethics through a tuna fish's escape to freedom. Developed in a team using PICO-8."),c.a.createElement("a",{href:"https://samclee.itch.io/1-year-out"},c.a.createElement("img",{border:"0",alt:"github",src:"images/logo.png",height:"70",width:"70"})),c.a.createElement("h5",null," 1 Year Out (Click)"),c.a.createElement("ul",null," A RPG adventure exploring life of 4 characters out of college. Developed in a team using LUA and FireAlpaca. I don't have an itch.io.")))))}}]),t}(c.a.Component),f=d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(f,null),document.getElementById("item-right")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.4c0efd35.chunk.js.map