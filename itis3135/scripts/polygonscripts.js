function popUpMessage(){

    //alert(" The Salty Penguin would like your number between 1-10");
    let input;
    let prompt = prompt("The Salty Penguin would like your nujmber between 1-10");
     if(prompt <1 || prompt > 10){
        input = "Sorry invalid entry";
     }
     document.getElemendById("prompt").innerHTML= text;
}

