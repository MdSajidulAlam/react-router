import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend
    // dynamic navigate---
    const navigate = useNavigate()
    const showFriendDetail = () => {
        const path = `/friend/${id}`
        navigate(path)
    }
    return (
        <div>
            <h2>Name:{name}</h2>
            <Link to={'/friend/' + id}>Show Detail</Link>
            <button onClick={showFriendDetail}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;