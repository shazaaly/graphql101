const {UserList} = require('../fakeData');

const resolvers = {
    Query: {
        users(){

            return UserList

        },
        user(_, args){
            const user =  UserList.find(user=> user.id === Number(args.id))
            return user

        }
    }


}

module.exports  = {resolvers}