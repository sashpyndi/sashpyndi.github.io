function getDateAndTime(){
   let today = new Date();
   let month = today.getMonth();
   let date  = today.getDate();
   let day = today.getDay();
   let hours = today.getHours();
         
 document.getElementById("hours").outerHTML = hours;

}

function scriptTest(){
   alert("Hey my script is running");
}

onclick = "scriptTest();"
