import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin: 24px auto;
  padding: 0 24px;
  max-width: 1140px;
`

export const Wrapper = styled.div<{ isOver: boolean }>`
  padding: 30px 24px;
  border: ${({ isOver }) =>
    isOver ? '1px dashed var(--modifier-color)' : '1px dashed #e0e0e0'};
  border-radius: 2px;
  text-align: center;
`

export const Circle = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  font-size: 16px;
  color: var(--white-color);
  background-color: #f45555;
  border-radius: 50%;
  cursor: pointer;
`

export const Paragraph = styled.p`
  margin-top: 15px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-color);
`
