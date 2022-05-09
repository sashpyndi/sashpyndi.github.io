//<!-- jQuery call to the accordion() method. -->
$(document).ready(function () {
    $("#tabs").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content",
        animate: true
    });
});