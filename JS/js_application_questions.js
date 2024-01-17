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
  [
    "If Hana has an apple, and someone gives her another apple, how many apples does Hana have?  ",
    "2",
    "3",
    "4",
    "5",
    "A",
  ],
  [
    "Nora has 2 dolls, Nani buys her 3 dolls, how many dolls does she have?  ",
    "4",
    "5",
    "6",
    "7",
    "B",
  ],
  [
    "David has 5 dollar, he buys a popsicle with 2 dollars, how many dollars does he have?  ",
    "1",
    "2",
    "3",
    "4",
    "C",
  ],
  [
    "2 new students transferred to a class of 20 students, and 1 student is absent that day.  How many students are in the classroom?  ",
    "19",
    "20",
    "21",
    "22",
    "C",
  ],
  [
    "Tammy is born in 1999, how old would she be in 2018?  (Hint:  A person is 1-year old after being born.  ",
    "18",
    "19",
    "20",
    "21",
    "C",
  ],
  [
    "Jimmy made 50 dollars an hour as a programmer, he works 8 hours on Monday.  How much money does he make that day?  ",
    "6",
    "8",
    "50",
    "400",
    "D",
  ],
  [
    "A pizza is divided into 8 slices, and there are 4 children in the room, how many slices should each person have?  ",
    "1",
    "2",
    "4",
    "8",
    "B",
  ],
  [
    "A pizza is divided into 8 slices, and 4 people want to share the pizza equally, what fraction of the pizza should each person eat?  ",
    "1/8",
    "4/8",
    "1/2",
    "1/4",
    "D",
  ],
  [
    "Jack pours 1/2 cup of water onto a 1/4 cup of water, how full is the cup?  ",
    "3/4",
    "4/3",
    "2/4",
    "1/4",
    "A",
  ],
  [
    "Jack pours 2/5 cup of water out of a full cup of water, how full is the cup?  ",
    "1/5",
    "2/5",
    "5/3",
    "3/5",
    "D",
  ],
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
