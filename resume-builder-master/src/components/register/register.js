import react, {useState} from "react";
import "./register.css"
import axios from "axios"
// import { useNavigate } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
const Register = ()=>{

    // const navigate = useNavigate()
    const history = useHistory();
    //for update input field
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })
    
    //get value from input
    const handleChange=e=>{
        const{name,value} =e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = () =>{
        const {name,email,password,reEnterPassword}=user
        //validation
        if(name && email && password && (password===reEnterPassword)){
            
            axios.post("http://localhost:9002/register",user)
            .then(res => alert(res.data.message),
            history.push("/login")
        )}
        else{
            alert("invalid input")
        }
    }

    return(
        <div className="register">
            
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
            <input type="text" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>Or</div>
            <div className="button" onClick={()=>history.push("/login")}>Login</div>
        </div>
    )
}

export default Register