(this.webpackJsonpmilk_storage=this.webpackJsonpmilk_storage||[]).push([[0],{40:function(e,t,a){e.exports=a(66)},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=a(17),i=(a(45),a(12)),s=a(11),u=a(6),m=a(16),d=a(18),h=(a(20),a(19),a(39),a(7));function E(){var e=new Date,t=e.toLocaleString("en-US",{month:"long",day:"numeric"});return"".concat(t,", ").concat(e.toLocaleTimeString())}function f(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"freeze",a=new Date,n=(e="freeze"===t?new Date(a.setMonth(a.getMonth()+3)):new Date(a.setDate(a.getDate()+3))).toLocaleString("en-US",{month:"long",day:"numeric"});return"".concat(n,", ").concat(e.toLocaleTimeString())}var g=function(e,t){switch(t.type){case"storages":var a=t.payload;return Object(h.a)(Object(h.a)({},e),{},{storages:a,loading:!1});case"store":var n={id:(a=e.storages).length+1,date:E(),expiration:f("freeze"),quantity:t.payload,state:"freeze",thawedDate:"",thawedExpiration:""};return a.push(n),w(n),Object(h.a)(Object(h.a)({},e),{},{storages:a});case"thaw":a=e.storages;var r=Object(h.a)(Object(h.a)({},t.payload),{},{state:"thawed",thawedDate:E(),thawedExpiration:f("thawed"),id:t.payload.id});return console.log(r),a[a.findIndex((function(e){return e.id===t.payload.id}))]=r,j(r),Object(h.a)(Object(h.a)({},e),{},{storages:a});case"done":a=e.storages,r={state:"done",id:t.payload.id};return a[a.findIndex((function(e){return e.id===t.payload.id}))]=r,x(r),Object(h.a)(Object(h.a)({},e),{},{storages:a});default:return}},p={storages:[{id:1,date:"March 1, 9:00PM",expiration:"July 1, 9:00PM",quantity:90,state:"thawed",thawedDate:"March 27, 5:00AM",thawedExpiration:"April 1, 5:00AM"},{id:2,date:"March 3, 1:00PM",expiration:"July 3, 1:00PM",quantity:140,state:"freeze",thawedDate:"",thawedExpiration:""},{id:3,date:"March 9, 3:20AM",expiration:"July 9, 3:20AM",quantity:120,state:"thawed",thawedDate:"March 30, 1:45AM",thawedExpiration:"April 5, 1:45AM"}],loading:!0},y=Object(n.createContext)(p),w=function(e){fetch("https://script.google.com/macros/s/AKfycbwyvDk0ENunSmjxzzPOfBWpyGCIdVa6M9HWAnDijkzKqOwbVLjr/exec?"+new URLSearchParams(Object(h.a)({},e)),{method:"POST",headers:new Headers}).then((function(e){return e.json()})).then((function(e){return console.log("addMilk: ",e)}))},j=function(e){fetch("https://script.google.com/macros/s/AKfycbwyvDk0ENunSmjxzzPOfBWpyGCIdVa6M9HWAnDijkzKqOwbVLjr/exec?"+new URLSearchParams(Object(h.a)({},e)),{method:"POST",headers:new Headers}).then((function(e){return e.json()})).then((function(e){return console.log("thawMilk: ",e)}))},x=function(e){fetch("https://script.google.com/macros/s/AKfycbwyvDk0ENunSmjxzzPOfBWpyGCIdVa6M9HWAnDijkzKqOwbVLjr/exec?"+new URLSearchParams(Object(h.a)({},e)),{method:"POST",headers:new Headers}).then((function(e){return e.json()})).then((function(e){return console.log("doneMilk: ",e)}))},b=function(e){var t=Object(n.useReducer)(g,p),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement(y.Provider,{value:{state:l,dispatch:c}},e.children)},O={margin:"16px"},v=function(){var e=Object(n.useContext)(y).state,t=e.storages.map((function(e){return parseInt(e.quantity)})).reduce((function(e,t){return e+t}),0),a=e.storages.filter((function(e){return"done"===e.state})).map((function(e){return parseInt(e.quantity)})).reduce((function(e,t){return e+t}),0),l=e.storages.filter((function(e){return"freeze"===e.state})).length,c=e.storages.filter((function(e){return"thawed"===e.state})).length,o=(e.storages.slice(-1)[0],t-a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(u.a,{className:"text-center justify-content-center align-items-center",style:{paddingTop:"16px"}},r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1C7HAwFojqKU5Yd4nFLwyPQg9iTNAoTNDAaSE1ftWuBM/edit#gid=0"},"Google Sheet Link"))),r.a.createElement(s.a,{className:"justify-content-center"},r.a.createElement(u.a,{xs:12,style:O},r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,null,"Total stored milk"),r.a.createElement(u.a,null,r.a.createElement("p",{className:"text-center"},t/1e3," L"))))),r.a.createElement(u.a,{xs:12,style:O},r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,null,"Remaining milk"),r.a.createElement(u.a,null,r.a.createElement("p",{className:"text-center"},o/1e3," L"))))),r.a.createElement(u.a,{xs:12,style:O},r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,null,"Remaining Frozen Milk"),r.a.createElement(u.a,null,r.a.createElement("p",{className:"text-center"},l," Bags"))))),r.a.createElement(u.a,{xs:12,style:O},r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,null,"Current Thawed Milk"),r.a.createElement(u.a,null,r.a.createElement("p",{className:"text-center"},c," Bags")))))))},M=a(36),k=function(e){var t=e.status,a=void 0===t?"freeze":t,l=Object(n.useContext)(y),c=l.state,o=l.dispatch,s=c.storages.filter((function(e){return e.state===a}));return r.a.createElement(i.a,null,r.a.createElement(M.a,{striped:!0,hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"freeze"===a?"Pump Date":"Thawed Date"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Expiration"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,s.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,"freeze"===a?e.date:e.thawedDate),r.a.createElement("td",null,e.quantity," mL"),r.a.createElement("td",null,"freeze"===a?e.expiration:e.thawedExpiration),r.a.createElement("td",null,r.a.createElement(d.a,{onClick:function(){return function(e){o({type:"freeze"===a?"thaw":"done",payload:e})}(e)},variant:"freeze"===a?"info":"success"},"freeze"===a?"Thaw":"Done")))})))))},z=a(37),S=a.n(z),A=a(38),D=a.n(A);var L={background:"#333",color:"#fff",textAlign:"center",paddin:"10px"},P={display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},T=function(){var e=Object(n.useState)("home"),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useContext)(y),d=c.state,h=c.dispatch;return Object(n.useEffect)((function(){S.a.init({key:"https://docs.google.com/spreadsheets/d/1C7HAwFojqKU5Yd4nFLwyPQg9iTNAoTNDAaSE1ftWuBM/edit?usp=sharing",simpleSheet:!0}).then((function(e){h({type:"storages",payload:e})}))}),[]),d.loading?r.a.createElement("div",{style:P},r.a.createElement(D.a,{type:"bars",color:"#007bff",height:300,width:300})):r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement("header",{style:L},r.a.createElement("h1",null,"ZL's Milk Storage")))),r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement(m.a,{variant:"tabs",defaultActiveKey:"home",onSelect:function(e){return l(e)}},r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Link,{eventKey:"home"},"Home")),r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Link,{eventKey:"storage"},"Storage")),r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Link,{eventKey:"thawed"},"Thawed Milk"))))),"home"===a?r.a.createElement(v,null):"storage"===a?r.a.createElement(k,{status:"freeze"}):"thawed"===a?r.a.createElement(k,{status:"thawed"}):"Something went wrong")};c.a.render(r.a.createElement(b,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.667adbbf.chunk.js.map