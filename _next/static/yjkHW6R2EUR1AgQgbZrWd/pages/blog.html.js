(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{IA3N:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog.html",function(){var e=a("pef5");return{page:e.default||e}}])},pef5:function(e,t,a){"use strict";a.r(t);var n=a("dfwq"),r=a("zrwo"),l=a("0iUn"),c=a("sLSF"),o=a("MI3g"),m=a("a7VT"),i=a("Tit0"),u=a("pLtp"),d=a.n(u),s=a("TSYQ"),p=a.n(s),E=a("YFqc"),f=a.n(E),b=a("q1tI"),g=a.n(b),h=a("+RXl"),v=a("JCaB"),y=a("OJmZ"),w=(a("14y3"),a("rZyW")),_=a("7FCT"),A=a("sh1D"),N=a("rNLx"),x=a("F9JD"),O=a("QDj/"),P=a("IR1q"),j=a("qSlH"),T=a("CM4z"),C=a("+lnw"),I=a("hd1Y"),L=a("/Vld"),R=a("o5iK");var q=[w.metadata,_.metadata,A.metadata,N.metadata,j.metadata,P.metadata,O.metadata,x.metadata,T.metadata,C.metadata,I.metadata,L.metadata,R.metadata].sort(function(e,t){return t.publishedDay-e.publishedDay}),D=q.reduce(function(e,t){var a=t.publishedDay.getFullYear();return e[a]||(e[a]=[]),e[a].push(t),e},{}),F=d()(D).map(Number).sort(function(e,t){return t-e}),k=function(e){function t(e){var a;return Object(l.default)(this,t),(a=Object(o.default)(this,Object(m.default)(t).call(this,e))).articlesMetadata=Object(r.a)({},D),a.years=Object(n.default)(F),a}return Object(i.default)(t,e),Object(c.default)(t,[{key:"render",value:function(){var e=this;return g.a.createElement(h.a,null,g.a.createElement("h1",{className:"font-bold text-center text-4xl"},"Blog"),this.years.map(function(t){return g.a.createElement(g.a.Fragment,{key:t},g.a.createElement("h3",{className:"font-bold mt-8 text-quaternary text-2xl"},t),e.articlesMetadata[t].map(function(e){return g.a.createElement("div",{className:"mt-8",key:e.title},g.a.createElement(f.a,{href:e.relativeUrl,passHref:!0},g.a.createElement("a",{href:"#!",className:"bg-animate block hover:bg-secondary-light overflow-hidden rounded"},e.coverUrl&&g.a.createElement("img",{src:e.coverUrl,alt:e.coverAlt}),g.a.createElement("div",{className:p()([e.coverUrl?"border-b-2 border-l-2 border-r-2":"border-2","border-gray-300 border-solid p-4"])},g.a.createElement("h2",{className:"font-bold mb-4 text-xl lg:text-2xl"},e.title),g.a.createElement("p",{className:"mb-4 text-quaternary text-sm"},g.a.createElement("span",null,"Por "),g.a.createElement("strong",null,Object(v.a)(e.authors)),g.a.createElement("span",null,". Publicado el "),g.a.createElement(y.a,{date:e.publishedDay}),g.a.createElement("span",null,".")),g.a.createElement("p",{className:"mv3"},e.description)))))}))}))}}]),t}(b.Component),J=a("HohS"),M=a.n(J),S=a("m/Pd"),U=a.n(S),Y=M()().publicRuntimeConfig,X={description:"En este blog compartimos informaci\xf3n relevante para la comunidad.",title:"Blog - ".concat(Y.REACT_APP_TITLE),url:"".concat(Y.REACT_APP_URL,"blog.html")};t.default=function(){return g.a.createElement(g.a.Fragment,null,g.a.createElement(U.a,null,g.a.createElement("title",null,X.title),g.a.createElement("meta",{name:"description",content:X.description}),g.a.createElement("meta",{property:"og:url",content:X.url}),g.a.createElement("meta",{property:"og:type",content:"website"}),g.a.createElement("meta",{property:"og:title",content:X.title}),g.a.createElement("meta",{property:"og:description",content:X.description}),g.a.createElement("meta",{property:"og:image",content:Y.REACT_APP_SOCIAL_IMAGE}),g.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),g.a.createElement("meta",{name:"twitter:site",content:"@meetupjs_ar"}),g.a.createElement("meta",{name:"twitter:creator",content:"@meetupjs_ar"}),g.a.createElement("meta",{name:"twitter:title",content:X.title}),g.a.createElement("meta",{name:"twitter:description",content:X.description}),g.a.createElement("meta",{name:"twitter:image",content:Y.REACT_APP_SOCIAL_IMAGE})),g.a.createElement(k,null))}},zrwo:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a("Jo+v"),r=a.n(n),l=a("4mXO"),c=a.n(l),o=a("pLtp"),m=a.n(o),i=a("vYYK");function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=m()(a);"function"===typeof c.a&&(n=n.concat(c()(a).filter(function(e){return r()(a,e).enumerable}))),n.forEach(function(t){Object(i.a)(e,t,a[t])})}return e}}},[["IA3N",1,0,2]]]);