module.exports ={
    mongoURI:'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false',
    jwt: 'dev-jwt'
}
/*if(process.env.NODE_ENV === 'production'){
    module.exports = require('./keys.prod')
} else {
    module.exports = require('./keys.dev')
}*/
// module.exports ={
//     mongoURI:'mongodb+srv://ReWhite:senefera@fullstack-qfzip.mongodb.net/test?retryWrites=true&w=majority',
//     jwt: 'dev-jwt'
// }