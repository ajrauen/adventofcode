$(document).ready(function(){
	var functString;

	$('#probBtn1').click(function(){
		problemOne();
	});
	
	$('#probBtn12').click(function(){
		problemOneTwo();
	});
	
	$('#probBtn2').click(function(){
		problemTwo();
	});
	
	$('#probBtn22').click(function(){
		problemTwoTwo();
	});

	$('#probBtn3').click(function(){
		problemThree();
	});

	$('#probBtn32').click(function(){
		problemThreeTwo();
	});
	
	
	
	$('#probSolutionBtn1').click(function(){
		functString = problemOne.toString();
		$('#probSolution1').val(functString.trim());
	});
	
	$('#probSolutionBtn12').click(function(){
		functString = problemOneTwo.toString();
		$('#probSolution12').val(functString.trim());
	});
	
	$('#probSolutionBtn2').click(function(){
		functString = problemTwo.toString();
		$('#probSolution2').val(functString.trim());
	});
	
	$('#probSolutionBtn22').click(function(){
		functString = problemTwoTwo.toString();
		$('#probSolution22').val(functString.trim());
	});

	$('#probSolutionBtn3').click(function(){
		functString = problemThree.toString();
		$('#probSolution3').val(functString.trim());
	});

	$('#probSolutionBtn32').click(function(){
		functString = problemThreeTwo.toString();
		$('#probSolution32').val(functString.trim());
	});
	
	$('#prob1Part2Btn').click(function(){
		$('#prob1Part1Container').hide();
		$('#prob1Part2Container').show();
	});
	
	$('#prob1Part1Btn').click(function(){
		$('#prob1Part2Container').hide();
		$('#prob1Part1Container').show();
	});
	
	$('#prob2Part2Btn').click(function(){
		$('#prob2Part1Container').hide();
		$('#prob2Part2Container').show();
	});
	
	$('#prob2Part1Btn').click(function(){
		$('#prob2Part2Container').hide();
		$('#prob2Part1Container').show();
	});

	$('#prob3Part2Btn').click(function(){
		$('#prob3Part1Container').hide();
		$('#prob3Part2Container').show();
	});

	$('#prob3Part1Btn').click(function(){
		$('#prob3Part2Container').hide();
		$('#prob3Part1Container').show();
	});
	
	
});

