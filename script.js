const search = document.getElementById("search");
const videos = document.querySelectorAll(".video");
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

/* SEARCH */
search.addEventListener("keyup", () => {
  let value = search.value.toLowerCase();
  videos.forEach(video => {
    let title = video.dataset.title.toLowerCase();
    video.style.display = title.includes(value) ? "block" : "none";
  });
});

/* VIDEO CLICK */
videos.forEach(video => {
  video.addEventListener("click", () => {
    alert("Video by Pratyush Raj 🎬");
  });
});

/* THEME TOGGLE */
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});
