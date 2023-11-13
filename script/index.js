// (0°C × 9/5) + 32
let btn = document.querySelector('[data-calculate]');
btn.addEventListener('click', calculate);
let display = document.querySelector('[data-answer]');

function calculate()
{
    let tempInDegrees=parseFloat(document.querySelector('[data-degrees]').value);
    let faren=(tempInDegrees * 9/5)+32;
    display.innerHTML="Tempereature is farenheit:" + faren;
}