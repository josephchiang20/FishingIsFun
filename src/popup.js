const options = document.getElementById("options");
const fishing = document.getElementById("fishing");
const cats = document.getElementById("cats");

let motivational = ["You're fishing good.", "You're ameozing!", "You're reeling well!", "Meow! Moew!", "This window is fishy...", 
"I wonder what the world is like beyond this window.", "Study with meow!", "We'll catch those fish!"];

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
if (cats != null) {
    cats.addEventListener("click", () => {
        var motivate = document.getElementById('motivate');
        motivate.textContent = motivational[Math.floor(Math.random() *motivational.length)]
    });
}
