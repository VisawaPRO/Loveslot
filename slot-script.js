const slotImgs = [
  document.getElementById("slot1"),
  document.getElementById("slot2"),
  document.getElementById("slot3")
];

const message = document.getElementById("message");
const spinBtn = document.getElementById("spin");

function getRandomImageNumber() {
  return Math.floor(Math.random() * 30) + 1; // 1 - 30
}

function spinSlots() {
  message.textContent = "";
  spinBtn.disabled = true;

  let rounds = 15;
  let current = 0;

  const interval = setInterval(() => {
    for (let i = 0; i < 3; i++) {
      const num = getRandomImageNumber();
      slotImgs[i].src = `${num}.jpg`;
      slotImgs[i].setAttribute("data-value", num); // เก็บค่าสำหรับตรวจสอบ
    }

    current++;
    if (current >= rounds) {
      clearInterval(interval);
      checkWin();
      spinBtn.disabled = false;
    }
  }, 100);
}

function checkWin() {
  const val1 = slotImgs[0].getAttribute("data-value");
  const val2 = slotImgs[1].getAttribute("data-value");
  const val3 = slotImgs[2].getAttribute("data-value");

  if (val1 === val2 && val2 === val3) {
    showMessage("💘 JACKPOT! All 3 images match!", true);
  } else if (val1 === val2 || val2 === val3 || val1 === val3) {
    showMessage("💞 Nice! Two images match!", false);
  } else {
    showMessage("💔 No match, try again!", false);
  }
}

function showMessage(text, win) {
  message.textContent = text;

  if (win) {
    slotImgs.forEach(img => {
      img.parentElement.classList.add("win");
    });

    setTimeout(() => {
      slotImgs.forEach(img => {
        img.parentElement.classList.remove("win");
      });
    }, 1800);
  }
}

spinBtn.addEventListener("click", spinSlots);
