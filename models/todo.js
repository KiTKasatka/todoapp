const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todolistSchema = new Schema({
    // name:{
    //     type:String,
    //     required:true,
    //     unique:true
    // },
    // index:{
    //     type:number,
    //     required: true
    // },

    userID: String,
    list1: Array,
    list2: Array
   })

module.exports = mongoose.model('todolist', todolistSchema)