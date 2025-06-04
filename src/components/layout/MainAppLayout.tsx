import React from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode; // Content for the main central area (e.g., PostFeed)
  rightPanelSlot?: React.ReactNode; // Content for the right-hand panel (e.g., Stories, Suggested Groups)
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, rightPanelSlot }) => {
  // This layout implements the "HLSBRS" (Header, Left Sidebar, Body, Right Sidebar) structure.
  // It uses the grid definition from 'Layout Requirements -> overall.definition':
  // "grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr]"
  // - Header row: 'auto' height (derived from Header component, typically h-16)
  // - Content row: '1fr' (takes remaining vertical space)
  // - Left Sidebar column: 'auto' width (derived from Sidebar component, typically w-60)
  // - Main Body column: '1fr' (takes available flexible width)
  // - Right Sidebar column: 'auto' width (derived from its content or explicit width, e.g., w-[360px])

  return (
    <div
      className={cn(
        'h-screen grid bg-background text-foreground',
        'grid-rows-[auto_1fr]',     // Defines two rows: Header, Content
        'grid-cols-[auto_1fr_auto]' // Defines three columns: Sidebar, Main, RightPanel
      )}
    >
      {/* Header: Spans all three columns in the first row */}
      <div className="row-start-1 col-span-3">
        <Header />
      </div>

      {/* Left Sidebar: Occupies the first column in the second row */}
      <div className="row-start-2 col-start-1">
        <Sidebar />
      </div>

      {/* Main Content (Body): Occupies the second column (1fr) in the second row */}
      <main className="row-start-2 col-start-2 overflow-y-auto p-4">
        {children}
      </main>

      {/* Right Sidebar: Occupies the third column in the second row */}
      {/* Shown on large screens (lg:block), hidden on smaller ones. */}
      {/* Width is set to w-[360px] as a common practice for such panels. */}
      {/* Background is 'bg-card' for a distinct panel appearance, common in dashboards. */}
      <aside className="row-start-2 col-start-3 overflow-y-auto p-4 border-l border-border bg-card hidden lg:block w-[360px]">
        {rightPanelSlot}
      </aside>
    </div>
  );
};

export default MainAppLayout;
