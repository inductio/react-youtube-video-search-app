import React from 'react';

const VideoList = (props) => {

    const videos = props.videos;

    return (
        <ul className="col-md-4 list-group">
            {videos.length ?
                videos.map((value, index) => {
                     return (
                         <li key={index}>
                             <img src={value.snippet.thumbnails.default.url} alt="img"/>
                         </li>
                     );
                })
                : null
            }
        </ul>
    );
};

export default VideoList;