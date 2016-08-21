'use strict';
function add(x,y){
	x = parseFloat(x);
	y = parseFloat(y);
	return x+y;
}
function sub(x,y){
	x = parseFloat(x);
	y = parseFloat(y);
	return x-y;
}
function mul(x,y){
	x = parseFloat(x);
	y = parseFloat(y);
	return x*y;
}
function div(x,y){
	x = parseFloat(x);
	y = parseFloat(y);
	return x/y;
}
console.log('div of 1,2 is', div(1,2));
function calculator() {
	var parameter1,parameter2,operator,result;
	parameter1 = document.getElementById("parameter1");
	parameter2 = document.getElementById("parameter2");
	operator = document.getElementById("operator");
	result=document.getElementById("result");
	console.log(parameter1,"parameter1 working");
	console.log(parameter2,"parameter2 working");
	console.log(operator,"operator working");
	console.log(parameter1.value);
	console.log(parameter2.value);
	console.log(operator.value);
	console.log(result.value);
	
    switch(operator.value) {
		case 'addition':
		    result.value=add(parameter1.value,parameter2.value);
		    console.log(result.value);
			break;
		case 'substraction':
		    result.value=sub(parameter1.value,parameter2.value);
		    console.log(result.value);
			break;
		case 'multiplication':
		     result.value=mul(parameter1.value,parameter2.value);
		    console.log(result.value);
			break;
		case 'division':
		    result.value=div(parameter1.value,parameter2.value);
		    console.log(result.value);
			break;
	}
}