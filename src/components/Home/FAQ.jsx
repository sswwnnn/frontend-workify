import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question:
      "How can I manage a multi-national workforce in HR software while providing a localized experience for my people?",
    answer:
      "You can use HR software that offers localization settings, multi-language support, and compliance with different country regulations. This allows you to create tailored experiences for employees across different regions.",
  },
  {
    question: "Can I manage local and global payroll with Workify?",
    answer:
      "Yes, Workify provides payroll management solutions for both local and international teams, including features for calculating salaries, taxes, benefits, and compliance support across various countries.",
  },
  {
    question: "Does Workify support remote onboarding?",
    answer:
      "Yes! Workify offers remote onboarding features including digital document signing, task automation, and self-service options for employees. This enables smooth onboarding from any location.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="py-12 w-11/12 mx-auto">
      <h2 className="text-center text-5xl font-extrabold tracking-wide mb-8">
        <span style={{ color: '#002347' }}>Popular</span>{' '}
        <span style={{ color: '#FF5003' }}>FAQ</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Multiple Question Marks */}
        <div className="flex-1 relative">
          <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
            {/* scattered around */}
            <div className="absolute top-2 right-6 text-9xl font-bold opacity-60" style={{ color: '#002347' }}>
              ?
            </div>
            
            <div className="absolute bottom-6 left-4 text-7xl font-bold opacity-70" style={{ color: '#FF5003' }}>
              ?
            </div>
            
            <div className="absolute top-16 left-8 text-6xl font-bold opacity-50" style={{ color: '#002347' }}>
              ?
            </div>
            
            <div className="absolute bottom-20 right-12 text-5xl font-bold opacity-60" style={{ color: '#FF5003' }}>
              ?
            </div>
            
            <div className="absolute top-32 right-20 text-4xl font-bold opacity-40" style={{ color: '#002347' }}>
              ?
            </div>
            
            <div className="absolute bottom-32 left-16 text-4xl font-bold opacity-50" style={{ color: '#FF5003' }}>
              ?
            </div>
            
            {/* Round image container */}
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg relative z-10">
              <img
                src="/src/assets/thinking.png"
                alt="Woman thinking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex-1 space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md cursor-pointer transition-all duration-300 border-l-4 border-transparent hover:scale-105"
              style={{ 
                borderLeftColor: openIndex === index ? '#FF5003' : 'transparent',
                backgroundColor: 'white',
                color: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#002347';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'inherit';
              }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-7 h-7" style={{ color: '#002347' }} />
                ) : (
                  <ChevronDown className="w-7 h-7" style={{ color: '#002347' }} />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-6 text-lg text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}