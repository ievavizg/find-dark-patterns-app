import { Grid } from "@material-ui/core";
import * as React from "react";
import {
  Question,
  StyledButton,
  PictureWrapper,
} from "./QuizPage.styled";
import ConfirmShaming from "./ConfirmShaming.png";

type QuestionaireProps = {
  question: string;
  correctAns: string;
  incorrectAns: string[];
  handleAnswer: (arg: string) => void;
  picture?: string;
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
  picture,
}) => {
  const shuffledAnswer = [correctAns, ...incorrectAns].sort(
    () => Math.random() - 0.5
  );

  return (
    <React.Fragment>
      <Question>
        {question}
        {picture && (
          <PictureWrapper>
            <img src={picture === './ConfirmShaming.png' ? ConfirmShaming : undefined} />
          </PictureWrapper>
        )}
      </Question>
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
        {shuffledAnswer.length > 2 && (
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={6}>
              <AnswerButton
                answer={shuffledAnswer[2]}
                onClick={() => handleAnswer(shuffledAnswer[2])}
              />
            </Grid>
            {shuffledAnswer.length > 3 && (
              <Grid item xs={6}>
                <AnswerButton
                  answer={shuffledAnswer[3]}
                  onClick={() => handleAnswer(shuffledAnswer[3])}
                />
              </Grid>
            )}
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default Questionaire;
