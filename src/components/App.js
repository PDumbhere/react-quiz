import Main from "./Main";

import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Progress from "./Progress";
import Question from "./Question";
import Footer from "./Footer";
import Timer from "./Timer";
import NextButton from "./NextButton";
import FinishScreen from "./FinishScreen";
import { useQuiz } from "../contexts/QuizContext";

export default function App() {
  const { status } = useQuiz();
  return (
    <div>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
