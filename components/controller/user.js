const UserModel = require('../models/userModel');
const { isEmpty } = require('../validate')
module.exports = {

    async registerroute(req, res) {
        if (!isEmpty(req.body)) {

            if (req.body.name != '' && req.body.email != '' && req.body.password != '') {


                const usersave = new UserModel({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
                const datas = await UserModel.find({ email: req.body.email })
                if (datas.length == 0) {
                    usersave.save()
                        .then(savedUser => {
                            return res.status(200).send({
                                "code": 0,
                                "message": "User saved successfully"
                            })
                        })
                        .catch(error => {
                            return res.status(200).send({
                                "code": 1,
                                "message": error
                            })
                        });
                } else {
                    return res.status(200).send({
                        "code": 1,
                        "message": "Email ID Already Use"
                    })
                }

            } else {
                return res.status(200).send({
                    "code": 1,
                    "message": "Invalid Data"
                })
            }

        } else {
            return res.status(200).send({
                "code": 1,
                "message": "Invalid Data"
            })
        }
    },


    async signinroute(req, res) {
        if (!isEmpty(req.body)) {

            console.log(req.body)
            if (req.body.email != '' && req.body.password != '') {




                const datas = await UserModel.find({ email: req.body.email })

                console.log(datas[0]['password'])
                if(datas[0]['password'] != undefined){
                    if (datas[0]['password'] == req.body.password) {

                        return res.status(200).send({
                            "code": 0,
                            "message": "Logged In  successfully"
                        })
                    } else {
                        return res.status(200).send({
                            "code": 1,
                            "message": "Invalid Login Details"
                        })
                    }
                }else{
                    return res.status(200).send({
                        "code": 1,
                        "message": "SomeThing Went Wrong"
                    })
                }
               

            } else {
                return res.status(200).send({
                    "code": 1,
                    "message": "Invalid Data"
                })
            }

        } else {
            return res.status(200).send({
                "code": 1,
                "message": "Invalid Data"
            })
        }
    }
}


