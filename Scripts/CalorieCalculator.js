const form = document.getElementById("calories");
const results = document.getElementById("result");

form.addEventListener("submit",e => {
    e.preventDefault();

    const age = parseFloat(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const activity = parseFloat(document.getElementById("activitylevel").value);

    let bmr ;
    if (gender === "male"){
        bmr = 10 * weight + 6.25 *height - 5 *age + 5;
    }
    else if (gender ==="female") {
        bmr = 10 * weight +6.25 * height - 5 * age - 161;
    }

    
    const tdee = bmr * activity;

    const carb = (tdee * 0.5) / 4;
    const protien = (tdee * 0.2) / 4;
    const fat = (tdee * 0.3) / 9;


    animateValue("bmr",0,Math.round(bmr),800);
    animateValue("tdee",0,Math.round(tdee),800);
    animateValue("carb",0,Math.round(carb),800);
    animateValue("protien",0,Math.round(protien),800);
    animateValue("fat",0,Math.round(fat),800);


    animateCircle("carbCircle",carb / tdee * 100);
    animateCircle("protienCircle", protien / tdee * 100);
    animateCircle("fatCircle", fat / tdee * 100);

    results.style.display = "block";
});


function animateValue(id, start, end, duration) {
    let obj = document .getElementById(id);
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) clearInterval(timer);
    }, stepTime);
}

function animateCircle(id, percent) {
    const circle = document.getElementById(id);
    let angle = 0;
    const targetAngle = (percent / 100) * 360;
    const step = 3;
    const interval = setInterval (() => {
        if (angle >= targetAngle) {
            clearInterval(interval);
        }else{
            angle += step;
            circle.style.background = `conic-gradient(#2e7d32 0deg, #2e7d32 ${angle}deg, #ddd ${angle}deg, #ddd 360deg)`;
        }
    },10);
}