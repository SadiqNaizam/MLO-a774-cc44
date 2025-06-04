import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  PencilLine,
  Image as ImageIcon,
  Video,
  ListChecks,
  UserTag,
  MoreHorizontal
} from 'lucide-react';

interface PostInputProps {
  className?: string;
  userName?: string;
  userAvatarUrl?: string;
}

const PostInput: React.FC<PostInputProps> = ({
  className,
  userName = 'Olenna',
  userAvatarUrl = 'https://i.pravatar.cc/40?u=olenna_post_input'
}) => {
  const [activeTab, setActiveTab] = useState<'make' | 'photo' | 'live'>('make');
  const [postText, setPostText] = useState('');

  const handleTabChange = useCallback((tab: 'make' | 'photo' | 'live') => {
    setActiveTab(tab);
  }, []);

  const TABS = [
    { id: 'make' as const, label: 'Make Post', icon: PencilLine },
    { id: 'photo' as const, label: 'Photo/Video Album', icon: ImageIcon },
    { id: 'live' as const, label: 'Live Video', icon: Video },
  ];

  const ACTION_BUTTONS = [
    { label: 'List', icon: ListChecks, color: 'text-orange-500' },
    { label: 'Photo/Video', icon: ImageIcon, color: 'text-green-500' },
    { label: 'Tag Friends', icon: UserTag, color: 'text-blue-500' },
  ];

  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="p-0">
        <div className="flex border-b">
          {TABS.map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                'flex-1 justify-start px-4 py-3 rounded-none font-semibold text-muted-foreground',
                activeTab === tab.id && 'text-primary border-b-2 border-primary'
              )}
            >
              <tab.icon className={cn('h-5 w-5 mr-2', activeTab === tab.id ? 'text-primary' : '')} />
              {tab.label}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={userAvatarUrl} alt={userName} />
            <AvatarFallback>{userName.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <Input
            placeholder={`What's on your mind, ${userName}?`}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base h-auto py-2 px-1 bg-transparent placeholder:text-muted-foreground"
          />
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="p-3 flex justify-between items-center">
        <div className="flex space-x-1">
          {ACTION_BUTTONS.map((action) => (
            <Button key={action.label} variant="ghost" className="text-muted-foreground hover:bg-accent px-3 py-2">
              <action.icon className={cn('h-5 w-5 mr-1.5', action.color)} />
              <span className="text-sm font-medium">{action.label}</span>
            </Button>
          ))}
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostInput;
