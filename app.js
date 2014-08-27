var main = function() {
    $(document).keypress(function(e) {
        var c = String.fromCharCode(e.keyCode);
        if (c === 'c') {
            $('.contact-links').toggle();
        }
    });
}

$(document).ready(main);
