import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const {id, name, phone, website, address} = props.friend;
    const history = useHistory();

    const friendStyle = {
        border: '2px solid red',
        padding: '10px',
        borderRadius: '5px'
    }

    const handleFriendClick = () => {
        // history.push('/about');
        history.push(`/friend/${id}`);
    }
    return (
        <div style={friendStyle}>
            <h2>I am: {name}</h2>
            <h5>Call Me: {phone}</h5>
            <p>Visit Me: {website}</p>
            <p><small>I live in {address.city}</small></p>
            <Link to={`/friend/${id}`} className="btn-style">Visit Me</Link>
            <br />
            <Link to="/home">
                <button className="btn-style">Home</button>
            </Link>
            <br />
            <button onClick={handleFriendClick} className="btn-style">Visit Me 2</button>
        </div>
    );
};

export default Friend;