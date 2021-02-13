const options = document.getElementById("options");

options.addEventListener("click", () => {
    window.open("options.html", "_blank");
});

document.getElementById("pet").onclick = function () {
    location.href = "fishing.html";
};