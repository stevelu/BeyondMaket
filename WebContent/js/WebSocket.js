var WS;var WSIP;var WSPort;var WSRefrSec;var AjaxRefrSec;var SocketCreated=false;function CreateWS(aa){if(SocketCreated&&(WS.readyState==0||WS.readyState==1)){CloseWS();}
else{WS=new WebSocket('ws://'+WSIP+':'+WSPort+'/WS');SocketCreated=true;WS.onopen=function(ba){OnOpen(aa);};WS.onmessage=function(ca){OnMessage(ca.data);};WS.onclose=function(da){OnClose();};WS.onerror=function(ea){OnError();};}}
function OnOpen(fa){if(fa!=undefined&&fa!=""){eval(fa+"();");}}
function OnMessage(ga){ga=ReBackSpeStr(ga);var ha=BackData(ga);var ia=ha[1].TransKey;var ja=ha[1].Exception;var ka=JSON.parse(ia).callback;var la;if(ha[2].substr(0,1)=="{"){eval("la=JSON.stringify(ReObject("+ha[2]+"));");}
else{la=ha[2];if(ha[0]=="TQL"){if(la!=""){HqRefrSec=0;alert(la);}
else{var ma=JSON.parse(ia).unitname;var na=JSON.parse(ia).func;alert("WebSocket返回数据为空！\r\n单元名称:"+ma+"\r\n功能名称:"+na);}
return;}}
var oa=ga.substr(0,ga.indexOf("|")+1)+la;if(ka!=undefined&&ka!=""){eval(ka+"('"+oa+"');");}}
function ReBackSpeStr(pa){if(pa.indexOf("'")!=-1){pa=pa.replace(/'([^']*)/g,"＇$1");}
if(pa.indexOf('\\\"')!=-1){pa=pa.replace(/\\\"/g,"＂");}
if(pa.indexOf("\\r\\n")!=-1){pa=pa.replace(/\\r\\n/g,"<br/>");}
if(pa.indexOf("\\n")!=-1){pa=pa.replace(/\\n/g,"<br/>");}
if(pa.indexOf("\\r")!=-1){pa=pa.replace(/\\r/g,"<br/>");}
pa=pa.replace('touch?','touch？');pa=pa.replace('TQL?','TQL？');if(pa.indexOf('"List":')!=-1&&pa.indexOf('?')!=-1){pa=pa.replace(/\?/g,'"');}
pa=pa.replace('TQL？','TQL?');pa=pa.replace('touch？','touch?');return pa;}
function ReObject(qa){var ra=new Object();EachObject(qa,function(n,m){ra[n]=m;});return ra;}
function OnClose(){if(SocketCreated){alert("WebSocket已断开");}}
function OnError(){if(SocketCreated){alert("WebSocket连接异常");}}
function CloseWS(){SocketCreated=false;WS.close();}
function WebCallTQL(sa,ta,ua){if(sa.substr(0,1)=="{"){var va=JSON.parse(sa);va["func"]=ta;sa=JSON.stringify(va);}
if(ua.substr(0,1)=="{"){var va=JSON.parse(ua);va["CharSet"]="UTF8";ua=JSON.stringify(va);}
if(SocketCreated){var wa=SendData(sa,ta,ua);WS.send(wa);}
else{WebCallAjax(sa,ta,ua);}}
function SetWebSocket(xa){$.ajax({url:"config/config.xml",type:"GET",datatype:"xml",success:function(ya,za,Aa){$(ya).find("Config").each(function(Ba){WSIP=$(this).attr("IP");WSPort=$(this).attr("Port");WSRefrSec=Number($(this).attr("WebSocket"));AjaxRefrSec=Number($(this).attr("Ajax"));if(!isNaN(WSRefrSec))HqRefrSec=WSRefrSec;CreateWS(xa);});},error:function(){alert('读取config.xml异常');}});}
function SetAjax(Ca){if(WSIP!=undefined&&WSPort!=undefined){if(!isNaN(AjaxRefrSec))HqRefrSec=AjaxRefrSec;eval(Ca+"();");}
else{$.ajax({url:"config/config.xml",type:"GET",datatype:"xml",success:function(Da,Ea,Fa){$(Da).find("Config").each(function(Ga){WSIP=$(this).attr("IP");WSPort=$(this).attr("Port");AjaxRefrSec=Number($(this).attr("Ajax"));if(!isNaN(AjaxRefrSec))HqRefrSec=AjaxRefrSec;eval(Ca+"();");});},error:function(){alert('读取config.xml异常');}});}}
function WebCallAjax(Ha,Ia,Ja){if(Ja.substr(0,1)=="{"){var Ka=JSON.parse(Ja);Ka["CharSet"]="";Ja=JSON.stringify(Ka);}
var La='http://'+WSIP+':'+WSPort+'/TQLEX?Entry='+Ia;$.ajax({url:La,type:"POST",data:Ja,success:function(Ma){Ma=ReBackSpeStr(Ma);var Na='TQL?';Na+='TransKey='+Ha;Na+='&Exception=0|';var Oa;if(Ma.substr(0,1)=="{"){eval("Oa=JSON.stringify(ReObject("+Ma+"));");Na+=Oa;}
else{Oa=Ma;if(Oa!=""){HqRefrSec=0;alert(Oa);}
else{var Pa=JSON.parse(Ha).unitname;var Qa=JSON.parse(Ha).func;alert("Ajax返回数据为空！\r\n单元名称:"+Pa+"\r\n功能名称:"+Qa);}
return;}
var Ra=JSON.parse(Ha).callback;if(Ra!=undefined&&Ra!=""){eval(Ra+"('"+Na+"');");}},error:function(){HqRefrSec=0;alert('Ajax返回异常');}});}