function t142_checkSize(recid){var el=$("#rec"+recid).find(".t142__submit");if(el.length){var btnheight=el.height()+5;var textheight=el[0].scrollHeight;if(btnheight<textheight){var btntext=el.text();el.addClass("t142__submit-overflowed");el.html("<span class=\"t142__text\">"+btntext+"</span>")}}}
function t213_init(recid){var el=$("#t213-marker"+recid);var cotimer;var wnd=$(window);var bdy=$('body');var needcolor=el.attr("data-bg-color");bdy.css("transition","background-color 1000ms linear");if(window.t213higher===undefined)window.t213higher=1000000;if(window.t213higher>el.offset().top){window.t213higher=el.offset().top;window.t213higher_id=recid}
var bodydefcolor=bdy.css("background-color");var timer_count=0;wnd.scroll(function(){if(cotimer){window.clearTimeout(cotimer);if(timer_count>=15){t212_timer_do(el,wnd,bdy,needcolor,bodydefcolor,recid)}
timer_count++}
cotimer=window.setTimeout(function(){t212_timer_do(el,wnd,bdy,needcolor,bodydefcolor,recid);timer_count=0},100)});wnd.scroll()}
function t212_timer_do(el,wnd,bdy,needcolor,bodydefcolor,recid){var a,c,d,bc;a=el.offset().top;c=wnd.scrollTop();d=wnd.height();bc=bdy.attr("data-bg-color");if((c+d)>=a){bdy.css("background-color",needcolor)}else{if(window.t213higher_id==recid){bdy.css("background-color",bodydefcolor)}}}
window.t256showvideo=function(recid){$(document).ready(function(){var el=$('#coverCarry'+recid);var videourl='';var youtubeid=$("#rec"+recid+" .t256__video-container").attr('data-content-popup-video-url-youtube');if(youtubeid>''){videourl='https://www.youtube.com/embed/'+youtubeid}
$("body").addClass("t256__overflow");$("#rec"+recid+" .t256__cover").addClass("t256__hidden");$("#rec"+recid+" .t256__video-container").removeClass("t256__hidden");$("#rec"+recid+" .t256__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t256__iframe\" width=\"100%\" height=\"540\" src=\""+videourl+"?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe><a class=\"t256__close-link\" href=\"javascript:t256hidevideo('"+recid+"');\"><div class=\"t256__close\"></div></a>")})}
window.t256hidevideo=function(recid){$(document).ready(function(){$("body").removeClass("t256__overflow");$("#rec"+recid+" .t256__cover").removeClass("t256__hidden");$("#rec"+recid+" .t256__video-container").addClass("t256__hidden");$("#rec"+recid+" .t256__video-carier").html("<div class=\"t256__video-bg2\"></div>")})}
function t262_appendGoogleMap(recid,key){var grecid=recid;if(typeof google==='object'&&typeof google.maps==='object'){t262_handleGoogleApiReady(grecid)}else{if(window.googleapiiscalled!==!0){var runfunc='window.t262_handleGoogleApiReady_'+grecid+' = function () { t262_handleGoogleApiReady("'+grecid+'") }';eval(runfunc);var script=document.createElement("script");script.type="text/javascript";script.src="//maps.google.com/maps/api/js?key="+jQuery.trim(key)+"&callback=t262_handleGoogleApiReady_"+grecid;document.body.appendChild(script);window.googleapiiscalled=!0}else{setTimeout(function(){t262_appendGoogleMap(grecid,key)},200)}}}
function t262_setMapHeight(recid){var el=$('#rec'+recid);var map=el.find('.t262__map');var textwrapper=el.find('.t262__col_text').height();map.css('height',textwrapper)}
function t262_handleGoogleApiReady(recid){$('#rec'+recid).find('.t262__map').each(function(index,Element){var el=$(Element);var arMarkers=window['arMapMarkers'+recid];window.isDragMap=$isMobile?!1:!0;var myLatLng=arMarkers.length>0?new google.maps.LatLng(parseFloat(arMarkers[0].lat),parseFloat(arMarkers[0].lng)):!1;var myOptions={zoom:parseInt(el.attr('data-map-zoom')),center:myLatLng,scrollwheel:!1,draggable:window.isDragMap,zoomControl:!0};var map=new google.maps.Map(Element,myOptions);var i,mrk,marker,markers=[],infowindow;var bounds=new google.maps.LatLngBounds();for(i in arMarkers){mrk=arMarkers[i];myLatLng=new google.maps.LatLng(parseFloat(mrk.lat),parseFloat(mrk.lng));marker=new google.maps.Marker({position:myLatLng,map:map,title:mrk.title});bounds.extend(myLatLng);if(mrk.descr>''){attachInfoMessage(marker,mrk.descr)}else{attachInfoMessage(marker,mrk.title)}
markers[markers.length]=marker;infowindow='';marker=''}
function attachInfoMessage(marker,descr){var infowindow=new google.maps.InfoWindow({content:$("<textarea/>").html(descr).text()});marker.addListener('click',function(){infowindow.open(marker.get('map'),marker)})}
if(arMarkers.length>1){map.fitBounds(bounds);if(map.getZoom()>parseInt(el.attr('data-map-zoom'))){map.setZoom(parseInt(el.attr('data-map-zoom')))}}
google.maps.event.addDomListener(window,"resize",function(){var center=map.getCenter();google.maps.event.trigger(map,"resize");map.setCenter(center)});if($isMobile){google.maps.event.addDomListener(window,"dblclick",function(){if(window.isDragMap){window.isDragMap=!1}else{window.isDragMap=!0}
map.setOptions({draggable:window.isDragMap})})}})}
function t262_appendYandexMap(recid,key){var yarecid=recid;if(typeof ymaps==='object'&&typeof ymaps.Map==='function'){t262_handleYandexApiReady(recid)}else{if(window.yandexmapsapiiscalled!==!0){var runfunc='window.t262_handleYandexApiReady_'+yarecid+' = function () { return t262_handleYandexApiReady("'+yarecid+'") }';eval(runfunc);var script=document.createElement("script");script.type="text/javascript";script.src="https://api-maps.yandex.ru/2.1/?lang=ru-RU&coordorder=latlong&onload=t262_handleYandexApiReady_"+yarecid;if(key>''){script.src=script.src+'&apikey='+key}
document.body.appendChild(script);window.yandexmapsapiiscalled=!0}else{setTimeout(function(){t262_appendYandexMap(yarecid,key)},200)}}}
function t262_handleYandexApiReady(recid){$('#rec'+recid).find('.t262__map').each(function(index,Element){var el=$(Element);var arMarkers=window['arMapMarkers'+recid];window.isDragMap=$isMobile?!1:!0;if(el.attr('data-map-style')!=''){var mapstyle=eval(el.attr('data-map-style'))}else{var mapstyle='[]'}
var myLatlng=arMarkers.length>0?[parseFloat(arMarkers[0].lat),parseFloat(arMarkers[0].lng)]:!1;var myStates={zoom:parseInt(el.attr('data-map-zoom')),center:myLatlng,scrollZoom:!1,controls:['typeSelector','zoomControl'],drag:window.isDragMap};var map=new ymaps.Map(Element,myStates),i,mrk,marker;var myGroup=new ymaps.GeoObjectCollection({});map.behaviors.disable('scrollZoom');for(i in arMarkers){mrk=arMarkers[i];myLatlng=[parseFloat(mrk.lat),parseFloat(mrk.lng)];myGroup.add(new ymaps.Placemark(myLatlng,{hintContent:mrk.title,balloonContent:mrk.descr>''?$("<textarea/>").html(mrk.descr).text():mrk.title}))}
map.geoObjects.add(myGroup);if(arMarkers.length>1){map.setBounds(myGroup.getBounds(),{checkZoomRange:!0})}
$(window).resize(function(){map.container.fitToViewport()});if($isMobile){$(window).dblclick(function(){if(window.isDragMap){window.isDragMap=!1}else{window.isDragMap=!0}
if(window.isDragMap){map.behaviors.enable('drag')}else{map.behaviors.disable('drag')}})}})}
function t186C_init(recid){var t186C_el=$('#rec'+recid),t186C_btn=t186C_el.find('.t-submit');t186C_btn.click(function(){setTimeout(function(){t186C_checkSuccess(t186C_el)},100);setTimeout(function(){t186C_checkSuccess(t186C_el)},300);setTimeout(function(){t186C_checkSuccess(t186C_el)},700);setTimeout(function(){t186C_checkSuccess(t186C_el)},1500)})}
function t186C_checkSuccess(t186C_el){var t186C_formWrapper=t186C_el.find('.t186C__wrapper');if(t186C_el.find('.js-form-proccess').hasClass('js-send-form-success')&&!t186C_formWrapper.hasClass('t186C__hiding')){t186C_formWrapper.addClass('t186C__hiding');var t186C_root=$('html, body'),t186C_targetOffset=t186C_el.find('.t186C__blockinput-success').offset().top;if($(window).width()>960){var t186C_target=t186C_targetOffset-200}else{var t186C_target=t186C_targetOffset-100}
if(t186C_targetOffset>$(window).scrollTop()){t186C_formWrapper.addClass('t186C__wrapper_hidden')}else{t186C_root.animate({scrollTop:t186C_target},400);setTimeout(function(){t186C_formWrapper.addClass('t186C__wrapper_hidden')},400)}}}
function t330_showPopup(recid){var el=$('#rec'+recid),popup=el.find('.t-popup');popup.css('display','block');setTimeout(function(){popup.find('.t-popup__container').addClass('t-popup__container-animated');popup.addClass('t-popup_show')},50);$('body').addClass('t-body_popupshowed t330__body_popupshowed');el.find('.t-popup').click(function(e){if(e.target==this){t330_closePopup()}});el.find('.t-popup__close').click(function(e){t330_closePopup()});el.find('a[href*=#]').click(function(e){var url=$(this).attr('href');if(!url||url.substring(0,7)!='#price:'){t330_closePopup();if(!url||url.substring(0,7)=='#popup:'){setTimeout(function(){$('body').addClass('t-body_popupshowed')},300)}}});$(document).keydown(function(e){if(e.keyCode==27){t330_closePopup()}})}
function t330_closePopup(){$('body').removeClass('t-body_popupshowed t330__body_popupshowed');$('.t-popup').removeClass('t-popup_show');setTimeout(function(){$('.t-popup').not('.t-popup_show').css('display','none')},300)}
function t330_resizePopup(recid){var el=$("#rec"+recid),div=el.find(".t-popup__container").height(),win=$(window).height()-120,popup=el.find(".t-popup__container");if(div>win){popup.addClass('t-popup__container-static')}else{popup.removeClass('t-popup__container-static')}}
function t330_sendPopupEventToStatistics(popupname){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupname.substring(0,7)=='#popup:'){popupname=popupname.substring(7)}
virtPage+=popupname;virtTitle+=popupname;if(window.Tilda&&typeof Tilda.sendEventToStatistics=='function'){Tilda.sendEventToStatistics(virtPage,virtTitle,'',0)}else{if(ga){if(window.mainTracker!='tilda'){ga('send',{'hitType':'pageview','page':virtPage,'title':virtTitle})}}
if(window.mainMetrika>''&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}}
function t330_initPopup(recid){$('#rec'+recid).attr('data-animationappear','off');$('#rec'+recid).css('opacity','1');var el=$('#rec'+recid).find('.t-popup'),hook=el.attr('data-tooltip-hook'),analitics=el.attr('data-track-popup');if(hook!==''){var obj=$('a[href="'+hook+'"]');obj.click(function(e){t330_showPopup(recid);t330_resizePopup(recid);e.preventDefault();if(window.lazy=='y'){t_lazyload_update()}
if(analitics=='yes'){t330_sendPopupEventToStatistics(hook)}})}}
function t331_setHeight(recid){var el=$("#rec"+recid);var div=el.find(".t331__video-carier");var ratiowidth=div.attr("data-video-width");var ratioheight=div.attr("data-video-height");var ratio=ratioheight/ratiowidth;var height=div.width()*ratio;div.height(height);div.parent().height(height)}
function t331_initPopup(recid){$('#rec'+recid).attr('data-animationappear','off');$('#rec'+recid).css('opacity','1');var el=$('#rec'+recid).find('.t-popup'),hook=el.attr('data-tooltip-hook'),analitics=el.attr('data-track-popup');if(hook!==''){var obj=$('a[href="'+hook+'"]');obj.click(function(e){t331_showPopup(recid);t331_resizePopup(recid);e.preventDefault();if(analitics=='yes'){t331_sendPopupEventToStatistics(hook)}})}}
function t331_showPopup(recid){var el=$('#rec'+recid),popup=el.find('.t-popup');var youtubeid=el.find(".t331__youtube").attr('data-content-popup-video-url-youtube');var videourl='https://www.youtube.com/embed/'+youtubeid;el.find(".t331__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t331__iframe\" width=\"100%\" height=\"100%\" src=\""+videourl+"?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>");popup.css('display','block');t331_setHeight(recid);setTimeout(function(){popup.find('.t-popup__container').addClass('t-popup__container-animated');popup.addClass('t-popup_show')},50);$('body').addClass('t-body_popupshowed');el.find('.t-popup').click(function(e){if(e.target==this){t331_popup_close(recid)}});el.find('.t-popup__close').click(function(e){t331_popup_close(recid)});$(document).keydown(function(e){if(e.keyCode==27){t331_popup_close(recid)}})}
function t331_popup_close(recid){$('body').removeClass('t-body_popupshowed');$('.t-popup').removeClass('t-popup_show');setTimeout(function(){$("#rec"+recid+" .t331__video-carier").html("");$('.t-popup').not('.t-popup_show').css('display','none')},300)}
function t331_resizePopup(recid){var el=$("#rec"+recid),div=el.find(".t-popup__container").height(),win=$(window).height(),popup=el.find(".t-popup__container");if(div>win){popup.addClass('t-popup__container-static')}else{popup.removeClass('t-popup__container-static')}}
function t331_sendPopupEventToStatistics(popupname){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupname.substring(0,7)=='#popup:'){popupname=popupname.substring(7)}
virtPage+=popupname;virtTitle+=popupname;if(ga){if(window.mainTracker!='tilda'){ga('send',{'hitType':'pageview','page':virtPage,'title':virtTitle})}}
if(window.mainMetrika>''&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}
var t334={};t334.initeffect=function(recid){if($('#rec'+recid).find('.t-container').attr('data-show-button')=="true"){$('#rec'+recid).find(".t334__cell").each(function(){var sizer=$(this).find(".t334__button-container").height();$(this).find(".t334__textwrapper__content").css({'padding-bottom':(sizer+'px')});$(this).find(".t334__button-container").addClass("t334__button-container_show")})}else{$('#rec'+recid).find(".t334__cell").hover(function(){var sizer=$(this).find(".t334__button-container").height();$(this).find(".t334__textwrapper__content").css({'padding-bottom':(sizer+'px')});$(this).find(".t334__button-container").addClass("t334__button-container_show")},function(){$(this).find(".t334__textwrapper__content").css("padding-bottom","0");$(this).find(".t334__button-container").removeClass("t334__button-container_show")})}};var t335={};t335.initeffect=function(recid){$('#rec'+recid).find(".t335__cell").hover(function(){var sizer=$(this).find(".t335__button-container").height();$(this).find(".t335__textwrapper__content").css({'padding-bottom':(sizer+'px')});$(this).find(".t335__button-container").addClass("t335__button-container_show")},function(){$(this).find(".t335__textwrapper__content").css("padding-bottom","0");$(this).find(".t335__button-container").removeClass("t335__button-container_show")})};function t358_setHeight(recid){var el=$('#rec'+recid);var div=el.find(".t358__video-carier");var height=div.width()*0.5625;div.height(height);div.parent().height(height)}
function t358_initPopup(recid){$('#rec'+recid).attr('data-animationappear','off');$('#rec'+recid).css('opacity','1');var el=$('#rec'+recid).find('.t-popup'),hook=el.attr('data-tooltip-hook'),analitics=el.attr('data-track-popup');if(hook!==''){var obj=$('a[href="'+hook+'"]');obj.click(function(e){t358_showPopup(recid);t358_resizePopup(recid);e.preventDefault();if(analitics=='yes'){t358_sendPopupEventToStatistics(hook)}})}}
function t358_showPopup(recid){var el=$('#rec'+recid),popup=el.find('.t-popup');var vimeoid=$("#rec"+recid+" .t358__vimeo").attr('data-content-popup-video-url-vimeo');var videourl='//player.vimeo.com/video/'+vimeoid;$("#rec"+recid+" .t358__video-carier").html("<iframe id=\"vimeoiframe"+recid+"\" class=\"t358__iframe\" width=\"100%\" height=\"100%\" src=\""+videourl+"?title=0&byline=0&portrait=0&badge=0&color=ffffff&autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");popup.css('display','block');t358_setHeight(recid);setTimeout(function(){popup.find('.t-popup__container').addClass('t-popup__container-animated');popup.addClass('t-popup_show')},50);$('body').addClass('t-body_popupshowed');el.find('.t-popup').click(function(e){if(e.target==this){t358_popup_close(recid)}});el.find('.t-popup__close').click(function(e){t358_popup_close(recid)});$(document).keydown(function(e){if(e.keyCode==27){t358_popup_close(recid)}})}
function t358_popup_close(recid){$('body').removeClass('t-body_popupshowed');$('.t-popup').removeClass('t-popup_show');setTimeout(function(){$("#rec"+recid+" .t358__video-carier").html("");$('.t-popup').not('.t-popup_show').css('display','none')},300)}
function t358_resizePopup(recid){var el=$("#rec"+recid),div=el.find(".t-popup__container").height(),win=$(window).height(),popup=el.find(".t-popup__container");if(div>win){popup.addClass('t-popup__container-static')}else{popup.removeClass('t-popup__container-static')}}
function t358_sendPopupEventToStatistics(popupname){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupname.substring(0,7)=='#popup:'){popupname=popupname.substring(7)}
virtPage+=popupname;virtTitle+=popupname;if(ga){if(window.mainTracker!='tilda'){ga('send',{'hitType':'pageview','page':virtPage,'title':virtTitle})}}
if(window.mainMetrika>''&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}
function t410_init(recid){var el=$('#rec'+recid);var firstimgurl=el.find(".t410__wrapper").attr("data-juxtapose-imgurl-first");var firstimgdescr=el.find(".t410__wrapper").attr("data-juxtapose-imgdescr-first");var secondimgurl=el.find(".t410__wrapper").attr("data-juxtapose-imgurl-second");var secondimgdescr=el.find(".t410__wrapper").attr("data-juxtapose-imgdescr-second");new juxtapose.JXSlider('#t410-juxtapose__'+recid+'',[{src:firstimgurl,label:firstimgdescr},{src:secondimgurl,label:secondimgdescr}],{animate:!1,showLabels:!0,showCredits:!1,startingPosition:'50%',makeResponsive:!0})}
function t410_update(recid){var el=$('#rec'+recid)}
function t412_unifyHeights(recid){var el=$("#rec"+recid);el.find('.t412__descr').css('height',"auto");$('#rec'+recid+' .t412 .t-container').each(function(){var highestBox2=0;$('.t412__descr',this).each(function(){if($(this).height()>highestBox2)highestBox2=$(this).height()});if($(window).width()>=960&&$(this).is(':visible')){$('.t412__descr',this).css('height',highestBox2)}else{$('.t412__descr',this).css('height',"auto")}});el.find('.t412__title').css('height',"auto");$('#rec'+recid+' .t412 .t-container').each(function(){var highestBox3=0;$('.t412__title',this).each(function(){if($(this).height()>highestBox3)highestBox3=$(this).height()});if($(window).width()>=960&&$(this).is(':visible')){$('.t412__title',this).css('height',highestBox3)}else{$('.t412__title',this).css('height',"auto")}});el.find('.t412__wrapper').css('height',"auto");$('#rec'+recid+' .t412 .t-container').each(function(){var highestBox=0;$('.t412__wrapper',this).each(function(){if($(this).height()>highestBox)highestBox=$(this).height()});if($(window).width()>=960&&$(this).is(':visible')){$('.t412__wrapper',this).css('height',highestBox)}else{$('.t412__wrapper',this).css('height',"auto")}})}
t427_alignMiddle=function(recid){if($(window).width()>960){var t427__img=$('#rec'+recid+' .t427__img');var t427__arrow=$('#rec'+recid+' .t427__arrow');t427__arrow.css('top',(t427__img.height()-t427__arrow.height())/2)}};function t428_unifyHeights(recid){$('#rec'+recid+' .t428 .t-container').each(function(){var t428__highestBox=0;$('.t428__col',this).each(function(){var t428__curcol=$(this);var t428__curcolchild=t428__curcol.find('.t428__col-wrapper');if(t428__curcol.height()<t428__curcolchild.height())t428__curcol.height(t428__curcolchild.height());if(t428__curcol.height()>t428__highestBox)t428__highestBox=t428__curcol.height()});if($(window).width()>=960){$('.t428__col',this).css('height',t428__highestBox)}else{$('.t428__col',this).css('height',"auto")}})};function t449_appearMenu(recid){var window_width=$(window).width();if(window_width>980){$(".t449").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");var hideoffset=el.attr("data-hideoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.hasClass('t449__beforeready')){el.finish();el.removeClass("t449__beforeready")}}else{el.stop();el.addClass("t449__beforeready")}}
if(hideoffset!=""){if(hideoffset.indexOf('vh')>-1){hideoffset=Math.floor((window.innerHeight*(parseInt(hideoffset)/100)))}
hideoffset=parseInt(hideoffset,10);if($(window).scrollTop()+$(window).height()>=$(document).height()-hideoffset){if(!el.hasClass('t449__beforeready')){el.finish();el.addClass("t449__beforeready")}}else{if(appearoffset!=""){if($(window).scrollTop()>=appearoffset){el.stop();el.removeClass("t449__beforeready")}}else{el.stop();el.removeClass("t449__beforeready")}}}})}}
function t498_unifyHeights(recid){$('#rec'+recid+' .t498 .t-container').each(function(){var t498__highestBox=0;$('.t498__col',this).each(function(){var t498__curcol=$(this);var t498__curcolchild=t498__curcol.find('.t498__col-wrapper');if(t498__curcol.height()<t498__curcolchild.height())t498__curcol.height(t498__curcolchild.height());if(t498__curcol.height()>t498__highestBox)t498__highestBox=t498__curcol.height()});if($(window).width()>=960){$('.t498__col',this).css('height',t498__highestBox)}else{$('.t498__col',this).css('height',"auto")}})};function t532__emulateMobileHover(recid){var el=$('#rec'+recid),cell=el.find('.t532__cell');cell.hover(function(){$(this).addClass("t532__cell_hover")},function(){$(this).removeClass("t532__cell_hover")})}
function t532_setHeight(recid){var t532__el=$("#rec"+recid),t532__image=t532__el.find(".t532__bg:first"),t532__wrapper=t532__el.find(".t532__table:first"),t532__width=t532__image.attr("data-image-width"),t532__height=t532__image.attr("data-image-height"),t532__ratio=t532__height/t532__width;$("#rec"+recid+" .t532__table").css("height",t532__wrapper.innerWidth()*t532__ratio)}
function t552_init(recid,ratio){var t552__el=$("#rec"+recid),t552__image=t552__el.find(".t552__blockimg:first");t552__setHeight(recid,t552__image,ratio);var t552__doResize;$(window).resize(function(){clearTimeout(t552__doResize);t552__doResize=setTimeout(function(){t552__setHeight(recid,t552__image,ratio)},200)})}
function t552__setHeight(recid,image,ratio){$("#rec"+recid+" .t552__blockimg").css("height",Math.round(image.innerWidth()*ratio))}
function t599_init(recid){var el=$('#rec'+recid);if(el.find('.t599__title').length){t599_equalHeight(el.find('.t599__title'))}
if(el.find('.t599__descr').length){t599_equalHeight(el.find('.t599__descr'))}
if(el.find('.t599__price').length){t599_equalHeight(el.find('.t599__price'))}
if(el.find('.t599__subtitle').length){t599_equalHeight(el.find('.t599__subtitle'))}};function t599_equalHeight(element){var highestBox=0;element.css('height','');element.each(function(){if($(this).height()>highestBox)highestBox=$(this).height()});if($(window).width()>=960){element.css('height',highestBox)}else{element.css('height','')}}
function t602_init(recid){var t602_lastCall,t602_timeoutId,t602_interval=100;$(window).scroll(function(){var t602_now=new Date().getTime();if(t602_lastCall&&t602_now<(t602_lastCall+t602_interval)){clearTimeout(t602_timeoutId);t602_timeoutId=setTimeout(function(){t602_lastCall=t602_now;t602_setProgressBarWidth(recid)},t602_interval-(t602_now-t602_lastCall))}else{t602_lastCall=t602_now;t602_setProgressBarWidth(recid)}})}
function t602_setProgressBarWidth(recid){var t602_windowScrollTop=$(window).scrollTop(),t602_docHeight=$(document).height(),t602_winHeight=$(window).height();t602_scrollPercent=(t602_windowScrollTop/(t602_docHeight-t602_winHeight))*100;$(".t602__indicator").css('width',t602_scrollPercent+'%')}
function t635_init(recid){t635_startType(recid)}
function t635_startType(recid){var t635_el=$('#rec'+recid),t635_data=t635_el.find(".t635__textholder"),t635_animRecId=t635_data.attr("data-recid"),t635_animText=$("#rec"+t635_animRecId+" div:contains(\'|\')").last(),t635_phrasesList=[],t635_phrase1=t635_data.attr("data-text1"),t635_phrase2=t635_data.attr("data-text2"),t635_phrase3=t635_data.attr("data-text3"),t635_phrase4=t635_data.attr("data-text4"),t635_phrase5=t635_data.attr("data-text5"),t635_speed=t635_data.attr("data-speed"),t635_loop=t635_data.attr("data-loop"),t635_backspaceDelay=t635_data.attr("data-backspacing-delay");if(typeof t635_phrase1!="undefined"){t635_phrasesList.push(t635_phrase1.slice(0,80))}
if(typeof t635_phrase2!="undefined"){t635_phrasesList.push(t635_phrase2.slice(0,80))}
if(typeof t635_phrase3!="undefined"){t635_phrasesList.push(t635_phrase3.slice(0,80))}
if(typeof t635_phrase4!="undefined"){t635_phrasesList.push(t635_phrase4.slice(0,80))}
if(typeof t635_phrase5!="undefined"){t635_phrasesList.push(t635_phrase5.slice(0,80))}
if(t635_animText.length!=0&&t635_phrasesList.length!=0){var t635_animTextHtml=t635_animText.html(),t635_animTextSplitted=t635_animTextHtml.split("|"),t635_curWin=$(window);t635_animText.html(t635_animTextSplitted[0]+"<span class=\"t635__typing-text\"></span>"+t635_animTextSplitted[1]);t635_updateAnimTextLimits(t635_animRecId);t635_curWin.bind('resize',t_throttle(function(){t635_updateAnimTextLimits(t635_animRecId)},200));setInterval(function(){t635_updateAnimTextLimits(t635_animRecId)},5000);var t635_animatedText=$("#rec"+t635_animRecId+" .t635__typing-text"),t635_animTextTop=t635_animatedText.attr("data-top-limit"),t635_animTextBottom=t635_animatedText.attr("data-bottom-limit"),t635_winTop=t635_curWin.scrollTop(),t635_winBottom=t635_winTop+t635_curWin.height();t635_animateText(t635_animRecId,t635_phrasesList,t635_speed,t635_loop,t635_backspaceDelay);if(t635_animTextBottom<t635_winTop||t635_animTextTop>t635_winBottom){$("#rec"+t635_animRecId+" .t635__typing-text").data('typed').pauseTyping();$("#rec"+t635_animRecId+" .t635__typing-text").html("")}
t635_curWin.bind('scroll',t_throttle(function(){t635_animTextTop=t635_animatedText.attr("data-top-limit");t635_animTextBottom=t635_animatedText.attr("data-bottom-limit");t635_winTop=t635_curWin.scrollTop();t635_winBottom=t635_winTop+t635_curWin.height();if(t635_animTextBottom<t635_winTop||t635_animTextTop>t635_winBottom){$("#rec"+t635_animRecId+" .t635__typing-text").data('typed').pauseTyping();$("#rec"+t635_animRecId+" .t635__typing-text").html("")}else{$("#rec"+t635_animRecId+" .t635__typing-text").data('typed').continueTyping()}},200))}}
function t635_updateAnimTextLimits(t635_animRecId){var t635_animatedBlock=$("#rec"+t635_animRecId),t635_animatedText=t635_animatedBlock.find(".t635__typing-text");t635_animatedText.attr("data-top-limit",t635_animatedText.offset().top);t635_animatedText.attr("data-bottom-limit",(t635_animatedBlock.offset().top+t635_animatedBlock.height()))}
function t635_animateText(t635_animRecId,t635_phrasesList,t635_speed,t635_loop,t635_backspaceDelay){if(typeof t635_speed=="undefined"){t635_speed=40}
if(typeof t635_backspaceDelay=="undefined"){t635_backspaceDelay=800}
if(typeof t635_loop=="undefined"){t635_loop=!0}else{t635_loop=!1}
$("#rec"+t635_animRecId+" .t635__typing-text").typed({strings:t635_phrasesList,typeSpeed:t635_speed*1,startDelay:600,backSpeed:10,backDelay:t635_backspaceDelay*1,loop:t635_loop,contentType:'text'})}
function t650_unifyHeights(recid){if($(window).width()>=960){$('#rec'+recid+' .t650 .t-container .t650__row').each(function(){var t650_highestBox=0,t650_currow=$(this);$('.t650__inner-col',this).each(function(){var t650_curCol=$(this),t650_curText=t650_curCol.find(".t650__text"),t650_curBtn=t650_curCol.find(".t650__btn-container"),t650_curColHeight=t650_curText.outerHeight()+t650_curBtn.outerHeight();if(t650_curColHeight>t650_highestBox){t650_highestBox=t650_curColHeight}});$('.t650__inner-col',this).css('height',t650_highestBox)})}else{$('.t650__inner-col').css('height','auto')}}
