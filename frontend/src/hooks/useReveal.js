import { useEffect } from 'react';

/**
 * Custom hook to trigger scroll animations using IntersectionObserver.
 * Observes all elements with the `.reveal` class.
 *
 * A MutationObserver is attached as well, so `.reveal` nodes mounted *after* the
 * first render (API data arriving, project filter swaps, ...) are observed too.
 * Without it the IntersectionObserver would only hold references to nodes React
 * has already replaced and those cards would stay at `opacity: 0` forever.
 */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.12
      }
    );

    const observeReveals = (root) => {
      root.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el));
    };

    observeReveals(document);

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          if (node.classList.contains('reveal') && !node.classList.contains('visible')) {
            observer.observe(node);
          }
          observeReveals(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
}
