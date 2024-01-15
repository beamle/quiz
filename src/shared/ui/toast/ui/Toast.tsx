import React from 'react'

import * as RadToast from '@radix-ui/react-toast'
import { Cross } from 'shared/assets/icons'

import s from 'shared/ui/toast/ui/Toast.module.scss'

type ToastProps = {
  description: string
  open: boolean
  setOpen: (open: boolean) => void
}

export const Toast = ({ description, open, setOpen }: ToastProps) => {
  return (
    <RadToast.Provider>
      <RadToast.Root className={s.ToastRoot} duration={1250} onOpenChange={setOpen} open={open}>
        <RadToast.Description>{description}</RadToast.Description>
        <RadToast.Action altText={'some'} className={s.toaster}>
          <Cross height={12} onClick={() => setOpen(false)} width={12}>
            close
          </Cross>
        </RadToast.Action>
        <RadToast.Close />
      </RadToast.Root>

      <RadToast.Viewport className={s.ToastViewport} hotkey={['shiftKeyF']} />
    </RadToast.Provider>
  )
}
