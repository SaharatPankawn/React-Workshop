import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionData";

const Score = ()=> {
    const {score,setAppState,setScore} = useContext(DataContext)

    const restartApp=()=>{
        setScore(0)
        setAppState("menu")
    }
    
  return (
    <div className="score">
      <h1>สรุปคะเเนน</h1>
      <h2>{score} / {QuestionsData.length}</h2>
      <button onClick={restartApp}>ทำเเบบทดสอบอีกครั้ง</button>
    </div>
  );
};

export default Score;
