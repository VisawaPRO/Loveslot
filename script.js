// ปุ่มกระพริบทุก 600ms
const button = document.querySelector('.open-button');
setInterval(() => {
  button.classList.toggle('flash');
}, 600);

// หัวใจลอยแบบสุ่ม
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";

  const hearts = ["💖", "💗", "💘", "💝", "❤️", "💕"];
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (20 + Math.random() * 20) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
setInterval(createFloatingHeart, 800);

// เสียงเมื่อคลิกปุ่ม
button.addEventListener("click", () => {
  const pop = new Audio("https://www.soundjay.com/button/beep-07.wav");
  pop.play();
});
