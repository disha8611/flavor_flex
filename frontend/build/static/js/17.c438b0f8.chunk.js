(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[17],{151:function(e,t,a){"use strict";a.r(t);var c=a(7),n=a.n(c),r=a(10),s=a(40),i=a(0),o=a(5),l=a(32),j=a(2),b=a(142),d=a(129),u=a(135),h=a(133),m=a(86),O=a(138),x=a(140),f=a(144),p=a(136),y=a(124),v=a(1),k=function(e){var t=e.paymentMethod,a=e.cartItems,c=e.handleClearCart,n=e.handleRemoveFromCart,r=e.increaseQty,s=e.decreaseQty,i=e.handleCheckout,o=e.handleGoBack,l=e.onChangeAddress,k=e.onChangePaymentMethod,g=e.totalPrice,C=e.payStackProps,N=e.status;return Object(v.jsx)("div",{children:Object(v.jsx)(d.a,{children:Object(v.jsxs)(u.a,{children:[Object(v.jsxs)(h.a,{md:8,className:"py-2",children:[Object(v.jsx)(m.a,{onClick:c,variant:"outline-dark",children:Object(v.jsx)("i",{className:"fas fa-trash",children:" Clear cart "})}),a.map((function(e,t){return Object(v.jsx)(O.a,{className:"py-2 my-2",children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(h.a,{sm:2,className:"mt-2",children:Object(v.jsx)(x.a,{src:e.image,fluid:!0,thumbnail:!0})}),Object(v.jsx)(h.a,{sm:3,className:"mt-2",children:Object(v.jsx)(O.a.Title,{children:e.name})}),Object(v.jsxs)(h.a,{sm:2,className:"mt-2",children:["Price: GH\u20b5 ",Object(v.jsx)("strong",{children:e.price})]}),Object(v.jsxs)(h.a,{sm:2,className:"mt-2",children:[Object(v.jsx)(m.a,{variant:"outline-dark",onClick:function(){return s(e)},children:Object(v.jsx)("i",{className:"fas fa-minus"})})," ",e.qtyToBuy," ",Object(v.jsx)(m.a,{variant:"outline-dark",onClick:function(){return r(e)},children:Object(v.jsx)("i",{className:"fas fa-plus"})})]}),Object(v.jsx)(h.a,{xs:2,className:"mt-2",children:Object(v.jsx)(m.a,{variant:"outline-dark",onClick:function(){return n(e)},children:Object(v.jsx)("i",{className:"fas fa-trash"})})})]})},t)}))]}),Object(v.jsx)(h.a,{md:4,className:"py-2",children:Object(v.jsx)(O.a,{children:Object(v.jsxs)(f.a,{variant:"flush",children:[Object(v.jsx)(f.a.Item,{children:Object(v.jsxs)("h2",{children:[a.length," Food(s) In Cart"]})}),Object(v.jsxs)(f.a.Item,{children:[Object(v.jsx)("strong",{children:"Delivery Fee : "})," ",0===a.length?"GH\u20b5 0":"GH\u20b5 10"]}),Object(v.jsxs)(f.a.Item,{children:[Object(v.jsx)("strong",{children:"Total Price : "}),"GH\u20b5"," ",0===a.length?" 0":g]}),Object(v.jsxs)(f.a.Item,{children:[Object(v.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicdeliveryType",children:[Object(v.jsx)(p.a.Label,{children:"Delivery Address"}),Object(v.jsx)(p.a.Control,{type:"text",placeholder:"please enter accurate location",required:!0,onChange:l})]}),Object(v.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(v.jsx)(p.a.Label,{children:"Payment Method"}),Object(v.jsxs)(p.a.Select,{onChange:k,children:[Object(v.jsx)("option",{children:"Select Payment Method"}),Object(v.jsx)("option",{value:"cashOnDelivery",children:"Cash On Delivery"}),Object(v.jsx)("option",{value:"mobileMoney",children:"Mobile Money"}),Object(v.jsx)("option",{value:"3",disabled:!0,children:"Bank Transfer (Not Available Now)"})]})]}),Object(v.jsxs)(p.a.Group,{className:"d-flex justify-content-between",children:["mobileMoney"===t?Object(v.jsx)(b.a,Object(j.a)(Object(j.a)({},C),{},{className:"btn btn-dark"})):Object(v.jsx)(m.a,{type:"submit",className:"btn-block",disabled:0===a.length,variant:"dark",onClick:i,children:"loading"===N?Object(v.jsx)(y.a,{animation:"border"}):Object(v.jsx)("i",{className:"fas fa-credit-card",children:" Place Order "})}),Object(v.jsx)(m.a,{className:"btn-block",variant:"danger",onClick:o,children:Object(v.jsx)("i",{className:"fas fa-arrow-left",children:" Go Back "})})]})]})]})})})]})})})},g=a(54),C=a(61),N=a(79);t.default=function(e){var t=e.history,a=Object(l.b)(),c=Object(l.c)((function(e){return e.cart})).cartItems,j=Object(l.c)((function(e){return e.auth})).userInfo,b=Object(l.c)((function(e){return e.checkout})).status,d=Object(i.useState)(""),u=Object(s.a)(d,2),h=u[0],m=u[1],O=Object(i.useState)(""),x=Object(s.a)(O,2),f=x[0],p=x[1],y=Number(c.reduce((function(e,t){return e+t.qtyToBuy*t.price}),10).toFixed(2)),I={deliveryFee:10,address:h,paymentMethod:f,foods:c,totalPrice:y},P=function(){var e=Object(r.a)(n.a.mark((function e(){var t,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(Object(N.c)(I));case 2:t=e.sent,201===(c=Object(o.d)(t)).status?(a(Object(N.a)(c)),localStorage.removeItem("cartItems"),a(Object(C.b)()),g.b.success("congrats!, great meal awaits you!")):(a(Object(N.b)(c)),g.b.error("sorry an unexpected occur!"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w={email:null===j||void 0===j?void 0:j.email,amount:100*y,publicKey:"pk_test_1f8a48067da5793e978f1b1d07e1feea71c756f3",text:"Pay GH\u20b5  ".concat(0===c.length?"0":y),currency:"GHS",channels:["mobile_money"],onSuccess:function(e){return P(e)},onClose:function(){return g.b.error('wait!! You Need This Flow, Don"t Go!!!!!!')}},G=function(){var e=Object(r.a)(n.a.mark((function e(c){var r,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),j){e.next=6;break}t.push("/v1/auth/signin"),g.b.error("please signin"),e.next=15;break;case 6:if(""!==f&&""!==h){e.next=10;break}g.b.error("Select Payment Method And Enter Address"),e.next=15;break;case 10:return e.next=12,a(Object(N.c)(I));case 12:r=e.sent,201===(s=Object(o.d)(r)).status?(a(Object(N.a)(s)),localStorage.removeItem("cartItems"),a(Object(C.b)()),g.b.success("congrats!, great meal awaits you!")):(a(Object(N.b)(s)),g.b.error("sorry an unexpected occur!"));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(k,{cartItems:c,handleClearCart:function(){a(Object(C.b)())},handleRemoveFromCart:function(e){a(Object(C.f)(e))},increaseQty:function(e){a(Object(C.e)(e))},decreaseQty:function(e){a(Object(C.c)(e))},handleCheckout:G,handleGoBack:function(){return t.goBack()},onChangeAddress:function(e){return m(e.target.value)},onChangePaymentMethod:function(e){return p(e.target.value)},paymentMethod:f,totalPrice:y,payStackProps:w,status:b})}}}]);
//# sourceMappingURL=17.c438b0f8.chunk.js.map