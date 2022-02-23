function showDateAndTime(){
   let today = new Date(); 
   let month = tody.getMonth()+1;
   let year = today.getFullYear();
   let date = today.getDate();

   let time = today.getTime();

    let dateAndTime = "Today is " + today + month + year + date;

  document.getElementById("DateAndTime").innerHTML = dateAndTime;
} 

function scriptTest(){
   alert("Hey my script is running");
}

onclick = "scriptTest();"
