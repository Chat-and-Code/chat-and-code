import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { white, black } from "../Colors/colors";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
// import SVG from "../Images/MainBg.svg";

const MainBox = styled.div`
  background-color: mediumslateblue;
`;

const MainBox1 = styled(Box)`
  background-color: indigo;
`;

const MainHeading = styled.h1`
  display: flex;
  font-weight: 700;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 130px;
  font-family: "Marck Script", cursive;
  letter-spacing: 2px;
  color: ${white};
  text-align: center; 

  @media (max-width: 768px) {
    font-size: 80px;
  }
`;
const Icon = styled.span`
  left: -10px;
  position: relative;
`;
const MainButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  background-color: ${white};
  color: ${black};
  font-size: 30px;
  font-weight: 700;
  border: none;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${white};
    background-color: ${black};
    cursor: pointer;
  }
`;
const move = keyframes`
    0% {
        transform: translateX(0px);
    }
    50% {
        transform: translateX(10px);
    }
    100% {
        transform: translateX(0px);
    }
    `;
const Animation = styled.span`
  animation: ${move} 1.5s ease-in-out infinite;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const HomePage = () => {
  const navigate = useNavigate();
  const handleBegin = () => {
    navigate("/auth");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      navigate("/chats");
    }
  }, [navigate]);

  return (
    <Box display="flex" flexDirection="row" w="100vw" h="100vh" > 
      <MainBox1
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="50%"
      >
        {/* <Image src={SVG} /> */}
        {/* <Image src="https://www.freepik.com/free-ai-image/purple-background-with-white-light-it_40861071.htm#fromView=search&page=1&position=6&uuid=c40702a2-8d18-4673-8c22-f6016c454245"></Image> */}
      </MainBox1>
      <MainBox>
        <MainHeading>
          <Icon>
            <BsFillChatQuoteFill
              size="90px"
              color="white"
            ></BsFillChatQuoteFill>
          </Icon>
          LetsChat
        </MainHeading>
        <MainButton onClick={handleBegin}>
          Begin
          <Animation>
            <FiChevronRight />
          </Animation>
        </MainButton>
      </MainBox>
    </Box>
  );
};

export default HomePage;
