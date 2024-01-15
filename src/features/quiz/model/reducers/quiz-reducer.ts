import { questionsData, questionsDataAPI } from 'app/api/app-api'
import { AppRootStateType, AppThunkDispatch } from 'app/store'

const initialState: InitialStateType = {
  currentQuestionIndex: 0,
  questionsData: [],
  score: 0,
  status: 'idle',
  userAnswers: [],
}

export const quizReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'QUIZ/SELECT_ANSWER': {
      const { answer } = action.payload
      const newUserAnswers = [...state.userAnswers]

      newUserAnswers[state.currentQuestionIndex] = answer

      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        userAnswers: newUserAnswers,
      }
    }
    case 'QUIZ/SET_QUESTIONS': {
      return { ...state, questionsData: [...action.payload.questionsData] }
    }
    case 'QUIZ/RESET_QUIZ': {
      return { ...state, ...initialState }
    }
    case 'QUIZ/CALCULATE_SCORE': {
      const newScore = state.userAnswers.reduce((score, userAnswer, index) => {
        const correctAnswer = questionsData[index].correctAnswer

        return userAnswer === correctAnswer ? score + 1 : score
      }, 0)

      return {
        ...state,
        score: newScore,
      }
    }
    case 'QUIZ/SET-STATUS': {
      return { ...state, status: action.payload.status }
    }

    default:
      return state
  }
}

export const selectAnswer = (questionId: number, answer: string) =>
  ({
    payload: { answer, questionId },
    type: 'QUIZ/SELECT_ANSWER',
  }) as const

export const calculateScore = () =>
  ({
    type: 'QUIZ/CALCULATE_SCORE',
  }) as const

export const setQuizStatus = (status: StateStatusType) =>
  ({ payload: { status }, type: 'QUIZ/SET-STATUS' }) as const

export const setQuestions = (questionsData: QuestionsDataType) =>
  ({ payload: { questionsData }, type: 'QUIZ/SET_QUESTIONS' }) as const

export const resetQuiz = () => ({ type: 'QUIZ/RESET_QUIZ' }) as const

export const getQuestionsDataTC = () => {
  return (dispatch: AppThunkDispatch) => {
    dispatch(setQuizStatus('loading'))
    try {
      const res = questionsDataAPI.fetchQuestionsData()

      dispatch(setQuestions(res))
    } catch (e) {
      throw new Error('Failed to fetch questions data')
    }
  }
}

export const selectIsCurrentAnswerCorrect = (state: AppRootStateType) => {
  const currentQuestion = state.quiz.questionsData[state.quiz.currentQuestionIndex - 1]
  const selectedAnswer = state.quiz.userAnswers[state.quiz.currentQuestionIndex - 1]

  return selectedAnswer === currentQuestion?.correctAnswer
}

export type ActionsType =
  | ReturnType<typeof calculateScore>
  | ReturnType<typeof resetQuiz>
  | ReturnType<typeof selectAnswer>
  | ReturnType<typeof setQuestions>
  | ReturnType<typeof setQuizStatus>

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
