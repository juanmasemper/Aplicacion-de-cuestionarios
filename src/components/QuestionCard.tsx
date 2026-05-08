import { useQuizStore, questions } from '../store/quizStore';
import { Timer } from './Timer';
import type { Answer } from '../types';

export function QuestionCard() {
  const currentIndex = useQuizStore((s) => s.currentIndex);
  const selectedAnswerId = useQuizStore((s) => s.selectedAnswerId);
  const status = useQuizStore((s) => s.status);
  const score = useQuizStore((s) => s.score);
  const selectAnswer = useQuizStore((s) => s.selectAnswer);
  const nextQuestion = useQuizStore((s) => s.nextQuestion);

  const question = questions[currentIndex];
  const isAnswered = status === 'answered';
  const isLast = currentIndex === questions.length - 1;

  function getAnswerClass(answerId: string): string {
    if (!isAnswered) return 'answer-btn';
    if (answerId === question.correctAnswerId) return 'answer-btn correct';
    if (answerId === selectedAnswerId) return 'answer-btn incorrect';
    return 'answer-btn dimmed';
  }

  return (
    <div className="card question-card">
      <div className="question-header">
        <span className="question-counter">
          Pregunta {currentIndex + 1} / {questions.length}
        </span>
        <span className="score-badge">Puntuación: {score}</span>
      </div>

      <div className="progress-bar-bg">
        <div
          className="progress-bar"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <Timer />

      <h2 className="question-text">{question.text}</h2>

      <div className="answers-grid">
        {question.answers.map((answer: Answer) => (
          <button
            key={answer.id}
            className={getAnswerClass(answer.id)}
            onClick={() => !isAnswered && selectAnswer(answer.id)}
            disabled={isAnswered}
          >
            <span className="answer-letter">{answer.id.toUpperCase()}</span>
            <span>{answer.text}</span>
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="feedback">
          {selectedAnswerId === null ? (
            <p className="feedback-timeout">⏰ ¡Tiempo agotado! -1 punto</p>
          ) : selectedAnswerId === question.correctAnswerId ? (
            <p className="feedback-correct">✅ ¡Correcto! +1 punto</p>
          ) : (
            <p className="feedback-incorrect">
              ❌ Incorrecto. La respuesta correcta era:{' '}
              <strong>
                {question.answers.find((a: Answer) => a.id === question.correctAnswerId)?.text}
              </strong>
            </p>
          )}
          <button className="btn btn-primary" onClick={nextQuestion}>
            {isLast ? 'Ver resultados' : 'Siguiente pregunta →'}
          </button>
        </div>
      )}
    </div>
  );
}
