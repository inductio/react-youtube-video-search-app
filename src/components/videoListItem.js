import React from 'react';

const VideoListItem = ({ video }) => {
    const imageSrc = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img
                        className="media-object"
                        src={imageSrc}
                        alt="videoThumb"
                    />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {videoTitle}
                    </div>
                </div>
            </div>

        </li>
    );
};

export default VideoListItem;