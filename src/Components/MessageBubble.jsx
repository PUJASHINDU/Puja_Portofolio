export const MessageBubble = ({ from, text }) => {
  const isUser = from === 'user';
  return (
    <div className={`mb-2 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`rounded-lg px-3 py-2 text-sm ${isUser ? 'bg-blue-100' : 'bg-gray-200'}`}>
        {text}
      </div>
    </div>
  );
};
