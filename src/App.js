import React from "react";
import styled from "styled-components";

import { Login } from "./pages";
import { Header, Sidebar, Feed } from "./components";

import { useSelector } from "react-redux";
import { selectUser } from "./reducer/userReducer";

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
  const user = useSelector(selectUser);

  return (
    <AppContainer>
      <Header />

      {!user ? (
        <Login />
      ) : (
        <AppMain>
          <Sidebar />
          <Feed />
        </AppMain>
      )}
    </AppContainer>
  );
}

export default App;
