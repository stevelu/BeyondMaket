function CreateCatalog(aa,ba,ca){var da=document.getElementById(aa);if(ba.length>0){var ea='';for(var i=0;i<ba.length;i++){var fa=0;var ga=0;for(var n in ba[i]){ga+=1;}
if(i==0){var ha=4;ea+='<table cellpadding="0" cellspacing="0" border="0" class="tabpic">';for(var n in ba[i]){var m=ba[i][n];fa+=1;if(fa==1){ea+='<tr>';}
ea+='<td';if(n.indexOf("space")==-1){ea+=' id="'+n+'"';}
ea+='>';ea+='<img src="'+m[1]+'" alt="'+m[0]+'" />';ea+='<br />';ea+='<span>'+m[0]+'</span>';ea+='</td>';if(fa%ha==0){if(fa==ga){ea+='</tr>';}
else{ea+='</tr><tr>';}}
else{if(fa==ga){var ia=Math.ceil(ga/ha)*ha-ga;for(var j=0;j<ia;j++){ea+='<td>&nbsp;</td>';}
ea+='</tr>';}}}
ea+='</table>';}
else{var ha=4;ga-=1;if(ga<ha){ha=ga;}
else{var ja=ga-ga%ha;var ka=0;var la="";for(var n in ba[i]){var m=ba[i][n];if(n!="func0"){ka+=1;if(ka<=ja){if(m!="&nbsp;"){la+=m;}
if(ka%ha==0){if(la.length>ha*4&&(la.length*18>360||document.documentElement.clientWidth<350)){ha=3;break;}
la="";}}}}}
ea+='<table cellpadding="0" cellspacing="0" border="0" class="tabfun">';ea+='<tr>';for(var n in ba[i]){var m=ba[i][n];if(n=="func0"){ea+='<td class="funname">'+m+'</td>';}
else{fa+=1;if(fa==1){ea+='<td class="funbox">';ea+='<table cellpadding="0" cellspacing="0" border="0">';ea+='<tr>';}
ea+='<td';if(n.indexOf("space")==-1){ea+=' id="'+n+'"';}
ea+='>';ea+=m;ea+='</td>';if(fa%ha==0){if(fa==ga){ea+='</tr></table></td>';}
else{ea+='</tr><tr>';}}
else{if(fa==ga){var ia=Math.ceil(ga/ha)*ha-ga;for(var j=0;j<ia;j++){ea+='<td>&nbsp;</td>';}
ea+='</tr></table></td>';}}}}
ea+='</tr>';ea+='</table>';if((i+1)<ba.length&&ba[i+1]["func0"]=="美股"){ea+='<div style="font-size:10px;margin-left:5px;">'+'实时美股由天汇财经提供'+'</div>';}}}
da.innerHTML=ea;if(typeof(ca)=="function"){$("[class='tabpic'] td, [class='funbox'] td").click(function(){ca(this.id);});}}}