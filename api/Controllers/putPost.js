const Post = require('../dataBase/models/Post');

exports.putController = async (req, res) => {
  
    const { id } = req.params;
    const { name, description, user_id, dificulty,picture } = req.body;
     console.log('hola soy modificacion',name, description, user_id, dificulty,picture)
 
    try {
        const result = await Post.update({ 
            name, 
            description,
             user_id, 
             dificulty,
             picture
        
            

        },{
            where: {
                 id
            }
        })


        res.json({result:result,msg:'cambiado'})
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

