(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{34:function(t,e,n){},37:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),a=n(9),i=n.n(a),r=n(5),s=n(19),u=(n(33),n(34),n(11)),l=n(3),m=n(20),b=n.n(m),_=n(2),j=Object(l.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Klim",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copelend",number:"227-91-26"}],{"ContactList / DeleteContact":function(t,e){return t.filter((function(t){return t.id!==e.payload}))},"ContactForm /Submit":function(t,e){return function(t,e){var n=e.payload;console.log(t);var c=t.map((function(t){return t.name})).find((function(t){return t===n.name}));return console.log(c),void 0===c?[n].concat(Object(u.a)(t)):(alert("".concat(n.name," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u043a\u043d\u0438\u0433\u0435")),t)}(t,e)}}),f=Object(l.c)("",{"Filter/SetFilter":function(t,e){return e.payload.toLowerCase()}}),d=Object(_.c)({items:j,filter:f}),O=n(4),p=n(21),h={key:"contacts",storage:n.n(p).a,blacklist:["filter"]},C=[].concat(Object(u.a)(Object(l.d)({serializableCheck:{ignoredActions:[O.a,O.f,O.b,O.c,O.d,O.e]}})),[b.a]),x=Object(l.a)({reducer:{contacts:Object(O.g)(h,d)},devTools:!1,middleware:C}),g={store:x,persistor:Object(O.h)(x)},F=(n(37),n(15)),v=n(41),S=n(6),L=n.n(S),N=Object(l.b)("ContactList / DeleteContact"),y=Object(l.b)("ContactForm /Submit"),k=Object(l.b)("Filter/SetFilter"),w=n(1),J=Object(r.b)(null,(function(t){return{onSubmit:function(e){return t(y(e))}}}))((function(t){var e=t.onSubmit,n=Object(c.useState)(""),o=Object(F.a)(n,2),a=o[0],i=o[1],r=Object(c.useState)(""),s=Object(F.a)(r,2),u=s[0],l=s[1],m=function(t){"name"===t.target.attributes.id.nodeValue?i(t.target.value):"number"===t.target.attributes.id.nodeValue&&l(t.target.value)};return Object(w.jsxs)("form",{className:L.a.contact_form,children:[Object(w.jsx)("label",{htmlFor:a,className:L.a.contact_form_input_label,children:"name"}),Object(w.jsx)("input",{className:L.a.contact_form_input,type:"input",id:"name",autoComplete:"off",onChange:m,value:a}),Object(w.jsx)("label",{htmlFor:u,className:L.a.contact_form_input_label,children:"number"}),Object(w.jsx)("input",{className:L.a.contact_form_input,type:"input",id:"number",autoComplete:"off",onChange:m,value:u}),Object(w.jsx)("button",{className:L.a.contact_form_button,type:"button",onClick:function(t){var n={id:Object(v.a)(),name:a,number:u};a&&""!==u&&(e(n),i(""),l(""))},children:"Add contact"})]})})),A=Object(r.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onSetFilter:function(e){return t(k(e.target.value))}}}))((function(t){var e=t.onSetFilter,n=t.filter;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h2",{children:"find contacts by name"}),Object(w.jsx)("input",{type:"text",name:"filter",autoComplete:"off",onChange:e,value:n})]})})),D=n(7),E=n.n(D),Y=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e)}))},B=Object(r.b)((function(t){var e=t.contacts,n=e.items,c=e.filter;return{items:Y(n,c)}}),(function(t){return{onDeleteContact:function(e){return t(N(e))}}}))((function(t){var e=t.items,n=t.onDeleteContact;return Object(c.useEffect)((function(){localStorage.setItem("contact",JSON.stringify(e))}),[e]),Object(w.jsx)("ul",{className:E.a.contactList,children:e.map((function(t){return Object(w.jsxs)("li",{className:E.a.contact_list_item,children:[Object(w.jsx)("p",{className:E.a.contact_list_item_name,children:t.name}),Object(w.jsx)("p",{className:E.a.contact_list_item_number,children:t.number}),Object(w.jsx)("button",{className:E.a.contact_list_item_button,type:"button",onClick:function(){return n(t.id)},children:"delete"})]},t.id)}))})})),I=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h1",{children:"phonebook"}),Object(w.jsx)(J,{}),Object(w.jsx)("h2",{children:"Contacts"}),Object(w.jsx)(A,{}),Object(w.jsx)(B,{})]})};i.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(r.a,{store:g.store,children:Object(w.jsx)(s.a,{loading:null,persistor:g.persistor,children:Object(w.jsx)(I,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={contact_form:"ContactForm_contact_form__1BYso",contact_form_input:"ContactForm_contact_form_input__umWL8",contact_form_input_label:"ContactForm_contact_form_input_label__2rQl1",contact_form_button:"ContactForm_contact_form_button__1QgSW"}},7:function(t,e,n){t.exports={contactList:"ContactList_contactList__2cYnw",contact_list_item:"ContactList_contact_list_item__1NJZ2",contact_list_item_button:"ContactList_contact_list_item_button__TF3aA",contact_list_item_name:"ContactList_contact_list_item_name__24aJa",contact_list_item_number:"ContactList_contact_list_item_number__1ElYO"}}},[[39,1,2]]]);
//# sourceMappingURL=main.30b41086.chunk.js.map