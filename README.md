# as-ui-components

React components, icons and hooks

## Components

See storybook for component and icon usage
http://as-ui-components.s3-website-eu-west-1.amazonaws.com/

- Button
- TextInput

### Icons

- AlarmIcon
- ArrowIcon (up | down | left | right)
- ClockIcon
- DinnerPlateIcon
- DustbinIcon
- EmailIcon
- ErrorIcon
- FacebookIcon
- HistoryIcon
- LinkedInIcon
- LockIcon
- MapsIcon
- SaveIcon
- SuccessIcon
- TelephoneIcon
- UnLockIcon
- UploadIcon
- WarningIcon

## Hooks

### useInterval

Executes a callback with a continuous delay

```
    useInterval(getTwitterFeedUpdates, 1000)
```

### useLocalStorage

Hook that supports server side rendering when using local storage

```
    const storage = useLocalStorage()
```

### useWindow

Hook that supports server side rendering when using the Window object

```
    const _window = useWindow()
```
