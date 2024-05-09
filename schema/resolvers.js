const { UserList, MovieList } = require("../fakeData");

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
    user(_, args) {
      const user = UserList.find((user) => user.id === Number(args.id));
      return user;
    },

    movies() {
      return MovieList;
    },

    movie(_, args) {
      const movie = MovieList.find((movie) => movie.name === args.name);
      return movie;
    },
  },

  User: {
    favourateMovies() {
      const movies = MovieList.filter(movie => movie.yearOfPublication >= 2000);
      return movies;
    },
  },
};
module.exports = { resolvers };
