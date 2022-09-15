let img = document.querySelector('.imgs');
console.log(img);
let next = document.querySelector('.next');
let back = document.querySelector('.back')
let index = 1;
let activs = document.querySelectorAll('.mrgvali')
back.addEventListener('click', () => {

    if (index === 1) {
        img.style.transform = "translateX(-2400px)"
        index = 4;
    }
    else {
        img.style.transform = `translateX(-${800 * (index - 2)}px)`
        index--;
    }
    for (let i of activs) {
        i.classList.remove('active');
    }
    activs[index - 1].classList.add('active');
})
next.addEventListener('click', () => {

    if (index === 4) {
        img.style.transform = "translateX(0px)"
        index = 1;
    }
    else {
        img.style.transform = `translateX(-${800 * index}px)`
        index++;
    }
    for (let i of activs) {
        i.classList.remove('active');
    }
    activs[index - 1].classList.add('active');
})
setInterval(()=>{
    if (index === 4) {
        img.style.transform = "translateX(0px)"
        index = 1;
    }
    else {
        img.style.transform = `translateX(-${800 * index}px)`
        index++;
    }
    for (let i of activs) {
        i.classList.remove('active');
    }
    activs[index - 1].classList.add('active');
},3000)