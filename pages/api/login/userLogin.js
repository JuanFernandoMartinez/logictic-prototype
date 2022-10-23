import db from "../../../repository/database";

export default async function userLogin(req,res){
    const {method,body} = req;

    if (method === "POST"){
        
        let response = await db.query("select * from usuario where username = $1 and password = $2",[body.username, body.password])
        
        if (response.rows.length == 0){
            res.send(false);
        }else{
            res.send(response.rows[0].cedula)
        }
    }else{
        res.status(403).send("False");
    }
}