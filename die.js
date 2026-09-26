

// console.log(document.getElementById("dieImage").getAttribute("src"))

document.getElementById("rollDice").addEventListener("click",function(){
    let randomDieNumber = Math.ceil(Math.random() * 6)
    
    document.getElementById("dieText").innerText = randomDieNumber
    
    let dieImg = "die"+randomDieNumber+".png"
    
    console.log(dieImg)
    document.getElementById("dieImage").setAttribute("src",dieImg)   
})


//WORKING WITH KEYBOARD EVENTS
// document.getElementById("username").addEventListener("keydown",function(event){
//     if(event.key === "Enter"){
//         console.log("You finally pressed enter key")
//     }
// })

function handleInput(event){
    // document.getElementById("usernameText").innerText = event.target.value
    console.log(event.key)
}


document.getElementById("submitUsername").addEventListener("click",function(){
     document.getElementById("usernameText").innerText = document.getElementById("username").value
    console.log(document.getElementById("username").value)
})
document.getElementById("username").addEventListener("keyup",handleInput)


document.getElementById("show").addEventListener("click",function(){
    document.getElementById("box").style.display = "block"
})
document.getElementById("hide").addEventListener("click",function(){
    document.getElementById("box").style.display = "none"
})

//Added on Sept 26, 2026

// developers need to pull this


//another update
