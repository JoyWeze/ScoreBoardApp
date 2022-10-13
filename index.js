//this Javascript wey i wan write, God ahbeg help your pikin


let homeScore = 0

let displayHome = document.getElementById('home-score')

function homeAddOne(){
    homeScore += 1
    displayHome.textContent = homeScore
}

function homeAddTwo(){
    homeScore += 2
    displayHome.textContent = homeScore
}

function homeAddThree(){
    homeScore += 3
    displayHome.textContent = homeScore
}

let guestScore = 0
let displayGuest = document.getElementById('guest-score')

function guestAddOne(){
    guestScore += 1
    displayGuest.textContent = guestScore
}

function guestAddTwo(){
    guestScore += 2
    displayGuest.textContent = guestScore
}

function guestAddThree(){
    guestScore += 3
    displayGuest.textContent = guestScore
}

function reset(){
    homeScore = 0
    displayHome.textContent = 0
    guestScore = 0
    displayGuest.textContent =0
}