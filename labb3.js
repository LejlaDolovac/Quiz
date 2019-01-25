

var data;
var correctAnswer;

document.addEventListener('DOMContentLoaded', function() {  // Reads the code first then runs it

var req = new XMLHttpRequest();  // Create a request variabel and assigns a new XMLHttpRequest object to it.

 // Begin accessing JSON data
req.onreadystatechange = function() {
    if (req.readyState == 4) {
      if (req.status == 200) {
        data = req.response.results;
        var containerContent = "<form><h1>QuizMaster</h1>";
        let container = document.createElement("div");
        container.id = "container"; // Here i created an id to the container so i coulde use appendChild and display my questions
        container.classList.add("container");
        cont.appendChild(container);
        correctAnswer = data.correct_answer;

        // Here is the questions
        for (var q=0; q<data.length; q++) {
        containerContent += `     
          <p>${data[q].question}</p><br> 
          <input type="radio" name="q`+q+`" value="True"> True<br>
          <input type="radio" name="q`+q+`" value="False"> False<br>
        `;
        };
        containerContent += "<br><input id=button1 action='' type='button' value='Submit' onclick=Finito()></p> </form>"  // This does that i dont have to wright all of my questions in my code 

        document.getElementById("container").innerHTML = containerContent;
      

      } 
    }
  };
   req.open('GET', 'https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=boolean'); // Open a new connection using the GET-request on the URL
  req.responseType = 'json';
  req.send();

});

var Finito =  function () {
  var correctAnswers = 0;

  // loop all answers for result-object
  for (var q=0;q<data.length;q++){
    var userAnswer = null;

    // Collect all user answers from the user radio-input if radio is checked
    var question = document.getElementsByName('q'+q);
    for (var i=0;i<question.length;i++){
      if ( question[i].checked ) {
        userAnswer = (question[i].value);
      }
    }
    
    // count correct answers from user
    if (userAnswer === data[q].correct_answer) {
      correctAnswers++;
    }

  };

  document.getElementById('answer').innerHTML = 'Du har fått: ' + correctAnswers + ' rätt';

}






    