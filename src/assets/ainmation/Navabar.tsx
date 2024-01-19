export const iconVariants = {
  initial: {
    x: 1000,
  },
  animate: {
    x: 0,
    transition: {
      delay: 1.5,
      duration: 0.4,
      type: "spring",
      stiffness: 200,
    },
  },
};

export const contactVariants = {
  initial: {
    x: -1000,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.4,
    },
  },
};
