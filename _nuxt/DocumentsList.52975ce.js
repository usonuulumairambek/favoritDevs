(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1401:function(t,e,n){"use strict";(function(t,o){var d=n(87);e.a={name:"DocumentsList",components:{Document:d.default},props:{hasTab:{type:Boolean,default:!1},items:Array},data:function(){return{isOpen:!1,firsLineHeight:0,tabDocument:[],tabContent:[],showExpand:!1,tabs:[],activeTab:0,headDocuments:[],bodyDocuments:[],activeExpands:{},moreButton:"",moreButtonTransition:0,animationPlay:!1,tabTimeline:t.timeline()}},created:function(){if(this.hasTab&&o(this.items,"0.expand",[]).length&&(this.showExpand=!0,this.tabContent=o(this.items,"0.expand",[]),this.toggleExpand("0-0")),this.hasTab){var t=this.items.map((function(t){return t.tabLabel}));this.tabs=t,this.tabDocument=o(this.items,"0.documents",[])}},methods:{changeTab:function(t){var e=this;this.tabTimeline.clear();var n=this.showExpand?this.$el.querySelector(".documents-list__tab-content"):this.$el.querySelector(".documents-list__content");this.tabTimeline.to(n,{opacity:0,duration:.4}).then((function(){e.changeDocuments(t)}))},changeDocuments:function(t){this.activeTab=t,this.activeExpands={},this.tabDocument=o(this.items,"".concat(t,".documents"),[]),this.tabContent=o(this.items,"".concat(t,".expand"),[]);var e=this.showExpand?this.$el.querySelector(".documents-list__tab-content"):this.$el.querySelector(".documents-list__content");this.tabTimeline.to(e,{opacity:1,duration:.4})},toggleExpand:function(t){this.activeExpands[t]?this.$set(this.activeExpands,t,!1):this.$set(this.activeExpands,t,!0)}}}}).call(this,n(23).gsap,n(11))},1402:function(t,e,n){var content=n(2068);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(3).default)("fc30c7ce",content,!0,{sourceMap:!1})},1842:function(t,e,n){"use strict";n.r(e);var o=n(1401).a,d=(n(2067),n(0)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"documents-list"},[n("div",{staticClass:"container--lg"},[t.hasTab?n("BaseTabs",{attrs:{tabs:t.tabs},on:{changeTab:function(e){return t.changeTab(e)}}}):t._e()],1),t._v(" "),t.showExpand?n("div",{staticClass:"documents-list__tab-content"},t._l(t.tabContent,(function(e,o){return n("BaseExpandSection",{key:t.activeTab+"-"+o,staticClass:"container--lg documents-list__expand",class:{active:t._get(t.activeExpands,t.activeTab+"-"+o,!1)},attrs:{active:t._get(t.activeExpands,t.activeTab+"-"+o,!1)},scopedSlots:t._u([{key:"head",fn:function(){return[n("div",{staticClass:"documents-list__expand-head",class:t.$resp.mdUp?"h6":"h5",on:{click:function(e){return t.toggleExpand(t.activeTab+"-"+o)}}},[t._v("\n          "+t._s(e.label)+"\n          "),n("svg",{attrs:{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("mask",{attrs:{id:"path-1-outside-1",maskUnits:"userSpaceOnUse",x:"-0.427734",y:"0.101562",width:"14",height:"9",fill:"black"}},[n("rect",{attrs:{fill:"white",x:"-0.427734",y:"0.101562",width:"14",height:"9"}}),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.3332 8.10156L6.99984 2.91638L1.66651 8.10156L0.572266 7.03772L6.99984 0.78869L13.4274 7.03772L12.3332 8.10156Z"}})]),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.3332 8.10156L6.99984 2.91638L1.66651 8.10156L0.572266 7.03772L6.99984 0.78869L13.4274 7.03772L12.3332 8.10156Z",fill:"black"}}),t._v(" "),n("path",{attrs:{d:"M6.99984 2.91638L7.06955 2.84468L6.99984 2.77691L6.93013 2.84468L6.99984 2.91638ZM12.3332 8.10156L12.2635 8.17326L12.3332 8.24103L12.4029 8.17326L12.3332 8.10156ZM1.66651 8.10156L1.5968 8.17326L1.66651 8.24103L1.73621 8.17326L1.66651 8.10156ZM0.572266 7.03772L0.502558 6.96602L0.42881 7.03772L0.502558 7.10942L0.572266 7.03772ZM6.99984 0.78869L7.06955 0.716991L6.99984 0.649219L6.93013 0.716991L6.99984 0.78869ZM13.4274 7.03772L13.4971 7.10942L13.5709 7.03772L13.4971 6.96602L13.4274 7.03772ZM6.93013 2.98808L12.2635 8.17326L12.4029 8.02986L7.06955 2.84468L6.93013 2.98808ZM1.73621 8.17326L7.06955 2.98808L6.93013 2.84468L1.5968 8.02986L1.73621 8.17326ZM0.502558 7.10942L1.5968 8.17326L1.73621 8.02986L0.641973 6.96602L0.502558 7.10942ZM6.93013 0.716991L0.502558 6.96602L0.641973 7.10942L7.06955 0.86039L6.93013 0.716991ZM13.4971 6.96602L7.06955 0.716991L6.93013 0.86039L13.3577 7.10942L13.4971 6.96602ZM12.4029 8.17326L13.4971 7.10942L13.3577 6.96602L12.2635 8.02986L12.4029 8.17326Z",fill:"black",mask:"url(#path-1-outside-1)"}})])])]},proxy:!0},{key:"content",fn:function(){return[n("div",{staticClass:"documents-list__content"},t._l(e.documents,(function(e,i){return n("div",{key:"document-"+i,staticClass:"documents-list__document"},[n("Document",t._b({},"Document",e,!1))],1)})),0)]},proxy:!0}],null,!0)})})),1):t.hasTab?n("div",{staticClass:"documents-list__background-wrap"},[n("div",{staticClass:"documents-list__content"},t._l(t.tabDocument,(function(e,o){return n("div",{key:t.activeTab+"-"+o,staticClass:"documents-list__document"},[n("Document",t._b({},"Document",e,!1))],1)})),0)]):n("div",{staticClass:"documents-list__background-wrap"},[n("div",{staticClass:"documents-list__content"},[t._l(t.items,(function(e,o){return[n("div",{key:o,staticClass:"documents-list__document"},[n("Document",t._b({},"Document",e,!1))],1),t._v(" "),(o+1)%6||o===t.items.length-1?t._e():n("div",{key:"line-"+o,staticClass:"documents-list__content-line"})]}))],2)])])}),[],!1,null,null,null);e.default=component.exports},2067:function(t,e,n){"use strict";var o=n(1402);n.n(o).a},2068:function(t,e,n){(e=n(2)(!1)).push([t.i,".documents-list{position:relative;margin-bottom:50px}.documents-list .tabs{margin-bottom:40px}@media (max-width:767.98px){.documents-list .tabs{margin-bottom:32px}}.documents-list .base-title{margin-bottom:50px}@media (max-width:767.98px){.documents-list .base-title{margin-bottom:24px}}.documents-list__background-wrap{width:100%;max-width:1206px;padding:70px 103px 20px;margin:0 auto;background-color:#fff}@media (max-width:1279.98px){.documents-list__background-wrap{max-width:100%;padding:70px 40px 20px}}@media (max-width:767.98px){.documents-list__background-wrap{padding:40px 16px 8px}}.documents-list__expand{padding:0;background-color:#fff}.documents-list__expand:not(:last-child){margin-bottom:20px}.documents-list__expand-head{display:flex;align-items:center;justify-content:space-between;padding:30px;cursor:pointer}@media (max-width:1279.98px){.documents-list__expand-head{padding:30px 40px}}@media (max-width:767.98px){.documents-list__expand-head{padding:24px 16px}}.documents-list__expand-head svg{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.documents-list__expand .documents-list__content{padding:70px 103px 20px;border-top:1px solid hsla(0,0%,39.6%,.15)}@media (max-width:1279.98px){.documents-list__expand .documents-list__content{padding:70px 40px 20px}}@media (max-width:767.98px){.documents-list__expand .documents-list__content{padding:40px 16px 8px}}.documents-list__expand.active .documents-list__expand-head svg{-webkit-transform:rotate(0);transform:rotate(0)}.documents-list__expand .expand-section__content{padding:0}.documents-list__content{display:flex;flex-wrap:wrap;width:100%}.documents-list__content-line{width:100%;height:1px;margin-bottom:50px;background-color:hsla(0,0%,39.6%,.15)}@media (max-width:767.98px){.documents-list__content-line{margin-bottom:32px}}.documents-list__document{width:33.3%}.documents-list__document .document{margin-bottom:50px}@media (max-width:1279.98px){.documents-list__document{width:50%}}@media (max-width:767.98px){.documents-list__document{width:100%}.documents-list__document .document{margin-bottom:32px}}.documents-list__more{display:flex;align-items:center;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-top:20px;cursor:pointer}@media (max-width:767.98px){.documents-list__more{margin-top:8px}}.documents-list__more p{font-family:FuturaPT,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:20px;font-weight:500;line-height:24px;border-bottom:1px dashed #000}.documents-list__more svg{margin-left:8px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.documents-list__more .active{-webkit-transform:rotate(0);transform:rotate(0)}",""]),t.exports=e}}]);