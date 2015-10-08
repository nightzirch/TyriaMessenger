var bgid = 0;
var fgid = 0;

if(document.querySelector("#svgdata") == null) {
    $("#mainDiv").before('<div id="svgdataParent"></div>');
    $("#svgdataParent").append('<button onclick="nextBackground()">Next background</button>');
    $("#svgdataParent").append('<button onclick="nextForeground()">Next foreground</button>');
    $("#svgdataParent").append('<button onclick="selectSVGData()">Select text</button><br>');
    $("#svgdataParent").append('<button onclick="prevBackground()">Previous background</button>');
    $("#svgdataParent").append('<button onclick="prevForeground()">Previous foreground</button><br>');
    $("#svgdataParent").append('<button onclick="resetBackground()">Reset background</button>');
    $("#svgdataParent").append('<button onclick="resetForeground()">Reset foreground</button><br>');
    $("#svgdataParent").append('<h1 id="svgdatatitle"></h1><br>');
    $("#svgdataParent").append('<p id="svgdata"></p>');
}

function getBackgroundDataWithID(id) {
    $("#svgdatatitle").text("BackgroundID: " + id);

    var pre = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
    var parent = document.querySelector('[data-bgid="' + id + '"]');

    if (parent != null) {
        var svg = parent.querySelector("svg");
        $("#svgdata").text(pre + svg.outerHTML);
    } else {
        $("#svgdata").text("");
    }
}

function getForegroundDataWithID(id) {
    $("#svgdatatitle").text("ForegroundID: " + id);

    var pre = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
    var parent = document.querySelector('[data-fgid="' + id + '"]');

    if (parent != null) {
        var svg = parent.querySelector("svg");
        $("#svgdata").text(pre + svg.outerHTML);
    } else {
        $("#svgdata").text("");
    }
}

function selectSVGData() {
    selectText('svgdata');
}

function nextBackground() {
    bgid++;
    getBackgroundDataWithID(bgid);
    selectSVGData();
}

function nextForeground() {
    fgid++;
    getForegroundDataWithID(fgid);
    selectSVGData();
}

function prevBackground() {
    bgid--;
    getBackgroundDataWithID(bgid);
    selectSVGData();
}

function prevForeground() {
    fgid--;
    getForegroundDataWithID(fgid);
    selectSVGData();
}

function resetBackground() {
    bgid = 0;
}

function resetForeground() {
    fgid = 0;
}

function selectText(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}
