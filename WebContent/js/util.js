(function(){function windowHelper(){this.tapTimeLimit=500;}
Array.prototype.each=function(aa,ba,ca){ba=ba||0;ca=ca||this.length-1;for(var i=ba;i<=ca;i++){aa(this[i],this,i);if(this.breakLoop){this.breakLoop=false;break;}}};windowHelper.prototype={preventDefaultEvent:function(ev){if(ev.preventDefault)ev.preventDefault();else ev.returnValue=false;},isTouchDevice:function(){return!!('ontouchstart' in window);},toMoney:function(da){var ea;if(da/10000<1){ea=2;}
else if(da/100000<1){ea=1;}
else{ea=0;}
var fa=(Math.round(da*Math.pow(10,ea))/Math.pow(10,ea)).toFixed(ea);return fa;},bigNumberToText:function(ga){var ha;var yi=ga/100000000;if(yi>1){ha=yi.toFixed(2)+'亿';}
else{var ia=ga/10000;if(ia>1)ha=ia.toFixed(2)+'万';else ha=ga;}
return ha;},getOffset:function(e){if(!isNaN(e.offsetX)&&!isNaN(e.offsetY))return e;var ja=e.target;if(ja.offsetLeft==undefined){ja=ja.parentNode;}
var ka=getPageCoord(ja);var la={x:window.pageXOffset+e.clientX,y:window.pageYOffset+e.clientY};var ma={offsetX:la.x-ka.x,offsetY:la.y-ka.y};return ma;},getPageCoord:function(na){var oa={x:0,y:0};while(na){oa.x+=na.offsetLeft;oa.y+=na.offsetTop;na=na.offsetParent;}
return oa;},addLoadEvent:function(f){var pa=window.onload;if(typeof pa!='function')window.onload=f;else{window.onload=function(){pa();f();};}},addEvent:function(qa,ra,fn,sa){if(qa.addEventListener){qa.addEventListener(ra,fn,sa);return true;}
else if(qa.attachEvent){var r=qa.attachEvent('on'+ra,fn);return r;}
else{qa['on'+ra]=fn;}},removeEvent:function(ta,ua,fn,va){if(ta.removeEventListener){ta.removeEventListener(ua,fn,va);return true;}
else if(ta.detachEvent){var r=ta.detachEvent("on"+ua,fn);return r;}
else{ta["on"+ua]=null;}},getEventTarget:function(e){return e.srcElement||e.target||e.relatedTarget;},$id:function(id){return document.getElementById(id);}};window.extendObject=function(wa,xa){for(var f in wa){xa[f]=wa[f];}};window.extendWindow=function(ya){extendObject(ya,window);};var wh=new windowHelper();extendWindow(wh);window.getQueryParam=function(za,Aa){var Ba=new RegExp('[\?&]'+za+'=([^&]+)','i');var Ca=Ba.exec(Aa?window.top.location.search:location.search);if(Ca&&Ca.length>1)return decodeURIComponent(Ca[1]);else return '';};window.debug=getQueryParam('debug');window.setDebugMsg=function(Da){if(window.debug){try{var Ea='debug';var o=$id(Ea);if(!o){o=document.createElement('DIV');o.id=Ea;document.body.appendChild(o);}
o.innerHTML=(window.debug==2?(Da+'<br/>'+o.innerHTML):Da);}
catch(err){alert(Da+';error:'+err);}}};})();