import { create } from 'zustand';
import type { QuizStatus } from '../types';
import questions from '../data/questions';

const TIMER_SECONDS = 60;

interface QuestionResult {
  questionId: string;
  questionText: string;
  selectedAnswerId: string | null;
  correctAnswerId: string;
  isCorrect: boolean;
  timedOut: boolean;
}

interface QuizState {
  status: QuizStatus;
  currentIndex: number;
  score: number;
  selectedAnswerId: string | null;
  results: QuestionResult[];
  timeLeft: number;
  timerId: ReturnType<typeof setInterval> | null;

  startQuiz: () => void;
  selectAnswer: (answerId: string) => void;
  nextQuestion: () => void;
  timeOut: () => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  status: 'idle',
  currentIndex: 0,
  score: 0,
  selectedAnswerId: null,
  results: [],
  timeLeft: TIMER_SECONDS,
  timerId: null,

  startQuiz: () => {
    const timerId = setInterval(() => {
      const { timeLeft, status } = get();
      if (status !== 'active') return;
      if (timeLeft <= 1) {
        get().timeOut();
      } else {
        set({ timeLeft: timeLeft - 1 });
      }
    }, 1000);
    set({
      status: 'active',
      currentIndex: 0,
      score: 0,
      selectedAnswerId: null,
      results: [],
      timeLeft: TIMER_SECONDS,
      timerId,
    });
  },

  selectAnswer: (answerId: string) => {
    const { currentIndex, score, timerId, results } = get();
    const question = questions[currentIndex];
    const isCorrect = answerId === question.correctAnswerId;

    if (timerId) clearInterval(timerId);

    const result: QuestionResult = {
      questionId: question.id,
      questionText: question.text,
      selectedAnswerId: answerId,
      correctAnswerId: question.correctAnswerId,
      isCorrect,
      timedOut: false,
    };

    set({
      status: 'answered',
      selectedAnswerId: answerId,
      score: isCorrect ? score + 1 : score,
      results: [...results, result],
      timerId: null,
    });
  },

  nextQuestion: () => {
    const { currentIndex } = get();
    const nextIndex = currentIndex + 1;

    if (nextIndex >= questions.length) {
      set({ status: 'finished' });
      return;
    }

    const timerId = setInterval(() => {
      const { timeLeft, status } = get();
      if (status !== 'active') return;
      if (timeLeft <= 1) {
        get().timeOut();
      } else {
        set({ timeLeft: timeLeft - 1 });
      }
    }, 1000);

    set({
      status: 'active',
      currentIndex: nextIndex,
      selectedAnswerId: null,
      timeLeft: TIMER_SECONDS,
      timerId,
    });
  },

  timeOut: () => {
    const { currentIndex, score, timerId, results } = get();
    const question = questions[currentIndex];

    if (timerId) clearInterval(timerId);

    const result: QuestionResult = {
      questionId: question.id,
      questionText: question.text,
      selectedAnswerId: null,
      correctAnswerId: question.correctAnswerId,
      isCorrect: false,
      timedOut: true,
    };

    set({
      status: 'answered',
      selectedAnswerId: null,
      score: score - 1,
      results: [...results, result],
      timerId: null,
    });
  },

  resetQuiz: () => {
    const { timerId } = get();
    if (timerId) clearInterval(timerId);
    set({
      status: 'idle',
      currentIndex: 0,
      score: 0,
      selectedAnswerId: null,
      results: [],
      timeLeft: TIMER_SECONDS,
      timerId: null,
    });
  },
}));

export { questions, TIMER_SECONDS };
