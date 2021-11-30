(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=n(10),u=n(8),s=n(2),d=n(7),l=n.n(d),b=(n(23),n(0));function j(e){var t=e.onAddContact,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),d=u[0],l=u[1],j=function(){o(""),l("")};return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:r,number:d}),j()},children:[Object(b.jsxs)("label",{children:["Name",Object(b.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:function(e){o(e.currentTarget.value)}})]}),Object(b.jsxs)("label",{children:["Number",Object(b.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:d,onChange:function(e){l(e.currentTarget.value)}})]}),Object(b.jsx)("button",{type:"submit",children:"Add contact"})]})}var m=function(e){var t=e.contacts,n=e.onRemoveContact;return Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsxs)("li",{children:[e.name+":"+e.number,Object(b.jsx)("button",{className:"button_delete",type:"button",name:"delete",onClick:function(){return n(e.id)},children:"delete"})]},e.id)}))})};console.log(m.contacts);var f=m;function O(e){var t=e.value,n=e.onChangeFilter;return Object(b.jsxs)("div",{children:["Find contacts by name",Object(b.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}})]})}var h=function(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),d=o[0],m=o[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var h=d.toLowerCase(),v=n.filter((function(e){return e.name.toLowerCase().includes(h)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(j,{onAddContact:function(e){var t=e.name.toLowerCase(),a=n.find((function(e){return e.name.toLowerCase()===t}));if(a)alert("".concat(e.name," is already in contacts"));else if(0===e.name.length)alert("Fields must be filled!");else{var r=Object(u.a)(Object(u.a)({},e),{},{id:l()()});c((function(e){return[].concat(Object(i.a)(e),[r])}))}}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(O,{value:d,onChangeFilter:function(e){m(e)}}),v&&Object(b.jsx)(f,{contacts:v,onRemoveContact:function(e){c(n.filter((function(t){return t.id!==e})))}})]})};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.90042384.chunk.js.map