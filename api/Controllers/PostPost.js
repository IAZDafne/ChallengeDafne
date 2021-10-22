const Post = require('../dataBase/models/Post');

exports.post = async (req,res) => {
    const { name, description, user_id, dificulty,picture } = req.body;
     console.log('holas soy post',name,description,user_id,dificulty,picture)
    try {
        const insert = await Post.create({
            name,
            description,
            dificulty,
            picture

        });

        insert.setUser(user_id);
        

        res.json({
            msg:'Post Creado',
            insert
    })
    } catch (error) {
        console.log(error)
        res.json({msg:'error'})
    }
}