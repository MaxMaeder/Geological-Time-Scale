import {
  Button,
  Checkbox,
  Group,
  List,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import {
  gradeQuiz,
  reset,
  selectQuiz,
  setShowAnswers,
} from "../slices/quizSlice";

import shuffle from "lodash/shuffle";
import { terms } from "../terms";
import { useAppDispatch } from "../hooks";
import { useSelector } from "react-redux";
import { useState } from "react";

const Sidebar = () => {
  const [showBank, setShowBank] = useState(false);

  const [shuffledTerms] = useState(shuffle(terms));

  const { score, graded, showAnswers } = useSelector(selectQuiz);
  const dispach = useAppDispatch();

  return (
    <Stack>
      <Text>
        Score on last attempt: <b>{(score * 100).toFixed(0)}%</b>
      </Text>
      {graded ? (
        <>
          <Button onClick={() => dispach(gradeQuiz())}>Resubmit</Button>
          <Group grow>
            <Button variant="outline" onClick={() => dispach(reset())}>
              Clear
            </Button>
            <Button
              variant="outline"
              onClick={() => dispach(setShowAnswers(!showAnswers))}
            >
              {showAnswers ? "Hide" : "Show"} Ans.
            </Button>
          </Group>
        </>
      ) : (
        <Button onClick={() => dispach(gradeQuiz())}>Submit</Button>
      )}
      <Checkbox
        label="Show word bank"
        onChange={(v) => setShowBank(v.target.checked)}
      />
      {showBank && (
        <Paper withBorder p="md">
          <List>
            {shuffledTerms.map((t) => (
              <List.Item key={t}>{t}</List.Item>
            ))}
          </List>
        </Paper>
      )}
    </Stack>
  );
};

export default Sidebar;
