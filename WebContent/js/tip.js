function Tip(aa){extendObject(aa,this);}
Tip.prototype={getElementId:function(){return this.canvas.id+'_tip';},_getRightLimit:function(){return this.canvasRange.x+this.canvasRange.width;},_getLeftLimit:function(){return this.canvasRange.x;},_getTopLimit:function(){return this.canvasRange.y;},_getBottomLimit:function(){return this.canvasRange.y+this.canvasRange.height;},show:function(ba,ca){if(ba)this.relativePoint=ba;if(ca)this.innerHTML=ca;var da=$id(this.getElementId());var ea=this.size;var fa=this.offsetToPoint;var ga=this.position;var ba=this.relativePoint;var ha=getPageCoord(this.canvas);var y=ga.y||ba.y;var x=ga.x||ba.x;var ia=0;var ja=0;if(ga.x)ia=ga.x;else{if(da){var ka=parseInt(da.style.left)-ha.x;if(ka>x){if(fa+x+ea.width>this._getRightLimit()){ka=x-fa-ea.width;}
else{ka=x+fa-9;}}
else{if(x-fa-ea.width>this._getLeftLimit()){ka=x-fa-ea.width;}
else{ka=x+fa-9;}}
ia=ka;}
else{ia=x+fa;if(ia>this._getRightLimit()){ia=x-fa-ea.width;}}}
if(ga.y)ja=ga.y;else{if(da){var la=parseInt(da.style.top)-ha.y;if(la>y){if(fa+y+ea.height>this._getBottomLimit()){la=y-fa-ea.height;}
else{la=y+fa;}}
else{if(y-fa-ea.height>this._getTopLimit()){la=y-fa-ea.height;}
else{la=y+fa;}}
ja=la;}
else{ja=y+fa;if(ja>this._getBottomLimit()){ja=y-fa-ea.height;}}}
if(!da){da=document.createElement('DIV');da.id=this.getElementId();var ma=this.opacity||100;da.style.cssText='-moz-opacity:.'+ma+'; filter:alpha(opacity='+ma+'); opacity:'+(ma/100)+';line-height:18px;font-family:Arial,"宋体";font-size:9pt;padding:4px;';da.style.position='absolute';da.style.zIndex=4+(this.canvas.style.zIndex||1);da.style.backgroundColor='white';da.style.border='1px solid gray';da.style.width=this.size.width+'px';da.style.height=this.size.height+'px';if(this.cssClass)da.className=this.cssClass;if(this.style!=undefined){da.style.backgroundColor=this.style.backgroundColor;da.style.border='1px solid '+this.style.borderColor;da.style.color=this.style.textColor}
document.body.appendChild(da);}
ia=ha.x+ia;ja=ha.y+ja;da.style.left=ia+'px';da.style.top=ja+'px';da.style.display='block';da.innerHTML=this.innerHTML;},hide:function(){var o=$id(this.getElementId());if(o){document.body.removeChild(o);}},update:function(na,oa,pa,qa){this.relativePoint=na;this.innerHTML=oa;this.canvasRange=pa;this.position=qa;this.show();}};