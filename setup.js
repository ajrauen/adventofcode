$(document).ready(function(){
	$('#probBtn1').click(function(){
		problemOne();
	});
	
	$('#probBtn12').click(function(){
		problemOneTwo();
	});
	
	$('#probBtn2').click(function(){
		problemTwo();
	});
	
	$('#probSolutionBtn1').click(function(){
		var functString = problemOne.toString();
		$('#probSolution1').val(functString.trim());
	});
	
	$('#probSolutionBtn12').click(function(){
		var functString = problemOneTwo.toString();
		$('#probSolution12').val(functString.trim());
	});
	
	$('#prob1Part2Btn').click(function(){
		$('#prob1Part1Container').hide();
		$('#prob1Part2Container').show();
	})
	
	$('#prob1Part1Btn').click(function(){
		$('#prob1Part2Container').hide();
		$('#prob1Part1Container').show();
	})
	
})

