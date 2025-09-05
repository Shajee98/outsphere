'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Preloader from "./Preloader";

export default function PreloaderWrapper() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show preloader when route changes
    setIsRouteChanging(true);
    setIsLoading(true);

    // Hide preloader when page is fully loaded
    const handleLoad = () => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
        setIsRouteChanging(false);
      }, 1000); // 1 second delay for smooth transition
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Listen for page load event
      window.addEventListener('load', handleLoad);
      
      // Cleanup event listener
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [pathname]); // Re-run when pathname changes

  // Show preloader if loading or route changing
  return (isLoading || isRouteChanging) ? <Preloader /> : null;
}
