'use client';
import { forwardRef, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import RsvpImage from 'Pictures/Daviddancingnoglassescopy.jpg';
import useMediaQuery from './hooks/useMediaQuery';
import Script from 'next/script';

  const string = "RSVP here in January!";

const Rsvp = forwardRef<HTMLDivElement>((props, ref) => {
  const [isInitialState, setIsInitialState] = useState(true);
  const intersectRef = useRef<HTMLDivElement>(null);
  const isBreakpoint = useMediaQuery(475);
  const entry = useIntersectionObserver(intersectRef, { threshold: .95 });
  const exit = useIntersectionObserver(intersectRef, { threshold: .7 }); // percent to add to 'top' position l34 + l41
  const isVisible = !entry ? true : !!entry?.isIntersecting;
  const isScrolled = !exit ? true : !!exit?.isIntersecting;

  const [isOpen, setIsOpen] = useState(false);

  const openRSVP = (e: any) => {
    e.preventDefault();
   setIsOpen(true);
   document.body.classList.add('overflow-hidden');
  };

  const closeRSVP = (e: any) => {
    e.preventDefault();
   setIsOpen(false);
   document.body.classList.remove('overflow-hidden');
  };

  useEffect(() => {
    !isVisible && setIsInitialState(false);
  }, [isVisible]);

  return (
    <>
      {/* <Script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function (w, d, s, o, f, js, fjs) {
            w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
          }(window, document, 'script', 'oursvp', 'https://www.oursvp.app/widget/widget.js'));
          oursvp('init', { debug: true, element: document.getElementById('rsvp-widget'), eventId: 'X29dycYvcnI5PIqzCwVC' });`
        }}
      /> */}
      <section ref={intersectRef} className="absolute w-full h-[96svh] flex items-center bg-transparent" id="enter-rsvp">
        <div ref={ref}  className={`slide w-1/2 bg-oleander h-[96svh] overflow-hidden flex items-center ${isInitialState && 'translate-y-[100%]'} ${!isScrolled ? '!absolute top-[30%]' : ''} ${!isVisible && !isInitialState ? 'slide-up' : 'slide-back-down' }`}>
          <Image
            src={RsvpImage}
            alt="alexa and gray holding hands"
            className="relative object-cover object-[center_70%] w-full h-full"
          />
        </div>
        <div className={`slide w-1/2 bg-oleander h-[96svh] ${isInitialState && '-translate-y-[100%]'} ${!isScrolled ? '!absolute top-[30%]' : ''} ${!isVisible && !isInitialState ? 'slide-down' : 'slide-back-up' }`}>
          <div className="flex flex-col h-full items-start justify-center text-white max-w-xl px-4 md:px-12 lg:px-24">
            <p className="text-lg md:text-2xl lg:text-3xl mt-12">Our wedding will take place on May 31st, 2025 in Wilmington, North Carolina.</p>
            {/* <button 
              className="relative border border-white px-4 md:px-7 py-2.5 font-script text-lg md:text-xl mt-6 md:mt-12 underline-animation"
              onClick={(e) => openRSVP(e)}
              >
                rsvp here</button> */}


              <div className="flower mt-20 z-10">
                        {[...string].map((s, i) => {
                          return (
                            <span style={{transform: `rotate(${9 * i}deg)`}} className="circle-span" key={i}>{s}</span>
                          )
                        })}
                      </div>
          </div>
        </div>
      </section>
      {/* <div className={`fixed top-0 flex items-center justify-center w-full h-screen ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-gray-400 opacity-40 w-full h-full fixed" onClick={(e) => closeRSVP(e)}></div>
        <div id="rsvp-widget" className="z-20"></div>
      </div> */}

      
    </>
  )
});

Rsvp.displayName = "Rsvp";

export default Rsvp;

