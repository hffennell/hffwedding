'use client';

type AccordionpProps = {
  children: React.ReactNode
  title: string
  id: string,
  active?: boolean,
  openAccordion: Function
}

export default function Accordion({
  children,
  title,
  id,
  active = false,
  openAccordion
}: AccordionpProps) {

  return (
    <div className="py-3">
      <h2>
        <button
          className="flex items-center justify-between w-full text-left lg:font-medium py-1 lg:py-2"
          onClick={() => openAccordion(id)}
          aria-expanded={active}
          aria-controls={`accordion-text-${id}`}
        >
          <span className="text-sm md:text-base">{title}</span>
          <svg className="fill-white shrink-0 ml-8" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <rect y="5.2" width="12" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${active && '!rotate-180'}`} />
            <rect y="5.2" width="12" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${active && '!rotate-180'}`} />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm md:text-base overflow-hidden transition-all duration-300 ease-in-out ${active ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="font-light py-3">
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}