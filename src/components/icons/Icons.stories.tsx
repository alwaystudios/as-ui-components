import { storiesOf } from '@storybook/react'
import React from 'react'
import { AlarmIcon } from './AlarmIcon'
import { ClockIcon } from './ClockIcon'
import { DinnerPlateIcon } from './DinnerPlateIcon'
import { DustbinIcon } from './DustbinIcon'
import { ErrorIcon } from './ErrorIcon'
import { LockIcon } from './LockIcon'
import { SaveIcon } from './SaveIcon'
import { SuccessIcon } from './SuccessIcon'
import { UnLockIcon } from './UnLockIcon'
import { UploadIcon } from './UploadIcon'
import { WarningIcon } from './WarningIcon'

const stories = storiesOf('Icons', module)

stories.add('AlarmIcon', () => <AlarmIcon size="40px" />)
stories.add('ClockIcon', () => <ClockIcon size="40px" />)
stories.add('DinnerPlateIcon', () => <DinnerPlateIcon size="40px" />)
stories.add('DustbinIcon', () => <DustbinIcon size="40px" />)
stories.add('ErrorIcon', () => <ErrorIcon size="40px" />)
stories.add('LockIcon', () => <LockIcon size="40px" />)
stories.add('SaveIcon', () => <SaveIcon size="40px" />)
stories.add('SuccessIcon', () => <SuccessIcon size="40px" />)
stories.add('UnLockIcon', () => <UnLockIcon size="40px" />)
stories.add('UploadIcon', () => <UploadIcon size="40px" />)
stories.add('WarningIcon', () => <WarningIcon size="40px" />)
