let height = document.querySelector(".js-height");
let weight = document.querySelector(".js-weight");
let sum = document.querySelector(".js-sum");
let button = document.querySelector("button");
let underweight = document.querySelector(".underweight");
let normal = document.querySelector(".normal");
let overweight = document.querySelector(".overweight");
let obese = document.querySelector(".obese");

button.addEventListener ("click", () => {
    sum.innerText = weight.value / (height.value ** 2)/100;
    all = parseFloat(sum.innerText);
    if (all.value < 16) {
        underweight.style.display = "show";
    };
});
