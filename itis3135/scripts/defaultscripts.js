function DateAndTime(){
   let today = new Date();
   let month = today.today.toLocaleString('default', { month: 'long' });
   let year = today.getFullYear();
   let date  = today.getDate();
   let day = today.getDay();
   let hours = today.getHours();
   let minutes = today.getMinutes();

   let dateAndTime = "Today is "+ hours + " : " + minutes +  " on "+ day + " , " + date + " " +  month + " , " + year;

         
 document.getElementById("hours").innerHTML = dateAndTime;

}



function scriptTest(){
   alert("Hey my script is running");
}

onclick = "scriptTest();"
