import { useState } from "react";
import {
  MainContainer,
  LeftContainer,
  RightContainer,
  COntainerCentered,
} from "./components/containers.js";
import Form from "./components/Form";
import Results from "./components/Results/index.js";

function App() {
  const [tomorrow, setTomorrow] = useState(0);
  const [ft, setFt] = useState(0);
  const [td, setTd] = useState(0);
  const [nt, setNt] = useState(0);
  return (
    <COntainerCentered>
      <MainContainer>
        <LeftContainer>
          <Form
            setTomorrow={setTomorrow}
            setFt={setFt}
            setNt={setNt}
            setTd={setTd}
          />
        </LeftContainer>
        <RightContainer>
          <Results tomorrow={tomorrow} ft={ft} td={td} nt={nt} />
        </RightContainer>
      </MainContainer>
    </COntainerCentered>
  );
}

export default App;
