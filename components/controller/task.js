const TaskModel = require('../models/TaskModel');
const { isEmpty } = require('../validate')
module.exports = {

    async createtask(req, res) {
        
        if (!isEmpty(req.body)) {

            if (req.body.project_name != '' && req.body.Start_date != '' && req.body.end_date != ''&& req.body.project_manager != ''&& req.body.descripition != '') {


                const projectsave = new TaskModel({
                    project_name: req.body.project_name,
                    project_status: 'pending',
                    Start_date: req.body.Start_date,
                    end_date: req.body.end_date,
                    project_manager: req.body.project_manager,
                    team_member: req.body.team_member,
                    descripition: req.body.descripition,
                })
                  
                    projectsave.save()
                        .then(projectSave => {
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
}
