import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    const handleSend = async () => {
        if (!input.trim()) return;

        // Add user message to state
        const newMessages = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);

        try {
            // Send the prompt to the backend
            const response = await axios.post('http://localhost:5000/api/litgptchat', { prompt: input });

            // Add AI response to state
            setMessages([...newMessages, { sender: 'ai', text: response.data.text }]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages([...newMessages, { sender: 'ai', text: 'Failed to get a response from the model.' }]);
        }

        // Clear input field
        setInput('');
    };

    
    const handleBack = () => {
        navigate('/');
    }

    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white">
            {/* Header */}
            <div className='relative flex items-center p-4 bg-gray-800'>
            <button onClick = {handleBack} className='bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-200 mr-4'>Back</button>
            <div className="p-4 bg-gray-800 text-lg font-bold absolute left-1/2 transform -translate-x-1/2">
                LitGPT Chat
            </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`px-4 py-2 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-purple-600' : 'bg-gray-700'}`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Box */}
            <div className="p-4 bg-gray-800 flex">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 bg-gray-700 rounded-l-lg focus:outline-none"
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button
                    onClick={handleSend}
                    className="bg-purple-600 px-6 py-2 rounded-r-lg font-semibold hover:bg-purple-500 transition"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
