
function submitHelpForm(){
 let name = document.getElementById("fname").value;
 let date = document.getElementById("date").value;
 let time = document.getElementById("appt").value;
  alert(name + ", Your total cost for this appointment is $2,000. We hope to see you soon on  " + date + " at "  + time);
}

function submitContactForm(){
    let name = document.getElementById("fname").value;
    alert("I will get in contact with you soon " + name);
}