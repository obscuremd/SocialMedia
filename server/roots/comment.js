const router = require("express").Router();
const { response } = require("express");
const Comment = require("../models/Comment");
const Post = require("../models/Post");
const User = require("../models/User");

router.post('/:id',async(req, res) =>{
    try {
        const newComment = new Comment ({
            postId: req.params.id,
            text: req.body.text,
            userId: req.body.userId,
        })

        const savedComment = await newComment.save()

        res.status(200).json('comment saved' + savedComment)
    } catch (error) {
        res.status(500).json(error)
    }
    
})

router.get('/:id',async(req, res) =>{
    try {
        const comment = await Comment.findById(req.params.id)
        if (comment.postId === req.body.postId) {
            res.status(200).json(comment)
        } else {
            res.status(500).json('comment not found')
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:id', async(req, res) =>{
    try {
        const comment = await Comment.findById(req.params.id)
        if (comment.userId === req.body.userId) {
           res.status(200).json('comment deleted') 
        } else {
            res.status(500).json('you can only delete your comment')
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router