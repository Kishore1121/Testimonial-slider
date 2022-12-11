var slide=document.getElementById("slide");
var uparrow=document.getElementById("uparrow");
var downarrow=document.getElementById("downarrow");

let x=0;

uparrow.onclick = function() {
    if(x > -900){
        x=x-300;
        slide.style.top= x +"px";
    }
}

downarrow.onclick = function() {
    if(x < 0){
        x=x+300;
        slide.style.top= x +"px";
    }
}