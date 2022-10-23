import db from "../../../repository/database";
export default async function handler (req,res){
   if (req.method === "POST"){
    let saldo = await db.query("select * from usuario where cedula = $1",[req.body.cedula]);

    res.send(saldo.rows[0].saldo)
   }else{
    res.status(403).send(false);
   }
}