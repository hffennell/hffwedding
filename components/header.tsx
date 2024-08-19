'use client';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { scrollToDiv } from './functional/scrollTo';
import { isElementVisible } from './functional/isVisible';
import { getOpenWeather } from '@/lib/getOpenWeather';



// ** update ** list when adding a new section //
const navList = [
  {
    name: "home",
    href: "#hero"
  },
  {
    name: "rsvp",
    href: "#rsvp"
  },
  {
    name: "the big day",
    href: "#info"
  },
  {
    name: "local recs",
    href: "#travel"
  },
  {
    name: "faqs",
    href: "#filler"
  },
]

export default function Header({ activeSection, textClasses }: { activeSection: string | null, textClasses: string } ) {
  const [section, setSection] = useState<string>('hero');
  const pathname = usePathname();
  const [temp, setTemp] = useState<number>();
  const [condition, setCondition] = useState<string>();
  const [icon, setIcon] = useState<string>();

  const getWeatherData = async () => {
    const weather = await getOpenWeather();
    const t = Math.ceil(weather.main.temp);
    const c = weather.weather[0].main;
    const i = weather.weather[0].icon;
    setTemp(t);
    setCondition(c);
    setIcon(i);

  };

  const visualChangesOnScroll = () => {
    const faq = document.getElementById('faqs');

    // on scroll set scroll variable 
    const scroll = window.scrollY;
    const root = document.querySelector(':root');
    root && (root as HTMLElement).style.setProperty('--scroll', `${scroll}px`);
    root && (root as HTMLElement).style.setProperty('--scroll-num', `${scroll}deg`);

    // move faq up
    if (faq) {
      const { visible, top } = isElementVisible(faq);
      const offset = faq.offsetHeight;
      visible && root && (root as HTMLElement).style.setProperty('--faq', `${top - offset}px`);
    }
  };

  useEffect(() => {
    visualChangesOnScroll();

    const watchScroll = () => {
      window.addEventListener("scroll", visualChangesOnScroll);
    };
    watchScroll();

    return () => {
      window.removeEventListener("scroll", visualChangesOnScroll);
    };
  }, [pathname]);

  useEffect(() => {
   activeSection && setSection(activeSection);
  }, [activeSection]);

  useEffect(() => {
    getWeatherData();
  },[]);


  return (
    <>
      <section className="fixed z-50 bottom-0 right-0 left-0 w-full flex justify-center p-6 md:py-12 md:px-20">
        <div className={`menu font-sans text-left text-sm lg:text-base flex flex-row ${textClasses}`} id="nav">
          {navList.map((el, idx) => {
            return (
              <button onClick={(e) => scrollToDiv(e, el.href)} className="relative px-3.5 py-2 text-left" key={idx}>
                {`#${section}` === el.href && (
                  <svg id="star" className="absolute -left-px lg:-left-px top-3 lg:top-4" width="11.8978015px" height="10.3558065px" viewBox="0 0 11.8978015 10.3558065" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(-1291.4444, -49.6206)" fillRule="nonzero" className={`${textClasses}`}>
                      <g id="*" transform="translate(1291.4444, 49.6206)">
                        <path d="M6.81359516,2.7093998 C6.83959516,2.4493998 6.86559516,2.1633998 6.94359516,1.7213998 C6.99559516,1.2273998 7.02159516,0.759399802 6.94359516,0.291399802 C6.91759516,0.00539980236 6.55359516,-0.0986001976 6.31959516,0.109399802 C6.05959516,0.343399802 5.90359516,0.577399802 5.69559516,0.889399802 C4.88959516,2.1373998 4.05759516,2.5013998 2.80959516,2.1373998 C2.52359516,2.0593998 2.15959516,2.0593998 1.84759516,2.0853998 C1.53559516,2.0853998 1.17159516,2.2673998 1.04159516,2.6053998 C0.989595155,2.7613998 1.01559516,2.9433998 1.09359516,3.0473998 C1.50959516,3.4893998 2.21159516,3.7493998 2.78359516,3.8273998 C3.30359516,3.9053998 4.13559516,4.0873998 4.08359516,4.6593998 C4.03159516,5.1533998 3.19959516,5.6213998 2.65359516,5.9593998 C1.82159516,6.4533998 0.989595155,6.9993998 0.209595155,7.5713998 C-0.128404845,7.8313998 -0.0504048446,8.4813998 0.391595155,8.4813998 C0.781595155,8.5073998 1.22359516,8.4813998 1.61359516,8.3253998 C2.08159516,8.1433998 2.49759516,7.8833998 2.96559516,7.5973998 C4.08359516,6.8953998 4.55159516,7.0513998 4.55159516,8.3513998 C4.55159516,8.7413998 4.52559516,9.1833998 4.62959516,9.5473998 C4.78559516,10.0413998 5.12359516,10.3273998 5.69559516,10.3533998 C6.24159516,10.3793998 6.78759516,10.1973998 7.09959516,9.6773998 C7.22959516,9.4693998 7.25559516,9.2353998 6.99559516,9.0273998 C6.81359516,8.8973998 6.63159516,8.8193998 6.47559516,8.6893998 C6.00759516,8.2733998 6.00759516,6.9993998 6.57959516,6.4273998 C7.09959516,5.9593998 7.48959516,6.5053998 7.87959516,6.7133998 C8.26959516,6.9213998 8.68559516,7.1553998 9.10159516,7.3893998 C9.28359516,7.5193998 9.49159516,7.6493998 9.69959516,7.7533998 C10.1935952,8.0393998 10.7135952,7.9353998 10.9995952,7.4933998 C11.2855952,7.0773998 11.1035952,6.6353998 10.5835952,6.3233998 C10.1675952,6.0633998 9.75159516,5.8553998 9.38759516,5.5953998 C9.10159516,5.4393998 8.86759516,5.2313998 8.68559516,4.9453998 C8.58159516,4.7893998 8.68559516,4.3993998 8.84159516,4.2953998 C9.46559516,3.8273998 10.1155952,3.3593998 10.7655952,2.9173998 C11.1815952,2.6573998 11.4935952,2.3973998 11.8055952,2.0853998 C11.9095952,1.9293998 11.9355952,1.5913998 11.8315952,1.4093998 C11.5975952,0.941399802 10.9735952,1.1233998 10.5575952,1.3573998 C9.80359516,1.7733998 9.02359516,2.2413998 8.24359516,2.6833998 C7.95759516,2.8653998 7.64559516,3.0213998 7.30759516,3.0733998 C6.99559516,3.1253998 6.81359516,2.8913998 6.81359516,2.7093998 Z" id="Path"></path>
                      </g>
                    </g>
                  </svg>
                )}
                <p className="hover:underline-offset-2 underline underline-offset-1">
                  {el.name}
                </p>
              </button>
            )
          })}
        </div>
        <div className={`fixed left-0.5 sm:left-2 md:left-6 xl:left-8 w-5 whitespace-nowrap font-sans text-sm lg:text-base -rotate-90 top-[60%] ${textClasses}`}>
          <span className="px-1.5 py-1 mx-1.5">
            <span className="font-bubbleIcon text-2xl sm:text-3xl lg:text-4xl pr-1.5 inline-block translate-y-1">m</span>
            Wilmington, NC
          </span>
          <span className="px-3 py-1">
            <img className="inline" src={`images/icons8-${icon}.svg`}/>
            {temp}&deg;F & {condition}
          </span>
        </div>

        <div  className={`border fixed left-[10%] -top-px ${textClasses}`}>
           <a target="_blank" href="https://withjoy.com/hannah-and-david-may-25/registry" className="px-3.5 md:px-7 py-2.5 md:py-3.5 font-normal font-script text-center underline-animation lg:text-lg">
            our registry
            </a>
        </div>
      </section>
    </>
  )
}
