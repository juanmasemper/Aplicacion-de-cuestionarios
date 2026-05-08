import { useQuizStore, questions } from '../store/quizStore';
import type { Answer } from '../types';

export function ResultsScreen() {
  const score = useQuizStore((s) => s.score);
  const results = useQuizStore((s) => s.results);
  const resetQuiz = useQuizStore((s) => s.resetQuiz);

  const total = questions.length;
  const pct = Math.round((score / total) * 100);

  function getRank(): { emoji: string; label: string } {
    if (pct >= 90) return { emoji: '🏆', label: 'Excelente' };
    if (pct >= 70) return { emoji: '🥈', label: 'Muy bien' };
    if (pct >= 50) return { emoji: '🥉', label: 'Bien' };
    return { emoji: '📚', label: 'Sigue practicando' };
  }

  const rank = getRank();

  return (
    <div className="card results-screen">
      <div className="results-header">
        <div className="rank-emoji">{rank.emoji}</div>
        <h1>{rank.label}</h1>
        <p className="final-score">
          {score} / {total} correctas ({pct}%)
        </p>
      </div>

      <div className="results-list">
        {results.map((r, i) => {
          const question = questions.find((q) => q.id === r.questionId)!;
          const correctText = question.answers.find((a: Answer) => a.id === r.correctAnswerId)?.text;
          const selectedText = r.selectedAnswerId
            ? question.answers.find((a: Answer) => a.id === r.selectedAnswerId)?.text
            : null;

          return (
            <div key={r.questionId} className={`result-item ${r.isCorrect ? 'result-correct' : 'result-incorrect'}`}>
              <div className="result-item-header">
                <span className="result-number">{i + 1}</span>
                <span className="result-icon">{r.isCorrect ? '✅' : r.timedOut ? '⏰' : '❌'}</span>
              </div>
              <p className="result-question">{r.questionText}</p>
              {r.timedOut ? (
                <p className="result-detail timeout">Tiempo agotado — Correcta: <strong>{correctText}</strong></p>
              ) : r.isCorrect ? (
                <p className="result-detail correct">Tu respuesta: <strong>{selectedText}</strong></p>
              ) : (
                <p className="result-detail incorrect">
                  Tu respuesta: <strong>{selectedText}</strong> · Correcta: <strong>{correctText}</strong>
                </p>
              )}
            </div>
          );
        })}
      </div>

      <button className="btn btn-primary" onClick={resetQuiz}>
        Jugar de nuevo
      </button>
    </div>
  );
}
