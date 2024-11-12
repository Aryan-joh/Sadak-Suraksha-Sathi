import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { TbMessageChatbot } from "react-icons/tb";
import Carousel from 'react-bootstrap/Carousel';
import Image3 from '../assets/3.png';
import Image4 from '../assets/4.png';
import './TranlateMain.css';

const TranslateMain = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, generatingAnswer]);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;

    setGeneratingAnswer(true);
    const currentQuestion = question;
    setQuestion(""); // Clear input immediately after sending

    // Add user question to chat history
    setChatHistory(prev => [...prev, { type: 'question', content: currentQuestion }]);

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAdORn8RMnNxSnfS7j2uBOUHvpeL9PV7Wc",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });
      const aiResponse = response.data.candidates[0].content.parts[0].text;
      setChatHistory(prev => [...prev, { type: 'answer', content: aiResponse }]);
      setAnswer(aiResponse);
    } catch (error) {
      console.log(error.response?.data || error.message);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }
    setGeneratingAnswer(false);
  }

  return (
    <>
      <div className="container my-4 ">
        <div className="row justify-content-center">
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto mb-4 rounded-lg bg-white shadow-lg p-3 hide-scrollbar"
          >   <h2 className="h3 fw-bold  mb-4 text-center">Ask anything from AI Chatbot 👋</h2>
            {chatHistory.length === 0 ? (
               <div className="empty-box text-center p-3" style={{height: "300px", width: "100%"}}>
              
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-blue-500">💡</span> Multilingual Translation
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-blue-500">🔧</span> Traffic Rules
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-blue-500">📝</span>Road Safety Guidelines 
                  </div>
                 
                </div>
              </div>
            ) : (
              <>
                {chatHistory.map((chat, index) => (
                  <div key={index} className={`mb-4 ${chat.type === 'question' ? 'text-right' : 'text-left'}`}>
                    <div className={`d-inline-block p-3 rounded-lg   ${
                      chat.type === 'question' 
                        ? 'bg-primary text-white rounded'
                        : 'bg-light text-gray-800 rounded'
                    }`}>
                      <ReactMarkdown className="overflow-auto">{chat.content}</ReactMarkdown>
                    </div>
                  </div>
                ))}
              </>
            )}
            {generatingAnswer && (
              <div className="text-left">
                <div className="inline-block bg-gray-100 p-3 rounded-lg animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={generateAnswer} className="bg-white rounded-lg shadow-lg p-4">
            <div className="d-flex gap-1 align-items-center ">
              <input
                type="text"
                className="form-control w-100"
                required
                style={{ width: '500px',height:"60px" }}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask anything..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    generateAnswer(e);
                  }
                }}
              />
              <button
                type="submit"
               
                className={`btn btn-primary ${
                  generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={generatingAnswer}
              >
                Send <TbMessageChatbot />
              </button>
            </div>
          </form>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img src={Image3} alt="" style={{ display: 'block', margin: 0, padding: '10px', width: '100%', height: '100%' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Image4} alt="" style={{ display: 'block', margin: 0, padding: '10px', width: '100%', height: '100%' }} />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default TranslateMain;
