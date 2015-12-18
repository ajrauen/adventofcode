//Problem 1

var problemOne = function(){
	
	//Take the input string and break it into an array
	var inputArray = problemOneInput.split('');
	//Initialze some variables
	var total = 0,
		i = 0;
		len = inputArray.length;
	//Go through whole array. If the item in the array is a '(', the rules say add. So we do. Other wise we subrtract	
	for(i;i<len;i++){
	   if(inputArray[i] === '('){
		total++
	   }else{
		total--
	   }
	}
	//put the value in the input field
	$('#probAnwser1').val(total)
}

var problemOneTwo = function(){
	
	//Take the input string and break it into an array
	var inputArray = problemOneInput.split('');
	//Initialze some variables
	var total = 0,
		i = 0;
		len = inputArray.length;
	//Go through whole array. If the item in the array is a '(', the rules say add. So we do. Other wise we subrtract	
	for(i;i<len;i++){
	   if(inputArray[i] === '('){
		total++
	   }else{
		total--
	   }
	   //Up untill here we have done the same thing. But since we want to know where the number become negative
	   //we check if total is less than 0. If it is that means the variable 'i' is number where total became negative...almost
	   if(total < 0){
		   break;
	   }
	   
	}
	//Since we started at 0, our letter "i"(the number where total became negative will be 1 less than it should be)
	// So by doing i+1, we can make sure we have the right number
	i = i + 1;
	$('#probAnwser12').val(i)
}

var problemTwo = function(){
	var inputs = problemTwoInput.split("\n");
	
	var neededSquareFeet = 0
		dimensionArray = [],
		i = 0,
		j = 0,
		len = inputs.length;
	//Go through whole array. If the item in the array is a '(', the rules say add. So we do. Other wise we subrtract	
	for(i;i<len;i++){
		dimensionArray = inputs[i].split('x').map( Number );
		console.log(dimensionArray)
		var s1 = 2 * dimensionArray[0] * dimensionArray[1],
			s2 = 2 * dimensionArray[1] * dimensionArray[2],
			s3 = 2 * dimensionArray[0] * dimensionArray[2];
		
		var totalArea = s1 + s2 + s3,
			smallestSide = [s1,s2,s3].sort(function(a, b){return a-b})[0]/2;
		totalArea = totalArea + smallestSide;
		neededSquareFeet = neededSquareFeet + totalArea
	}
	$('#probAnwser2').val(neededSquareFeet)
}



