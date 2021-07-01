function submitAnswers(){
	var total = 8;
	var score = 0;
	
	// Get User Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	var q6 = document.forms["quizForm"]["q6"].value;
	var q7 = document.forms["quizForm"]["q7"].value;
	var q8 = document.forms["quizForm"]["q8"].value;
	var results = document.getElementById('results');
	// Validation
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			swal('You missed question '+ i);
			return false;
		}
	}
	
	// Set Correct Answers
	var answers = ["a","a","a","a","a"];
	
	// Check Answers
	for(i = 1; i <= total;i++){
        var results = document.getElementById('results');
		if(eval('q'+i) == answers[i - 1])
        {
			score++;
		}
    }
    
    
    if( score== 8 || score==7 || score==6){
     swal("نتيجتك","يبدو انك تعيش في عالم الكئآبة الذي سيطر عليك بشكل كبير , معظم الاجابات التي اجبت عنها تدل على انك تعاني من الكآبة بدرجة قد تكون كبيرة نوعا ما وتحتاج الى سيطرة فورية منك , حاول الابتعاد عن كل شيء يجلب لك الكآبة وحاول فعل الاشياء التي تشعر معها بالراحة ولا تهتم كثيرا لما يقوله الناس من حولك.")
           return false;
          
        }
	else if( score==5 || score==4 ){
      swal("نتيجتك","يبدو انك تعيش في عالم الكئآبة الذي سيطر عليك بشكل كبير , معظم الاجابات التي اجبت عنها تدل على انك تعاني من الكآبة بدرجة قد تكون كبيرة نوعا ما وتحتاج الى سيطرة فورية منك , حاول الابتعاد عن كل شيء يجلب لك الكآبة وحاول فعل الاشياء التي تشعر معها بالراحة ولا تهتم كثيرا لما يقوله الناس من حولك.")
	  return false;
    }
    else{
		swal("نتيجتك","رغم انك لا تعرف طعم الاكتئاب فهو يصيبك في بعض الساعات الا ان الامور لديك مسيطر عليها وقوة شخصيتك وثقتك بنفسك تجعلك تتغلب على جميع مظاهر الاكتئاب , الاكتئاب لديك في حدوده الدنيا لكن ليس هنالك مانع في اراحة نفسك وجسدك قليلا حتى تشعر بالنشاط اكثر في اليوم التالي")
        return false;  
    }
}
