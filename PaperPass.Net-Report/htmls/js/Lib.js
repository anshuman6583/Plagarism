if(!GRN_P){var GRN_P="Report"}(function(t,e,i,a){"use strice";t[e]=i(t,e)})(typeof window!=="undefined"?window:this,GRN_P,function(t,e,i){"use strice";return{}});(function(t,n){var i=null;function e(t){return typeof t!=="undefined"&&t!==null}var r=[],a="cache",o=null;function l(){if(typeof o!=="undefined"){return true}else{return false}}function u(t,e){t=t||r;e=e||a;if(l()){c();o.setItem(e,JSON.stringify(t))}}function c(t){t=t||a;if(l()){o.removeItem(t)}}function f(){if(l()){o.clear()}else{r=[]}}function v(t){t=t||a;if(l()){return JSON.parse(o.getItem(t))||r}else{return r}}function s(t,e){i=this;this.caches=[];a=t||"cache";this.cache_name=a;this.myStorage=e||localStorage}s.prototype={constructor:s,_className:"Cache",init:function(){o=this.myStorage;a=this.cache_name;r=v()},cache:function(t,e,i){this.init();r=v();var a=this.exist(t,e);if(n.isFunction(i)){i.call(this,a)}return a},set:function(t,e,i){this.init();t[e]=i;r.push(t);u()},update:function(t,e){this.init();r[t]=e;u()},get:function(t){this.init();return e(t)?r[t]:r},exist:function(t,e){this.init();for(var i=0,a=r.length;i<a;i++){if(t in r[i]&&e==r[i][t]){return i}}return-1},clear:function(){this.init();this.remove();f()},remove:function(t){this.init();if(t){if(t>-1&&t<r.length-1){r.splice(t,1)}}else{r=[]}u()}};t.Cache=s})(Report,jQuery);(function(t,e){"use strict";var i=window.localStorage;function a(t){t=t+"_s";var e=JSON.parse(i.getItem(t));return e}function n(t,e){t=t+"_s";i.setItem(t,JSON.stringify(e))}function r(){}r.saveId=function(t){var e={Language:"",ALink:"htmls/detail_report.html",HeaderState:"",InitDetailReport:"",DetailNum:"",DetailOffset:"",FoldState:"",LineState:"",TabName:"",DetailSize:"",DetailPageNav:"",ZoomBtnState:"",PageNavState:"",InitViewOriginal:"",OriginalNum:"",OriginalOffset:"",OriginalSize:"",OriginalPageNav:"",OriginalTopNum:"",OriZoomBtnState:"",OriPageNavState:"",PlainTextLineState:"",PlainTextDetailNum:"",PlainTextDetailOffset:"",PlainTextDetailSize:"",PlainTextZoomBtnState:"",PTPageNavState:"",PlainTextOriginalNum:"",PlainTextOriginalOffset:"",PlainTextOriginalSize:"",PlainTextOriginalTopNum:"",PlainTextOriZoomBtnState:"",OPTPageNavState:""};t=t+"_s";if(i.getItem(t)==null){i.setItem(t,JSON.stringify(e))}else{return}};r.saveLanguage=function(t,e){var i=a(t);i.Language=e;n(t,i)};r.getLanguage=function(t){var e=a(t);return e.Language};r.saveALink=function(t,e){var i=a(t);i.ALink=e;n(t,i)};r.getALink=function(t){var e=a(t);return e.ALink};r.saveTabName=function(t,e){var i=a(t);i.TabName=e;n(t,i)};r.getTabName=function(t){var e=a(t);return e.TabName};r.saveHeaderState=function(t,e){var i=a(t);i.HeaderState=e;n(t,i)};r.getHeaderState=function(t){var e=a(t);return e.HeaderState};r.saveFoldState=function(t,e){var i=a(t);i.FoldState=e;n(t,i)};r.getFoldState=function(t){var e=a(t);return e.FoldState};r.saveInitDetailReport=function(t,e){var i=a(t);i.InitDetailReport=e;n(t,i)};r.getInitDetailReport=function(t){var e=a(t);return e.InitDetailReport};r.saveDetailNum=function(t,e){var i=a(t);i.DetailNum=e;n(t,i)};r.getDetailNum=function(t){var e=a(t);return e.DetailNum};r.saveDetailOffset=function(t,e){var i=a(t);i.DetailOffset=e;n(t,i)};r.getDetailOffset=function(t){var e=a(t);return e.DetailOffset};r.saveLineState=function(t,e){var i=a(t);i.LineState=e;n(t,i)};r.getLineState=function(t){var e=a(t);return e.LineState};r.saveDetailSize=function(t,e){var i=a(t);i.DetailSize=e;n(t,i)};r.getDetailSize=function(t){var e=a(t);return e.DetailSize};r.saveDetailPageNav=function(t,e){var i=a(t);i.DetailPageNav=e;n(t,i)};r.getDetailPageNav=function(t){var e=a(t);return e.DetailPageNav};r.saveZoomBtnState=function(t,e){var i=a(t);i.ZoomBtnState=e;n(t,i)};r.getZoomBtnState=function(t){var e=a(t);return e.ZoomBtnState};r.savePageNavState=function(t,e){var i=a(t);i.PageNavState=e;n(t,i)};r.getPageNavState=function(t){var e=a(t);return e.PageNavState};r.saveInitViewOriginal=function(t,e){var i=a(t);i.InitViewOriginal=e;n(t,i)};r.getInitViewOriginal=function(t){var e=a(t);return e.InitViewOriginal};r.saveOriginalNum=function(t,e){var i=a(t);i.OriginalNum=e;n(t,i)};r.getOriginalNum=function(t){var e=a(t);return e.OriginalNum};r.saveOriginalOffset=function(t,e){var i=a(t);i.OriginalOffset=e;n(t,i)};r.getOriginalOffset=function(t){var e=a(t);return e.OriginalOffset};r.saveOriginalSize=function(t,e){var i=a(t);i.OriginalSize=e;n(t,i)};r.getOriginalSize=function(t){var e=a(t);return e.OriginalSize};r.saveOriginalPageNav=function(t,e){var i=a(t);i.OriginalPageNav=e;n(t,i)};r.getOriginalPageNav=function(t){var e=a(t);return e.OriginalPageNav};r.saveOriginalTopNum=function(t,e){var i=a(t);i.OriginalTopNum=e;n(t,i)};r.getOriginalTopNum=function(t){var e=a(t);return e.OriginalTopNum};r.saveOriZoomBtnState=function(t,e){var i=a(t);i.OriZoomBtnState=e;n(t,i)};r.getOriZoomBtnState=function(t){var e=a(t);return e.OriZoomBtnState};r.saveOriPageNavState=function(t,e){var i=a(t);i.OriPageNavState=e;n(t,i)};r.getOriPageNavState=function(t){var e=a(t);return e.OriPageNavState};r.savePlainTextLineState=function(t,e){var i=a(t);i.PlainTextLineState=e;n(t,i)};r.getPlainTextLineState=function(t){var e=a(t);return e.PlainTextLineState};r.savePlainTextDetailNum=function(t,e){var i=a(t);i.PlainTextDetailNum=e;n(t,i)};r.getPlainTextDetailNum=function(t){var e=a(t);return e.PlainTextDetailNum};r.savePlainTextDetailOffset=function(t,e){var i=a(t);i.PlainTextDetailOffset=e;n(t,i)};r.getPlainTextDetailOffset=function(t){var e=a(t);return e.PlainTextDetailOffset};r.savePlainTextDetailSize=function(t,e){var i=a(t);i.PlainTextDetailSize=e;n(t,i)};r.getPlainTextDetailSize=function(t){var e=a(t);return e.PlainTextDetailSize};r.savePlainTextZoomBtnState=function(t,e){var i=a(t);i.PlainTextZoomBtnState=e;n(t,i)};r.getPlainTextZoomBtnState=function(t){var e=a(t);return e.PlainTextZoomBtnState};r.savePTPageNavState=function(t,e){var i=a(t);i.PTPageNavState=e;n(t,i)};r.getPTPageNavState=function(t){var e=a(t);return e.PTPageNavState};r.savePlainTextOriginalNum=function(t,e){var i=a(t);i.PlainTextOriginalNum=e;n(t,i)};r.getPlainTextOriginalNum=function(t){var e=a(t);return e.PlainTextOriginalNum};r.savePlainTextOriginalOffset=function(t,e){var i=a(t);i.PlainTextOriginalOffset=e;n(t,i)};r.getPlainTextOriginalOffset=function(t){var e=a(t);return e.PlainTextOriginalOffset};r.savePlainTextOriginalSize=function(t,e){var i=a(t);i.PlainTextOriginalSize=e;n(t,i)};r.getPlainTextOriginalSize=function(t){var e=a(t);return e.PlainTextOriginalSize};r.savePlainTextOriginalTopNum=function(t,e){var i=a(t);i.PlainTextOriginalTopNum=e;n(t,i)};r.getPlainTextOriginalTopNum=function(t){var e=a(t);return e.PlainTextOriginalTopNum};r.savePlainTextOriZoomBtnState=function(t,e){var i=a(t);i.PlainTextOriZoomBtnState=e;n(t,i)};r.getPlainTextOriZoomBtnState=function(t){var e=a(t);return e.PlainTextOriZoomBtnState};r.saveOPTPageNavState=function(t,e){var i=a(t);i.OPTPageNavState=e;n(t,i)};r.getOPTPageNavState=function(t){var e=a(t);return e.OPTPageNavState};t.operateState=r})(Report,jQuery);(function(t,c){"use strict";var f=null;function i(){if(!f){f=new t.Cache(t.report_id,localStorage)}}function e(){}e.sectionEdit=function(l){i();var t={textWarp:"[tpl-section=warp]",text:"[tpl-section=text]",badge:"[tpl-section=badge]",box:"[tpl-section=box]",textarea:"[tpl-section=textarea]",template:'script[type="text/html"][template="section"]'};l=c.isPlainObject(l)?c.extend(t,l):t;var u=null;return function(){u=this;var i="";var t=c(this);var e=t.closest(l.textWarp);var a=e.find(l.badge).data("id");var n=e.find(l.text);var r=e.find(l.box);r.html(c(l.template).html());var o=e.find(l.textarea);f.cache("id",a,function(t){if(-1===t){i=n.text()}else{var e=f.get(t);i=e.text}o.val(c.trim(i));o.text(o.val()).focus()})}};e.textSectionEdit=function(){i();return function(){var i="";var t=c(".section-id").text();var a=c(".section-txt.section-txt-next");a.text("");var e=JSON.parse(section_edit_json);c.each(e[t],function(t,e){i+=e.content});f.cache("id",t,function(t){if(-1===t){i=i}else{var e=f.get(t);i=e.text}a.val(c.trim(i));a.html(a.val())})}};e.sectionSave=function(a){i();var t={warp:'[tpl-section="warp"]',box:'[tpl-section="box"]',badge:'[tpl-section="badge"]',textarea:'[tpl-section="textarea"]'};a=c.isPlainObject(a)?c.extend(t,a):t;var e=null;return function(){var t=c(this).closest(a.warp);var e=t.find(a.textarea).val();e=c.trim(e);var i=t.find(a.badge).data("id");f.cache("id",i,function(t){if(-1===t){f.set({text:e},"id",i)}else{f.update(t,{id:i,text:e})}});t.find(a.box).html("")}};e.textSectionSave=function(){i();return function(){var t=c(this);var e=t.parents("#layui-layer-section").find(".section-id").text();var i=c(".section-txt.section-txt-next").val();i=c.trim(i);f.cache("id",e,function(t){if(-1===t){f.set({text:i},"id",e)}else{f.update(t,{id:e,text:i})}})}};e.tab=function(){var o=null;return function(i){if(o===this){return}var t={li:"li",section:'[tab="section"]',active:"active",callback:function(){}};i=c.isPlainObject(i)?c.extend(t,i):t;o=this;var e=c(this);e.parent().find(i.li).removeClass(i.active);e.addClass(i.active);var a=e.data("id");if(!a){return}var n=a.toString().split(",");var r=c(i.section);r.hide();r.each(function(){var t=c(this);var e=t.data("id");if(c.inArray(e.toString(),n)!==-1){i.callback.call(this);t.show()}})}};e.toggle=function(t,e){var i=c(this).closest("[eve-toggle=warp]").find("[eve-toggle=section]");if(i.css("display")==="none"){if(c.isFunction(t)){t()}i.show()}else{if(c.isFunction(e)){e()}i.hide()}};t.Paper=e})(Report,jQuery);