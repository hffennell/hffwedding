'use client';
import { forwardRef } from 'react';
import Image from 'next/image';
import HeroImage from 'Pictures/000004400012.jpg'
import HeroImage2 from 'Pictures/whalewatchingvertical.jpeg';

const Hero = forwardRef<HTMLDivElement>((props, ref) => {;
  return (
    <>
      <section ref={ref} className="relative w-full h-[96svh] overflow-hidden" id="hero">
				<Image
          src={HeroImage}
          alt="Hannah and David whale watching"
					width={100}
					height={100}
					className="relative w-full h-[100svh] object-cover object-bottom lg:object-[center_80%] hidden xl:block"
					sizes="(max-width: 1024px) 150vh, 100vw"
					placeholder="blur"
          priority
        />
		<Image
          src={HeroImage2}
          alt="Hannah and David whale watching"
					width={100}
					height={100}
					className="relative w-full h-[100svh] object-cover object-bottom lg:object-[center_80%] xl:hidden"
					sizes="(max-width: 1024px) 150vh, 100vw"
					placeholder="blur"
          priority
        />
				<div className="section absolute top-0 w-full h-full flex flex-col">
					<div className="section w-full h-screen flex-shrink-0 flex flex-col items-center mb-1">
						<div className="text-center my-auto">
							<h1 className="text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide font-script py-10 px-8" id="rsvp">Hannah & David</h1>
						</div>
					</div>
        </div>
      </section>
    </>
  )
});

Hero.displayName = "Hero";

export default Hero;
