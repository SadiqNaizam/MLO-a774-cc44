import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Feed/TopHeader';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // TopHeader component (from ../Feed/TopHeader.tsx) already handles its own styling,
  // including height (h-16), stickiness, background (bg-card), border, and shadow.
  // This Header component acts as a structural element for MainAppLayout's grid,
  // ensuring TopHeader is placed in the correct grid cell.
  return (
    <header className={cn(className)}>
      <TopHeader />
    </header>
  );
};

export default Header;
