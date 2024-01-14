import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { questionsData } from 'app/api/app-api'
import { useAppDispatch } from 'app/store'

import {
  calculateScore,
  getQuestionsDataTC,
  selectAnswer,
  selectCurrentQuestionIndex,
  selectUserAnswers,
  selectUserScore,
} from '../model'

export const Quiz = () => {
  const dispatch = useAppDispatch()
  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex)
  const userAnswers = useSelector(selectUserAnswers)
  const score = useSelector(selectUserScore)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dispatch(getQuestionsDataTC())
  }, [])

  const handleAnswer = (selectedOption: any) => {
    dispatch(selectAnswer(currentQuestionIndex, selectedOption))

    if (currentQuestionIndex < questionsData.length) {
      dispatch(calculateScore())
    }
  }

  const renderResultTable = () => {
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
      {currentQuestionIndex < questionsData.length ? (
        <Question onAnswer={handleAnswer} question={questionsData[currentQuestionIndex]} />
      ) : (
        renderResultTable()
      )}
    </div>
  )
}

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
