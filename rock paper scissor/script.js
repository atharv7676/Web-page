let Game_components = ["rock", "paper", "scissor"]
let n = 5;
let score_user=0
let score_computer=0
for(let i = 0; i<n; i++){
    enter = prompt("Enter your move [rock paper scissor]:")
    let random_choice = Math.floor(Math.random()*3)
    let random_occurence = Game_components[random_choice]
    if(enter === random_occurence){
        alert(`"You enterd same move which is ${random_occurence} so its tie "`)
        score_user ++
        score_computer ++
    }
    else if((enter === "scissor" && random_occurence === "rock") || (enter === "paper" && random_occurence === "scissor") || (enter === "scissor" && random_occurence === "rock")){
        alert(`"You lose, your move is ${enter} and computer move is ${random_occurence} so its loss "`)
        score_computer ++        
    }
    else if((enter === "rock" && random_occurence === "scissor") || (enter === "scissor" && random_occurence === "paper")||(enter === "rock" && random_occurence === "scissor")){
        alert(`"You won, your move is ${enter} and computer move is ${random_occurence} so its win "`)
        score_user ++      
    }
    else{
        alert("Your entered option is wrong try again")
        i--
    }
}


console.log(`youe have scored ${score_user} and computer has scored ${score_computer}`)
if(score_user > score_computer){
    console.log("Congratulations you won and computer lose")
}
else{
    console.log("Sad to say you lose")
}

