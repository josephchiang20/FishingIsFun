const textarea = document.getElementById("textarea");
const save = document.getElementById("save");
const checkbox = document.getElementById("checkbox");

save.addEventListener("click", () => {
  const blocked = textarea.value.split("\n").map(s => s.trim()).filter(Boolean);
  chrome.storage.lobutt.set({ blocked });
});

checkbox.addEventListener("change", (event) => {
  const enabled = event.target.checked;
  chrome.storage.lobutt.set({ enabled });
});

window.addEventListener("DOMContentLoaded", () => {
  chrome.storage.lobutt.get(["blocked", "enabled"], function (lobutt) {
    const { blocked, enabled } = lobutt;
    if (Array.isArray(blocked)) {
      textarea.value = blocked.join("\n");
      checkbox.checked = enabled;
    }
  });
});