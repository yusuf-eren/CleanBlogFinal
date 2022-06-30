const Post = require('../models/Post')

exports.aboutPage = (req,res)=>{
    res.render("about")
}

exports.addPostPage = (req,res)=>{
    res.render("add_post")
}

exports.editPostPage = async(req,res)=>{
    const post = await Post.findById(req.params.id)
    res.render("edit_post",{
        post:post
    })
}

exports.otherPage = (req,res)=>{
    res.send('<h2> 404 Not Found</h2>')
}