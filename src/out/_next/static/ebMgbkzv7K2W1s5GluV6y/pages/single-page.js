(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/a9y":function(e,t,r){"use strict";var n=r("/GRZ"),a=r("i2R6"),u=r("48fX"),i=r("tCBg"),o=r("T0f4");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=o(e);if(t){var a=o(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return i(this,r)}}var l=r("AroE");t.__esModule=!0,t.default=void 0;var s=l(r("q1tI")),f=l(r("8Kt/")),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var m=function(e){u(r,e);var t=c(r);function r(){return n(this,r),t.apply(this,arguments)}return a(r,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||d[e]||"An unexpected error has occurred";return s.default.createElement("div",{style:h.error},s.default.createElement(f.default,null,s.default.createElement("title",null,e,": ",t)),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?s.default.createElement("h1",{style:h.h1},e):null,s.default.createElement("div",{style:h.desc},s.default.createElement("h2",{style:h.h2},t,"."))))}}]),r}(s.default.Component);t.default=m,m.displayName="ErrorPage",m.getInitialProps=p,m.origGetInitialProps=p;var h={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},AroE:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"GyP+":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e,t){switch(t){case"categories":return e&&e["wp:term"]&&e["wp:term"][0]?e["wp:term"][0]:[];case"tags":return e&&e["wp:term"]&&e["wp:term"][1]?e["wp:term"][1]:[];case"author":return e&&e.author&&e.author[0]?e.author[0]:null;case"image":return e&&e["wp:featuredmedia"]&&e["wp:featuredmedia"][0]&&e["wp:featuredmedia"][0].source_url?e["wp:featuredmedia"][0].source_url:null}}},"HaE+":function(e,t,r){"use strict";function n(e,t,r,n,a,u,i){try{var o=e[u](i),c=o.value}catch(l){return void r(l)}o.done?t(c):Promise.resolve(c).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,u){var i=e.apply(t,r);function o(e){n(i,a,u,o,c,"next",e)}function c(e){n(i,a,u,o,c,"throw",e)}o(void 0)}))}}r.d(t,"a",(function(){return a}))},"Lz5/":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return E}));var n=r("o0o1"),a=r.n(n),u=r("HaE+"),i=r("1OyB"),o=r("vuIU"),c=r("Ji7U"),l=r("md7G"),s=r("foSv"),f=r("q1tI"),d=r.n(f),p=r("obyI"),m=r("+m56"),h=r.n(m),g=r("eomm"),v=r.n(g),y=r("t30L"),b=r("GyP+"),w=d.a.createElement;function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var _=new h.a({endpoint:p.a.apiUrl}),E=function(e){Object(c.a)(r,e);var t=x(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){var e=this.props.post;return e?w(y.a,null,w(PageHeader,{className:"slider page",title:e.title.rendered,img:headerImage||Object(b.a)(e._embedded,"image"),breadcrumb:breadcrumb,url:e.slug}),w("div",{className:"row my-50"},w("h2",null,e.title.rendered),w("img",{src:Object(b.a)(e._embedded,"image")}),w("div",{dangerouslySetInnerHTML:{__html:e.content.rendered}}))):w(v.a,{statusCode:404})}}],[{key:"getInitialProps",value:function(){var e=Object(u.a)(a.a.mark((function e(t){var r,n,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query.slug,n=_.posts(),e.next=4,n.slug(r).embed().then((function(e){return e[0]}));case 4:return u=e.sent,e.abrupt("return",{post:u});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),r}(d.a.Component)},XOum:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/single-page",function(){return r("Lz5/")}])},eomm:function(e,t,r){e.exports=r("/a9y")},o0o1:function(e,t,r){e.exports=r("ls82")}},[["XOum",0,1,2,3]]]);