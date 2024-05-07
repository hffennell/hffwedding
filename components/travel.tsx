'use client';
import { forwardRef } from 'react';
import Image from 'next/image';
import Photo from 'public/images/ag-ring.jpg';

const Travel = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      <section ref={ref} className="section relative w-full pb-16 sm:pb-32 lg:pb-0 lg:pl-20 flex flex-col lg:flex-row bg-blue" id="travel">
				<div className="hidden lg:block absolute left-0 z-10 w-full border-t border-neutral-700"></div>
				
        <div className="flex flex-col items-center justify-center lg:w-2/3 xl:w-1/2 mx-8 sm:mx-6 xl:mx-24 xl:ml-16 text-sm sm:text-base text-neutral-950">
					<div className="flex flex-col max-w-xl py-6">
						<p className="xl:-mt-4 mb-4 text-lg xl:text-xl">We know many of you will be traveling to come celebrate, here&apos;s some lodging recs and travel tips!</p>
						<p className="my-4">
							<span className="font-script">Alexa&apos;s Rec</span>
							<br />
							<span className="underline underline-offset-2">The Sunnyside Inn</span> | $$$ | 15 minutes from venue 
						</p>
						<p className="my-4">
							<span className="font-script">Grayson&apos;s Rec</span>
							<br />
							<span className="underline underline-offset-2">Best Western Sunnyville</span> | $ | 15 minutes from venue 
						</p>
						<p className="my-4">
						<span className="underline underline-offset-2">Yellowhouse Bnb</span> | $$ | 15 minutes from venue  <br />
						<span className="underline underline-offset-2">Marriott Sunnyville</span> | $ | 20 minutes from venue  <br />
						<span className="underline underline-offset-2">The W Sunnyville</span> | $$$ | 15 minutes from venue
						</p>
						<p className="mt-6 xl:mt-8 mb-4">
						<span className="font-bubbleIcon text-3xl pr-2 block text-center">iw</span>
							If you&apos;re traveling from the west coast, we suggest flying into Newark airport! You&apos;ll be able to get a taxi or uber for much less (& much less traffic) than JFK.
						</p>
						<p className="mt-4">
							Newark Airport | 45 min from venue <br />
							JFK | 55 min from venue (+-40min traffic usually) <br />
							Laguardia | 65 min from venue
						</p>
					</div>
				</div>

				<div className="relative hidden lg:block lg:w-1/2">
          <div className="w-full lg:h-full">
						<Image src={Photo} alt="Alexa and Gray" width={0} height={0} className="w-full object-cover h-full w-full" placeholder="blur" />
						<svg className="absolute top-[45%] left-[42%] w-[14%]" id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.49 106.73">
								<g id="Layer_1-2">
									<path className="heart-path" d="m41.18,42.94h0c-8.81-5.57-19.85-11.14-29.96-5.18-9.59,5.64-8.57,17.33-3.06,25.5,6.37,9.46,16.89,16.74,26.4,22.77,10.29,6.53,21.43,11.62,33.02,15.38" style={{fill:"none", stroke:"#fff", strokeLinecap:"round", strokeMiterlimit:6, strokeWidth:"4px"}}/>
									<path className="heart-path" d="m73.21,102.73c5.2-16.41,9.11-33.41,10.62-50.59.93-10.6,1.41-22.78-2.27-32.95-3.86-10.67-11.78-17.63-24.18-14.39-15.57,4.07-17.14,24.32-17.14,34.12" style={{fill:"none", stroke:"#fff", strokeLinecap:"round", strokeMiterlimit:6, strokeWidth:"4px"}}/>
								</g>
						</svg>
					</div>
        </div>
      </section>
    </>
  )
});

Travel.displayName = "Travel";

export default Travel;
