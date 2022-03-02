const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");


/////......for create post........//////

router.post("/",async (req,res) =>{

    const newPost = new Post(req.body);
    try {
        const savedPost = await  newPost.save();
        res. status(200).json(savedPost);
    } catch (error) {
        res.status(404).json(error)
    }
    
    
});


////.......for update post..../////

router.put("/:id",async (req,res) =>{
    try {
        const post =await Post.findById(req.params.id)
        if (post.username === req.body.username){

            try {

                 const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                     $set:req.body
                 },{new:true})

                 res.status(200).json(updatedPost)
            

            } catch (error) {
                res. status(404).json(error);
            }

        }else{
            res.status(405).json(" You can update your post")
        }

        

    } catch (error) {

        res.status(404).json(error)
        
    }
    
});



/////////........for delete post.......//////



router.delete("/:id",async (req,res) =>{
    try {
        const post =await Post.findById(req.params.id)
        if (post.username === req.body.username){

            try {

                 await post.delete()
                 res.status(200).json("post deleted sucessfully")

            } catch (error) {
                res. status(404).json(error);
            }

        }else{
            res.status(405).json(" You can delete your post")
        }

        

    } catch (error) {

        res.status(404).json(error)
        
    }
    
});
//////.......to get the user.......//////

router.get("/:id", async(req,res) =>{
    try {

        const post = await Post.findById(req.params.id);
        res. status(200).json(post)
        
    } catch (error) {
        res.status(404).json(error)
    }
})


///////..........for get all post........///////

router.get("/", async(req,res) =>{
    const username = req.query.user
    const cateName = req.query.cate
    try {

        let posts;
        if(username){
            posts = await Post.find({username})
        }else if(cateName){
            posts = await Post.find({catagories:{
                $in:[cateName]
            }})
        }else{
          posts =await Post.find()
        }

        res.status(200).json(posts)
        
    } catch (error) {
        res.status(404).json(error)
    }
})

module.exports = router