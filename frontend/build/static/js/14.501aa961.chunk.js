(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[14,16],{139:function(e,t,r){"use strict";r.r(t);var n=r(2),l=r(4),c=(r(0),r(13)),a=r(32),o=r(54),i=r(1);t.default=function(e){var t=e.component,r=Object(l.a)(e,["component"]),s=Object(a.c)((function(e){return e.auth})).userInfo;return Object(i.jsx)(c.d,Object(n.a)(Object(n.a)({},r),{},{render:function(e){return s?Object(i.jsx)(t,Object(n.a)({},e)):Object(i.jsx)(c.c,{to:"/v1/auth/signin"})&&o.b.error("please signin!")&&Object(i.jsx)(c.c,{to:"/v1/auth/signin"})}}))}},147:function(e,t,r){"use strict";r.r(t);var n=r(0),l=r(129),c=r(2),a=r(4),o=r(6),i=r.n(o),s=r(8),u=r(33),b=r(1),d=n.forwardRef((function(e,t){var r=e.bsPrefix,n=e.active,l=e.children,o=e.className,d=e.as,j=void 0===d?"li":d,f=e.linkAs,O=void 0===f?u.a:f,m=e.linkProps,p=e.href,v=e.title,h=e.target,x=Object(a.a)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),P=Object(s.a)(r,"breadcrumb-item");return Object(b.jsx)(j,Object(c.a)(Object(c.a)({ref:t},x),{},{className:i()(P,o,{active:n}),"aria-current":n?"page":void 0,children:n?l:Object(b.jsx)(O,Object(c.a)(Object(c.a)({},m),{},{href:p,title:v,target:h,children:l}))}))}));d.displayName="BreadcrumbItem",d.defaultProps={active:!1,linkProps:{}};var j=d,f=n.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,l=e.listProps,o=e.children,u=e.label,d=e.as,j=void 0===d?"nav":d,f=Object(a.a)(e,["bsPrefix","className","listProps","children","label","as"]),O=Object(s.a)(r,"breadcrumb");return Object(b.jsx)(j,Object(c.a)(Object(c.a)({"aria-label":u,className:n,ref:t},f),{},{children:Object(b.jsx)("ol",Object(c.a)(Object(c.a)({},l),{},{className:i()(O,null==l?void 0:l.className),children:o}))}))}));f.displayName="Breadcrumb",f.defaultProps={label:"breadcrumb",listProps:{}};var O=Object.assign(f,{Item:j}),m=r(35),p=r(13),v=r(139),h=function(e){var t=e.location,r=e.Loader,c=e.breadCrumbRoutes,a=e.userInfo;return Object(b.jsx)("div",{children:Object(b.jsxs)(l.a,{className:"",children:[Object(b.jsx)("h1",{children:"MY Account Information"}),Object(b.jsx)(O,{children:c.map((function(e,r){var n;return"both"===(null===e||void 0===e?void 0:e.role)||(null===e||void 0===e?void 0:e.role)===a.role?Object(b.jsx)(O.Item,{linkAs:m.NavLink,linkProps:{to:e.url},active:e.url===t.pathname,children:null!==(n=e.title)&&void 0!==n?n:""},r):null}))}),Object(b.jsx)("hr",{}),Object(b.jsx)(n.Suspense,{fallback:Object(b.jsx)(r,{}),children:Object(b.jsx)(p.g,{children:c.map((function(e,t){return Object(b.jsx)(v.default,{path:e.url,component:e.component},t)}))})})]})})},x=r(32),P=r(55),y=Object(n.lazy)((function(){return r.e(11).then(r.bind(null,148))})),N=Object(n.lazy)((function(){return r.e(15).then(r.bind(null,155))})),k=Object(n.lazy)((function(){return r.e(9).then(r.bind(null,156))})),g=Object(n.lazy)((function(){return r.e(12).then(r.bind(null,157))})),I=Object(n.lazy)((function(){return r.e(10).then(r.bind(null,149))})),z=Object(n.lazy)((function(){return r.e(4).then(r.bind(null,150))})),A=[{url:"/v1/user/profile/update-information",title:"My Profile",component:y,role:"both"},{url:"/v1/user/profile/my-orders",title:"My Orders",component:k,role:"customer"},{url:"/v1/user/profile/favourite-dishes",title:"Favourite Dishes",component:N,role:"customer"},{url:"/v1/user/profile/create-food",title:"Add a Food",component:I,role:"admin"},{url:"/v1/user/profile/all-orders",title:"All Orders",component:Object(n.lazy)((function(){return r.e(13).then(r.bind(null,158))})),role:"admin"},{url:"/v1/user/profile/all-customer",title:"All Customers",component:g,role:"admin"},{url:"/v1/user/profile/order/:orderId",component:z}];t.default=function(e){var t=e.location,r=Object(x.c)((function(e){return null===e||void 0===e?void 0:e.auth})).userInfo;return Object(b.jsx)(h,{location:t,Loader:P.a,breadCrumbRoutes:A,userInfo:r})}}}]);
//# sourceMappingURL=14.501aa961.chunk.js.map