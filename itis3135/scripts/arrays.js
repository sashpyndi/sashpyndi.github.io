const persons = [];
const salaries = [];

function addSalary(){

      let salary = parseFloat(document.getElementById("salary").value);
      let person = document.getElementById("name").value;
      if(isNaN(salary)){
        window.alert("Sorry, enter a number");
      }
      else if(salary == ""){
        window.alert("Please Enter your salary");
      }
      else{
        salary = parseFloat(salary);
        salaries.push(salary);
        persons.push(person);
      }
     
 
    
}



function displayResults(){
     let avg=0;
     let highestSalary=0;
     let highestSalaryPerson=null;
     let total=0;
    
     

    
     for( var i=0; i<salaries.length; i++){
         total +=salaries[i];
     }
     let salaryLength = salaries.length;
     avg = (total/salaryLength);
    
   for(var i=0; i<salaries.length; i++){
     if(salaries[i]>highestSalary){
         highestSalary = salaries[i] ;
         highestSalaryPerson = persons[i];
     }
    
   }
   document.getElementById("results").innerHTML = "The highest paid employee is " +  highestSalaryPerson + " with a salary of " + highestSalary +
   " The average of all the employees is   " + avg;
}
function displaySalary(){
    let table = '<table class = center<tr><td>Employee Name</td><td>Salary</td></tr>';
     
    for( var i = 0; i<salaries.length; i++){
         table+="<tr><td>"+persons[i]+"</td><td>"+salaries[i]+"</td></tr>";
    }
    
    table +="</table>";
    
    document.getElementById("results_table").innerHTML = table;

  
   
}