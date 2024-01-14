import { QuestionsDataType } from 'app/model/types'

export const questionsData = [
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

export const questionsDataAPI = {
  fetchQuestionsData() {
    return questionsData
  },
}
