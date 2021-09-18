(this.webpackJsonpemployee=this.webpackJsonpemployee||[]).push([[0],{160:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(32),o=a.n(r),l=(a(160),a(31)),c=a(139),d=a(19),s=a(13),b=a(302),j=a(303),u=a(301),m=a(320),O=a(316),h=a(314),f=a(312),p=a(307),y=a(318),x=a(319),E=a(313),v=a(37),N=a.n(v),g=a(17),C=a(304),_=a(141),M=a(50),L=function(e){return e.employeeReducer.employees},Y=a(2),w=M.c({email:M.d().email("Invalid email").required("Email is required"),firstName:M.d().required("First Name is required"),lastName:M.d().required("Last Name is required"),mobileNo:M.b().required("Mobile no is required"),dob:M.a().required("Date of birth is required")});function D(e){var t=e.onClose,a=e.initialValues,n=e.edit,i=Object(l.b)(),r=Object(l.c)(L),o=Object(_.a)({initialValues:a,validationSchema:w,enableReinitialize:!0,onSubmit:function(e){try{!function(e){if(r.find((function(t){return t.email===e.email||t.mobileNo===e.mobileNo})))throw new Error("Employee already exists with this details")}(e),i(n?(o=a._id,l=Object(g.a)({},e),{type:"EDIT_EMPLOYEE",payload:{_id:o,data:l}}):function(e){return{type:"CREATE_EMPLOYEE",payload:e}}(Object(g.a)(Object(g.a)({},e),{},{_id:Math.round(1e7*Math.random())}))),t()}catch(c){window.alert(c.message)}var o,l}}),c=o.values,d=o.handleSubmit,s=o.handleBlur,b=o.touched,j=o.errors,u=o.handleChange,m=o.dirty,O=o.isValid;return Object(Y.jsxs)("form",{onSubmit:d,children:[Object(Y.jsx)(C.a,{placeholder:"First Name",name:"firstName",fullWidth:!0,margin:"dense",value:c.firstName,onBlur:s,helperText:b.firstName&&j.firstName,error:b.firstName&&Boolean(j.firstName),onChange:u}),Object(Y.jsx)(C.a,{placeholder:"Last Name",fullWidth:!0,margin:"dense",value:c.lastName,name:"lastName",onBlur:s,helperText:b.lastName&&j.lastName,error:b.lastName&&Boolean(j.lastName),onChange:u}),Object(Y.jsx)(C.a,{placeholder:"Email",fullWidth:!0,margin:"dense",value:c.email,name:"email",onBlur:s,helperText:b.email&&j.email,error:b.email&&Boolean(j.email),onChange:u}),Object(Y.jsx)(C.a,{placeholder:"Mobile Number",fullWidth:!0,margin:"dense",type:"number",value:c.mobileNo,name:"mobileNo",onBlur:s,helperText:b.mobileNo&&j.mobileNo,error:b.mobileNo&&Boolean(j.mobileNo),onChange:u}),Object(Y.jsx)(C.a,{type:"date",value:N()(c.dob).format("YYYY-MM-DD"),fullWidth:!0,margin:"dense",name:"dob",onBlur:s,helperText:b.dob&&j.dob,error:b.dob&&Boolean(j.dob),onChange:u}),Object(Y.jsxs)(E.a,{marginTop:2,display:"flex",justifyContent:"flex-end",children:[Object(Y.jsx)(h.a,{type:"button",variant:"contained",color:"error",disableRipple:!0,disableElevation:!0,style:{marginRight:16},onClick:t,children:"Close"}),Object(Y.jsx)(h.a,{variant:"contained",color:"primary",disableRipple:!0,disableElevation:!0,type:"submit",disabled:!m||!O,children:n?"Edit":"Create"})]})]})}var T=a(78),B=a(310),I=a(315),R=a(317);function S(e){var t=e.edit,a=Object(T.a)(e,["edit"]);return Object(Y.jsxs)(B.a,Object(g.a)(Object(g.a)({},a),{},{fullWidth:!0,children:[Object(Y.jsx)(I.a,{style:{fontWeight:"bold"},children:t?"Edit Employee":"Create Employee"}),Object(Y.jsx)(R.a,{children:Object(Y.jsx)(D,{onClose:a.onClose,initialValues:t?Object(g.a)({},t):{firstName:"",lastName:"",dob:"",mobileNo:"",email:""},edit:!!t})})]}))}var q=a(4);function W(e){var t=e.employeeId,a=Object(T.a)(e,["employeeId"]),n=Object(l.b)(),i=Object(l.c)((function(e){return function(e,t){return e.employeeReducer.leaves[t]||[]}(e,t)}));return Object(Y.jsxs)(B.a,Object(g.a)(Object(g.a)({},a),{},{fullWidth:!0,children:[Object(Y.jsx)(I.a,{style:{fontWeight:"bold"},children:"Employee Leaves"}),Object(Y.jsx)(R.a,{children:Object(Y.jsx)(f.a,{children:i.map((function(e,r){return Object(Y.jsx)(p.a,{color:"#1e90ff",secondaryAction:Object(Y.jsx)(y.a,{color:"error",onClick:function(){return r=e._id,void(window.confirm("Are you sure you want to delete it?")&&(n({type:"DELETE_LEAVE",payload:Object(q.a)({},t,i.filter((function(e){return e._id!==r})))}),a.onClose()));var r},children:Object(Y.jsx)(u.a,{})}),children:Object(Y.jsx)(x.a,{primary:"- Leave on ".concat(N()(e.date).format("DD MMM YYYY"))})},r)}))})})]}))}function A(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(null),o=Object(s.a)(r,2),c=o[0],d=o[1],v=Object(n.useState)(""),g=Object(s.a)(v,2),C=g[0],_=g[1],M=Object(l.c)(L),w=Object(l.b)();return Object(Y.jsxs)(m.a,{children:[Object(Y.jsxs)(E.a,{display:"flex",flex:1,flexDirection:"column",paddingY:4,children:[Object(Y.jsxs)(E.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(Y.jsx)(O.a,{fontWeight:"bold",variant:"h5",children:"Employee Management"}),Object(Y.jsx)(h.a,{startIcon:Object(Y.jsx)(b.a,{}),onClick:function(){d(null),i(!0)},variant:"contained",color:"primary",disableElevation:!0,disableRipple:!0,children:"Create"})]}),Object(Y.jsx)(E.a,{children:Object(Y.jsx)(f.a,{children:M.map((function(e,t){return Object(Y.jsx)(p.a,{secondaryAction:Object(Y.jsxs)(E.a,{children:[Object(Y.jsx)(h.a,{color:"primary",variant:"contained",disableRipple:!0,disableElevation:!0,size:"small",onClick:function(){return t=e._id,void _(t);var t},children:"Leaves"}),Object(Y.jsx)(y.a,{color:"primary",onClick:function(){return t=e,i(!0),void d(t);var t},children:Object(Y.jsx)(j.a,{})}),Object(Y.jsx)(y.a,{color:"error",onClick:function(){return t=e._id,void(window.confirm("Are you sure you want to delete this?")&&w(function(e){return{type:"DELETE_EMPLOYEE",payload:e}}(t)));var t},children:Object(Y.jsx)(u.a,{})})]}),children:Object(Y.jsx)(x.a,{primary:"".concat(t+1,". ").concat(e.firstName," ").concat(e.lastName," (").concat(N()(e.dob).format("DD-MM-YYYY"),")"),secondary:"".concat(e.email," - ").concat(e.mobileNo)})},String(e._id))}))})})]}),Object(Y.jsx)(S,{open:a,onClose:function(){i(!1),d(null)},edit:c}),Object(Y.jsx)(W,{open:!!C,onClose:function(){_("")},employeeId:C})]})}function P(){return Object(Y.jsx)(c.a,{children:Object(Y.jsx)(d.c,{children:Object(Y.jsx)(d.a,{exact:!0,path:"/",component:A})})})}var k=a(101),F=a(14),V=[{_id:"1234567",firstName:"Riddhi",lastName:"Prajapati",email:"riddhi@gmail.com",mobileNo:"9999999999",dob:N()("05-12-1999").toDate()}];function z(e){return new Array(5).fill(0).map((function(){return{date:N()().subtract(Math.round(30*Math.random()),"day"),employeeId:e,_id:String(Math.round(1e7*Math.random()))}}))}var J={employees:V,leaves:V.reduce((function(e,t){return e[t._id]=z(t._id),e}),{})},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"DELETE_EMPLOYEE":return Object(g.a)(Object(g.a)({},e),{},{employees:e.employees.filter((function(e){return e._id!==n}))});case"CREATE_EMPLOYEE":return Object(g.a)(Object(g.a)({},e),{},{employees:[n].concat(Object(F.a)(e.employees)),leaves:Object(g.a)(Object(g.a)({},e.leaves),{},Object(q.a)({},n._id,z(n._id)))});case"EDIT_EMPLOYEE":var i=e.employees.findIndex((function(e){return e._id===n._id})),r=Object(F.a)(e.employees);return r[i]=Object(g.a)(Object(g.a)({},n.data),{},{_id:n._id}),Object(g.a)(Object(g.a)({},e),{},{employees:Object(F.a)(r)});case"DELETE_LEAVE":return Object(g.a)(Object(g.a)({},e),{},{leaves:Object(g.a)(Object(g.a)({},e.leaves),n)});default:return e}},H=Object(k.a)({employeeReducer:G}),K=Object(k.b)(H);var Q=function(){return Object(Y.jsx)(l.a,{store:K,children:Object(Y.jsx)(P,{})})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,321)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),r(e),o(e)}))};o.a.render(Object(Y.jsx)(i.a.StrictMode,{children:Object(Y.jsx)(Q,{})}),document.getElementById("root")),U()}},[[265,1,2]]]);
//# sourceMappingURL=main.9751b88c.chunk.js.map