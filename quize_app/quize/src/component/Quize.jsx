import React , {useState, useEffect}from 'react';
import useSound from "use-sound";
import play from "../sound/play.mp3";
import  right from "../sound/right.wav";
import  wrong from "../sound/wrong.wav";
function Quize( {data , setStop, questionNumber , setQuestionNumber}) {

      const [question , setQuestion] = useState(null);
      const [selected , setSelected] = useState(null);
      const [className , setClassName] = useState("answere");
      const [letsPlay ] = useSound(play);
      const [correctAnswer] = useSound(right);
      const [wrongAnswer] = useSound(wrong);

      useEffect(() => {
          
          letsPlay();
      }, [letsPlay]);


      useEffect(() => {
        setQuestion( data[questionNumber - 1])
          
      }, [data , questionNumber]);

      const delay = (duration , callback) =>{

        setTimeout(() => {
            callback()
        }, duration);

      }


      const handleClick = (e)=>{
          setSelected(e);
          setClassName("answere active");
          delay(3000, () =>
            setClassName(e.correct ? "answere correct" : "answere wrong")
          )

          delay(5000, () =>{
              if(e.correct){
                  correctAnswer();
                  delay(1000, () => {
                    setQuestionNumber((prev) => prev + 1)
                    setSelected(null)
                  });
                  
              }else{
                  wrongAnswer()
                  delay(1000, () =>{
                    setStop(true)
                  })
                  
              }
          }
            
          )
      }
    





    return (
        <div className ="quize">
            <div className="question">{question?.ques}</div>
            <div className="answeres">
                {question?. answeres.map((e) =>(
                    <div className={selected === e ? className : "answere"} onClick = {() =>handleClick(e)}>{e.text}</div>
                ))}
                
                
            </div>
            
        </div>
    )
}

export default Quize
