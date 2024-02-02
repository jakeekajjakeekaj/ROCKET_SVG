const button = document.querySelector('.btn');
const rocketSVG = document.querySelector('.rocket');

const startAnimation = ()=> {
    rocketSVG.classList.add('rocket-animation');
    setTimeout(()=> {
        rocketSVG.classList.remove('rocket-animation');
    }, 3000);
}

button.addEventListener('click', ()=> {
    startAnimation();
})