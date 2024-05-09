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
      const movies = MovieList.filter(
        (movie) => movie.yearOfPublication >= 2000
      );
      return movies;
    },
  },

  Mutation: {
    createUser(_, args) {
      const user = args.input;
      const lastId = UserList.length - 1;
      user.id = lastId;
      UserList.push(user);
      return user;
    },

    updateUserName(_, args) {
      const { newName, id } = args.input;
      const user = UserList.find((user) => user.id === Number(id));
      if (!user) {
        throw new Error(`User with id ${id} not found`);
      }
      user.username = newName;
      return user;
    },
  },
};
module.exports = { resolvers };
