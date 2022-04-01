let images = [
 "images/IMG_3882.JPG",
 "images/IMG_4711.jpeg",
 "images/IMG_9185.JPG",
 "images/IMG_9279.jpg",
 "images/IMG_9443.JPG"


];


let next = document.getElementById("next");
let prev = document.getElementById("prev");
let img = document.getElementById("image");

next.addEventListener("click", ()=>{
    let source = img.getAttribute("src");
    let index = images.indexOf(source);

    if(index === images.length-1){
        img.setAttribute("src", images[0]);
    }
    else{
        img.setAttribute("src", images[index+1]);
    }

});


prev.addEventListener("click", ()=>{
    let source = img.getAttribute("src");
    let index = images.indexOf(source);

    if(index === 0){
        img.setAttribute("src", images[images.length-1]);

    }
    else{
        img.setAttribute("src", images[index-1]);
    }

});