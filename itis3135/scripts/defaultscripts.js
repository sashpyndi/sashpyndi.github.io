function DateAndTime(){
   let today = new Date();
   const monthName = ["January", "February", "March", "April", "May", "June", "July" ,"August", "September", "October", "November", "December"];
   let month = monthName[today.getMonth()];
   let year = today.getFullYear();
   let date  = today.getDate();
   const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   let day = weekday[today.getDay()];
   let hours = today.getHours();
   let minutes = today.getMinutes();
   
   let formatTime = hour>12 ? "PM":"AM";
   
   let dateAndTime = "Today is "+ hours + ": " + minutes +  " on "+ day + " , " + date + " " +  month + " , " + year;

         
 document.getElementById("hours").innerHTML = dateAndTime;

}



function scriptTest(){
   alert("Hey my script is running");
}

onclick = "scriptTest();"
