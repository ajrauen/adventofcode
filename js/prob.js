//Problem 1

var problemOne = function(){
	
	//Take the input string and break it into an array
	var inputArray = problemOneInput.split('');
	//Initialze some variables
	var total = 0,
		i = 0,
		len = inputArray.length;
	//Go through whole array. If the item in the array is a '(', the rules say add. So we do. Other wise we subrtract	
	for(i;i<len;i++){
	   if(inputArray[i] === '('){
		total++;
	   }else{
		total--;
	   }
	}
	//put the value in the input field
	$('#probAnswer1').val(total);
}

var problemOneTwo = function(){
	
	//Take the input string and break it into an array
	var inputArray = problemOneInput.split('');
	//Initialze some variables
	var total = 0,
		i = 0,
		len = inputArray.length;
	//Go through whole array. If the item in the array is a '(', the rules say add. So we do. Other wise we subrtract	
	for(i;i<len;i++){
	   if(inputArray[i] === '('){
		total++;
	   }else{
		total--;
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
	$('#probAnswer12').val(i);
}

var problemTwo = function(){
	//I used a little trick(backtick) that is only availabe in Chrome and newer versions of firefox that let me paste multiable lines of text.
	
	//Here I break apart the string by the newline character
	var inputs = problemTwoInput.split("\n");
	
	//Initial some variables
	/*
		neededSquareFeet: holds total feet;
		dimensionArray: holds a single array that consist of 3 values.
	*/
	var neededSquareFeet = 0,
		dimensionArray = [],
		i = 0,
		len = inputs.length;
	
	//So inputs is an array of strings that look something like this "23x45x85". I want to go through each of those strings.
	for(i;i<len;i++){
		//First I want to break that strings into its numbers. So I split the strings on the 'x' and then turn the string into a number
		//Example the string "23" becomes the number 23;
		dimensionArray = inputs[i].split('x').map( Number );
		//Next we do the math to get the sides;
		var s1 = 2 * dimensionArray[0] * dimensionArray[1],
			s2 = 2 * dimensionArray[1] * dimensionArray[2],
			s3 = 2 * dimensionArray[0] * dimensionArray[2];
		
		//And we get the area with the sides;
		var totalArea = s1 + s2 + s3,
			//I want to find the smallest side so I sort them. The smallest will be the first item in the array or smallside[0]
			//Since I multplied by 2 when I computed the side, I now have to divid by 2
			smallestSide = [s1,s2,s3].sort(function(a, b){return a-b})[0]/2;
		//Add the area with the smallest side
		totalArea = totalArea + smallestSide;
		//finally, add the area to the total number of needed square feet
		neededSquareFeet = neededSquareFeet + totalArea
	}
	$('#probAnswer2').val(neededSquareFeet)
}

var problemTwoTwo = function(){
	//Same as problemTwo
	var inputs = problemTwoInput.split("\n");
	var neededSquareFeet = 0,
		dimensionArray = [],
		i = 0,
		len = inputs.length;
	
	for(i;i<len;i++){
		//Split things up the same way again
		dimensionArray = inputs[i].split('x').map( Number );

		//The problem ask us to find the least amount of ribbon to wrap the sides. The formual for that is 
		// 2 * the shortest side + 2 * the second shortest side.
		// Using the same sort function as problemTwo, the first and second item in the array will be the shortest
		//Next the problem wants the length of the ribbon which is all of the sides multipled together. Add them all up and you have your Answer
		var sorted = dimensionArray.sort(function(a, b){return a-b}),
			ribbon = 2 * sorted[0] + 2 * sorted[1] + sorted[0] * sorted[1] * sorted[2];

		//finally, add the area to the total number of needed square feet
		neededSquareFeet = neededSquareFeet + ribbon
	}
		$('#probAnswer22').val(neededSquareFeet);
};

var problemThree = function(){
	//This is a mapping problem in a Santa disguise.
	//We want to know where little Santa has gone. We know he starts somewhere and just like a graph has X/Y coordinates, this does too.
	//And just like the center of a graph is [0,0], I make a variable called pos which keeps track of where Santa is.
	//Since we want to know all of the places he has visited, I create an array to tell me which coordinates he's gone too. I add [0,0] because Santa starts there
	var pos = [0,0],
		visitedLocations = [[0,0]];

	var inputArray = problemThreeInput.split('');
	var i = 0,
		j = 0,
		len = inputArray.length,
		location,
		vLen,
		hasVisited;

	for(i;i<len;i++){
		//Here's something different. Instead of doing 4 if's to check if the input in an up,down,left or right arrow. I use a switch
		//If Santa goes up, I increase the number store first array location (pos[0]), if he goes down I decrease that number
		//And the same for left and right
		switch(inputArray[i]){
			case '>':
				pos[1]++;
				break;

			case '<':
				pos[1]--;
				break;

			case '^':
				pos[0]++;
				break;

			case 'v':
				pos[0]--;
				break;
		}

		location = [];
		hasVisited = false;
		j = 0;
		vLen = visitedLocations.length;

		//Now we want to check if where Santa is at is the same as a place he's already been.
		//So we check he visitedLocations array and see if there are any matches for his current location.
		//If there is, we say that he has visited here before by setting the hasVisited variable to true;
		for(j;j<vLen;j++){
			location = visitedLocations[j];
			if(location[0] === pos[0] && location[1] === pos[1]){
				hasVisited = true;
				break;
			}
		}

		//If santa hasn't visited the house before, the hasVisited variable will be false. In that case, we add this new
		// place to the places Santa has visited.
		if(!hasVisited){
			visitedLocations.push([pos[0],pos[1]]);
		}
		//We have to reset the variable for next time!
		hasVisited = false;
	}
	$('#probAnswer3').val(visitedLocations.length)

};



