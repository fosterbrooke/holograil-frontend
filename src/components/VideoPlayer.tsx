import React from 'react';
import './VideoPlayer.css';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <div className="responsive-iframe">
      <iframe
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
