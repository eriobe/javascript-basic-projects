const buttons = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

let counter=0;
buttons.forEach(function(btn){
    btn.addEventListener("click", function(e){
       let css = e.currentTarget.classList;
       if (css.contains("decrease")) {
          counter--;
       }
       else if (css.contains("increase")) {
           counter++;
       }
       else if (css.contains("reset")) {
           counter=0;
    }
    value.style.color =setValueColor();
    value.textContent=counter;
    })
})

function setValueColor(){
    let color = "#red";
    if (counter < 0) {
        return "red";
    }
    else if(counter===0){
        return "#222";
    }

    return "blue";
}