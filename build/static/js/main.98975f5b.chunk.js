(this.webpackJsonpamazoneclone=this.webpackJsonpamazoneclone||[]).push([[0],{34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),i=s(14),n=s.n(i),r=(s(34),s(35),s(11)),o=(s(36),s.p+"static/media/logo.79a1dd45.png"),j=s(25),l=s.n(j),d=s(26),h=s.n(d),m=s(13),b=s(1),u=Object(c.createContext)(),x=function(){return Object(c.useContext)(u)};var O=function(){var e=x(),t=Object(r.a)(e,2),s=t[0].basket;return t[1],Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(m.b,{to:"/",children:Object(b.jsx)("img",{className:"header_logo",src:o})}),Object(b.jsxs)("div",{className:"header_search",children:[Object(b.jsx)("input",{className:"header_searchInput",type:"text"}),Object(b.jsx)(l.a,{className:"header_searchIcon"})]}),Object(b.jsxs)("div",{className:"header_nav",children:[Object(b.jsxs)("div",{className:"header_option",children:[Object(b.jsx)("span",{className:"header_optionLineOne",children:"Hello Guest"}),Object(b.jsx)("span",{className:"header_optionLineTwo",children:"Sign In"})]}),Object(b.jsxs)("div",{className:"header_option",children:[Object(b.jsx)("span",{className:"header_optionLineOne",children:"Returns"}),Object(b.jsx)("span",{className:"header_optionLineTwo",children:"& Orders"})]}),Object(b.jsxs)("div",{className:"header_option",children:[Object(b.jsx)("span",{className:"header_optionLineOne",children:"Your"}),Object(b.jsx)("span",{className:"header_optionLineTwo",children:"Prime"})]}),Object(b.jsx)(m.b,{to:"/checkout",children:Object(b.jsxs)("div",{className:"header_optionBasket",children:[Object(b.jsx)(h.a,{}),Object(b.jsx)("span",{className:"header_optionLineTwoheader_basketCount",children:null===s||void 0===s?void 0:s.lenght})]})})]})]})};s(44),s(45);var g=function(e){var t=e.id,s=e.title,c=e.image,a=e.price,i=e.rating,n=x(),o=Object(r.a)(n,2),j=o[0].basket,l=o[1];return console.log("this is basket",j),Object(b.jsxs)("div",{className:"product",children:[Object(b.jsxs)("div",{className:"product_info",children:[Object(b.jsx)("p",{children:s}),Object(b.jsxs)("p",{className:"product_price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:a})]}),Object(b.jsx)("div",{className:"product_rating",children:Array(i).fill().map((function(e,t){return Object(b.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(b.jsx)("img",{src:c,alt:""}),Object(b.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:s,image:c,price:a,rating:i}})},children:"Add to Basket"})]})};var p=function(){return Object(b.jsx)("div",{className:"home",children:Object(b.jsxs)("div",{className:"home_container",children:[Object(b.jsx)("img",{className:"home_image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(b.jsxs)("div",{className:"home_row",children:[Object(b.jsx)(g,{id:"123123",title:"The Lean startup: How constant Innovation Creates Radically Successful Business",price:29.99,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5}),Object(b.jsx)(g,{id:"456456",title:"Kenwood kMix Stand Mixer for Baking, Styling Mixer with k-beater, Dough Houk and wisk, 5 Liter Glass Bowl",price:239.9,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(b.jsxs)("div",{className:"home_row",children:[Object(b.jsx)(g,{id:"490385",title:"TSamsung LC4945564XUEN 49' Curved LED Gaming Monitor",price:199.99,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",rating:3}),Object(b.jsx)(g,{id:"234596",title:"Amazon Echo (3rd gen) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",rating:5}),Object(b.jsx)(g,{id:"32555677777",title:"New Apple Ipad Pro - Silver (4th Gen)",price:598.99,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",rating:4})]}),Object(b.jsx)("div",{className:"home_row",children:Object(b.jsx)(g,{id:"908384753",title:"Samsung LC452RG0OSKNEN 49inches Curved LED Gaming Monitor",price:1094.99,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",rating:4})})]})})},_=s(3),v=(s(46),s(47),s(27)),N=s.n(v),f=(s(28),s(20),function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)});var C=function(){var e=x(),t=Object(r.a)(e,2),s=t[0].basket;return t[1],Object(b.jsxs)("div",{className:"subtotal",children:[Object(b.jsx)(N.a,{renderText:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Subtotal (",s.lenght," items):",Object(b.jsx)("strong",{children:e})]}),Object(b.jsxs)("small",{className:"subtotal_gift",children:[Object(b.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,value:f(s),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(b.jsx)("button",{children:"Proceed to Checkout"})]})};var k=function(){return Object(b.jsx)("div",{className:"checkout",children:Object(b.jsxs)("div",{className:"checkout_left",children:[Object(b.jsx)("img",{className:"checkout_ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(b.jsx)("div",{children:Object(b.jsx)("h2",{className:"checkout_title",children:"Your Shopping Basket"})}),Object(b.jsx)("div",{className:"checkout_right",children:Object(b.jsx)(C,{})})]})})};var S=function(){return Object(b.jsx)(m.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{}),Object(b.jsxs)(_.c,{children:[Object(b.jsx)(_.a,{path:"/checkout",children:Object(b.jsx)(k,{})}),Object(b.jsx)(_.a,{path:"/",children:Object(b.jsx)(p,{})})]})]})})},L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,62)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),L()}},[[50,1,2]]]);
//# sourceMappingURL=main.98975f5b.chunk.js.map