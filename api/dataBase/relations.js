const User = require('../dataBase/models/Users')
const  Post =require('../dataBase/models/Post')



User.hasMany (Post)
Post.belongsTo(User)

