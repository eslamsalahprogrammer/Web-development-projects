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
    
    
        if( score== 8 || score==7 ||score==6){
			swal("نتيجتك","من الواضح أنك تعاني من انفصام الشخصية بشكل واضح وملموس , يبدو أنك تمتلك أكثر من شخصية في الوقت نفسه , قد يراك البعض مغروراً أو متكبراً إلا أنك في الواقع لا تستطيع التحكم بمسار شخصيتك بشكل صحيح , الأمر الذي يجعلك تبدو أمام الناس بوجوه كثيرة.")
           return false;
          
        }
    else if( score==5 || score==4){
        swal("نتيجتك","من الواضح أنك تعاني من انفصام الشخصية المؤقت , يبدو أنك شخص طبيعي وعقلاني , إلا أنك قد تشعر في بعض الأحيان بالضياع , وعدم القدرة على تحديد هويتك ومعرفة نفسك , الأمر الذي يجعلك غامضاً بالنسبة لمن حولك , وذو أكثر من وجه.")
        return false;
    }
    else{
      swal("نتيجتك","من الواضح أنك لا تعاني من انفصام الشخصية أبداً , يبدو أنك شخص طبيعي , واقعي , لديك قدرة جيدة على التحكم بمسار شخصيتك وأخذها إلى الطريق المناسب والمحدد , تمتلك شخصية واحدة فقط , الأمر الذي يجعلك أمام الناس تبدو صادقاً ومتوازناً أكثر من غيرك")
        return false;  
    }
}
