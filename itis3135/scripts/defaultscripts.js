function DateAndTime(){
   let today = new Date();
   let month = today.getMonth();
   let date  = today.getDate();
   let day = today.getDay();
   let hours = today.getHours();
   let minutes = today.getMinutes();

         
 document.getElementById("hours").innerHTML = date;

}

function scriptTest(){
   alert("Hey my script is running");
}

onclick = "scriptTest();"
