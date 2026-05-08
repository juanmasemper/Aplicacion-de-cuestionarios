import { useQuizStore, TIMER_SECONDS } from '../store/quizStore';

export function Timer() {
  const timeLeft = useQuizStore((s) => s.timeLeft);
  const status = useQuizStore((s) => s.status);

  if (status !== 'active') return null;

  const pct = (timeLeft / TIMER_SECONDS) * 100;
  const isWarning = timeLeft <= 15;
  const isDanger = timeLeft <= 5;

  return (
    <div className="timer-container">
      <div className={`timer-label ${isDanger ? 'danger' : isWarning ? 'warning' : ''}`}>
        ⏱️ {timeLeft}s
      </div>
      <div className="timer-bar-bg">
        <div
          className={`timer-bar ${isDanger ? 'danger' : isWarning ? 'warning' : ''}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
