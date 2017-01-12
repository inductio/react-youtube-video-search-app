import React from 'react';

const VideoListItem = ({ video }) => {

    return (
        <li>
            <img src={video.snippet.thumbnails.default.url} alt="videoThumb"/>
        </li>
    );
};

export default VideoListItem;