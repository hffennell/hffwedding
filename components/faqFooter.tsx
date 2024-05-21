'use client';
import { useState } from 'react';
import { FadeInOut } from './visual/fadeInOut';
import Accordion from './visual/accordion';

const faqs = [
  {
    title: "Can I RSVP online or do I have to mail in an RSVP card?",
    text: "You can either RSVP online here [insert link] or by mailing in the RSVP card sent with the invitation!",
  },
  {
    title: "What date should I RSVP by?",
    text: "Please RSVP [insert link] by [insert date].",
  },
  {
    title: "Is there parking available near your wedding venue?",
    text: "Yes, there is parking at the venue - it shouldn't be a problem if you decide to drive. We will also be having a shuttle to and from the Sunnyville Hotel at the beginning and end of the night.",
  },
  {
    title: "Will your wedding be indoors or outdoors?",
    text: "The wedding ceremony will be held outdoors (4-5pm) and cocktail hour + the reception will be held in an indoor/outdoor space. The weather should be perfect this time of year, but be sure to bring a jacket for the cooler night!",
  },
  {
    title: "Have you reserved blocks of rooms at one or more hotels?",
    text: "Yes! There is a block of rooms reserved at the Sunnyville hotel. You can use this link to reserve rooms under the block, or you can call the hotel and have them assist you for the Toschidoli wedding.",
  },
  {
    title: "Will there be a shuttle to and/or from the hotel(s)?",
    text: "Yes! We will have a shuttle running to and from the Sunnyville Hotel at the beginning and end of the night. Shuttles start at 3pm - 3:45pm every 15 min for the ceremony and start at 9:30pm - 12am every 15 minutes for the end of the night.",
  },
  {
    title: "What is the dress code for your wedding?",
    text: "Our dress code is formal, come decked out in your best dancing clothes! 'Formal Garden Attire' is the long version - think fancy and elevated but still fun! You can take a look at the bride's pinterest here if it helps :) Also since the ceremony is outdoors, we recommend considering your ability to walk in heels on pea gravel and grass!",
  },
  {
    title: "What is the weather like in the area?",
    text: "The weather during the month of September is usually beautiful! Depending on if summer stays around it may be in the 70s or 80s, but then cool off nicely at night (50s-60s). The average temp is around 65 and sunny. We don't expect rain, but we'll always be prepared!",
  },
  {
    title: "Will there be other events to attend on the wedding weekend?",
    text: "We will be having a welcome party on Friday evening for anyone who might be traveling from out of town or just wants to join us in celebrating more! It will be held at the Sunnyville Hotel, but stay tuned for more details!",
  },
  {
    title: "I have more questions about your wedding, who can I reach out to?",
    text: "The maid of honor has graciously voluteered to be the point person for all things Toschidolis! You can email her here: xxxx@gmail.com or if your question is rather urgent text her (she does not answer the phone 😆) here: xxx xxx xxxx!",
  },
];

export default function FaqFooter() {
  const [activeItem, setActiveItem] = useState<string>('');

  const openAccordion = (id: string) => {
    setActiveItem(prevState => prevState === id ? '' : id);
  };

  return (
    <>
      <section className="relative w-full flex flex-col items-center justify-between bg-[#ACB4B8]">
        
        <div className="faq-movement flex flex-col items-center w-11/12 xl:w-1/2 max-w-xl lg:max-w-4xl p-4 md:p-10 mt-56 md:-mt-6 xl:-mt-28 text-white bg-olive z-20" id="faqs">
					<h1 className="font-script text-lg sm:text-xl lg:text-2xl text-center tracking-wide mt-6 md:mt-10">faqs</h1>
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
              <div>david & hannah</div>
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
