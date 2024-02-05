import { useContext, useEffect, useState } from "react";
import QuestionsData from "../data/QuestionData";
import { DataContext } from "../App";

const Quiz = ()=>{
    //console.log(QuestionsData);
    const [current, setCurrent] = useState(0)
    const [selectChoice,setSelecChoice] = useState("")
    const {score,setScore,setAppState} = useContext(DataContext)

    useEffect(()=>{
        checkAnswer()
    },[selectChoice])

    const checkAnswer=()=>{
        if(selectChoice !==""){
            if(selectChoice===QuestionsData[current].answer){
                setScore(score+1)
                nextQuestion()
            }else{
                nextQuestion()
            }
        }
    }

    const nextQuestion =()=>{
        setSelecChoice("")
        if(current===QuestionsData.length-1){
            setAppState("score")
        }else{
            setCurrent(current+1)
        }
    }

    return(
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelecChoice("A")}>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelecChoice("B")}>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelecChoice("C")}>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelecChoice("D")}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz;