const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, default: Date.now },
    comments: [{ body: String, date: Date }],
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
},
    {
        timestamps: true //incorpora los campos createdAt y updatedAt
        // versionKey: false //esta línea elimina el campo __v de cada documento
    });

PostSchema.set("toJSON", {
    transform(doc, ret) {
        delete ret.__v;
        ret.uid = ret._id;
        delete ret._id
    }
})
PostSchema.index({ title: 'text' }) //crea un índice para "encontrar por título" que se va a lanzar en el endpoint: posts/find/:query


//todo create an index (search by title)

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;