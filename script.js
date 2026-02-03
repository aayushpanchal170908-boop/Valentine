// ================= BACKGROUND LOVE LETTERS =================
const loveBg = document.querySelector('.love-bg');
const letters = ['L', 'O', 'V', 'E'];

if (loveBg) {
  for (let i = 0; i < 40; i++) {
    const span = document.createElement('span');
    span.innerText = letters[Math.floor(Math.random() * letters.length)];
    span.style.top = Math.random() * 100 + '%';
    span.style.left = Math.random() * 100 + '%';
    loveBg.appendChild(span);
  }
}

// ================= PAGE SWITCHING =================

// Disclaimer → Book
const confirmBtn = document.getElementById('confirmBtn');
if (confirmBtn) {
  confirmBtn.addEventListener('click', () => {
    document.getElementById('disclaimer-page').classList.remove('active');
    document.getElementById('book-page').classList.add('active');
  });
}

// Book → Cards
const nextBtn = document.getElementById('nextBtn');
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    document.getElementById('cards').classList.remove('hidden');
  });
}

// Cards → Single Note
const cardNextBtn = document.getElementById('cardNextBtn');
if (cardNextBtn) {
  cardNextBtn.addEventListener('click', () => {
    document.getElementById('cards').classList.add('hidden');
    document.getElementById('single-note').classList.remove('hidden');
  });
}

// Single Note → Proposal
const singleNext = document.getElementById('singleNext');
if (singleNext) {
  singleNext.addEventListener('click', () => {
    document.getElementById('book-page').classList.remove('active');
    document.getElementById('proposal-page').classList.add('active');
  });
}

// ================= YES / NO LOGIC =================
let noClicks = 0;
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

if (noBtn) {
  noBtn.addEventListener('click', () => {
    noClicks++;
    if (noClicks === 1) noBtn.style.transform = "translateX(80px)";
    if (noClicks === 2) noBtn.style.transform = "translateY(80px)";
    if (noClicks >= 5) noBtn.style.display = "none";
  });
}

if (yesBtn) {
  yesBtn.addEventListener('click', () => {
    document.getElementById('celebrate').classList.remove('hidden');
  });
}
