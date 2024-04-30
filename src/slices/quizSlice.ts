import { AppThunk } from "../hooks";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";
import { findBestMatch } from "string-similarity";
import { terms } from "../terms";

export interface QuizQuestion {
  correctValue?: string;
  value?: string;
  noCoerce?: boolean;
}

export interface QuizQuestions {
  [question: string]: QuizQuestion;
}

export interface QuizState {
  score: number;
  graded: boolean;
  showAnswers: boolean;
  questions: QuizQuestions;
}

interface UserAnswer {
  question: string;
  value: string;
}

const initialState: QuizState = {
  score: 0,
  graded: false,
  showAnswers: false,
  questions: {
    ...terms.reduce<{ [key: string]: QuizQuestion }>((accumulator, key) => {
      accumulator[key] = {};
      return accumulator;
    }, {}),
    CenozoicTime: {
      correctValue: "66",
      noCoerce: true,
    },
    MesozoicTime: {
      correctValue: "252",
      noCoerce: true,
    },
    PaleozoicTime: {
      correctValue: "541",
      noCoerce: true,
    },
    ArcheanTime: {
      correctValue: "4600",
      noCoerce: true,
    },
  },
};

export const gradeQuiz = (): AppThunk => (dispatch, getState) => {
  dispatch(setGraded(true));

  const questions = selectQuestions(getState());

  let score = 0;

  for (const qKey in questions) {
    const question = questions[qKey];

    if (!question.noCoerce && question.value) {
      const matches = findBestMatch(question.value, terms);
      if (matches.bestMatch.rating > 0.5)
        dispatch(
          updateUserAnswer({ question: qKey, value: matches.bestMatch.target })
        );
    }

    if (question.value == (question.correctValue || qKey)) score++;
  }

  dispatch(setScore(score / Object.keys(questions).length));
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    updateUserAnswer: (state, action: PayloadAction<UserAnswer>) => {
      state.questions[action.payload.question].value = action.payload.value;
    },
    setGraded: (state, action: PayloadAction<boolean>) => {
      state.graded = action.payload;
    },
    setShowAnswers: (state, action: PayloadAction<boolean>) => {
      state.showAnswers = action.payload;
    },
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    reset: (state) => {
      state.graded = false;
      state.showAnswers = false;
      for (const question in state.questions) {
        state.questions[question].value = "";
      }
    },
  },
});

export const { updateUserAnswer, setGraded, setShowAnswers, setScore, reset } =
  quizSlice.actions;

export const selectQuiz = (state: RootState) => state.quiz;
export const selectQuestions = (state: RootState) => state.quiz.questions;

export default quizSlice.reducer;
