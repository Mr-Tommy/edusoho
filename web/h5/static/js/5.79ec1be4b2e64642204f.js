webpackJsonp([5],{"7/x9":function(e,t,s){"use strict";var i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"course-detail__service"},[s("span",[e._v("承诺服务：")]),e._v(" "),e._l(e.services,function(t){return[s("span",{staticClass:"course-detail__service-icon"},[e._v(e._s(t.shortName))])]})],2)},staticRenderFns:[]},a=s("VU/8")({name:"service",props:["services"]},i,!1,null,null,null);t.a=a.exports},f0vb:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("fZjL"),a=s.n(i),r=s("Dd8w"),n=s.n(r),o=s("upIP"),l=s("jW8y"),c=s("gMS5"),u=s("Du/2"),d=s("7/x9"),v=s("NYxO"),p={data:function(){return{items:[],isFree:!1}},components:{service:d.a},filters:{filterTime:function(e){var t=new Date(e);return t.getFullYear()+"-"+("0"+t.getMonth()).slice(-2)+"-"+("0"+t.getDate()).slice(-2)}},watch:{selectedPlanId:{immediate:!0,handler:function(e){var t=this;this.items=this.details.courses.map(function(e,s){return t.$set(e,"active",!1),e.id===t.details.id&&(e.active=!0),e})}},learnExpiryHtml:{immediate:!0,handler:function(e){var t=this.details.learningExpiryDate,s=t.expiryStartDate.slice(0,10),i=t.expiryEndDate.slice(0,10);this.$emit("getLearnExpiry",{val:e,startDateStr:s,endDateStr:i})}}},computed:n()({},Object(v.mapState)("course",{details:function(e){return e.details},selectedPlanId:function(e){return e.selectedPlanId}}),Object(v.mapState)(["courseSettings"]),{learnExpiryHtml:function(){var e=this.details.member,t=this.details.learningExpiryDate,s=t.expiryMode;if(e)return"forever"==s?"永久有效":0!=e.deadline?e.deadline.slice(0,10)+"之前可学习":"永久有效";switch(s){case"forever":return"永久有效";case"end_date":return t.expiryEndDate.slice(0,10)+"之前可学习";case"days":return t.expiryDays+"天内可学习";case"date":return'<div class = "mt5">开课日期：'+t.expiryStartDate.slice(0,10)+"&nbsp;&nbsp;&nbsp;截止日期："+t.expiryEndDate.slice(0,10)+"</div>"}},showStudent:function(){return!this.courseSettings||Number(this.courseSettings.show_student_num_enabled)},defaultPlan:function(){return 1===this.items.length&&!this.items[0].title}}),methods:n()({},Object(v.mapActions)("course",["getCourseDetail"]),{handleClick:function(e,t){this.items.map(function(e){return e.active=!1}),e.active=!0,this.getCourseDetail({courseId:e.id})},filterPrice:function(){var e=this.details;return Number(e.isFree)||"0.00"===e.price?(this.isFree=!0,"免费"):(this.isFree=!1,"¥"+e.price)}})},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("e-panel",{attrs:{title:e.details.courseSet.title}},[s("div",{staticClass:"course-detail__plan-price"},[s("span",{class:{isFree:e.isFree}},[e._v(e._s(e.filterPrice()))]),e._v(" "),e.showStudent?s("span",{staticClass:"plan-price__student-num"},[e._v(e._s(e.details.studentNum)+"人在学")]):e._e()])]),e._v(" "),e.defaultPlan?e._e():s("ul",{staticClass:"course-detail__plan"},e._l(e.items,function(t,i){return t.title?s("li",{class:{active:t.active},on:{click:function(s){e.handleClick(t,i)}}},[e._v(e._s(t.title))]):e._e()})),e._v(" "),s("div",{staticClass:"course-detail__validity"},[e.details.services.length?s("service",{attrs:{services:e.details.services}}):e._e(),e._v(" "),s("div",[s("span",{staticClass:"mr20"},[e._v("学习有效期")]),e._v(" "),s("span",{staticClass:"dark",domProps:{innerHTML:e._s(e.learnExpiryHtml)}})]),e._v(" "),0!=e.details.buyExpiryTime?s("div",{staticClass:"mt5"},[s("span",{staticClass:"mr20"},[e._v("购买截止日期")]),e._v(" "),s("span",{staticClass:"validity orange"},[e._v(e._s(e._f("filterTime")(e.details.buyExpiryTime)))])]):e._e()],1)],1)},staticRenderFns:[]},h=s("VU/8")(p,m,!1,null,null,null).exports,f={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("e-panel",{attrs:{title:"教师介绍"}},[e._l(e.teacherInfo,function(t){return[s("div",{staticClass:"teacher-content"},[s("img",{staticClass:"avatar-img",attrs:{src:t.avatar.large}}),e._v(" "),s("div",{staticClass:"teacher-cell"},[s("span",{staticClass:"dark font-family-PFM"},[e._v(e._s(t.nickname))]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"item.title"}],staticClass:"text-content"},[e._v(e._s(t.title))])])])]})],2)},staticRenderFns:[]},_=s("VU/8")({name:"teacher",props:["teacherInfo"]},f,!1,null,null,null).exports,y=this,g={props:["details"],data:function(){return{headBottom:0,active:1,scrollFlag:!1,tabs:["课程介绍","课程目录","学员评价"],tabsClass:""}},computed:n()({},Object(v.mapState)("course",{selectedPlanId:function(e){return e.selectedPlanId}}),{progress:function(){return Number(this.details.publishedTaskNum)?parseInt(this.details.progress.percent)+"%":"0%"},summary:function(){return this.details.summary||this.details.courseSet.summary}}),watch:{selectedPlanId:function(e,t){e!==t&&(y.active=0),console.log(y.active,"active")}},components:{Directory:l.a,DetailHead:c.a,DetailPlan:h,Teacher:_,reviewList:o.a}},b={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"join-after"},[s("detail-head",{attrs:{courseSet:e.details.courseSet}}),e._v(" "),s("van-tabs",{class:e.tabsClass,model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabs,function(e){return s("van-tab",{key:e,attrs:{title:e}})})),e._v(" "),s("div",{staticClass:"join-after__content"},[1==e.active?s("div",[s("div",{staticClass:"progress-bar"},[s("div",{staticClass:"progress-bar__content"},[s("div",{staticClass:"progress-bar__rate",style:{width:e.progress}})]),e._v(" "),s("div",{staticClass:"progress-bar__text"},[e._v(e._s(e.progress))])]),e._v(" "),s("directory",{staticClass:"join-after-dirctory",attrs:{hiddeTitle:!0,tryLookable:e.details.tryLookable}})],1):e._e(),e._v(" "),0==e.active?s("div",[s("detail-plan"),e._v(" "),s("div",{staticClass:"segmentation"}),e._v(" "),s("e-panel",{attrs:{title:"课程介绍"}},[s("div",{domProps:{innerHTML:e._s(e.summary)}})]),e._v(" "),s("div",{staticClass:"segmentation"}),e._v(" "),s("teacher",{staticClass:"teacher",attrs:{teacherInfo:e.details.teachers}})],1):e._e(),e._v(" "),2==e.active?s("div",[s("review-list",{ref:"review",attrs:{targetId:e.details.courseSet.id,reviews:e.details.reviews,title:"学员评价",defaulValue:"暂无评价",type:"course"}})],1):e._e()])],1)},staticRenderFns:[]},w=s("VU/8")(g,b,!1,null,null,null).exports,S=s("rsAy"),C={name:"joinBefore",mixins:[s("1JqO").a],data:function(){return{tabs:["课程介绍","课程目录","学员评价"],loadMoreAbout:!1,active:0,tabsClass:"",learnExpiry:"永久有效",startDateStr:"",endDateStr:"",tops:{aboutTop:0,courseTop:0,reviewTop:0}}},components:{Teacher:_,Directory:l.a,DetailHead:c.a,DetailPlan:h,moreMask:S.a,reviewList:o.a},computed:n()({},Object(v.mapState)("course",{details:function(e){return e.details}}),{summary:function(){return this.details.summary||this.details.courseSet.summary},isClassCourse:function(){return Number(this.details.parentId)},accessToJoin:function(){return"success"===this.details.access.code||"user.not_login"===this.details.access.code}}),mounted:function(){window.addEventListener("touchmove",this.handleScroll),window.addEventListener("scroll",this.handleScroll),setTimeout(function(){window.scrollTo(0,0)},100)},destroyed:function(){window.removeEventListener("touchmove",this.handleScroll),window.removeEventListener("scroll",this.handleScroll)},methods:n()({},Object(v.mapActions)("course",["joinCourse"]),{onTabClick:function(e,t){var s=this.$refs[this.transIndex2Tab(e)];window.scrollTo(0,s.$el.offsetTop-44)},transIndex2Tab:function(e){return["about","directory","review"][e]},handleScroll:function(){var e=this;if(!this.scrollFlag){this.scrollFlag=!0;var t=this.$refs,s=["about","directory","review"].reverse();setTimeout(function(){a()(t).forEach(function(s){e.tops[s+"Top"]=t[s].$el.getBoundingClientRect().top}),e.scrollFlag=!1,e.tabsClass=e.tops.aboutTop-44<=0?"van-tabs--fixed":"";for(var i=0;i<s.length;i++){if(e.tops[s[i]+"Top"]-44<=0)return void(e.active=s.length-i-1)}},400)}},activeCurrentTab:function(e){var t=this.tops;return(e+=44)<t.teacherTop?0:e>=t.directoryTop?2:1},handleJoin:function(){if(this.accessToJoin){var e=this.details.learningExpiryDate.expiryEndDate,t=new Date(e).getTime(),s=(new Date).getTime(),i=s<t;if(i=0==e||s<t,this.$store.state.token){if(Number(this.details.buyable)&&i)if(+this.details.price){var a=this.details.learningExpiryDate.expiryMode,r=this.startDateStr+" 至 "+this.endDateStr,n="date"===a?r:this.learnExpiry;this.$router.push({name:"order",params:{id:this.details.id},query:{expiryScope:n,targetType:"course"}})}else this.joinCourse({id:this.details.id})}else this.$router.push({name:"login",query:{redirect:this.redirect}})}},getLearnExpiry:function(e){this.learnExpiry=e.val,this.startDateStr=e.startDateStr,this.endDateStr=e.endDateStr}})},x={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.isClassCourse?"":"join-before"},[s("detail-head",{attrs:{price:e.details.price,courseSet:e.details.courseSet}}),e._v(" "),s("detail-plan",{on:{getLearnExpiry:e.getLearnExpiry}}),e._v(" "),s("div",{staticClass:"segmentation"}),e._v(" "),s("van-tabs",{class:e.tabsClass,on:{click:e.onTabClick},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabs,function(e){return s("van-tab",{key:e,attrs:{title:e}})})),e._v(" "),s("e-panel",{ref:"about",staticClass:"about",attrs:{title:"课程介绍"}},[s("more-mask",{attrs:{disabled:e.loadMoreAbout},on:{maskLoadMore:function(t){e.loadMoreAbout=!0}}},[s("div",{domProps:{innerHTML:e._s(e.summary)}})])],1),e._v(" "),s("div",{staticClass:"segmentation"}),e._v(" "),s("teacher",{staticClass:"teacher",attrs:{title:"教师介绍",teacherInfo:e.details.teachers}}),e._v(" "),s("div",{staticClass:"segmentation"}),e._v(" "),s("directory",{ref:"directory"}),e._v(" "),s("div",{staticClass:"segmentation"}),e._v(" "),s("review-list",{ref:"review",attrs:{targetId:e.details.courseSet.id,reviews:e.details.reviews,title:"学员评价",type:"course",defaulValue:"暂无评价"}}),e._v(" "),e.isClassCourse?e._e():s("e-footer",{attrs:{disabled:!e.accessToJoin},nativeOn:{click:function(t){return e.handleJoin(t)}}},[e._v("\n    "+e._s(e._f("filterJoinStatus")(e.details.access.code)))])],1)},staticRenderFns:[]},T={components:{joinAfter:w,joinBefore:s("VU/8")(C,x,!1,null,null,null).exports},computed:n()({},Object(v.mapState)("course",{selectedPlanIndex:function(e){return e.selectedPlanIndex},joinStatus:function(e){return e.joinStatus},details:function(e){return e.details}}),Object(v.mapState)({isLoading:function(e){return e.isLoading}}),{isEmpty:function(){return 0===a()(this.details).length}}),created:function(){this.getCourseDetail({courseId:this.$route.params.id})},methods:n()({},Object(v.mapActions)("course",["getCourseDetail"]),Object(v.mapMutations)("course",{setSourceType:u.i})),beforeRouteLeave:function(e,t,s){this.setSourceType({sourceType:"img",taskId:-1}),s()}},D={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"course-detail"},[e.isLoading?s("e-loading"):e._e(),e._v(" "),e.joinStatus||e.isEmpty?e._e():s("join-before",{attrs:{details:e.details}}),e._v(" "),e.joinStatus&&!e.isEmpty?s("join-after",{attrs:{details:e.details}}):e._e()],1)},staticRenderFns:[]},E=s("VU/8")(T,D,!1,null,null,null);t.default=E.exports},gMS5:function(e,t,s){"use strict";var i=s("//Fk"),a=s.n(i),r=s("Xxa5"),n=s.n(r),o=(s("eqfM"),s("/QYm")),l=s("exGp"),c=s.n(l),u=s("Dd8w"),d=s.n(u),v=s("PirY"),p=s.n(v),m=s("NYxO"),h=s("gyMJ"),f={data:function(){return{isEncryptionPlus:!1}},props:{courseSet:{type:Object,default:{}}},computed:d()({},Object(m.mapState)("course",{sourceType:function(e){return e.sourceType},selectedPlanId:function(e){return e.selectedPlanId},taskId:function(e){return e.taskId},details:function(e){return e.details},joinStatus:function(e){return e.joinStatus},user:function(e){return e.user}})),watch:{taskId:{immediate:!0,handler:function(e,t){["video","audio"].includes(this.sourceType)&&(window.scrollTo(0,0),this.initPlayer())}}},methods:{getParams:function(){return!this.joinStatus?{query:{courseId:this.selectedPlanId,taskId:this.taskId},params:{preview:1}}:{query:{courseId:this.selectedPlanId,taskId:this.taskId}}},initPlayer:function(){var e=this;return c()(n.a.mark(function t(){var s,i,a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$refs.video&&(e.$refs.video.innerHTML=""),t.next=3,h.a.getMedia(e.getParams());case 3:if(s=t.sent,e.isEncryptionPlus=s.media.isEncryptionPlus,!s.media.isEncryptionPlus){t.next=8;break}return Object(o.a)("该浏览器不支持云视频播放，请下载App"),t.abrupt("return");case 8:i=s.media,a={id:"course-detail__head--video",user:e.user,playlist:i.url,autoplay:!0},e.$store.commit("UPDATE_LOADING_STATUS",!0),e.loadPlayerSDK().then(function(t){e.$store.commit("UPDATE_LOADING_STATUS",!1);new t(a)});case 12:case"end":return t.stop()}},t,e)}))()},loadPlayerSDK:function(){if(!window.VideoPlayerSDK){var e="//service-cdn.qiqiuyun.net/js-sdk/video-player/sdk-v1.js?v="+Date.now()/1e3/60;return new a.a(function(t,s){p()(e,function(e){e&&s(e),t(window.VideoPlayerSDK)})})}return a.a.resolve(window.VideoPlayerSDK)}}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"course-detail__head"},[t("div",{directives:[{name:"show",rawName:"v-show",value:"img"===this.sourceType||this.isEncryptionPlus,expression:"sourceType === 'img' || isEncryptionPlus"}],staticClass:"course-detail__head--img"},[t("img",{attrs:{src:this.courseSet.cover.large,alt:""}})]),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:["video","audio"].includes(this.sourceType)&&!this.isEncryptionPlus,expression:"['video', 'audio'].includes(sourceType) && !isEncryptionPlus"}],ref:"video",attrs:{id:"course-detail__head--video"}})])},staticRenderFns:[]},y=s("VU/8")(f,_,!1,null,null,null);t.a=y.exports},upIP:function(e,t,s){"use strict";var i=s("GK7I"),a=s("rsAy"),r={name:"reviewList",components:{review:i.a,moreMask:a.a},props:["reviews","title","targetId","defaulValue","type"],data:function(){return{maxShowNum:5}},methods:{loadMore:function(){this.$router.push({path:"/comment/"+this.targetId,query:{type:this.type}})}},computed:{isClass:function(){return"classroom"===this.type}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("e-panel",{attrs:{title:e.title,needFlex:!1,defaulValue:e.defaulValue}},[e.reviews.length?s("moreMask",{attrs:{maxHeight:400},on:{maskLoadMore:e.loadMore}},[e._l(e.reviews,function(t){return[s("review",{attrs:{review:t,isClass:e.isClass,course:t.course}})]})],2):e._e()],1)},staticRenderFns:[]},o=s("VU/8")(r,n,!1,null,null,null);t.a=o.exports}});