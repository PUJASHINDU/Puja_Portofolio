import React, { useState } from 'react';
import { faq } from '../Data PAQ/pax';
import { MessageBubble } from './MessageBubble';
import { FaRobot, FaTimes, FaGlobe } from 'react-icons/fa';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [lang, setLang] = useState('id');

  const handleQuestionClick = (q) => {
    const found = faq[lang].find(item => item.question === q);
    if (found) {
      setMessages(prev => [...prev, { from: 'user', text: q }, { from: 'bot', text: found.answer }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="bg-white shadow-xl rounded-xl w-80 p-4 border">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">🤖 Jazin Chatbot</h2>
            <div className="flex items-center gap-2">
              <button onClick={() => setLang(lang === 'id' ? 'en' : 'id')} className="text-sm text-blue-600 flex items-center">
                <FaGlobe className="mr-1" /> {lang === 'id' ? 'EN' : 'ID'}
              </button>
              <FaTimes onClick={() => setOpen(false)} className="cursor-pointer" />
            </div>
          </div>
          <div className="h-56 overflow-y-auto mb-2">
            {messages.map((msg, i) => (
              <MessageBubble key={i} from={msg.from} text={msg.text} />
            ))}
          </div>
          <div>
            <p className="text-sm mb-1 font-medium">{lang === 'id' ? 'Pertanyaan umum:' : 'Common questions:'}</p>
            <div className="flex flex-col gap-1">
              {faq[lang].map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleQuestionClick(item.question)}
                  className="text-left text-sm bg-gray-100 hover:bg-gray-200 p-2 rounded"
                >
                  {item.question}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-customBlue hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center"
        >
          <FaRobot className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
