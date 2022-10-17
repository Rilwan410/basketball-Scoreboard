let homeNum = 0
let guestNum = 0
document.getElementById("guest-screen").textContent = guestNum
document.getElementById("home-screen").textContent = homeNum
document.getElementById("winner-msg").textContent


function incrementOne(){
homeNum ++
document.getElementById("home-screen").textContent = homeNum
console.log(homeNum)
}

function incrementTwo(){
    homeNum += 2
    document.getElementById("home-screen").textContent = homeNum

}

function incrementThree(){
    homeNum += 3
    document.getElementById("home-screen").textContent = homeNum

}



function incrementOneGuest(){
    guestNum ++
    document.getElementById("guest-screen").textContent = guestNum
}

function incrementTwoGuest(){
    document.getElementById("guest-screen").textContent = guestNum
    guestNum +=2
    }
function incrementThreeGuest(){
    guestNum +=3
    document.getElementById("guest-screen").textContent = guestNum

}

function clearBtn(){
    if (guestNum > homeNum){
         document.getElementById("winner-msg").textContent = "Guest Teams Wins!"
    }
    else if(homeNum > guestNum){
        document.getElementById("winner-msg").textContent = "Home Teams Wins!" 
    }
    else if(guestNum === homeNum && homeNum > 0 && guestNum > 0){
        document.getElementById("winner-msg").textContent = "OVERTIME!"
    }
    else if( guestNum === 0 || homeNum === 0){
        document.getElementById("winner-msg").textContent = "Start Game"
    }
    homeNum = 0 
    guestNum = 0
    document.getElementById("guest-screen").textContent = guestNum
    document.getElementById("home-screen").textContent = homeNum

}

