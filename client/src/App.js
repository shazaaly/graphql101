import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import DisplayData from "./components/DisplayData";
import DisplayMovies from "./components/DisplayMovies";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:5000/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>List Of Users</h1>
        <DisplayData />

        <h1>List Of Movies</h1>
        <DisplayMovies />
      </div>
    </ApolloProvider>
  );
}

export default App;
