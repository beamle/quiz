import {
  InitialStateType,
  QuestionsDataType,
  StateStatusType,
  calculateScore,
  quizReducer,
  resetQuiz,
  selectAnswer,
  setQuestions,
  setQuizStatus,
} from '..'

describe('quizReducer', () => {
  const initialState: InitialStateType = {
    currentQuestionIndex: 0,
    questionsData: [],
    score: 0,
    status: 'idle',
    userAnswers: [],
  }

  test('selected answer should added to the corresponding array', () => {
    const action = selectAnswer(0, 'selectedAnswer1')
    const newState = quizReducer(initialState, action)

    expect(newState.currentQuestionIndex).toBe(1)
    expect(newState.userAnswers[0]).toBe('selectedAnswer1')
  })

  test('questionsData should be set', () => {
    const questionsData: QuestionsDataType = [
      {
        correctAnswer: 'correctAnswer',
        id: '1',
        options: ['option1', 'option2'],
        text: 'Question 1',
      },
    ]
    const action = setQuestions(questionsData)
    const newState = quizReducer(initialState, action)

    expect(newState.questionsData.length).toBe(1)
    expect(newState.questionsData).toEqual(questionsData)
  })

  test('quiz state should be reset', () => {
    const action = resetQuiz()
    const newState = quizReducer(
      {
        ...initialState,
        currentQuestionIndex: 5,
        score: 3,
        userAnswers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
      },
      action
    )

    expect(newState).toEqual(initialState)
  })

  test('quiz status should be changed to "loading"', () => {
    const action = setQuizStatus('loading' as StateStatusType)
    const newState = quizReducer(initialState, action)

    expect(newState.status).toBe('loading')
  })
})
