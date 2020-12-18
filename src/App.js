import React, { useEffect } from "react";
import styled from "styled-components";

import { Login } from "./pages";
import { Header, Sidebar, Feed, Widgets } from "./components";

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
  margin-top: 3.5rem;
  max-width: 120rem;
  margin-left: 2rem;
  margin-right: 2rem;
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
  }, [dispatch]);

  return (
    <AppContainer>
      <Header />

      {!user ? (
        <Login />
      ) : (
        <AppMain>
          <Sidebar />
          <Feed />
          <Widgets />
        </AppMain>
      )}
    </AppContainer>
  );
}

export default App;
