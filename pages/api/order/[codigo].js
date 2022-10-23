import db from "../../../repository/database";
export default async  function handler (req,res){
    const {body, method} = req;

    if (method === "POST"){
        
        let product = await db.query("Select * from pedido where id = $1",[parseInt(req.query.codigo)])
        let user = await db.query("Select * from usuario where cedula = $1",[body.cedula])
        
        if (product.rows[0].precio <= user.rows[0].saldo){
        let nuevoSaldo =  user.rows[0].saldo-product.rows[0].precio
        await db.query("Update usuario set saldo = $1 where cedula = $2",[nuevoSaldo,body.cedula])
        await db.query("update pedido set status = $1  where id = $2",['entregado',parseInt(req.query.codigo)])
        
            res.send(true);
        }else{
            res.send(false);
        }
    }
}