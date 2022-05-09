
function submitHelpForm(){
 let name = document.getElementById("fname").value;
 let lname = document.getElementById("lname").value;
 let phoneNumber = document.getElementById("phoneNumber").value;
 let emailAddress = document.getElementById("emailAddress").value;
 let reason = document.getElementById("reason").value;
 let date = document.getElementById("date").value;
 let time = document.getElementById("appt").value;
 if(name == ""||lname == ""||phoneNumber == ""||emailAddress== "" || date == ""|| time ==""|| reason == "" ){
     window.alert("Please fill all the blanks");
 }
 else{
  window.alert(name + ", Your total cost for this appointment is $2,000. We hope to see you soon on  " + date + " at "  + time);
 }
}

function submitContactForm(){
    let name = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let subject = document.getElementById("subject").value;
    if(name == "" || lastName == "" || subject == ""){
        alert("Please Fill all the blanks");
    }
    else{
    window.alert("I will get in contact with you soon " + name);
    }
}

function submitTestingForm(){
  let name = document.getElementById("FirstName").value;
  let lastName = document.getElementById("LastName").value;
  let date = document.getElementById("Date").value;
  let time = document.getElementById("Appt").value;
  if(name == " "||date == ""|| time == "" || lastName == ""){
      alert("Please Fill all the blanks");
  }
  else{
      
      window.alert(name + ", Your total cost for the test is  $1,000. We hope to see you soon on  " + date + " at "  + time);
  }
}