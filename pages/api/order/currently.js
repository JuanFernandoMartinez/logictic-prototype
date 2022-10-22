
import query from "../../repository/consult";
export default async function handler(req,res){
    let response = await query("Select * from pedidos where  status = $2",["no entregado"]);
    res.send(response.rows);
}