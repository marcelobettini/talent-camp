import { useEffect, useState } from "react";
import { getPosts } from "../api/posts";
import { Table, Spinner } from "react-bootstrap";

const Posts = ({ setPostId }) => {
    const [state, setState] = useState("isLoading");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPosts();
                setState(data);
            } catch (err) {
                setState("error");
            }
        };
        fetchData();
    }, []);

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
        <section>
            <h2>Posts:</h2>
            <Table bgcolor="mistyrose" hover>
                <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((post) => (
                        <tr key={post.id} onClick={() => setPostId(post.id)}>
                            <td>{post.title}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </section>

    )
}

export default Posts