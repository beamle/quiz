import { RadioGroup } from 'shared'

type QuestionFormType = {
  questions: {
    answers: string[]
    correctAnswer: string
    id: number
    question: string
  }[]
}

export const QuestionForm = ({ questions }: QuestionFormType) => {
  return (
    <div>
      {questions.map(question => {
        const option = { checked: false, label: question.answers[0], value: question.correctAnswer }

        console.log(option)
        const options = [option]

        return (
          <div className={'question'} key={question.id}>
            {question.question}
            <RadioGroup options={options} value={''} />
          </div>
        )
      })}
    </div>
  )
}
