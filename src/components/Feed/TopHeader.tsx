import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Facebook,
  Search,
  Home,
  Users,
  MessageCircle,
  Bell,
  HelpCircle,
  ChevronDown,
  Menu // Placeholder for future mobile menu if needed
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const user = {
    name: 'Olenna',
    avatarUrl: 'https://i.pravatar.cc/32?u=olenna_header',
  };

  return (
    <header className={cn('sticky top-0 z-50 w-full border-b bg-card h-16 flex items-center px-4 shadow-sm', className)}>
      <div className="flex items-center">
        <Facebook className="h-10 w-10 text-primary mr-2" />
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search" className="pl-8 pr-2 py-2 h-10 w-60 rounded-full bg-secondary border-none focus-visible:ring-primary" />
        </div>
      </div>

      <nav className="flex-1 flex justify-center items-center space-x-1 sm:space-x-2 mx-4">
        {/* Primary navigation links can be added here. For now, just Home and Find Friends as per image context */} 
        <Button variant="ghost" className="px-3 py-2 sm:px-6 sm:py-5 rounded-lg text-muted-foreground hover:bg-accent data-[active=true]:text-primary data-[active=true]:border-b-2 data-[active=true]:border-primary data-[active=true]:rounded-none" data-active={true}>
          <Home className="h-6 w-6" />
          <span className="hidden lg:ml-2 lg:block">Home</span>
        </Button>
        <Button variant="ghost" className="px-3 py-2 sm:px-6 sm:py-5 rounded-lg text-muted-foreground hover:bg-accent data-[active=false]:text-muted-foreground">
          <Users className="h-6 w-6" />
          <span className="hidden lg:ml-2 lg:block">Find Friends</span>
        </Button>
      </nav>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="flex items-center p-1 rounded-full hover:bg-accent">
          <Avatar className="h-7 w-7">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.substring(0,1)}</AvatarFallback>
          </Avatar>
          <span className="ml-1 font-semibold text-sm hidden sm:inline">{user.name}</span>
        </Button>

        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="rounded-full bg-secondary hover:bg-accent relative w-10 h-10">
            <Users className="h-5 w-5 text-foreground" />
            <Badge variant="destructive" className="absolute -top-1 -right-1 p-0.5 h-4 min-w-[1rem] text-xs">8</Badge>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-secondary hover:bg-accent relative w-10 h-10">
            <MessageCircle className="h-5 w-5 text-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-secondary hover:bg-accent relative w-10 h-10">
            <Bell className="h-5 w-5 text-foreground" />
            <Badge variant="destructive" className="absolute -top-1 -right-1 p-0.5 h-4 min-w-[1rem] text-xs">36</Badge>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-secondary hover:bg-accent w-10 h-10">
            <HelpCircle className="h-5 w-5 text-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-secondary hover:bg-accent w-10 h-10">
            <ChevronDown className="h-5 w-5 text-foreground" />
          </Button>
        </div>
         {/* Mobile Menu Icon - shown on smaller screens if needed */}
        <Button variant="ghost" size="icon" className="lg:hidden ml-2">
            <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default TopHeader;
