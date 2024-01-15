export const questionsData = [
  {
    correctAnswer: 'Suur Munamägi',
    id: '1',
    options: ['Munamägi', 'Suur Munamägi', 'Püha Munamägi'],
    text: 'Milline on Eesti kõrgeim mägi?',
  },
  {
    correctAnswer: 'Suitsupääsuke',
    id: '2',
    options: ['Suitsupääsuke', 'Kurvits', 'Laulurästas', 'Kägu'],
    text: 'Mis on Eesti rahvuslind?',
  },
  {
    correctAnswer: '1918',
    id: '3',
    options: ['1920', '1940', '1817', '1918'],
    text: 'Millal kuulutas Eesti end esmakordselt iseseisvaks riigiks?',
  },
  {
    correctAnswer: 'Tallinn',
    id: '4',
    options: ['Tartu', 'Tallinn', 'Viljandi', ' Pärnu'],
    text: 'Millises Eesti linnas asub ajalooline Vanalinn, mis kuulub UNESCO maailmapärandi hulka?',
  },
  {
    correctAnswer: 'Tallinn',
    id: '5',
    options: ['Tartu', 'Tallinn', 'Viljandi', ' Pärnu'],
    text: 'Mis on Eesti pealinn?',
  },
]

export const questionsDataAPI = {
  fetchQuestionsData() {
    return questionsData
  },
}
