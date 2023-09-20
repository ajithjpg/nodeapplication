const UserModel = require('../models/userModel');

module.exports = {

    async registerroute(req, res) {

        const usersave = new UserModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        usersave.save()
            .then(savedUser => {
                return res.status(200).send({
                    "code":0,
                    "message":"User saved successfully"
                })
            })
            .catch(error => {
                return res.status(200).send({
                    "code":1,
                    "message":error
                })
            });
    },


    async signinroute(req, res) {
        console.log('req')
    }
}


