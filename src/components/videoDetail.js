import React from 'react';

const VideoDetail = ({video}) => {

    if(!video) {
        return <div>Loading...</div>
    }

    const videoTitle = video.snippet.title;
    const videoDescription = video.snippet.description;
    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive"
                        src={videoUrl}
                        frameBorder="0"
                >
                </iframe>
            </div>
            <div className="details">
                <div>{videoTitle}</div>
                <div>{videoDescription}</div>
            </div>
        </div>
    );
};

export default VideoDetail;