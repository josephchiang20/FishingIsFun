const options = document.getElementById("options");
const fishing = document.getElementById("fishing");
const timer = document.getElementById("timer");
const cats = document.getElementById("cats");
const back = document.getElementById("back");
const SetTimer = document.getElementById("SetTimer");
const ResetTimer = document.getElementById("ResetTimer");

let motivational = ["You're fishing good.", "You're ameozing!", "You're reeling well!", "Meow! Moew!", "This window is fishy...", 
"I wonder what the world is like beyond this window.", "Study with meow!", "We'll catch those fish!", "Study on!", "Fish on!",
"You're doing ameowzing!", "I'm proud of you, meow.", "Even though I'm stuck in here, I still believe in you.", "We're in this boat together.",
"We'll get to the end of this ocean!", "The Cs are harsh today, arr!"];

if (options != null) {
    options.addEventListener("click", () => {
        window.open("options.html", "_blank");
    });
} 
if (fishing != null) {
    fishing.addEventListener("click", () => {
        location.href = "fishing.html";
    });
}
if (timer != null) {
    timer.addEventListener("click", () => {
        location.href = "timer.html";
    });
}  
if (cats != null) {
    cats.addEventListener("click", () => {
        var motivate = document.getElementById('motivate');
        motivate.textContent = motivational[Math.floor(Math.random() *motivational.length)]
    });
}
if(back != null) {
    back.addEventListener("click", () => {
        location.href = "popup.html";
    });
}

// TIMER
let createClock;

if (ResetTimer != null) {
    ResetTimer.addEventListener("click", () => {
        const hr = document.getElementById("hour").value = "";
        const min = document.getElementById("minute").value = "";
        const s = document.getElementById("second").value = "";
        clearInterval(createClock);
        document.getElementById("hours").innerHTML = "";
        document.getElementById("mins").innerHTML = "";
        document.getElementById("secs").innerHTML = "";
    });
}

let alreadySet = false;

if (SetTimer != null) {
    SetTimer.addEventListener("click", () => {
        alreadySet = true;
        const hr = document.getElementById("hour").value;
        const min = document.getElementById("minute").value;
        const s = document.getElementById("second").value;
        convertMs(hr,min,s);
    });
}

function convertMs(hr,min,s) {
    let ms_1 = s * 1000;
    let ms_2 = 60 * 1000 * min;
    let ms_3 = 60 * 60 * 1000 * hr;
    run(ms_1 + ms_2 + ms_3);
}

function run(ms) {
    if(alreadySet) {
        alreadySet = false;
        let timeAtSetClock;
        createClock = setInterval(() => {
            console.log(ms);
            let now = new Date().getTime();
            if (!alreadySet) {
                timeAtSetClock = now;
                alreadySet = true;
            }
            let timeleft = (timeAtSetClock + ms) - now;
            let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
            document.getElementById("hours").innerHTML = hours + "h "
            document.getElementById("mins").innerHTML = minutes + "m "
            document.getElementById("secs").innerHTML = seconds + "s"

            if (timeleft < 0) {
                clearInterval(createClock);
                document.getElementById("hours").innerHTML = ""
                document.getElementById("mins").innerHTML = ""
                document.getElementById("secs").innerHTML = ""
                document.getElementById("end").innerHTML = "TIME UP!!";
            }
        }, 1000, ms)
    }
}
