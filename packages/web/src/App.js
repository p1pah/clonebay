import React from 'react'
import styled from 'styled-components'

function App() {

  const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: blueviolet;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;

return(
  <Wrapper>
    <Title>
     BeatsBay
    </Title>
  </Wrapper>
);
}

export default App
  