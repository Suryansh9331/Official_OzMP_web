


// import React, { useState, useEffect } from "react";
// import { MessageCircle, X, Send, User, Mail, Phone } from "lucide-react";

// const Chatboat = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [userInfo, setUserInfo] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState("");

//   // Initial bot message after form submission
//   useEffect(() => {
//     if (isFormSubmitted) {
//       setMessages([
//         {
//           id: 1,
//           text: "Hi there! Thanks for providing your information. How can I help you with your design project today?",
//           sender: "bot",
//           timestamp: new Date(),
//         },
//       ]);
//     }
//   }, [isFormSubmitted]);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (userInfo.name && userInfo.email && userInfo.phone) {
//       setIsFormSubmitted(true);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserInfo((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (inputMessage.trim()) {
//       const newUserMessage = {
//         id: messages.length + 1,
//         text: inputMessage,
//         sender: "user",
//         timestamp: new Date(),
//       };
//       setMessages((prev) => [...prev, newUserMessage]);
//       setInputMessage("");

//       try {
//         const response = await fetch("https://oz-chatboat-backend.onrender.com/api/chat", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ question: inputMessage }),
//         });

//         const data = await response.json();

//         const botMessage = {
//           id: messages.length + 2,
//           text: data.reply || "Sorry, no reply received.",
//           sender: "bot",
//           timestamp: new Date(),
//         };
//         setMessages((prev) => [...prev, botMessage]);
//       } catch (error) {
//         console.error("Error:", error);
//         setMessages((prev) => [
//           ...prev,
//           {
//             id: messages.length + 2,
//             text: "Server error. Please try again.",
//             sender: "bot",
//             timestamp: new Date(),
//           },
//         ]);
//       }
//     }
//   };

//   const handleStartChat = () => {
//     if (userInfo.name && userInfo.email && userInfo.phone) {
//       setIsFormSubmitted(true);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && inputMessage.trim()) {
//       handleSendMessage(e);
//     }
//   };

//   return (
//     <div className="fixed bottom-26 lg:bottom-18 lg:right-6 md:bottom-30 md:right-6 right-4 z-50">
//       <div
//         className={`w-14 h-14 bg-[#dcd4ff] rounded-full flex items-center justify-center cursor-pointer shadow-[4px_4px_0px_#000] border-2 border-black transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] ${
//           isOpen ? "scale-0" : "scale-100"
//         }`}
//         onClick={() => setIsOpen(true)}
//       >
//         <MessageCircle size={28} className="text-black" />
//       </div>

//       <div
//         className={`absolute bottom-4 right-0 w-80 h-[500px] bg-white rounded-t-2xl rounded-bl-2xl shadow-[8px_8px_0px_#000] border-2 border-black transition-all duration-300 transform origin-bottom-right ${
//           isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
//         }`}
//       >
      
//         <div className="bg-[#dcd4ff] p-4 rounded-t-2xl rounded-bl-2xl border-b-2 border-black flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//             <h3 className="font-bold text-black">Design Assistant</h3>
//           </div>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="p-1 rounded-full hover:bg-black/10 transition-colors"
//           >
//             <X size={18} className="text-black" />
//           </button>
//         </div>

     
//         <div className="h-[calc(100%-72px)] flex flex-col">
//           {!isFormSubmitted ? (
           
//             <div className="p-4 flex-1 overflow-y-auto">
//               <h4 className="font-semibold text-black mb-4">
//                 Let's get started!
//               </h4>
//               <div className="space-y-4">
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
//                     <User size={14} />
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={userInfo.name}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
//                     <Mail size={14} />
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={userInfo.email}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
//                     <Phone size={14} />
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={userInfo.phone}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
//                     required
//                   />
//                 </div>

//                 <button
//                   onClick={handleStartChat}
//                   className="w-full bg-[#dcd4ff] text-black py-2 rounded-lg font-semibold border-2 border-black shadow-[2px_2px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000] transition-all"
//                 >
//                   Start Chat
//                 </button>
//               </div>
//             </div>
//           ) : (
          
//             <>
//               <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-0">
//                 {messages.map((message) => (
//                   <div
//                     key={message.id}
//                     className={`flex ${
//                       message.sender === "user"
//                         ? "justify-end"
//                         : "justify-start"
//                     }`}
//                   >
//                     <div
//                       className={`max-w-xs p-3 rounded-lg ${
//                         message.sender === "user"
//                           ? "bg-[#dcd4ff] rounded-br-none"
//                           : "bg-gray-100 rounded-bl-none"
//                       }`}
//                     >
//                       <p className="text-sm">{message.text}</p>
//                       <p className="text-xs text-gray-500 mt-1">
//                         {message.timestamp.toLocaleTimeString([], {
//                           hour: "2-digit",
//                           minute: "2-digit",
//                         })}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

             
//               <div className="p-4 border-t-2 border-gray-200 flex-shrink-0">
//                 <div className="flex gap-2">
//                   <input
//                     type="text"
//                     value={inputMessage}
//                     onChange={(e) => setInputMessage(e.target.value)}
//                     onKeyPress={handleKeyPress}
//                     placeholder="Type your message..."
//                     className="flex-1 p-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
//                   />
//                   <button
//                     onClick={handleSendMessage}
//                     className="bg-[#dcd4ff] text-black p-2 rounded-lg border-2 border-black shadow-[2px_2px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000] transition-all"
//                   >
//                     <Send size={18} />
//                   </button>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatboat;




import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User, Mail, Phone } from "lucide-react";

const Chatboat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false); 

  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Initial bot message after form submission
  useEffect(() => {
    if (isFormSubmitted) {
      setMessages([
        {
          id: 1,
          text: "Hi there! Thanks for providing your information. How can I help you with your design project today?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
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
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newUserMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMessage]);
      setInputMessage("");
      setIsTyping(true);

      try {
        const response = await fetch(
          "https://oz-chatboat-backend.onrender.com/api/chat",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: inputMessage }),
          }
        );

        const data = await response.json();

        const botMessage = {
          id: messages.length + 2,
          text: data.reply || "Sorry, no reply received.",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        console.error("Error:", error);
        setMessages((prev) => [
          ...prev,
          {
            id: messages.length + 2,
            text: "Server error. Please try again.",
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  const handleStartChat = () => {
    if (userInfo.name && userInfo.email && userInfo.phone) {
      setIsFormSubmitted(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputMessage.trim()) {
      handleSendMessage(e);
    }
  };

  return (
    <div className="fixed bottom-26 lg:bottom-18 lg:right-6 md:bottom-30 md:right-6 right-4 z-50">
      {/* Floating button */}
      <div
        className={`w-14 h-14 bg-[#dcd4ff] rounded-full flex items-center justify-center cursor-pointer shadow-[4px_4px_0px_#000] border-2 border-black transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] ${
          isOpen ? "scale-0" : "scale-100"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle size={28} className="text-black" />
      </div>

      {/* Chat window */}
      <div
        className={`absolute bottom-4 right-0 w-80 sm:w-96 h-[500px] bg-white rounded-t-2xl rounded-bl-2xl shadow-[8px_8px_0px_#000] border-2 border-black transition-all duration-300 transform origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-[#dcd4ff] p-4 rounded-t-2xl rounded-bl-2xl border-b-2 border-black flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <h3 className="font-semibold text-black font-[outfit]">Oz Chatboat Assistant 🤖</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full hover:cursor-pointer hover:bg-black/10 transition-colors"
          >
            <X size={18} className="text-black" />
          </button>
        </div>

        {/* Body */}
        <div className="h-[calc(100%-72px)] flex flex-col">
          {!isFormSubmitted ? (
            // Initial form
            <div className="p-4 flex-1 overflow-y-auto">
              <h4 className="font-semibold text-black mb-4">
                Let's get started!
              </h4>
              <div className="space-y-4">
                {/* Name */}
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
                {/* Email */}
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
                {/* Phone */}
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
            <>
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-0">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex transition-all ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] p-3 rounded-lg animate-fadeIn ${
                        message.sender === "user"
                          ? "bg-[#dcd4ff] rounded-br-none"
                          : "bg-gray-100 rounded-bl-none"
                      }`}
                    >
                      <p className="text-sm break-words">{message.text}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none max-w-[50%]">
                      <div className="flex space-x-1">
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
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
