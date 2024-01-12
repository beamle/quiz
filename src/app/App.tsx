import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { calculateScore, selectAnswer } from 'app/app-reducer'
import { AppRootStateType } from 'app/store'
const questionsData = [
  {
    correctAnswer: 'Option A',
    id: 1,
    options: ['Option A', 'Option B', 'Option C'],
    text: 'Question 1?',
  },
  {
    correctAnswer: 'Potato',
    id: 2,
    options: ['Potato', 'Option B', 'Option C'],
    text: 'Potato??',
  },
  {
    correctAnswer: 'Mandarin',
    id: 3,
    options: ['Option A', 'Option B', 'Mandarin'],
    text: 'Mandarin?',
  },
]

const App = () => {
  const dispatch = useDispatch()
  const currentQuestionIndex = useSelector((state: any) => state.app.currentQuestionIndex)
  const userAnswers = useSelector((state: any) => state.app.userAnswers)
  const score = useSelector((state: any) => state.app.score)

  const handleAnswer = (selectedOption: any) => {
    dispatch(selectAnswer(currentQuestionIndex, selectedOption))

    if (currentQuestionIndex < questionsData.length - 1) {
      dispatch(calculateScore())
    }
  }

  const renderResultTable = () => {
    console.log(questionsData)
    console.log(userAnswers)

    return (
      <div>
        <h2>
          Koondskoor: {score} / {questionsData.length}
        </h2>
        <p>Isikupärastatud sõnum selle põhjal: {score >= 2 ? 'Tubli!' : 'Vaja veel harjutada.'}</p>
        <table>
          <thead>
            <tr>
              <th>Küsimus</th>
              <th>Kasutaja vastus</th>
              <th>Õige vastus</th>
            </tr>
          </thead>
          <tbody>
            {questionsData.map((question, index) => (
              <tr key={question.id}>
                <td>{question.text}</td>
                <td>{userAnswers[index]}</td>
                <td>{question.correctAnswer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  console.log(currentQuestionIndex, questionsData.length)

  return (
    <div>
      {currentQuestionIndex < questionsData.length - 1 ? (
        <Question onAnswer={handleAnswer} question={questionsData[currentQuestionIndex]} />
      ) : (
        renderResultTable()
      )}
      {/*{renderResultTable()}*/}
    </div>
  )
}

export default App

const Question = ({ onAnswer, question }: any) => {
  return (
    <div>
      <p>sakasp[kaspkasp</p>
      <p>{question.text}</p>
      {question.options.map((option: any, index: any) => (
        <Option key={index} onSelect={() => onAnswer(option, question.id)} option={option} />
      ))}
    </div>
  )
}

const Option = ({ onSelect, option }: any) => {
  return <button onClick={onSelect}>{option}</button>
}
