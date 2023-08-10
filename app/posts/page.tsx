'use client'
import React, {useEffect} from 'react';

async function getPosts() {
    const res = await fetch("/api/getPosts")
}

const Posts = () => {
    useEffect(() => {
        console.log(getPosts())
    }, [])
    return (
        <div>

        </div>
    );
};

export default Posts;