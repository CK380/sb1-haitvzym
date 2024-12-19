import React, { useState } from 'react';
import { ChatbotHeader } from './components/ChatbotHeader';
import { EvaluationForm } from './components/EvaluationForm';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';

type Section = 'welcome' | 'evaluation' | 'faq' | 'contact';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('welcome');

  const handleBack = () => setCurrentSection('welcome');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 border-2 border-orange-500">
        <ChatbotHeader />
        
        {currentSection === 'welcome' && (
          <div className="mt-8 space-y-4">
            <p className="text-center text-gray-600 mb-6">
              Veuillez choisir une option ci-dessous :
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentSection('evaluation')}
                className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                Évaluation AI
              </button>
              <button
                onClick={() => setCurrentSection('faq')}
                className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => setCurrentSection('contact')}
                className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
        
        {currentSection === 'evaluation' && <EvaluationForm onBack={handleBack} />}
        {currentSection === 'faq' && <FAQ onBack={handleBack} />}
        {currentSection === 'contact' && <ContactForm onBack={handleBack} />}
      </div>
    </div>
  );
}

export default App;