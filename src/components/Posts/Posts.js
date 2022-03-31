import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([])
    console.log(posts);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h2>All post: {posts.length}</h2>
            {
                posts.map(post => <Link
                    key={post.id}
                    to={`/posts/${post.id}`}
                >{post.id} </Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;