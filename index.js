const blocks = document.querySelectorAll('.logo5 .block');
document.querySelector('.logo5 .block1').style.backgroundColor = 'red';
document.querySelector('.logo5 .block2').style.backgroundColor = 'greenyellow';
document.querySelector('.logo5 .block3').style.backgroundColor = 'deepskyblue';
document.querySelector('.logo5 .block4').style.backgroundColor = 'yellow';


document.addEventListener("DOMContentLoaded", () => {
    const fill = document.getElementById("fill");
    const whiteText = document.getElementById("whiteText");
    const duration = 3000;
    const frames = 100;
    const intervalTime = duration / frames;

    let progress = 0;

    function setProgress(value) {
        fill.style.width = value + "%";
        const clipValue = 100 - value;
        whiteText.style.clipPath = `inset(0 ${clipValue}% 0 0)`;
    }

    const interval = setInterval(() => {
        progress++;
        if (progress <= 100) {
            setProgress(progress);
        }
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, intervalTime);
});
