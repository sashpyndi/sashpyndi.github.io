function showDateAndTime(){
   let today = new Date(); 
   let month = tody.getMonth()+1;
   let year = today.getFullYear();
   let date = today.getDate();
   

   let current_date = "Today is  " + month + date + year;

  
   
   let dateAndTime = "Today is " +  currentdate + " on " + currentdate.getMonth() + currentdate.getDay();
  document.getElementById(showDateAndTime).innerHTML = dateAndTime;
} 

function scriptTest(){
   alert("Hey my script is running");
}

onclick = "scriptTest();"
