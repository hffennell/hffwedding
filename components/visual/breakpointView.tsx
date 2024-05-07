'use client';
import useWindowSize from "../hooks/useBreakpoints";

export const ShowBreakpoints = () => {
  const { size, breakpoint } = useWindowSize();
  return (
    <div className="fixed top-0 right-0 z-50 p-3 bg-emerald-300 text-xs">
      <div className="pb-1">Window size: <span className="font-semibold">{size[0]} x {size[1]}</span></div>
      <div className="">Current breakpoint selector: <span className="font-semibold">{breakpoint}:</span></div>
    </div>
  );
}

export default ShowBreakpoints;