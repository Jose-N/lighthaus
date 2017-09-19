import ReactOnRails from 'react-on-rails';

import NavBar from '../bundles/navbar/navbar.js';

import Main from '../bundles/searches/main.js';
import Youtube from '../bundles/searches/youtube.js';
import Twitch from '../bundles/searches/twitch.js';
import Twitter from '../bundles/searches/twitter.js';

import YoutubeDisplay from '../bundles/youtube/display.js'

ReactOnRails.register({
  NavBar,
  Main,
  Youtube,
  Twitch,
  Twitter,
  YoutubeDisplay
});
