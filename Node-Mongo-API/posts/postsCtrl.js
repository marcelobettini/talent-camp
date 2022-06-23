//Create a post
const create = (req, res) => {
    res.send("Add document")
}
//Get all posts
const getAll = (req, res) => {
    res.send("List all documents")
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
module.exports = { create, getAll, getOne, modifyOne, deleteOne }