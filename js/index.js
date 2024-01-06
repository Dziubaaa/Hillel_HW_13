const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

let currentImgIndex = 0;

function showImg (index) {
    const image = document.getElementById('currentImg');
    image.src = `./img/${images[index]}`;

    document.getElementById('prevBtn').style.display = (index === 0) ? 'none' : 'inline-block';

    document.getElementById('nextBtn').style.display = (index === images.length - 1) ? 'none' : 'inline-block';
}

function nextImg() {
    if (currentImgIndex < images.length - 1) {
        currentImgIndex++;
        showImg(currentImgIndex);
    }
}

function prevImg() {
    if(currentImgIndex > 0) {
        currentImgIndex--;
        showImg(currentImgIndex)
    }
}

showImg(currentImgIndex);
