import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, User, Mail, Phone } from 'lucide-react';

const Chatboat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    // Initial bot message after form submission
    useEffect(() => {
        if (isFormSubmitted) {
            setMessages([{
                id: 1,
                text: "Hi there! Thanks for providing your information. How can I help you with your design project today?",
                sender: 'bot',
                timestamp: new Date()
            }]);
        }
    }, [isFormSubmitted]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (userInfo.name && userInfo.email && userInfo.phone) {
            setIsFormSubmitted(true);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim()) {
            // Add user message
            const newUserMessage = {
                id: messages.length + 1,
                text: inputMessage,
                sender: 'user',
                timestamp: new Date()
            };
            
            setMessages(prev => [...prev, newUserMessage]);
            setInputMessage('');
            
            // Simulate bot response after a delay
            setTimeout(() => {
                const botResponses = [
                    "That's a great question! Our design team specializes in creating visually stunning and functional interfaces.",
                    "I understand your requirement. We've worked on similar projects before with excellent results.",
                    "Thanks for sharing that information. Let me connect you with one of our design experts.",
                    "Our typical turnaround time for such projects is 2-3 weeks, depending on complexity.",
                    "We offer unlimited revisions until you're completely satisfied with the design."
                ];
                
                const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
                
                const botMessage = {
                    id: messages.length + 2,
                    text: randomResponse,
                    sender: 'bot',
                    timestamp: new Date()
                };
                
                setMessages(prev => [...prev, botMessage]);
            }, 1000);
        }
    };

    const handleStartChat = () => {
        if (userInfo.name && userInfo.email && userInfo.phone) {
            setIsFormSubmitted(true);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && inputMessage.trim()) {
            handleSendMessage(e);
        }
    };

    return (
        <div className="fixed bottom-8 right-6 z-50">
            {/* Chatboat Icon */}
            <div 
                className={`w-14 h-14 bg-[#dcd4ff] rounded-full flex items-center justify-center cursor-pointer shadow-[4px_4px_0px_#000] border-2 border-black transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] ${isOpen ? 'scale-0' : 'scale-100'}`}
                onClick={() => setIsOpen(true)}
            >
                <MessageCircle size={28} className="text-black" />
            </div>

            {/* Chatboat Container */}
            <div 
                className={`absolute bottom-4 right-0 w-80 h-[500px] bg-white rounded-t-2xl rounded-bl-2xl shadow-[8px_8px_0px_#000] border-2 border-black transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
            >
                {/* Header */}
                <div className="bg-[#dcd4ff] p-4 rounded-t-2xl rounded-bl-2xl border-b-2 border-black flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <h3 className="font-bold text-black">Design Assistant</h3>
                    </div>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="p-1 rounded-full hover:bg-black/10 transition-colors"
                    >
                        <X size={18} className="text-black" />
                    </button>
                </div>

                {/* Content */}
                <div className="h-[calc(100%-72px)] flex flex-col">
                    {!isFormSubmitted ? (
                        // User Info Form
                        <div className="p-4 flex-1 overflow-y-auto">
                            <h4 className="font-semibold text-black mb-4">Let's get started!</h4>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <User size={14} />
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={userInfo.name}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                                        required
                                    />
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Mail size={14} />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={userInfo.email}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                                        required
                                    />
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Phone size={14} />
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={userInfo.phone}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                                        required
                                    />
                                </div>
                                
                                <button
                                    onClick={handleStartChat}
                                    className="w-full bg-[#dcd4ff] text-black py-2 rounded-lg font-semibold border-2 border-black shadow-[2px_2px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000] transition-all"
                                >
                                    Start Chat
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Chat Interface
                        <>
                            <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-0">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-xs p-3 rounded-lg ${
                                                message.sender === 'user'
                                                    ? 'bg-[#dcd4ff] rounded-br-none'
                                                    : 'bg-gray-100 rounded-bl-none'
                                            }`}
                                        >
                                            <p className="text-sm">{message.text}</p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Message Input */}
                            <div className="p-4 border-t-2 border-gray-200 flex-shrink-0">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Type your message..."
                                        className="flex-1 p-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        className="bg-[#dcd4ff] text-black p-2 rounded-lg border-2 border-black shadow-[2px_2px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000] transition-all"
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Chatboat;