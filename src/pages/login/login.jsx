import React, { useContext } from 'react'
import "./login.css"
import { useNavigate } from "react-router-dom"
import { StateContext } from '../../context'
function Login() {
    const {  setUser } = useContext(StateContext)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleLogin = () => {
        navigate("/plan")
    }
    return (
        <div className='login'>
            <h2>Enter your email and password</h2>
            <form action="" onSubmit={handleLogin}>
                <input onChange={handleChange} name='email' type="email" required placeholder='email' />
                <input onChange={handleChange} name='password' type="password" required placeholder='password' />
                <button>Next</button>
            </form>
        </div>
    )
}

export default Login