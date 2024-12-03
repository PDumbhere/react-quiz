import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  // console.log(question);
  const { questions, index, dispatch, answer } = useQuiz();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
