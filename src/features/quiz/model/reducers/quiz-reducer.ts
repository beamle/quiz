import { questionsData, questionsDataAPI } from 'app/api/app-api'
import { ActionsType, InitialStateType, QuestionsDataType, StateStatusType } from 'app/model/types'
import { AppThunkDispatch } from 'app/store'

const initialState: InitialStateType = {
  currentQuestionIndex: 0,
  questionsData: [],
  score: 0,
  status: 'idle',
  // userAnswers: Array(questionsData.length).fill(null),
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
      // action.todolists.forEach(tl => {
      //   copyState[tl.id] = []
      // })
      return { ...state }
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

export const setAppStatus = (status: StateStatusType) =>
  ({ payload: { status }, type: 'APP/SET-STATUS' }) as const

export const setQuestions = (questionsData: QuestionsDataType) =>
  ({ payload: { questionsData }, type: 'APP/SET_QUESTIONS' }) as const

export const getQuestionsDataTC = () => {
  return (dispatch: AppThunkDispatch) => {
    debugger
    dispatch(setAppStatus('loading'))
    try {
      const res = questionsDataAPI.fetchQuestionsData()

      console.log(res, 'res')
      dispatch(setQuestions(res))
    } catch (e) {
      console.log(e)
    }
  }
}
