(this.webpackJsonprobots=this.webpackJsonprobots||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),a=n.n(s),i=(n(13),n(3),n(0)),o=function(e){var t=e.name,n=e.email,c=e.id;return Object(i.jsxs)("div",{className:"tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5",children:[Object(i.jsx)("img",{src:"https://robohash.org/".concat(c,"?200*200")}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("h2",{children:[" ",t," "]}),Object(i.jsxs)("p",{children:[" ",n," "]})]})]})},h=function(e){var t=e.searchChange;return Object(i.jsx)("div",{className:"pa2",children:Object(i.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Students",onChange:t})})},u=function(e){var t=e.robots,n=t.map((function(e,n){return Object(i.jsx)(o,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(i.jsx)("div",{children:n})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))},d=n(5),j=n(6),l=n(8),g=n(7),f=(n(15),function(e){Object(l.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return Object(i.jsxs)("div",{className:"tc",children:[Object(i.jsx)("h1",{children:"NerdEra Students"}),Object(i.jsx)(h,{searchChange:this.onSearchChange}),Object(i.jsx)(u,{robots:t})]})}}]),n}(c.Component));a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)("div",{children:Object(i.jsx)(f,{})})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.774583dc.chunk.js.map