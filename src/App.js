import React from "react";
import styled from "styled-components";

import { Header, Sidebar, Feed } from "./components";

const AppContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  background-color: #f3f2ef;
`;

const AppMain = styled.main`
  display: flex;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <AppMain>
        <Sidebar />
        <Feed />
      </AppMain>
    </AppContainer>
  );
}

export default App;
