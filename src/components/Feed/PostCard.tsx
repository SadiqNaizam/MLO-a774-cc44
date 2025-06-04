import React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  MapPin,
  Users
} from 'lucide-react';

interface User {
  name: string;
  avatarUrl: string;
}

interface MapData {
  city: string;
  country: string;
  context: string;
}

export interface PostCardProps {
  id: string;
  user: User;
  timestamp: string;
  location?: string;
  groupName?: string;
  contentText: string;
  contentImage?: string;
  contentMap?: MapData;
  stats: { likes: number; comments: number; shares: number };
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  user,
  timestamp,
  location,
  groupName,
  contentText,
  contentImage,
  contentMap,
  stats,
  className,
}) => {
  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {user.name} 
                {location && <span className="font-normal text-muted-foreground">{location}</span>}
                {groupName && <span className="font-normal text-muted-foreground">posted in <span className="font-semibold text-primary">{groupName}</span></span>}
              </p>
              <p className="text-xs text-muted-foreground flex items-center">
                {timestamp}
                {groupName && <Users className="h-3 w-3 ml-1.5 text-muted-foreground"/>}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground h-8 w-8">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-3 pt-0">
        <p className="text-sm text-foreground mb-3 whitespace-pre-line">
          {contentText}
        </p>
        {contentImage && (
          <div className="rounded-lg overflow-hidden border border-border">
            <img src={contentImage} alt="Post content" className="w-full h-auto object-cover" />
          </div>
        )}
        {contentMap && (
          <div className="rounded-lg overflow-hidden border border-border aspect-[16/9] bg-secondary flex flex-col items-center justify-center">
            {/* Placeholder for map image. Using a styled div. */}
            <div className="w-full h-full bg-gray-300 relative">
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(contentMap.city)}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${encodeURIComponent(contentMap.city)}&key=YOUR_API_KEY`} 
                     alt={`Map of ${contentMap.city}`} 
                     className="w-full h-full object-cover" 
                     onError={(e) => (e.currentTarget.style.display = 'none')} // Hide if API key fails or not provided
                />
                {/* Fallback if image fails or API key not present */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/80">
                    <MapPin className="h-12 w-12 text-muted-foreground mb-2" />
                    <p className="text-lg font-semibold text-foreground">{contentMap.city}</p>
                </div>
            </div>
            <div className="p-3 bg-card w-full flex justify-between items-center">
                <div>
                    <p className="font-semibold text-sm text-foreground">{contentMap.city}</p>
                    <p className="text-xs text-muted-foreground">{contentMap.country}</p>
                    <p className="text-xs text-muted-foreground mt-1">{contentMap.context}</p>
                </div>
                <Button variant="outline" size="sm">
                    Save
                </Button>
            </div>
          </div>
        )}
      </CardContent>
      {(stats.likes > 0 || stats.comments > 0 || stats.shares > 0) && (
        <div className="px-4 pb-2 flex justify-between items-center text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
                {stats.likes > 0 && 
                    <><ThumbsUp className="h-3 w-3 text-primary"/><span className="hover:underline cursor-pointer">{stats.likes}</span></>
                }
            </div>
            <div className="flex items-center space-x-4">
                {stats.comments > 0 && <span className="hover:underline cursor-pointer">{stats.comments} comments</span>}
                {stats.shares > 0 && <span className="hover:underline cursor-pointer">{stats.shares} shares</span>}
            </div>
        </div>
      )}
      <Separator className="mx-4"/>
      <CardFooter className="p-2">
        <div className="flex justify-around w-full">
          <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-accent">
            <ThumbsUp className="h-5 w-5 mr-2" /> Like
          </Button>
          <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-accent">
            <MessageSquare className="h-5 w-5 mr-2" /> Comment
          </Button>
          <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-accent">
            <Share2 className="h-5 w-5 mr-2" /> Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
