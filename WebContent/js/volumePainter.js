function volumePainter(aa){this.options=aa;this.barWidth=aa.barWidth;this.spaceWidth=aa.spaceWidth;}
volumePainter.prototype = { initialize: function (ba) { ba.options = this.options; ba.barWidth = this.barWidth; ba.spaceWidth = this.spaceWidth; }, getDataLength: function () { return this.options.getDataLength.call(this); }, getX: function (i) { return this.options.region.x + i * (this.barWidth + this.spaceWidth); }, start: function () {
    var ca = this.ctx; var da = this.options; var ea = da.region; ca.save(); var fa = 0; for (var i = 0; i < this.data.items.length; i++) { var ga = this.data.items[i]; fa = Math.max(fa, ga.volume); }
    this.maxVolume = fa;
}, end: function () { this.ctx.restore(); }, getY: function (i) { var ha = this.options.region.y + (this.maxVolume - this.data.items[i].volume) * this.options.region.height / this.maxVolume; return ha; }, paintItem: function (i, x, y) {
    var ia = this.ctx; ia.beginPath(); ia.rect(x, y, this.barWidth, this.options.region.y + this.options.region.height - y); var ja = this.data.items[i].price; var ka; if (i == 0) { ka = this.data.preClose; }
    else { ka = this.data.items[i - 1].price }
    var la = this.options.bar.riseColor; var ma = this.options.bar.fallColor; var na = ja > ka ? la : ma; ia.fillStyle = na; ia.fill();
} 
};