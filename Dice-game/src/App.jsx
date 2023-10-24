import './App.css'
import styled from 'styled-components'

function App() {
  const Button = styled.button`
  background-color: black;
  color: white;
  padding: 6px;
  border-radius: 5px;
  `;
  return (
    <>
      <Button>Log In</Button>
    </>
  )
}

export default App
