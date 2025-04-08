export const textSizes = {
  sm: "text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg",
  md: "text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl",
  lg: "text-md sm:text-md md:text-xl lg:text-2xl xl:text-3xl",
  xl: "text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl",
  xl2: "text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
  xl3: "text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
  xl4: "text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
  xl5: "text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[12rem]",
} as const;

export type textSizeProps = keyof typeof textSizes;
