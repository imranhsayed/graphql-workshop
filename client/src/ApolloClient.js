import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes';
import { clientConfig } from "./clientConfig";

const fragmentMatcher = new IntrospectionFragmentMatcher({
	introspectionQueryResultData
});

const cache = new InMemoryCache({ fragmentMatcher });

export const client = new ApolloClient({
	cache,
	link: new HttpLink( { uri: `${clientConfig.wordPressSiteUrl}/graphql` } ),
});

// const client = new ApolloClient({
// 	cache,
// 	uri: `${clientConfig.wordPressSiteUrl}/graphql`,
// });
export default client;
