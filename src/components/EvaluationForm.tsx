import React from 'react';

interface EvaluationFormProps {
  onBack: () => void;
}

export const EvaluationForm: React.FC<EvaluationFormProps> = ({ onBack }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulaire d'évaluation soumis avec succès!");
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-orange-500 border-b border-gray-200 pb-2 mb-4">
        Évaluation de l'AI
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="businessName" className="block font-medium text-gray-700 mb-1">
            Nom de votre entreprise
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        
        {/* Add more form fields following the same pattern */}
        
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Retour
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
};