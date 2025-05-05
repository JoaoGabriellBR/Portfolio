import { useEffect, useState } from "react";

export default function useDeviceType() {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLandscape: false,
    isVeryShortHeight: false,
  });

  useEffect(() => {
    function detectDevice() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isLandscape = width > height;
      const isVeryShortHeight = height < 430;

      setDeviceType({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        isLandscape,
        isVeryShortHeight,
      });
    }

    detectDevice();
    window.addEventListener("resize", detectDevice);
    return () => window.removeEventListener("resize", detectDevice);
  }, []);

  return deviceType;
}
