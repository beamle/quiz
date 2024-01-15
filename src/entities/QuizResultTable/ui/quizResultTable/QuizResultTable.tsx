import { QuestionsDataType } from 'app/model/types'
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
  return (
    <div className={s.quizResultTable}>
      <Typography as={'h2'} variant={'h2'}>
        Koondskoor: {score} / {questionsData.length}
      </Typography>
      <Typography as={'h6'} variant={'h6'}>
        {calcResult(score, questionsData)}
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

function calcResult(score: number, questionsData: QuestionsDataType) {
  if (score === questionsData.length) {
    return clauses.Perfect
  }
  if (score > questionsData.length - 2) {
    return clauses.Good
  } else {
    return clauses.Bad
  }
}
