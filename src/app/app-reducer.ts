const questionsData = [
  {
    correctAnswer: 'Option A',
    id: 1,
    options: ['Option A', 'Option B', 'Option C'],
    text: 'Question 1?',
  },
  {
    correctAnswer: 'Potato',
    id: 2,
    options: ['Potato', 'Option B', 'Option C'],
    text: 'Potato??',
  },
  {
    correctAnswer: 'Mandarin',
    id: 3,
    options: ['Option A', 'Option B', 'Mandarin'],
    text: 'Mandarin?',
  },
]

export const selectAnswer = (questionId: number, answer: string) => ({
  payload: { answer, questionId },
  type: 'SELECT_ANSWER',
})

export const calculateScore = () => ({
  type: 'CALCULATE_SCORE',
})

// reducers.js
const initialState: any = {
  currentQuestionIndex: 0,
  score: 0,
  userAnswers: Array(questionsData.length).fill(null),
}

const quizReducer = (state = initialState, action: any) => {
  debugger
  switch (action.type) {
    case 'SELECT_ANSWER': {
      const { answer, questionId } = action.payload
      const newUserAnswers = [...state.userAnswers]

      newUserAnswers[state.currentQuestionIndex] = answer

      return {
        ...state,
        userAnswers: newUserAnswers,
      }
    }
    case 'CALCULATE_SCORE': {
      const newScore = state.userAnswers.reduce((score: any, userAnswer: any, index: any) => {
        const correctAnswer = questionsData[index].correctAnswer

        return userAnswer === correctAnswer ? score + 1 : score
      }, 0)

      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        score: newScore,
      }
    }

    default:
      return state
  }
}

export default quizReducer
