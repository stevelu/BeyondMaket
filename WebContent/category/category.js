var colorsJson=parent.colorsJson;
var _mob_system=Check_IOS();
var myScroll;
var clientSize={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight};
function loaded()
{
	myScroll=new iScroll('wrapper',{
		onScrollMove:function()
		{
			var aa=document.getElementById("top_icon");
			var ba=document.getElementById("top_text");
			if(this.y>50){aa.className="up_icon";ba.innerHTML="释放加载上一页";return;}
			var ca=document.getElementById("bottom_icon");
			var da=document.getElementById("bottom_text");
			var ea=this.maxScrollY<0?this.maxScrollY:0;
			if(this.y<ea-50)
				{
					ca.className="down_icon";
					da.innerHTML="释放加载下一页";
				}
		},
		onScrollEnd:function()
		{
			var fa=document.getElementById("top_icon");
			var ga=document.getElementById("top_text");
			if(fa.className=="up_icon")
				{
					fa.className="down_icon";
					ga.innerHTML="下拉可以刷新";
					LoadNextHQTab(1);return;
				}
			var ha=document.getElementById("bottom_icon");
			var ia=document.getElementById("bottom_text");
			if(ha.className=="down_icon")
				{
					ha.className="up_icon";
					ia.innerHTML="上拉加载更多";
					LoadNextHQTab(2);return;
				}
		},
		useTransition:true,checkDOMChanges:true
	});
}

if(_mob_system=="IOS")
	{
		window.addEventListener('load',function(){setTimeout(loaded,300);},false);
	}
else
	{
		document.addEventListener('DOMContentLoaded',function(){setTimeout(loaded,300);},false);
	}
document.addEventListener('touchmove',function(e){e.preventDefault();},false);
window.addEventListener("resize",function()
	{
		myScroll._resize();
		clientSize={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight};
		WebSizeInit();
		if(document.getElementById('list').innerHTML!=""&&dataCache.length>2)
			{
				dataCache=CreateTabMob("list",dataCache,"SortChange","GotoGgHQ");
			}
		ShowArrow();
		ResetPullSite();
	});
WebSizeInit();
var dataCache=[];
var SetDomain;
var listType;
var listTitle;
var Startxh=0;
var SortType=0;
var ColType=14;
var ExHQFlag;
var SecuCache=[];
var headIdCache;
var MobileColors=parent.MobileColors;
function SetMobColor()
{
	if(!("MobileColors" in window&&MobileColors!=undefined))
		return;
	document.body.style.background=MobileColors.BackNormal;
	document.body.style.color=MobileColors.TextNormal;
}
SetMobColor();
function WebSizeInit(){var ja=document.getElementById("bottom_pull");var ka=clientSize.height;ja.style.top=ka+"px";}
function ResetPullSite()
{
	var la=document.getElementById("bottom_pull");
	var ma=document.getElementById("list");
	var na;
	if(ma.offsetHeight>clientSize.height){na=ma.offsetHeight;}
	else{na=clientSize.height;}
    la.style.top=na+"px";
}
function MaxRowNum(){var oa=document.documentElement.clientHeight;var pa=Math.floor(oa/41);return pa;}
function QueryHQ()
{
	var qa=parent.FlpmParmStr;
	if(qa!=undefined&&qa!="")
		{
			var ra=ParseParmStr(qa);
			if(ra["SetDomain"]!=undefined&&ra["listType"]!=undefined)
				{
					SetDomain=Number(ra["SetDomain"]);listType=ra["listType"];
					if(ra["listTitle"]!=undefined)
						{listTitle=decodeURI(ra["listTitle"]);}
					var sa=HQListCol(listType,"WantCol");
					var ta=MaxRowNum()-1;
					if(ra["ExHQFlag"]!=undefined)
						{ExHQFlag=Number(ra["ExHQFlag"]);}
					else{ExHQFlag=0;}
					if(ta>0)
						{CallMultiHQ("ShowHQ",SetDomain,Startxh,sa,ta,SortType,ColType,ExHQFlag);}
				}
		}
}
function CallMultiHQ(ua,va,wa,xa,ya,za,Aa,Ba){if(Ba==undefined){Ba=0;}
var Ca={"WantCol":xa,"SetDomain":va,"SubCode":"","ColType":Aa,"Startxh":wa,"WantNum":ya,"SortType":za,"ExHQFlag":Ba};
var Da=JSON.stringify(Ca);UnitCallTQL(ua,"HQServ.MultiHQ",Da);}
function UnitCallTQL(Ea,Fa,Ga){parent.MainCallTQL("unitFlpm",Ea,Fa,Ga);}
function ShowHQ(Ha)
{
	var Ia=parent.FlpmParmStr;
	if(Ia!=undefined&&Ia!="")
		{
			var Ja=ParseData(Ha);
			if(Ja!="error")
				{
					var Ka=document.getElementById("list");
					var La=(Ka.getElementsByTagName("div"))[0];
					if(La==undefined)
						{dataCache=CreateTabMob("list",Ja,"SortChange","GotoGgHQ");
					ShowArrow();ResetPullSite();
				}
			else{var Ma=La.getElementsByTagName("tr");
			if(Ma.length+1!=Ja.length)
				{dataCache=CreateTabMob("list",Ja,"SortChange","GotoGgHQ");ShowArrow();ResetPullSite();
		}
	else{dataCache=UpdateTabMob("list",Ja,"GotoGgHQ");}}}}}
function ParseData(Na)
{
	var Oa=BackData(Na);
	if(Oa[1].Exception==0)
		{var Pa=JSON.parse(Oa[2]);var Qa=Pa["List"];if(Qa.length==0){Startxh-=(MaxRowNum()-1);if(Startxh<0)Startxh=0;return dataCache;}
	var Ra=Pa["ListHead"];var Sa=HQJsonData(listType,Qa,Ra,listTitle);SecuCache=GetSecu(Sa);return Sa;}
	else{return "error";}}
function GetSecu(Ta)
{
	var Ua=[];
	if(Ta.length>2)
		{for(var i=2;i<Ta.length;i++){var Va=Ta[i]["Code"];var Wa=Ta[i]["Setcode"];var Xa={"Code":Va,"Setcode":Wa};Ua.push(Xa);}}
return Ua;
}
function SortChange(Ya,Za)
{
	if(Ya=="Name")
		{
			if(SortType!=0)
				{SortType=0;}
			else{
				if(Startxh==0){return;}
			}
		}
		else
			{
				ColType=HQColType(Ya);
				if(headIdCache==Za)
					{
						if(SortType==1){SortType=2;}
						else{SortType=1;}
			        }
	           else{SortType=1;}
	       }
	       Startxh=0;
	       var $a=HQListCol(listType,"WantCol");
	       var ab=MaxRowNum()-1;
	       headIdCache=Za;
	       CallMultiHQ("ShowNewHQ",SetDomain,Startxh,$a,ab,SortType,ColType,ExHQFlag);
}
function ShowNewHQ(bb){var cb=ParseData(bb);if(cb!="error"){StopQueryHq();dataCache=CreateTabMob("list",cb,"SortChange","GotoGgHQ");ShowArrow();ResetPullSite();StartQueryHq();}}
function ShowArrow(){var db=document.getElementById(headIdCache);if(db==null){return;}
var eb=("colorsJson" in window&&colorsJson!=undefined&&colorsJson.Grid_Up_Color!=undefined)?colorsJson.Grid_Up_Color:"red";var fb=("colorsJson" in window&&colorsJson!=undefined&&colorsJson.Grid_Down_Color!=undefined)?colorsJson.Grid_Down_Color:"green";eb=("MobileColors" in window&&MobileColors!=undefined&&MobileColors.TextRise!=undefined)?MobileColors.TextRise:eb;fb=("MobileColors" in window&&MobileColors!=undefined&&MobileColors.TextFall!=undefined)?MobileColors.TextFall:fb;var gb=db.getElementsByTagName("span")[1];if(SortType==1){gb.style.color=eb;gb.innerHTML="↓";gb.style.display="";}
else if(SortType==2){gb.style.color=fb;gb.innerHTML="↑";gb.style.display="";}}
function GotoGgHQ(hb,ib,jb){StopQueryHq();ShowGgPage(hb,ib,jb);AddHisSecu(hb,ib);}
function ShowGgPage(kb,lb,mb){var nb="Code="+kb;nb+="&Setcode="+lb;if(mb.indexOf("&")!=-1){mb=mb.replace(/&/g,"amp;");}
nb+="&Name="+mb;var ob=GetGGCol(kb,lb);nb+="&listType="+ob;var pb=GetBtnData(ob);nb+="&btnData="+pb;nb+="&ExHQFlag="+ExHQFlag;var qb=parent.document.getElementById("contentGg");setTimeout(function(){qb.style.display="";},500);if(parent.GgParmStr!=nb){parent.GgParmStr=nb;if(typeof(qb.contentWindow.ClearGgHQInfo)=="function"){qb.contentWindow.ClearGgHQInfo();}
if(typeof(qb.contentWindow.QueryHQ)=="function"){qb.contentWindow.QueryHQ();}
if(typeof(qb.contentWindow.GgBtnInitClick)=="function"){qb.contentWindow.GgBtnInitClick();}}}
function AddHisSecu(rb,sb){sb=Number(sb);var tb={"Code":rb,"Setcode":sb};var ub=parent.HisSecu;for(var i=0;i<ub.length;i++){if(JSON.stringify(ub[i])==JSON.stringify(tb)){ub.splice(i,1);}}
ub.splice(0,0,tb);parent.HisSecu=ub;}
function LoadNextHQTab(n){var vb=MaxRowNum()-1;if(n==1){Startxh-=vb;}
else if(n==2){Startxh+=vb;}
if(Startxh<0){Startxh=0;return;}
var wb=HQListCol(listType,"WantCol");CallMultiHQ("ShowNewHQ",SetDomain,Startxh,wb,vb,SortType,ColType,ExHQFlag);}
function ClearDgHQData(){var xb=document.getElementById('list');xb.innerHTML="";dataCache=[];Startxh=0;tabScroll_X=0;}
function UpdateHQ(){var yb=HQListCol(listType,"WantCol");var zb=MaxRowNum()-1;if(zb>0){CallMultiHQ("ShowHQ",SetDomain,Startxh,yb,zb,SortType,ColType,ExHQFlag);}}
var HqInterval;function StartQueryHq(){var Ab=parent.HqRefrSec;if(Ab<=0)return;HqInterval=setInterval(function(){if(parent.HqRefrSec<=0)return;UpdateHQ();},Ab*1000);}
function StopQueryHq(){clearTimeout(HqInterval);}
if(parent.FlpmParmStr!=undefined&&parent.FlpmParmStr!=""){setTimeout(function(){QueryHQ();},200);StartQueryHq();}