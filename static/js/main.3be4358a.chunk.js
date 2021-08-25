(this["webpackJsonpdad-jokes"]=this["webpackJsonpdad-jokes"]||[]).push([[0],{27:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){"use strict";s.r(t);var o=s(2),n=s.n(o),a=s(19),c=s.n(a),i=(s(27),s(10)),r=s(9),l=s.n(r),j=s(22),d=s(20),u=s(4),h=s(5),p=s(3),f=s(7),b=s(6),k=s(21),v=s.n(k),g=(s(47),s(48),s(0)),m=function(e){Object(f.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(u.a)(this,s);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).upvote=function(){console.log("upvote!"),e.props.handleVote(e.props.id,1)},e.downvote=function(){e.props.handleVote(e.props.id,-1)},e.getRating=function(){return e.props.votes>=15?{color:"rgb(25, 160, 25)",emoji:"rolling_on_the_floor_laughing"}:e.props.votes>=12?{color:"#8bc34a",emoji:"laughing"}:e.props.votes>=9?{color:"#cddc39",emoji:"smiley"}:e.props.votes>=6?{color:"#ffeb3b",emoji:"slightly_smiling_face"}:e.props.votes>=3?{color:"#ffc107",emoji:"neutral_face"}:e.props.votes>=0?{color:"#ff9800",emoji:"confused"}:{color:"#f44336",emoji:"rage"}},e}return Object(h.a)(s,[{key:"render",value:function(){var e=this.getRating();return Object(g.jsxs)("div",{className:"Joke",children:[Object(g.jsxs)("div",{className:"Joke-buttons",children:[Object(g.jsx)("i",{onClick:this.upvote,className:"fas fa-arrow-up"}),Object(g.jsx)("span",{style:{borderColor:e.color},children:this.props.votes}),Object(g.jsx)("i",{onClick:this.downvote,className:"fas fa-arrow-down"})]}),Object(g.jsx)("div",{className:"Joke-text",children:this.props.text}),Object(g.jsx)("div",{className:"Joke-emoji",children:Object(g.jsx)("i",{className:"em em-".concat(e.emoji),"aria-label":"NEUTRAL FACE"})})]})}}]),s}(o.Component),O=s(54),x=(s(50),function(e){Object(f.a)(s,e);var t=Object(b.a)(s);function s(e){var o;return Object(u.a)(this,s),(o=t.call(this,e)).handleClick=function(){o.setState({isLoading:!0},o.getJokes)},o.state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),isLoading:!1},o.handleVote=o.handleVote.bind(Object(p.a)(o)),o.getJokes=o.getJokes.bind(Object(p.a)(o)),o}return Object(h.a)(s,[{key:"getJokes",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,s,o=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[];case 1:if(!(t.length<this.props.numJokesToGet)){e.next=8;break}return e.next=4,v.a.get("https://icanhazdadjoke.com",{headers:{Accept:"application/json"}});case 4:s=e.sent,t.push({text:s.data.joke,votes:Math.floor(30*Math.random()-5),id:Object(O.a)()}),e.next=1;break;case 8:this.setState((function(e){var s=e.jokes.slice(0,40);return{jokes:[].concat(t,Object(j.a)(s)),isLoading:!1}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(o.state.jokes))}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){0===this.state.jokes.length&&this.getJokes()}},{key:"handleVote",value:function(e,t){var s=this;console.log("vote!"),this.setState((function(s){return{jokes:s.jokes.map((function(s){return s.id===e?Object(i.a)(Object(i.a)({},s),{},{votes:s.votes+t}):s}))}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(s.state.jokes))}))}},{key:"render",value:function(){var e=this;return this.state.isLoading?Object(g.jsxs)("div",{className:"JokesList-spinner",children:[Object(g.jsx)("i",{className:"far fa-8x fa-laugh fa-spin"}),Object(g.jsx)("h1",{className:"JokesList-title",children:"Loading..."})]}):Object(g.jsxs)("div",{className:"JokesList",children:[Object(g.jsxs)("div",{className:"JokesList-sidebar",children:[Object(g.jsxs)("h1",{className:"JokesList-title",children:[Object(g.jsx)("span",{children:"Dad"})," Jokes"]}),Object(g.jsx)("img",{alt:"crying laughing emoji",src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"}),Object(g.jsx)("button",{className:"JokesList-getmore",onClick:this.handleClick,children:"More Jokes"})]}),Object(g.jsx)("div",{className:"JokesList-jokes",children:this.state.jokes.map((function(t){return Object(g.jsx)(m,{votes:t.votes,text:t.text,id:t.id,handleVote:e.handleVote},t.id)}))})]})}}]),s}(o.Component));x.defaultProps={numJokesToGet:10};var J=x;s(51);var N=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(J,{})})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,55)).then((function(t){var s=t.getCLS,o=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),o(e),n(e),a(e),c(e)}))};c.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root")),w()}},[[52,1,2]]]);
//# sourceMappingURL=main.3be4358a.chunk.js.map