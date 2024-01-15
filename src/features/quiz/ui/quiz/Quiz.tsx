import { useEffect, useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'

import { useAppDispatch, useAppSelector } from 'app/store'
import { Question, QuizResultTable } from 'entities/index'
import {
  calculateScore,
  getQuestionsDataTC,
  selectAnswer,
  selectCurrentQuestionIndex,
  selectIsCurrentAnswerCorrect,
  selectQuestionsData,
  selectUserAnswers,
  selectUserScore,
} from 'features/quiz/model'
import { selectToastMessage, showAnswerResultToastTC } from 'shared/ui/toast/model/toast-reducer'
import { Toast } from 'shared/ui/toast/ui/Toast'

import s from './Quiz.module.scss'

export const Quiz = () => {
  const dispatch = useAppDispatch()
  const currentQuestionIndex = useAppSelector(selectCurrentQuestionIndex)
  const userAnswers = useAppSelector(selectUserAnswers)
  const score = useAppSelector(selectUserScore)
  const questionsData = useAppSelector(selectQuestionsData)
  const toastMessage = useAppSelector(selectToastMessage)
  const isCurrentAnswerCorrect = useAppSelector(selectIsCurrentAnswerCorrect)
  const [openToast, setOpenToast] = useState(false)

  useEffect(() => {
    dispatch(getQuestionsDataTC())
    dispatch(showAnswerResultToastTC(isCurrentAnswerCorrect))
  }, [dispatch, isCurrentAnswerCorrect])

  const handleAnswer = (selectedOption: string) => {
    dispatch(selectAnswer(currentQuestionIndex, selectedOption))
    dispatch(calculateScore())
    setOpenToast(true)
  }

  return (
    <>
      <div className={s.quiz}>
        <Toast description={toastMessage} open={openToast} setOpen={setOpenToast} />
        {currentQuestionIndex < questionsData.length ? (
          <Question handleAnswer={handleAnswer} question={questionsData[currentQuestionIndex]} />
        ) : (
          <>
            <ConfettiExplosion duration={6500} particleCount={150} width={4000} />
            <QuizResultTable
              questionsData={questionsData}
              score={score}
              userAnswers={userAnswers}
            />
          </>
        )}
      </div>
    </>
  )
}
