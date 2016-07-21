/**
 * Created with IntelliJ IDEA.
 * User: clone
 * Date: 16-2-2 下午2:47
 * QQ: 351354136
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports , module){
               'use strict';
                var tvp = window['tvp'];  // require('v1.player_mobile');
                var Player = {
                       g_timePoints : [],
                       g_d0 : new Date(),
                       initPlayer : function(opt){
                                   var data = $.extend({},opt || {});
                                   this.data = data ;
                                   if (tvp.$.each(data, function(a) {
                                       var b = tvp.$.getUrlParam(a);
                                       "" != b && ("for" === a && (a = "_for"), data[a] = decodeURIComponent(b), data[a] = tvp.$.filterXSS(data[a]));
                                   }), data.vid) {
                                           var r = null;
                                           (r = data.vid.match(/\w+_\w+_(\w+)/)) && (data.vid = r[1]);
                                   };
                                   !function(data) {
                                           var a = "" + data.width, b = "" + data.height, c = /^[\d\.]+?(%|px)?$/;
                                           a && -1 === a.indexOf("%") && (data.width = parseInt(a, 10)),
                                               b && -1 === b.indexOf("%") && (data.height = parseInt(b, 10)),
                                               c.test(a) && c.test(b) || (data.width = "100%", data.height = "100%");
                                   }(this.data);
                                   var a = new tvp.VideoInfo();
                                   data.vid ? a.setVid(data.vid) :data.cnlid && a.setChannelId(data.cnlid);
                                   var b = {
                                       promotionId:231,
                                       downloader:!0
                                   }, c = {
                                       type:2,
                                       promotionId:236,
                                       downloader:!0
                                   };
                                   tvp.$.iphone || (b.downloadUrl = "http://mcgi.v.qq.com/commdatav2?cmd=4&platform=aphone&confid=231",
                                       c.downloadUrl = "http://mcgi.v.qq.com/commdatav2?cmd=4&platform=aphone&confid=236"),
                                       tvp.$.os.android && (data.auto = 0);
                                   var d = new tvp.Player(),
                                       e = {
                                           width:data.width,
                                           height:data.height,
                                           modId:"mod_player",
                                           appid:1e4,
                                           contentId:data.biz,
                                           video:a,
                                           pic: data.pic , //tvp.common.getVideoSnapMobile(data.vid),
                                           playerType:data.type,
                                           vodFlashSkin:"0" != data.tiny ? "http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf" :"",
                                           autoplay:"0" == data.auto ? 0 :1,
                                           isHtml5UseUI:!0,
                                           isHtml5UseFakeFullScreen:!tvp.$.os.ios,
                                           isiPhoneShowPlaysinline:tvp.$.browser.WeChat,
                                           isiPhoneShowPosterOnPause:!tvp.$.browser.WeChat
                                   }, f = this.isIn52(tvp.$);
                                   data.vid ? e.plugins = {
                                       AppRecommend:c,
                                       AppBannerOnPause:f ? !1 :b,
                                       AppFollowSync:f ? !0 :!1
                                   } :data.cnlid && (e.type = 1), f && (isNaN(e.height) || (e.height -= 40), isNaN(data.height) || (data.height -= 40));
                                   var g = document.getElementById("mod_player");
                                   g.style.width = isNaN(data.width) ? data.width :data.width + "px", g.style.height = isNaN(data.height) ? data.height :data.height + "px",
                                       "ad" === data._for && e.plugins && (e.plugins.AppBannerOnPause = !1, e.plugins.AppFollowSync = !1,
                                           e.plugins.AppRecommend = !1), d.create(e), this.initDownload(tvp.$);
                       },
                       speedReport : function(){
                               for (var a = [], b = 0; b < this.g_timePoints.length; b++) this.g_timePoints[b] && a.push(b + 1 + "=" + (this.g_timePoints[b] - this.g_d0));
                               var c = "http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=1422&flag2=207&flag3=1&" + a.join("&");
                               window._speed_img = new Image(), window._speed_img.src = c;
                       },
                       isIn52  : function(){
                               var b = !1;
                               try {
                                   if ("object" == a.type(top.location) && top.location.href) {
                                       var c = top.location.href, d = decodeURIComponent(a.getUrlParam("__biz", c)), e = a.getUrlParam("showqqliveapptips", c), f = a.isArray(window.g_bizArray) && window.g_bizArray.length > 0 ? window.g_bizArray :[ "MTA5NTIzNDE2MQ==", "MjkyNzc4OTgyMA==", "MjM5MjAwOTk0MA==", "MjM5NzAzOTA2MA==", "Mjc1NjM3MjY2MA==", "MjM5NDI2MjM2MA==", "MjM5MzAzMDUwMA==", "MjM5Mzk3MDQ2MA==", "MjM5ODAyMTQ0MA==", "MjM5OTA3NDA2MA==", "MjM5ODE1NDUwMA==", "MjM5NjEzNzU2MA==", "MjM5NDA1MzcwMA==", "MjM5ODE0MzgwMA==", "MjM5MTMwOTU4MA==", "MjM5NzA0Njc4MA==", "MjM5MDIzNzA4MA==", "MjM5OTA0Mzc2MA==", "MjM5ODAyNDAwMA==", "MjM5MTIxOTEyMA==", "MjM1ODMzMDgyMQ==", "MjM5NDMwOTU0MA==", "MjM5NTAzNjcwMA==", "MjEwMjQxMDg0MQ==", "MjM5NzEzNjkyMA==", "MjM5NzAzMjQ4MA==", "MjM5MzYyMjAyMA==", "MjM5NTAxMTg0MA==", "MjM5NTc3MDA4MQ==", "MjM5MDYwOTQ0MA==", "MjM5ODMzMTQ2MA==", "MTY5NDY3", "MjAwMzczMjcyMQ==", "MjM5MTY2MjYwMA==", "MzA3NTA2OTIxNQ==", "MjM5NTgwMTI0MA==", "MjM5NzAzOTA2MA==", "MjM5MDgyMjI0MQ==", "MjM5NDkzNDYyMQ==", "MjM5MTA1ODk0MA==", "MjM5NTM3MjQ2NA==", "MjM5NjYyMTAyMA==", "MjM5MDgwMDYyMA==", "MjM5ODYyMjI0Mg==", "MjM5ODA5MjA2MA==", "MjM5MTk4OTUxNA==", "MTA5NTIzNDE2MQ==", "MjkyNzc4OTgyMA==", "MjM5MjAwOTk0MA==", "MjM5MDEyODk2MQ==", "MjM5NTM0MzY0MA==", "MjM5ODA4ODIwMA==", "MjM5NzQyOTIyMQ==" ];
                                       d && (this.data.biz = d), b = "1" == e || c.indexOf("mp.weixin.qq.com") > 0 && a.inArray(d, f) >= 0 ? !0 :!1;
                                   }
                               } catch (g) {}
                               return b;
                       },
                       initDownload : function(a){
                             window != top && (a.os.iphone || a.os.android) && this.isIn52(a) && this.showDownload(a);
                       },
                       showDownload : function(a){
                               function b() {
                                   var b, c, d = a.Deferred();
                                   return b = "//imgcache.qq.com/tencentvideo_v1/tvp/js/plugins/appfollow.js", c = tvp && tvp.ts ? tvp.ts :"20150402",
                                       b += "?t=" + c, a.createAppFollow ? d.resolve() :a.getScript(b, function() {
                                       d.resolve();
                                   }), d;
                               }
                               this.g_timePoints[0] = new Date(), b().done(function() {
                                   var b = a.createAppFollow({
                                               openFollow:0,
                                               appId:1e4,
                                               isWxgzh:!0,
                                               downloader:!0,
                                               defaultVid:this.data.vid,
                                               modId:"mod_download"
                                   });
                                   a("#mod_download").show();
                                   try {
                                       frameElement.style.height = parseInt(frameElement.height, 10) + 60 + "px", b.done(function(a) {
                                           a && (frameElement.style.height = parseInt(frameElement.height, 10) + 111 + "px");
                                       });
                                   } catch (c) {}
                               });
                       }
                };
                module.exports = Player ;
});