// var name = 'Christy'
// function runsLater() {
//     alert(name)
// }
// var firstTimeout = setTimeout(runsLater, 2000)//(function name, # of miliseconds until it runs the function)
// console.log(firstTimeout)
//
// var secondTimeout = setTimeout(function() {
//     alert('This comes later.')
// }, 5000)
// console.log(secondTimeout)
//
// clearTimeout(firstTimeout)//Cancels a timeout. In parenthesis is the name of the timeout that you want to clear
// clearTimeout(secondTimeout)

//HOMEWORK
//setTimeout
// var actionTimer
// var counter = 0
//
// document.getElementById('action').addEventListener('click', function() {
//     counter++
//     this.innerHTML = counter
//
//     clearTimeout(actionTimer)
//     actionTimer = setTimeout(() => {
//         counter = 0
//         this.innerHTML = '0'
//         console.log('Happened once.')
//     }, 2000)
// })

//setInterval Start
var counter = 0
var timer

function increaseCounter() {
    counter++
    console.log(counter)
    stopwatch.innerHTML = counter
}

function start() {
    timer = setInterval(increaseCounter, 1000)//pause
}

document.getElementById('action').addEventListener('click', function() {
    clearInterval(timer)

    if (this.innerHTML === 'Paused') {
    start()
    this.innerHTML = 'Pause'
}
else {
    this.innerHTML = 'Paused'
}
})

start()
//setInterval Stop





//Animation Frame
// var animationId//global variable because we are going to keep recalling the animationLoop
// function animationLoop() {
//     var button = document.getElementById('action')
//     var top = Number(getComputedStyle(button).top.replace('px', ''))
//
//     if (top >= 600) {
//         top = 0
//     }
//
//     button.style.position = 'absolute'
//     button.style.top = top + 1 + 'px'
//
//     animationID = requestAnimationFrame(animationLoop)//set it to what frame number we are on. Pass in the name of the function we want to animate.
// }
//
// animationLoop()




//Make a Circle Grow
// var animationId
// function animationLoop() {
//    var circle = document.getElementById('circle')
//    var height = Number(getComputedStyle(circle).width.replace('px',''))
//    var width = Number(getComputedStyle(circle).height.replace('px',''))
//
//    if (height >= 200 && width >= 200) {
//       height = 0
//       width = 0
//    }
//
//    circle.style.position = 'absolute'
//    circle.style.height = height + 1 + 'px'
//    circle.style.width = width + 1 + 'px'
//
//
//
//    animationId = requestAnimationFrame(animationLoop)
// }
// animationLoop()
