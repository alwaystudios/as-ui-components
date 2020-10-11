import { storiesOf } from '@storybook/react'
import React from 'react'
import { AlarmIcon } from './AlarmIcon'
import { ClockIcon } from './ClockIcon'
import { DinnerPlateIcon } from './DinnerPlateIcon'
import { DustbinIcon } from './DustbinIcon'
import { LockIcon } from './LockIcon'
import { SaveIcon } from './SaveIcon'
import { UnLockIcon } from './UnLockIcon'
import { UploadIcon } from './UploadIcon'

const stories = storiesOf('Icons', module)

stories.add('AlarmIcon', () => <AlarmIcon size="40px" />)
stories.add('ClockIcon', () => <ClockIcon size="40px" />)
stories.add('DinnerPlateIcon', () => <DinnerPlateIcon size="40px" />)
stories.add('DustbinIcon', () => <DustbinIcon size="40px" />)
stories.add('LockIcon', () => <LockIcon size="40px" />)
stories.add('SaveIcon', () => <SaveIcon size="40px" />)
stories.add('Upload', () => <UploadIcon size="40px" />)
stories.add('UnLockIcon', () => <UnLockIcon size="40px" />)
