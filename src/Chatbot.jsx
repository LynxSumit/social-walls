import React from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './chatbot/config'
import MessageParser from './chatbot/MessageParser'
import ActionProvider from './chatbot/ActionProvider'
import { Box } from '@mui/joy'
import "./chatbot/chatbot.style.css"
const CHATBOT = () => {
  return (
    <Box sx={{display : 'flex', justifyContent : 'center', alignItems : 'center',  height : '100vh'}}>

    <Chatbot  config={config} messageParser={MessageParser} actionProvider={ActionProvider}     />
    </Box>
  )
}

export default CHATBOT
