(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bb0b460"],{"495e":function(t,e,a){"use strict";var l=a("56ff"),r=a.n(l);r.a},"56ff":function(t,e,a){},d4a6:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"borrow"},[a("div",{staticClass:"borrow_header"},[a("el-select",{attrs:{size:"small",clearable:"",placeholder:"请选择物品类型"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.type,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})})),1),t._v(" "),a("el-input",{attrs:{placeholder:"请输入关键字",size:"small",clearable:""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[t._v("搜索")])],1),t._v(" "),a("div",{staticClass:"borrow_content"},[a("el-table",{staticStyle:{width:"100%"},attrs:{size:"small",data:t.borrow,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"序号",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"申请人",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"code",label:"物品编码",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"物品名称",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"物品类型",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"申请类别",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"brand",label:"品牌",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"num",label:"数量",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"领用日期",width:"380"}}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"预计归还日期",width:"380"}}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"实际归还日期",width:"380"}}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"状态",fixed:"right",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",width:"200",fixed:"right",align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){e.row;return[a("span",[t._v("归还")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"borrow_footer"},[a("el-pagination",{attrs:{"page-size":t.pageSize,layout:"prev, pager, next",total:t.totals},on:{"current-change":t.handleChange}})],1)])},r=[],o=(a("5ab2"),a("6d57"),a("e10e"),a("22dc")),n=a("52c1");function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var s={data:function(){return{page:1,pageSize:10,totals:20,input:"",value:""}},computed:c({},Object(n["d"])("borrow",["borrow","total","type"])),created:function(){this.load()},methods:c(c({},Object(n["b"])("borrow",["loadBorrow","loadType"])),{},{load:function(){var t=this,e={page:this.page,pageSize:this.pageSize};this.loadBorrow(e).then((function(e){t.totals=t.total})),this.loadType()},handleChange:function(t){this.page=t,this.load()}})},p=s,b=(a("495e"),a("9ca4")),u=Object(b["a"])(p,l,r,!1,null,"0add83d3",null);e["default"]=u.exports}}]);