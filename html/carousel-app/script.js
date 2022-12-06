const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
//#class element
const img = document.querySelectorAll('#imgs img')

let idx = 0

//set interval function-to-run, ms interval
let interval = setInterval(run, 3000)
function run(){
    idx++;
    changeImage()
}

function changeImage(){
    if (idx > img.length -1){
        idx=0
    } else if(idx<0){
        idx = img.length -1
    }
    //moves the img 500px to the left
    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 3000)
}

rightBtn.addEventListener('click', () => {
    idx++;
    changeImage()
    resetInterval()
    //reset the interval
})
leftBtn.addEventListener('click', () => {
    idx--;
    changeImage()
    resetInterval()
    //reset the interval
})