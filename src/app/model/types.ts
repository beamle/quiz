import {
  calculateScore,
  selectAnswer,
  setAppStatus,
  setQuestions,
} from 'features/quiz/model/reducers/quiz-reducer'

export type ActionsType =
  | ReturnType<typeof calculateScore>
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
export type QuestionsDataType = {
  correctAnswer: string
  id: number
  options: string[]
  text: string
}[]
