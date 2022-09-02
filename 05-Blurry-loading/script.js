const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");
console.log(loadText);

let load = 0;

let int = setInterval(blur, 15);

function blur() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity=1-load/100;
    bg.style.filter = `blur(${30*(1-load/100)}px)`;
    console.log(load);

}