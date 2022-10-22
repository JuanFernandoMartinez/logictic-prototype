import { Client } from "pg";

var db;

if (!db){
    db = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      });
}


export default db;