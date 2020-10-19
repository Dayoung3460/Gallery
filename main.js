

const hightlight = document.querySelector(".highlight");
const previews = document.querySelectorAll(".preview img");
const colors = ["antiquewhite", "blueviolet", "paleVioletRed", "INDIANRED", "TOMATO", "DARKKHAKI", "MEDIUMPURPLE"];
const btn = document.querySelector('.btn')
const colorName = document.querySelector('.colorName');
const descriptionContainer = document.querySelector('.description');

btn.addEventListener('click', changeBackColor);
imageGallery();

function changeBackColor(){
    const randomNumber = getRandomNumber();
    descriptionContainer.style.backgroundColor = colors[randomNumber];
    colorName.textContent = colors[randomNumber];
}

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

function imageGallery(){
    previews.forEach(preview => {
        preview.addEventListener('click', function() {
            const previewSrc = preview.src;
            const mainSrc = previewSrc.replace('s', 'b');
            previews.forEach(preview => preview.classList.remove('active'));
            hightlight.src = mainSrc;
            preview.classList.add('active');

        });
    });
}

