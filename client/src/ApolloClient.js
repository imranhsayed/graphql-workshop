import ApolloClient from 'apollo-boost';

import { clientConfig } from "./clientConfig";

const client = new ApolloClient({
	uri: `${clientConfig.wordPressSiteUrl}/graphql`,
});
export default client;
