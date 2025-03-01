import { forwardRef } from "react";
import { FadeInOut } from "./visual/fadeInOut";

// const Info = forwardRef<HTMLDivElement>((props, ref) => {
//   const string = "RSVP here in February!";

//   return (
//     <>
//       <section ref={ref} className="section relative w-full min-h-[95vh] xl:min-h-screen m-8 sm:m-4 md:m-16 md:mb-8 flex items-center justify-center !mt-[25vh]" id="info">
//         <div className="font-sans text-sm sm:text-base lg:text-lg leading-loose text-neutral-950 max-w-xl lg:max-w-3xl">
//           <FadeInOut>
//             <h2 className="font-script text-lg sm:text-xl md:text-2xl mb-6 xl:my-6">the big day details</h2>
//           </FadeInOut>
//           <FadeInOut>
//             <p className="">join us May 31, 2025 to celebrate our marriage.</p>
//           </FadeInOut>
//           <FadeInOut>
//             <h2 className="font-script text-lg sm:text-xl md:text-2xl mb-6 xl:my-6">the night before</h2>
//           </FadeInOut>
//           <div className="flower absolute top-[75%] md:top-[68%] xl:top-[70vh] right-[80%] xl:right-[20vw] z-10">
//           {[...string].map((s, i) => {
//             return (
//               <span style={{transform: `rotate(${9 * i}deg)`}} className="circle-span" key={i}>{s}</span>
//             )
//           })}
//         </div>
//         </div>
//       </section>
//     </>
//   )
// });

const Info = forwardRef<HTMLDivElement>((props, ref) => {
//  const string = "Stay tuned for more information!";

  return (
   <>
     <section ref={ref} className="section relative w-full min-h-[95vh] xl:min-h-screen m-8 sm:m-4 md:m-16 md:mb-8 flex items-center justify-center !mt-[25vh]" id="info">
       <div className="font-sans text-sm sm:text-base lg:text-lg leading-loose text-neutral-950 max-w-xl lg:max-w-3xl">
         <FadeInOut>
           <h2 className="font-script text-lg sm:text-xl md:text-2xl mb-3 xl:my-6">the big day details</h2>
         </FadeInOut>
         <FadeInOut>
           <p className="">We will gather May 31, 2025 to celebrate the marriage of Hannah and David with a beautiful ceremony, followed by a sit down dinner and all-you-can-stand dancing!</p>
           {/* <p className="">the ceremony will take place at 5pm with reception to follow.</p> */}
         </FadeInOut>
         <FadeInOut>
           <p className="my-3 leading-loose">
             <span className="font-medium underline underline-offset-2">time:</span> ceremony will start at 5:30 with reception to follow!<br />
             <span className="font-medium underline underline-offset-2">venue:</span> Brooklyn Arts Center (516 N 4th St, Wilmington NC, 28401)<br />
             <span className="font-medium underline underline-offset-2">dress code:</span> festive cocktail<br />
           </p>
         </FadeInOut>
         <FadeInOut>
           <h2 className="font-script text-lg sm:text-xl md:text-2xl mb-3 xl:my-6">the night before</h2>
         </FadeInOut>
         <FadeInOut>
           <p className="">Got plans Friday? We will be welcoming our guests Friday evening on Wrightsville Beach at the swanky Surf Club! Be sure to bring your bib and leather soles for dinner and dancing!</p>
           {/* <p className="">the ceremony will take place at 5pm with reception to follow.</p> */}
         </FadeInOut>
         <FadeInOut>
           <p className="my-3 leading-loose">
             <span className="font-medium underline underline-offset-2">time:</span> 6pm<br />
             <span className="font-medium underline underline-offset-2">venue:</span> Surf Club (1 Mallard St, Wrightsville Beach NC, 28480)<br />
             <span className="font-medium underline underline-offset-2">dress code:</span> beach cocktail<br />
           </p>
         </FadeInOut>
         {/* <div className="flower absolute top-[75%] md:top-[68%] xl:top-[70vh] right-[9%] xl:right-[20vw] z-10">
         {[...string].map((s, i) => {
           return (
             <span style={{transform: `rotate(${9 * i}deg)`}} className="circle-span" key={i}>{s}</span>
           )
         })}
       </div> */}
       </div>
     </section>
   </>
 )
});


Info.displayName = "Info";

export default Info;
