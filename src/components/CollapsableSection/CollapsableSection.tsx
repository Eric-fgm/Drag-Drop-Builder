import React from 'react'
// @ts-ignore
import SlideToggle from 'react-slide-toggle'
import { Header, Wrapper } from '@/components/CollapsableSection/styles'
import SolidArrow from '@/icons/SolidArrow'

export interface ICollapsableSectionProps {
  headline: string
  children: JSX.Element | string
}

const CollapsableSection: React.FC<ICollapsableSectionProps> = ({ headline, children }) => (
  <SlideToggle
    duration={400}
    render={({
      toggle,
      toggleState,
      setCollapsibleElement,
    }: {
      toggle: () => void
      toggleState: 'COLLAPSED' | 'COLLAPSING' | 'EXPANDING' | 'EXPANDED'
      setCollapsibleElement: React.LegacyRef<HTMLDivElement>
    }) => (
      <Wrapper>
        <Header onClick={toggle}>
          {headline}
          <SolidArrow
            className={`${
              toggleState === 'COLLAPSED' || toggleState === 'COLLAPSING'
                ? 'rotate-in'
                : 'rotate-out'
            }`}
          />
        </Header>
        <div
          ref={setCollapsibleElement}
          className={toggleState === 'EXPANDED' ? 'overflow-visible' : ''}
        >
          {children}
        </div>
      </Wrapper>
    )}
  />
)

export default React.memo(CollapsableSection)
