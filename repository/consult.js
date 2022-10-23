import db from "./database";

async function query(msg, array){
    db.connect();

    let response = await db.query(msg,array);
    db.end();

    return response.rows

}

export default query;