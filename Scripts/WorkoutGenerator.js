const breatheText = document.getElementById("breatheText");
const animationCircle = document.getElementById("animation");
const timerInput = document.getElementById("timerInput");
const startTimerBtn = document.getElementById("startTimer");
const timerDisplay = document.getElementById("timerDisplay");
const toggleSoundBtn = document.getElementById("toggleSound");
const sessionsDisplay = document.getElementById("noOfSessionsCompleted");

// Ambient sound
let ambientSound = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
ambientSound.loop = true;
let soundOn = false;

// Breathing animation
let breathePhase = "Inhale";
setInterval(() => {
    if (breathePhase === "Inhale") {
        breathePhase = "Exhale";
        breatheText.textContent = breathePhase;
        animationCircle.classList.remove("breathe-inhale");
        animationCircle.classList.add("breathe-exhale");
    } else {
        breathePhase = "Inhale";
        breatheText.textContent = breathePhase;
        animationCircle.classList.remove("breathe-exhale");
        animationCircle.classList.add("breathe-inhale");
    }
}, 4000); // 4s per phase

// Timer functionality
let timerInterval;
startTimerBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    let duration = parseInt(timerInput.value);
    if (isNaN(duration) || duration <= 0) {
        alert("Please enter a valid number of minutes!");
        return;
    }
    let timeLeft = duration * 60; // convert to seconds
    timerDisplay.textContent = formatTime(timeLeft);

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Meditation complete!");
            incrementSessions();
        }
    }, 1000);
});

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
}

// Ambient sound toggle
toggleSoundBtn.addEventListener("click", () => {
    if (soundOn) {
        ambientSound.pause();
        soundOn = false;
        toggleSoundBtn.textContent = "Play Ambient Sound";
    } else {
        ambientSound.play().catch(err => console.log(err));
        soundOn = true;
        toggleSoundBtn.textContent = "Pause Ambient Sound";
    }
});

// Session tracking using localStorage
function incrementSessions() {
    let sessions = parseInt(localStorage.getItem("sessionsCompleted")) || 0;
    sessions++;
    localStorage.setItem("sessionsCompleted", sessions);
    sessionsDisplay.textContent = sessions;
}

// Load saved sessions
sessionsDisplay.textContent = localStorage.getItem("sessionsCompleted") || 0;