(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71b9f774"],{d6c3:function(t,e,a){"use strict";var s=a("e83e"),r=a.n(s);r.a},e83e:function(t,e,a){},f4a9:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-view",{attrs:{avatar:t.avatar,title:!1}},[a("div",{attrs:{slot:"headerContent"},slot:"headerContent"},[a("div",{staticClass:"title"},[t._v(t._s(t.timeFix)+"，"+t._s(t.user.name)),a("span",{staticClass:"welcome-text"},[t._v("，"+t._s(t.welcome))])])]),a("div",{attrs:{slot:"extra"},slot:"extra"}),a("div",[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:16,lg:24,md:24,sm:24,xs:24}},[a("a-card",{staticClass:"project-list",staticStyle:{"margin-bottom":"24px"},attrs:{loading:t.loading,bordered:!1,title:"最近生成","body-style":{padding:0}}},[a("router-link",{attrs:{slot:"extra",to:"gen"},slot:"extra"},[t._v("全部记录")]),a("div",t._l(t.projects,(function(e,s){return a("a-card-grid",{key:s,staticClass:"project-card-grid"},[a("a-card",{attrs:{bordered:!1,"body-style":{padding:0}}},[a("a-card-meta",[a("div",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[a("a-badge",{attrs:{slot:"avatar",count:t._f("statusFilter")(e.status),numberStyle:t._f("statusStyleFilter")(e.status)},slot:"avatar"}),a("span",[t._v(t._s(e.novelname))])],1),a("div",{staticClass:"card-description",attrs:{slot:"description"},slot:"description"},[t._v(" "+t._s(e.starttext)+" | "+t._s(e.resultdigest)+" ")])]),a("div",{staticClass:"project-item"},[a("a",[t._v(t._s(e.lenth+"字"))]),"2"==e.status?a("a",{staticClass:"action",on:{click:function(a){return t.handleDetail(e.recordid)}}},[t._v("查看详情")]):t._e()])],1)],1)})),1)],1)],1),a("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:8,lg:24,md:24,sm:24,xs:24}},[a("a-card",{attrs:{title:"使用说明",loading:t.loading,bordered:!0,"body-style":{padding:0}}},[a("div",{staticClass:"item-group"},[a("p",[t._v("1. 在“"),a("strong",[t._v("小说信息")]),t._v("”页面中，填写作者的小说名称及主角名（小说名称用于用户分辨该生成内容用于哪本书，内容将会以设定的主角名进行生成） ")]),a("p",[t._v("2. 在“"),a("strong",[t._v("模型列表")]),t._v("”页面查看当前可用的模型信息及样例")]),a("p",[t._v("3. 在“"),a("strong",[t._v("AI生成")]),t._v("”页面填写相关信息发起生成请求，AI模型将进行内容生成")]),a("p",[t._v("4. 内测阶段生成速度约为"),a("strong",[t._v("5分钟/千字")]),t._v("，请耐心等待")])])]),a("a-card",{staticStyle:{"margin-top":"30px"},attrs:{title:"开发者提示",loading:t.loading,bordered:!1,"body-style":{padding:0}}},[a("strong",{staticStyle:{"font-size":"16px"}},[t._v("此人工智能模型算法生成的内容，原句引用率极低，不存在抄袭风险，支持全网查重。生成功能免费使用中，更多功能正在开发，敬请期待..."),a("br")]),a("strong",{staticStyle:{"font-size":"16px"}},[t._v("企鹅群：232463027"),a("br")])])],1)],1),a("detail-view",{ref:"detailview"})],1)])},r=[],i=a("5530"),n=a("ca00"),o=a("5880"),l=a("680a"),c=a("81d1"),d=a("2036"),u=a("2af9"),g=a("b775"),p={user:"/user",role:"/role",service:"/service",permission:"/permission",permissionNoPager:"/permission/no-pager",orgTree:"/org/tree"};function v(t){return Object(g["b"])({url:p.role,method:"get",params:t})}function m(t){return Object(g["b"])({url:p.service,method:"get",params:t})}var f=a("7104"),b={0:{status:"default",text:"关闭",numberStyle:{backgroundColor:"#f50"}},1:{status:"processing",text:"生成中",numberStyle:{backgroundColor:"#2db7f5"}},2:{status:"success",text:"已完成",numberStyle:{backgroundColor:"#52c41a"}}},h={name:"HomePage",components:{PageView:l["b"],HeadInfo:c["a"],Radar:u["d"],DetailView:d["a"]},data:function(){return{timeFix:Object(n["a"])(),avatar:"",user:{},signalrConnection:"",projects:[],loading:!0,radarLoading:!0,activities:[],teams:[],statusMap:b,axis1Opts:{dataKey:"item",line:null,tickLine:null,grid:{lineStyle:{lineDash:null},hideFirstLine:!1}},axis2Opts:{dataKey:"score",line:null,tickLine:null,grid:{type:"polygon",lineStyle:{lineDash:null}}},scale:[{dataKey:"score",min:0,max:80}],axisData:[{item:"引用",a:70,b:30,c:40},{item:"口碑",a:60,b:70,c:40},{item:"产量",a:50,b:60,c:40},{item:"贡献",a:40,b:50,c:40},{item:"热度",a:60,b:70,c:40},{item:"引用",a:70,b:50,c:40}],radarData:[]}},computed:Object(i["a"])({},Object(o["mapState"])({nickname:function(t){return t.user.nickname},welcome:function(t){return t.user.welcome}}),{userInfo:function(){return this.$store.getters.userInfo}}),created:function(){this.user=this.userInfo,this.avatar=this.userInfo.avatar,v().then((function(t){})),m().then((function(t){}))},mounted:function(){this.getProjects(),this.getActivity(),this.getTeams(),this.initRadar()},methods:{getProjects:function(){var t=this;this.$http.get("/genrecord/getrecent").then((function(e){t.projects=e.response,t.loading=!1}))},getActivity:function(){var t=this;this.$http.get("/subscribe/get").then((function(e){t.activities=e.response}))},getTeams:function(){var t=this;this.$http.get("/workplace/teams").then((function(e){t.teams=e.result}))},initRadar:function(){var t=this;this.radarLoading=!0,this.$http.get("/workplace/radar").then((function(e){var a=(new f.View).source(e.result);a.transform({type:"fold",fields:["个人","团队","部门"],key:"user",value:"score"}),t.radarData=a.rows,t.radarLoading=!1}))},handleDetail:function(t){this.$refs.detailview.load(t)}},filters:{statusFilter:function(t){return b[t].text},statusTypeFilter:function(t){return b[t].status},statusStyleFilter:function(t){return b[t].numberStyle}}},_=h,y=(a("d6c3"),a("2877")),x=Object(y["a"])(_,s,r,!1,null,"3350b3c1",null);e["default"]=x.exports}}]);