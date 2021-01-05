import React, { useEffect } from 'react';
import { useState } from 'react';
import { ApiQuiz, DevQuiz } from './Types/quizTypes';

export default function App() {
  let [counter, setCounter] = useState<number>(-1);
  let [quiz, setQuiz] = useState<DevQuiz[]>([]);
  let [selectedAnswer, SetselectedAnswer] = useState<String>('');
  let [quizPoints, SetquizPoints] = useState<number>(0)
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
      });

      setQuiz(apiData);
      setCounter(0);
    }
    getQuizAPI();
  }, [])

  console.log(quiz)

  
  function myFunction() {
    setCounter(counter+1);
  }
  console.log(counter)
  if (counter == -1) {
    return <h1>Loading...</h1>
  }
  if(counter == 10){
    return(
      <h1>Quiz End</h1>
    )
  }
  else {
    let question = quiz[counter];
    if (selectedAnswer.length == 0) {
    }
    else {
      if (selectedAnswer == question.correct_answer) {
        SetquizPoints(prev => prev + 1);
        SetselectedAnswer('');
        setTimeout(myFunction, 1000);
      }
      else {
        SetquizPoints(prev => prev + 0);
        console.log('Wrong Answer');
        SetselectedAnswer('');
        setTimeout(myFunction, 3000);
      }
    }
    return (
      <div>
        <h1 onClick={() => { console.log('1') }}>{quizPoints}/10</h1>
        <h1>{question.question}</h1>
        {
          question.options.map(ob => {
            return (
              <button onClick={(e: any) => {
                e.preventDefault();
                SetselectedAnswer(ob);
              }}>{ob}</button>
            )
          })
        }
      </div>
    )
  }
}