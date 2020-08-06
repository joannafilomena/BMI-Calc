let height = document.querySelector(".js-height");
let weight = document.querySelector(".js-weight");
let sum = document.querySelector(".js-sum");
let button = document.querySelector("button");
let underweight = document.querySelector(".underweight");
let normal = document.querySelector(".normal");
let overweight = document.querySelector(".overweight");
let obese = document.querySelector(".obese");

button.addEventListener ("click", () => {
    suma = 0;
    suma = weight.value / (height.value /100)**2;
    sum.innerText = parseFloat(suma).toFixed(2);
    all = parseFloat(sum.innerText);
    if (all.value < 16) {
        underweight.style.display = "show";
    };
});

