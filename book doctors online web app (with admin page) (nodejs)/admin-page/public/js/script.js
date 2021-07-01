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
	
	// Check Answers1
	for(i = 1; i <= total;i++){
        var results = document.getElementById('results');
		if(eval('q'+i) == answers[i - 1])
        {
			score++;
		}
    }
    
    
    
        if( score== 8 || score==7 || score==6){
			swal("نتيجتك","مستوي القلق عندك عال المستوى المتزايد من القلق  يسبب لك مخاطر خطيرة، بما في ذلك السمنة، أمراض القلب والاكتئاب. اتخذ خطوات لتقليل نسبته فورا . للتقليل من مستوى القلق لديك خيارين، يمكنك البدء بتشخيص مصدر القلق بهدف التخلص منه. التنبه لعوامل داخلية، مثل المخاوف او التوقعات غير الواقعية، وكذلك العوامل الخارجية، مثل الاسرة او متطلبات العمل، كما يمكنك البحث عن استراتيجيات جديدة للمواجهة، بما فيها ممارسة الذهان, الدعابة او ببساطة قول لا. . إذا كنت بحاجة إلى مساعدة في تحديد استراتيجيات التعامل مع القلق، تحدث الى طبيبك.")
           return false;
          
        }
    else if( score==4 || score==5){
        swal("نتيجتك","مستوي القلق عندك متوسط تشير إجاباتك إلى انك قد تكون تعاني من عوارض اكتئاب، إضافة للتوتر. الاكتئاب هو مرض محتمل خطير. في حال كانت عوارض الاكتئاب شديدة. الاكتئاب هو مرض خطير جداً. ان كانت اعراض الاكتئاب تصعب عليك القيام بمهامك اليومية الاعتيادية, عليك التوجه الى طبيبك الخاص واستشارته في هذا الشأن. إذا كانت لديك أفكار في الانتحارية أو في إيذاء نفسك، اتصل بالطبيب أو بخدمات الطوارئ على الفور")
   
        return false;
    }
    else{
		swal("نتيجتك","مستوي القلق عندك منخفض يرتبط التوتر القليل بالحياة الأكثر صحية، التعب الأقل والمزيد من راحة البال، إذا كنت ترغب بالمحافظة على هذا المستوي تابع ممارسة استراتيجيات السيطرة على التوتر التي تعمل لمصلحتك")
        return false;  
    }



	   
}

