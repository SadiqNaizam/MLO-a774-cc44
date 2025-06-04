import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Feed/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // SidebarNav component (from ../Feed/SidebarNav.tsx) already handles its own styling,
  // including width (w-60), background (bg-sidebar), text color, and full height.
  // This Sidebar component acts as a structural element for MainAppLayout's grid,
  // ensuring SidebarNav is placed in the correct grid cell.
  return (
    <div className={cn(className)}>
      <SidebarNav />
    </div>
  );
};

export default Sidebar;
