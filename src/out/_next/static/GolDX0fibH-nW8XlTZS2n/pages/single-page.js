(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/a9y":function(e,t,n){"use strict";var r=n("/GRZ"),a=n("i2R6"),o=n("48fX"),i=n("tCBg"),u=n("T0f4");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var l=n("AroE");t.__esModule=!0,t.default=void 0;var s=l(n("q1tI")),f=l(n("8Kt/")),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var h=function(e){o(n,e);var t=c(n);function n(){return r(this,n),t.apply(this,arguments)}return a(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||d[e]||"An unexpected error has occurred";return s.default.createElement("div",{style:m.error},s.default.createElement(f.default,null,s.default.createElement("title",null,e,": ",t)),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?s.default.createElement("h1",{style:m.h1},e):null,s.default.createElement("div",{style:m.desc},s.default.createElement("h2",{style:m.h2},t,"."))))}}]),n}(s.default.Component);t.default=h,h.displayName="ErrorPage",h.getInitialProps=p,h.origGetInitialProps=p;var m={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},AroE:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"Lz5/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n("o0o1"),a=n.n(r),o=n("HaE+"),i=n("1OyB"),u=n("vuIU"),c=n("Ji7U"),l=n("md7G"),s=n("foSv"),f=n("q1tI"),d=n.n(f),p=n("obyI"),h=n("+m56"),m=n.n(h),y=n("eomm"),g=n.n(y),v=n("t30L"),b=n("GyP+"),x=d.a.createElement;function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var R=new m.a({endpoint:p.a.apiUrl}),w=function(e){Object(c.a)(n,e);var t=E(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.post;return e?x(v.a,null,x("div",{className:"row my-50"},x("h2",null,e.title.rendered),x("img",{src:Object(b.a)(e._embedded,"image")}),x("div",{dangerouslySetInnerHTML:{__html:e.content.rendered}}))):x(g.a,{statusCode:404})}}],[{key:"getInitialProps",value:function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query.slug,r=R.posts(),e.next=4,r.slug(n).embed().then((function(e){return e[0]}));case 4:return o=e.sent,e.abrupt("return",{post:o});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),n}(d.a.Component)},XOum:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/single-page",function(){return n("Lz5/")}])},eomm:function(e,t,n){e.exports=n("/a9y")}},[["XOum",0,1,2,3,4]]]);