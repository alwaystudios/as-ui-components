import { storiesOf } from '@storybook/react'
import React from 'react'
import { AlarmIcon } from './AlarmIcon'
import { ArrowIcon } from './ArrowIcon'
import { ClockIcon } from './ClockIcon'
import { DinnerPlateIcon } from './DinnerPlateIcon'
import { DustbinIcon } from './DustbinIcon'
import { EmailIcon } from './EmailIcon'
import { ErrorIcon } from './ErrorIcon'
import { LockIcon } from './LockIcon'
import { SaveIcon } from './SaveIcon'
import { SuccessIcon } from './SuccessIcon'
import { UnLockIcon } from './UnLockIcon'
import { UploadIcon } from './UploadIcon'
import { WarningIcon } from './WarningIcon'
import { HistoryIcon } from './HistoryIcon'
import { MapsIcon } from './MapsIcon'
import { FacebookIcon } from './FacebookIcon'
import { LinkedInIcon } from './LinkedIn'
import { TelephoneIcon } from './TelephoneIcon'
import { ResizeIcon } from './ResizeIcon'
import { InstagramIcon } from './InstagremIcon'
import { CopyIcon } from './CopyIcon'
import { SearchIcon } from './SearchIcon'
import { MagnifyingGlassIcon } from './MagnifyingGlassIcon'
import { CrossIcon } from './CrossIcon'
import { AccountIcon } from './AccountIcon'

const stories = storiesOf('Icons', module)

stories.add('AccountIcon', () => <AccountIcon size="40px" />)
stories.add('AlarmIcon', () => <AlarmIcon size="40px" />)
stories.add('UpArrowIcon', () => <ArrowIcon direction="up" size="40px" />)
stories.add('DownArrowIcon', () => <ArrowIcon direction="down" size="40px" />)
stories.add('LeftArrowIcon', () => <ArrowIcon direction="left" size="40px" />)
stories.add('RightArrowIcon', () => <ArrowIcon direction="right" size="40px" />)
stories.add('ClockIcon', () => <ClockIcon size="40px" />)
stories.add('CopyIcon', () => <CopyIcon size="40px" />)
stories.add('CrossIcon', () => <CrossIcon />)
stories.add('DinnerPlateIcon', () => <DinnerPlateIcon size="40px" />)
stories.add('DustbinIcon', () => <DustbinIcon size="40px" />)
stories.add('EmailIcon', () => <EmailIcon size="40px" />)
stories.add('FacebookIcon', () => <FacebookIcon size="40px" />)
stories.add('ErrorIcon', () => <ErrorIcon size="40px" />)
stories.add('ErrorIcon black', () => <ErrorIcon fill="black" size="40px" />)
stories.add('HistoryIcon', () => <HistoryIcon size="40px" />)
stories.add('InstagramIcon', () => <InstagramIcon size="40px" />)
stories.add('LinkedInIcon', () => <LinkedInIcon size="40px" />)
stories.add('LockIcon', () => <LockIcon size="40px" />)
stories.add('MagnifyingGlassIcon', () => (
  <MagnifyingGlassIcon fill="white" backgroundFill="black" />
))
stories.add('MapsIcon', () => <MapsIcon size="40px" />)
stories.add('ResizeIcon - vertical', () => <ResizeIcon size="40px" direction="vertical" />)
stories.add('ResizeIcon - horizontal', () => <ResizeIcon size="40px" direction="horizontal" />)
stories.add('SaveIcon', () => <SaveIcon size="40px" />)
stories.add('SearchIcon', () => <SearchIcon size="40px" />)
stories.add('SuccessIcon', () => <SuccessIcon size="40px" />)
stories.add('TelephoneIcon', () => <TelephoneIcon size="40px" />)
stories.add('UnLockIcon', () => <UnLockIcon size="40px" />)
stories.add('UploadIcon', () => <UploadIcon size="40px" />)
stories.add('WarningIcon', () => <WarningIcon size="40px" />)
