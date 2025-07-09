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

      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        // Special case for waitlist - scroll to the form instead of the section
        if (hash === 'waitlist') {
          const waitlistForm = document.getElementById('waitlist-form');
          if (waitlistForm) {
            waitlistForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        } else {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
        isInitialLoad.current = false;
      }, 100);
      return;
    }
    isInitialLoad.current = false;

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Don't update hash during manual navigation
        if (isManualNavigation.current) {
          return;
        }

        // Find the most visible section with improved logic
        let mostVisibleSection = '';
        let maxVisibility = 0;
        let hasHeroVisible = false;

        // First pass: check if hero is significantly visible
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === 'hero') {
            const visibilityRatio = entry.intersectionRatio;
            if (visibilityRatio > rootThreshold) {
              hasHeroVisible = true;
              maxVisibility = visibilityRatio;
            }
          }
        });

        // If hero is significantly visible, clear hash
        if (hasHeroVisible) {
          mostVisibleSection = '';
        } else {
          // Second pass: find the most visible non-hero section
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.target.id !== 'hero') {
              const visibilityRatio = entry.intersectionRatio;
              const sectionId = entry.target.id;

              // Use a lower threshold for maintaining current section vs switching
              const currentHash = window.location.hash.substring(1);
              const isCurrentSection = sectionId === currentHash;
              const threshold = isCurrentSection ? 0.1 : sectionThreshold; // Lower threshold for current section

              if (visibilityRatio > threshold && visibilityRatio > maxVisibility) {
                mostVisibleSection = sectionId;
                maxVisibility = visibilityRatio;
              }
            }
          });
        }

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
        threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
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
        // Special case for waitlist - scroll to the form instead of the section
        if (hash === 'waitlist') {
          const waitlistForm = document.getElementById('waitlist-form');
          if (waitlistForm) {
            waitlistForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        } else {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
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

      // Special case for waitlist - scroll to the form instead of the section
      if (sectionId === 'waitlist') {
        const waitlistForm = document.getElementById('waitlist-form');
        if (waitlistForm) {
          waitlistForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    // Reset manual navigation flag after scroll completes
    setTimeout(() => {
      isManualNavigation.current = false;
    }, 1000);
  };

  return { navigateToSection };
};
