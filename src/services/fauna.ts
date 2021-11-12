import { Client } from 'faunadb';

export const fuana = new Client({
  secret: process.env.FAUNADB_KEY
})