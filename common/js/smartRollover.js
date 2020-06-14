(function(onLoad) {
    try {
        window.addEventListener('load', onLoad, false);
    } catch (e) {
        window.attachEvent('onload', onLoad);
    }
})(function() {
    var over = function() { this.src = this.src.replace('_off.', '_on.'); };
    var out  = function() { this.src = this.src.replace('_on.', '_off.'); };
    var img = document.getElementsByTagName('img');
    for (var i = 0, l = img.length; i < l; i++) {
        if (!img[i].src.match(/_off\./)) continue;
        img[i].onmouseover = over;
        img[i].onmouseout  = out;
    }
});
