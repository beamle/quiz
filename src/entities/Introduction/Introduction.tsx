import React from 'react'

import { Button, Typography } from 'shared'
import clauses from 'shared/assets/text/clauses.json'

import s from './Introduction.module.scss'
type IntroductionType = {
  onClick: () => void
}

export const Introduction = ({ onClick }: IntroductionType) => {
  return (
    <div className={s.introduction}>
      <Typography as={'h2'} variant={'h2'}>
        {clauses.IntroductionText}
      </Typography>
      <Typography as={'h6'} variant={'h6'}>
        *{clauses.Hint}
      </Typography>
      <Button onClick={onClick}>Alusta!</Button>
      <div className={s.pattern} />
    </div>
  )
}
