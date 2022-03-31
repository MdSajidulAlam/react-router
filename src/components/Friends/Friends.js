import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div>
            <h2>Hello Friends</h2>
            <p>Friends:{friends.length}</p>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;