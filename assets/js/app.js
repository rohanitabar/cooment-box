// Download Varibles
const $ = document;
const slide = $.getElementById('slide');
const upArrow = $.getElementById('upArrow');
const downArrow = $.getElementById('downArrow');

// Events & Works

let x = 0;

upArrow.addEventListener('click', e => {
    if (x>'-900') {
        x = x-300;
        slide.style.top = x+'px';
    }
});

downArrow.addEventListener('click', e => {
    if (x<0) {
        x = x+300;
        slide.style.top = x+'px';
    }
})