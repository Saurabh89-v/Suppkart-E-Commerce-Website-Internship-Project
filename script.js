
function toggleDropdown(element) {
  element.parentElement.classList.toggle("open");
}

// Slider Auto Move
const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
let index = 0;
const slideWidth = slides[0].offsetWidth;

setInterval(() => {
  index = (index + 1) % slides.length;
  slidesContainer.style.transform = `translateX(-${slideWidth * index}px)`;
}, 2000);

// Scrollable Right Menu
const scrollContainer = document.querySelector(".scroll-container");
const scrollUp = document.querySelector(".scroll-btn.up");
const scrollDown = document.querySelector(".scroll-btn.down");

scrollUp.addEventListener("click", () => {
  scrollContainer.scrollBy({ top: -100, behavior: "smooth" });
});

scrollDown.addEventListener("click", () => {
  scrollContainer.scrollBy({ top: 100, behavior: "smooth" });
});
// Auth Modal Logic
const modal = document.getElementById('auth-modal');
const closeModal = document.querySelector('.close-modal');
const authSteps = document.querySelectorAll('.auth-step');

// Captcha elements
let captchaCode = "";
function generateCaptcha() {
  captchaCode = Math.random().toString(36).substring(2, 7).toUpperCase();
  document.getElementById("captcha-text").innerText = captchaCode;
}
function validateCaptcha(input) {
  return input.toUpperCase() === captchaCode;
}

// OTP countdown
let otpTimer;
let otpSeconds = 59;
function startOTPTimer() {
  otpSeconds = 59;
  const resend = document.getElementById("resend-otp");
  resend.innerText = `Resend OTP (00:${otpSeconds})`;
  resend.style.pointerEvents = "none";
  resend.style.color = "#888";

  otpTimer = setInterval(() => {
    otpSeconds--;
    resend.innerText = `Resend OTP (00:${otpSeconds < 10 ? "0"+otpSeconds : otpSeconds})`;

    if (otpSeconds <= 0) {
      clearInterval(otpTimer);
      resend.innerText = "Resend OTP";
      resend.style.pointerEvents = "auto";
      resend.style.color = "#540564";
    }
  }, 1000);
}

// Sign In button (navbar wala)
document.querySelector('.sign-in-btn').addEventListener('click', () => {
  modal.style.display = 'flex';
  showStep('login');
});

// Close modal
closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

// Switch steps
document.querySelectorAll('.switch-link').forEach(link => {
  link.addEventListener('click', () => {
    const step = link.dataset.step;
    showStep(step);
  });
});

// Show step function
function showStep(step) {
  authSteps.forEach(s => s.style.display = 'none');
  document.getElementById('auth-' + step).style.display = 'block';

  if (step === "forgot") generateCaptcha();
  if (step === "otp") startOTPTimer();
}


const goalWrapper = document.querySelector('.goal-cards-wrapper');
const goalCards = document.querySelectorAll('.goal-card');

function highlightCenterGoals() {
  const wrapperCenter = goalWrapper.scrollLeft + goalWrapper.offsetWidth / 2;

  let distances = Array.from(goalCards).map(card => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    return Math.abs(wrapperCenter - cardCenter);
  });
  let firstIndex = distances.indexOf(Math.min(...distances));

  goalCards.forEach(card => card.classList.remove('active','near','far'));

  goalCards.forEach((card, i) => {
    if (i === firstIndex || i === firstIndex+1) {
      card.classList.add('active');
    } else if (i === firstIndex-1 || i === firstIndex+2) {
      card.classList.add('near');
    } else if (i === firstIndex-2 || i === firstIndex+3) {
      card.classList.add('far');
    }
  });
}

goalWrapper.addEventListener('scroll', highlightCenterGoals);
window.addEventListener('load', highlightCenterGoals);

document.querySelectorAll('.goal-card').forEach(card => {
  card.addEventListener('click', () => window.location.href = 'target-page.html');
});


const sportWrapper = document.querySelector('.sport-cards-wrapper');
const sportCards = document.querySelectorAll('.sport-card');

function highlightCenterSports() {
  const wrapperCenter = sportWrapper.scrollLeft + sportWrapper.offsetWidth / 2;

  let distances = Array.from(sportCards).map(card => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    return Math.abs(wrapperCenter - cardCenter);
  });
  let firstIndex = distances.indexOf(Math.min(...distances));

  sportCards.forEach(card => card.classList.remove('active','near','far'));

  sportCards.forEach((card, i) => {
    if (i === firstIndex || i === firstIndex+1) {
      card.classList.add('active');
    } else if (i === firstIndex-1 || i === firstIndex+2) {
      card.classList.add('near');
    } else if (i === firstIndex-2 || i === firstIndex+3) {
      card.classList.add('far');
    }
  });
}

sportWrapper.addEventListener('scroll', highlightCenterSports);
window.addEventListener('load', highlightCenterSports);

document.querySelectorAll('.sport-card').forEach(card => {
  card.addEventListener('click', () => window.location.href = 'target-page.html');
});



 const sportsCards = document.getElementById('sportsCards');
 const leftArrow = document.querySelector('.arrow.left');
 const rightArrow = document.querySelector('.arrow.right');

    let scrollAmount = 0;
    const cardWidth = 630; 

    rightArrow.addEventListener('click', () => {
      scrollAmount += cardWidth;
      sportsCards.style.transform = `translateX(-${scrollAmount}px)`;
    });

    leftArrow.addEventListener('click', () => {
      scrollAmount -= cardWidth;
      if (scrollAmount < 0) scrollAmount = 0;
      sportsCards.style.transform = `translateX(-${scrollAmount}px)`;
    });
