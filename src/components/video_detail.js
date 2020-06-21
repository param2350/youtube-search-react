import React from 'react';

const VideoDetails = ({video}) => {

    if(!video) {
        return (
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" ></iframe>

            </div>
        );
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;





    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>

            </div>

            <div className="details">
                <div className="video-detail-title">{video.snippet.title}

                </div>
                <hr></hr>
                <div className="video-detail-description">
                    {video.snippet.description}

                </div>

            </div>

        </div>
    )

};


export default VideoDetails;