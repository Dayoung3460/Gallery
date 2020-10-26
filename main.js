'use strict'



const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const hightlight = document.querySelector(".highlight");
const previews = document.querySelectorAll(".preview img");
const colors = ["antiquewhite", "blueviolet", "paleVioletRed", "INDIANRED", "TOMATO", "DARKKHAKI", "MEDIUMPURPLE"];
const colorChangedbtn = document.querySelector('.colorChangedbtn')
const colorName = document.querySelector('.colorName');
const descriptionContainer = document.querySelector('.description');

onClickToggleBtn();
backgroundColorChanged();
imageGallery();
loadReviews()


function backgroundColorChanged(){
    if(colorChangedbtn){
        colorChangedbtn.addEventListener('click', () => {
            const randomNumber = getRandomNumber();
            descriptionContainer.style.backgroundColor = colors[randomNumber];
            colorName.textContent = colors[randomNumber];
        });
    }
}

function onClickToggleBtn(){
    if(toggleBtn){
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('show-sidebar')
        })
    }
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

function loadReviews(){
    return fetch('data/review.json')
    .then(response => response.json()) 
    .then(json => json.reviews); 
}
