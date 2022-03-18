const persons = [];
const salaries = [];

function addSalary(){
      let salary = document.getElementById("salary").value;
       salaries.push(salary);
      let person = document.getElementById("name").value;
      persons.push(person);
     
      let statement = person + " has a salary of " + salary;
      document.getElementById("income").innerHTML = statement;
      
 

}

function displaySalary(){
    let table =  "<table <tr><td>Employee:</td><td>Salary</td></tr>";

  
   
}

function displayResults(){

}