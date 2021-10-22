const User = require('../dataBase/models/Users');
const Post = require('../dataBase/models/Post');




exports.getUserByID = async (req,res) => {

    try {
        const { id } = req.params;

        const consult = await User.findOne({
            where: {
                id
            },
            include:Post
        })

        if(!consult) return res.json({msg:`No Encuentro su: ${id}`})

        res.json(consult)
        
    } catch (error) {
        console.log(error);
        res.json({msg:'Error!!'})
    }
}