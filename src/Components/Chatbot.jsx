// Chatbot.jsx
import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Halo! Ada yang bisa kami bantu? / Hello! How can we help you?", from: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { text: input, from: "user" }];
    setMessages(newMessages);
    setInput("");

    // Jawaban chatbot manual
    let response = "";
    if (input.toLowerCase().includes("layanan")) {
      response =
        "Kami menyediakan layanan:\n1. Pembuatan Website Frontend\n2. Backend\n3. Fullstack\n4. UI/UX Design\n\nWe offer:\n1. Frontend Website\n2. Backend\n3. Fullstack\n4. UI/UX Design";
    } else if (input.toLowerCase().includes("frontend")) {
      response = "Frontend kami berbasis React.js, Tailwind, dan mobile-friendly UI.";
    } else if (input.toLowerCase().includes("backend")) {
      response = "Backend kami menggunakan Node.js, Express, dan database seperti MongoDB/MySQL.";
    } else if (input.toLowerCase().includes("ui") || input.toLowerCase().includes("design")) {
      response = "Kami juga menawarkan jasa desain UI/UX berbasis Figma dan Adobe XD.";
    } else {
      response = "Maaf, bisa ulangi? / Sorry, can you repeat that?";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, from: "bot" }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="bg-white w-72 md:w-80 h-96 shadow-xl rounded-lg flex flex-col justify-between overflow-hidden border border-gray-300">
          <div className="p-4 bg-blue-500 text-white font-bold">💬 Chat Layanan</div>
          <div className="p-3 flex-1 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-md max-w-[80%] ${
                  msg.from === "bot" ? "bg-gray-200 text-black" : "bg-blue-500 text-white self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 flex gap-1 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pesan / Type message"
              className="flex-1 text-sm px-2 py-1 border rounded-md"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-3 rounded-md text-sm hover:bg-blue-600"
            >
              Kirim
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        💬
      </button>
    </div>
  );
}
