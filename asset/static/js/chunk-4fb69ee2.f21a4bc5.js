(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fb69ee2"],{3282:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logoManage"},[a("div",{staticClass:"logoManage_header"},[a("div",[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.type,(function(e){return a("el-option",{key:e.value,attrs:{size:"small",label:e.label,value:e.value}})})),1),e._v(" "),a("el-input",{attrs:{placeholder:"请输入关键字",size:"small",clearable:""},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),e._v(" "),a("el-button",{attrs:{type:"warning",size:"small",plain:""}},[e._v("出库")]),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"warning",size:"small",plain:""}},[e._v("查询")])],1)]),e._v(" "),a("div",{staticClass:"logoManage_content"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.logoManage,border:"",size:"small"}},[a("el-table-column",{attrs:{prop:"id",label:"序号",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"realname",label:"姓名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"content",label:"内容",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"logtime",align:"center",label:"时间"}})],1)],1),e._v(" "),a("div",{staticClass:"logoManage_footer"},[a("el-pagination",{attrs:{"page-size":e.pageSize,layout:"prev, pager, next",total:e.totals},on:{"current-change":e.handleChange}})],1)])},n=[],o=(a("5ab2"),a("6d57"),a("e10e"),a("22dc")),r=a("52c1");function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var s={data:function(){return{input:"",page:1,pageSize:10,totals:20,value:""}},computed:c({},Object(r["d"])("logoManage",["logoManage","total","type"])),created:function(){this.load()},methods:c(c({},Object(r["b"])("logoManage",["loadLogoManage"])),{},{load:function(){var e=this,t={page:this.page,pageSize:this.pageSize};this.loadLogoManage(t).then((function(t){e.totals=e.total}))},handleChange:function(e){this.page=e,this.load()}})},p=s,u=(a("f994"),a("9ca4")),g=Object(u["a"])(p,l,n,!1,null,"40600165",null);t["default"]=g.exports},dcbc:function(e,t,a){},f994:function(e,t,a){"use strict";var l=a("dcbc"),n=a.n(l);n.a}}]);