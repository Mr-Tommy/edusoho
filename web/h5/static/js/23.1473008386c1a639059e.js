webpackJsonp([23],{kxIp:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"prelogin"},[n("img",{staticClass:"prelogin-img",attrs:{src:"static/images/noLoginEmpty.png"}}),e._v(" "),n("span",{staticClass:"prelogin-text"},[e._v("登录后查看更多信息")]),e._v(" "),n("van-button",{staticClass:"prelogin-btn",attrs:{type:"default"},nativeOn:{click:function(t){return e.goLogin(t)}}},[e._v("立即登录")])],1)},staticRenderFns:[]},s=n("VU/8")({methods:{goLogin:function(){this.$router.push({name:"login",query:{redirect:this.$route.query.redirect||"/"}})}}},i,!1,null,null,null);e.default=s.exports}});