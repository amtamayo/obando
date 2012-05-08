//custom tooltip overlay; inherits google.maps.OverlayView

function CustomMapOverlay(opts) {
	opts = opts || {};
	this.latlng_ = null;
	this.text_ = null;
	this.div_ = null;
	this.style_ = opts.style || {};
}

CustomMapOverlay.prototype = new google.maps.OverlayView();

CustomMapOverlay.prototype.onAdd = function () {
	var div = document.createElement('DIV');
	div.style.border = "1px solid #999999";
	div.style.opacity = ".85";
	div.style.position = "absolute";
	div.style.whiteSpace = "nowrap";
	div.style.backgroundColor = "#ffffff";
	div.style.fontSize = '13px';
	div.style.padding = '10px';
	div.style.fontWeight = 'bold';
	div.style.margin = '10px';
	div.style.lineHeight = '1.3em';
	div.style.visibility = "hidden";

	if (this.style_) {
		for (var x in this.style_) {
			if (this.style_.hasOwnProperty(x)) {
				div.style[x] = this.style_[x]
			}
		}
	}
	this.div_ = div;

	var panes = this.getPanes();
	panes.floatPane.appendChild(div);
	google.maps.event.trigger(this, 'ready');
};

CustomMapOverlay.prototype.draw = function () {
	var overlayProjection = this.getProjection();
	if (overlayProjection && this.latlng_) {
		var sw = overlayProjection.fromLatLngToDivPixel(this.latlng_);
		var div = this.div_;
		div.style.left = sw.x + 'px';
		div.style.top = (sw.y - 20) + 'px';
		div.innerHTML = this.text_;
	}
};

CustomMapOverlay.prototype.onRemove = function () {
	this.div_.parentNode.removeChild(this.div_);
	this.div_ = null;
};

CustomMapOverlay.prototype.hide = function () {
	if (this.div_) {
		this.div_.style.visibility = "hidden";
	}
};

CustomMapOverlay.prototype.show = function (latlng, text) {
	if (this.div_) {
		this.div_.style.visibility = "visible";
	}
	if (latlng || text) {
		this.latlng_ = latlng || this.latlng_;
		this.text_ = text;
		this.draw();
	}
};