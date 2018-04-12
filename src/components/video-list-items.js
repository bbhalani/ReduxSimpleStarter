import React from 'react';

//destructuring
const VideoListItem = ({video}) => {

    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    return (
        <li className="list-group-item">
            <div className="media video-list">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-header">
                        {videoTitle}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;