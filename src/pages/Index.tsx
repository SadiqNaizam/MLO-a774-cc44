import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PostInput from '../components/Feed/PostInput';
import PostFeed from '../components/Feed/PostFeed';
import StoriesPanel from '../components/Stories/StoriesPanel';
import SuggestedGroups from '../components/Groups/SuggestedGroups';
import ChatBar from '../components/Chat/ChatBar';

/**
 * SocialDashboardPage represents the main social media feed page.
 * It assembles various organisms like PostInput, PostFeed, StoriesPanel,
 * SuggestedGroups, and ChatBar using the MainAppLayout for overall structure.
 */
const SocialDashboardPage: React.FC = () => {
  // Content for the main central area of the layout
  // This area will contain the post input field and the post feed.
  // It's styled to be a single column, centered, with a max width similar to common social media feeds.
  const mainContent = (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <PostInput /> {/* PostInput will take the full width of its parent (max-w-xl) */}
      <PostFeed />  {/* PostFeed also has max-w-xl and mx-auto, fitting well here */}
    </div>
  );

  // Content for the right-hand panel of the layout
  // This panel typically shows stories, suggested groups, or other contextual information.
  const rightPanelContent = (
    <div className="space-y-6">
      <StoriesPanel />
      <SuggestedGroups />
    </div>
  );

  return (
    <>
      <MainAppLayout rightPanelSlot={rightPanelContent}>
        {mainContent}
      </MainAppLayout>
      <ChatBar /> {/* ChatBar is a fixed floating component, rendered outside MainAppLayout's grid flow */}
    </>
  );
};

export default SocialDashboardPage;
