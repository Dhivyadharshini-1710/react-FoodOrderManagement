import React from 'react';

function VideoList({ videos }) {
  return (
    <div>
      {videos.map(video => (
        <div key={video.id.videoId} className="video">
          <h2>{video.snippet.title}</h2>
          <p>{video.snippet.description}</p>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        </div>
      ))}
    </div>
  );
}

export default VideoList;
