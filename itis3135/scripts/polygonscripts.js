function popUpMessage(){
    
   let number = window.prompt("The Salty Penguin would like your number between 1-10");
   let shape;
    switch(number){
        case "1":
            shape = "henagon";
            break;
         case "2":
             shape = "digon";
             break;
        case "3":
            shape = "trigon";
        case "4":
            shape = "tetragon";
        case "5":
            shape = "pentagon";
        case "6": 
             shape = "hexagon";
        case "7":
            shape = "heptagon";
        case "8":
            shape = "octogon";
        case "9":
            shape = "nonagon";
        case "10":
           shape = "decagon";
        default: alert("Please enter a valid entry");

    }
         
}

