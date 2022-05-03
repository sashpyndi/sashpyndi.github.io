
function submitHelpForm(){
 let name = document.getElementById("fname").value;
 let date = document.getElementById("date").value;
 let time = document.getElementById("appt").value;
  alert(name + ", Your total cost for this appointment is $2,000. We hope to see you soon on  " + date + " at "  + time);
}

function submitContactForm(){
    let name = document.getElementById("firstName").value;
    if(name = ""){
        alert("Please Fill in your name");
    }
    alert("I will get in contact with you soon " + name);
}

function submitTestingForm(){
  let name = document.getElementById("FirstName").value;
  let date = document.getElementById("Date").value;
  let time = document.getElementById("Appt").value;
  if(name == " "||date == ""|| time == ""){
      alert("Fill all the blanks");
  }
   alert(name + ", Your total cost for the test is  $1,000. We hope to see you soon on  " + date + " at "  + time);
}