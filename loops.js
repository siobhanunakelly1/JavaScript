var counter = 0;

//print out random number 50 times
/*while(counter < 50) {
	counter = counter + 1;
	var randomNumber = Math.floor(Math.random() * 50) + 1;
	document.write(randomNumber + " ");
}*/


//Give user 3 tries to guess correct answer
/*
while(answer != "4"){
	var answer = prompt("What is 2 + 2?");
	counter = counter + 1;
	
	if (counter == 3){
		document.write("You ran out of tries");
		break
	}
}

if(answer == "4"){
	document.write("correct");
}*/

//do while loop
/*
do{
	var name = prompt("What s your name");
} while(name === null || name >= 0)//cancel prompt OR press okay without entering
*/

//for loop
/*
for (x = 0; x < 100; x +=1){
	document.write(x);
}*/

//break
/*while(true){
	document.write("Infinity");
	counter +=1;
	
	if (counter == 10){
		break
	}
}*/

//loop challenge
var randomNumber = Math.floor(Math.random() * 10) + 1;
 //solution1
 /*
do{
	var answer = prompt("Guess the number");
	counter +=1;
}while (answer != randomNumber)
	

*/

//solution2
for(counter = 0; answer != randomNumber; counter+=1){
	var answer = prompt("Guess the number");
}

document.write("You guessed " + counter + " times");
