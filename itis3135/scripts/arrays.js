const persons = [];
const salaries = [];

function addSalary(){

      let salary = document.getElementById("salary").value;
      let person = document.getElementById("name").value;
      if(isNaN(salary)){
        window.alert("Sorry, enter a number");
      }
      else if(salary == ""){
        window.alert("Please Enter your salary");
      }
      else{
        salaries.push(salary);
        persons.push(person);
      }
     
 
    
}



function displayResults(){
     let avg;
     let highestSalary;
     let highestSalaryPerson;
     let total;
     

    
     for(i=0; i<salaries.length; i++){
         total +=salaries[i];
     }

     avg = total/salaries.length;
     document.getElementById()
   for(i=0; i<salaries.length; i++){
     if(salaries[i]>salaries[i+1]){
         highestSalary = salaries[i];
         highestSalaryPerson = persons[i];
     }
     else{
         highestSalary = salaries[i+1];
         highestSalaryPerson = persons[i+1];
     }
   }
   document.getElementById("results").innerHTML = "The highest paid employee is " +  highestSalaryPerson + " with a salary of " + highestSalary 
   " The average of all the employees is   " + avg;
}
function displaySalary(){
    let table = '<table class = center<tr><td>Employee Name</td><td>Salary</td></tr>';
     
    for( i = 0; i<salaries.length; i++){
         table+="<tr><td>"+persons[i]+"</td><td>"+salaries[i]+"</td></tr>";
    }
    
    table +="</table>";
    
    document.getElementById("results_table").innerHTML = table;

  
   
}