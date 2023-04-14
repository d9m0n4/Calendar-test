import {Header} from "./components/Header/Header";
import styled from "styled-components";

function App() {
  return <div className="App">
    <Container>
      <Header />
    </Container>
  </div>;
}

const Container = styled.div`
  max-width: 760px;
  width: 100%;
  margin: 0 auto;
`

export default App;
