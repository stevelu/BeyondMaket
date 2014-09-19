/*function change(Qc,Tc)
{
	//var Rc=document.getElementbyid("cateList").value;
	//var Sc=document.getElementbyid("head").value;
	var Rc="<%=cateList%>";
	var Sc="<%=head%>";
	var arrList = new Array();  
	  
    arrList = "<%=tickJson%>".replace('[','').replace(']','').split(',');  
  
    alert(arrList); 
    
	var Rc="<%=tickJson%>";
	var Sc="${tickJson}";
	alert(Rc); 
	alert(Sc); 
	
	var arrList = new Array();  
	  
    arrList = "${tickJson}".replace('[','').replace(']','').split(',');  
  
    alert(arrList); 
	
	document.getElementById("test").innerHTML =ParseInOut(Qc,Rc,Sc,Tc);
	}*/
function change(Qc,Tc)
    {


	var x=document.getElementById("tickJson123");
	//alert(x.innerHTML)
    var data=x.innerHTML;
	
	data=data.substring(0,data.length-1);
	data=data.substring(1,data.length);
	var object=eval("("+data+")");

	var list=object.List;
	var listHead=object.ListHead;
	
	pushData();
    	
    	//document.getElementById("test1").innerHTML =ParseInOut(list[0][4],list[0],listHead,Tc);
    	}

function pushData()
{
	var x=document.getElementById("tickJson123");
	var y=document.getElementById("kind123");
	//alert(x.innerHTML)
    var data=x.innerHTML;
    var kind=y.innerHTML;
	
	data=data.substring(0,data.length-1);
	data=data.substring(1,data.length);
	var object=eval("("+data+")");

	var list=object.List;
	var listHead=object.ListHead;
	var arr=TickArray(list,listHead,47);
	var dataHead=["Time","Now","NowVol","VolInStockDiff","InOutFlag"];
	for(i=0;i<arr.length;i++){
	 	var tmpArr = new Array();
	 	var idName;
	 	tmpArr = arr[i];
	 	if(kind.indexOf("null")==-1 && kind!="" && kind!="no")
	 		{
	 		    if(tmpArr["InOutFlag"].indexOf(kind)!=-1)
	 		    	{
					 	for(j=0;j<dataHead.length;j++){
							var tmp = tmpArr[dataHead[j]];
							idName='list_data_'+(i+1)+'_'+(j+1);
							document.getElementById(idName).innerHTML=	tmp;		 
					 	}	 		    	
	 		    	}	 		
	 		}
	 	else
	 		{
	 		for(j=0;j<dataHead.length;j++){
				var tmp = tmpArr[dataHead[j]];
				idName='list_data_'+(i+1)+'_'+(j+1);
				document.getElementById(idName).innerHTML=	tmp;		 
		 	}	 
	 		
	 		}

	}
	
}

function TickArray(Hc,Ic,Jc)
{//list,listhead,setcode
	var Kc=[];
	for(var i=0;i<Hc.length;i++){var Lc={};
		for(var j=0;j<Ic.length;j++)
			{var n=Ic[j];var m=Hc[i][j];
			if(n=="Second")
				{Lc["Time"]=ParseSecond(m);}
			else if(n=="NowVol"){Lc[n]=YiWanNum(m);}
			else if(n=="VolInStockDiff"){Lc[n]=YiWanNum(m);}
			else if(n=="InOutFlag"){Lc[n]=ParseInOut(m,Hc[i],Ic,Jc);}
			else{Lc[n]=m;}
		   }
Kc.push(Lc);}
return Kc;
}

function ParseInOut(Qc,Rc,Sc,Tc){
	var Uc;
	var Vc=GetBigSclx(Tc);
	if(Vc==3||Vc==12)
	{
	var Wc=inArray("NowVol",Sc);
var Xc=inArray("VolInStockDiff",Sc);
var Yc=Rc[Wc];
var Zc=Rc[Xc];
var $c=Number(Yc);
var ad=Number(Zc);
if(Tc==47||Tc==7||Tc==8)
	{$c=2*Number(Yc);ad=2*Number(Zc);}
var bd=Math.floor(Qc/10000);
if($c==ad){Uc="双开";}
else if($c+ad==0){Uc="双平";}
else if(ad==0&&bd==0){Uc="多换";}
else if(ad==0&&bd==1){Uc="空换";}
else if(ad==0){Uc="换手";}
else if(ad>0&&bd==0){Uc="多开";}
else if(ad>0&&bd==1){Uc="空开";}
else if(ad>0){Uc="开仓";}
else if(ad<0&&bd==0){Uc="空平";}
else if(ad<0&&bd==1){Uc="多平";}
else if(ad<0){Uc="平仓";}
Uc+="|"+bd;}
else{if(Qc==0){Uc="B";Uc+="|"+0;}
else{Uc="S";Uc+="|"+1;}}
return Uc;}

function testFor(){ 
	document.getElementById("test").innerHTML ="222222";
}

function ParseSecond(n){var Mc=Math.floor(n/3600);var Nc=Math.floor((n-Mc*3600)/60);if(Nc<10){Nc="0"+Nc;}
var Oc=n-Mc*3600-Nc*60;if(Oc<10){Oc="0"+Oc;}
var Pc=Mc+":"+Nc;return Pc;}