import { ChatBubble } from '@mui/icons-material';
import React from 'react'
import ChatBot from 'react-simple-chatbot';
const Chatbot = () => {
  return (
    <ChatBot
    floating={true}
    floatingIcon={<ChatBubble sx={{color : 'white'}} />}
botAvatar='https://images.unsplash.com/photo-1545231027-637d2f6210f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D'

  steps={ [
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
      "message": "Nice to meet you, {previousValue}! Please enter your email address",
      "trigger": "4"
    },
    {
      "id": "4",
      "user": true,
      "trigger": "5"
    },
    {
      "id": "5",
      "message": "Please enter your phone number",
      "trigger": "phone"
    },
    {
      "id": "phone",
      user : true,
      "trigger": "7"
    },
    {
      "id": "7",
      "message": "Choose your issue from the options given below. ",
      "trigger": "8"
    },
    {
      "id": "8",
      "options": [
        { "value": 1, "label": "IT Services", "trigger": "9" },
        { "value": 2, "label": "Remote Services", "trigger": "20" },
        { "value": 3, "label": "VR Services", "trigger": "30" },
        { "value": 4, "label": "AI Services", "trigger": "40" }
      ]
    },
    {
      "id": "9",
      "message": "Choose the type of service you want.",
      "trigger": "10"
    },
    {
      "id": "10",
      "options": [
        { "value": 1, "label": "Custom Services", "trigger": "11" },
        { "value": 2, "label": "Prebuild Services", "trigger": "26" }
      ]
    },
    {
      "id": "11",
      "message": "We provide great Customer Services. What type of services do you want?",
      "trigger": "12"
    },
    {
      "id": "12",
      "options": [
        { "value": 1, "label": "Mobile Apps", "trigger": "13" },
        { "value": 2, "label": "Web Applications", "trigger": "26" },
        { "value": 3, "label": "Desktop Applications", "trigger": "26" }
      ]
    },
    {
      "id": "13",
      "message": "We build many types of applications compatible with different Operating Systems. Select your preferable platform.",
      "trigger": "14"
    },
    {
      "id": "14",
      "options": [
        { "value": 1, "label": "Android", "trigger": "15" },
        { "value": 2, "label": "iOS", "trigger": "26" },
        { "value": 3, "label": "Cross Platform", "trigger": "26" }
      ]
    },
    {
      "id": "15",
      "message": "We have many types of Android Applications. Choose your preferable one.",
      "trigger": "16"
    },
    {
      "id": "16",
      "options": [
        { "value": 1, "label": "Ecommerce", "trigger": "17" },
        { "value": 2, "label": "Social Media", "trigger": "26" },
        { "value": 3, "label": "Business", "trigger": "26" }
      ]
    },
    {
      "id": "17",
      "message": "Great! You can choose further to talk to our live agent or you can email us.",
      "trigger": "18"
    },
    {
      "id": "18",
      "options": [
        { "value": 1, "label": "Live Agent", "trigger": "19" },
        { "value": 2, "label": "Email", "trigger": "26" }
      ]
    },
    {
      "id": "19",
      "message": "Please wait while we connect you to our live agent.",
      "end": true
    },
    {
      "id": "20",
      "message": "Choose the type of Remote service you want.",
      "trigger": "21"
    },
    {
      "id": "21",
      "options": [
        { "value": 1, "label": "Remote IT Support", "trigger": "22" },
        { "value": 2, "label": "Remote HR Support", "trigger": "26" }
      ]
    },
    {
      "id": "22",
      "message": "Great! You can talk to our Remote IT specialist or email us.",
      "trigger": "24"
    },
    {
      "id": "24",
      "options": [
        { "value": 1, "label": "Talk to Remote IT specialist", "trigger": "25" },
        { "value": 2, "label": "Email", "trigger": "26" }
      ]
    },
    {
      "id": "25",
      "message": "Please wait while we connect you to our Remote IT specialist.",
      "end": true
    },
    {
      "id": "26",
      "message": "You can email us at example@example.com. Have a great day!",
      "end": true
    },
    {
      "id": "30",
      "message": "Choose the type of VR service you want.",
      "trigger": "31"
    },
    {
      "id": "31",
      "options": [
        { "value": 1, "label": "VR Game Development", "trigger": "32" },
        { "value": 2, "label": "VR Training Simulation", "trigger": "26" }
      ]
    },
    {
      "id": "32",
      "message": "Great! You can talk to our VR Game Development specialist or email us.",
      "trigger": "34"
    },
    {
      "id": "34",
      "options": [
        { "value": 1, "label": "Talk to VR Game Development specialist", "trigger": "35" },
        { "value": 2, "label": "Email", "trigger": "26" }
      ]
    },
    {
      "id": "35",
      "message": "Please wait while we connect you to our VR Game Development specialist.",
      "end": true
    },
    {
      "id": "36",
      "message": "You can email us at example@example.com. Have a great day!",
      "end": true
    },
    {
      "id": "40",
      "message": "Choose the type of AI service you want.",
      "trigger": "41"
    },
    {
      "id": "41",
      "options": [
        { "value": 1, "label": "AI Model Development", "trigger": "42" },
        { "value": 2, "label": "AI Data Analysis", "trigger": "26" }
      ]
    },
    {
      "id": "42",
      "message": "Great! You can talk to our AI Model Development specialist or email us.",
      "trigger": "44"
    },
    {
      "id": "44",
      "options": [
        { "value": 1, "label": "Talk to AI Model Development specialist", "trigger": "45" },
        { "value": 2, "label": "Email", "trigger": "26" }
      ]
    },
    {
      "id": "45",
      "message": "Please wait while we connect you to our AI Model Development specialist.",
      "end": true
    },
    {
      "id": "46",
      "message": "You can email us at example@example.com. Have a great day!",
      "end": true
    }
  ]
  }


/>
  )
}

export default Chatbot