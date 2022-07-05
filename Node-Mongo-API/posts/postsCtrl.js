const Post = require("./postsModel")
//Create a post
const create = (req, res) => {
    const newPost = new Post({ ...req.body })
    newPost.save((error) => {
        if (error) {
            console.log(error);
        } else res.status(201).json({ message: "new post created" })
    })

}
//Get all posts
const getAll = (req, res) => {
    Post.find()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((error) => res.status(500).json({ message: error }))
}

//Get post by title (query string search)
const getByTitle = (req, res) => {
    const { query } = req.params;
    Post.find({ $text: { $search: query } }, (error, result) => {
        if (error) return res.sendStatus()
        result.length ? res.status(200).send(result) : res.status(404).send("post not found")
    })
}



//Get post by id
const getOne = (req, res) => {
    const { id } = req.params
    res.send(`List a specific document by its ID: ${id}`)
}

//Modify post by id
const modifyOne = (req, res) => {
    const { id } = req.params
    res.send(`Modify a specific document by its ID: ${id}`)
}

const deleteOne = (req, res) => {
    const { id } = req.params
    res.send(`Delete a specific document by its ID: ${id}`)

}
module.exports = { create, getAll, getByTitle, getOne, modifyOne, deleteOne }