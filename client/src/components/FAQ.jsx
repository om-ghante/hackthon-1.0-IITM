"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQ = () => {
  const faqs = [
    {
      question: "What is a hackathon?",
      answer:
        "A hackathon is an event where programmers, designers, and others collaborate intensively on software projects over a short period, typically 24-48 hours.",
    },
    {
      question: "Who can participate?",
      answer: "Anyone with an interest in technology and innovation can participate, regardless of experience level.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, and any other devices you might need. We'll provide food, drinks, and a place to work.",
    },
  ]

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">FAQ</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}

export default FAQ

