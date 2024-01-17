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
  ["2 - 1 = ", "3", "1", "0", "5", "B"],
  ["5 - 3 = ", "1", "4", "2", "3", "C"],
  ["13 - 3 = ", "10", "9", "16", "11", "A"],
  ["7 - 7 = ", "14", "7", "2", "0", "D"],
  ["15 - 7 = ", "8", "20", "11", "14", "A"],
  ["10 - 8 = ", "4", "18", "2", "5", "C"],
  ["15 - 10 = ", "1", "25", "9", "5", "D"],
  ["5 - 6 = ", "11", "-1", "-4", "-11", "B"],
  ["10 - 15 = ", "-5", "25", "2", "-10", "A"],
  ["2 - 6 = ", "-3", "-4", "8", "-6", "B"],
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
    quiz.innerHTML +=
      "<button style='margin-left:5px;' onclick='nextQuestion()'>Next</button>";
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
    quiz.innerHTML +=
      "<button style='margin-left:5px;' style='margin-left:5px;' onclick='nextQuestion()'>Next</button>";
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
  quiz.innerHTML +=
    "<button style='margin-left:5px;' onclick='nextQuestion()' disabled>Next</button>";
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
