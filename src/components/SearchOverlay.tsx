import './SearchOverlay.css'
import React, { FunctionComponent, useState } from 'react'
import classNames from 'classnames'
import { MagnifyingGlassIcon } from './icons/MagnifyingGlassIcon'
import { CrossIcon } from './icons/CrossIcon'

type Props = {
  onSearch: (term: string) => void
  onCancel?: () => void
  placeholder?: string
  defaultValue?: string
}

export const SearchOverlay: FunctionComponent<Props> = ({
  onSearch,
  onCancel,
  placeholder = 'search',
  defaultValue = '',
}) => {
  const [searchMode, setSearchMode] = useState(false)
  const overlayClass = searchMode ? 'showing' : 'hiding'

  const open = () => {
    setTerm('')
    setSearchMode(true)
  }
  const [term, setTerm] = useState(defaultValue)

  const search = () => {
    if (term.length) {
      onSearch(term)
      setSearchMode(false)
    }
  }

  const cancel = () => {
    onCancel && onCancel()
    setSearchMode(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      searchMode ? search() : open()
    } else if (event.key === 'Escape') {
      cancel()
    }
  }

  return (
    <section className="search-overlay" onKeyDown={handleKeyDown}>
      <button className="button button-open" onClick={open}>
        <MagnifyingGlassIcon className="icon" fill="currentcolor" />
      </button>

      <div className={classNames('overlay', overlayClass)}>
        <button className="button button-close" onClick={cancel}>
          <CrossIcon className="icon" fill="currentcolor" />
        </button>

        <div className="search">
          <label htmlFor="keywords" className="visuallyhidden">
            Search
          </label>
          <input
            ref={(input) => input && input.focus()}
            className="input input-search"
            id="keywords"
            name="keywords"
            type="search"
            value={term}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTerm(event.currentTarget.value)
            }
            defaultValue={defaultValue}
            placeholder={placeholder}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
          />
          <button type="button" className="button button-search" onClick={search}>
            <MagnifyingGlassIcon className="icon" fill="currentcolor" />
          </button>
        </div>
      </div>
    </section>
  )
}
