



//form progress control
function updateFormProgress (newPoint) {
    let points = document.querySelectorAll(".points");
    let pBar = document.querySelectorAll(".progress-bar");
    for (let i = 0; i < newPoint; i++) {
        points[i].classList.add("active-point");
    }
    let prog = 0;
    if(newPoint == 1){
        prog = 0;
    } else if (newPoint == 2){
        prog = 25;
    }else if (newPoint == 3) {
        prog = 50;
    }else if(newPoint == 4){
        prog = 75;
    }else if(newPoint == 5){
        prog = 100;
    }else{
        prog = 0;
    }
    pBar.style.backgroundImage = 'linear-gradient';
    
}