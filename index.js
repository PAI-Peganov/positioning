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