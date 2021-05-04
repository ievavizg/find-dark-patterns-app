import * as React from 'react';
import MiniDrawer from '../../components/Drawer/MiniDrawer';
import { Heading } from '../DarkPatterns/DarkPatterns.styled';

const QuizPage = (): React.ReactElement => {
  return (
      <React.Fragment>
         <Heading>Quiz: How well do You recognize dark patterns?</Heading>
         {/* <Quiz /> */}
      </React.Fragment>
  );
};

export default QuizPage;
