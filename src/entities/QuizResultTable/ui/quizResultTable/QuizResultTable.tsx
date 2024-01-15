import { ReactNode } from 'react'

import { resetApp } from 'app/model/reducers/app-reducer'
import { useAppDispatch } from 'app/store'
import { QuestionsDataType } from 'features'
import { Typography } from 'shared'
import clauses from 'shared/assets/text/clauses.json'
import { TBody, TCell, THead, THeader, TRow, Table } from 'shared/ui/table/Table'

import s from './QuizResultTable.module.scss'

type QuizResultTableType = {
  questionsData: QuestionsDataType
  score: number
  userAnswers: (null | string)[]
}

export const QuizResultTable = ({ questionsData, score, userAnswers }: QuizResultTableType) => {
  const dispatch = useAppDispatch()
  const restartApp = () => {
    dispatch(resetApp())
  }

  return (
    <div className={s.quizResultTable}>
      <Typography as={'h2'} variant={'h2'}>
        Koondskoor: {score} / {questionsData.length}
      </Typography>
      <Typography as={'h6'} variant={'h6'}>
        {calcResult(score, questionsData, restartApp)}{' '}
      </Typography>
      <Table>
        <THead>
          <TRow>
            <THeader>
              <Typography as={'h6'} variant={'h6'}>
                Küsimus
              </Typography>
            </THeader>
            <THeader>
              <Typography as={'h6'} variant={'h6'}>
                Sinu vastus
              </Typography>
            </THeader>
            <THeader>
              <Typography as={'h6'} variant={'h6'}>
                Õige vastus
              </Typography>
            </THeader>
          </TRow>
        </THead>
        <TBody>
          {questionsData.map((question, index) => (
            <TRow key={question.id}>
              <TCell>
                <Typography as={'h6'} variant={'h6'}>
                  {question.text}
                </Typography>
              </TCell>
              <TCell>
                <Typography as={'h6'} variant={'h6'}>
                  {userAnswers[index]}
                </Typography>
              </TCell>
              <TCell>
                <Typography as={'h6'} variant={'h6'}>
                  {question.correctAnswer}
                </Typography>
              </TCell>
            </TRow>
          ))}
        </TBody>
      </Table>
    </div>
  )
}

function calcResult(score: number, questionsData: QuestionsDataType, restartApp: () => void) {
  if (score === questionsData.length) {
    return <FinalResultClause clause={clauses.Perfect} restartApp={restartApp} />
  }
  if (score > questionsData.length - 2) {
    return <FinalResultClause clause={clauses.Good} restartApp={restartApp} />
  } else {
    return <FinalResultClause clause={clauses.Bad} restartApp={restartApp} />
  }
}
type FinalResultClauseType = {
  clause: string
  restartApp: () => void
}
function FinalResultClause({ clause, restartApp }: FinalResultClauseType) {
  return (
    <>
      {clause} Kui soovid siis{' '}
      <span className={s.restartApp} onClick={restartApp}>
        proovi veelkord!
      </span>{' '}
    </>
  )
}
