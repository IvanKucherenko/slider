let position = 0;
let step = 600;

btnNext.onclick = () => {
    if (position <= -4200) {
        position = 0;
    }
    else {
        position = position - step;
    }
    sliderLine.style.left = `${position}px`;
}

btnPre.onclick = () => {
    if (position >= 0) {
        position = -4200;
    }
    else {
        position = position + step;
    }

    sliderLine.style.left = `${position}px`;
}