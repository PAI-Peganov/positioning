/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const btnClk = document.getElementById("ModalOpenBtn");
btnClk.addEventListener("click", () => {
    const bluer = document.getElementById("blur");
    bluer.style.display = "block";
})

const btnCross = document.getElementById("modal1_cross");
btnCross.addEventListener("click", () => {
    const bluer = document.getElementById("blur");
    bluer.style.display = "none";
})
const blocks = document.querySelectorAll('.logo5 .block');
document.querySelector('.logo5 .block1').style.backgroundColor = 'red';
document.querySelector('.logo5 .block2').style.backgroundColor = 'greenyellow';
document.querySelector('.logo5 .block3').style.backgroundColor = 'deepskyblue';
document.querySelector('.logo5 .block4').style.backgroundColor = 'yellow';