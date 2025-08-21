import React, { useState } from "react";
import { faq } from "../Data PAQ/pax";
import { MessageBubble } from "./MessageBubble";
import { FaRobot, FaTimes, FaGlobe } from "react-icons/fa";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [lang, setLang] = useState("id");

  const handleQuestionClick = (q) => {
    const found = faq[lang].find((item) => item.question === q);
    if (found) {
      setMessages((prev) => [
        ...prev,
        { from: "user", text: q },
        { from: "bot", text: found.answer },
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbox */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        {open && (
          <div className="bg-white shadow-xl rounded-xl w-80 max-w-[90vw] p-4 border flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-3 border-b pb-2">
              <h2 className="font-bold text-lg flex items-center gap-2">
                🤖 Jazin Chatbot
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLang(lang === "id" ? "en" : "id")}
                  className="text-sm text-blue-600 flex items-center hover:underline"
                >
                  <FaGlobe className="mr-1" /> {lang === "id" ? "EN" : "ID"}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-600 hover:text-red-500 transition"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 h-56 overflow-y-auto mb-3 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              {messages.length === 0 ? (
                <p className="text-gray-400 text-sm text-center mt-10">
                  {lang === "id"
                    ? "Mulai dengan memilih pertanyaan di bawah 👇"
                    : "Start by choosing a question below 👇"}
                </p>
              ) : (
                messages.map((msg, i) => (
                  <MessageBubble key={i} from={msg.from} text={msg.text} />
                ))
              )}
            </div>

            {/* Questions */}
            <div>
              <p className="text-sm mb-1 font-medium">
                {lang === "id" ? "Pertanyaan umum:" : "Common questions:"}
              </p>
              <div className="flex flex-col gap-1">
                {faq[lang].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuestionClick(item.question)}
                    className="text-left text-sm bg-gray-100 hover:bg-gray-200 p-2 rounded transition"
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-customBlue hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center transition transform hover:scale-110"
        >
          <FaRobot className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
