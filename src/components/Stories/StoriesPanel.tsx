import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlusCircle, Archive, Settings, BookOpen } from 'lucide-react'; // BookOpen for story preview icon

interface Story {
  id: string;
  userName: string;
  userAvatarUrl: string;
  storyImageUrl: string;
  viewed?: boolean;
}

interface StoriesPanelProps {
  className?: string;
}

const dummyStories: Story[] = [
  {
    id: '1',
    userName: 'Mike L.',
    userAvatarUrl: 'https://i.pravatar.cc/32?u=story_mike',
    storyImageUrl: 'https://source.unsplash.com/random/150x250?nature,trip',
    viewed: false,
  },
  {
    id: '2',
    userName: 'Sarah K.',
    userAvatarUrl: 'https://i.pravatar.cc/32?u=story_sarah',
    storyImageUrl: 'https://source.unsplash.com/random/150x250?city,food',
    viewed: true,
  },
  {
    id: '3',
    userName: 'Chris P.',
    userAvatarUrl: 'https://i.pravatar.cc/32?u=story_chris',
    storyImageUrl: 'https://source.unsplash.com/random/150x250?event,music',
    viewed: false,
  }
];

const StoriesPanel: React.FC<StoriesPanelProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4">
        <CardTitle className="text-lg font-semibold">Stories</CardTitle>
        <div className="space-x-2">
          <Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto text-sm">
            <Archive className="h-4 w-4 mr-1" /> Archive
          </Button>
          <Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto text-sm">
            <Settings className="h-4 w-4 mr-1" /> Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="flex flex-col items-center p-4 border border-dashed border-border rounded-md mb-4 hover:border-primary cursor-pointer">
          <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-primary text-primary hover:bg-primary/10 mb-2">
            <PlusCircle className="h-6 w-6" />
          </Button>
          <p className="font-semibold text-sm text-foreground">Add to Your Story</p>
          <p className="text-xs text-muted-foreground text-center">Share a photo, video or write something.</p>
        </div>
        
        {/* Optional: Display existing stories (simplified) */}
        <div className="space-y-3">
          {dummyStories.map(story => (
            <a href="#" key={story.id} className="flex items-center space-x-3 p-2 rounded-md hover:bg-accent">
              <div className={cn(
                  'relative p-0.5 rounded-full',
                  story.viewed ? 'bg-muted' : 'bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500'
              )}>
                <Avatar className="h-10 w-10 border-2 border-card">
                  <AvatarImage src={story.userAvatarUrl} alt={story.userName} />
                  <AvatarFallback>{story.userName.substring(0,1)}</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{story.userName}</p>
                <p className="text-xs text-muted-foreground">Tap to view</p>
              </div>
              <BookOpen className="h-5 w-5 text-muted-foreground ml-auto" />
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StoriesPanel;
