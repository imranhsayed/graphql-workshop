const express = require( 'express' );

const app = express();

app.listen( 5000, () => {
	console.warn( 'Listening on port 5000' );
} );
