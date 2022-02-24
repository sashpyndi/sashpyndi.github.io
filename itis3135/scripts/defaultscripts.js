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
   

   
   let dateAndTime = "Today is "+ hours + ": " + minutes +  " on "+ day + " , " + date + " " +  month + " , " + year;
   document.getElementById("hours").innerHTML = dateAndTime;

}

function GreetingTheUser(){
   let name  = document.getElementById("firstAndLastName").value;
   let feeling =  document.getElementById("feeling").value;
    
   let prompt = "The Sashpyndi Industries Welcomes You, " + name + "! " + " Were glad you are doing " + feeling;
   document.getElementById( "textToDisplayUser").innerHTML = prompt;
}
 
function randomFactGenerator(){
   
}

function scriptTest(){
   alert("Hey my script is running");
}

onclick = "scriptTest();"
