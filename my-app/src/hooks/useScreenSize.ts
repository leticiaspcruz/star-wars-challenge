import { useState, useEffect } from 'react';
import { isMobile, isTablet } from '@/utils/getScreenSize';

const useScreenSize = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMobileView(isMobile() || isTablet());
  }, []);

  return { isClient, isMobileView };
};

export default useScreenSize;
