let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissors");
let u = document.querySelector("#score1")
let c = document.querySelector("#score2")
let btn = document.querySelector("button")

function priority(event){
    let array = ["rock", "paper", "scissors"];

let randomItem = array[Math.floor(Math.random() * array.length)];


if (randomItem == "rock" && event == "rock") {
    return [3,randomItem]
}
else if (randomItem == "rock" && event == "paper") {
    return [1,randomItem];
}
else if(randomItem == "rock" && event == "scissors"){
    return [2,randomItem];
}


else if (randomItem == "paper" && event == "rock") {
    return [1,randomItem]
}
else if (randomItem == "paper" && event == "paper") {
    return [3,randomItem];
}
else if(randomItem == "paper" && event == "scissors"){
    return [2,randomItem];
}


else if (randomItem == "scissors" && event == "rock") {
    return [1,randomItem]
}
else if (randomItem == "scissors" && event == "paper") {
    return [2,randomItem];
}
else if(randomItem == "scissors" && event == "scissors"){
    return [3,randomItem];
}

console.log(randomItem); 

}

const handler = (event) => {
    console.log("You selected:", event.target.id); 
     let [x,y] = priority(event.target.id)
    if (x == 1) {
        if (u.innerText == "0") {
            u.innerText = "1";
        } else {
            u.innerText = parseFloat(u.innerText) + 1;
        }
        btn.style.marginLeft = "40%"
    btn.style.backgroundColor = "green"
    btn.innerText = `You won! ${event.target.id} beats ${y}`
    btn.style.width = "350px"

    } else if (x == 2) {
        if (c.innerText == "0") {
            c.innerText = "1";
        } else {
            c.innerText = parseFloat(c.innerText) + 1;
        }
btn.style.marginLeft = "40%"
 btn.style.backgroundColor = "red"
    btn.innerText = `You lose! ${event.target.id} beats ${y}`
    btn.style.width = "350px"

    } else {
        btn.style.marginLeft = "43%"
         btn.style.backgroundColor = "blue"
    btn.innerText = "It's a Draw"
    btn.style.width = "220px"

    }
};


rock.addEventListener("click", handler);
paper.addEventListener("click", handler);
scissor.addEventListener("click", handler);

btn.addEventListener("click" , ()=>{
    location.reload();
})