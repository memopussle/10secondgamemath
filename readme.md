# 10 Sec Math Game Project - Altcademy
---

#### User needs to input the correct answer to a basic arihmetic equation. There is a limit of 10 seconds for which the user can input the correct answer and progress to the next question.

#### If the user runs out of time, game ends. If the user makes a correct guess, an additional 1 second is added to the available time. 

#### Minimum requirements: 

1. An input for the user to type the answer (Event Listener)

2. An element displays the current math equation question (DOM manipulation)

3. Equation uses "+" operators only (function)

4. A count down for the time left (Interval,Time, DOM manipulation)

5. Game starts when the user clicks a button or starts typing the input (Event Listener)
 
6. Game ends when the user runs out of time (Interval, Time, Function)

7. The user makes a correct guess, add 1 second to the available time left (Function)

8. The current score is shown (DOM manipulation)

9. A way to restart the game if time runs out (Function)

---

## How to build it?

#### 1. Generate random numbers
- Use method Math random

#### 2. Generate a random question

- the question will generate an equation 
- use an object to store those values ( answer and question)

#### 3. Render the new question to DOM

#### 4. Update Score
- Every time user answers a right question, score will increment to 1

#### 5. Update time 
- Create a function to update timer counting down from 10 ( default) to 0 and inject it to HTML by using DOM

#### 5. Check user's answer to see if it matches with computer's answer

- If the answer is matched, a new question will be generated
- Input will clear previous value
- +1 second will be added to timer when user gets a correct answer
- +1 to Score

#### 6. Get timer counts down from 10 to 0 by using setInterval ( will execute every 1000 miliseconds)
- when timer is 0, clear Interval and clear score for a new round. Timer will be set from 10.

#### 7.Update high score
- When time = 0, update score to high score section. If current score is greater than high score, high score will be replaced by score as a new set of high score.