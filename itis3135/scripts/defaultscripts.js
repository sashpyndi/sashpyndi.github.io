function showDateAndTime(){
   let today = new Date(); 
   let month = today.getMonth()+1;
   let year = today.getFullYear();
   let date = today.getDate();

   let time = today.getTime();

  

  document.getElementById("DateAndTime").innerHTML = today;
} 

function scriptTest(){
   alert("Hey my script is running");
}

onclick = "scriptTest();"
