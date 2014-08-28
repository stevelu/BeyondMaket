var dashSize=2;function Painter(aa,ba,ca){this.canvas=document.getElementById(aa);if(!this.canvas.getContext)return;this.ctx=this.canvas.getContext('2d');this.data=ca;this.paintImplement=ba;this.width=this.canvas.width;this.height=this.canvas.height;}
Painter.prototype={paint:function(){var da=this.paintImplement;var ea=this.data;var fa=this.ctx;if(typeof da.initialize=='function')da.initialize(this);if(da.start)da.start.call(this);if(typeof da.paintItems=='function'){da.paintItems.call(this);}
else{var ga=((typeof da.getDataLength=='function')?da.getDataLength.call(this):this.data.length);for(var i=0;i<ga;i++){var x=da.getX?da.getX.call(this,i):undefined;var y=da.getY?da.getY.call(this,i):undefined;da.paintItem.call(this,i,x,y);}}
if(da.end)da.end.call(this);},drawHLine:function(ha,x0,y0,w,ia,ja){var ka=this.ctx;ka.strokeStyle=ha;y0=Math.floor(y0);if(ja&&ja=='dashed'){var la=0;do{if(la+dashSize*2>w){this.drawHLine(ha,la,y0,dashSize/2,ia,'solid');}
else{this.drawHLine(ha,la,y0,dashSize,ia,'solid');}
la+=dashSize*2;}
while(la<w);}
else{ka.beginPath();ka.moveTo(x0,y0);ka.lineTo(x0+w,y0);ka.stroke();}},drawVLine:function(ma,x0,y0,h,na,oa){var pa=this.ctx;pa.strokeStyle=ma;x0=Math.floor(x0);if(oa&&oa=='dashed'){var qa=0;do{if(qa+dashSize*2>h){this.drawVLine(ma,x0,qa,dashSize/2,na,'solid');}
else{this.drawVLine(ma,x0,qa,dashSize,na,'solid');}
qa+=dashSize*2;}
while(qa<h);}
else{pa.beginPath();pa.moveTo(x0,y0);pa.lineTo(x0,y0+h);pa.stroke();}},setData:function(ra){this.data=ra;},setPainterImplement:function(sa){this.paintImplement=sa;}};