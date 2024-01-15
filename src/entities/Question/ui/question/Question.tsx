import { AnswerOption } from 'entities/Question/ui/option/ui/option/AnswerOption'
import { QuestionType } from 'features'
import { Typography } from 'shared'

import s from './Question.module.scss'

type QuestionPropsType = {
  handleAnswer: (selectedOption: string) => void
  question: QuestionType
}

export const Question = ({ handleAnswer, question }: QuestionPropsType) => {
  return (
    <div className={s.question}>
      <Typography as={'h4'} className={s.questionText} variant={'h4'}>
        {question.text}
      </Typography>
      <div className={s.answersContainer}>
        {question.options.map((option, index) => (
          <AnswerOption key={index} onSelect={() => handleAnswer(option)} option={option} />
        ))}
      </div>
    </div>
  )
}
