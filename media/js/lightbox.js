(function(b){b.fn.lightBox=function(a){function h(){b("#lightbox-loading").show();a.fixedNavigation?b("#lightbox-image,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide():b("#lightbox-image,#lightbox-nav,#lightbox-nav-btnPrev,#lightbox-nav-btnNext,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide();var c=new Image;c.onload=function(){b("#lightbox-image").attr("src",a.imageArray[a.activeImage][0]);var e=c.width,d=c.height,f=b("#lightbox-container-image-box").width(),
g=b("#lightbox-container-image-box").height();e>b(window).width()-50&&(d=d/e*(b(window).width()-50),e=b(window).width()-50);d>b(window).height()-250&&(e=e/d*(b(window).height()-250),d=b(window).height()-250);b("#lightbox-image").css({width:e});var i=e+2*a.containerBorderSize,j=d+2*a.containerBorderSize,f=f-i,g=g-j;b("#lightbox-container-image-box").animate({width:i,height:j},a.containerResizeSpeed,function(){b("#lightbox-loading").hide();b("#lightbox-image").fadeIn(function(){b("#lightbox-container-image-data-box").slideDown("fast");
b("#lightbox-image-details-caption").hide();a.imageArray[a.activeImage][1]&&b("#lightbox-image-details-caption").html(a.imageArray[a.activeImage][1]).show();1<a.imageArray.length&&b("#lightbox-image-details-currentNumber").html(a.txtImage+" "+(a.activeImage+1)+" "+a.txtOf+" "+a.imageArray.length).show();b("#lightbox-nav").show();b("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({background:"transparent url("+a.imageBlank+") no-repeat"});0!=a.activeImage&&(a.fixedNavigation?b("#lightbox-nav-btnPrev").css({background:"url("+
a.imageBtnPrev+") left 15% no-repeat"}).unbind().bind("click",function(){a.activeImage-=1;h();return!1}):b("#lightbox-nav-btnPrev").unbind().hover(function(){b(this).css({background:"url("+a.imageBtnPrev+") left 15% no-repeat"})},function(){b(this).css({background:"transparent url("+a.imageBlank+") no-repeat"})}).show().bind("click",function(){a.activeImage-=1;h();return!1}));a.activeImage!=a.imageArray.length-1&&(a.fixedNavigation?b("#lightbox-nav-btnNext").css({background:"url("+a.imageBtnNext+
") right 15% no-repeat"}).unbind().bind("click",function(){a.activeImage+=1;h();return!1}):b("#lightbox-nav-btnNext").unbind().hover(function(){b(this).css({background:"url("+a.imageBtnNext+") right 15% no-repeat"})},function(){b(this).css({background:"transparent url("+a.imageBlank+") no-repeat"})}).show().bind("click",function(){a.activeImage+=1;h();return!1}));b(document).keydown(function(c){null==c?(keycode=event.keyCode,escapeKey=27):(keycode=c.keyCode,escapeKey=c.DOM_VK_ESCAPE);key=String.fromCharCode(keycode).toLowerCase();
(key==a.keyToClose||"x"==key||keycode==escapeKey)&&k();if((key==a.keyToPrev||37==keycode)&&0!=a.activeImage)a.activeImage-=1,h(),b(document).unbind();if((key==a.keyToNext||39==keycode)&&a.activeImage!=a.imageArray.length-1)a.activeImage+=1,h(),b(document).unbind()})});a.imageArray.length-1>a.activeImage&&(objNext=new Image,objNext.src=a.imageArray[a.activeImage+1][0]);0<a.activeImage&&(objPrev=new Image,objPrev.src=a.imageArray[a.activeImage-1][0])});0==f&&0==g&&(b.browser.msie?l(250):l(100));b("#lightbox-container-image-data-box").css({width:e});
b("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({height:d+2*a.containerBorderSize});c.onload=function(){}};c.src=a.imageArray[a.activeImage][0]}function k(){b("#jquery-lightbox").remove();b("#jquery-overlay").fadeOut(function(){b("#jquery-overlay").remove()});b("embed, object, select").css({visibility:"visible"})}function i(){var a,b;window.innerHeight&&window.scrollMaxY?(a=window.innerWidth+window.scrollMaxX,b=window.innerHeight+window.scrollMaxY):document.body.scrollHeight>document.body.offsetHeight?
(a=document.body.scrollWidth,b=document.body.scrollHeight):(a=document.body.offsetWidth,b=document.body.offsetHeight);var d,f;self.innerHeight?(d=document.documentElement.clientWidth?document.documentElement.clientWidth:self.innerWidth,f=self.innerHeight):document.documentElement&&document.documentElement.clientHeight?(d=document.documentElement.clientWidth,f=document.documentElement.clientHeight):document.body&&(d=document.body.clientWidth,f=document.body.clientHeight);pageHeight=b<f?f:b;pageWidth=
a<d?a:d;return arrayPageSize=[pageWidth,pageHeight,d,f]}function j(){var a,b;self.pageYOffset?(b=self.pageYOffset,a=self.pageXOffset):document.documentElement&&document.documentElement.scrollTop?(b=document.documentElement.scrollTop,a=document.documentElement.scrollLeft):document.body&&(b=document.body.scrollTop,a=document.body.scrollLeft);return arrayPageScroll=[a,b]}function l(a){var b=new Date;do var d=new Date;while(d-b<a)}var a=jQuery.extend({overlayBgColor:"#000",overlayOpacity:0.8,fixedNavigation:!1,
imageLoading:"/images/lightbox-ico-loading.gif",imageBtnPrev:"/images/lightbox-btn-prev.gif",imageBtnNext:"/images/lightbox-btn-next.gif",imageBtnClose:"/images/lightbox-btn-close.gif",imageBlank:"/images/lightbox-blank.gif",containerBorderSize:10,containerResizeSpeed:400,txtImage:"Фото",
txtOf:"из",keyToClose:"c",keyToPrev:"p",keyToNext:"n",imageArray:[],activeImage:0},a),g=this;return this.unbind("click").click(function(){b("embed, object, select").css({visibility:"hidden"});b("body").append('<div id="jquery-overlay"></div><div id="jquery-lightbox"><div id="lightbox-container-image-box"><div id="lightbox-container-image"><img id="lightbox-image"><div style="" id="lightbox-nav"><a href="#" id="lightbox-nav-btnPrev"></a><a href="#" id="lightbox-nav-btnNext"></a></div><div id="lightbox-loading"><a href="#" id="lightbox-loading-link"><img src="'+
a.imageLoading+'"></a></div></div></div><div id="lightbox-container-image-data-box"><div id="lightbox-container-image-data"><div id="lightbox-image-details"><span id="lightbox-image-details-caption"></span><span id="lightbox-image-details-currentNumber"></span></div><div id="lightbox-secNav"><a href="#" id="lightbox-secNav-btnClose"><img src="'+a.imageBtnClose+'"></a></div></div></div></div>');var c=i();b("#jquery-overlay").css({backgroundColor:a.overlayBgColor,opacity:a.overlayOpacity,width:c[0],
height:c[1]}).fadeIn();var e=j();b("#jquery-lightbox").css({top:e[1]+c[3]/10,left:e[0]}).show();b("#jquery-overlay,#jquery-lightbox").click(function(){k()});b("#lightbox-loading-link,#lightbox-secNav-btnClose").click(function(){k();return!1});b(window).resize(function(){var a=i();b("#jquery-overlay").css({width:a[0],height:a[1]});var c=j();b("#jquery-lightbox").css({top:c[1]+a[3]/10,left:c[0]})});a.imageArray.length=0;a.activeImage=0;if(1==g.length)a.imageArray.push([this.getAttribute("href"),this.getAttribute("title")]);
else for(c=0;c<g.length;c++)a.imageArray.push([g[c].getAttribute("href"),g[c].getAttribute("title")]);for(;a.imageArray[a.activeImage][0]!=this.getAttribute("href");)a.activeImage++;h();return!1})}})(jQuery);