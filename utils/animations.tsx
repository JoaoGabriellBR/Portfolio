export const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 100, transition: { duration: 1, delay: 0.2 } },
};

export const preloader = {
  initial: {
    top: 0,
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  },
  exit: {
    top: "-100vh",
    borderBottomLeftRadius: "400px",
    borderBottomRightRadius: "400px",
    transition: {
      top: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
      borderBottomLeftRadius: { duration: 0.5, ease: "easeInOut" },
      borderBottomRightRadius: { duration: 0.5, ease: "easeInOut" },
    },
  },
};
