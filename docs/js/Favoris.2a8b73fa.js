(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Favoris"],{"5f29":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"favoris"},[n("div",{staticClass:"container"},[t._m(0),n("table",{staticClass:"table"},[t._m(1),n("tbody",t._l(t.favoris,(function(e,a){return n("tr",{key:a},[n("th",[t._v(t._s(e))])])})),0)])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",[n("strong",[t._v("Liste de vos favoris : ")])]),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Villes")]),n("th",{attrs:{scope:"col"}},[t._v("Météo")])])])}],i=(n("b0c0"),n("d3b7"),{name:"Favoris",data:function(){return{ville:"",temperature:"",humidite:"",vent:"",textcontent:"",icon:"",favoris:""}},methods:{showMeteo:function(t){var e=this;t="Nantes";var n="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=366e5f70d9e70e45364730cb9a4f0221&units=metric&lang=fr");fetch(n).then((function(t){return t.json().then((function(t){e.ville=t.name,e.temperature=t.main.temp+"°",e.humidite=t.main.humidity+"%",e.vent=t.wind.speed+"km/h",e.icon=t.weather[0].icon}))})).catch((function(t){return console.log("Erreur : "+t)}))}},created:function(){this.favoris=JSON.parse(localStorage.getItem("ville"))}}),o=i,c=n("2877"),s=Object(c["a"])(o,a,r,!1,null,null,null);e["default"]=s.exports},b0c0:function(t,e,n){var a=n("83ab"),r=n("9bf2").f,i=Function.prototype,o=i.toString,c=/^\s*function ([^ (]*)/,s="name";a&&!(s in i)&&r(i,s,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=Favoris.2a8b73fa.js.map