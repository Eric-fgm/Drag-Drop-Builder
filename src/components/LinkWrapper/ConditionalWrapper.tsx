import React from 'react'

export interface IConditionalWrapperProps {
  flag: boolean
  wrapper: (children: JSX.Element) => JSX.Element
  children: JSX.Element
}

const ConditionalWrapper: React.FC<IConditionalWrapperProps> = ({
  flag,
  wrapper,
  children,
}) => (flag ? wrapper(children) : children)

export default ConditionalWrapper
