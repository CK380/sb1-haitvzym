import React, { useState } from 'react';

interface FAQProps {
  onBack: () => void;
}

const faqData = [
  {
    value: 'q1',
    question: "Qu'est-ce que l'automatisation par l'IA ?",
    answer: "L'automatisation par l'IA désigne l'utilisation de technologies pour exécuter des tâches humaines."
  },
  {
    value: 'q2',
    question: "Comment l'IA peut-elle bénéficier à mon entreprise ?",
    answer: "L'IA peut augmenter l'efficacité opérationnelle et réduire les coûts."
  },
  // Add more FAQ items
];

export const FAQ: React.FC<FAQProps> = ({ onBack }) => {
  const [selectedQuestion, setSelectedQuestion] = useState('');

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-orange-500 border-b border-gray-200 pb-2 mb-4">
        FAQ
      </h2>
      <div className="space-y-4">
        <select
          value={selectedQuestion}
          onChange={(e) => setSelectedQuestion(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="">Sélectionnez une question</option>
          {faqData.map((item) => (
            <option key={item.value} value={item.value}>
              {item.question}
            </option>
          ))}
        </select>
        
        {selectedQuestion && (
          <p className="mt-4 p-4 bg-gray-50 rounded-md">
            {faqData.find(item => item.value === selectedQuestion)?.answer}
          </p>
        )}
        
        <button
          onClick={onBack}
          className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
        >
          Retour
        </button>
      </div>
    </div>
  );
};