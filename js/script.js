const displayElement = document.getElementById('count-display');
const clickButton = document.getElementById('click-btn');
const resetButton = document.getElementById('reset-btn');
const galleryImg = document.getElementById('gallery-img');

let count = parseInt(localStorage.getItem('clickCount')) || 0;

function updateDisplay() {
    displayElement.textContent = count;
    localStorage.setItem('clickCount', count);
}

clickButton.addEventListener('click', function() {
    count++;
    updateDisplay();
    displayElement.style.transform = "scale(1.2)";
    setTimeout(() => displayElement.style.transform = "scale(1)", 200);
});

// 自己的本地图片
const images = [
    "images/17.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpg",
    "images/14.jpg",
    "images/15.jpg",
    "images/16.jpg",
    "images/1.jpg"
];

resetButton.addEventListener('click', function() {
    if(confirm('确定要重置计数并更换一张新图片吗？')) {
        count = 0;
        updateDisplay();

        const randomImg = images[Math.floor(Math.random() * images.length)];
        galleryImg.classList.remove('loaded');

        setTimeout(() => {
            galleryImg.src = randomImg;
        }, 100);
    }
});

galleryImg.onload = function() {
    this.classList.add('loaded');
};

updateDisplay();
if(galleryImg.complete) {
    galleryImg.classList.add('loaded');
}