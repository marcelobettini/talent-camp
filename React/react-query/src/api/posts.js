import { API } from "./API";

export const getPosts = async () => {
    const { data } = await API.get(`/posts`)
    return data
}

export const getPostById = async (postId) => {
    const { data } = await API.get(`/posts/${postId}`)
    return data

}