import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = (props) => {
    const {id, title, body} = props.post;
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/post/${id}`} className="btn-style">Visit Post</Link>
        </div>
    );
};

export default Post;