import ReactOnRails from 'react-on-rails';

import NavBar from '../bundles/components/navbar.js';
import Index from '../bundles/containers/index.js';
import YoutubeIndex from '../bundles/containers/youtubeIndex.js';
import YoutubeChannelStatistics from '../bundles/containers/youtubeChannelStatistic.js';
import YoutubeVideoComments from '../bundles/containers/youtubeVideoComments.js';
import UserProfile from '../bundles/containers/userProfile.js';

ReactOnRails.register({
  NavBar,
  Index,
  YoutubeIndex,
  YoutubeChannelStatistics,
  YoutubeVideoComments,
  UserProfile
});
