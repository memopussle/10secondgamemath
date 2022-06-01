/* *********I. Create a question generator****** */

//need to generate a simple arithmetic equation, calculate is answer
//limit the number between 0 -> 10 and abstract random number generator into a function
$(document).ready(function () {
  let currentQuestion; //keep state of current question being presented t the user
  let timeLeft = 10; //Interval call back function into a count down
  let score = 0;
  let highScore = 0;
  let limit = $("#range_limit").val();
  let operator = ""; //for + - * /
  let interval; //keep record of interval ID.
  const userSelectOperator = $("input[type=checkbox]");
  let filteredOperator = [...userSelectOperator].filter(
    (element) => element.checked
  );

  //generate + - * / /
  const getOperator = (userSelectOperator) => {
    //   filter checked input
    let filteredOperator = [...userSelectOperator].filter(
      (element) => element.checked
    );
    //-> Array [ input#substract.ml-3.option-box ]
    let index = Math.floor(Math.random() * filteredOperator.length);
    //-> index is always at 0
    let nameOperator = filteredOperator[index].id;

    if (nameOperator === "plus") {
      return "+";
    } else if (nameOperator === "substract") {
      return "-";
    } else if (nameOperator === "multiply") {
      return "*";
    } else if (nameOperator === "divide") {
      return "/";
    }
  };

  const randomNumberGenerator = (limit) => {
    //math.ceil: round the number up to the next interger
    return Math.ceil(Math.random() * limit);
  };

  //generate random question for equation +
  let questionGenerator = function (limit) {
    let question = {};
    //generate a random number from 1 -> 10

    //fire change event on every input

    num1 = randomNumberGenerator(limit);
    num2 = randomNumberGenerator(limit);

    operator = getOperator(userSelectOperator);

    //if operator = /
    //includes is method for only string & array => convert getEquation to string
    while (operator === "/" && getEquation().toString().includes(".")) {
      num1 = randomNumberGenerator(limit);
      num2 = randomNumberGenerator(limit);
    }

    while (operator === "-" && getEquation() < 0) {
      num1 = randomNumberGenerator(limit);
      num2 = randomNumberGenerator(limit);
    }
    question.equation = String(num1) + " " + operator + " " + String(num2);
    question.answer = getEquation();

    return question;
  };

  // //get equation by determining operator + - * /
  const getEquation = () => {
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else if (operator === "*") {
      return num1 * num2;
    } else if (operator === "/") {
      return num1 / num2;
    }
  };

  /************** Add 1 to timeLeft when user gets answer correct   ************** */
  const updateTimeLeft = (amount) => {
    timeLeft += amount;
    $("#time-left").text(timeLeft);
  };

  /* ******************Inject the equation into the DOM******************* */
  const renderNewQuestion = function () {
    currentQuestion = questionGenerator(limit); //currentQuestion = question
    $("#equation").text(currentQuestion.equation);
  };

  const updateScore = (amount) => {
    score += amount;
    $("#score").text(score);
  };

  const updateHighScore = (score) => {
    if (score > highScore) {
      highScore = score;
      $("#highscore").text(highScore);
    }
  };

  /* *****************Add user's Input element and Compare Answer ************/

  //answer input
  //compare user inputwith correct answer
  const checkAnswer = function (userInput, answer) {
    if (userInput === answer) {
      renderNewQuestion();
      $("#user-input").val(""); //clear previous input when user gets it right
      updateTimeLeft(+1); //update +1s for time when user answer is right
      updateScore(+1); //update score when user input is correct
    }
  };

  //reset timeLeft for a new round
  const startGame = function () {
    if (!interval) {
      // when interval is clear -> timeleft= 0
      if (timeLeft === 0) {
        updateTimeLeft(10);
        updateScore(-score); // set score back to 0
      }

      interval = setInterval(function () {
        updateTimeLeft(-1);

        if (timeLeft === 0) {
          updateHighScore(score); //update high score
          clearInterval(interval);
          interval = undefined;
        }
      }, 1000);
    }
  };

  //event listener "keyup": when the user releases a key (on the keyboard)
  $("#user-input").on("keyup", function () {
    startGame();
    //user's value returns as a string ->convert it to a number using Num()
    checkAnswer(Number($(this).val()), currentQuestion.answer);
  });

  $(".start-game").on("click", function () {
    startGame();
  });

  //add event listener to input type range
  $(document).on("change", "input[type=range]", function () {
    limit = $("output").text();
    renderNewQuestion(limit);
  });

  $(document).on("click", "input[type=checkbox]", function () {
    startGame();
    renderNewQuestion();
  });

  //a new question is generated when user's input is correct.
  renderNewQuestion();
});
