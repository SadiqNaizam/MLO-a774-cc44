import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Users } from 'lucide-react';

interface Group {
  id: string;
  name: string;
  members: number;
  thumbnailUrl: string;
  mutualFriendsAvatars?: string[];
}

interface SuggestedGroupsProps {
  className?: string;
}

const suggestedGroupsData: Group[] = [
  {
    id: '1',
    name: 'Mad Men (MADdicts)',
    members: 6195,
    thumbnailUrl: 'https://source.unsplash.com/random/300x150?tv,retro',
    mutualFriendsAvatars: [
      'https://i.pravatar.cc/20?u=friend1',
      'https://i.pravatar.cc/20?u=friend2',
      'https://i.pravatar.cc/20?u=friend3',
    ],
  },
  {
    id: '2',
    name: 'Dexter Morgan Fans',
    members: 6984,
    thumbnailUrl: 'https://source.unsplash.com/random/300x150?tv,series',
    mutualFriendsAvatars: [
        'https://i.pravatar.cc/20?u=friend4',
        'https://i.pravatar.cc/20?u=friend5',
      ],
  },
  {
    id: '3',
    name: 'Tech Innovators NYC',
    members: 12030,
    thumbnailUrl: 'https://source.unsplash.com/random/300x150?technology,city',
    mutualFriendsAvatars: [
        'https://i.pravatar.cc/20?u=friend6',
      ],
  },
];

const SuggestedGroups: React.FC<SuggestedGroupsProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4">
        <CardTitle className="text-lg font-semibold">Suggested Groups</CardTitle>
        <Button variant="link" className="text-primary p-0 h-auto text-sm">See All</Button>
      </CardHeader>
      <CardContent className="p-4 pt-2 space-y-3">
        {suggestedGroupsData.map((group) => (
          <div key={group.id} className="space-y-2 pb-3 border-b last:border-b-0 border-border">
            <div className="relative">
                <img src={group.thumbnailUrl} alt={group.name} className="w-full h-24 object-cover rounded-md" />
                {group.mutualFriendsAvatars && group.mutualFriendsAvatars.length > 0 && (
                    <div className="absolute bottom-2 left-2 flex -space-x-2">
                        {group.mutualFriendsAvatars.map((avatarUrl, index) => (
                            <Avatar key={index} className="h-6 w-6 border-2 border-card">
                                <AvatarImage src={avatarUrl} />
                                <AvatarFallback>{index}</AvatarFallback>
                            </Avatar>
                        ))}
                    </div>
                )}
            </div>
            
            <div className="mt-2">
              <h4 className="text-sm font-semibold text-foreground hover:underline cursor-pointer">{group.name}</h4>
              <p className="text-xs text-muted-foreground">{group.members.toLocaleString()} members</p>
            </div>
            <Button variant="outline" className="w-full mt-1 text-sm">
              <Plus className="h-4 w-4 mr-2" /> Join Group
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SuggestedGroups;
