'use client';
import { forwardRef } from 'react';
import Image from 'next/image';
import BgImage from 'public/images/hannah-davd-nigel-jpg-34.jpg';

const Filler = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      <section ref={ref} className="section relative w-full min-h-[60vh]" id="filler">
        <div className="h-full overflow-hidden flex items-center justify-center">
					<Image
						src={BgImage}
						
						alt="Hannah, David, and Nigel"
						width={100}
						height={100}
						className="relative w-full h-full object-cover object-bottom"
						sizes="(max-width: 1024px) 100vw, 100vw"
            placeholder="blur"
					/>
				</div>
				
      </section>
    </>
  )
});

Filler.displayName = "Filler";

export default Filler;
