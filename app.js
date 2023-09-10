let timeEl = document.getElementById("time"),
scoreEl = document.getElementById("score")

let time = 15
let score = 0

document.addEventListener("click",()=>{
    score++
    scoreEl.innerHTML = score
})

setInterval(()=>{
    time--;
    timeEl.innerHTML = time
    if(time ==0){
        alert("Time is up! Your score is "+score)
        location.reload()
    }
},1000)