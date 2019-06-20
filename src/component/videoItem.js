import React from 'react'
import classes from './videoItem.module.css';

const videoItem = (props) => {
    const {video, onVideoSelect } = props;
    return (
        <div className={`${classes.videoItem} item` } onClick={() => onVideoSelect(video)}>
            <img className={`${classes.image} ui image`} src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
            <div className="content">
            <div className="header">{video.snippet.title}</div>
            </div>
            
        </div>
    )
}

export default videoItem
