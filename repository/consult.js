import db from "./database";

async function query(msg){
    db.connect();

    let response = await db.query(msg);
    db.end();

    return response.rows

}

export default query;