import React from 'react';
import { Bot } from 'lucide-react';

export const ChatbotHeader: React.FC = () => {
  return (
    <div className="text-center">
      <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
        <Bot className="w-12 h-12 text-orange-500" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900">
        Bonjour, je suis Charlie, votre assistant amical!
      </h1>
    </div>
  );
};