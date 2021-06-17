import React, { useState } from 'react'
import styled from 'styled-components'

type ComponentProps = {
  children: JSX.Element[]
  onToggle?: () => void
}

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  max-width: fit-content;
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const Content = styled.div`
  padding: 1rem 0 0 0;
`

export const Tabs = ({ children }: ComponentProps) => {
  const tabs = children.filter(Boolean)
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const onClick = (tabIndex: number) => {
    setActiveTabIndex(tabIndex)
  }

  const renderTabs = () =>
    React.Children.map(tabs, (child, index) =>
      React.cloneElement(child, {
        onClick,
        tabIndex: index,
        isActive: index === activeTabIndex,
      }),
    )

  const renderActiveTabContent = () => {
    return tabs[activeTabIndex].props.children
  }

  return (
    <>
      <Container>{renderTabs()}</Container>
      <Content>{renderActiveTabContent()}</Content>
    </>
  )
}
