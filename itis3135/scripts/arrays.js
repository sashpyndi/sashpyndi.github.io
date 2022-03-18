const persons = [];
const salaries = [];

function addSalary(){

      let salary = document.getElementById("salary").value;
      if(isNaN(salary)){
        window.alert("Sorry, enter a number");
      }
      else if(salary == ""){
        window.alert("Please Enter your salary");
      }
      else{
        salaries.push(salary);
      }
      let person = document.getElementById("name").value;
      persons.push(person);
    
}

function displaySalary(){
    let table = '<table class = center<tr><td>Employee Name</td><td>Salary</td></tr>';
     
    for( i = 0; i<salaries.length; i++){
         table+="<tr><td>"+persons[i]+"</td><td>"+salaries[i]+"</td></tr>";
    }
    
    table +="</table>";
    
    document.getElementById("results_table").innerHTML = table;

  
   
}

function displayResults(){
     let avg;
     let highestSalary;
     let highestSalaryPerson;
    
     

}