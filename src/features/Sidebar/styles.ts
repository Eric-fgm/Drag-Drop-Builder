import styled from 'styled-components'

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 256px;
`

export const StyledWrapper = styled.div`
  flex: 1;
  height: 100%;
  border-right: 1px solid #e0e0e0;
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
  }
`
