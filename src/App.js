import React, { useEffect } from "react";
import styled from "styled-components";

import { Login } from "./pages";
import { Header, Sidebar, Feed } from "./components";

import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./reducer/userReducer";
import { auth } from "./config/firebase";

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
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

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
