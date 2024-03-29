const express = require( 'express' );
var cors = require('cors');

const graphqlHTTP = require( 'express-graphql' );

const schema = require( './schema' );

const app = express();
app.use( cors() );

// Add the graphqlHTTP() middleware, to interact with GraphQL
app.use( '/graphql', graphqlHTTP({
	schema,
	graphiql: true
}) );

app.listen( 5000, () => {
	console.warn( 'Listening on port 5000' );
} );
