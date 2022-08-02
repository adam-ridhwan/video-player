import React, { useState } from 'react';
import './App.css';

import Video from './Video';
import Menu from './Menu.js';

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4',
};

function App() {
  const [state, setState] = useState({ src: VIDEOS.fast });

  const { src } = state;

  const chooseVideo = newVideo => {
    // console.log(newVideo.target.value);
    setState({
      src: VIDEOS[newVideo],
    });
  };

  return (
    <>
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={chooseVideo} />
        <Video src={src} />
      </div>
    </>
  );
}

export default App;
