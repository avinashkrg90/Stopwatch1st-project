let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

let hourDisplay = document.getElementById("hourDisplay");
let minuteDisplay = document.getElementById("minuteDisplay");
let secondDisplay = document.getElementById("secondDisplay");

function incrementStopWatch(){
    seconds ++;
    if (seconds == 60){
        seconds = 0;
        minutes ++;
        if (minutes == 60){
            minutes = 0;
            hours ++;
        }
    }
    displayTime(hours, minutes, seconds);
}

function displayTime(hh, mm, ss){ 
    let h = hh < 10? "0" + hh : hh;
    let m = mm < 10? "0" + mm : mm;
    let s = ss < 10? "0" + ss : ss;

    hourDisplay.innerHTML = h;
    minuteDisplay.innerHTML = m;
    secondDisplay.innerHTML = s;
}

function startWatch(){
    if (timer!=null){
        clearInterval(timer);
    }
    timer = setInterval(incrementStopWatch, 1000);
}

function stopWatch(){
    clearInterval(timer);
}

function resetWatch(){
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime(0, 0, 0);
    clearInterval(timer);
}

