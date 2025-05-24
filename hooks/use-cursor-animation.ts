import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';
import { CURSOR_ANIMATION_CONFIG, BREAKPOINTS } from '@/utils/animation-config';

// Extended type for GSAP's QuickToFunc that includes the kill method
type GSAPQuickToFunc = gsap.QuickToFunc & {
  kill: () => void;
};

interface AnimationRefs {
  modalContainer: RefObject<HTMLDivElement>;
  cursor?: RefObject<HTMLDivElement>;
  cursorLabel?: RefObject<HTMLDivElement>;
}

interface Position {
  x: number;
  y: number;
}

export function useCursorAnimation({ modalContainer, cursor, cursorLabel }: AnimationRefs) {
  const animationsRef = useRef<gsap.QuickToFunc[]>([]);
  const prefersReducedMotion = useRef<boolean>(false);
  const elementsRef = useRef<HTMLElement[]>([]);
  
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;

    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    
    mediaQuery.addEventListener('change', handleMotionPreferenceChange);

    // Only setup animations if motion is not reduced
    if (!prefersReducedMotion.current && window.innerWidth >= BREAKPOINTS.mobile) {
      // Setup GSAP animations
      if (modalContainer.current) {
        elementsRef.current.push(modalContainer.current);
        const xMoveContainer = gsap.quickTo(modalContainer.current, "left", CURSOR_ANIMATION_CONFIG.container);
        const yMoveContainer = gsap.quickTo(modalContainer.current, "top", CURSOR_ANIMATION_CONFIG.container);
        animationsRef.current.push(xMoveContainer, yMoveContainer);
      }

      if (cursor?.current) {
        elementsRef.current.push(cursor.current);
        const xMoveCursor = gsap.quickTo(cursor.current, "left", CURSOR_ANIMATION_CONFIG.cursor);
        const yMoveCursor = gsap.quickTo(cursor.current, "top", CURSOR_ANIMATION_CONFIG.cursor);
        animationsRef.current.push(xMoveCursor, yMoveCursor);
      }

      if (cursorLabel?.current) {
        elementsRef.current.push(cursorLabel.current);
        const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", CURSOR_ANIMATION_CONFIG.label);
        const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", CURSOR_ANIMATION_CONFIG.label);
        animationsRef.current.push(xMoveCursorLabel, yMoveCursorLabel);
      }
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
      // Cleanup all GSAP animations
      elementsRef.current.forEach(element => {
        gsap.killTweensOf(element);
      });
      animationsRef.current = [];
      elementsRef.current = [];
    };
  }, [modalContainer, cursor, cursorLabel]);

  const updatePositions = (position: Position) => {
    if (prefersReducedMotion.current || window.innerWidth < BREAKPOINTS.mobile) return;

    const { x, y } = position;
    const animations = animationsRef.current;
    
    // Update positions in pairs (x,y)
    for (let i = 0; i < animations.length; i += 2) {
      animations[i]?.(x);    // x position
      animations[i + 1]?.(y); // y position
    }
  };

  return { updatePositions };
} 