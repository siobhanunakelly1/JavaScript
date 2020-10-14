let cat = {
	name: "Dennis",
	colour: "black",
	eyes: "green",
	age: 2,
	state: "sleeping",
	currentState: function(){document.write(cat.name + " is currently " + cat.state);}
};

//document.write(cat.age);

cat.currentState();