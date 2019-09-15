const graphql = require( 'graphql' );

const {
	      GraphQLObjectType,
	      GraphQLString,
	      GraphQLSchema
      } = graphql;

// Dummy Data
const posts = [
	{ id: '1', title: 'Lord of the Rings', content: 'Awesome book' },
	{ id: '2', title: 'Avengers', content: 'Awesome movie' },
	{ id: '3', title: 'Harry Potter', content: 'Awesome book' },
];

// Define an object type called 'PostType'.
const PostType = new GraphQLObjectType({
	name: 'Post',
	fields: () => ({
		id: { type: GraphQLString },
		title: { type: GraphQLString },
		content: { type: GraphQLString }
	})
});

// Define RootQuery
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		post: {
			type: PostType,
			args: { id: { type: GraphQLString } },
			resolve( parent, args ) {
				// Get the data.
				return posts.find( post => ( post.id === args.id ) );
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
}) ;
