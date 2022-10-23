
import db from "../../../repository/database";
export default async function handler(req,res){
    
   const {body,method} = req;
    
   if (method === "POST"){
    
    let response = await db.query("Select id,description,precio from pedido where status = $1 and user_id = $2",['no entregado',body.cedula]);
    let rs =  await db.query("Select saldo from usuario where cedula = $1",[body.cedula])
    let resto = []
    response.rows.map(e =>{
      resto.push(e.id +" , "+ e.description+ " , "+e.precio+ " , "+rs.rows[0])
    })
    res.send(resto);
   }
}