export const isElementVisible = (element: any) => {
  const rect = element.getBoundingClientRect();
  const visible = rect.bottom >= 0 && rect.right >= 0 
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight) 
    && rect.left <= (window.innerWidth || document.documentElement.clientWidth);
  const top = rect.top;
  
  return { visible, top };
};