export const scrollTo = (e: any, ref: any) => {
  e.preventDefault();
  ref.current && ref.current.scrollIntoView({
    behavior: 'smooth'
  });
};

export const scrollToDiv = (e: any, id: string) => {
  e.preventDefault();
  const div = document.querySelector(id);
  div && div.scrollIntoView({
    behavior: 'smooth'
  });
};