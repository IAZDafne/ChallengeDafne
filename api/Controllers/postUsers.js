const User = require('../dataBase/models/Users');
const jwt = require('jsonwebtoken');


exports.postUser = async (req, res) => {

    const { first_name, last_name,  password,picture, email ,token} = req.body;
    console.log('hola soy user', first_name, last_name,  password,picture, email,token )

    try {

        const [user, created] = await User.findOrCreate({
            where: {
                email
            },
            defaults: {
                first_name, last_name, password,
                 picture, email, token
                
                }
        });

        if (created) {
            return res.json({
                msg: 'User created!!!',
                user
            });
        } else {
            return res.json({ msg: `Este email ya etas esta en la base  ${email}` })
        }

    } catch (error) {
        console.log(error)
        res.json({ msg: `Porfavor checa tu información ` });
    }
}




exports.loginUser = async (req, res) => {
    const { type, email, password } = req.body;
    if (type === 'email'){
        User.findOne({
            where: {    
                email,
                password
            }
        }).then(user =>{
            if (user) return res.json({
                msg: true,
                id: user.id,
                fullName: `${user.first_name} ${user.last_name}`,
                username: user.username,
                picture: user.picture,
                type: 'user'
            });
            else return res.json({ msg: false })
        }).catch(error => {
            console.log(error);
            res.json({ msg: 'error' });
        })
    } else
        User.findOne({
            where: {
                email
            }
        }).then(user => {
            if (user) return res.json({
                msg: true,
                id: user.id,
                fullName: `${user.first_name} ${user.last_name}`,
                picture: user.picture,
                type: 'user'
            });
            else return res.json({ msg: false })
        }).catch(error => {
            console.log(error);
            res.json({ msg: 'error' });
        })
}