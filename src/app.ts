import express from 'express'
import graphqlHttp from 'express-graphql';
import schema from './schema/schema'
import expressPlayground from 'graphql-playground-middleware-express'
import './mongoose/mongoose'

const app: express.Application = express();
const PORT: number = 4000;

app.use('/graphql', graphqlHttp({
    schema,
    graphiql: true
}))

app.use('/playground', expressPlayground({
    endpoint: '/graphql'
}))

app.listen(PORT, () => console.log(`Graphql server listening on port ${PORT}`))
