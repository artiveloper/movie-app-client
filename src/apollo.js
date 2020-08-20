import ApolloClient from 'apollo-boost'
import MovieResolver from './resolvers/MovieResolver';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    resolvers: MovieResolver
})

export default client
