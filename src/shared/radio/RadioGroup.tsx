import { ElementRef, forwardRef } from 'react'

import * as RadRadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './RadioGroup.module.scss'

import { Typography } from '../index'

export type RadioGroupProps = {
  onValueChange?: (item: any) => void
  options: Option[]
  value: string
}

type Option = {
  checked?: boolean
  label: string
  value: string
}

export const RadioGroup = forwardRef<ElementRef<typeof RadRadioGroup.Root>, RadioGroupProps>(
  ({ onValueChange, options, value, ...rest }, ref) => {
    return (
      // <form>
      <RadRadioGroup.Root
        aria-label={'View density'}
        className={s.RadioGroupRoot}
        onValueChange={onValueChange}
        required
        {...rest}
        ref={ref}
      >
        {options.map(option => (
          <div className={s.radioItemsContainer} key={option.value}>
            <RadRadioGroup.Item
              className={s.RadioGroupItem}
              id={option.value}
              required
              value={option.value}
              // checked={option.checked}
              {...rest}
            >
              <RadRadioGroup.Indicator className={s.RadioGroupIndicator} />
            </RadRadioGroup.Item>
            <Typography as={'label'} className={s.Label} htmlFor={option.value}>
              {option.label}
            </Typography>
          </div>
        ))}
      </RadRadioGroup.Root>
      // </form>
    )
  }
)
