import { Box } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../Context/ChatProvider";
import SingleChat from "./SingleChat";
import styled from "styled-components";
import Chatlist from '../Images/6189833_3179875.jpg'

const MainBox = styled(Box)`
    background-image:url(${Chatlist})`

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
  return (
    <MainBox
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDirection="column"
      p={3}
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </MainBox>
  );
};

export default ChatBox;
