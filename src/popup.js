const options = document.getElementById("options");
const fishing = document.getElementById("fishing");
const timer = document.getElementById("timer");
const cats = document.getElementById("cats");
const back = document.getElementById("back");
const SetTimer = document.getElementById("SetTimer");
const ResetTimer = document.getElementById("ResetTimer");
let changeCat = document.getElementById("changeCat");

let motivational = ["You're fishing good.", "You're ameozing!", "You're reeling well!", "Meow! Moew!", "This window is fishy...", 
"I wonder what the world is like beyond this window.", "Study with meow!", "We'll catch those fish!", "Study on!", "Fish on!",
"You're doing ameowzing!", "I'm proud of you, meow.", "Even though I'm stuck in here, I still believe in you.", "We're in this boat together.",
"We'll get to the end of this ocean!", "The Cs are harsh today, arr!"];

let fish_images = [ "/images/fish/fish_00.png", "/images/fish/fish_01.png", "/images/fish/fish_02.png", "/images/fish/fish_03.png",
"/images/fish/fish_04.png", "/images/fish/fish_05.png", "/images/fish/fish_06.png", "/images/fish/fish_07.png",
"/images/fish/fish_08.png", "/images/fish/fish_09.png", "/images/fish/fish_10.png", "/images/fish/fish_11.png"
];

//matches by index
let fish_names = ["standard", "classy", "Swedish", "angler", "baked", "rainbow", "school of", "blob", "boot", "eel", "sushi", "flounder", "unknown"];

function changeAnimation() {
    changeCat.src = "/images/catReeling.gif";
    const fish_reward = document.getElementById("fish_reward");
    fish_reward.textContent = "A catch! What will your fish be???"
            // setTimeout(() => {
            //     cats.src = "/images/FishReveal.gif";
            //     fish_reward.textContent = "What could it be?";
            //     setTimeout(() => {
            //         cats.src = fish_images[Math.floor(Math.random() *fish_images.length)]
            //         fish_reward.textContent = "Congratulations! You got a ";
            //         setTimeout(() => {
            //             cats.src = "/images/catTotSmall.gif";
            //             fish_reward.textContent = "Keep studying for more fishing!";
            //         }, 2000)
            //     }, 1000)
            // }, 2000);
}

function Fished() {
    //clearInterval(createClock);
    let timer_elems = document.getElementById("timer_all");
    timer_elems.parentNode.removeChild(timer_elems);

    const fish_award = document.getElementById("fish_reward");
    fish_award.src = "/images/catReeling.gif";
    const fish_text = document.getElementById("fish_text");
    fish_text.textContent = "A catch! What will your fish be???"
    setTimeout(() => {
        fish_award.src = "/images/FishReveal.gif";
        fish_text.textContent = "What could it be?";
        setTimeout(() => {
            let fish_index = Math.floor( Math.random() * fish_images.length);
            fish_award.src = fish_images[ fish_index ];
            
            fish_text.textContent = "Congratulations! You got a " + fish_names[ fish_index ] + " fish.";
                   setTimeout(() => {
                        //fish_award.src = "/images/catTotSmall.gif";
                        fish_text.textContent = "Keep studying for more fishing!";
                        setTimeout(() => {
                            location.href = "fishing.html";
                        }, 2000);
                    }, 3000);
             }, 2000);
         }, 2000);
    //location.href("fishing.html");
}

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

            if(!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)){
                console.log(hours);
                document.getElementById("hours").innerHTML = hours + "h ";
                document.getElementById("mins").innerHTML = minutes + "m ";
                document.getElementById("secs").innerHTML = seconds + "s";
            }

            if (timeleft < 0) {
                clearInterval(createClock);
                document.getElementById("hours").innerHTML = "";
                document.getElementById("mins").innerHTML = "";
                document.getElementById("secs").innerHTML = "";
                document.getElementById("end").innerHTML = "TIME UP!!";
                Fished();
            }
        }, 1000, ms)
    }
}