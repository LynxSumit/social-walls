// import { Person2 } from '@mui/icons-material';
import { Avatar } from '@mui/joy';
import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [createChatBotMessage(`Welcome to Nulark Solutions !`)],
    botName: 'Nulark Solutions',
    customComponents : {
        botAvatar :  (props) => <Avatar/>
    }

};

export default config;