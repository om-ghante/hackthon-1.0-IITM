//"use client"
//
//import { useState } from "react"
//import { motion, AnimatePresence } from "framer-motion"
//
//const FAQItem = ({ question, answer }) => {
//  const [isOpen, setIsOpen] = useState(false)
//
//  return (
//    <div className="mb-4">
//      <button
//        className="flex justify-between items-center w-full text-left font-semibold py-2"
//        onClick={() => setIsOpen(!isOpen)}
//      >
//        <span>{question}</span>
//        <span>{isOpen ? "-" : "+"}</span>
//      </button>
//      <AnimatePresence>
//        {isOpen && (
//          <motion.div
//            initial={{ opacity: 0, height: 0 }}
//            animate={{ opacity: 1, height: "auto" }}
//            exit={{ opacity: 0, height: 0 }}
//            transition={{ duration: 0.3 }}
//            className="mt-2"
//          >
//            <p>{answer}</p>
//          </motion.div>
//        )}
//      </AnimatePresence>
//    </div>
//  )
//}
//
//const FAQ = () => {
//  const faqs = [
//    {
//      question: "What is a hackathon?",
//      answer:
//        "A hackathon is an event where programmers, designers, and others collaborate intensively on software projects over a short period, typically 24-48 hours.",
//    },
//    {
//      question: "Who can participate?",
//      answer: "Anyone with an interest in technology and innovation can participate, regardless of experience level.",
//    },
//    {
//      question: "What should I bring?",
//      answer:
//        "Bring your laptop, charger, and any other devices you might need. We'll provide food, drinks, and a place to work.",
//    },
//  ]
//
//  return (
//    <section className="py-16 px-4">
//      <h2 className="text-4xl font-bold mb-8 text-center">FAQ</h2>
//      <div className="max-w-3xl mx-auto">
//        {faqs.map((faq, index) => (
//          <FAQItem key={index} question={faq.question} answer={faq.answer} />
//        ))}
//      </div>
//    </section>
//  )
//}
//
//export default FAQ

// components/FaqSection.jsx
import { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-purple-800 border-opacity-30 py-6">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl md:text-2xl font-medium text-white">{question}</h3>
        <span className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </span>
      </button>
      
      <div className={`mt-2 transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-white text-opacity-80">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const faqs = [
    {
      question: "What is HackEclipse?",
      answer: "HackEclipse is a mulƟ-stage hackathon organized by IIT Madras BS students, focusing on solving real-world challenges through innovaƟon."
    },
    {
      question: "Who can participate?",
      answer: "Students from diverse backgrounds who are passionate about technology, problem-solving, and innovation."
    },
    {
      question: "How do I register?",
      answer: "RegistraƟon starts on 20th March 2025. Follow the link provided on the official event website to sign up."
    },
    {
      question: "What are the key dates?",
      answer: "RegistraƟon Begins: 20th March 2025 PPT, Submission Deadline: 20th April 2025, Prototype Submission Deadline: 9th May 2025, Final Judgement Round: 10th May 2025"
    },
    {
      question: "What are the event tracks?",
      answer: "ParƟcipants can compete in: Environmental Sustainability Healthcare & Well-being EducaƟon for All Open Innovation FinTech"
    },
    {
      question: "Is there any registraƟon fee?",
      answer: "No, HackEclipse is free to parƟcipate in."
    },
    {
      question: "Are there any mentorship opportuniƟes? ",
      answer: "Yes, student mentor sessions will be held from 24th–30th April 2025 to guide parƟcipants."
    },
    {
      question: "What are the prizes?",
      answer: "Cash Prizes for winners and runners-up (INR 40,000 for winners). Goodies & Swags worth INR 30,000. Internship opportuniƟes for top performers."
    },
    {
      question: "Will parƟcipants receive cerƟficates?",
      answer: "Yes, all parƟcipants will receive cerƟficates, and winners will get special recogniƟon."
    }
  ];

  return (
    <section id="faq" className="relative py-20 px-6 lg:px-20">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wider">FREQUENTLY ASKED</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>
        
        <div className="bg-black bg-opacity-40 backdrop-blur-lg rounded-2xl p-6 md:p-10">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
