import { ApolloServer } from "apollo-server";
import {readFile} from 'fs/promises';
import { resolvers } from "./resolvers.js";

const typeDefs = await readFile("./schema.graphql" , "utf-8")

const server = new ApolloServer({typeDefs , resolvers});
const {url} = await server.listen({port:9000})
console.log("server started and url is:",url);