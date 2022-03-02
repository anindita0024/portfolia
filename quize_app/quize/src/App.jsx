import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import Quize from './component/Quize';
import Timer from './component/Timer';
import Start from './component/Start';

function App() {



  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(" $ 0")


  const data = [
    {
      id: 1,
      ques: "Rolex is a what type of Company",
      answeres: [
        {
          text: "Phone",
          correct: false,
        },

        {
          text: "Watch",
          correct: true,
        },

        {
          text: "Food",
          correct: false,
        },

        {
          text: "Cosmetic",
          correct: false,
        },
      ]
    },

    {
      id: 2,
      ques: "When facebook is invented",
      answeres: [
        {
          text: "2004",
          correct: true,
        },

        {
          text: "2005",
          correct: false,
        },

        {
          text: "2006",
          correct: false,
        },

        {
          text: "2007",
          correct: false,
        },
      ]
    },

    {
      id: 3,
      ques: " How many day have january. ",
      answeres: [
        {
          text: "29",
          correct: false,
        },

        {
          text: "31",
          correct: true,
        },

        {
          text: "14",
          correct: false,
        },

        {
          text: "28",
          correct: false,
        },
      ]
    },

    {
      id: 4,
      ques: " What's the biggest animal in the world ",
      answeres: [
        {
          text: "Elephant",
          correct: false,
        },

        {
          text: "Giraffe",
          correct:false ,
        },

        {
          text: "The blue whale",
          correct: true,
        },

        {
          text: "Lion",
          correct: false,
        },
      ]
    },

    {
      id: 5,
      ques: " How many days have in a week",
      answeres: [
        {
          text: "3",
          correct: false,
        },

        {
          text: "6",
          correct: false,
        },

        {
          text: "10",
          correct: false,
        },

        {
          text: "7",
          correct: true,
        },
      ]
    },

    {
      id: 6,
      ques: " Which animal is known as the 'Ship of The Desert' ",
      answeres: [
        {
          text: "Lion",
          correct: false,
        },

        {
          text: "Tiger",
          correct: false,
        },

        {
          text: "Camel",
          correct: true,
        },

        {
          text: "Lizard",
          correct: false,
        },
      ]
    },

    {
      id: 7,
      ques: " Which planet is closest to the sun? ",
      answeres: [
        {
          text: "Venus",
          correct: true,
        },

        {
          text: "Earth",
          correct: false,
        },

        {
          text: "Mars",
          correct: false,
        },

        {
          text: "Saturn",
          correct: false,
        },
      ]
    },

    {
      id: 8,
      ques: " How many valves does the heart have? ",
      answeres: [
        {
          text: "1",
          correct: false,
        },

        {
          text: "2",
          correct: true,
        },

        {
          text: "4",
          correct: false,
        },

        {
          text: "5",
          correct: false,
        },
      ]
    },

    {
      id: 9,
      ques: "The unicorn is the national animal of which country? ",
      answeres: [
        {
          text: "Scotland",
          correct: false,
        },

        {
          text: "Germany",
          correct: true,
        },

        {
          text: "India",
          correct: false,
        },

        {
          text: "Switzerland",
          correct: false,
        },
      ]
    },

    {
      id: 10,
      ques: " How many legs does a spider have? ",
      answeres: [
        {
          text: "6",
          correct: false,
        },

        {
          text: "12",
          correct:  false ,
        },

        {
          text: "8",
          correct: true,
        },

        {
          text: "11",
          correct: false,
        },
      ]
    },

    {
      id: 11,
      ques: " Which month of the Year has the least number of days ? ",
      answeres: [
        {
          text: "January",
          correct: false,
        },

        {
          text: " February",
          correct: true,
        },

        {
          text: "March",
          correct: false,
        },

        {
          text: "April",
          correct: false,
        },
      ]
    },

    {
      id: 12,
      ques: " how many color had rainbow ",
      answeres: [
        {
          text: "7",
          correct: true,
        },

        {
          text: "31",
          correct: false,
        },

        {
          text: "14",
          correct: false,
        },

        {
          text: "28",
          correct: false,
        },
      ]
    },

    {
      id: 13,
      ques: " What do you call a house made of ice ",
      answeres: [
        {
          text: "Igloo",
          correct: true,
        },

        {
          text: "House",
          correct: false,
        },

        {
          text: "Skee",
          correct: false,
        },

        {
          text: "Ice House",
          correct: false,
        },
      ]
    },

    {
      id: 14,
      ques: " Which festival is called the festival of light? ",
      answeres: [
        {
          text: "Makarsankranti",
          correct: false,
        },

        {
          text: "Lori",
          correct: false,
        },

        {
          text: "Deewali",
          correct: false,
        },

        {
          text: "Holi",
          correct: true,
        },
      ]
    },

    {
      id: 15,
      ques: " When was Netflix founded",
      answeres: [
        {
          text: "2007",
          correct: false,
        },

        {
          text: "1997",
          correct: true,
        },

        {
          text: "1998",
          correct: false,
        },

        {
          text: "2001",
          correct: false,
        },
      ]
    },

    {
      id: 16,
      ques: " What is the top color of the rainbow ",
      answeres: [
        {
          text: "Orange",
          correct: false,
        },

        {
          text: "Green",
          correct: false,
        },

        {
          text: "Blue",
          correct: false,
        },

        {
          text: "Red",
          correct: true,
        },
      ]
    },


  ];





  const moneyPyramid = useMemo(() =>

    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 9000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 350000" },
      { id: 15, amount: "$ 500000" },
      { id: 16, amount: "$ 1000000" },
    ].reverse(),

    [])

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)

  }, [moneyPyramid, questionNumber])



  return (
    <div className="app">
      {username ? (
        <>
        <div className="main">
        {stop ? <h1 className=" earnedText">Your have earned {earned}</h1> : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">

              <Quize data={data}
                setStop={setStop}
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
              />

            </div>
          </>
        )}

      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map(m => (

            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className=" moneyListItemNumber">{m.id}</span>
              <span className=" moneyListItemAmount">{m.amount}</span>
            </li>

          ))}


        </ul>
      </div>
        </>
      ) : <Start setUsername = {setUsername}/>}
      
    </div>
  );
}

export default App;
