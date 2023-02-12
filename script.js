document.getElementById("phone").onkeydown = function(e) {
    var key = e.key;
    var keyCode = e.keyCode;

    if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') ||
    (keyCode >= 65 && keyCode <= 90)) {
        e.preventDefault();
    }
}
