function popUpMessage(){

    //alert(" The Salty Penguin would like your number between 1-10");
     let number = window.prompt("The Salty Penguin would like your number between 1-10");
     
     if(number <0 || number >10){
        
        window.prompt("Sorry entry is invalid try again");
     }
     
}

