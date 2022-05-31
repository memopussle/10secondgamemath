/* *********I. Create a question generator****** */

//need to generate a simple arithmetic equation, calculate is answer
//limit the number between 0 -> 10 and abstract random number generator into a function
$(document).ready(function () {
    let currentQuestion; //keep state of current question being presented t the user

    const randomNumberGenerator = (size) => {
      //math.ceil: round the number up to the next interger
      return Math.ceil(Math.random() * size);
    };

    //generate random question for equation +
    const questionGenerator = () => {
      let question = {};
      //generate a random number from 1 -> 10
      const num1 = randomNumberGenerator(10);
      const num2 = randomNumberGenerator(10);

      question.answer = num1 + num2;
      question.equation = String(num1) + "+" + String(num2);
      return question;
    };

    /* ******************Inject the equation into the DOM******************* */
    currentQuestion = questionGenerator();
    $("#equation").text(currentQuestion.equation);
})
