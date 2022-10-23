
import db from "../../../repository/database";
export default async function handler(req,res){
    
   const {body,method} = req;
    
   if (method === "POST"){
    db.connect();
    let response = await db.query("Select id,description,precio from pedido where status = $1 and user_id = $2",['no entregado',body.cedula]);
    db.end();
    res.send(response.rows);
   }
}