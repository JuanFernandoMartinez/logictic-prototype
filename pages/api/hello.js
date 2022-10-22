import query from "../../repository/consult";
export default async function handler(req,res){
    let response = await query("SELECT * FROM usuario");
    res.send(response)
}