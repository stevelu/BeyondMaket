function PageHeadInit(n){var aa=$("[class='narrowhead']");var ba=$("[class='widehead']");var ca=$("#header").attr("name");if(ca=="index"){ba[0].innerHTML='通达信';aa[0].innerHTML='<div id="tdxico" class="tdxico"></div>';if(n==1){aa[0].innerHTML+='<div id="backbtn" class="backbtn" style="display:none;"><</div>';}
else if(n==2){aa[0].innerHTML+='<div id="backbtn" class="backbtn2" style="display:none;"></div>';}
aa[1].innerHTML='&nbsp;';aa[2].innerHTML='&nbsp;<img id="refrbtn" src="images/refresh.png" class="refrbtn" />';aa[3].innerHTML='<img id="refrbtn2" src="images/refresh.png" class="refrbtn" style="display:none;" />';if(n==1){aa[3].innerHTML+='<div id="search" class="search_main"><div class="search_circle"></div><div class="search_grip"></div></div>';}
else if(n==2){aa[3].innerHTML+='<img id="search" src="images/search.png" class="search" />';}}
else if(ca=="unitGg"){ba[0].innerHTML='<span id="topic" class="topic">&nbsp;</span><br /><span id="topic2" class="topic2">&nbsp;</span>';aa[0].innerHTML='';if(n==1){aa[0].innerHTML+='<div id="backbtn" class="backbtn"><</div>';}
else if(n==2){aa[0].innerHTML+='<div id="backbtn" class="backbtn2"></div>';}
aa[1].innerHTML='';if(n==1){aa[1].innerHTML+='<div id="search" class="search_main"><div class="search_circle"></div><div class="search_grip"></div></div>';}
else if(n==2){aa[1].innerHTML+='<img id="search" src="../images/search.png" class="search" />';}}
else if(ca=="unitCx"){ba[0].innerHTML='查询';aa[0].innerHTML='';if(n==1){aa[0].innerHTML+='<div id="backbtn" class="backbtn"><</div>';}
else if(n==2){aa[0].innerHTML+='<div id="backbtn" class="backbtn2"></div>';}
aa[1].innerHTML='&nbsp;';aa[2].innerHTML='&nbsp;';aa[3].innerHTML='&nbsp;';}
else if(ca=="unitZxkj"){ba[0].innerHTML='&nbsp;';aa[0].innerHTML='';if(n==1){aa[0].innerHTML+='<div id="backbtn" class="backbtn"><</div>';}
else if(n==2){aa[0].innerHTML+='<div id="backbtn" class="backbtn2"></div>';}
aa[1].innerHTML='&nbsp;';aa[2].innerHTML='&nbsp;';aa[3].innerHTML='<img id="refrbtn" src="../images/refresh.png" class="refrbtn" />';}
else if(ca=="unitKzkj"){ba[0].innerHTML='&nbsp;';aa[0].innerHTML='';if(n==1){aa[0].innerHTML+='<div id="backbtn" class="backbtn"><</div>';}
else if(n==2){aa[0].innerHTML+='<div id="backbtn" class="backbtn2"></div>';}
aa[1].innerHTML='&nbsp;<img id="refrbtn" src="../images/refresh.png" class="refrbtn" />';}}
PageHeadInit(2);