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
exports.getToken= async (req, res) => {
    const {email,password} = req.query;
    console.log( 'hola soy',email)
    const user=await User.findOne({
        where:{
            email
        }
    });
    bcrypt.compare(password, user.password, function(err, result) {
      if(result){
        res.status(200).json({token:user.token,firstName:user.firstName,lastName:user.lastName,picture:user.picture});
      }
      else{
        res.status(404).json(err)
      }
  });
  }
  