import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ApiQuiz, DevQuiz } from './Types/quizTypes';

function App() {

  const [quiz, setQuiz] = useState<DevQuiz[]>([]);
  let [counter, setCounter] = useState(0);

  const suffle = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    async function getQuizAPI() {
      const api = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple');
      const { results } = await api.json();
      const apiData: DevQuiz[] = await results.map((obj: ApiQuiz) => {
        return {
          question: obj.question,
          correct_answer: obj.correct_answer,
          options: suffle(obj.incorrect_answers.concat(obj.correct_answer)),
        }
      })
      console.log(apiData);
      setQuiz(apiData);
    }
    getQuizAPI();

  })

  const nextBTN = (e: any) => {
    e.preventDefault();
    if (counter < 9) {
      console.log(counter)
      setCounter(++counter);
    } else {

      console.log('EEEE')
      setCounter(0);
    }
  }


  if (quiz.length === 0) {
    return <h1>Loading...</h1>
  }
  else {
    return (
      <div>
        <p>{quiz[counter].question}</p>
        {quiz[counter].options.map((obj:String) => {
          return (
            <button>{obj}</button>
          )
        })}
        <button onClick={nextBTN}> Submit </button>
      </div>
    );
  }
}

export default App;
