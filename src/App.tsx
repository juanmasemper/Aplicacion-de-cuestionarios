import './App.css'
import { useQuizStore } from './store/quizStore'
import { StartScreen } from './components/StartScreen'
import { QuestionCard } from './components/QuestionCard'
import { ResultsScreen } from './components/ResultsScreen'

function App() {
  const status = useQuizStore((s) => s.status)

  return (
    <div className="app-wrapper">
      {status === 'idle' && <StartScreen />}
      {(status === 'active' || status === 'answered') && <QuestionCard />}
      {status === 'finished' && <ResultsScreen />}
    </div>
  )
}

export default App
