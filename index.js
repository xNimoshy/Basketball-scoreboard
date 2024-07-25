let homeScoreEl = 0
let guestScoreEl = 0

document.getElementById("homescore-el").textContent = homeScoreEl
document.getElementById("guestscore-el").textContent = guestScoreEl

function add1pointtohome(){
    homeScoreEl +=1
    document.getElementById("homescore-el").textContent = homeScoreEl  
}
function add2pointstohome(){
    homeScoreEl +=2
    document.getElementById("homescore-el").textContent = homeScoreEl  
}
function add3pointstohome(){
    homeScoreEl +=3
    document.getElementById("homescore-el").textContent = homeScoreEl  
}
function add1pointtoguest(){
    guestScoreEl +=1
    document.getElementById("guestscore-el").textContent = guestScoreEl  
}
function add2pointstoguest(){
    guestScoreEl +=2
    document.getElementById("guestscore-el").textContent = guestScoreEl  
}
function add3pointstoguest(){
    guestScoreEl +=3
    document.getElementById("guestscore-el").textContent = guestScoreEl 
}

