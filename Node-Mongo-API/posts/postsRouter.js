const router = require("express").Router()
const posts = require("./postsCtrl")

//Endpoints definition
// add new document (record if SQL) to a collection (table if SQL)
router.post('/', posts.create)

//get all documents from a collection
router.get('/', posts.getAll)

//get one document by its id
router.get('/:id', posts.getOne)

//Get document by query (title)
router.get("/find/:query", posts.getByTitle)

//modify a document from a collection
router.patch('/:id', posts.modifyOne)

//delete a document from a collection
router.delete('/:id', posts.deleteOne)

module.exports = router