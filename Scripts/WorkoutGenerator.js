// ======= DOM Elements =======
const bodyParts = document.querySelectorAll(".part");
const equipments = document.getElementById("equipments");
const generateButton = document.getElementById("generateButton");
const workoutPlan = document.getElementById("workoutPlan");

const timerInput = document.getElementById("timerInput");
const startTimerBtn = document.getElementById("startTimer");
const pauseButton = document.getElementById("pauseButton");
const timerDisplay = document.getElementById("timerDisplay");
const sessionsDisplay = document.getElementById("noOfSessionsCompleted");

// ======= Workout Data =======
const workouts = {
  "arms": {
    "none": ["Push-ups", "Tricep Dips", "Arm Circles"],
    "dumbbells": ["Bicep Curls", "Overhead Press", "Lateral Raises"],
    "resistance": ["Band Curls", "Band Tricep Extensions", "Band Rows"]
  },
  "legs": {
    "none": ["Squats", "Lunges", "Calf Raises"],
    "dumbbells": ["Goblet Squats", "Dumbbell Deadlifts", "Step-Ups"],
    "resistance": ["Band Squats", "Glute Bridges with Band", "Band Side Steps"]
  },
  "fullbody": {
    "none": ["Burpees", "Mountain Climbers", "Jumping Jacks"],
    "dumbbells": ["Thrusters", "Renegade Rows", "Dumbbell Swings"],
    "resistance": ["Band Deadlifts", "Band Squat to Press", "Band Rows"]
  },
  "core": {
    "none": ["Sit-Ups", "Plank", "Russian Twists"],
    "dumbbells": ["Weighted Sit-Ups", "Dumbbell Side Bend", "Russian Twist with Dumbbell"],
    "resistance": ["Band Ab Crunch", "Band Woodchop", "Band Pallof Press"]
  }
};

// ======= Variables =======
let selectedPart = null;
let timer;
let timeRemaining = 0;
let isPaused = false;

// ======= Body Part Selection =======
bodyParts.forEach(part => {
  part.addEventListener("click", () => {
    bodyParts.forEach(p => p.classList.remove("selected"));
    part.classList.add("selected");
    selectedPart = part.dataset.part;
  });
});

// ======= Generate Workout =======
generateButton.addEventListener("click", () => {
  const equipment = equipments.value;

  if (!selectedPart) {
    alert("Please select a body part.");
    return;
  }

  if (!equipment) {
    alert("Please select equipment.");
    return;
  }

  const exercises = workouts[selectedPart][equipment];

  workoutPlan.innerHTML = `
    <h3>${selectedPart.charAt(0).toUpperCase() + selectedPart.slice(1)} Workout:</h3>
    <ul>${exercises.map(e => `<li>${e}</li>`).join("")}</ul>
  `;

  incrementSessions();
});

// ======= Timer Functions =======
function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

function startTimer() {
  const minutes = parseInt(timerInput.value);
  if (isNaN(minutes) || minutes <= 0) {
    alert("Please enter a valid number of minutes.");
    return;
  }

  timeRemaining = minutes * 60;
  clearInterval(timer);
  isPaused = false;
  updateTimerDisplay();

  timer = setInterval(() => {
    if (!isPaused) {
      timeRemaining--;
      updateTimerDisplay();
      if (timeRemaining <= 0) {
        clearInterval(timer);
        alert("Time's up!");
      }
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = !isPaused;
  pauseButton.textContent = isPaused ? "Resume" : "Pause";
}

// ======= Session Tracking =======
function incrementSessions() {
  let sessions = parseInt(localStorage.getItem("sessionsCompleted")) || 0;
  sessions++;
  localStorage.setItem("sessionsCompleted", sessions);
  sessionsDisplay.textContent = sessions;
}

// Load saved sessions
sessionsDisplay.textContent = localStorage.getItem("sessionsCompleted") || 0;

// ======= Event Listeners =======
startTimerBtn.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
