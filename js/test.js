var tenthOfSeconds = 0
var seconds = 0
var minutes = 0
var watchInput = document.getElementById('watchInput')
var start_button = document.getElementById('startBtn')
var startTime
var pauseTime
var resetTime


function changeColor() {
    var red = Math.round(255 * Math.random())
    var blue = Math.round(255 * Math.random())
    var green = Math.round(255 * Math.random())
    document.getElementById('watchInput').style.color = 'rgba(' + red + ', ' + green + ', ' + blue + ', .5)'
    console.log(red, blue)
}

function increaseSeconds() {
    tenthOfSeconds++
    if (tenthOfSeconds % 10 === 0) {
        seconds++
        changeColor()
        //change function will eventually go here
    }
    if (tenthOfSeconds > 9) {
        tenthOfSeconds = 0
    }
    if (seconds > 59) {
        minutes++
        seconds = 0
    }
    watchInput.innerHTML = minutes + ':' + seconds + ':' + tenthOfSeconds
}

function beginWatch() {
    clearTimeout(pauseTime)
    clearInterval(startTime)
    startTime = setInterval(increaseSeconds, 100)
}

function resetWatch() {
    clearInterval(startTime)
    tenthOfSeconds = 0
    seconds = 0
     minutes = 0
    watchInput.innerHTML = tenthOfSeconds
    start_button.innerHTML = 'Start'
}

start_button.addEventListener('click', function() {
    if (this.innerHTML === 'Start') {
    beginWatch()
    this.innerHTML = 'Pause'
    }
    else if (this.innerHTML === 'Pause') {
        clearInterval(startTime)
        this.innerHTML = 'Continue'
        resetTime = setInterval(resetWatch, 15000)
    }
    else if (this.innerHTML === 'Continue') {
        beginWatch()
        this.innerHTML = 'Pause'
        clearInterval(resetTime)
    }
})

start_button.addEventListener('dblclick', function() {
    if (this.innerHTML === 'Pause') {
        resetWatch()
        this.innerHTML = 'Start'
    }
})
