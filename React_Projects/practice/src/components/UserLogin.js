import { useState } from "react";
import axios from "axios";

const UserLogin = ()=> {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const userLogin = (e)=> {
        e.preventDefault(); // Stops the page form being refresh
        const userData= {username, password}; // stores in json format
        axios.post("http://localhost:80/user/login", userData).then((result)=> {
            setMsg(result.data.message);
            if(result.data.token) {
                localStorage.setItem('token', result.data.token);
            }
        });
    }
    return(
        <div>
        <div className="text-center h1">Fill Up Your Details</div>
        <form>
            <div className="text-center h3">{msg}</div>
            <div className="form-group">
                <label for="username">Username</label>
                <input type="text" className="form-control" id="username"  placeholder="Enter a username" onChange={(e)=>setUsername(e.target.value)}/>
            </div>                
            <div className="form-group">
                <label for="password">Password</label>
                <input type="text" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>  
            <button type="btn" className="btn btn-primary mt-2 text-center" onClick={userLogin}>Submit</button>
        </form>
        </div>
    )
}

export default UserLogin;