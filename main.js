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

window.addEventListener('load', () => {
    let backColor = localStorage.getItem('backColor');
    if(descriptionContainer){
        descriptionContainer.style.backgroundColor = backColor;
        colorName.textContent = backColor;
    }   
})

function backgroundColorChanged(){
    if(colorChangedbtn){
        
        colorChangedbtn.addEventListener('click', () => {
            const randomNumber = getRandomNumber();
            descriptionContainer.style.backgroundColor = colors[randomNumber];
            colorName.textContent = colors[randomNumber];

            localStorage.setItem('backColor', colorName.textContent);
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

// ////////////////////////////review page////////////////////////////////

const reviewImg = document.getElementById('person-img');
const reviewAuthor = document.getElementById('author');
const reviewInfo = document.getElementById('info');

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
let currentItem = 0;

function loadReviews(){
    return fetch('data/review.json')
    .then(response => response.json()) 
    .then(json => json.reviews); 
}

window.addEventListener('DOMContentLoaded', displayItems);

function displayItems(reviews){
    if(reviewImg){
        const review = reviews[currentItem];
        reviewImg.src = review.image;
        reviewAuthor.textContent = review.name;
        reviewInfo.textContent = review.text;
    }
}

loadReviews()
.then(reviews => {
    displayItems(reviews);

    if(rightBtn){
        rightBtn.addEventListener('click', () => {
            reviewImg.style.transform = 'translateY(33px)';
            reviewImg.style.transition = 'all 3s';
            currentItem++;
            if(currentItem < reviews.length){
                displayItems(reviews);
            } else {
                currentItem = 0;
                displayItems(reviews);
            }
        });
    }
    
    if(leftBtn){
        leftBtn.addEventListener('click', () => {
            currentItem--;
            if(currentItem > -1){
                displayItems(reviews);
            } else {
                currentItem = reviews.length-1;
                displayItems(reviews);
            }
        });
    }

})
.catch(console.log);

// ////////////////////////////faq page////////////////////////////////

const dropDownBtns = document.querySelectorAll('.title button');
const faqCardHrs = document.querySelectorAll('.faqCard hr');
const faqCardPs = document.querySelectorAll('.faqCard p');

dropDownBtns.forEach((dropDownBtn) => {
    dropDownBtn.addEventListener('click', (e) => {
        const question = e.currentTarget.parentElement.parentElement;
        question.children[1].classList.toggle = 'show-hr';
        question.children[2].classList.toggle = 'show-p';
    })
})
