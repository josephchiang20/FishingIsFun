const options = document.getElementById("options");
const fishing = document.getElementById("fishing");
const timer = document.getElementById("timer");
const cats = document.getElementById("cats");
const back = document.getElementById("back");

let motivational = ["You're fishing good.", "You're ameozing!", "You're reeling well!", "Meow! Moew!", "This window is fishy...", 
"I wonder what the world is like beyond this window.", "Study with meow!", "We'll catch those fish!", "Study on!", "Fish on!",
"You're doing ameowzing!", "I'm proud of you, meow.", "Even though I'm stuck in here, I still believe in you.", "We're in this boat together.",
"We'll get to the end of this ocean!", "The Cs are harsh today, arr!"];

function checkIfFished() {
    var setHr = document.getElementById("tpick-h");
    var setMin = document.getElementById("tpick-m");
    var setSec = document.getElementById("tpick-s");

    if(setHr == ac.padzero(now.getHours()) &&
    setMin == ac.padzero(now.getMinutes()) &&
    setSec == ac.padzero(now.getSeconds()) ) {
        location.href = "fishing.html";
    }
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
//SET A REMINDER
var ac = {
    // (A) INITIALIZE ALARM CLOCK
    init: function () {
        // (A1) GET THE CURRENT TIME - HOUR, MIN, SECONDS
        ac.chr = document.getElementById("chr");
        ac.cmin = document.getElementById("cmin");
        ac.csec = document.getElementById("csec");

        // (A2) CREATE TIME PICKER - HR, MIN, SEC
        ac.thr = ac.createSel(23);
        document.getElementById("tpick-h").appendChild(ac.thr);
        ac.thm = ac.createSel(59);
        document.getElementById("tpick-m").appendChild(ac.thm);
        ac.ths = ac.createSel(59);
        document.getElementById("tpick-s").appendChild(ac.ths);

        // (A3) CREATE TIME PICKER - SET, RESET
        ac.tset = document.getElementById("tset");
        ac.tset.addEventListener("click", ac.set);
        ac.treset = document.getElementById("treset");
        ac.treset.addEventListener("click", ac.reset);

        // (A5) START THE CLOCK
        ac.alarm = null;
        setInterval(ac.tick, 1000);
    },

    // (B) SUPPORT FUNCTION - CREATE SELECTOR FOR HR, MIN, SEC
    createSel: function (max) {
        var selector = document.createElement("select");
        for (var i = 0; i <= max; i++) {
            var opt = document.createElement("option");
            i = ac.padzero(i);
            opt.value = i;
            opt.innerHTML = i;
            selector.appendChild(opt);
        }
        return selector
    },

    // (C) SUPPORT FUNCTION - PREPEND HR, MIN, SEC WITH 0 (IF < 10)
    padzero: function (num) {
        if (num < 10) { num = "0" + num; }
        else { num = num.toString(); }
        return num;
    },

    // (D) UPDATE CURRENT TIME
    tick: function () {
        // (D1) CURRENT TIME
        var now = new Date();
        var hr = ac.padzero(now.getHours());
        var min = ac.padzero(now.getMinutes());
        var sec = ac.padzero(now.getSeconds());

        // (D2) UPDATE HTML CLOCK
        ac.chr.innerHTML = hr;
        ac.cmin.innerHTML = min;
        ac.csec.innerHTML = sec;
    },

    // (E) SET ALARM
    set: function () {
        ac.alarm = ac.thr.value + ac.thm.value + ac.ths.value;
        ac.thr.disabled = true;
        ac.thm.disabled = true;
        ac.ths.disabled = true;
        ac.tset.disabled = true;
        ac.treset.disabled = false;
    },

    // (F) RESET ALARM
    reset: function () {
        if (!ac.sound.paused) { ac.sound.pause(); }
        ac.alarm = null;
        ac.thr.disabled = false;
        ac.thm.disabled = false;
        ac.ths.disabled = false;
        ac.tset.disabled = false;
        ac.treset.disabled = true;
    }
};

// (G) START CLOCK ON PAGE LOAD
window.addEventListener("load", ac.init);