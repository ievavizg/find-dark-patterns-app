import { Button, Grid } from "@material-ui/core";
import * as React from "react";
import MiniDrawer from "../../components/Drawer/MiniDrawer";
import { Heading } from "../DarkPatterns/DarkPatterns.styled";
import {
  Question,
  QuestionnaireWrapper,
  StyledButton,
} from "./QuizPage.styled";
import json from "./quizSource";

type QuestionaireProps = {
  question: string;
  correctAns: string;
  incorrectAns: string[];
  handleAnswer: (arg: string) => void;
};

type ButtonProps = {
  answer: string;
  onClick: () => void;
};

export const AnswerButton: React.FC<ButtonProps> = ({ answer, onClick }) => (
  <StyledButton onClick={onClick}>{answer}</StyledButton>
);

const Questionaire: React.FC<QuestionaireProps> = ({
  question,
  correctAns,
  incorrectAns,
  handleAnswer,
}) => {
  const shuffledAnswer = [correctAns, ...incorrectAns].sort(
    () => Math.random() - 0.5
  );
  return (
    <React.Fragment>
      <Question>{question}</Question>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <AnswerButton
              answer={shuffledAnswer[0]}
              onClick={() => handleAnswer(shuffledAnswer[0])}
            />
          </Grid>
          <Grid item xs={6}>
            <AnswerButton
              answer={shuffledAnswer[1]}
              onClick={() => handleAnswer(shuffledAnswer[1])}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <AnswerButton
              answer={shuffledAnswer[2]}
              onClick={() => handleAnswer(shuffledAnswer[2])}
            />
          </Grid>
          <Grid item xs={6}>
            <AnswerButton
              answer={shuffledAnswer[3]}
              onClick={() => handleAnswer(shuffledAnswer[3])}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Questionaire;

// const shuffleQuestions = (arr: string[]): any => {
//     for (let i=0; i<100; i++) {
//         const index1 = Math.floor(Math.random() * arr.length);
//         const index2 = Math.floor(Math.random() * arr.length);

//     }
// }
