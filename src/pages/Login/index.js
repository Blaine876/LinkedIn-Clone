import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../reducer/userReducer";
import linkedinLogo from "../../assets/icons/linkedinLogo-lg.png";

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 10rem 0;
`;

const LoginLogoImage = styled.img`
  height: 7rem;
  object-fit: contain;
  margin: 2rem 0;
`;

const SpanText = styled.span`
  color: #0177b7;
  cursor: pointer;
`;

const LoginText = styled.p`
  margin-top: 5rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginInputField = styled.input`
  width: 35rem;
  height: 5rem;
  font-size: 2rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const LoginButton = styled.button`
  width: 35rem;
  height: 5rem;
  font-size: large;
  background-color: #0074b1;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  &:hover {
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  const loginUser = (e) => {
    e.preventDefault();
  };

  const registerUser = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic,
            })
          );
        });
    });
  };

  return (
    <LoginContainer>
      <LoginLogoImage src={linkedinLogo} alt="logo" />

      <LoginForm>
        <LoginInputField
          placeholder="Full name (required if registering)"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <LoginInputField
          placeholder="Profile Pic URL (Optional)"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <LoginInputField
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInputField
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton type="submit" onClick={loginUser}>
          Sign In
        </LoginButton>
      </LoginForm>

      <LoginText>
        Dont't have an account?
        <SpanText onClick={registerUser}> Sign Up</SpanText>
      </LoginText>
    </LoginContainer>
  );
};

export default Login;
