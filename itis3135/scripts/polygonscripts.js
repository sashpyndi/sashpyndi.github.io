function popUpMessage(){
    
   let number = window.prompt("The Salty Penguin would like your number between 1-10");
   let shape;
    switch(number.value){
        case 1:
            shape = window.prompt("Thats a henagon");
            break;
         case 2:
             shape = "digon";
             break;
        case 3:
            shape = "trigon";
            break;
        case 4:
            shape = "tetragon";
            break;
        case 5:
            shape = "pentagon";
            break;
        case 6: 
             shape = "hexagon";
             break;
        case 7:
            shape = "heptagon";
            break;
        case 8:
            shape = "octogon";
            break;
        case 9:
            shape = "nonagon";
            break;
        case 10:
           shape = "decagon";
           break;
        default: 
        alert("Please enter a valid entry");
        popUpMessage();

    }
         
}

