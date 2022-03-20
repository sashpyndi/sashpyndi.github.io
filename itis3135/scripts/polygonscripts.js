function popUpMessage() {
    let numSides = prompt("The Salty Penguin would like your number between 1-10");
    validateEntry(numSides);
}

function validateEntry(numberOfSides) {

    if (isNaN(numberOfSides)) {
        alert("Sorry, not a number. Please enter a number between 1-10");
        popUpMessage();
    }
    if (numberOfSides == "") {
        alert("Sorry, not a number. Please enter a number between 1-10");
        popUpMessage();

    }
    else {
        let num = Math.abs(numberOfSides);
        let num2 = Math.round(num);
        if (num2 > 10) {
            alert("Sorry Invalid Entry. Please enter a number between 1 and 10");
            popUpMessage();
        }
        else {
            alert(getShape(num2));
        }
    }
}
function getShape(nums) {
 
    switch (nums) {
        case 1:
            alert("Thats a henagon");
            break;
        case 2:
            alert("Thats a digon");
            break;
        case 3:
            alert("Thats a trigon");
            break;
        case 4:
            alert("Thats a tetragon");
            break;
        case 5:
            alert("Thats a pentagon");
            break;
        case 6:
            alert("Thats is a hexagon");
            break;
        case 7:
            alert("Thats is a heptagon");
            break;
        case 8:
            alert("Thats is an Octogon");
            break;
        case 9:
            alert("thats is a nonagon");
            break;
        case 10:
            alert("thats a decagon")
            break;
        default:
            alert(" Sorry, not a number. Please enter a number between 1-10");
            popUpMessage();
    }

}



/*The work submitted here is my work- I have not copied  and pasted code into these pages. I have gotten help from these people: no one and these sites: w3 schools, stack overflow.- Sashank 
Pyndi  11:08 AM */ 
   
