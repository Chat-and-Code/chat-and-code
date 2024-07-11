import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyImage from "../Images/11672015_13259.jpg";
import Signup from "../Components/Authentication/Signup";
import Login from "../Components/Authentication/Login";
import { useNavigate } from "react-router-dom";
import mystyles from "../Images/18706339_rm251-mind-03-g.jpg";
import formstyle from "../Images/purple-background-with-white-light-it.jpg";

const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("${mystyles}");
  background-position: center;
  background-size: cover;
  position: relative;
`;
const InnerBox = styled.div`
  width: 92%;
  height: 92%;
  display: flex;
  background-image: url("${formstyle}");
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;
const RightBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;
const SvgIcon = styled.div`
  background-image: url("${MyImage}");
  width: 100%;
  height: 100%;
  display: flex;
`;
const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      navigate("/chats");
    }
  }, [navigate]);
  const handleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <MainBox>
      <InnerBox>
        <LeftBox>
          {/* <Icon>
            {isSignup ? <TextBox>Signup</TextBox> : <TextBox>Login</TextBox>}
          </Icon> */}
          <SvgIcon />
        </LeftBox>
        <RightBox>
          {isSignup ? (
            <Signup handleSignup={handleSignup} />
          ) : (
            <Login handleSignup={handleSignup} />
          )}
        </RightBox>
      </InnerBox>
    </MainBox>
  );
};

export default Auth;
