import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  MessageSquare,
  Edit2,
  Users,
  Settings2 as SettingsIcon, // Renamed to avoid conflict
  ChevronUp,
  Search
} from 'lucide-react';
import { Input } from '@/components/ui/input';

interface ChatUser {
  id: string;
  name: string;
  avatarUrl: string;
  isOnline: boolean;
}

interface ChatBarProps {
  className?: string;
}

const onlineFriends: ChatUser[] = [
  { id: '1', name: 'Alice Wonderland', avatarUrl: 'https://i.pravatar.cc/32?u=alice_chat', isOnline: true },
  { id: '2', name: 'Bob The Builder', avatarUrl: 'https://i.pravatar.cc/32?u=bob_chat', isOnline: true },
  { id: '3', name: 'Charlie Chaplin', avatarUrl: 'https://i.pravatar.cc/32?u=charlie_chat', isOnline: false },
  { id: '4', name: 'Diana Prince', avatarUrl: 'https://i.pravatar.cc/32?u=diana_chat', isOnline: true },
];

const ChatBar: React.FC<ChatBarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleChat = React.useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  if (!isOpen) {
    return (
        <div className={cn('fixed bottom-0 right-4 md:right-6 z-50', className)}>
            <Button 
                onClick={toggleChat} 
                className="rounded-t-lg rounded-b-none px-4 py-2 h-10 shadow-lg bg-card hover:bg-accent text-foreground flex items-center space-x-2 border border-b-0"
            >
                <MessageSquare className="h-5 w-5 text-primary" />
                <span className="font-semibold text-sm">Chat</span>
                <div className="flex -space-x-2 ml-1">
                    {onlineFriends.slice(0,2).filter(f => f.isOnline).map(friend => (
                        <Avatar key={friend.id} className="h-5 w-5 border-2 border-card">
                            <AvatarImage src={friend.avatarUrl} />
                            <AvatarFallback>{friend.name.substring(0,1)}</AvatarFallback>
                        </Avatar>
                    ))}
                </div>
                <ChevronUp className="h-4 w-4 ml-1 transform transition-transform duration-200 group-hover:rotate-180" />
            </Button>
        </div>
    );
  }

  return (
    <div className={cn('fixed bottom-0 right-4 md:right-6 z-50 w-72 h-[28rem] flex flex-col bg-card shadow-xl rounded-t-lg border border-b-0', className)}>
      <div 
        className="flex items-center justify-between p-2 border-b cursor-pointer hover:bg-accent rounded-t-lg"
        onClick={toggleChat}
      >
        <div className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            <span className="font-semibold text-sm">Chat</span>
        </div>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="h-7 w-7"><SettingsIcon className="h-4 w-4 text-muted-foreground" /></Button>
          <Button variant="ghost" size="icon" className="h-7 w-7"><Users className="h-4 w-4 text-muted-foreground" /></Button>
          <Button variant="ghost" size="icon" className="h-7 w-7"><Edit2 className="h-4 w-4 text-muted-foreground" /></Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ChevronUp className="h-4 w-4 transform rotate-180 transition-transform duration-200" />
          </Button>
        </div>
      </div>
      <div className="p-2 border-b">
        <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search Messenger" className="pl-8 h-8 rounded-full bg-secondary border-none text-xs"/>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {onlineFriends.map(friend => (
          <Button key={friend.id} variant="ghost" className="w-full flex items-center justify-start space-x-2 px-2 py-1.5 h-auto hover:bg-accent">
            <div className="relative">
                <Avatar className="h-8 w-8">
                    <AvatarImage src={friend.avatarUrl} alt={friend.name} />
                    <AvatarFallback>{friend.name.substring(0,1)}</AvatarFallback>
                </Avatar>
                {friend.isOnline && 
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-prd-success ring-2 ring-card" />
                }
            </div>
            <span className="text-sm font-medium text-foreground truncate">{friend.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ChatBar;
