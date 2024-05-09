const {UserList, MovieList} = require('../fakeData');

const resolvers = {
    Query: {
        users(){

            return UserList

        },
        user(_, args){
            const user =  UserList.find(user=> user.id === Number(args.id))
            return user

        },
        userFavourateMovies(){

        },

        movies(){
            return MovieList
        },

        movie(_, args){
            const movie = MovieList.find(movie => movie.name === args.name)
            return movie

        }
    }


}

module.exports  = {resolvers}