import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleGenerate = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/litgptchat');
            setOutput(response.data.output);
        } catch (error) {
            console.error('Error generating output:', error);
            setOutput('Failed to generate output.');
        }
        setLoading(false);
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-2xl font-bold mb-4">LitGPT Output</h1>
            <button
                onClick={handleGenerate}
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded transition duration-200"
                disabled={loading}
            >
                {loading ? 'Generating...' : 'Generate'}
            </button>
            <div className="mt-6 w-full max-w-2xl bg-gray-800 p-4 rounded shadow-md">
                {output ? <p className="whitespace-pre-wrap">{output}</p> : <p>No output yet...</p>}
            </div>
            <button onClick = {handleBack} className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded transition duration-200 mt-6'>
                Back
            </button>
        </div>
    );
};

export default Chat;
