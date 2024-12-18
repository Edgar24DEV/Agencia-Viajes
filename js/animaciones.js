window.addEventListener("load", function () {
    let art = document.getElementsByClassName("idestinos");
    anim1(art);
});

function anim1(art) {
    let art1 = art[0];
    art1.classList.add("animado");
    PrefixedEvent(art1, "animationend", () => anim2(art));
}

function anim2(art) {
    let art2 = art[1];
    art2.classList.add("animado");
    PrefixedEvent(art2, "animationend", () => anim3(art));
}

function anim3(art) {
    let art3 = art[2];
    art3.classList.add("animado");
    PrefixedEvent(art3, "animationend", () => anim4(art[3]));
}

function anim4(art) {
    art.classList.add("animado");
}

// PrefixedEvent function
var pfx = ["webkit", "moz", "MS", "o", ""];
function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (pfx[p] == "" || pfx[p] == "o") type = type.toLowerCase();
        element.addEventListener(pfx[p] + type, callback, false);
    }
}
