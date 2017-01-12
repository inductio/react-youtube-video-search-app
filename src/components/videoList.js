import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {

    const videoItems = props.videos.length ? props.videos.map((video, index) => {
        return  <VideoListItem video={video} key={index} />
    }) : null;

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>

    );
};

export default VideoList;