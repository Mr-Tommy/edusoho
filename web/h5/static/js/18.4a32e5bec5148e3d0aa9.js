webpackJsonp([18],{"7FR4":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("//Fk"),a=i.n(s),n=i("fZjL"),r=i.n(n),c=i("mvHQ"),o=i.n(c),u=i("woOf"),l=i.n(u),d=(i("eqfM"),i("/QYm")),h=(i("XmAh"),i("il3B")),f=i("Dd8w"),m=i.n(f),p=i("bOdI"),v=i.n(p),w=i("gyMJ"),x=i("Du/2"),g=i("NYxO"),I=i("acEQ"),b=i("0Otq"),y=i("BX2S"),T=i("mtMv"),S="",_={name:"exercise-do",mixins:[y.a,T.a],data:function(){var e;return e={info:[],answer:{},lastAnswer:null,cardSeq:0,exercise:null,cardShow:!1,localanswerName:null,localtimeName:null,lastUsedTime:null},v()(e,"lastAnswer",null),v()(e,"usedTime",null),v()(e,"isHandExercise",!1),v()(e,"slideIndex",0),e},components:{itemBank:b.a,guidePage:I.a},computed:m()({},Object(g.mapState)({isLoading:function(e){return e.isLoading},user:function(e){return e.user}})),watch:{answer:{handler:"saveAnswer",deep:!0}},created:function(){this.getData()},beforeRouteEnter:function(e,t,i){S="/"===t.fullPath?"/":"",i()},beforeRouteLeave:function(e,t,i){0==this.info.length||this.isHandExercise||"doing"!=this.exercise.status?i():this.submitpaper()?i():i(!1)},beforeDestroy:function(){this.clearTime(),h.a.close()},methods:m()({},Object(g.mapMutations)({setNavbarTitle:x.j}),Object(g.mapActions)("course",["handExercisedo"]),{getData:function(){var i=this,e=this.$route.query.exerciseId,t=this.$route.query.targetId;this.$route.query.action;w.a.getExerciseInfo({query:{exerciseId:e},data:{targetId:t,targetType:"task"}}).then(function(e){i.afterGetData(e)}).catch(function(e){var t=d.a.fail(e.message);"4036706"==e.code&&setTimeout(function(){i.toIntro(),t.clear()},2e3)})},afterGetData:function(e){this.setNavbarTitle(e.paperName),this.exercise=e,this.isDoing()||(this.getLocalData(),this.formatData(e),this.interruption(),this.saveTime())},isDoing:function(){return"doing"!=this.exercise.status&&(this.showResult(),!0)},interruption:function(){var i=this;this.$route.params.KeepDoing||this.canDoing(this.exercise,this.user.id).then(function(){}).catch(function(e){var t=e.answer;i.submitExercise(t)})},formatData:function(e){var a=this;e.items.forEach(function(s){if("material"!=s.type){var e=a.sixType(s.type,s,a.lastAnswer);a.$set(a.answer,s.id,e.answer),a.info.push(e.item)}if("material"==s.type){var n=l()({},s,{subs:""});s.subs.forEach(function(e,t){e.parentTitle=n,e.parentType=s.type,e.materialIndex=t+1;var i=a.sixType(e.type,e,a.lastAnswer);a.$set(a.answer,e.id,i.answer),a.info.push(i.item)})}})},formatStatus:function(e,t){var i=0;return("single_choice"==e||"choice"==e||"uncertain_choice"==e||"determine"==e)&&0<this.answer[t].length?i=1:"essay"==e&&""!=this.answer[t][0]?i=1:"fill"==e?i=Number(this.answer[t].some(function(e){return""!=e})):i},slideToNumber:function(e){var t=Number(e);this.cardSeq=t,this.cardShow=!1},getLocalData:function(){this.localanswerName="exercise-"+this.user.id+"-"+this.exercise.id,this.localuseTime="exercise-"+this.user.id+"-"+this.exercise.id+"-usedTime",this.lastAnswer=JSON.parse(localStorage.getItem(this.localanswerName))},saveAnswer:function(e){localStorage.setItem(this.localanswerName,o()(e))},saveTime:function(){var e=this,t=localStorage.getItem(this.localuseTime)||0;this.usedTime=setInterval(function(){localStorage.setItem(e.localuseTime,++t)},1e3)},clearTime:function(){clearInterval(this.usedTime),this.usedTime=null},submitpaper:function(){var e=this,t=0,i="题目已经做完，确认提交吗?",s=JSON.parse(o()(this.answer));r()(s).forEach(function(e){s[e]=s[e].filter(function(e){return""!==e}),0===s[e].length&&t++}),0<t&&(i="还有"+t+"题未做，确认提交吗？"),h.a.confirm({title:"提交",cancelButtonText:"立即提交",confirmButtonText:"检查一下",message:i}).then(function(){return!(e.cardShow=!0)}).catch(function(){e.clearTime(),e.submitExercise(s).then(function(e){return!0}).catch(function(e){return!1})})},submitExercise:function(t){var n=this;t||(t=JSON.parse(o()(this.answer)),r()(t).forEach(function(e){t[e]=t[e].filter(function(e){return""!==e})}));var e={answer:t,exerciseId:this.$route.query.exerciseId,userId:this.user.id,exerciseResultId:this.exercise.id};return new a.a(function(i,s){n.handExercisedo(e).then(function(e){n.isHandExercise=!0,i(),n.showResult()}).catch(function(e){var t=d.a.fail(e.message);"4036705"==e.code?setTimeout(function(){n.isHandExercise=!0,t.clear(),i(),n.showResult()},2e3):s()})})},showResult:function(){this.$router.replace({name:"exerciseResult",query:{exerciseId:this.$route.query.exerciseId,exerciseResultId:this.exercise.id,taskId:this.$route.query.targetId,backUrl:S,courseId:this.$route.query.courseId}})},toIntro:function(){this.$router.replace({name:"exerciseIntro",query:{courseId:this.$route.query.courseId,taskId:this.$route.query.targetId,backUrl:S}})}})},q={render:function(){var i=this,e=i.$createElement,s=i._self._c||e;return s("div",{staticClass:"paper-swiper"},[i.isLoading?s("e-loading"):i._e(),i._v(" "),0<i.info.length?s("item-bank",{attrs:{current:i.cardSeq,info:i.info,answer:i.answer,showScore:!1,slideIndex:i.slideIndex,all:i.info.length},on:{"update:current":function(e){i.cardSeq=e},"update:answer":function(e){i.answer=e},"update:slideIndex":function(e){i.slideIndex=e}}}):i._e(),i._v(" "),s("guide-page"),i._v(" "),s("div",{staticClass:"paper-footer"},[s("div",[s("span",{on:{click:function(e){i.cardShow=!0}}},[s("i",{staticClass:"iconfont icon-Questioncard"}),i._v("\n        题卡\n      ")])]),i._v(" "),s("div",[s("span",{on:{click:i.submitpaper}},[s("i",{staticClass:"iconfont icon-submit"}),i._v("\n        提交\n      ")])])]),i._v(" "),s("van-popup",{attrs:{position:"bottom"},model:{value:i.cardShow,callback:function(e){i.cardShow=e},expression:"cardShow"}},[0<i.info.length?s("div",{staticClass:"card"},[s("div",{staticClass:"card-title"},[s("div",[s("span",{staticClass:"card-finish"},[i._v("已完成")]),i._v(" "),s("span",{staticClass:"card-nofinish"},[i._v("未完成")])]),i._v(" "),s("i",{staticClass:"iconfont icon-no",on:{click:function(e){i.cardShow=!1}}})]),i._v(" "),s("div",{staticClass:"card-list"},[s("div",{staticClass:"card-homework-item"},[s("div",{staticClass:"card-item-list"},i._l(i.info,function(t){return s("div",{key:t.id,class:["list-cicle",1==i.formatStatus(t.type,t.id)?"cicle-active":""],on:{click:function(e){i.slideToNumber(t.seq)}}},[i._v(i._s(t.seq))])}))])])]):i._e()])],1)},staticRenderFns:[]};var E=i("VU/8")(_,q,!1,function(e){i("CLYX")},null,null);t.default=E.exports},CLYX:function(e,t){}});