function loadTPI(url) {
    var script = document.createElement('script');
    script.src = url;
    var head = document.getElementsByTagName('head')[0],
        done = false;
    head.appendChild(script);
    script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
            done = true;
            script.onload = script.onreadystatechange = null;
            head.removeChild(script);
        }
    };
}

setTimeout(function() {
    if (typeof Ecwid !== "undefined" && window.EA_TPI_SCRIPT_INJECTED === undefined) {
        Ecwid.OnPageLoaded.add(function(page) {
            loadTPI('../../vendor/tiktok-pixel-dev/get_script/' + Ecwid.getOwnerId().toString() + '.js');
            window.EA_TPI_SCRIPT_INJECTED = true;
        });
    }
}, 300);