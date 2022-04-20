import { useState } from "react"
import axios from "axios"


const App = () => {
    const [login, setLogin] = useState('')
    const [passw, setPassw] = useState('')

    const api = axios.create({
        baseURL: "http://localhost:4001"
    })
    
    const insertPassw = (e)=>{
        setPassw(e.target.value)
    }
    const insertLogin = (e) => {
        setLogin(e.target.value)
    }

    const saveButFunc = () => {        
        api.post('/auth', { login: login, password: passw }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        }) 
    }

    return (<div>
        <h1>Login</h1>
        login
        <input onChange={insertLogin}></input>
        password
        <input onChange={insertPassw}></input>
        <button onClick={saveButFunc}>Login</button>
    </div>)
}

export default App