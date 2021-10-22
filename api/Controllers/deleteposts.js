const Post= require('../dataBase/models/Post');
const User = require('../dataBase/models/Users');

exports.deleteComment = async (req, res) => {

    const { postId } = req.body

    if (postId) {
        try {
            await Post.destroy({
                where: {
                    id: postId
                },
            })
            res.send('Comentario Eliminado')

        } catch (error) {
            console.log('Se produjo un error', error)
            res.json({ msg: 'error' })
        }

    }
    else console.log('No recibi datos completos para eliminar comentario.')
}