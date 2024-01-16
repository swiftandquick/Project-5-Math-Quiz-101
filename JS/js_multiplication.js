let qNumber = 0,
  quiz,
  status,
  question,
  selectedChoice,
  options,
  optionA,
  optionB,
  optionC,
  optionD,
  correctAnswers = 0;

const quizContent = [
  ["5 x 5 = ", "20", "25", "15", "30", "B"],
  ["100 x 0 = ", "0", "100", "50", "25", "A"],
  ["4 x 2 = ", "8", "16", "6", "12", "A"],
  ["8 x 7 = ", "8", "32", "56", "24", "C"],
  ["6 x 9 = ", "36", "48", "42", "54", "D"],
  ["3 x 12 = ", "12", "48", "24", "36", "D"],
  ["1 x 15 = ", "30", "15", "60", "45", "B"],
  ["4 x 5 = ", "10", "30", "20", "40", "C"],
  ["10 x 10 = ", "10", "100", "200", "300", "B"],
  ["3 x 14 = ", "42", "14", "56", "28", "A"],
];

function get(x) {
  return document.getElementById(x);
}

function newQuestion() {
  quiz = get("quiz");
  if (qNumber >= quizContent.length) {
    quizCompleted();
    return false;
  }
  questionSetUp();
  unansweredQuestion();
}

function checkAnswer() {
  options = document.getElementsByName("options");
  selectedChoice = "";
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedChoice = options[i].value;
    }
  }
  if (selectedChoice === quizContent[qNumber][5]) {
    correctAnswers++;
    quiz = get("quiz");
    if (qNumber >= quizContent.length) {
      quizCompleted();
      return false;
    }
    questionSetUp();
    answeredQuestion();
    quiz.innerHTML +=
      "<button id='submitAnswer' onclick='checkAnswer()'>Submit</button>";
    quiz.innerHTML += "<button onclick='nextQuestion()'>Next</button>";
    const btn = get("submitAnswer");
    btn.disabled = true;
  } else if (selectedChoice === "") {
    questionSetUp();
    unansweredQuestion();
    quiz.innerHTML +=
      "<br></br><span style='color:red;'><b><i><u>Please choose at least one answer.  </u></i></b></span>";
  } else {
    quiz = get("quiz");
    if (qNumber >= quizContent.length) {
      quizCompleted();
      return false;
    }
    questionSetUp();
    answeredQuestion();
    quiz.innerHTML +=
      "<button id='submitAnswer' onclick='checkAnswer()'>Submit</button>";
    quiz.innerHTML += "<button onclick='nextQuestion()'>Next</button>";
    const btn = get("submitAnswer");
    btn.disabled = true;
  }
}

function questionSetUp() {
  get("status").innerHTML =
    "Question " + (qNumber + 1) + "/" + quizContent.length;
  question = quizContent[qNumber][0];
  optionA = quizContent[qNumber][1];
  optionB = quizContent[qNumber][2];
  optionC = quizContent[qNumber][3];
  optionD = quizContent[qNumber][4];
}

function unansweredQuestion() {
  quiz.innerHTML = "<h3>" + question + "</h3><br></br>";
  quiz.innerHTML +=
    "<input type='radio' name='options' value='A'> " + optionA + "<br></br>";
  quiz.innerHTML +=
    "<input type='radio' name='options' value='B'> " + optionB + "<br></br>";
  quiz.innerHTML +=
    "<input type='radio' name='options' value='C'> " + optionC + "<br></br>";
  quiz.innerHTML +=
    "<input type='radio' name='options' value='D'> " +
    optionD +
    "<br></br><br></br>";
  quiz.innerHTML +=
    "<button id='submitAnswer' onclick='checkAnswer()'>Submit</button>";
  quiz.innerHTML += "<button onclick='nextQuestion()' disabled>Next</button>";
}

function answeredQuestion() {
  if (selectedChoice === "A") {
    optionA = "<strong>" + optionA + "</strong>";
    optionB = optionB;
    optionC = optionC;
    optionD = optionD;
  } else if (selectedChoice === "B") {
    optionA = optionA;
    optionB = "<strong>" + optionB + "</strong>";
    optionC = optionC;
    optionD = optionD;
  } else if (selectedChoice === "C") {
    optionA = optionA;
    optionB = optionB;
    optionC = "<strong>" + optionC + "</strong>";
    optionD = optionD;
  } else {
    optionA = optionA;
    optionB = optionB;
    optionC = optionC;
    optionD = "<strong>" + optionD + "</strong>";
  }
  quiz.innerHTML = "<h3>" + question + "</h3><br></br>";
  if (selectedChoice === "A") {
    quiz.innerHTML +=
      "<input type='radio' name='options' checked value='A'> " +
      optionA +
      "<br></br>";
    quiz.innerHTML +=
      "<input type='radio' name='options' value='B'> " + optionB + "<br></br>";
    quiz.innerHTML +=
      "<input type='radio' name='options' value='C'> " + optionC + "<br></br>";
    quiz.innerHTML +=
      "<input type='radio' name='options' value='D'> " +
      optionD +
      "<br></br><br></br>";
  } else if (selectedChoice === "B") {
    quiz.innerHTML +=
      "<input type='radio' name='options' value='A'> " + optionA + "<br></br>";
    quiz.innerHTML +=
      "<input type='radio' name='options' checked value='B'> " +
      optionB +
      "<br></br>";
    quiz.innerHTML +=
      "<input type='radio' name='options' value='C'> " + optionC + "<br></br>";
    quiz.innerHTML +=
      "<input type='radio' name='options' value='D'> " +
      optionD +
      "<br></br><br></br>";
  } else if (selectedChoice === "C") {
    quiz.innerHTML +=
      "<input type='radio' name='options' value='A'> " + optionA + "<br></br>";
    quiz.innerHTML +=
      "<input type='radio' name='options' value='B'> " + optionB + "<br></br>";
    quiz.innerHTML +=
      "<input type='radio' name='options' checked value='C'> " +
      optionC +
      "<br></br>";
    quiz.innerHTML +=
      "<input type='radio' name='options' value='D'> " +
      optionD +
      "<br></br><br></br>";
  } else {
    quiz.innerHTML +=
      "<input type='radio' name='options' value='A'> " + optionA + "<br></br>";
    quiz.innerHTML +=
      "<input type='radio' name='options' value='B'> " + optionB + "<br></br>";
    quiz.innerHTML +=
      "<input type='radio' name='options' value='C'> " + optionC + "<br></br>";
    quiz.innerHTML +=
      "<input type='radio' name='options' checked value='D'> " +
      optionD +
      "<br></br><br></br>";
  }
}

function nextQuestion() {
  options = document.getElementsByName("options");
  selectedChoice = "";
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedChoice = options[i].value;
    }
  }
  qNumber++;
  newQuestion();
}

function quizCompleted() {
  quiz.innerHTML =
    "<h2>You got " +
    correctAnswers +
    " of " +
    quizContent.length +
    " questions correct.   </h2>";
  get("status").innerHTML = "You have completed the quiz!  ";
  qNumber = 0;
  correctAnswers = 0;
}

window.addEventListener("load", newQuestion, false);
