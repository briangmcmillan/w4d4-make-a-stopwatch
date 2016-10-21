var tenthOfSeconds = 0
var seconds = 0
var minutes = 0
var watchInput = document.getElementById('watchInput')
var start_button = document.getElementById('startBtn')
var startTime
var pauseTime

start_button.addEventListener('click', beginWatch)
pauseTime.addEventListener('click', pauseWatch)
start_button.addEventListener('dblclick', resetWatch)

function increaseSeconds() {
    tenthOfSeconds++
    if (tenthOfSeconds % 10 === 0) {
        seconds++
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

    if (this.innerHTML === 'Pause') {
    pauseWatch()
    }
    else {
        this.innerHTML = 'Pause'
    }
}

function pauseWatch() {
    clearInterval(startTime)
    pauseTime = setTimeout(clear, 5000)

    if (this.innerHTML === 'Pause') {
    beginWatch()
    }
    else {
        this.innerHTML = 'Continue'
    }
}

function resetWatch() {
    clearInterval(startTime)
    tenthOfSeconds = 0
    seconds = 0
     minutes = 0
    watchInput.innerHTML = tenthOfSeconds
}
