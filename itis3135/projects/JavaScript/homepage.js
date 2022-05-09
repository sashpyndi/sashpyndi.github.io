$(document).ready(function () {

    $.ajax({
        type: "get",
        url: "homepage.json",

        beforeSend: function () {
            $("#Homepage").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            $("#Homepage").html("");
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#Homepage").append(
                        "<img src = " + value.image + ">" +
                        "<p>" + value.caption + "<p>"


                    );
                });
            });
        }
    });

});