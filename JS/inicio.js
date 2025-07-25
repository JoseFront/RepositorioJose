 let currentIndex = 0;
  const track = document.getElementById('carousel-track');
  const totalSlides = track.children.length;

  function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  // Auto-slide cada 5 segundos
  setInterval(() => moveSlide(1), 5000);


// Toggle dark mode functionality

  const toggleBtn = document.getElementById("darkModeToggle");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    toggleBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });



