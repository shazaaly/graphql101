import {
  ApolloClient,
  ApolloCache,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

function App() {
  const client = ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:3001/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">"Hello GraphQl"</div>
    </ApolloProvider>
  );
}

export default App;
