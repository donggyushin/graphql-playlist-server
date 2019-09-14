import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/graphql-playlist', { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, `connection error:`));
db.once('open', () => console.log(`Mongoose database connected!`))

export default mongoose;