import * as React from "react";
import { useLanguage } from "../../context";
import { Heading } from "../DarkPatterns/DarkPatterns.styled";
import Questionaire, { AnswerButton } from "./Questionaire";
import {
  QuestionnaireWrapper,
  TotalScore,
} from "./QuizPage.styled";
import json from "./quizSource";
import jsonLt from "./quizSourceLT";

const QuizPage = (): React.ReactElement => {
  const locale = useLanguage();

  const [questions] = React.useState(
    locale.lang === "en" ? Object.values(json) : Object.values(jsonLt)
  );

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const [score, setScore] = React.useState(0);

  const [gameEnded, setGameEnded] = React.useState(false);

  const handleAnswer = (answer: string) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    if (answer === questions[currentIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (newIndex >= questions.length) {
      setGameEnded(true);
    }
  };

  const tryAgainClick = () => {
    setScore(0);
    setCurrentIndex(0);
    setGameEnded(false);
  };

  const {
    buttons: {
      tryAgain
    },
    quiz,
  } = useLanguage().strings;

  return (
    <React.Fragment>
      <Heading>{quiz.heading}</Heading>
      {gameEnded ? (
        <QuestionnaireWrapper>
          <TotalScore>
            {quiz.score} {score} / {questions.length}
          </TotalScore>
          <AnswerButton
            answer={tryAgain}
            onClick={tryAgainClick}
          ></AnswerButton>
        </QuestionnaireWrapper>
      ) : (
        <QuestionnaireWrapper>
          <Questionaire
            question={questions[currentIndex].question}
            correctAns={questions[currentIndex].correctAnswer}
            incorrectAns={questions[currentIndex].incorrectAnswers}
            handleAnswer={handleAnswer}
            picture={questions[currentIndex].picture ? questions[currentIndex].picture : undefined}
          />
        </QuestionnaireWrapper>
      )}
    </React.Fragment>
  );
};

export default QuizPage;
