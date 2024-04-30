import { IconCheck, IconX } from "@tabler/icons-react";
import { TextInput, TextInputProps } from "@mantine/core";
import {
  selectQuestions,
  selectQuiz,
  setGraded,
  updateUserAnswer,
} from "../slices/quizSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

import { ChangeEvent } from "react";

const FormInput = ({ id, ...props }: { id: string } & TextInputProps) => {
  const { graded, showAnswers } = useAppSelector(selectQuiz);
  const questions = useAppSelector(selectQuestions);
  const dispach = useAppDispatch();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispach(setGraded(false));
    dispach(updateUserAnswer({ question: id, value: event.target.value }));
  };

  const answer = questions[id].correctValue || id;

  let LeftSection = null;
  if (graded && !showAnswers) {
    if (questions[id].value == answer) {
      LeftSection = <IconCheck color="green" />;
    } else {
      LeftSection = <IconX color="red" />;
    }
  }

  let value = questions[id].value;
  if (showAnswers) {
    value = answer;
  }

  return (
    <TextInput
      {...props}
      value={value || ""}
      onChange={onChange}
      disabled={showAnswers}
      leftSection={LeftSection}
    />
  );
};

export default FormInput;
