import mongoose from 'mongoose';
import mongooseGridfs from 'mongoose-gridfs';


const opts = {
	autoIndex: false
}

const connection = mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`, opts)

.then((mongo, options) => {

	console.log('The mongodb is connected');
})

.catch(err => {
	throw err;
})

export default mongoose;
