import { Button, Typography } from 'shared'

import s from './AnswerOption.module.scss'

type OptionType = {
  onSelect: () => void
  option: string
}
export const AnswerOption = ({ onSelect, option }: OptionType) => {
  return <Button onClick={onSelect}>{option}</Button>
}
