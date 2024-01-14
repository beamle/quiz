import { AppRootStateType } from 'app/store'

export const selectCurrentQuestionIndex = (state: AppRootStateType) =>
  state.quiz.currentQuestionIndex
export const selectUserAnswers = (state: AppRootStateType) => state.quiz.userAnswers
export const selectUserScore = (state: AppRootStateType) => state.quiz.score
