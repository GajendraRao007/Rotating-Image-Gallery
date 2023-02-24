const imgEl = document.querySelector(".image-container")
const prevbtn = document.getElementById("prev")
const nextbtn = document.getElementById("next")

let x =0;
let timer;
prevbtn.addEventListener('click',function(){
    x = x + 45;
    clearTimeout(timer)
    updategallery()     
})
nextbtn.addEventListener('click',function(){
    x = x - 45;
    clearTimeout(timer)
    updategallery()     
})

function updategallery(){
    imgEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
   timer= setTimeout(()=>{
        x = x - 45;
        updategallery()
    }, 3000)
}

updategallery()