import {
  calculateScore,
  resetQuiz,
  selectAnswer,
  setAppStatus,
  setQuestions,
} from 'features/quiz/model/reducers/quiz-reducer'

export type ActionsType =
  | ReturnType<typeof calculateScore>
  | ReturnType<typeof resetQuiz>
  | ReturnType<typeof selectAnswer>
  | ReturnType<typeof setAppStatus>
  | ReturnType<typeof setQuestions>
export type InitialStateType = {
  currentQuestionIndex: number
  questionsData: [] | QuestionsDataType
  score: number
  status: StateStatusType
  userAnswers: Array<null | string>
}
export type StateStatusType = 'idle' | 'loading'
export type QuestionsDataType = QuestionType[]

export type QuestionType = {
  correctAnswer: string
  id: string
  options: string[]
  text: string
}
