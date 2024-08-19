'use client';
import { useState } from 'react';
import { FadeInOut } from './visual/fadeInOut';
import Accordion from './visual/accordion';

const faqs = [
  {
    title: "When will formal invitations go out?",
    text: "Formal Invitations will be mailed in January, and the RSVP section of the website will be available then as well!",
  },
  {
    title: "Will there be other events to attend on the wedding weekend?",
    text: "Yes! We will be having a welcome dinner Friday night at the Surf Club on Wrightsville Beach",
  },
  {
    title: "What is the weather like in Wilmington?",
    text: "The weather in late May is usually beautiful! Day time temperatures are typically in the low 80s, and water temperatures are in the low 70s. Perfect beach weather!",
  },
  {
    title: "Are there any places I shouldn't go while I'm here?",
    text: "Yes! Do not go to the Oceanic!",
  },
  {
    title: "How should I get around Wilmington?",
    text: "Both Wilmington and Wrightsville Beach are pretty small, so it's ideal for walking or even biking! There are also a lot of Ubers and Lyfts in the area. If you like to drive, you definitely can, but it's also easy to get by without a car. ",
  },
 
];

export default function FaqFooter() {
  const [activeItem, setActiveItem] = useState<string>('');

  const openAccordion = (id: string) => {
    setActiveItem(prevState => prevState === id ? '' : id);
  };

  return (
    <>
      <section className="relative w-full flex flex-col items-center justify-between bg-[#CAEAD8]">
        
        <div className="faq-movement flex flex-col items-center w-11/12 xl:w-1/2 max-w-xl lg:max-w-4xl p-4 md:p-10 mt-56 md:-mt-6 xl:-mt-28 text-black bg-oleander z-20" id="faqs">
					<h1 className="font-script text-lg sm:text-xl lg:text-2xl text-center tracking-wide mt-6 md:mt-10">FAQ</h1>
          <div className="w-full my-6 md:mb-10 p-2 lg:p-8 lg:py-12 text-left">
            {faqs.map((faq, index) => (
              <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={`faqs-${index}` === activeItem} openAccordion={openAccordion} >
                {faq.text}
              </Accordion>
            ))}
          </div>
				</div>

        <div className="w-full px-4 md:px-10 lg:px-20">
          <div className="text-black font-script -mt-24 md:-mt-12 xl:-mt-20 w-full">
            <FadeInOut className="footer flex justify-between lg:text-xl pb-2">
              <div>hannah & david</div>
              <div>
                may 31, 2025
              </div>
            </FadeInOut>
          </div>
        </div>

      </section>
    </>
  )
}
