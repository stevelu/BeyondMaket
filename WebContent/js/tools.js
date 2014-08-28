function Check_IOS(){var aa=typeof(navigator.platform)=="undefined"?"":navigator.platform.toLowerCase();if(aa=="ipod"||aa=="iphone"||aa=="ipad"||aa=="iphone simulator"||aa=="ipad simulator"){return "IOS";}
return "Andorid";}
function EachObject(ba,ca){for(var n in ba){var m=ba[n];ca(n,m);}}
function inArray(da,ea){for(var i=0;i<ea.length;i++){if(da==ea[i].toString()){return i;}}
return -1;}
function MathRound(fa,ga){var ha=Number(fa);if(isNaN(ha)){return fa;}
var lv=1;for(var i=1;i<=ga;i++){lv=lv*10;}
var ia=Math.round(ha*lv)/lv;return ia.toFixed(ga);}
function YiWanNum(ja){var ka=Number(ja);if(isNaN(ka)){return ja;}
var la;var ma=ka/10000;var yi=ka/100000000;if(ma<1){la=ka;}
else if(yi<1){la=MathRound(ma,1)+'万';}
else{la=MathRound(yi,1)+'亿';}
return la;}
function GetToday(n){var na=new Date();var oa=DatetoInt(na);if(n==0){return oa;}
var pa=InttoDateStr(oa);return pa;}
function DatetoInt(qa){var ra=qa.getFullYear();var sa=qa.getMonth()+1;if(sa<10){sa="0"+sa;}
var ta=qa.getDate();if(ta<10){ta="0"+ta;}
var ua=qa.getHours();if(ua<10){ua="0"+ua;}
var va=qa.getMinutes();if(va<10){va="0"+va;}
var wa=qa.getSeconds();if(wa<10){wa="0"+ua;}
ra=ra.toString();sa=sa.toString();ta=ta.toString();ua=ua.toString();va=va.toString();wa=wa.toString();var xa=parseInt(ra+sa+ta);return xa;}
function InttoDateStr(ya){var za=ya.toString().substring(0,4);var Aa=ya.toString().substring(4,6);var Ba=ya.toString().substring(6);var Ca=za+"/"+Aa+"/"+Ba;return Ca;}
function LocaData(Da,Ea){if(typeof Ea!='undefined'){localStorage.setItem(Da,Ea);}
else{return localStorage.getItem(Da);}}
function ClearLocaData(Fa){localStorage.removeItem(Fa);}
if(typeof JSON!=='object'){JSON={}}(function(){'use strict';function f(n){return n<10?'0'+n:n}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(Ga){escapable.lastIndex=0;return escapable.test(Ga)?'"'+Ga.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+Ga+'"'}
function str(Ha,Ia){var i,k,v,length,mind=gap,partial,value=Ia[Ha];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(Ha)}
if(typeof rep==='function'){value=rep.call(Ia,Ha,value)}
switch(typeof value){case 'string':return quote(value);case 'number':return isFinite(value)?String(value):'null';case 'boolean':case 'null':return String(value);case 'object':if(!value){return 'null'}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}
else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(Ja,Ka,La){var i;gap='';indent='';if(typeof La==='number'){for(i=0;i<La;i+=1){indent+=' '}}
else if(typeof La==='string'){indent=La}
rep=Ka;if(Ka&&typeof Ka!=='function'&&(typeof Ka!=='object'||typeof Ka.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':Ja})}}
if(typeof JSON.parse!=='function'){JSON.parse=function(Ma,Na){var j;function walk(Oa,Pa){var k,v,value=Oa[Pa];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}
else{delete value[k]}}}}
return Na.call(Oa,Pa,value)}
Ma=String(Ma);cx.lastIndex=0;if(cx.test(Ma)){Ma=Ma.replace(cx,function(a){return '\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}
if(/^[\],:{}\s]*$/.test(Ma.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+Ma+')');return typeof Na==='function'?walk({'':j},''):j}
throw new SyntaxError('JSON.parse');}}}());function SendData(Qa,Ra,Sa){var Ta="TQL";if(Sa=="touch")Ta="touch";Ta+="?";Ta+="TransKey="+Qa;Ta+="&Entry="+Ra;Ta+="|"+Sa;return Ta;}
function BackData(Ua){var Va=Ua.indexOf("?")+1;var Wa=Ua.indexOf("|");var Xa=Wa-Va;var Ya=Ua.substr(Va,Xa);var Za=[];Za.push(Ua.substr(0,Va-1));Za.push(ParseParmStr(Ya));Za.push(Ua.substr(Wa+1));return Za;}
function ParseParmStr($a){var ab=new Object();strs=$a.split("&");for(var i=0;i<strs.length;i++){ab[strs[i].split("=")[0]]=strs[i].split("=")[1];}
return ab;}
function GetTxtColor(bb,cb){if(bb=="Volume"){var db=("colorsJson" in window&&colorsJson!=undefined&&colorsJson.Grid_Volume_Color!=undefined)?colorsJson.Grid_Volume_Color:"yellow";return db;}
var eb=("colorsJson" in window&&colorsJson!=undefined&&colorsJson.Grid_Up_Color!=undefined)?colorsJson.Grid_Up_Color:"red";var fb=("colorsJson" in window&&colorsJson!=undefined&&colorsJson.Grid_Down_Color!=undefined)?colorsJson.Grid_Down_Color:"green";var gb=("colorsJson" in window&&colorsJson!=undefined&&colorsJson.Grid_Level_Color!=undefined)?colorsJson.Grid_Level_Color:"";eb=("MobileColors" in window&&MobileColors!=undefined&&MobileColors.TextRise!=undefined)?MobileColors.TextRise:eb;fb=("MobileColors" in window&&MobileColors!=undefined&&MobileColors.TextFall!=undefined)?MobileColors.TextFall:fb;gb=("MobileColors" in window&&MobileColors!=undefined&&MobileColors.TextNormal!=undefined)?MobileColors.TextNormal:gb;var hb=Number(bb);var ib=Number(cb);var jb=hb>ib;var kb=hb<ib;var lb=jb?eb:(kb?fb:gb);return lb;}
function HQListCol(mb,nb,ob){var pb;var qb;if(mb=="DG0"){pb=["NOW","VOL","AMOUNT","LB","OPEN","MAX","MIN","CLOSE","XSFLAG"];qb=[{"Code":"1","Setcode":"0","Name":"1","Now":"1","Gains":"1","Volume":"1","Amount":"1","Lb":"1","Open":"1","Max":"1","Min":"1","Close":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","Gains":"涨幅","Volume":"总量","Amount":"总金额","Lb":"量比","Open":"今开","Max":"最高","Min":"最低","Close":"昨收"}];}
else if(mb=="DG1"){pb=["NOW","VOL","AMOUNT","LB","OPEN","MAX","MIN","CLOSE","SYL","ZGB","ACTIVECAPITAL","ZSZ","MGSY","MGJZC","XSFLAG"];qb=[{"Code":"1","Setcode":"0","Name":"1","Now":"1","Gains":"1","Volume":"1","Amount":"1","Lb":"1","Open":"1","Max":"1","Min":"1","Close":"1","Syl":"1","Zgb":"1","Ltgb":"1","Zsz":"1","Mgsy":"1","Mgjzc":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","Gains":"涨幅","Volume":"总量","Amount":"总金额","Lb":"量比","Open":"今开","Max":"最高","Min":"最低","Close":"昨收","Syl":"市盈率","Zgb":"总股本","Ltgb":"流通股本","Zsz":"总市值","Mgsy":"每股收益","Mgjzc":"每股净资产"}];}
else if(mb=="DG2"){pb=["NOW","VOL","AMOUNT","LB","OPEN","MAX","MIN","CLOSE","XSFLAG"];qb=[{"Code":"1","Setcode":"0","Name":"1","Now":"1","Gains":"1","Volume":"1","Amount":"1","Lb":"1","Open":"1","Max":"1","Min":"1","Close":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","Gains":"涨幅","Volume":"总量","Amount":"总金额","Lb":"量比","Open":"今开","Max":"最高","Min":"最低","Close":"昨收"}];}
else if(mb=="DG3"){pb=["NOW","VOL","AMOUNT","LB","OPEN","MAX","MIN","CLOSE","XSFLAG"];qb=[{"Code":"1","Setcode":"0","Name":"1","Now":"1","Gains":"1","Volume":"1","Amount":"1","Lb":"1","Open":"1","Max":"1","Min":"1","Close":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","Gains":"涨幅","Volume":"总量","Amount":"总金额","Lb":"量比","Open":"今开","Max":"最高","Min":"最低","Close":"昨收"}];}
else if(mb=="DG4"){pb=["NOW","VOL","VolInStock","PreVolInStock","ClearPrice","LB","OPEN","MAX","MIN","CLOSE","XSFLAG"];qb=[{"Code":"1","Setcode":"0","Name":"1","Now":"1","Gains":"1","Volume":"1","Ccl":"1","Cc":"1","Jsj":"1","Lb":"1","Open":"1","Max":"1","Min":"1","Close":"1"},{"Code":"代码","Setcode":"市场类型","Name":"名称","Now":"现价","Gains":"涨幅","Volume":"总量","Ccl":"持仓量","Cc":"仓差","Jsj":"结算价","Lb":"量比","Open":"今开","Max":"最高","Min":"最低","Close":"昨结"}];}
else if(mb=="DG5"){pb=["NOW","LEAD","CLOSE","XSFLAG"];qb=[{"Code":"1","Setcode":"0","Name":"1","Now":"0","Zxjz":"1","Ljjz":"1","Gains":"1","Close":"0"},{"Code":"基金代码","Setcode":"市场类型","Name":"基金名称","Now":"现价","Zxjz":"最新净值","Ljjz":"累计净值","Gains":"涨幅","Close":"昨收"}];}
else if(mb=="DG6"){pb=["NOW","LEAD","CLOSE","XSFLAG"];qb=[{"Code":"1","Setcode":"0","Name":"1","Wfsy":"1","Now":"0","Nhsyl":"1","Gains":"1","Close":"0"},{"Code":"基金代码","Setcode":"市场类型","Name":"基金名称","Wfsy":"万份收益","Now":"现价","Nhsyl":"年化收益率","Gains":"涨幅","Close":"昨收"}];}
if(mb=="DG7"){pb=["NOW","VOL","AMOUNT","LB","OPEN","MAX","MIN","CLOSE","XSFLAG"];qb=[{"Code":"1","Setcode":"0","Name":"1","Now":"1","Gains":"1","Volume":"1","Amount":"1","Lb":"1","Open":"1","Max":"1","Min":"1","Close":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","Gains":"涨幅","Volume":"总量","Amount":"总金额","Lb":"量比","Open":"今开","Max":"最高","Min":"最低","Close":"昨收"}];}
if(mb=="DG8"){pb=["NOW","VOL","AMOUNT","LB","OPEN","MAX","MIN","CLOSE","XSFLAG"];qb=[{"Code":"1","Setcode":"0","Name":"1","Now":"1","Gains":"1","Volume":"1","Amount":"1","Lb":"1","Open":"1","Max":"1","Min":"1","Close":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","Gains":"涨幅","Volume":"总量","Amount":"总金额","Lb":"量比","Open":"今开","Max":"最高","Min":"最低","Close":"昨收"}];}
else if(mb=="GG0"){pb=["NOW","CLOSE","MAX","MIN","VOL","OPEN","AMOUNT","BUYV1","SELLV1","LB","XSFLAG"];qb=[{"Code":"0","Setcode":"0","Name":"0","Now":"1","Close":"0","RiseFall":"1","Gains":"1","Max":"1","Amplitude":"1","Min":"1","Volume":"1","Open":"1","Amount":"1","BuyV1":"1","SellV1":"1","Lb":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","Close":"昨收","RiseFall":"涨跌","Gains":"涨幅","Max":"最高","Amplitude":"振幅","Min":"最低","Volume":"总量","Open":"今开","Amount":"总额","BuyV1":"上涨数","SellV1":"下跌数","Lb":"量比"}];}
else if(mb=="GG1"){pb=["NOW","CLOSE","SELLP1","BUYP1","SELLV1","BUYV1","VOL","HSL","OPEN","SYL","AMOUNT","MAX","MGSY","ZSZ","MIN","MGJZC","ZGB","ACTIVECAPITAL","BELONGHY","HYZAF","XSFLAG"];qb=[{"Code":"0","Setcode":"0","Name":"0","Now":"1","Close":"0","RiseFall":"1","Gains":"1","SellP1":"1","BuyP1":"1","SellV1":"1","BuyV1":"1","Volume":"1","Hsl":"1","Open":"1","Syl":"1","Amount":"1","Max":"1","Mgsy":"1","Zsz":"1","Min":"1","Mgjzc":"1","Ltz":"1","Hy":"1","Hyzf":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","Close":"昨收","RiseFall":"涨跌","Gains":"涨幅","SellP1":"卖一","BuyP1":"买一","SellV1":"卖量","BuyV1":"买量","Volume":"总量","Hsl":"换手","Open":"开盘","Syl":"市盈率","Amount":"成交额","Max":"最高","Mgsy":"收益","Zsz":"总市值","Min":"最低","Mgjzc":"净资","Ltz":"流通值","Hy":"行业","Hyzf":"行业涨"}];}
else if(mb=="GG2"){pb=["NOW","CLOSE","MAX","MIN","VOL","OPEN","AMOUNT","XSFLAG"];qb=[{"Code":"0","Setcode":"0","Name":"0","Now":"1","RiseFall":"1","Gains":"1","Close":"1","Open":"1","Max":"1","Min":"1","Volume":"1","Amount":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","RiseFall":"涨跌","Gains":"涨幅","Close":"昨收","Open":"今开","Max":"最高","Min":"最低","Volume":"总量","Amount":"总额"}];}
else if(mb=="GG3"){pb=["NOW","CLOSE","SELLP1","BUYP1","SELLV1","BUYV1","VOL","HSL","OPEN","ClearPrice","MAX","MIN","ACTIVECAPITAL","AMOUNT","XSFLAG"];qb=[{"Code":"0","Setcode":"0","Name":"0","Now":"1","RiseFall":"1","Gains":"1","Close":"0","SellP1":"1","BuyP1":"1","SellV1":"1","BuyV1":"1","Volume":"1","Hsl":"1","Open":"1","Amount":"1","Gx":"1","Max":"1","Min":"1","Ltz":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","RiseFall":"涨跌","Gains":"涨幅","Close":"昨收","SellP1":"卖一","BuyP1":"买一","SellV1":"卖量","BuyV1":"买量","Volume":"总量","Hsl":"换手","Open":"开盘","Amount":"总额","Gx":"股息","Max":"最高","Min":"最低","Ltz":"流通值"}];}
else if(mb=="GG4"){pb=["NOW","CLOSE","SELLP1","BUYP1","SELLV1","BUYV1","VOL","OPEN","AMOUNT","OUTSIDE","MAX","VolInStock","INSIDE","MIN","PreVolInStock","ClearPrice","XSFLAG"];qb=[{"Code":"0","Setcode":"0","Name":"0","Now":"1","RiseFall":"1","Gains":"1","SellP1":"1","BuyP1":"1","SellV1":"1","BuyV1":"1","Volume":"1","Close":"1","Open":"1","Amount":"1","Outside":"1","Max":"1","Ccl":"1","Inside":"1","Min":"1","Cc":"1","Jsj":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","RiseFall":"涨跌","Gains":"涨幅","SellP1":"卖一","BuyP1":"买一","SellV1":"卖量","BuyV1":"买量","Volume":"总量","Close":"昨结","Open":"开盘","Amount":"金额","Outside":"外盘","Max":"最高","Ccl":"持仓","Inside":"内盘","Min":"最低","Cc":"仓差","Jsj":"结算"}];}
else if(mb=="GG5"){pb=["NOW","CLOSE","MAX","MIN","VOL","OPEN","AMOUNT","XSFLAG"];qb=[{"Code":"0","Setcode":"0","Name":"0","Now":"1","RiseFall":"1","Gains":"1","Close":"1","Open":"1","Max":"1","Min":"1","Volume":"1","Amount":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","RiseFall":"涨跌","Gains":"涨幅","Close":"昨收","Open":"今开","Max":"最高","Min":"最低","Volume":"总量","Amount":"金额"}];}
else if(mb=="GG6"){pb=["NOW","CLOSE","SELLP1","BUYP1","SELLV1","BUYV1","VOL","NOWVOL","OPEN","OUTSIDE","MAX","VolInStock","INSIDE","MIN","PreVolInStock","ClearPrice","XSFLAG"];qb=[{"Code":"0","Setcode":"0","Name":"0","Now":"1","Close":"0","RiseFall":"1","Gains":"1","SellP1":"1","BuyP1":"1","SellV1":"1","BuyV1":"1","Volume":"1","NowVol":1,"Open":"1","Outside":"1","Max":"1","Ccl":"1","Inside":"1","Min":"1","Cc":"1","Jsj":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","Close":"昨收","RiseFall":"涨跌","Gains":"涨幅","SellP1":"卖一","BuyP1":"买一","SellV1":"卖量","BuyV1":"买量","Volume":"总量","NowVol":"现量","Open":"开盘","Outside":"外盘","Max":"最高","Ccl":"持仓","Inside":"内盘","Min":"最低","Cc":"仓差","Jsj":"结算"}];}
else if(mb=="GG7"){pb=["NOW","LEAD","CLOSE","XSFLAG"];qb=[{"Code":"0","Setcode":"0","Name":"0","Now":"1","RiseFall":"1","Gains":"1","Ljjz":"1","Space":"1","Close":"1"},{"Code":"基金代码","Setcode":"市场类型","Name":"基金名称","Now":"现价","RiseFall":"涨跌","Gains":"涨幅","Ljjz":"累计净值","Space":"&nbsp;","Close":"昨日净值"}];}
else if(mb=="GG8"){pb=["NOW","LEAD","CLOSE","XSFLAG"];qb=[{"Code":"0","Setcode":"0","Name":"0","Now":"1","Close":"0","RiseFall":"1","Gains":"1","Wfsy":"1"},{"Code":"基金代码","Setcode":"市场类型","Name":"基金名称","Now":"现价","Close":"昨收","RiseFall":"涨跌","Gains":"涨幅","Wfsy":"万份收益"}];}
else if(mb=="GG9"){pb=["NOW","CLOSE","MAX","MIN","VOL","OPEN","AMOUNT","XSFLAG"];qb=[{"Code":"0","Setcode":"0","Name":"0","Now":"1","RiseFall":"1","Gains":"1","Close":"1","Open":"1","Max":"1","Min":"1","Volume":"1","Amount":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","RiseFall":"涨跌","Gains":"涨幅","Close":"昨收","Open":"今开","Max":"最高","Min":"最低","Volume":"总量","Amount":"总额"}];}
else if(mb=="GG10"){pb=["NOW","CLOSE","SELLP1","BUYP1","OPEN","MAX","MIN","XSFLAG"];qb=[{"Code":"0","Setcode":"0","Name":"0","Now":"1","RiseFall":"1","Gains":"1","SellP1":"1","BuyP1":"1","Open":"1","Close":"1","Max":"1","Min":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","RiseFall":"涨跌","Gains":"涨幅","SellP1":"卖一","BuyP1":"买一","Open":"今开","Close":"昨收","Max":"最高","Min":"最低"}];}
else if(mb=="GG11"){pb=["NOW","CLOSE"];qb=[{"Code":"0","Setcode":"0","Name":"0","Now":"1","RiseFall":"1","Gains":"1","Close":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","RiseFall":"涨跌","Gains":"涨幅","Close":"上期宏观数据"}];}
else if(mb=="GG12"){pb=["NOW","CLOSE","OPEN","MAX","MIN","VOL","XSFLAG"];qb=[{"Code":"0","Setcode":"0","Name":"0","Now":"1","RiseFall":"1","Gains":"1","Close":"1","Space":"1","Volume":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","RiseFall":"涨跌","Gains":"涨幅","Close":"昨收","Space":"&nbsp;","Volume":"总量"}];}
else if(mb=="GG13"){pb=["NOW","CLOSE","OPEN","MAX","MIN","VOL","XSFLAG"];qb=[{"Code":"0","Setcode":"0","Name":"0","Now":"1","RiseFall":"1","Gains":"1","Close":"1","Open":"1","Max":"1","Min":"1","Volume":"1","Amplitude":"1"},{"Code":"证券代码","Setcode":"市场类型","Name":"证券名称","Now":"现价","RiseFall":"涨跌","Gains":"涨幅","Close":"昨收","Open":"今开","Max":"最高","Min":"最低","Volume":"总量","Amplitude":"振幅"}];}
if(typeof(ob)=="string"&&ob!=""){qb[1]["Name"]=ob;}
switch(nb){case "WantCol":return pb;break;case "FillCol":return qb;break;default:break;}}
function GetGGCol(rb,sb){var tb;if(sb==1){if(rb.substr(0,3)=="000"){tb="GG0";}
else if(rb.substr(0,5)=="99999"){tb="GG0";}
else if(rb.substr(0,3)=="880"){tb="GG0";}
else{tb="GG1";}}
else if(sb==0){if(rb.substr(0,3)=="395"){tb="GG0";}
else if(rb.substr(0,3)=="399"){tb="GG0";}
else{tb="GG1";}}
else if(sb==27){tb="GG2";}
else if(sb==31||sb==48||sb==49||sb==22||sb==32||sb==43){tb="GG3";}
else if(sb==60||sb==47||sb==30||sb==28||sb==29||sb==50){tb="GG4";}
else if(sb==42||sb==46){tb="GG5";}
else if(sb==13||sb==14||sb==15||sb==16||sb==17||sb==20||sb==18||sb==19||sb==39){tb="GG6";}
else if(sb==33||sb==56||sb==57){tb="GG7";}
else if(sb==34||sb==58){tb="GG8";}
else if(sb==12){tb="GG9";}
else if(sb==10||sb==11){tb="GG10";}
else if(sb==38){tb="GG11";}
else if(sb==40||sb==41){tb="GG12";}
else if(sb==74){tb="GG13";}
else{tb="GG0";}
return tb;}
function HQListObj(ub){var vb={"Code":"Code","Setcode":"Setcode","Name":"Name","Close":"CLOSE","Open":"OPEN","Max":"MAX","Min":"MIN","Now":"NOW","Volume":"VOL","Lb":"LB","Amount":"AMOUNT","Inside":"INSIDE","Outside":"OUTSIDE","Zgb":"ZGB","Ltgb":"ACTIVECAPITAL","Mgsy":"MGSY","Mgjzc":"MGJZC","Zsz":"ZSZ","Syl":"SYL","Ccl":"VolInStock","Zccl":"PreVolInStock","Jsj":"ClearPrice","Gx":"ClearPrice","SellP1":"SELLP1","BuyP1":"BUYP1","SellV1":"SELLV1","BuyV1":"BUYV1","NowVol":"NOWVOL","Hsl":"HSL","Hy":"BELONGHY","Hyzf":"HYZAF","XSFlag":"XSFLAG"};for(n in vb){var m=vb[n];if(ub==n){return m;}}
return "";}
function HQJsonData(wb,xb,yb,zb){if(xb==null){return "";}
var Ab=HQListCol(wb,"WantCol");var Bb=HQListCol(wb,"FillCol",zb);var Cb=Bb;for(var i=0;i<xb.length;i++){var Db={};EachObject(Bb[0],function(n,m){var Eb=inArray(HQListObj("XSFlag"),yb);var Fb=xb[i][Eb];var Gb;var Hb;var Ib=inArray(HQListObj("Now"),yb);var Jb=inArray(HQListObj("Close"),yb);if(Ib!=-1&&Jb!=-1){var Kb=xb[i][Ib];var Lb=xb[i][Jb];Gb=MathRound(Kb,Fb)-MathRound(Lb,Fb);if(Lb!=0&&Kb!=0){Hb=MathRound(Gb/Lb*100,2)+"%";}
else{Hb="--";}}
var Mb;var Nb=inArray(HQListObj("Max"),yb);var Ob=inArray(HQListObj("Min"),yb);if(Nb!=-1&&Ob!=-1){var Pb=xb[i][Nb];var Qb=xb[i][Ob];Mb=MathRound((Pb-Qb)/Lb*100,2)+"%";}
var Cc;var Rb=inArray(HQListObj("Ccl"),yb);var Sb=inArray(HQListObj("Zccl"),yb);if(Rb!=-1&&Sb!=-1){var Tb=xb[i][Rb];var Ub=xb[i][Sb];Cc=Tb-Ub;}
var Vb;var Wb=inArray(HQListObj("Ltgb"),yb);if(Wb!=-1&&Ib!=-1){var Xb=xb[i][Wb];var Kb=xb[i][Ib];var Lb=xb[i][Jb];if(Kb>0){Vb=Xb*Kb;}
else{Vb=Xb*Lb;}}
var Yb=inArray(HQListObj(n),yb);if(Yb==-1){if(n=="RiseFall"){Db[n]=MathRound(Gb,Fb);}
else if(n=="Gains"){Db[n]=Hb;}
else if(n=="Amplitude"){Db[n]=MathRound(Mb,Fb);}
else if(n=="Cc"){Db[n]=Cc;}
else if(n=="Ltz"){Db[n]=YiWanNum(Vb*10000);}
else if(n=="Zxjz"||n=="Nhsyl"){Db[n]=MathRound(xb[i][inArray("NOW",yb)],Fb);}
else if(n=="Ljjz"||n=="Wfsy"){Db[n]=MathRound(xb[i][inArray("LEAD",yb)],Fb);}
else if(n=="Space"){Db[n]="&nbsp;"}}
else{if(n=="Code"||n=="Setcode"||n=="Name"||n=="SellV1"||n=="BuyV1"||n=="Ccl"||n=="Zccl"||n=="Inside"||n=="Outside"){Db[n]=xb[i][Yb];}
else if(n=="Hy"){Db[n]=GetHyName(xb[i][Yb]);}
else if(n=="Volume"||n=="Amount"||n=="Zgb"||n=="Ltgb"||n=="Zsz"||n=="NowVol"){Db[n]=YiWanNum(xb[i][Yb]);}
else if(n=="Lb"){Db[n]=MathRound(xb[i][Yb],2);}
else{Db[n]=MathRound(xb[i][Yb],Fb);}}});Cb.push(Db)}
return Cb;}
function HQColType(Zb){var $b={"Code":1,"Close":2,"Open":3,"Max":4,"Min":5,"Now":6,"Volume":9,"Amount":10,"RiseFall":12,"Gains":14,"Amplitude":15,"Syl":17,"Lb":35,"Ltgb":37,"Zsz":39,"Zgb":52,"Mgsy":83,"Mgjzc":85,"Jsj":89,"Gx":100,"Cc":107,"Zxjz":168,"Ljjz":169,"Wfsy":170,"Nhsyl":171};for(n in $b){var m=$b[n];if(Zb==n){return m;}}
return 1;}
function GetHyName(Hy){var ac=[{"Name":"煤炭","ID":"T0101"},{"Name":"电力","ID":"T0102"},{"Name":"石油","ID":"T0103"},{"Name":"钢铁","ID":"T0201"},{"Name":"有色","ID":"T0202"},{"Name":"化纤","ID":"T0203"},{"Name":"化工","ID":"T0204"},{"Name":"建材","ID":"T0206"},{"Name":"造纸","ID":"T0207"},{"Name":"矿物制品","ID":"T0208"},{"Name":"日用化工","ID":"T0301"},{"Name":"农林牧渔","ID":"T0302"},{"Name":"纺织服饰","ID":"T0303"},{"Name":"食品饮料","ID":"T0304"},{"Name":"酿酒","ID":"T0305"},{"Name":"家用电器","ID":"T0401"},{"Name":"汽车类","ID":"T0402"},{"Name":"医疗保健","ID":"T0403"},{"Name":"家居用品","ID":"T0404"},{"Name":"医药","ID":"T0405"},{"Name":"商业连锁","ID":"T0501"},{"Name":"商贸代理","ID":"T0502"},{"Name":"传媒娱乐","ID":"T0601"},{"Name":"广告包装","ID":"T0602"},{"Name":"文教休闲","ID":"T0603"},{"Name":"酒店餐饮","ID":"T0604"},{"Name":"旅游","ID":"T0605"},{"Name":"航空","ID":"T0701"},{"Name":"船舶","ID":"T0702"},{"Name":"运输设备","ID":"T0703"},{"Name":"通用机械","ID":"T0704"},{"Name":"工业机械","ID":"T0705"},{"Name":"电气设备","ID":"T0706"},{"Name":"工程机械","ID":"T0707"},{"Name":"电器仪表","ID":"T0708"},{"Name":"电信运营","ID":"T0801"},{"Name":"公共交通","ID":"T0802"},{"Name":"水务","ID":"T0803"},{"Name":"供气供热","ID":"T0804"},{"Name":"环境保护","ID":"T0805"},{"Name":"运输服务","ID":"T0901"},{"Name":"仓储物流","ID":"T0902"},{"Name":"交通设施","ID":"T0903"},{"Name":"银行","ID":"T1001"},{"Name":"证券","ID":"T1002"},{"Name":"保险","ID":"T1003"},{"Name":"多元金融","ID":"T1004"},{"Name":"建筑","ID":"T1101"},{"Name":"房地产","ID":"T1102"},{"Name":"电脑设备","ID":"T1201"},{"Name":"通信设备","ID":"T1202"},{"Name":"半导体","ID":"T1203"},{"Name":"元器件","ID":"T1204"},{"Name":"软件服务","ID":"T1205"},{"Name":"互联网","ID":"T1206"},{"Name":"综合类","ID":"T1301"}];Hy=Hy.toString();var bc=4-Hy.length;var ID="T";for(var i=0;i<bc;i++){ID+="0";}
ID+=Hy;for(var i=0;i<ac.length;i++){if(ID==ac[i]["ID"]){return ac[i]["Name"];}}
return Hy;}
function GetExHQFlag(cc){var dc;if(cc==0||cc==1){dc=0;}
else{dc=1;}
return dc;}
function GetBtnData(ec){var fc;if(ec=="GG1"||ec=="GG3"||ec=="GG4"||ec=="GG6"||ec=="GG13"){fc=[1,1,1,1,1];}
else if(ec=="GG7"||ec=="GG8"||ec=="GG11"){fc=[0,0,1,0,0];}
else if(ec=="GG9"){fc=[0,0,1,1,1];}
else{fc=[1,0,1,1,1];}
return JSON.stringify(fc);}
function GetScjc(gc){switch(gc){case 0:case 1:return "TP";case 44:return "SB";case 62:return "ZZ";case 27:return "FH";case 31:return "KH";case 48:return "KG";case 32:return "KR";case 49:return "KT";case 22:return "KB";case 43:return "HB";case 60:return "MA";case 47:return "CZ";case 28:return "QZ";case 29:return "QD";case 30:return "QS";case 42:return "TI";case 50:return "BH";case 46:return "SG";case 13:return "GO";case 14:return "LM";case 15:return "IP";case 16:return "CO";case 17:return "NY";case 20:return "NB";case 18:return "CB";case 19:return "TO";case 39:return "ML";case 33:return "FU";case 34:return "FB";case 56:return "TA";case 57:return "TB";case 58:return "TC";case 12:return "WI";case 37:return "FW";case 10:return "FE";case 11:return "FX";case 38:return "HG";case 40:return "CH";case 41:return "MG";case 74:return "US";case 4:return "OZ";case 5:return "OD";case 6:return "OS";case 7:return "OJ";case 8:return "QQ";}
return "NONE";}
function GetBigSclx(hc){switch(hc){case 0:case 1:case 44:return 1;case 27:case 12:case 62:return 5;case 31:case 48:case 49:case 22:case 43:return 2;case 60:case 47:case 28:case 29:case 30:case 42:case 50:case 13:case 14:case 15:case 16:case 17:case 20:case 18:case 19:case 39:return 3;case 33:case 56:case 57:return 8;case 34:case 58:return 9;case 74:return 13;case 46:case 37:case 40:case 41:return 11;case 10:case 11:return 4;case 38:return 10;case 4:case 5:case 6:case 7:case 8:return 12;}
return 0;}