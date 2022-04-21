$(document).ready(function() {
  $('#nav_list li').on('click',function(){
    $.ajax({
        type: "get",
        url: "toobin.json"+
        "sorkin.json"+
         "sampson.json"+
         "chua.json",

        beforeSend: function() {
            $("main").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("main").html("");
            $.each(data,function(){
               $.each(this,function(key,value){
                   $("main").append(
                       value.month + value.title + value.speaker + value.image+ value.text
                       
                   );
               });
            });
        }
    });
  });
}); // end ready