function timesTwo(x){
	return x*2;
}

function minusFive(x){
	return x-5;
}

function plusThree(x){
	return x+3;
}

function splinter(x,y){
	var z = x * y;
	array1 = [x,y,z];
	return array1;
}

console.log(splinter(1,2));

alert("your new number is " + plusThree (minusFive (timesTwo (
	prompt("give me a number"
		)))));