'use client'
import React, {useEffect} from 'react';

async function getPosts() {
    const res = await fetch("/api/getPosts")
    return res.json()
}

const Posts = () => {
    useEffect(() => {
        getPosts().then((value) => {

        })
        // console.log(getPosts())
    }, [])
    return (
        <div>

        </div>
    );
};

export default Posts;