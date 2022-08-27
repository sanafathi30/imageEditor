//

let btns = document.querySelectorAll(".option-btn");
let clickBtn = document.querySelector("#clickBtn");
let left = document.querySelector("#rotate-left");
let right = document.querySelector("#rotate-right");
let flip1 = document.querySelector("#flip1");
let flip2 = document.querySelector("#flip2");
let rangeInput = document.querySelector("#input");
let reset = document.querySelector("#reset");
let choose = document.querySelector("#choose");
let save = document.querySelector("#save");
let uploadBtn = document.querySelector("#upload-btn");
let img = document.querySelector(".image");
let chosenImage = document.querySelector("#chosen-img");
let Brightness = document.querySelector(".Brightness");
let Saturation = document.querySelector(".Saturation");
let Inversion = document.querySelector(".Inversion");
let Grayscale = document.querySelector(".Grayscale");
let fileInput = document.querySelector(".file-input");
let rangeValue = document.querySelector(".range-value");
let Brightness1 = 100,
    Saturation1 = 100,
    Inversion1 = 0,
    Grayscale1 = 0,
    flipHor = 1,
    flipVer = -1;

uploadBtn.addEventListener("change", function() {
    let file = fileInput.files[0];
    if (!file) return;
    chosenImage.src = URL.createObjectURL(file);
});

btns.forEach(function(item) {
    item.addEventListener("click", function() {
        btns.forEach(function(item) {
            item.classList.remove("active");
        });

        item.classList.toggle("active");
        clickBtn.innerText = item.textContent;
    });
});
rangeInput.addEventListener("change", () => {
    rangeValue.textContent = `${rangeInput.value}%`;
});

Brightness.addEventListener("click", function() {
    rangeInput.setAttribute("data-filter", "brightness");

    rangeInput.addEventListener("change", function() {
        let Brightness1 = Number(rangeInput.value);
        brightness2 = Brightness1;
        img.style.filter = `brightness(${Brightness1}%)`;
    });
});

Saturation.addEventListener("click", function() {
    rangeInput.setAttribute("data-filter", "saturate");

    rangeInput.addEventListener("change", function() {
        let Saturation1 = Number(rangeInput.value);
        img.style.filter = `saturate(${Saturation1}%)`;
    });
});

Inversion.addEventListener("click", function() {
    rangeInput.setAttribute("data-filter", "invert");
    rangeInput.addEventListener("change", function() {
        let Inversion1 = Number(rangeInput.value);
        img.style.filter = `saturate(${Inversion1}%)`;
    });
});

Grayscale.addEventListener("click", function() {
    rangeInput.setAttribute("data-filter", "grayscale");
    rangeInput.addEventListener("change", function() {
        let Grayscale1 = Number(rangeInput.value);
        img.style.filter = `grayscale(${Grayscale1}%)`;
    });
});

//
let rotateR = 0;
right.addEventListener("click", function() {
    rotateR = rotateR + 90;
    img.style.transform = `rotate(${rotateR}deg)`;
    console.log("hi");
});
let rotateL = 0;
left.addEventListener("click", function() {
    rotateL = rotateL - 90;
    img.style.transform = `rotate(${rotateL}deg)`;
});

flip1.addEventListener("click", function() {
    flipHor = flipHor === 1 ? -1 : 1;

    img.style.transform = `scaleX(${flipHor})`;
});

flip2.addEventListener("click", function() {
    flipVer = flipVer === -1 ? 1 : -1;
    img.style.transform = `scaleY(${flipVer})`;
});

reset.addEventListener("click", function() {
    img.style.filter = `brightness(${0}%)`;
    img.style.filter = `saturate(${0}%)`;
    img.style.filter = `invert(${0}%)`;
    img.style.filter = `grayscale(${0}%)`;
    img.style.transform = `scaleX(${1})`;
    img.style.transform = `scaleY(${-1})`;
    img.style.transform = `rotate(${0}deg)`;
});

save.addEventListener("click", function() {
    let canvas = document.createElement("canvas");
    let txt = canvas.getContext("2d");
    canvas.width = chosenImage.naturalWidth;
    canvas.height = chosenImage.naturalHeight;
    txt.filter = `brightness(${Brightness1}%) saturate(${Saturation1}%) saturate(${Inversion1}%) grayscale(${Grayscale1}%)`;
    txt.translate(canvas.width / 2, canvas.height / 2);

    txt.scale(flipHor, flipVer);
    txt.drawImage(
        chosenImage, -canvas.width / 2, -canvas.height / 2,
        canvas.width,
        canvas.height
    );

    let link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    // console.log(brightness2);
    link.click();
});