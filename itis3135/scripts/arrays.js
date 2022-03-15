const persons = [];
const salaries = [];

function addSalary(){
  let salary = document.getElementyById("salary").value;

  let statement = "Your salary is " + salary;
  document.getElementById("income").innerHTML = statement;
}
