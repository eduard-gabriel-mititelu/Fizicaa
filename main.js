let r = document.getElementById("r");
let l = document.getElementById("l");
let s = document.getElementById("s");
let lung = document.getElementById("lung");
let surf = document.getElementById("surf");

let pv = 0.016;

let fontBase = 15; 
let fontStep = 5;
let maxSteps = 10; 
let b = 5;

function showMenu(){
    document.getElementById('asideId').classList.toggle('show');
}

function getFontSize(value, maxValue) {
    let step = Math.round((value / maxValue) * maxSteps);
    return fontBase + step * fontStep;
}

function getFontSize2(value, minValue) {
    let step = Math.round((value / minValue) * maxSteps);
    if (fontBase - step * fontStep <= 0) {
        return fontBase - step * fontStep + step * fontStep + 10;
    } else return fontBase + step * fontStep + 15;
}

lung.oninput = function() {
    let lv = parseFloat(lung.value);  
    let sv = parseFloat(surf.value);  

    let maxLung = lung.max;
    let newFontSize = getFontSize(lv, maxLung);

    r.style.fontSize = newFontSize + "px";
    l.style.fontSize = newFontSize + "px";

    document.getElementById("bl").innerHTML = this.value;
    document.getElementById("rez").innerHTML = pv * (lv / 2) / (sv * sv);
}

surf.oninput = function() {
    let lv = parseFloat(lung.value);  
    let sv = parseFloat(surf.value);  

    let minSurf = surf.max;
    let newFontSize = getFontSize2(sv, minSurf);
    let newR = getFontSize(sv, minSurf);

    if (newFontSize <= 0) {
        newFontSize = 20; 
    }

    r.style.fontSize = newR + "px";
    s.style.fontSize = newFontSize + "px";

    document.getElementById("bs").innerHTML = this.value;
    document.getElementById("rez").innerHTML = pv * (lv / 2) / (sv * sv);
}
