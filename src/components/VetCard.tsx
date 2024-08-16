"use client";
import React, { useState } from 'react';
import Image from 'next/image';


interface VetCardProps {
    name: string;
    specialization: string;
    status: string;
    image: string;
}

interface ChatBoxProps {
    name: string;
    status: string;
    image: string;
    onClose: () => void;
}

const ChatBox = ({ name, status, image, onClose }: ChatBoxProps) => {
    const [messages, setMessages] = useState([
        { text: "Hi Doc!", sender: "patient" },
        { text: "Mr. Shashi will be late for 10 min.", sender: "patient" },
        { text: "Hello Jane!", sender: "doctor" },
        { text: "Ya, no problem", sender: "doctor" },
    ]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
            setMessages([...messages, { text: newMessage, sender: "patient" }]);
            setNewMessage("");
        }
    };

    return (
        <div className="fixed bottom-0 right-4 w-1/3 max-w-lg bg-white rounded-t-lg shadow-lg flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center">
                    <Image src={image} alt={name} className="rounded-full mr-2" width={40} height={40} />
                    <div>
                        <p className="font-semibold">{name}</p>
                        <p className={`text-sm ${status === 'Online' ? 'text-green-500' : 'text-red-500'}`}>{status}</p>
                    </div>
                </div>
                <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                    ×
                </button>
            </div>
            <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex mb-2 ${message.sender === 'patient' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs p-2 rounded-lg ${
                                message.sender === 'patient' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                            }`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-4 border-t flex items-center">
                <input
                    type="text"
                    className="flex-grow border rounded p-2 mr-2"
                    placeholder="Type a message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage} className="text-blue-500 hover:text-blue-700">
                    Send
                </button>
            </div>
        </div>
    );
};

const VetCard = ({ name, specialization, status, image }: VetCardProps) => {
    const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

    const toggleChatBox = () => {
        setIsChatBoxOpen(!isChatBoxOpen);
    };

    return (
        <div className="bg-white p-4 rounded shadow flex items-center mb-4">
            <Image src={image} alt={name} className="rounded-full mr-4" width={80} height={80} />
            <div className="flex-1 justify-center">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold">{name}</h3>
                        <p>{specialization}</p>
                    </div>
                    <p className={status === 'Online' ? 'text-green-500' : 'text-red-500'}>{status}</p>
                </div>
                <div className='flex justify-center mt-4 space-x-2'>
                    <button className="bg-transparent bg-blue-100 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-2 border border-blue-500 hover:border-transparent rounded mt-2">3 slots available</button>
                    <button onClick={toggleChatBox} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                        Message
                    </button>
                </div>
                {isChatBoxOpen && (
                    <ChatBox
                        name={name}
                        status={status}
                        image={image}
                        onClose={toggleChatBox}
                    />
                )}
            </div>
        </div>
    );
};

export default VetCard;
