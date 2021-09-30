import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import './FriendDetails.css';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({})
    const history = useHistory();
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])

    const handleFriendsClick = () => {
        history.push('/friends');
    }
    return (
        <div>
            <h1>Friend Id: {friendId}</h1>
            <h4>Name: {friend.name}</h4>
            <p>Phone: {friend.phone}</p>
            <p>Website: {friend.website}</p>
            <p>Address: {friend.address?.city}</p>
            <button onClick={handleFriendsClick} className="btn-style">See All Friends</button>
        </div>
    );
};

export default FriendDetails;