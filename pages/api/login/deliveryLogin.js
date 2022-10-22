export default function deliveryLogin(req,res){
    const {method, body} = req;
    console.log(method)
    if (method === "POST"){
        console.log(body)
        if (body.username == "delivery" && body.password  == "password"){
            res.status(200).send(true);
        }else{
            res.status(300).send(false);
        }
    }else res.status(403).send("Not allowed");
}