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

export const SidebarVariants = {
  open: {
    clipPath: "circle(120rem at 12rem 12rem)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(4rem at 35rem 5rem)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const SidebarLinksVariants = {
  open: {
    transition: {
      staggeredChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggeredChildren: 0.05,
      staggeredDirection: -1,
    },
  },
};
export const SidebarLinksItemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
