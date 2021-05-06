import { Button, Grid } from "@material-ui/core";
import * as React from "react";
import MiniDrawer from "../../components/Drawer/MiniDrawer";
import { Heading } from "../DarkPatterns/DarkPatterns.styled";
import Questionaire, { AnswerButton } from "./Questionaire";
import {
  Question,
  QuestionnaireWrapper,
  StyledButton,
} from "./QuizPage.styled";
import json from "./quizSource";

const QuizPage = (): React.ReactElement => {
  const [questions, setQuestions] = React.useState(Object.values(json));

  const [currentQuestion, setCurrentQuestion] = React.useState(questions[0]);
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

  return gameEnded ? (
    <QuestionnaireWrapper>
      <div>
        Your score {score} / {questions.length}
      </div>
      <AnswerButton answer={"Try Again"} onClick={tryAgainClick}></AnswerButton>
    </QuestionnaireWrapper>
  ) : (
    <React.Fragment>
      <Heading>Quiz: How well do You recognize dark patterns?</Heading>
      <QuestionnaireWrapper>
        <Questionaire
          question={questions[currentIndex].question}
          correctAns={questions[currentIndex].correctAnswer}
          incorrectAns={questions[currentIndex].incorrectAnswers}
          handleAnswer={handleAnswer}
        />
      </QuestionnaireWrapper>
    </React.Fragment>
  );
};

export default QuizPage;
