export default function userLogin(req,res){
    const {method,body} = req;

    if (method === "POST"){
        if (body.username == "user" && body.password == "password"){
            res.status(200).send(true);
        }
    }else{
        res.status(403).send("Not allowed");
    }
}