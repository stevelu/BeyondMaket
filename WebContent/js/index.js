var HqRefrSec=5;var WsWaitingSec=3;var colorsJson=DefaultColors;var _mob_system=Check_IOS();var myScroll;var clientSize={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight};window.addEventListener("resize",function(){clientSize={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight};WebSizeInit();});var foot_curr;var FlpmParmStr;var GgParmStr;var ZxgSecu;var HisSecu=[];var ZxParmStr;var ZxInfo=ReadConfig("pagesZx/configZx.xml");var JyInfo=ReadConfig("pagesJy/configJy.xml");var KzInfo=ReadConfig("pagesKz/configKz.xml");WebSizeInit();var MobileColors=NewColors;function SetMobColor(){if(!("MobileColors" in window&&MobileColors!=undefined))return;document.body.style.background=MobileColors.BackNormal;document.body.style.color=MobileColors.TextNormal;var aa=document.getElementById("header");aa.style.backgroundImage="none";aa.style.backgroundColor=MobileColors.BackHead;aa.style.borderColor=MobileColors.BackHead;aa.style.color=MobileColors.TextNormal;var ba=document.getElementById("footer");ba.style.backgroundImage="none";ba.style.backgroundColor=MobileColors.BackFoot;ba.style.borderColor=MobileColors.BackFoot;ba.style.color=MobileColors.TextLight;var ca=ba.getElementsByTagName("div");for(var i=0;i<ca.length;i++){ca[i].style.backgroundImage="none";}}
SetMobColor();$(function(){$("#footer div").click(function(){FootClick(this.id);});$("#backbtn").click(function(){BackClick();});$("#refrbtn,#refrbtn2").click(function(){RefreshClick(this.id);});$("#search").click(function(){SearchClick();});});function WebSizeInit(){var da=window.location.search.substr(1);if(da=="Zxg"||da=="Sc"||da=="Zx"){document.getElementById("footer").style.display="none";}
else{document.getElementById("footer").style.display="";}
var ea=document.getElementById("header");var fa=ea.offsetHeight;var ga=document.getElementById("footer");var ha=ga.offsetHeight;var ia=document.getElementById("content");var ja=clientSize.height-fa-ha;ia.style.height=ja+"px";var ka=ia.getElementsByTagName("iframe");for(var i=0;i<ka.length;i++){ka[i].style.height=ja+"px";}
var la=document.getElementById("contentGg");var ma=clientSize.height;la.style.height=ma+"px";var na=document.getElementById("contentCx");var oa=ma;na.style.height=oa+"px";var pa=document.getElementById("contentZx");var qa=ma;pa.style.height=qa+"px";var ra=document.getElementById("contentKz");var sa=ma;ra.style.height=sa+"px";var ta=ga.offsetWidth;var ua=ga.getElementsByTagName("div");for(var i=0;i<ua.length;i++){footbtnWidth=ta/ua.length;ua[i].style.width=footbtnWidth+"px";}}
function ReadConfig(va){var wa=[];if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.open("GET",va,false);xmlhttp.send();xmlDoc=xmlhttp.responseXML;var xa=xmlDoc.getElementsByTagName("Nodes")[0];var ya=xa.getElementsByTagName("Node");for(var i=0;i<ya.length;i++){var za=ya[i].getAttribute("Des");var Aa=ya[i].getAttribute("Name");var Ba=ya[i].getAttribute("Value");var Ca=ya[i].getAttribute("Suffix");if(Ca==null)Ca=="";var Da={"Des":za,"Name":Aa,"Value":Ba,"Suffix":Ca};wa.push(Da);}
return wa;}
function ReadZxgSecu(){var Ea=LocaData("ZxgSecu");if(Ea==undefined){ZxgSecu=[{"Code":"399001","Setcode":0},{"Code":"000001","Setcode":1}];}
else{ZxgSecu=JSON.parse(Ea);}}
function FootClick(id){var n=id.substr(4);var Fa=document.getElementById("footer").getElementsByTagName("div");for(var i=0;i<Fa.length;i++){Fa[i].className="";}
document.getElementById(id).className="foot_curr";MoveRefrbtn(n);ShowIcon(n);ShowTitle(n);ShowContent(n);}
function MoveRefrbtn(n){var Ga=document.getElementById("refrbtn");var Ha=document.getElementById("search");var Ia=document.getElementById("refrbtn2");if(n==1||n==2){Ga.style.display="";Ha.style.display="";Ia.style.display="none";}
else{Ga.style.display="none";Ha.style.display="none";Ia.style.display="";}}
function ShowIcon(n){var Ja=document.getElementById("footer");var Ka=Ja.getElementsByTagName("div");for(var i=0;i<Ka.length;i++){var La=Ka[i].getElementsByTagName("img");La[0].style.display="";La[1].style.display="none";}
var Ma=Ka[n-1].getElementsByTagName("img");Ma[0].style.display="none";Ma[1].style.display="";}
function ShowTitle(n){var Na=document.getElementById("topic");if(n==1){Na.innerHTML="自选";}
else if(n==2){Na.innerHTML="市场";}
else if(n==3){Na.innerHTML="资讯";}
else if(n==4){Na.innerHTML="交易";}}
function ShowContent(n){var Oa=document.getElementById("content");var Pa=Oa.getElementsByTagName("iframe");for(var i=0;i<Pa.length;i++){Pa[i].style.display="none";}
Pa[n-1].style.display="";SetContentSrc(n);ShowBackBtn(2);StopIframeHQ();StartIframeHQ(n);foot_curr=n;ClearDgHQData();}
function SetContentSrc(n){var Qa=document.getElementById("content");var Ra=Qa.getElementsByTagName("iframe");var Sa;if(n==1){Sa="unitZxg/unitZxg.html";}
else if(n==2){Sa="unitSc/unitSc.html";}
else if(n==3){Sa=ZxInfo[0]["Value"];}
else if(n==4){Sa=JyInfo[0]["Value"];}
if(Ra[n-1].src.indexOf(Sa)==-1){Ra[n-1].src=Sa;}}
function GetHQUrlParm(){var Ta="?";if(foot_curr==1){Ta+="Zxg";}
else if(foot_curr==2){Ta+="Sc";}
else if(foot_curr==3){Ta+="Zx";}
else if(foot_curr==4){Ta+="Jy";}
return Ta;}
function ShowBackBtn(n){var Ua=document.getElementById("backbtn");var Va=document.getElementById("tdxico");if(n==1){Ua.style.display="";Va.style.display="none";}
else if(n==2){Ua.style.display="none";Va.style.display="";}}
function BackClick(){var Wa=document.getElementById("backbtn");Wa.style.display="none";var Xa=document.getElementById("tdxico");Xa.style.display="";FootClick("foot"+foot_curr);}
function RefreshClick(){var Ya=document.getElementById("content");var Za=Ya.getElementsByTagName("iframe");for(var i=0;i<Za.length;i++){if(Za[i].style.display!="none"){var $a=Za[i].src;Za[i].src=$a;}}}
function SearchClick(){StopIframeHQ();ShowCxPage();}
function ShowCxPage(){var ab=document.getElementById("contentCx");ab.style.display="";}
function StartIframeHQ(n){if(n==4)return;var bb=document.getElementById("content"+n);if(bb!=null){if(typeof(bb.contentWindow.QueryHQ)=="function"){setTimeout(function(){bb.contentWindow.QueryHQ();},500);}
if(typeof(bb.contentWindow.StartQueryHq)=="function"){bb.contentWindow.StartQueryHq();}}}
function StopIframeHQ(){var cb=document.getElementById("content");var db=cb.getElementsByTagName("iframe");for(var i=0;i<db.length;i++){var n=i+1;if(n==4)continue;if(typeof(db[i].contentWindow.StopQueryHq)=="function"){db[i].contentWindow.StopQueryHq();}}}
function ClearDgHQData(){var eb=document.getElementById("contentDg");if(foot_curr==1){eb=document.getElementById("content1");if(typeof(eb.contentWindow.ClearDgHQData)=="function"){eb.contentWindow.ClearDgHQData();}}
FlpmParmStr="";}
function MainCallTQL(fb,gb,hb,ib){var jb={"callback":"MainCallBack","unitname":fb,"unitback":gb};var kb=JSON.stringify(jb);WebCallTQL(kb,hb,ib);}
function MainCallBack(lb){var mb=BackData(lb);var nb=mb[1].TransKey;var ob=JSON.parse(nb).unitname;var pb=JSON.parse(nb).unitback;if(ob=="unitZst"||ob=="unitFxt"||ob=="unitPk")pb="GgkjBack";else if(ob=="unitZxkj")pb="ZxkjBack";else if(ob=="unitKzkj")pb="KzkjBack";var qb=GetIframeId(ob);var rb=document.getElementById(qb);eval("if(typeof(rb.contentWindow."+pb+")=='function'){rb.contentWindow."+pb+"('"+lb+"');}");}
function GetIframeId(sb){if(sb=="unitZxg"){return "content1";}
else if(sb=="unitZx"){return "content3";}
else if(sb=="unitHis"||sb=="unitDpzs"||sb=="unitZhpm"||sb=="unitFlpm"){return "contentDg";}
else if(sb=="unitGg"||sb=="unitZst"||sb=="unitFxt"||sb=="unitPk"){return "contentGg";}
else if(sb=="unitCx"){return "contentCx";}
else if(sb=="unitZxkj"){return "contentZx";}
else if(sb=="unitKzkj"){return "contentKz";}
else{return "";}}
function ChoseMenu(){if(window.location.search==""){foot_curr=2;FootClick("foot2");}
else{var tb=window.location.search.substr(1);if(tb=="Zxg"){foot_curr=1;FootClick("foot1");}
else if(tb=="Sc"){foot_curr=2;FootClick("foot2");}
else if(tb=="Zx"){foot_curr=3;FootClick("foot3");}
else{foot_curr=2;FootClick("foot2");}}}
function LoadContent(){var ub=document.getElementById("content");var vb=ub.getElementsByTagName("iframe");for(var i=0;i<vb.length;i++){if(i!=foot_curr-1){vb[i].src="";}}
var wb=document.getElementById("footer");if(foot_curr==1||wb.style.display!="none"){SetContentSrc(1);}
if(foot_curr==2||wb.style.display!="none"){SetContentSrc(2);}
if(foot_curr==3){SetContentSrc(3);}
if(foot_curr==4||wb.style.display!="none"){SetContentSrc(4);}
if(foot_curr==2||wb.style.display=="none"){document.getElementById("contentDg").src="unitFlpm/unitFlpm.html";}
else{document.getElementById("contentDg").src="";}
if(foot_curr==1||foot_curr==2||wb.style.display!="none"){document.getElementById("contentGg").src="unitGg/unitGg.html";document.getElementById("contentCx").src="unitCx/unitCx.html";}
else{document.getElementById("contentGg").src="";document.getElementById("contentCx").src="";}
if(foot_curr==1||foot_curr==2||foot_curr==3||wb.style.display!="none"){document.getElementById("contentZx").src="unitZxkj/unitZxkj.html";}
else{document.getElementById("contentZx").src="";}
if(foot_curr==1||foot_curr==2||foot_curr==4||wb.style.display!="none"){document.getElementById("contentKz").src="unitKzkj/unitKzkj.html";}
else{document.getElementById("contentKz").src="";}}
function ShowLoading(xb,yb){if(xb==1){if($("[class='loading']").length==0){var zb='';zb+='<div class="loading">';zb+='<table cellpadding="0" cellspacing="0" border="0">';zb+='<tr>';zb+='<td>';zb+='<img src="images/loading.gif" />';zb+='<div>';zb+='</div>';zb+='</td>';zb+='</tr>';zb+='</table>';zb+='</div>';$(document.body).append(zb);}
if(yb==undefined){$("[class='loading']:eq(0) div:eq(0)").html("");}
else{$("[class='loading']:eq(0) div:eq(0)").html(yb);}$("[class='loading']:eq(0)").show();}
else{$("[class='loading']:eq(0)").hide();$("[class='loading']:eq(0) div:eq(0)").html("");}}
var WsOpenType;function TouchCall(){ShowLoading(2,"");WsOpenType=true;var Ab={"callback":"TouchBack"};var Bb=JSON.stringify(Ab);WebCallTQL(Bb,"","touch");}
function TouchBack(Cb){var Db=BackData(Cb);if(Db[1].Exception==0){WebLoadFunc();}}
function WebLoadFunc(){ReadZxgSecu();ChoseMenu();LoadContent();}
function WebStartRun(){ShowLoading(1,"正在连接，请稍后...");WsOpenType=false;if(typeof(WebSocket)=="function"){SetWebSocket("TouchCall");}
else{ShowLoading(2,"");WsOpenType=true;SetAjax("WebLoadFunc");}}
var LineTimeout;function MonitorLineState(){LineTimeout=setTimeout(function(){if(!WsOpenType){CloseWS();ShowLoading(2,"");SetAjax("WebLoadFunc");}},WsWaitingSec*1000);}
WebStartRun();MonitorLineState();