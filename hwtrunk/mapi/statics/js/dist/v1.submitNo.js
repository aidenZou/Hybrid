!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var i;i=function(t,e,i){"use strict";var o=n(2),a=function(t){return this.opts=$.extend({},t),this.subNoUrl="/appsite_api/index/save_weixin",this.randUrl="/appsite_api/html5/randVerify",this.isRes=!1,this};a.prototype={constructor:a,init:function(){var t=this;return t.getRandCode(),t.bindEvent(),t},bindEvent:function(){var t=this;$("#subNo").click(function(){t.checkSubNo()&&t.savePublicNumber()}),$("#code").on("tap",function(){return t.isRes?!1:void t.getRandCode()})},checkSubNo:function(){var t=$("#weixin").val(),e=$("#randCode").val(),n=$("#tel").val();return t&&n?e?/^\d{11}$/.test(n)?!0:o.alert("请正确填写11位数手机号"):o.alert("验证码不能为空"):o.alert("公众号或联系方式不能为空")},getRandCode:function(){var t=this;t.isRes=!0,$.ajax({url:t.randUrl,type:"get",success:function(e){if(t.isRes=!1,!e)return!1;var n=JSON.parse(e);1==n.code&&$("#code").html(n.yzm)},error:function(t){alert("")}})},savePublicNumber:function(){var t,e=this;t={weixin:$("#weixin").val(),tel:$("#tel").val(),yzm:$("#randCode").val()},$.ajax({url:e.subNoUrl,type:"post",data:t,success:function(t){if(!t)return!1;var e=JSON.parse(t);console.log(e),1==e.result.code?$.browser.ios?$(document.body).append('<iframe src="ios/pageClose/click" style="display:none"></iframe>'):$.browser.android&&window.appInterface.pageClose&&window.appInterface.pageClose():o.alert(e.result.message)},error:function(){o.alert("请求失败,请检测您的网络!")}})}},i.exports=(new a).init()}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,n){"use strict";var i=function(t){$("#maskWin,.layerWap").remove();var e=$.extend({title:"",className:"",content:"",width:"",height:"auto",zIndex:10001,isBg:!0,isTitle:!0,isClose:!0,autoClose:!1,autoCloseTime:500,opacity:.3,confirmBtn:!1,repealBtn:!1,confirmTip:"确定",repealTip:"取消",onClose:function(){},confirmCallBack:function(){},repealCallBack:function(){}},t||{}),n=function(){var t=e,n="",s=$("<div class='"+t.className+"'>"),c=!1;s.css({width:t.width,height:t.height,zIndex:t.zIndex}),$("body").append(s),t.isTitle&&(n+="<h2>"+t.title+"</h2>"),n+="<div class='layerCon'>"+t.content+"</div>",n+="<div class='layerBtn' id='diaBtn'></div>",s.html(n),t.confirmBtn&&$("#diaBtn").append("<input type='button' class='h' id='conBtn' value='"+t.confirmTip+"'>"),t.repealBtn&&$("#diaBtn").append("<input type='button' id='repBtn' value='"+t.repealTip+"'>"),t.isBg&&a(),$("#conBtn").click(function(e){return t.confirmCallBack&&(c=t.confirmCallBack())?!1:void r()}),$("#repBtn").click(function(e){return t.repealCallBack&&(c=t.repealCallBack())?!1:(r(),void e.stopPropagation())}),$(".close").click(function(t){r(),t.stopPropagation()}),o(s),$(window).resize(function(t){o(s),window.removeEventListener("touchmove",i,!1)}),window.addEventListener("touchmove",i,!1),t.autoClose&&setTimeout(function(){r()},t.autoCloseTime)},i=function(t){var t=event||t;return t&&t.preventDefault||(window.event.returnValue=!1),!1},o=function(t){var e=t.width()/2,n=(t.height()/2,$(window).scrollTop());t.css({position:"absolute",top:($(window).height()-t.height())/2+n+"px",left:"50%","margin-left":"-"+e+"px","z-index":"9999"}).fadeIn()},a=function(){var t={position:"fixed",zIndex:"9000",top:"0px",left:"0px",height:"100%",width:"100%",backgroundColor:"#000",filter:"alpha(opacity=40)",opacity:.4},e=$('<div id="maskWin" class="daskbg" />');$("body").append(e.css(t)),$("#Overlay").animate({backgroundColor:t.backgroundColor,opacity:t.opacity},0)},r=function(){var t=$(".layerWap"),e=!1;return $("#maskWin").remove(),t.remove(),e=!0,window.removeEventListener("touchmove",i,!1),e};return n(),{closeDialog:r,options:e}};n.exports=i}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,i){"use strict";var o=n(1),a={queryUrl:function(t){var e={},n=location.href.replace(/^[^?=]*\?/gi,"").split("#")[0];return n.replace(/(^|&)([^&=]+)=([^&]*)/g,function(t,n,i,o){try{i=decodeURIComponent(i)}catch(a){}try{o=decodeURIComponent(o)}catch(a){}i in e?e[i]instanceof Array?e[i].push(o):e[i]=[e[i],o]:e[i]=/\[\]$/.test(i)?[o]:o}),t?e[t]:e},fadeAlert:function(t){var e='<div class="alert psa clearfix" style="display:none;"><span class="alertOk dsb"></span><span class="scTxt dsb alertMsg">'+t+"</span></div>";$(document.body).append(e),$(".alert").fadeIn(3e3,function(){var t=this;setTimeout(function(){$(t).remove()},1e3)})},confirm:function(t,e,n){o({className:"layerWap layerB",content:"<p class='alignCenter'>"+t+"</p>",confirmBtn:!0,repealBtn:!0,repealTip:"确定",confirmTip:"取消",confirmCallBack:n||function(t){$(t).fadeOut()},repealCallBack:e})},alert:function(t,e){o({className:"layerWap layerA",content:"<p class='alignCenter'>"+t+"</p>",confirmBtn:!0,confirmTip:"确定",confirmCallBack:e})},imgAuto:function(t){var e=this;e.opts=$.extend({},t),e.imgList=$(e.opts.cls).find(e.opts.type),e._width=window.innerWidth;for(var n=0,i=e.imgList.length;i>n;n++){e.createImage(e.imgList[n],e._width);try{ISIS&&ISIS.refresh()}catch(o){}}},createImage:function(t,e){var n=$(t).attr("data-w");(t.width>30&&t.height>30||n>100)&&(console.log("w:"+t.width+"----h:"+t.height+"----s:"+e),(t.width>e/2||n)&&(t.onload=function(t){var e=$(t),n=e.attr("data-src")||e.attr("src");e.attr({style:"margin:0 auto;display:block;width:100%",src:n})}(t,e)))},videoAuto:function(t){var e=this,n=$(t.cls);if(!n.length)return!1;for(var i=0,o=n.length;o>i;i++){var a=$(n[i]),r=a.attr("src")||a.attr("original"),s=a.offset().left,c=r.split("&");a.hide(),e.width=window.innerWidth-2*s,e.heigth=e.width/1.3,r=c[0]+"&width="+e.width+"&height="+e.heigth+"&auto=0",a.attr({src:"",width:e.width,heigth:e.heigth}).hide();var l='<video  controls="controls"  name="media"><source src="'+c[0]+'" type="video/mp4"></video>';a.after(l);try{ISIS&&ISIS.refresh()}catch(d){}}},eventIOS_Android:function(t,e){$.browser.ios?t.call(this):$.browser.android&&e.call(this)}};i.exports=a}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))}]);