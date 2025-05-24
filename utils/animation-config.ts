export const CURSOR_ANIMATION_CONFIG = {
  container: {
    duration: 0.8,
    ease: "power3",
  },
  cursor: {
    duration: 0.5,
    ease: "power3",
  },
  label: {
    duration: 0.45,
    ease: "power3",
  },
} as const;

export const BREAKPOINTS = {
  mobile: 768, // matches with lg in Tailwind
} as const; 