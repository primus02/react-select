(this["webpackJsonpreact-selectuser-project"]=this["webpackJsonpreact-selectuser-project"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),r=n(3),i=n.n(r),u=(n(17),n(8)),o=n.n(u),j=n(11),l=n(2),d=(n(19),n(4));var b=function(e){var t=e.data,n=Object(a.useState)(""),s=Object(l.a)(n,2),r=s[0],i=s[1],u=t.map((function(e){return{id:e.id,value:e.name,label:e.name}}));return Object(c.jsxs)("div",{children:[Object(c.jsx)(d.a,{options:u,value:r,onChange:function(e){i(e)}}),Object(c.jsxs)("p",{className:"selected",children:["You have selected ",Object(c.jsx)("strong",{children:r.value})," whose id is ",Object(c.jsx)("strong",{children:r.id})]})]})};var p=function(e){var t=e.data,n=Object(a.useState)(""),s=Object(l.a)(n,2),r=s[0],i=s[1],u=Object(a.useState)([]),o=Object(l.a)(u,2),j=o[0],b=o[1],p=t.map((function(e){return{id:e.id,value:e.name,label:e.name}}));return Object(c.jsxs)("div",{children:[Object(c.jsx)(d.a,{isMulti:!0,options:p,value:r,onChange:function(e){i(e),b(e)}}),j.map((function(e){return Object(c.jsx)("h4",{className:"list",children:e.value},e.id)}))]})};var h=function(){Object(a.useEffect)((function(){r()}),[]);var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],r=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log(n),s(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(b,{data:n}),Object(c.jsx)(p,{data:n})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),f()}},[[35,1,2]]]);
//# sourceMappingURL=main.26c9e032.chunk.js.map