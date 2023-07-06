import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api-sa-east-1.hygraph.com/v2/cljq6c6rg0n4q01un6ri1doty/master",
    useGETForQueries: true,
  }),
  cache: new InMemoryCache(),
});
  