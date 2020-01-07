const UserService = require('../services/userServices');

//Get Single User Info
exports.getUser = async (req, res, next) => {
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try {
        var user = await UserService.getUser(req.params.id, page, limit)
        return res.status(200).json({ status: 200, data: user, message: "Successfully retrieved user"});
    }catch(e){
        return res.status(400).json({ status: 400, message: e.message});
    }
}

//Post Single User
exports.createUser = async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const newUser = await UserService.createUser(email, password);
        return res.status(200).json({ status: 200, data: newUser, message: "Successfully created new user"});
    }catch(e){
        return res.status(400).json({ status: 400, message: e.message});
    }
}