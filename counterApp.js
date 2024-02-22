let number = 0;
let valueStore = document.querySelector('#number')
const increaseBtn = document.querySelector('#increase')
const decreaseBtn = document.querySelector('#decrease')
const resetBtn = document.querySelector('#reset')

increaseBtn.addEventListener('click',()=>{
    increament()
})

decreaseBtn.addEventListener('click',()=>{
    decreament()
})
resetBtn.addEventListener('click',()=>{
    reset()
})

function increament (){
     number++;
    valueStore.textContent = number
}

function decreament (){
    console.log(number)
    number -- ;
    valueStore.textContent = number
}
function reset (){
    number = 0;
    valueStore.textContent = number
}

