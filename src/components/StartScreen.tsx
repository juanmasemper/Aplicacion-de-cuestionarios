import { useQuizStore, questions } from '../store/quizStore';

export function StartScreen() {
  const startQuiz = useQuizStore((s) => s.startQuiz);

  return (
    <div className="card start-screen">
      <div className="quiz-icon">🧠</div>
      <h1>Quiz de Cultura General</h1>
      <p className="subtitle">Pon a prueba tus conocimientos</p>
      <ul className="info-list">
        <li>📝 {questions.length} preguntas de opción múltiple</li>
        <li>⏱️ 60 segundos por pregunta</li>
        <li>✅ +1 punto por respuesta correcta</li>
        <li>❌ -1 punto si se agota el tiempo</li>
      </ul>
      <button className="btn btn-primary" onClick={startQuiz}>
        Comenzar
      </button>
    </div>
  );
}
