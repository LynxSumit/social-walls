import { ChatBubble } from '@mui/icons-material';
import React from 'react'
import ChatBot from 'react-simple-chatbot';
const Chatbot = () => {
  return (
    <ChatBot
    floating={true}
    floatingIcon={<ChatBubble sx={{color : 'white'}} />}
botAvatar='https://images.unsplash.com/photo-1545231027-637d2f6210f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D'
  steps={[
  {
    "id": "1",
    "message": "Hi there! What's your name?",
    "trigger": "2"
  },
  {
    "id": "2",
    "user": true,
    "trigger": "3"
  },
  {
    "id": "3",
    "message": "Nice to meet you, {previousValue}! What do you do for a living?",
    "trigger": "4"
  },
  {
    "id": "4",
    "user": true,
    "trigger": "5"
  },
  {
    "id": "5",
    "message": "That sounds interesting! How can I assist you today?",
    "trigger": "6"
  },
  {
    "id": "6",
    "user": true,
    "trigger": "7"
  },
  {
    "id": "7",
    "message": "Sure thing! Let me see how I can help.",
    "trigger": "8"
  },
  {
    "id": "8",
    "message": "Sure! To better assist you, could you provide more details about your request?",
    "trigger": "9"
  },
  {
    "id": "9",
    "user": true,
    "trigger": "10"
  },
  {
    "id": "10",
    "message": "Thanks for providing the details. Based on your request, here are some recommendations:",
    "trigger": "11"
  },
  {
    "id": "11",
    "message": "Step 1: [Provide a recommendation or action]",
    "trigger": "12"
  },
  {
    "id": "12",
    "message": "Step 2: [Another recommendation or action]",
    "trigger": "13"
  },
  {
    "id": "13",
    "user": true,
    "trigger": "14"
  },
  {
    "id": "14",
    "message": "Great! Let me know if these recommendations help or if you need further assistance.",
    "trigger": "15"
  },
  {
    "id": "15",
    "user": true,
    "trigger": "16"
  },
  {
    "id": "16",
    "message": "Sure, I can help with that. To proceed, I need some additional information:",
    "trigger": "17"
  },
  {
    "id": "17",
    "user": true,
    "trigger": "18"
  },
  {
    "id": "18",
    "message": "Got it! Let me check that for you. Please hold on for a moment.",
    "trigger": "19"
  },
  {
    "id": "19",
    "message": "While I'm looking into that, is there anything else you'd like assistance with?",
    "trigger": "20"
  },
  {
    "id": "20",
    "user": true,
    "trigger": "21"
  },
  {
    "id": "21",
    "message": "Understood. I'm here to assist you. Please provide more details about your question or concern.",
   end : true,
  },
  
]
}
/>
  )
}

export default Chatbot
