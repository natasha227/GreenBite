document.addEventListener("DOMContentLoaded", () => {
    const breatheText = document.getElementById("breatheText");
    const animationCircle = document.getElementById("animation");
    const startBreathingBtn = document.getElementById("startBreathing");
    const stopBreathingBtn = document.getElementById("stopBreathing");
    const startTimerBtn = document.getElementById("startTimer");
    const timerInput = document.getElementById("timerInput");
    const timerDisplay = document.getElementById("timerDisplay");
    const toggleSoundBtn = document.getElementById("toggleSound");
    const sessionsCompleted = document.getElementById("noOfSessionsCompleted");

    // Ambient sound
    const ambientSound = new Audio("Sounds/gentle-rain-for-relaxation-and-sleep-337279.mp3");
    ambientSound.loop = true;
    let soundPlaying = false;

    // Load completed sessions
    let completed = parseInt(localStorage.getItem("mindfulnessSessions")) || 0;
    sessionsCompleted.textContent = completed;

    // --- Breathing animation ---
    let breathePhase = "Inhale";
    let breathingInterval;

    function startBreathing() {
        animationCircle.classList.add("breathe-inhale");
        breathePhase = "Inhale";
        breatheText.textContent = breathePhase;

        breathingInterval = setInterval(() => {
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
        }, 4000);
    }

    function stopBreathing() {
        clearInterval(breathingInterval);
        animationCircle.classList.remove("breathe-inhale", "breathe-exhale");
        breatheText.textContent = "Inhale";
    }

    startBreathingBtn.addEventListener("click", startBreathing);
    stopBreathingBtn.addEventListener("click", stopBreathing);

    // --- Timer ---
    let countdown;
    startTimerBtn.addEventListener("click", () => {
        let minutes = parseInt(timerInput.value);
        if (isNaN(minutes) || minutes <= 0) {
            alert("Enter a valid number of minutes");
            return;
        }

        clearInterval(countdown);
        let timeLeft = minutes * 60;
        timerDisplay.textContent = formatTime(timeLeft);

        countdown = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = formatTime(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(countdown);
                alert("Session complete!");
                completed++;
                sessionsCompleted.textContent = completed;
                localStorage.setItem("mindfulnessSessions", completed);
            }
        }, 1000);
    });

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60).toString().padStart(2, "0");
        const s = (seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    }

    // --- Ambient Sound Toggle ---
    toggleSoundBtn.addEventListener("click", () => {
        if (!soundPlaying) {
            ambientSound.play().catch(err => console.log(err));
            toggleSoundBtn.textContent = "Stop Ambient Sound";
        } else {
            ambientSound.pause();
            toggleSoundBtn.textContent = "Play Ambient Sound";
        }
        soundPlaying = !soundPlaying;
    });
});
