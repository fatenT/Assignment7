//STEP 1
window.console.log("Step1");

var movies_arr = ["Anna and the King", "Pitch Perfect", "Speed", "Miss Congeniality", "Erin Brockovich"];
window.console.log(movies_arr[1]);
window.console.log("\n");


//STEP 2
window.console.log("Step2");

var movies = new Array(5);
movies[0]="Anna and the King";
movies[1]="Pitch Perfect";
movies[2]="Speed";
movies[3]="Miss Congeniality";
movies[4]="Erin Brockovich";    
window.console.log(movies[0]);
window.console.log("\n");

//STEP 3
window.console.log("Step3");

var movies = new Array(5);
movies[0]="Anna and the King";
movies[1]="Pitch Perfect";
movies[2]="Speed";
movies[3]="Miss Congeniality";
movies[4]="Erin Brockovich";

movies.splice(2,0,"The Proposal");

window.console.log(movies.length);   
window.console.log("\n");

//STEP 4
window.console.log("Step4");

var movies = [];
movies[0]="Anna and the King";
movies[1]="Pitch Perfect";
movies[2]="Speed";
movies[3]="Miss Congeniality";
movies[4]="Erin Brockovich";    

delete movies[0];
window.console.log(movies);
window.console.log("\n");

//STEP 5
window.console.log("Step5");

var movies = [];
movies[0]="Anna and the King";
movies[1]="Pitch Perfect";
movies[2]="Speed";
movies[3]="Miss Congeniality";
movies[4]="Erin Brockovich"; 
movies[5]="The Proposal"; 
movies[6]="Peterpan"; 

for (var i=0; i < movies.length; i++ ){
    window.console.log(movies[i]);
}
window.console.log("\n");

//STEP 6
window.console.log("Step6");

var movies = [];
movies[0]="Anna and the King";
movies[1]="Pitch Perfect";
movies[2]="Speed";
movies[3]="Miss Congeniality";
movies[4]="Erin Brockovich"; 
movies[5]="The Proposal"; 
movies[6]="Peterpan"; 

for (var index in movies){
    if (movies.hasOwnProperty(index)) {
        window.console.log(movies[index]);
    }
}
window.console.log("\n");

//STEP 7
window.console.log("Step7");

var movies = [];
movies[0]="Anna and the King";
movies[1]="Pitch Perfect";
movies[2]="Speed";
movies[3]="Miss Congeniality";
movies[4]="Erin Brockovich"; 
movies[5]="The Proposal"; 
movies[6]="Peterpan"; 
movies.sort();
                        
for (var index in movies){
    if (movies.hasOwnProperty(index)) {
        window.console.log(movies[index]);
    }
}

window.console.log("\n");

//STEP 8
window.console.log("Step8");

var movies = [];
movies[0]="Anna and the King";
movies[1]="Pitch Perfect";
movies[2]="Speed";
movies[3]="Miss Congeniality";
movies[4]="Erin Brockovich"; 
movies[5]="The Proposal"; 
movies[6]="Peterpan";

var leastFavMovies = ["Scream", "Child's Play", "Dumb and dumber "];

window.console.log("\n");
window.console.log("Movies I like:\n\n");

for (var i=0; i < movies.length; i++ ){
    window.console.log(movies[i]);
}

window.console.log("\n");
window.console.log("Movies I regret watching:\n\n");

for (var j=0; j < leastFavMovies.length; j++ ){
    window.console.log(leastFavMovies[j]);
}

window.console.log("\n");

//STEP 9
window.console.log("Step9");

var movies = [];
movies[0]="Anna and the King";
movies[1]="Pitch Perfect";
movies[2]="Speed";
movies[3]="Miss Congeniality";
movies[4]="Erin Brockovich"; 
movies[5]="The Proposal"; 
movies[6]="Peterpan";

var leastFavMovies = ["Scream", "Child's Play", "Dumb and dumber "];
movies = movies.concat(leastFavMovies);

window.console.log(movies.reverse().sort());
window.console.log("\n");

//STEP 10
window.console.log("Step10");

var movies = [];
movies[0]="Anna and the King";
movies[1]="Pitch Perfect";
movies[2]="Speed";
movies[3]="Miss Congeniality";
movies[4]="Erin Brockovich"; 
movies[5]="The Proposal"; 
movies[6]="Peterpan";

var leastFavMovies = ["Scream", "Child's Play", "Dumb and dumber "];
movies = movies.concat(leastFavMovies);

window.console.log("\n");
window.console.log(movies.pop());
