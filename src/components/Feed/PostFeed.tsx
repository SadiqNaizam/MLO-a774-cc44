import React from 'react';
import { cn } from '@/lib/utils';
import PostCard, { PostCardProps } from './PostCard'; // Use relative path

interface PostFeedProps {
  className?: string;
}

const dummyPosts: PostCardProps[] = [
  {
    id: '1',
    user: {
      name: 'Julia Fillory',
      avatarUrl: 'https://i.pravatar.cc/40?u=julia',
    },
    timestamp: '2 hrs ago',
    location: 'in Raleigh, North Carolina',
    contentText: 'Checking out some new stores downtown!',
    contentMap: {
      city: 'Raleigh, North Carolina',
      country: 'City - United States',
      context: 'Bryan Durand and 2 others have been here',
    },
    stats: { likes: 120, comments: 15, shares: 7 },
  },
  {
    id: '2',
    user: {
      name: 'Alex Doe',
      avatarUrl: 'https://i.pravatar.cc/40?u=alex',
    },
    timestamp: '5 hrs ago',
    contentText: 'Just enjoyed a fantastic meal at The Local Eatery! Highly recommend the pasta. #foodie #localgems',
    contentImage: 'https://source.unsplash.com/random/600x400?food,pasta',
    stats: { likes: 256, comments: 42, shares: 18 },
  },
  {
    id: '3',
    user: {
      name: 'Samantha Bee',
      avatarUrl: 'https://i.pravatar.cc/40?u=samantha',
    },
    timestamp: '1 day ago',
    groupName: 'Book Lovers Club',
    contentText: 'Finished reading "The Midnight Library" and it was phenomenal! What book should I pick up next? Open to suggestions! 📚',
    stats: { likes: 88, comments: 29, shares: 5 },
  },
];

const PostFeed: React.FC<PostFeedProps> = ({ className }) => {
  return (
    <div className={cn('space-y-4 w-full max-w-xl mx-auto', className)}>
      {dummyPosts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostFeed;
