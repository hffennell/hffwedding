// simple switch statement that returns which section is active based on isIntersecting key
export const returnActiveSection = (key: any) => {
  switch (true) {
    case key.rsvp:
      return 'rsvp';
    case key.hero:
      return 'hero';
    case key.info:
      return 'info';
    case key.travel:
      return 'travel';
    case key.filler:
      return 'filler';
    default:
      return null;
  }
};

// simple switch statement that returns classnames based on active section
export const returnActiveSectionClasses = (key: any) => {
  switch (true) {
    case key.rsvp:
      return 'text-white fill-white border-white';
    case key.hero:
      return 'text-white fill-white border-white';
    case key.info:
      return 'text-black fill-black border-black';
    case key.travel:
      return 'text-black fill-black  border-black';
    case key.filler:
      return 'text-white fill-white border-white';
    default:
      return 'text-black fill-black border-black';
  }
};