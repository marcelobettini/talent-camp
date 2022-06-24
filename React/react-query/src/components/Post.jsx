import React, { useEffect, useState } from 'react';
import { getPostById } from '../api/posts';
import { Spinner } from "react-bootstrap";

const Post = ({ postId }) => {
    const [state, setState] = useState("isLoading");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPostById(postId);
                setState(data);
            } catch (err) {
                setState("error");
            }
        };
        fetchData();
    }, [postId]);

    if (state === "isLoading") {
        return (
            <div className='d-flex'>
                Loading <Spinner animation='grow' variant='success' />Post...
            </div>
        );
    }

    if (state === "error") {
        return (
            <div className='alert alert-danger'>
                Error retrieving post
            </div>
        )
    }

    return (
        <article>
            <h1>{state.title}</h1>
            <p>{state.body}</p>
        </article>
    )

}

export default Post 