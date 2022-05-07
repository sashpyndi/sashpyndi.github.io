$(document).ready(function(){
   
       
    $.ajax({
        type: "get",
        url: "std's.json",

        beforeSend: function() {
            $("#STD").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#STD").html("");
            $.each(data,function(){
               $.each(this,function(key,value){
                   $("#STD").append(
                  "<h3>" + value.name + "<h3>"+
                  "<img src = " + value.image + ">"
                       
                   );
               });
            });
        }
    });
  
});