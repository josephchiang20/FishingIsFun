const options = document.getElementById("options");
const fishing = document.getElementById("fishing");
const cats = document.getElementById("cats");

// options.addEventListener("click", () => {
//     window.open("options.html", "_blank");
// });

// fishing.addEventListener("click", () => {
//     location.href = "fishing.html";
// });

// cats.addEventListener("click", () => {
//     alert("hello");
// })

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
        alert("hello");
    });
}