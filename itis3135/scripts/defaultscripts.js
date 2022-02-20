function showDateAndTime(){
   let currentdate = new Date(); 
   currentdate.getMonth();
   currentdate.getDay();
   
   let dateAndTime = "Today is " +  currentdate + " on " + currentdate.getMonth() + currentdate.getDay();

} 

function scriptTest(){
   alert("Hey my script is running");
}

onclick = "scriptTest();"
