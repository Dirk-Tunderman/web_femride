import { useEffect, useRef } from 'react';

interface UseHashNavigationOptions {
  sections: string[];
  rootThreshold?: number;
  sectionThreshold?: number;
}

/**
 * Custom hook for automatic hash navigation based on scroll position
 * Follows industry standard patterns:
 * - Updates URL hash when scrolling into sections
 * - Clears hash when scrolling back to hero/top
 * - Handles initial page load with hash
 * - Doesn't interfere with manual scrolling
 */
export const useHashNavigation = ({
  sections,
  rootThreshold = 0.6,
  sectionThreshold = 0.3
}: UseHashNavigationOptions) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isInitialLoad = useRef(true);
  const isManualNavigation = useRef(false);

  useEffect(() => {
    // Handle initial page load with hash
    if (isInitialLoad.current && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          isInitialLoad.current = false;
        }, 100);
        return;
      }
    }
    isInitialLoad.current = false;

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Don't update hash during manual navigation
        if (isManualNavigation.current) {
          return;
        }

        // Find the most visible section
        let mostVisibleSection = '';
        let maxVisibility = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibilityRatio = entry.intersectionRatio;
            const sectionId = entry.target.id;

            // Special handling for hero section
            if (sectionId === 'hero' && visibilityRatio > rootThreshold) {
              mostVisibleSection = '';
              maxVisibility = visibilityRatio;
            } else if (sectionId !== 'hero' && visibilityRatio > sectionThreshold && visibilityRatio > maxVisibility) {
              mostVisibleSection = sectionId;
              maxVisibility = visibilityRatio;
            }
          }
        });

        // Update URL hash if needed
        const currentHash = window.location.hash.substring(1);
        if (mostVisibleSection !== currentHash) {
          if (mostVisibleSection === '') {
            // Clear hash for hero section
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          } else {
            // Update hash for other sections
            window.history.replaceState(null, '', `#${mostVisibleSection}`);
          }
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '-80px 0px -20% 0px' // Account for fixed navbar
      }
    );

    // Observe all sections
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Listen for manual hash changes
    const handleHashChange = () => {
      isManualNavigation.current = true;
      const hash = window.location.hash.substring(1);
      
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Scroll to top if hash is cleared
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Reset manual navigation flag after scroll completes
      setTimeout(() => {
        isManualNavigation.current = false;
      }, 1000);
    };

    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [sections, rootThreshold, sectionThreshold]);

  // Method to manually navigate to a section
  const navigateToSection = (sectionId: string) => {
    isManualNavigation.current = true;
    
    if (sectionId === 'hero' || sectionId === '') {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState(null, '', `#${sectionId}`);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Reset manual navigation flag after scroll completes
    setTimeout(() => {
      isManualNavigation.current = false;
    }, 1000);
  };

  return { navigateToSection };
};
