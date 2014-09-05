function yAxis(aa){this.scalerOptions=aa;}
yAxis.prototype={initialize:function(ba){ba.scalerOptions=this.scalerOptions;},start:function(){var ca=this.ctx;ca.save();if(typeof this.scalerOptions.color=='string')ca.fillStyle=this.scalerOptions.color;ca.font=this.scalerOptions.font;ca.translate(this.scalerOptions.region.x,this.scalerOptions.region.y);if(this.scalerOptions.textBaseline)ca.textBaseline=this.scalerOptions.textBaseline;},end:function(){this.ctx.restore();},getX:function(i){if(this.scalerOptions.align=='left')return 0;var w=this.ctx.measureText(this.data[i]).width;return this.scalerOptions.region.width-w;},getY:function(i){if(i==0)return 0;if(i==this.data.length-1)return this.scalerOptions.region.height-this.scalerOptions.fontHeight;return(this.scalerOptions.region.height*i / (this.data.length - 1) - this.scalerOptions.fontHeight / 2);},paintItem:function(i,x,y){if(typeof this.scalerOptions.color=='function')this.ctx.fillStyle=this.scalerOptions.color(this.data[i]);this.ctx.fillText(this.data[i],x,y);}};function calcAxisValues(da,ea,fa,ga){var ha=da-ea;var ia=ha/(fa-1);var ja=[];if(typeof ga=='undefined')ga=toMoney;for(var i=0;i<fa;i++){ja.push(toMoney(da-i*ia));}
return ja;}