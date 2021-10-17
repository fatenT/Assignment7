var user_entry;
var computer_entry;
var computer_random;
var choices_arr = ["Rock", "Paper", "Scissors "];

function game_results(computer_entry, user_entry) {
    if (computer_entry === user_entry){
        alert("Oh! It is a tie! You are " + user_entry + " and the computer is " +  computer_entry);
    }
    else {
        if (user_entry === "Rock" && computer_entry === "Scissors"){
            alert("Congrats! \n You Won! You are " + user_entry + " and you broke the computer's " +  computer_entry);
        }
        
        if (user_entry === "Scissors" && computer_entry === "Paper"){
            alert("Congrats! \n You Won! You are " + user_entry + " and you cut the computer's " +  computer_entry);
        }
        
        if (user_entry === "Paper" && computer_entry === "Rock"){
            alert("Congrats! \n You Won! You are " + user_entry + " and you covered the computer's " +  computer_entry);
        }
        
        if (computer_entry === "Rock" && user_entry === "Scissors"){
            alert("Oops! \n You Lost! You are " + user_entry + " and the computer is " +  computer_entry);
        }
        
        if (computer_entry === "Scissors" && user_entry === "Paper"){
            alert("Oops! \n You Lost! You are " + user_entry + " and the computer is " +  computer_entry);
        }

        if (computer_entry === "Paper" && user_entry === "Rock"){
            alert("Oops! \n You Lost! You are " + user_entry + " and the computer is " +  computer_entry);
        }
    }
}

function start_game () {
    //User Choice
    user_entry = window.prompt("Hi, wanna play (Rock, Paper, Scissors)? Choose one to start playing! ");
    //Convert user's entry to match the computer's entry with uppercase first letter
    user_entry = user_entry.charAt(0).toUpperCase() + user_entry.slice(1);  

    //Check for a valid user entry
    if (user_entry !== "Rock" && user_entry !== "Paper" && user_entry !== "Scissors") {
        alert("Wrong entry, please play fair!")
    }
    else {
        //Computer Choice
        computer_random = Math.floor(Math.random() * 3);            

        if (computer_random === 0){
            computer_entry = "Rock";
        }
        else if (computer_random === 1){
            computer_entry = "Paper";
        }
        else if (computer_random === 2){
            computer_entry = "Scissors";
        }
                                    
        game_results(computer_entry, user_entry);
    }
}

start_game();










