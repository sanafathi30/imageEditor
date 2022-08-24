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

btns.forEach(function(item) {
    item.addEventListener("click", function() {
        btns.forEach(function(item) {
            item.classList.remove("active");
        });

        item.classList.toggle("active");
        clickBtn.innerText = item.textContent;
    });
});
let l = 0;
right.addEventListener("click", function() {
    l = l + 90;
    img.style.transform = `rotate(${l}deg)`;
    console.log("hi");
});
let r = 0;
left.addEventListener("click", function() {
    r = r - 90;
    img.style.transform = `rotate(${r}deg)`;
});

flip1.addEventListener("click", function() {
    img.style.transform = "scaleX(-1)";
});

flip2.addEventListener("click", function() {
    img.style.transform = "scaleY(-1)";
});

Brightness.addEventListener("click", function() {
    rangeInput.setAttribute("data-filter", "brightness");
    rangeInput.addEventListener("change", function() {
        let number = Number(rangeInput.value);
        img.style.filter = `brightness(${number}%)`;
    });
});

Saturation.addEventListener("click", function() {
    rangeInput.setAttribute("data-filter", "saturate");

    rangeInput.addEventListener("change", function() {
        let k = Number(rangeInput.value);
        img.style.filter = `saturate(${k}%)`;
    });
});

Inversion.addEventListener("click", function() {
    rangeInput.setAttribute("data-filter", "invert");
    rangeInput.addEventListener("change", function() {
        let k = Number(rangeInput.value);
        img.style.filter = `invert(${k}%)`;
    });
});

Grayscale.addEventListener("click", function() {
    rangeInput.setAttribute("data-filter", "grayscale");
    rangeInput.addEventListener("change", function() {
        let k = Number(rangeInput.value);
        img.style.filter = `grayscale(${k}%)`;
    });
});

reset.addEventListener("click", function() {
    img.style.filter = `brightness(${0}%)`;
    img.style.filter = `saturate(${0}%)`;
    img.style.filter = `invert(${0}%)`;
    img.style.filter = `grayscale(${0}%)`;
});

uploadBtn.addEventListener("change", function() {
    let reader = new FileReader();
    reader.readAsDataURL(uploadBtn.files[0]);
    console.log(uploadBtn.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src", reader.result);
    };
});

save.addEventListener("click", function() {
    let imagePath = chosenImage.getAttribute("src");
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

function getFileName(str) {
    return str.substring(str.lastIndexOf("/") + 1);
}