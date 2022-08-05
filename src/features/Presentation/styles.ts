import styled from 'styled-components'

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
  }
`
