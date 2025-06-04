import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Newspaper,
  MessageCircle,
  PlaySquare,
  Store,
  Users,
  CalendarDays,
  Flag,
  UserPlus as UserPlusIcon, // Renamed to avoid conflict with component name if any
  HeartHandshake,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  DotChart,
  PlusCircle,
  Settings,
  CircleHelp
} from 'lucide-react';

interface NavItemProps {
  label: string;
  icon: React.ElementType;
  href?: string;
  isActive?: boolean;
  isNested?: boolean;
  onClick?: () => void;
  optionsIcon?: React.ElementType;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon: Icon, href = '#', isActive, isNested, onClick, optionsIcon: OptionsIcon }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'flex items-center justify-between p-2 rounded-md text-sm font-medium',
        'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        isActive && 'bg-primary/10 text-primary ',
        isNested ? 'pl-8' : 'pl-2'
      )}
    >
      <div className="flex items-center">
        <Icon className={cn('h-5 w-5 mr-3', isActive ? 'text-primary' : 'text-muted-foreground')} />
        <span>{label}</span>
      </div>
      {OptionsIcon && <Button variant="ghost" size="icon" className="h-6 w-6"><OptionsIcon className="h-4 w-4" /></Button>}
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const [showMoreExplore, setShowMoreExplore] = useState(false);

  const user = {
    name: 'Olenna Mason',
    avatarUrl: 'https://i.pravatar.cc/40?u=olenna',
  };

  const mainNavItems = [
    { label: 'News Feed', icon: Newspaper, isActive: true, optionsIcon: MoreHorizontal },
    { label: 'Messenger', icon: MessageCircle },
    { label: 'Watch', icon: PlaySquare },
    { label: 'Marketplace', icon: Store },
  ];

  const shortcuts = [
    { label: 'FarmVille 2', icon: DotChart, href: '#' }, // Placeholder icon for game
  ];

  const exploreItems = [
    { label: 'Events', icon: CalendarDays, href: '#' },
    { label: 'Pages', icon: Flag, href: '#' },
    { label: 'Groups', icon: Users, href: '#' },
    { label: 'Friend Lists', icon: UserPlusIcon, href: '#' },
    { label: 'Fundraisers', icon: HeartHandshake, href: '#' },
    { label: 'Settings', icon: Settings, href: '#' },
    { label: 'Help Center', icon: CircleHelp, href: '#' },
  ];

  const createItems = [
    { label: 'Ad', href: '#' },
    { label: 'Page', href: '#' },
    { label: 'Group', href: '#' },
    { label: 'Event', href: '#' },
    { label: 'Fundraiser', href: '#' },
  ];

  const toggleShowMoreExplore = useCallback(() => {
    setShowMoreExplore(prev => !prev);
  }, []);

  const visibleExploreItems = showMoreExplore ? exploreItems : exploreItems.slice(0, 5);

  return (
    <nav className={cn('w-60 bg-sidebar text-sidebar-foreground h-full flex flex-col', className)}>
      <ScrollArea className="flex-1">
        <div className="p-3 space-y-2">
          <a href="#" className="flex items-center p-2 rounded-md hover:bg-sidebar-accent">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-sm text-sidebar-foreground">{user.name}</span>
          </a>

          {mainNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}

          <div className="pt-4">
            <h3 className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Shortcuts</h3>
            {shortcuts.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </div>

          <div className="pt-4">
            <h3 className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Explore</h3>
            {visibleExploreItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
            <Button variant="ghost" onClick={toggleShowMoreExplore} className="w-full justify-start pl-2 text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
              {showMoreExplore ? <ChevronUp className="h-5 w-5 mr-3" /> : <ChevronDown className="h-5 w-5 mr-3" />}
              {showMoreExplore ? 'See Less' : 'See More...'}
            </Button>
          </div>
        </div>
      </ScrollArea>
      <div className="p-4 border-t border-sidebar-border">
        <h3 className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Create</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {createItems.map(item => (
            <a key={item.label} href={item.href} className="text-sm text-primary hover:underline">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SidebarNav;
