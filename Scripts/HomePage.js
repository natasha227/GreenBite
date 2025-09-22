const heroImages = document.querySelectorAll('.hero img');
let index = 0;

function changeImages()
{
    heroImages[index].classList.remove('active');
    index = (index +1) % heroImages.length;
    heroImages[index].classList.add('active'); 
}
setInterval(changeImages, 5000);

const weeklyTips = [
    "Start your day with a 5 minute stretch to wake up your body.",
    "Drink a glass of water in the morning to stay hydrated.",
    "Add fresh fruit to you breakfast for energy and nutrients.",
    "Take a 20 minute walk after lunch to refresh your mind.",
    "Limit screen time to reduce eye strain to improve focus.",
    "Choose healthy snacks like nuts or yoghurt instead of processed food.",
    "Spend 15 miniutes in the evening relaxing or meditating."
];

const todayIndex = new Date().getDay();
const tip = weeklyTips[todayIndex];

document.getElementById("title").textContent = "Daily Health Tip";
document.getElementById("text").textContent = tip;

const form = document.getElementById("newsletterForm");
const message = document.getElementById("subscriptionMessage");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const email = form.querySelector("input[type='email']").value;

    if(email){
        message.textContent = `Thank you for subscribing, ${email}!`
        form.reset();

        setTimeout(() => {
            message.textContent = ""
        },5000);
        
    }else{
        message.textContent = "Please eneter a valid email.";
        setTimeout(() => {
            message.textContent = ""
        },5000);
    }
});
