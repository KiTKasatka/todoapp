const ToDoModel = require('../models/todo.js')
const errorHandler = require('../utils/errorHandler')

module.exports.save = async function (req, res) {
    
    try {
        const todo = await ToDoModel.update({
            userID: req.body.userID
        },{
            user: req.body.userID,
            list1: req.body.list1,
            list2: req.body.list2,
        },{
            upsert:true
        })
    }catch (e){
        errorHandler(res,e)
    }
}

module.exports.getAll = async function (req, res) {
    try{
        const todo = await ToDoModel.find({userID: req.query.userID})
        res.json(todo);
    }catch (e) {
        errorHandler(res,e)
    }
}