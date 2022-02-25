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
   const factsArray = ["Penguins may huddle together for several reasons", "penguins evolved to fly underwater", "Penguins live in many locations and habitats", "Penguins feet are adapted to walk long distances", 
   "Male Penguins gift female penguins rocks in order to woo them"];

   let fact =  factsArray[Math.floor(Math.random() * factsArray.length)];
   document.getElementById("fact").innerHTML = fact;

}

function scriptTest(){
   alert("Hey my script is running");
}

function addNumber(){
   let num1 = document.getElementById("firstNumber").value;
   let num2 = document.getElementById("secondNumber").value;
    
   const sum = num1+num2;

   document.getElementById("endResult").innerHTML = sum;

}

function subtractNumber(){
   let num1 = document.getElementById("firstNumber").value;
   let num2 = document.getElementById("secondNumber").value;
    
   const difference = num1-num2;

   document.getElementById("endResult").innerHTML = difference;

}

function multiplyNumber(){
   let num1 = document.getElementById("firstNumber").value;
   let num2 = document.getElementById("secondNumber").value;
    
   const product = num1*num2;

   document.getElementById("endResult").innerHTML = product;

}

function divideNumber(){
   let num1 = document.getElementById("firstNumber").value;
   let num2 = document.getElementById("secondNumber").value;
    
   const quotient = num1/num2;

   document.getElementById("endResult").innerHTML = quotient;

}

onclick = "scriptTest();"
