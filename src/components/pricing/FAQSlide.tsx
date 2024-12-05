import React from 'react';
import CollapsibleFAQComp from './CollapseFAQComp';

const FAQSlide: React.FC = () => {
  const qaList = [
    {
      question: 'Do I need specific hardware to use the software? ',
      answer:
        'To get the most out of our software, we recommend using it with a DNP printer, lenticular sheets, perforated paper, and a roller to ensure flawless prints. These items can be conveniently purchased from our Accessories page.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: '',
    },
    {
      question: 'Can I cancel my subscription? ',
      answer: '',
    },
    {
      question: 'Is training or onboarding provided?',
      answer: '',
    },
    {
      question: 'How do I get support if I encounter issues?',
      answer: '',
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="lg:w-full sm:w-[80%] w-[100%] bg-primary 2xl:rounded-[24px] sm:rounded-[16px] rounded-0 2xl:py-[84px] lg:py-[60px] py-[41px] 2xl:px-[96px] lg:px-[50px] px-[26px] flex md:mb-[194px] mb-[144px] md:mt-[194px] mt-[107px] lg:flex-row lg:space-x-[48px] lg:space-x-0 flex-col">
        <div className="text-white lg:w-2/5 w-full">
          <div className="2xl:text-[48px] lg:text-[30px] text-[16px] md:font-bold font-semibold leading-[120%]">
            Frequently Asked Questions
          </div>
          <br />
          <div className="2xl:text-[20px] lg:text-[14px] text-[10px] leading-[150%]">
            Your Questions, Answered! Everything you need to know about The
            Grail’s software and subscription plans.
          </div>
        </div>
        <div className="lg:w-3/5 w-full mt-[30px] lg:mt-0">
          {qaList.map((item, index) => (
            <CollapsibleFAQComp
              question={item.question}
              answer={item.answer}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSlide;
