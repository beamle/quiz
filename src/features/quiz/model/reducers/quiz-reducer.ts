import { questionsData, questionsDataAPI } from 'app/api/app-api'
import { ActionsType, InitialStateType, QuestionsDataType, StateStatusType } from 'app/model/types'
import { AppRootStateType, AppThunkDispatch, useAppDispatch } from 'app/store'
import { Dispatch } from 'redux'
import { showAnswerResultToastTC } from 'shared/ui/toast/model/toast-reducer'

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
    case 'APP/SELECT_ANSWER': {
      const { answer } = action.payload
      const newUserAnswers = [...state.userAnswers]

      newUserAnswers[state.currentQuestionIndex] = answer

      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        userAnswers: newUserAnswers,
      }
    }
    case 'APP/SET_QUESTIONS': {
      return { ...state, questionsData: [...action.payload.questionsData] }
    }
    case 'APP/CALCULATE_SCORE': {
      const newScore = state.userAnswers.reduce((score, userAnswer, index) => {
        const correctAnswer = questionsData[index].correctAnswer

        return userAnswer === correctAnswer ? score + 1 : score
      }, 0)

      return {
        ...state,
        score: newScore,
      }
    }
    case 'APP/DISPLAY_ANSWER_RESULT': {
      const isCorrect = state.userAnswers.every(
        (userAnswer, index) => userAnswer === questionsData[index].correctAnswer
      )

      showAnswerResultToastTC(isCorrect)

      return {
        ...state,
      }
    }
    case 'APP/SET-STATUS': {
      return { ...state, status: action.payload.status }
    }

    default:
      return state
  }
}

export const selectAnswer = (questionId: number, answer: string) =>
  ({
    payload: { answer, questionId },
    type: 'APP/SELECT_ANSWER',
  }) as const

export const calculateScore = () =>
  ({
    type: 'APP/CALCULATE_SCORE',
  }) as const

export const displayAnswerResultAC = () => ({ type: 'APP/DISPLAY_ANSWER_RESULT' }) as const

export const setAppStatus = (status: StateStatusType) =>
  ({ payload: { status }, type: 'APP/SET-STATUS' }) as const

export const setQuestions = (questionsData: QuestionsDataType) =>
  ({ payload: { questionsData }, type: 'APP/SET_QUESTIONS' }) as const

export const getQuestionsDataTC = () => {
  return (dispatch: AppThunkDispatch) => {
    dispatch(setAppStatus('loading'))
    try {
      const res = questionsDataAPI.fetchQuestionsData()

      dispatch(setQuestions(res))
    } catch (e) {
      console.log(e)
    }
  }
}

export const selectIsCurrentAnswerCorrect = (state: AppRootStateType) => {
  const currentQuestion = state.quiz.questionsData[state.quiz.currentQuestionIndex - 1]
  const selectedAnswer = state.quiz.userAnswers[state.quiz.currentQuestionIndex - 1]

  // console.log(state.quiz.userAnswers, 'userAnswers')
  // console.log(currentQuestion?.correctAnswer, 'current question correct answer')
  //
  // console.log(currentQuestion, 'qurrent question')
  // console.log(selectedAnswer, 'selected answer')

  return selectedAnswer === currentQuestion?.correctAnswer
}
