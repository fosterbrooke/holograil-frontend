import React from 'react';
import CollapsibleFAQComp from './CollapseFAQComp';

const FAQSlide: React.FC = () => {
  const qaList = [
    {
      question: "Do I need specific hardware to use the software? ",
      answer: "To get the most out of our software, we recommend using it with a DNP printer, lenticular sheets, perforated paper, and a roller to ensure flawless prints. These items can be conveniently purchased from our Accessories page.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "",
    },
    {
      question: "Can I cancel my subscription? ",
      answer: "",
    },
    {
      question: "Is training or onboarding provided?",
      answer: "",
    },
    {
      question: "How do I get support if I encounter issues?",
      answer: "",
    },
  ]

  return (
    <div className='bg-primary rounded-[24px] py-[84px] px-[96px] flex space-x-[48px]'>
      <div className='text-white w-2/5'>
        <div className='text-[48px] font-bold leading-[120%]'>Frequently Asked Questions</div>
        <br />
        <div className='text-[20px] leading-[150%]'>Your Questions, Answered! Everything you need to know about The Grail’s software and subscription plans.</div>
      </div>
      <div className='w-3/5'>
        {qaList.map((item, index) => (
          <CollapsibleFAQComp question={item.question} answer={item.answer} key={index} />
        ))}
      </div>
    </div>
  )
}

export default FAQSlide;