# as-ui-components

React components, icons and hooks

## Components

See storybook for component and icon usage
http://as-ui-components.s3-website-eu-west-1.amazonaws.com/

- Button
- Checkbox
- SortableList
- Table,
- TableBody,
- TableCell,
- TableHeadCell,
- TableHeader,
- TableRow,
- TextInput

### SortableList

Children should a component render of the data, e.g.

```
    <SortableList data={data} setData={setData}>
        {data.map((item, index) => (
            <Container key={index}>{item}</Container>
        ))}
    </SortableList>
```

## Icons

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
- ResizeIcon (horzontal | vertical)
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

### useCookie

```
    setCookie('cookie-name', 'some value')
    getCookie('cookie-name')
    deleteCookie('cookie-name')
```
