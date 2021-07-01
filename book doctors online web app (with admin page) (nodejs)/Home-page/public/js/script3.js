
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
	var answers = ["a","a","a","a","a","a","a","a"];
	
	// Check Answers
	for(i = 1; i <= total;i++){
        var results = document.getElementById('results');
		if(eval('q'+i) == answers[i - 1])
        {
			score++;
		}
    }
    
    
        if( score==8 || score==7 ||score==6){
			swal("نتيجتك","للاسف كانت اجاباتك عن الاسئلة مفزعة جدا وهذا يعني بأنك شخص في الحقيقة تعاني من الوسواس القهري منذ زمن ربما كان طويلا دون ان تدري حتى , لديك شك مبالغ به فيالاشياء من حولك وانت تحتاج فعلا الى مراجعة الطبيب.")
           return false;
          
        }
    else if( score==5 || score==4){
        swal("نتيجتك","لا يمكننا القول بأنك مصاب بالوسواس القهري لكنك تعاني من بعض الاعراض التي تبدو لنا بأنها من اعراض الوسواس القهري , ربما تكون مصاب بالوسواس القهري لكن بشكل بسيط يسهل السيطرة عليه , حاول التقليل من شكوكك في الاشياء من حولك وامنح اصدقائك وعائلتك الفرصة حتى يتمكنوا من مساعدتك.")
        return false;
    }
    else{
      swal("نتيجتك","هذا جيد جدا , اجاباتك تشير الى انك شخص سليم جدا ولا تعاني من الوسواس القهري ابدا , شكوكك دائما في محلها وليس مبالغ بها لذا فانت انسان طبيعي ولا تعاني من الوسواس القهري ابدا")
        return false;  
    }
}