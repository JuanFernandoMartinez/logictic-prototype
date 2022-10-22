import { TextField } from "@mui/material"
import React from "react"
import Style from '../../styles/Home.module.css'
import Button from '@mui/material/Button';


export default function loginUser(){
    return (
        <div className={Style.main} >
            <form className = {Style.coolcontainer}>
                <h1 className = {Style.title}> Sing In</h1>
                <div  className = {Style.subcontainer}>
                <TextField type="text" placeholder = "Username" className = {Style.coolsubcontainer}></TextField>
                </div>
                <br/>
                <div>
                <TextField type= "password" placeholder = "Password" className = {Style.coolsubcontainer}></TextField>
                </div>
                <br/>
                <div>
                   <Button variant="contained">Let's Go</Button>
                </div>
            </form>
        </div>
    )
}