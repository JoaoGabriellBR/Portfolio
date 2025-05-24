import { useEffect, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

interface UsePointerEventsProps {
  onMove: (position: Position) => void;
}

export function usePointerEvents({ onMove }: UsePointerEventsProps) {
  const handlePointerMove = useCallback((e: PointerEvent) => {
    // Use requestAnimationFrame for smooth animations
    requestAnimationFrame(() => {
      onMove({
        x: e.pageX,
        y: e.pageY
      });
    });
  }, [onMove]);

  useEffect(() => {
    // Use pointer events instead of mouse events for better cross-device support
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [handlePointerMove]);
} 