
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
     	swal("نتيجتك","للأسف صديقي، أنت تعاني من مستوى ضغط نفسي عالٍ. لا داعي للقلق، لا شيء مخيف، ننصحك بالحديث مع مدرب حياة. كما ننصحك بتخفيف ضعوطات الحياة عن نفسك، خذ قسطاً من الراحة، عبر عن مشاعرك، امنح نفسك الأولوية، رفّه عن نفسك، تصالح مع ذاتك، مارس اليوجا والرياضة، استمتع بكل ما تحبه في الحياة.")
           return false;
          
        }
    else if( score==5 || score==4){ 
        swal("نتيجتك","أنت تعاني من مستوى متوسط من الضغط النفسي. خذ قسطاً من الراحة وحاول الترويح عن نفسك. تحدث مع شخص تثق به وعبر عن مشاعرك. امنح نفسك الأولوية ومارس الهوايات التي تحبها واستمتع بالحياة.")
        return false;
    }
    else{
      swal("نتيحتك","تهانينا لك! أنت لا تعاني من ضغوط نفسية. استمتع بحياة خالية من التوتر والضغوطات")
        return false;  
    }
}