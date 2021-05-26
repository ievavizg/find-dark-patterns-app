import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Input = styled.input`
  background-color: #292639;
  color: white;
  padding: 2rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  text-align: center;
`;

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
  width: 40rem;
  margin: auto;
`;

export const StyledTextField = styled(TextField)`
  width: 30rem;
`;

export const StyledInput = styled(Input)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  padding: 1rem;
  cursor: pointer;
`;
