import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import './PostDetails.css';

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const history = useHistory()
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    const handlePostClick = () => {
        history.push('/posts');
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={handlePostClick} className="btn-style">See All Post</button>
        </div>
    );
};

export default PostDetails;