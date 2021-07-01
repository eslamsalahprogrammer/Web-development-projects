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
    
    
        if( score== 8 || score==7 || score==6){
			swal("نتيجتك","أنت شخص إيجابي و مفعم بالثقة و لديك إيمان تام تقريبا بأي شيء تفعله و من المحتمل أن تكون شخصا كفؤا في حالات الطوارئ و لأنك ثابت جدا و معتمد على نفسك فإنك تحب أن تكون لك يد في كل مايحدث حولك فعلى سبيل المثال إذا كانت هناك إعادة تنظيم في المكان الذي تعمل به فإنك ستحب أن تكون مشتركا في التنظيم .")
			return false;
			
        }
    else if( score==5 || score==4){
		swal("نتيجتك","يبدو أنك انسان واثق من نفسه و مستعد لخوض بعض المخاطر في حياته على الرغم أنك بوجه عام تفضل الأمان ولا تميل إلى المخاطرة , رغم أنك واثق من قدراتك إلا أنك تحرص على عدم الإفراط في الثقة و هذا يمكنك من اتخاذ القرارات بحرص و وعي بعد أن تفاضل بين كل الخيارات المتاح.")
        return false;
        
    }
    else{
		swal("نتيجتك","يبدو أن ثقتك في قدراتك قليلة جدا , ربما يكون هذا بسبب ميلك إلى التوتر إلى حد ما أو تواضعك الشديد تجاه انجازاتك لدرجة أنك تقلل من شأنك أحيانا , ورغم أن الكثير من الناس يعجبهم التواضع و خاصة تواضع ذوي الإنجازات العظيمة إلا أنه قد يكون من المفيد أحيانا أن تقوم ما أنجزته في حياتك و ما لديك من مواهب مقارنة بالآخرين الذين يبدون أكثر ثقة منك")
        return false;  
    }
}
