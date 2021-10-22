const Post = require('../dataBase/models/Post');
const User = require('../dataBase/models/Users');


exports.getAllComments = async (req, res) => {

    const { id } = req.query;
    let consult;
    console.log('hola soy consulta',consult )
    if (id) {
        try {
            consult = await Post.findAll({
                where: {
                    userId: id
                },
                include: User,
            })

        } catch (e) {
            console.log(e);
            res.json({ msg: 'error!!' })
        }
    }
    else {
        try {
            // Fetches all comments
            consult = await Post.findAll({
                include: User,
            })

        } catch (e) {
            console.log(e);
            res.json({ msg: 'error!!' })
        }
    }

  


        return res.json(consult)
    }
    

